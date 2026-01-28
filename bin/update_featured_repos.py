#!/usr/bin/env python3
"""
Fetch and update featured repository stats from GitHub API.
This script is run by GitHub Actions to keep repo stats current.
"""

import os
import yaml
from datetime import datetime
from urllib.request import urlopen, Request
from urllib.error import HTTPError
import json

# Featured repos to track (in display order)
FEATURED_REPOS = [
    "choderalab/openmmtools",
    "choderalab/pymbar",
    "choderalab/software-development",
    "choderalab/espaloma",
    "choderalab/modelforge",
    "choderalab/mtenn",
]

# Default topics if GitHub doesn't return any
DEFAULT_TOPICS = {
    "openmmtools": ["molecular-dynamics", "openmm", "simulation"],
    "pymbar": ["free-energy", "thermodynamics", "statistical-mechanics"],
    "software-development": ["best-practices", "tutorial", "documentation"],
    "espaloma": ["machine-learning", "force-field", "graph-neural-network"],
    "modelforge": ["neural-networks", "potentials", "deep-learning"],
    "mtenn": ["drug-discovery", "neural-networks", "pytorch"],
}

OUTPUT_FILE = "_data/featured_repos.yml"


def fetch_repo_data(full_name: str) -> dict | None:
    """Fetch repository data from GitHub API."""
    url = f"https://api.github.com/repos/{full_name}"
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "choderalab-website-updater",
    }

    # Use GitHub token if available (higher rate limit)
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"token {token}"

    try:
        request = Request(url, headers=headers)
        with urlopen(request, timeout=30) as response:
            return json.loads(response.read().decode("utf-8"))
    except HTTPError as e:
        print(f"Error fetching {full_name}: {e.code} {e.reason}")
        return None
    except Exception as e:
        print(f"Error fetching {full_name}: {e}")
        return None


def get_license_name(license_info: dict | None) -> str:
    """Extract license name from GitHub API response."""
    if not license_info:
        return "Unknown"
    spdx_id = license_info.get("spdx_id", "")
    if spdx_id and spdx_id != "NOASSERTION":
        return spdx_id
    return license_info.get("name", "Unknown")


def main():
    print("Fetching featured repository data from GitHub...")

    repos = []
    for full_name in FEATURED_REPOS:
        print(f"  Fetching {full_name}...")
        data = fetch_repo_data(full_name)

        if data:
            repo_name = data["name"]
            topics = data.get("topics", [])

            # Use default topics if none returned
            if not topics:
                topics = DEFAULT_TOPICS.get(repo_name, [])

            # Limit to 3 topics for display
            topics = topics[:3]

            # Handle language - use "Docs" for repos without code
            language = data.get("language")
            if not language:
                language = "Docs"

            repo = {
                "name": repo_name,
                "full_name": full_name,
                "description": data.get("description", ""),
                "html_url": data.get("html_url", f"https://github.com/{full_name}"),
                "language": language,
                "stargazers_count": data.get("stargazers_count", 0),
                "forks_count": data.get("forks_count", 0),
                "license": get_license_name(data.get("license")),
                "topics": topics,
            }
            repos.append(repo)
            print(f"    ✓ {repo_name}: {repo['stargazers_count']} stars, {repo['forks_count']} forks")
        else:
            print(f"    ✗ Failed to fetch {full_name}")

    if not repos:
        print("No repositories fetched successfully. Aborting.")
        return 1

    # Build output data
    output = {
        "repos": repos,
        "last_updated": datetime.now().strftime("%Y-%m-%d"),
    }

    # Write YAML file
    print(f"\nWriting {OUTPUT_FILE}...")
    with open(OUTPUT_FILE, "w") as f:
        f.write("# Featured repositories for the carousel\n")
        f.write("# Auto-updated by GitHub Actions - do not edit manually\n")
        yaml.dump(output, f, default_flow_style=False, sort_keys=False, allow_unicode=True)

    print(f"✓ Successfully updated {len(repos)} repositories")
    return 0


if __name__ == "__main__":
    exit(main())

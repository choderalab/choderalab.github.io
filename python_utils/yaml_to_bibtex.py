"""
Short script for parsing yaml files into bibtex entries.
"""
import yaml
import bibtexparser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bibdatabase import BibDatabase
import click
import dataclasses
from dataclasses import dataclass, field
from typing import Dict, Optional, List, Any
import re

def infer_entry_type(entry: Dict[str, Any]) -> str:
    t = (entry.get("type") or "").lower()
    if t:
        return t
    if entry.get("journal") or entry.get("volume") or entry.get("number"):
        return "article"
    if entry.get("booktitle") or entry.get("conference"):
        return "inproceedings"
    if entry.get("publisher") and entry.get("isbn"):
        return "book"
    if entry.get("institution") or entry.get("techreport"):
        return "techreport"
    return "misc"

def slugify(s: str) -> str:
    s = s.lower().strip()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_-]+", "-", s)
    return s

def make_key(entry: Dict[str, Any]) -> str:
    if entry.get("id"):
        return str(entry["id"])
    title = (entry.get("title") or entry.get("name") or "")[:200]
    year = str(entry.get("year") or "")
    base = slugify(title)[:40] or "paper"
    return f"{base}{year}" if year else base

@dataclass
class Paper:
    id: Optional[str] = None
    title: Optional[str] = None
    authors: List[str] = field(default_factory=list)
    year: Optional[str] = None
    journal: Optional[str] = None
    booktitle: Optional[str] = None
    volume: Optional[str] = None
    number: Optional[str] = None
    pages: Optional[str] = None
    publisher: Optional[str] = None
    address: Optional[str] = None
    doi: Optional[str] = None
    url: Optional[str] = None
    note: Optional[str] = None
    abstract: Optional[str] = None
    entry_type: Optional[str] = None
    isbn: Optional[str] = None
    institution: Optional[str] = None
    conference: Optional[str] = None
    extra: Dict[str, Any] = field(default_factory=dict)

    @classmethod
    def from_mapping(cls, m: Dict[str, Any]) -> "Paper":
        # map common keys to dataclass
        known = {
            "id", "title", "year", "journal", "booktitle", "volume", "number",
            "pages", "publisher", "address", "doi", "url", "note", "abstract",
            "type", "entry_type", "isbn", "institution", "conference"
        }
        extras = {k: v for k, v in m.items() if k not in known and k.lower() not in known}
        return cls(
            id=str(m.get("id")) if m.get("id") else None,
            title=m.get("title") or m.get("name"),
            authors=m.get("authors"),
            year=str(m.get("year")) if m.get("year") is not None else None,
            journal=m.get("journal"),
            booktitle=m.get("booktitle") or m.get("conference"),
            volume=m.get("volume"),
            number=m.get("number"),
            pages=m.get("pages"),
            publisher=m.get("publisher"),
            address=m.get("address"),
            doi=m.get("doi"),
            url=m.get("url"),
            note=m.get("note"),
            abstract=m.get("abstract"),
            entry_type=m.get("type") or m.get("entry_type"),
            isbn=m.get("isbn"),
            institution=m.get("institution"),
            conference=m.get("conference"),
            extra=extras,
        )

    def make_key(self) -> str:
        if self.id:
            return self.id
        base = slugify(self.title or "")[:40] or "paper"
        return f"{base}{self.year or ''}"

    def to_bibentry

@click.command()
@click.argument("input", type=click.File("r"))
@click.argument("output", type=click.File("w"))
def yaml_to_bibtex(input, output):
    """Convert a YAML file of papers to a BibTeX file."""
    data = yaml.safe_load(input)
    papers = [Paper.from_mapping(entry) for entry in data]

    print(papers[0])


if __name__ == "__main__":
    yaml_to_bibtex()
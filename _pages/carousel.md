---
layout: page
title: Featured Software
permalink: /carousel/
nav: false
images:
  slider: true
---

Explore our featured open-source software projects for computational chemistry and molecular simulation.

<div class="carousel-wrapper">
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" style="--swiper-navigation-color: var(--global-theme-color); --swiper-pagination-color: var(--global-theme-color);">

{% for repo in site.data.featured_repos.repos %}
  <swiper-slide>
    <div class="card repo-card">
      <div class="card-body d-flex flex-column">
        <div class="d-flex align-items-center mb-2">
          <i class="fa-brands fa-github fa-lg me-2"></i>
          <h4 class="card-title mb-0"><a href="{{ repo.html_url }}" target="_blank">{{ repo.name }}</a></h4>
        </div>
        <p class="card-text flex-grow-1">{{ repo.description }}</p>
        <div class="repo-topics mb-2">
          {% for topic in repo.topics %}
          <span class="badge topic-badge">{{ topic }}</span>
          {% endfor %}
        </div>
        <div class="repo-stats">
          {% if repo.language == "Docs" %}
          <span class="badge bg-secondary me-2">{{ repo.language }}</span>
          {% else %}
          <span class="badge bg-primary me-2">{{ repo.language }}</span>
          {% endif %}
          <span class="stat-item"><i class="fa-solid fa-star"></i> {{ repo.stargazers_count }}</span>
          <span class="stat-item"><i class="fa-solid fa-code-fork"></i> {{ repo.forks_count }}</span>
          <span class="stat-item"><i class="fa-solid fa-scale-balanced"></i> {{ repo.license }}</span>
        </div>
      </div>
    </div>
  </swiper-slide>
{% endfor %}

</swiper-container>
</div>

<p class="text-muted small mt-3">Last updated: {{ site.data.featured_repos.last_updated }}</p>

<style>
  .carousel-wrapper {
    padding: 0 3rem;
  }
  swiper-slide {
    padding: 1rem 0.5rem 2rem 0.5rem;
  }
  .repo-card {
    min-height: 280px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .repo-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  .repo-card .card-title a {
    text-decoration: none;
  }
  .repo-card .card-title a:hover {
    text-decoration: underline;
  }
  .topic-badge {
    font-weight: normal;
    font-size: 0.75rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
    background-color: var(--global-theme-color);
    color: white;
    opacity: 0.8;
  }
  .repo-stats {
    font-size: 0.85rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
  .stat-item {
    white-space: nowrap;
    color: var(--global-text-color-light, #6c757d);
  }
  .stat-item i {
    margin-right: 0.25rem;
  }
</style>

---
layout: page
permalink: /resources/software/
title: software
description: All our code is free and open source on <a href='https://github.com/choderalab'><b>GitHub</b></a>! Read (and contribute to!) our notes on <a href='https://github.com/choderalab/software-development'><b>Software Development Best Practices for Computational Chemistry</b></a>!
nav: false
toc:
  sidebar: left
---

{% if site.data.software.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.software.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.software.github_users %}
{% if site.data.software.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.software.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.software.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

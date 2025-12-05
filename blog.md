---
layout: "default"
title: "blog"
---

<ul class="card-list">
  {% for post in site.categories.rust_to_renderer %}
    <li class="card-list__item">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
---
layout: default.njk
title: "Blog"
---


{% for post in collections.post %}
<div class="post-card" onclick="window.location.href='{{post.url}}'" style="cursor: pointer;">
    <div class="post-card__title">{{post.data.title}}</div>
    <div>{{post.data.description}}</div>
</div>
{% endfor %}

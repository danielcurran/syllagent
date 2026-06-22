---
layout: page
title: Archive
permalink: /archive/
---

<ul class="list  list--posts">
  {% for page in site.posts %}
    <li class="item  item--post">
      <article class="article  article--post  typeset">
        <h3><a href="{{ page.url }}">{{ page.title }}</a></h3>
        {% include post-meta.html %}
        {{ page.excerpt | markdownify | truncatewords: 30 }}
      </article>
    </li>
  {% endfor %}
</ul>

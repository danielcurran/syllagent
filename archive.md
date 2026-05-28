---
layout: default
title: Archive
permalink: /archive/
---

<div class="post-content">
    <h1>All Posts</h1>

    {% assign allTags = collections.tagList %}
    {% if allTags.size > 0 %}
    <div style="margin-bottom: 30px; padding: 20px; background: rgba(0,0,0,0.2); border: 2px solid var(--accent);">
        <h2 style="color: var(--accent); font-size: 1rem; margin-bottom: 12px;">Filter by Tag:</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <a href="/archive/" style="color: var(--accent); text-decoration: underline; padding: 4px 10px; border: 2px solid var(--accent); font-size: 0.85rem; font-weight: 600;">All</a>
        {% for tag in allTags %}
            <a href="/tags/{{ tag | slug }}/" style="color: var(--accent); text-decoration: underline; padding: 4px 10px; border: 2px solid var(--accent); font-size: 0.85rem; font-weight: 600;">{{ tag }}</a>
        {% endfor %}
        </div>
    </div>
    {% endif %}

    <ul style="list-style: none; padding: 0;">
    {% assign sortedPosts = collections.post | reverse %}
    {% for post in sortedPosts %}
        <li style="margin-bottom: 15px; padding: 15px; border-bottom: 2px solid var(--accent);">
            <a href="{{ post.url }}" style="color: var(--accent); font-size: 1.1rem; font-weight: 600;">{{ post.data.title }}</a>
            <br>
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}" style="color: var(--light-purple); font-size: 0.9rem;">{{ post.date | readableDate }}</time>
            {% if post.data.tags %}
            <br>
            <span style="color: var(--light-purple); font-size: 0.85rem;">
                Tags:
                {% for tag in post.data.tags %}{% if tag != "post" %}
                <a href="/tags/{{ tag | slug }}/" style="color: var(--accent); text-decoration: underline;">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
                {% endif %}{% endfor %}
            </span>
            {% endif %}
        </li>
    {% endfor %}
    </ul>
</div>

<hr style="border: 2px solid var(--accent); margin: 40px 0;">

<div style="text-align: center;">
    <p style="color: var(--light-purple); margin-bottom: 10px;">Subscribe to the RSS feed</p>
    <a href="/feed.xml" class="read-more">Subscribe via RSS</a>
</div>

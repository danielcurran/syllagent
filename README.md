# syllagent

Writing, research, and reflections on teaching agents, LLMs, and everything AI.

Built with [Jekyll](https://jekyllrb.com/) and the [Alembic](https://alembic.darn.es/) theme. Hosted on [GitHub Pages](https://pages.github.com/).

## Development

```bash
bundle install
bundle exec jekyll serve
```

Visit http://localhost:4000.

## Adding a Post

Create a file in `_posts/` named `YYYY-MM-DD-title.md`:

```yaml
---
layout: post
title: "Your Title"
date: YYYY-MM-DD
description: "Brief description"
tags: ["tag1", "tag2"]
---
```

## Deploy

Push to `main` — GitHub Pages builds automatically.

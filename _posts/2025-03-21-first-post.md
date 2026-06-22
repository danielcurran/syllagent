---
layout: post
title: "Hello, World — Welcome to syllagent"
date: 2025-03-21
description: "Getting started with this blog about AI agents, LLMs, and education."
tags: ["post", "announcement"]
---

This is the first post on syllagent. I'm building this space to share writing, research, and reflections on teaching in the age of artificial intelligence.

## Why syllagent?

The name combines "syllabus" and "agent" — two ideas I think about constantly. On one hand, there's the structured craft of teaching: curriculum design, scaffolding, building a learning path. On the other, there's the emerging world of AI agents and large language models that are transforming how we think about knowledge work.

## What to expect

This blog will cover:

- **Teaching with AI** — practical experiments and reflections
- **AI Agents** — how they work, where they're going
- **LLMs & Education** — research, essays, and hot takes
- **Building things** — coding, tools, and prototypes

The site itself is styled after classic Final Fantasy RPG interfaces — because learning should feel like an adventure, not a chore.

## Example Code Block

Here's a quick Python example showing how you might call an LLM API:

```python
import openai

def ask_llm(prompt: str, model: str = "gpt-4") -> str:
    """Send a prompt to an LLM and get a response."""
    response = openai.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content

# Example usage
response = ask_llm("What is an AI agent?")
print(response)
```

And here's some JavaScript for good measure:

```javascript
// A simple async function to fetch data
async function fetchPosts() {
  const response = await fetch('/api/posts');
  const data = await response.json();
  return data.filter(post => post.published);
}
```

Stay tuned for more posts soon.

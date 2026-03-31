# Behind The Pulpit Podcast Website

Static website for 'Behind The Pulpit' - African Youth Culture podcast featuring stories from Africa's untold corners.

## Features

- Responsive design (mobile-first)
- Episode browser with JSON data
- Audio players for episodes
- Contact form
- Modern CSS (CSS variables, grid, flexbox, animations)

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- JSON for episode data
- External audio/CDNs (SoundHelix samples)

## Local Development

```bash
# Serve locally
python -m http.server 8000
# or
npx serve .
```

Open <http://localhost:8000/THE> PULPIT PODCAST/

## Deployment

Hosted on GitHub Pages.

## Project Structure

```
.
├── THE PULPIT PODCAST/     # Main site files
│   ├── index.html         # Home
│   ├── episodes.html      # Episode list
│   ├── hosts.html
│   ├── contact.html
│   ├── css/styles.css
│   ├── js/main.js
│   └── data/episodes.json
├── images/                # Logos & assets
└── TODO.md                # Development tasks
```

© 2025 Behind the Pulpit. All rights reserved.

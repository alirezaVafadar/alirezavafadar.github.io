# Ali Vafadar’s portfolio

Robotics education, program operations, and the systems I build to support them. The portfolio includes Kavosh, Sibby, Team Canada coaching, international competition leadership, and selected engineering projects.

[View the live portfolio](https://alirezavafadar.github.io/)

## Run a local copy

[Download the site as a ZIP](https://github.com/alirezaVafadar/alirezavafadar.github.io/archive/refs/heads/main.zip), extract it, and open `index.html` in a browser. The photos, recognition letters, icons, styles, scripts, and font are included. Links to original sources open their respective websites.

To preview changes with a local web server, run these commands with Git and Python 3 installed.

```sh
git clone https://github.com/alirezaVafadar/alirezavafadar.github.io.git
cd alirezavafadar.github.io
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` in a browser.

## Edit and publish

| File | What to edit |
| --- | --- |
| `index.html` | Portfolio text, projects, event entries, captions, and links |
| `style.css` | Layout, typography, and mobile and print styles |
| `app.js` | Image viewer, letter zoom, and print controls |
| `media/` | Photos, letter scans, logos, icons, and the locally served font |

GitHub Pages publishes the repository root when changes reach `main`. To host the portfolio elsewhere, copy the same files to any static web host and update the canonical URL and the profile URL in `index.html`.

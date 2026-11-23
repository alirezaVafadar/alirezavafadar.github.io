# Ali Vafadar’s portfolio

Robotics education, program operations, and the systems I build to support them. The portfolio includes Kavosh, Sibby, Team Canada coaching, international competition leadership, and selected engineering projects.

[View the live portfolio](https://ali-vafadar.pages.dev/)

## Run a local copy

While signed in to GitHub, [download the source as a ZIP](https://github.com/alirezaVafadar/alirezavafadar.github.io/archive/refs/heads/main.zip), extract it, and open `index.html` in a browser. The photos, recognition letters, icons, styles, scripts, and font are included. Links to interviews and original sources open their respective websites.

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

The editable source lives in this private repository. Cloudflare Pages serves the public website. After committing changes, run the following command from the repository root to package the release.

```sh
git archive --format=zip --output=../portfolio-release.zip HEAD index.html style.css app.js media
```

In Cloudflare, open **Workers & Pages**, select **ali-vafadar**, and upload the ZIP as a new production deployment. To move the site to another host, deploy the same files and update both public URLs in `index.html`.

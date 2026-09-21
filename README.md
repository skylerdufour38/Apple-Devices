# Apple Devices Archive

A GitHub Pages + GitHub Codespaces-ready web app example for displaying classic iOS application information, including app names, bundle identifiers, versions, and minimum iOS requirements.

## Features

- 📱 iOS app archive home screen
- 🍎 Apple device themed interface
- 🔎 App metadata browsing
- 📦 Bundle ID and version display
- 🌐 GitHub Pages deployment ready
- ☁️ GitHub Codespaces compatible

## Local preview

From the workspace root, run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## GitHub Pages deployment

1. Push this repository to GitHub.
2. Open the repository Settings.
3. Go to Pages.
4. Choose "GitHub Actions" as the source.
5. The workflow in `.github/workflows/pages.yml` will publish the site automatically.

## GitHub Codespaces

This app is designed to work in a Codespace without any build tooling. The included devcontainer runs a simple static web server on port 8000 automatically.

## Project structure

```text
.
├── .devcontainer/
│   └── devcontainer.json
├── .github/
│   └── workflows/
│       └── pages.yml
├── .nojekyll
├── index.html
├── script.js
├── styles.css
├── README.md
└── LICENSE
```

## App archive data

The app list includes entries such as:

- Animal Sounds — `com.smartbabyapps.animalsounds`
- SoundTouch — `com.yourcompany.SoundTouch`
- Tozzle — `com.nodeflexion.Tozzle`
- AutismXpress — `X7WS995LSR.com.StudioEmotion.AutismXpress`
- Lunchbox — `com.thup.MonkeyPreschool`
- Peek-a-Zoo — `com.duckduckmoosedesign.peekazoo`
- Angry Birds — `com.rovio.AngryBirdsHalloween`
- Artsee — `com.britejar.artsee`
- ArtikPix — `com.rinnapps.artikpix.iap`

## Contact

Email: skydu4@icloud.com

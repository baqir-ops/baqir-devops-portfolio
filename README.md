# Baqir — Cloud & DevOps Portfolio

A responsive static portfolio website for a Cloud / DevOps Engineer.

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Run with Docker

```bash
docker build -t baqir-portfolio:1.0 .
docker run -d --name baqir-portfolio -p 8080:80 baqir-portfolio:1.0
```

Open `http://localhost:8080`.

## Before publishing

1. Replace `YOUR_EMAIL@example.com` in `index.html`.
2. Replace the LinkedIn placeholder with your real LinkedIn profile.
3. Review project links and descriptions.
4. Add your CV as `resume.pdf` and add a Resume button if desired.

## Suggested next deployment

GitHub → GitHub Actions → Docker → AWS / Cloudflare / GitHub Pages.

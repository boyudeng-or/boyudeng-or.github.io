# boyudeng-or.github.io

Personal academic homepage for Boyu Deng (GitHub Pages).

## Local preview

Open `index.html` in a browser, or from this folder:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish on GitHub

1. On GitHub, create a **public** repository named exactly `boyudeng-or.github.io`.
2. In this folder:

```powershell
cd D:\01_Academic_Admin\Personal_Site\boyudeng-or.github.io
git init -b main
git add .
git commit -m "Add personal academic homepage"
git remote add origin https://github.com/boyudeng-or/boyudeng-or.github.io.git
git push -u origin main
```

3. Site URL: https://boyudeng-or.github.io/

Settings → Pages should show Deploy from branch `main` / root (often automatic for `*.github.io` repos).

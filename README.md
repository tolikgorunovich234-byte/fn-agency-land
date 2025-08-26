# FN AGENCY — WTF Funnel (Starter)

## Локальный запуск
```bash
npm install
npm run dev
```
Открой адрес из консоли (обычно `http://localhost:5173`).

## Деплой на Vercel (быстро)
1) Создай репозиторий на GitHub и залей код:
```bash
git init
git add .
git commit -m "init"
git branch -M main
# создаёшь пустой репозиторий на GitHub и вставляешь его URL ниже
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```
2) На https://vercel.com → **New Project** → выбери репозиторий → Deploy.
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

Готово: получишь `https://<project>.vercel.app`.

## Свой домен (по желанию)
- В Vercel в проекте: **Settings → Domains → Add Domain**.
- У регистратора домена поставь записи:
  - **A** (apex, корень домена) → `76.76.21.21`
  - **CNAME** для `www` → `cname.vercel-dns.com`
- Подождать 1–12 часов. HTTPS подключится сам.

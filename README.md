# ALIKHANOV — SaaS / CRM / ERP / Telegram-боты

Сайт услуг на Next.js (App Router), с поддержкой RU/UZ/EN.

## Стек

- Next.js (App Router, SSG)
- next-intl (i18n: `ru` / `uz` / `en`, всегда с префиксом локали)
- Обычный CSS по компонентам (без Tailwind/UI-кита)
- AOS (скролл-анимации), Swiper (карусели)
- Контакт-форма → собственный Telegram-бот (без сторонних форм-сервисов)

## Структура

- `app/[locale]/...` — страницы (главная, `/services`, `/services/[slug]`, `/work`, `/work/[slug]`, `/about`, `/contact`)
- `app/api/contact/route.js` — приём заявок из формы, отправка в Telegram-бота
- `content/` — тексты услуг, кейсов, отзывов и общих данных (по языкам)
- `components/` — переиспользуемые компоненты (layout, услуги, кейсы, форма, аналитика)
- `messages/{ru,uz,en}.json` — короткие UI-строки (навигация, кнопки, лейблы)

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и заполните:

```
TELEGRAM_BOT_TOKEN=       # токен бота от @BotFather
TELEGRAM_CHAT_ID=         # ваш chat_id (бот должен получить от вас хотя бы одно сообщение до первой отправки)
NEXT_PUBLIC_YANDEX_METRICA_ID=   # опционально
NEXT_PUBLIC_GA_ID=               # опционально
```

## Запуск

```
npm install
npm run dev
```

## Обновление контента

- Тексты услуг — `content/services/*.js`
- Кейсы — `content/case-studies/*.js` (картинки — `public/images/case-studies/`)
- Отзывы — `content/testimonials/data.js` (сейчас временные плейсхолдеры, отмечены комментарием — заменить на реальные, когда появятся)

## Продакшн-сборка

```
npm run build
npm start
```

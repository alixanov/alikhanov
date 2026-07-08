export const telegramBots = {
  slug: "telegram-bots",
  icon: "uil-robot",
  priceFrom: "$300",
  ru: {
    title: "Telegram-боты",
    tagline: "Приём заказов, поддержка и рассылки без менеджера за компьютером 24/7",
    description:
      "Разрабатываю Telegram-ботов для приёма заказов, поддержки клиентов и уведомлений — с подключением к вашей CRM или базе данных. Кстати, форма обратной связи на этом сайте сама работает через собственного Telegram-бота — так что вы уже видели пример в деле.",
    features: [
      {
        title: "Приём заказов и заявок",
        description: "Каталог, корзина и оформление заказа прямо в Telegram, без отдельного сайта или приложения.",
      },
      {
        title: "Оплата внутри бота",
        description: "Подключение Payme, Click или Stripe для оплаты без перехода на другой сайт.",
      },
      {
        title: "Бот поддержки",
        description: "Ответы на частые вопросы автоматически, сложные обращения передаются оператору.",
      },
      {
        title: "Рассылки и уведомления",
        description: "Автоматические сообщения клиентам о статусе заказа, акциях или напоминания.",
      },
      {
        title: "Админ-панель для бота",
        description: "Управление заказами, товарами и рассылками без обращения к разработчику.",
      },
    ],
    process: [
      { title: "Сценарий бота", description: "Прописываю логику диалога: что бот спрашивает, что отвечает, куда передаёт данные." },
      { title: "Разработка", description: "Собираю бота на Node.js с подключением к базе данных или CRM." },
      { title: "Тестирование", description: "Проверяю сценарии, включая нестандартные ответы пользователей." },
      { title: "Запуск", description: "Публикую бота, настраиваю уведомления вам о новых заказах." },
      { title: "Поддержка", description: "Донастройка сценариев и добавление новых команд после запуска." },
    ],
    faq: [
      {
        question: "Сколько стоит разработка Telegram-бота?",
        answer: "Простой бот с приёмом заявок — от $300. Бот с оплатой, каталогом и админ-панелью — дороже, точная стоимость после брифа.",
      },
      { question: "Нужен ли отдельный сервер для бота?", answer: "Да, боту нужен постоянно работающий сервер — подключаю и настраиваю его как часть проекта." },
      {
        question: "Можно ли подключить бота к моей CRM?",
        answer: "Да, если у вас уже есть CRM или база данных — настраиваю обмен данными между ботом и системой.",
      },
    ],
  },
  uz: {
    title: "Telegram-botlar",
    tagline: "Buyurtmalar qabuli, qo'llab-quvvatlash va tarqatmalar — kompyuter oldida menejersiz, 24/7",
    description:
      "Buyurtmalarni qabul qilish, mijozlarni qo'llab-quvvatlash va xabarnomalar uchun Telegram-botlarni CRM yoki ma'lumotlar bazangizga ulab ishlab chiqaman. Aytgancha, ushbu saytdagi aloqa formasi ham o'zining Telegram-boti orqali ishlaydi — demak buni ishlashini allaqachon ko'rdingiz.",
    features: [
      { title: "Buyurtma va arizalarni qabul qilish", description: "Katalog, savat va buyurtma rasmiylashtirish to'g'ridan-to'g'ri Telegram'da, alohida sayt yoki ilovasiz." },
      { title: "Bot ichida to'lov", description: "Boshqa saytga o'tmasdan to'lash uchun Payme, Click yoki Stripe'ni ulash." },
      { title: "Qo'llab-quvvatlash boti", description: "Ko'p so'raladigan savollarga avtomatik javob, murakkab murojaatlar operatorga uzatiladi." },
      { title: "Tarqatmalar va xabarnomalar", description: "Mijozlarga buyurtma holati, aksiyalar yoki eslatmalar haqida avtomatik xabarlar." },
      { title: "Bot uchun admin panel", description: "Dasturchiga murojaat qilmasdan buyurtmalar, tovarlar va tarqatmalarni boshqarish." },
    ],
    process: [
      { title: "Bot stsenariysi", description: "Muloqot mantig'ini yozaman: bot nima so'raydi, nima javob beradi, ma'lumotlarni qayerga uzatadi." },
      { title: "Ishlab chiqish", description: "Ma'lumotlar bazasi yoki CRM'ga ulangan holda botni Node.js'da yig'aman." },
      { title: "Testdan o'tkazish", description: "Foydalanuvchilarning nostandart javoblarini ham hisobga olib stsenariylarni tekshiraman." },
      { title: "Ishga tushirish", description: "Botni e'lon qilaman, yangi buyurtmalar haqida sizga xabarnomalarni sozlayman." },
      { title: "Qo'llab-quvvatlash", description: "Ishga tushirilgandan keyin stsenariylarni sozlash va yangi buyruqlar qo'shish." },
    ],
    faq: [
      { question: "Telegram-bot ishlab chiqish qancha turadi?", answer: "Arizalarni qabul qiladigan oddiy bot — $300 dan. To'lov, katalog va admin panelga ega bot qimmatroq, aniq narx brifdan keyin." },
      { question: "Bot uchun alohida server kerakmi?", answer: "Ha, botga doimiy ishlaydigan server kerak — uni loyihaning bir qismi sifatida ulayman va sozlayman." },
      { question: "Botni mening CRM'imga ulash mumkinmi?", answer: "Ha, sizda allaqachon CRM yoki ma'lumotlar bazasi bo'lsa — bot va tizim o'rtasida ma'lumot almashinuvini sozlayman." },
    ],
  },
  en: {
    title: "Telegram Bots",
    tagline: "Orders, support and broadcasts — no one has to sit at a computer 24/7",
    description:
      "I build Telegram bots for taking orders, customer support and notifications, connected to your CRM or database. In fact, the contact form on this very site runs on my own Telegram bot integration — so you've already seen it in action.",
    features: [
      { title: "Taking orders and leads", description: "Catalog, cart and checkout right inside Telegram, no separate site or app needed." },
      { title: "Payments inside the bot", description: "Payme, Click or Stripe integration so customers can pay without leaving the chat." },
      { title: "Support bot", description: "Automatic answers to common questions, complex requests handed off to a human." },
      { title: "Broadcasts and notifications", description: "Automatic messages about order status, promotions, or reminders." },
      { title: "Admin panel for the bot", description: "Manage orders, products and broadcasts without contacting a developer." },
    ],
    process: [
      { title: "Bot scenario", description: "I write out the conversation logic: what the bot asks, how it answers, where the data goes." },
      { title: "Development", description: "I build the bot in Node.js, connected to a database or CRM." },
      { title: "Testing", description: "I test scenarios, including unexpected user input." },
      { title: "Launch", description: "I publish the bot and set up notifications for new orders." },
      { title: "Support", description: "Fine-tuning scenarios and adding new commands after launch." },
    ],
    faq: [
      { question: "How much does a Telegram bot cost?", answer: "A simple lead-capture bot starts at $300. A bot with payments, a catalog and an admin panel costs more — exact pricing after a brief." },
      { question: "Does the bot need its own server?", answer: "Yes, a bot needs a server running continuously — I set this up as part of the project." },
      { question: "Can the bot connect to my CRM?", answer: "Yes — if you already have a CRM or database, I set up data exchange between the bot and the system." },
    ],
  },
};

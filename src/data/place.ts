export type Lang = "ru" | "en";

export const PHONE_TEL = "+998998780007";
export const PHONE_PRETTY = "+998 99 878 00 07";
export const WHATSAPP = "998998780007";
export const MAPS_URL =
  "https://yandex.uz/maps/?text=" +
  encodeURIComponent("Захид Кебаб улица Афросиаб 2 Чиланзар Ташкент");

export const RATINGS = 3372;
export const REVIEWS = 1030;
export const PHOTOS = 166;

export const collections = {
  ru: [
    "Лучшие завтраки Ташкента",
    "Террасы",
    "Турецкая кухня",
    "Стейки и бары",
    "Рестораны со стейками",
    "Лучшие ужины",
    "Бургеры",
    "Семейные рестораны",
    "Шашлык",
    "Сосиски и быстрые точки",
  ],
  en: [
    "Best breakfasts in Tashkent",
    "Terraces",
    "Turkish cuisine",
    "Steaks & bars",
    "Steak restaurants",
    "Best dinners",
    "Burgers",
    "Family restaurants",
    "Shashlik",
    "Sausages & quick bites",
  ],
};

export const scenes = [
  {
    id: "terrace",
    src: "/photos/terrace.jpg",
    w: 904,
    h: 1170,
    ru: {
      kicker: "улица",
      title: "Аллея",
      text: "Зелёный тент, дорожка под деревьями и гирлянды, которые зажигаются раньше заката.",
      alt: "Терраса Захид Кебаб: зелёный тент, гирлянды и аллея деревьев",
    },
    en: {
      kicker: "street",
      title: "The alley",
      text: "A green awning, a path under the trees, and string lights that come on before sunset.",
      alt: "Zahid Kebab terrace: green awning, string lights and a tree-lined path",
    },
  },
  {
    id: "hall",
    src: "/photos/hall.jpg",
    w: 896,
    h: 890,
    ru: {
      kicker: "зал",
      title: "Под навесом",
      text: "Полосатые диваны, красный потолок и ряд ламп. Вечер здесь специально длинный.",
      alt: "Зал с полосатыми диванами, красным навесом и рядами ламп",
    },
    en: {
      kicker: "room",
      title: "Under the canopy",
      text: "Striped sofas, a red ceiling and a line of lamps. Evenings are meant to run long here.",
      alt: "Dining room with striped sofas, a red canopy and rows of lamps",
    },
  },
  {
    id: "kitchen",
    src: "/photos/kitchen.jpg",
    w: 894,
    h: 1100,
    ru: {
      kicker: "огонь",
      title: "Казан",
      text: "Кухня открыта взгляду. Большой казан, сталь и команда, которая не прячется за дверью.",
      alt: "Открытая кухня Захид Кебаб: большой казан и повара",
    },
    en: {
      kicker: "fire",
      title: "The kazan",
      text: "The kitchen is in plain sight. A great kazan, steel, and a crew that doesn’t hide behind a door.",
      alt: "Zahid Kebab open kitchen: a large kazan and the cooks",
    },
  },
] as const;

export type DishCat = "coal" | "table" | "city" | "cup";

export const dishes: {
  id: string;
  cat: DishCat;
  from: "review" | "list";
  ru: { name: string; aka?: string; text: string };
  en: { name: string; aka?: string; text: string };
}[] = [
  {
    id: "lamb",
    cat: "coal",
    from: "review",
    ru: {
      name: "Шашлык из барашка",
      text: "То, ради чего возвращаются. Гости пишут коротко: вкуснейший, и порция не стесняется.",
    },
    en: {
      name: "Lamb shashlik",
      text: "The reason people come back. Guests put it simply: excellent, and the portion doesn’t hold back.",
    },
  },
  {
    id: "chicken",
    cat: "coal",
    from: "review",
    ru: {
      name: "Товуқ кабоб",
      aka: "куриный шашлык",
      text: "В меню рядом рисуют рис и салат. Состав словами есть не всегда — здесь он такой.",
    },
    en: {
      name: "Tovuq kabob",
      aka: "chicken shashlik",
      text: "The menu picture shows rice and salad beside it. The words aren’t always there — so here they are.",
    },
  },
  {
    id: "eggplant",
    cat: "table",
    from: "review",
    ru: {
      name: "Салат с жареными баклажанами",
      text: "Огромная порция. Заказывают вместе с горячим и не жалеют о месте на столе.",
    },
    en: {
      name: "Fried eggplant salad",
      text: "A huge plate. People order it with the grill and never regret the space it takes.",
    },
  },
  {
    id: "bun",
    cat: "table",
    from: "review",
    ru: {
      name: "Булочка на гриле",
      text: "Тёплая, с огня. Её хвалят рядом с шашлыком — как хлеб, без которого стол не собран.",
    },
    en: {
      name: "Bun on the grill",
      text: "Warm, off the fire. Mentioned in the same breath as the shashlik — the bread the table needs.",
    },
  },
  {
    id: "tea",
    cat: "cup",
    from: "review",
    ru: {
      name: "Чай",
      text: "Свежий, и про него пишут отдельно. К нему — десерты, которые тоже не остаются в стороне.",
    },
    en: {
      name: "Tea",
      text: "Fresh, and people mention it on its own. Desserts sit beside it and don’t get ignored.",
    },
  },
  {
    id: "dessert",
    cat: "cup",
    from: "review",
    ru: {
      name: "Десерты дома",
      text: "В отзывах без имён, но с акцентом: сладкое здесь вкусное, не «для галочки».",
    },
    en: {
      name: "House desserts",
      text: "Reviews don’t name them, but they insist: the sweet course is actually good, not an afterthought.",
    },
  },
  {
    id: "steak",
    cat: "city",
    from: "list",
    ru: {
      name: "Стейки",
      text: "Яндекс Карты держат Захид в подборках ресторанов и баров со стейками. Уточняйте прожарку у стола.",
    },
    en: {
      name: "Steaks",
      text: "Yandex Maps files Zahid under Tashkent steak lists. Ask the table for the doneness you want.",
    },
  },
  {
    id: "burger",
    cat: "city",
    from: "list",
    ru: {
      name: "Бургеры",
      text: "Дом также в подборке лучших мест города с бургерами — не только шашлык и казан.",
    },
    en: {
      name: "Burgers",
      text: "The house is also on the city’s burger lists — it isn’t only shashlik and the kazan.",
    },
  },
];

export const reviews = [
  {
    id: "anna",
    ru: {
      name: "Анна Вячеславовна",
      meta: "Дегустатор 6 уровня · 21 сентября",
      text: "Отличное место! Порция салата с жареными баклажанами огромная. Прекрасная булочка на гриле, вкуснейший шашлык из барашка.",
    },
    en: {
      name: "Anna Vyacheslavovna",
      meta: "Taster, level 6 · 21 September",
      text: "A great place. The fried-eggplant salad is an enormous portion. A beautiful bun off the grill, and the lamb shashlik is delicious.",
    },
    likes: 1,
  },
  {
    id: "olga",
    ru: {
      name: "Ольга",
      meta: "Знаток города 6 уровня · 23 мая",
      text: "Я влюбилась в это кафе. Очень вкусно, всё свежее, очень вкусный чай, огромные порции салатов и горячего, десерты тоже. Обслуживание на высоте, персонал прекрасный.",
    },
    en: {
      name: "Olga",
      meta: "City local, level 6 · 23 May",
      text: "I fell for this cafe. Really tasty, everything fresh, wonderful tea, huge portions of salad and hot food, and the desserts too. Service is excellent, the staff are lovely.",
    },
    likes: 3,
  },
  {
    id: "elena",
    ru: {
      name: "Елена Н.",
      meta: "Дегустатор 3 уровня · 4 августа",
      text: "Место выглядит хорошо, меню большое, но без переводчика не всё понятно. Брала tovuq kabob — куриный шашлык. Состава в меню нет, на картинке рис и салат.",
    },
    en: {
      name: "Elena N.",
      meta: "Taster, level 3 · 4 August",
      text: "The place looks good and the menu is large, but without a translator not everything is clear. I ordered tovuq kabob — chicken shashlik. The menu doesn’t list what’s in it; the picture shows rice and salad.",
    },
    likes: 0,
  },
] as const;

export const copy = {
  ru: {
    langLabel: "Язык",
    logo: "Захид",
    navMenu: "Меню",
    navPath: "Зал",
    navVoices: "Отзывы",
    navVisit: "Адрес",
    book: "Стол",
    call: "Позвонить",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    heroKicker: "Чиланзар · ул. Афросиаб, 2",
    heroKind: "кафе-ресторан",
    heroTitle: "Захид",
    heroSub: "кебаб",
    heroLead:
      "Осенняя аллея, зелёный тент и гирлянды над дорожкой. Кухня не гаснет до трёх ночи.",
    heroPhoto: "терраса",
    openNow: "Сейчас открыто",
    openUntil: "до 03:00",
    closedNow: "Сейчас пауза",
    closedHint: "по карточке — к 10:00",
    clockLabel: "Ташкент",
    seeMenu: "Что берут гости",
    ratingWord: "рейтинг",
    ratingsWord: "оценок",
    reviewsWord: "отзывов",
    photosWord: "фотографий",
    houseEyebrow: "01  —  дом",
    houseTitle: "Утопает в зелени.",
    houseQuote: "Потрясающий ресторан, утопает в зелени, атмосфера огонь!",
    houseBy: "так о Захиде пишут гости",
    houseBody:
      "Пять целых по 3 372 оценкам. Не витрина для одного вечера: завтраки, семейные столы, ужин и поздний огонь в одном адресе.",
    pathEyebrow: "02  —  три кадра",
    pathTitle: "С аллеи — к огню.",
    pathLead: "Сначала деревья. Потом полосатые диваны. Потом казан, который не прячут.",
    scrollHint: "листайте",
    plateEyebrow: "03  —  тарелка",
    plateTitle: "Слои с огня.",
    plateBody:
      "Мясо и картофель с гриля, сверху кукуруза и розмарин. Тарелку ставят в центр стола — и сначала достают телефон.",
    plateNote: "Так блюдо выглядит на фото дома. Имени в отзывах нет — зато есть сам жест.",
    layers: ["мясо", "картофель", "кукуруза", "розмарин"],
    menuEyebrow: "04  —  без переводчика",
    menuTitle: "Что заказывают вслух.",
    menuLead:
      "Меню большое, и без перевода в нём легко потеряться. Ниже не полный прайс, а блюда, о которых уже написали гости — и то, за что дом держит город.",
    menuNote:
      "Цен на сайте нет специально: порции большие, состав лучше подтвердить у стола или по телефону.",
    cats: {
      all: "Всё",
      coal: "Угли",
      table: "К шашлыку",
      cup: "Чай и сладкое",
      city: "Город знает",
    },
    fromReview: "из отзывов",
    fromList: "подборки города",
    breakfastTitle: "Завтрак, когда ещё тихо",
    breakfastBody:
      "Захид в подборке лучших завтраков Ташкента. В 10:00 здесь обычно мало посетителей — удобно сесть без толпы.",
    voicesEyebrow: "05  —  голоса",
    voicesTitle: "5,0 — и не из воздуха.",
    voicesLead: "1 030 отзывов. Три, которые объясняют дом лучше любого слогана.",
    allReviews: "Все отзывы на Яндекс Картах",
    likeOne: "полезный",
    likeMany: "полезных",
    visitEyebrow: "06  —  прийти",
    visitTitle: "Афросиаб, 2.",
    visitLead: "Чиланзарский район. До трёх ночи по карточке на Яндекс Картах.",
    addressLabel: "Адрес",
    address: "Чиланзарский район, ул. Афросиаб, 2",
    metro: "Метро «Космонавтов»",
    metroDist: "134 м",
    pearl: "Магазин «Жемчуг»",
    pearlDist: "175 м",
    route: "Маршрут",
    hoursLabel: "Часы",
    hoursBody: "Открыто до 03:00. В 10:00 обычно свободно — так сказано на карточке. Точный график лучше подтвердить звонком.",
    featuresTitle: "Можно забрать",
    featDelivery: "Доставка еды",
    featTake: "Еда навынос",
    featCoffee: "Кофе с собой",
    formTitle: "Стол",
    formLead: "Сайт сам бронь не ставит. Соберём текст — и вы отправите его в WhatsApp или просто позвоните.",
    name: "Имя",
    phone: "Телефон",
    date: "Дата",
    time: "Время",
    guests: "Гости",
    note: "Пожелание",
    notePh: "У окна, детский стул, день рождения…",
    send: "Собрать сообщение",
    errName: "Как к вам обращаться?",
    errPhone: "Нужен телефон — хотя бы 7 цифр.",
    errDate: "Выберите дату.",
    errTime: "Выберите время.",
    ready: "Текст готов",
    readyLead: "Проверьте и отправьте. Стол подтвердят уже люди, не страница.",
    whatsapp: "WhatsApp",
    edit: "Изменить",
    guestsWord: (n: number) => ruGuests(n),
    footerNote: "Кафе-ресторан в Ташкенте. Рейтинг 5,0.",
    hoursShort: "до 03:00",
    madeFor: "Чиланзар",
  },
  en: {
    langLabel: "Language",
    logo: "Zahid",
    navMenu: "Menu",
    navPath: "Room",
    navVoices: "Reviews",
    navVisit: "Visit",
    book: "Table",
    call: "Call",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    heroKicker: "Chilanzar · 2 Afrosiab St.",
    heroKind: "cafe & restaurant",
    heroTitle: "Zahid",
    heroSub: "kebab",
    heroLead:
      "An autumn alley, a green awning, and lights over the path. The kitchen stays lit until three.",
    heroPhoto: "terrace",
    openNow: "Open now",
    openUntil: "until 03:00",
    closedNow: "Quiet hours",
    closedHint: "listed toward 10:00",
    clockLabel: "Tashkent",
    seeMenu: "What guests order",
    ratingWord: "rating",
    ratingsWord: "ratings",
    reviewsWord: "reviews",
    photosWord: "photos",
    houseEyebrow: "01  —  the house",
    houseTitle: "Drowning in green.",
    houseQuote: "A stunning restaurant, lost in the greenery. The atmosphere is fire.",
    houseBy: "how guests describe Zahid",
    houseBody:
      "A straight 5.0 from 3,372 ratings. Not a one-night set: breakfast, family tables, dinner and a late fire at one address.",
    pathEyebrow: "02  —  three frames",
    pathTitle: "From the alley to the fire.",
    pathLead: "Trees first. Then the striped sofas. Then the kazan they don’t hide.",
    scrollHint: "slide",
    plateEyebrow: "03  —  the plate",
    plateTitle: "Layers off the grill.",
    plateBody:
      "Grilled meat and potato, corn and rosemary on top. It lands in the middle of the table — and the phones come out first.",
    plateNote: "This is the plate as photographed at the house. Reviews don’t name it. The gesture does.",
    layers: ["meat", "potato", "corn", "rosemary"],
    menuEyebrow: "04  —  in plain words",
    menuTitle: "What people actually order.",
    menuLead:
      "The menu is long, and easy to lose without a translation. This is not a full price list — it’s the dishes guests already wrote about, plus what the city files the house under.",
    menuNote:
      "No prices on purpose: portions run large, and it’s better to confirm a plate at the table or by phone.",
    cats: {
      all: "All",
      coal: "Coals",
      table: "With the grill",
      cup: "Tea & sweet",
      city: "The city knows",
    },
    fromReview: "from reviews",
    fromList: "city lists",
    breakfastTitle: "Breakfast, while it’s still quiet",
    breakfastBody:
      "Zahid is on the best-breakfasts list in Tashkent. At 10:00 the room is usually uncrowded — easy to sit down.",
    voicesEyebrow: "05  —  voices",
    voicesTitle: "5.0, and not from thin air.",
    voicesLead: "1,030 reviews. Three that explain the house better than a slogan.",
    allReviews: "All reviews on Yandex Maps",
    likeOne: "helpful",
    likeMany: "helpful",
    visitEyebrow: "06  —  come by",
    visitTitle: "2 Afrosiab.",
    visitLead: "Chilanzar district. Open until 03:00 on the Yandex Maps card.",
    addressLabel: "Address",
    address: "Chilanzar district, 2 Afrosiab Street",
    metro: "Kosmonavtov metro",
    metroDist: "134 m",
    pearl: "Zhemchug shop",
    pearlDist: "175 m",
    route: "Route",
    hoursLabel: "Hours",
    hoursBody:
      "Open until 03:00. At 10:00 it’s usually quiet — that’s what the card says. Confirm the exact schedule by phone.",
    featuresTitle: "Take it with you",
    featDelivery: "Delivery",
    featTake: "Takeaway",
    featCoffee: "Coffee to go",
    formTitle: "A table",
    formLead:
      "This page doesn’t book by itself. We’ll write the note — you send it on WhatsApp, or just call.",
    name: "Name",
    phone: "Phone",
    date: "Date",
    time: "Time",
    guests: "Guests",
    note: "A note",
    notePh: "By the window, a high chair, a birthday…",
    send: "Write the message",
    errName: "What should we call you?",
    errPhone: "A phone number — at least 7 digits.",
    errDate: "Pick a date.",
    errTime: "Pick a time.",
    ready: "Message ready",
    readyLead: "Check it and send. A person confirms the table, not this page.",
    whatsapp: "WhatsApp",
    edit: "Edit",
    guestsWord: (n: number) => (n === 1 ? "1 guest" : `${n} guests`),
    footerNote: "A cafe-restaurant in Tashkent. Rated 5.0.",
    hoursShort: "until 03:00",
    madeFor: "Chilanzar",
  },
} as const;

function ruGuests(n: number) {
  const n10 = n % 10;
  const n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return `${n} гость`;
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return `${n} гостя`;
  return `${n} гостей`;
}

export const SLOT_TIMES = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
];

export function tashkentParts(date: Date) {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Tashkent",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const bag: Record<string, string> = {};
  for (const p of fmt.formatToParts(date)) bag[p.type] = p.value;
  const hour = Number(bag.hour);
  const minute = Number(bag.minute);
  const open = hour >= 10 || hour < 3;
  return {
    hour,
    minute,
    clock: `${bag.hour}:${bag.minute}`,
    open,
    isoDate: `${bag.year}-${bag.month}-${bag.day}`,
  };
}

import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Phone, c as MapPin, d as ChevronRight, f as ChevronLeft, i as Plus, l as Coffee, m as ArrowUpRight, o as Minus, p as Bike, r as ShoppingBag, s as Menu, t as X, u as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-kP34LROP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PHONE_TEL = "+998998780007";
var PHONE_PRETTY = "+998 99 878 00 07";
var WHATSAPP = "998998780007";
var MAPS_URL = "https://yandex.uz/maps/?text=" + encodeURIComponent("Захид Кебаб улица Афросиаб 2 Чиланзар Ташкент");
var RATINGS = 3372;
var REVIEWS = 1030;
var collections = {
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
		"Сосиски и быстрые точки"
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
		"Sausages & quick bites"
	]
};
var scenes = [
	{
		id: "terrace",
		src: "/photos/terrace.jpg",
		w: 904,
		h: 1170,
		ru: {
			kicker: "улица",
			title: "Аллея",
			text: "Зелёный тент, дорожка под деревьями и гирлянды, которые зажигаются раньше заката.",
			alt: "Терраса Захид Кебаб: зелёный тент, гирлянды и аллея деревьев"
		},
		en: {
			kicker: "street",
			title: "The alley",
			text: "A green awning, a path under the trees, and string lights that come on before sunset.",
			alt: "Zahid Kebab terrace: green awning, string lights and a tree-lined path"
		}
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
			alt: "Зал с полосатыми диванами, красным навесом и рядами ламп"
		},
		en: {
			kicker: "room",
			title: "Under the canopy",
			text: "Striped sofas, a red ceiling and a line of lamps. Evenings are meant to run long here.",
			alt: "Dining room with striped sofas, a red canopy and rows of lamps"
		}
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
			alt: "Открытая кухня Захид Кебаб: большой казан и повара"
		},
		en: {
			kicker: "fire",
			title: "The kazan",
			text: "The kitchen is in plain sight. A great kazan, steel, and a crew that doesn’t hide behind a door.",
			alt: "Zahid Kebab open kitchen: a large kazan and the cooks"
		}
	}
];
var dishes = [
	{
		id: "lamb",
		cat: "coal",
		from: "review",
		ru: {
			name: "Шашлык из барашка",
			text: "То, ради чего возвращаются. Гости пишут коротко: вкуснейший, и порция не стесняется."
		},
		en: {
			name: "Lamb shashlik",
			text: "The reason people come back. Guests put it simply: excellent, and the portion doesn’t hold back."
		}
	},
	{
		id: "chicken",
		cat: "coal",
		from: "review",
		ru: {
			name: "Товуқ кабоб",
			aka: "куриный шашлык",
			text: "В меню рядом рисуют рис и салат. Состав словами есть не всегда — здесь он такой."
		},
		en: {
			name: "Tovuq kabob",
			aka: "chicken shashlik",
			text: "The menu picture shows rice and salad beside it. The words aren’t always there — so here they are."
		}
	},
	{
		id: "eggplant",
		cat: "table",
		from: "review",
		ru: {
			name: "Салат с жареными баклажанами",
			text: "Огромная порция. Заказывают вместе с горячим и не жалеют о месте на столе."
		},
		en: {
			name: "Fried eggplant salad",
			text: "A huge plate. People order it with the grill and never regret the space it takes."
		}
	},
	{
		id: "bun",
		cat: "table",
		from: "review",
		ru: {
			name: "Булочка на гриле",
			text: "Тёплая, с огня. Её хвалят рядом с шашлыком — как хлеб, без которого стол не собран."
		},
		en: {
			name: "Bun on the grill",
			text: "Warm, off the fire. Mentioned in the same breath as the shashlik — the bread the table needs."
		}
	},
	{
		id: "tea",
		cat: "cup",
		from: "review",
		ru: {
			name: "Чай",
			text: "Свежий, и про него пишут отдельно. К нему — десерты, которые тоже не остаются в стороне."
		},
		en: {
			name: "Tea",
			text: "Fresh, and people mention it on its own. Desserts sit beside it and don’t get ignored."
		}
	},
	{
		id: "dessert",
		cat: "cup",
		from: "review",
		ru: {
			name: "Десерты дома",
			text: "В отзывах без имён, но с акцентом: сладкое здесь вкусное, не «для галочки»."
		},
		en: {
			name: "House desserts",
			text: "Reviews don’t name them, but they insist: the sweet course is actually good, not an afterthought."
		}
	},
	{
		id: "steak",
		cat: "city",
		from: "list",
		ru: {
			name: "Стейки",
			text: "Яндекс Карты держат Захид в подборках ресторанов и баров со стейками. Уточняйте прожарку у стола."
		},
		en: {
			name: "Steaks",
			text: "Yandex Maps files Zahid under Tashkent steak lists. Ask the table for the doneness you want."
		}
	},
	{
		id: "burger",
		cat: "city",
		from: "list",
		ru: {
			name: "Бургеры",
			text: "Дом также в подборке лучших мест города с бургерами — не только шашлык и казан."
		},
		en: {
			name: "Burgers",
			text: "The house is also on the city’s burger lists — it isn’t only shashlik and the kazan."
		}
	}
];
var reviews = [
	{
		id: "anna",
		ru: {
			name: "Анна Вячеславовна",
			meta: "Дегустатор 6 уровня · 21 сентября",
			text: "Отличное место! Порция салата с жареными баклажанами огромная. Прекрасная булочка на гриле, вкуснейший шашлык из барашка."
		},
		en: {
			name: "Anna Vyacheslavovna",
			meta: "Taster, level 6 · 21 September",
			text: "A great place. The fried-eggplant salad is an enormous portion. A beautiful bun off the grill, and the lamb shashlik is delicious."
		},
		likes: 1
	},
	{
		id: "olga",
		ru: {
			name: "Ольга",
			meta: "Знаток города 6 уровня · 23 мая",
			text: "Я влюбилась в это кафе. Очень вкусно, всё свежее, очень вкусный чай, огромные порции салатов и горячего, десерты тоже. Обслуживание на высоте, персонал прекрасный."
		},
		en: {
			name: "Olga",
			meta: "City local, level 6 · 23 May",
			text: "I fell for this cafe. Really tasty, everything fresh, wonderful tea, huge portions of salad and hot food, and the desserts too. Service is excellent, the staff are lovely."
		},
		likes: 3
	},
	{
		id: "elena",
		ru: {
			name: "Елена Н.",
			meta: "Дегустатор 3 уровня · 4 августа",
			text: "Место выглядит хорошо, меню большое, но без переводчика не всё понятно. Брала tovuq kabob — куриный шашлык. Состава в меню нет, на картинке рис и салат."
		},
		en: {
			name: "Elena N.",
			meta: "Taster, level 3 · 4 August",
			text: "The place looks good and the menu is large, but without a translator not everything is clear. I ordered tovuq kabob — chicken shashlik. The menu doesn’t list what’s in it; the picture shows rice and salad."
		},
		likes: 0
	}
];
var copy = {
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
		heroLead: "Осенняя аллея, зелёный тент и гирлянды над дорожкой. Кухня не гаснет до трёх ночи.",
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
		houseBody: "Пять целых по 3 372 оценкам. Не витрина для одного вечера: завтраки, семейные столы, ужин и поздний огонь в одном адресе.",
		pathEyebrow: "02  —  три кадра",
		pathTitle: "С аллеи — к огню.",
		pathLead: "Сначала деревья. Потом полосатые диваны. Потом казан, который не прячут.",
		scrollHint: "листайте",
		plateEyebrow: "03  —  тарелка",
		plateTitle: "Слои с огня.",
		plateBody: "Мясо и картофель с гриля, сверху кукуруза и розмарин. Тарелку ставят в центр стола — и сначала достают телефон.",
		plateNote: "Так блюдо выглядит на фото дома. Имени в отзывах нет — зато есть сам жест.",
		layers: [
			"мясо",
			"картофель",
			"кукуруза",
			"розмарин"
		],
		menuEyebrow: "04  —  без переводчика",
		menuTitle: "Что заказывают вслух.",
		menuLead: "Меню большое, и без перевода в нём легко потеряться. Ниже не полный прайс, а блюда, о которых уже написали гости — и то, за что дом держит город.",
		menuNote: "Цен на сайте нет специально: порции большие, состав лучше подтвердить у стола или по телефону.",
		cats: {
			all: "Всё",
			coal: "Угли",
			table: "К шашлыку",
			cup: "Чай и сладкое",
			city: "Город знает"
		},
		fromReview: "из отзывов",
		fromList: "подборки города",
		breakfastTitle: "Завтрак, когда ещё тихо",
		breakfastBody: "Захид в подборке лучших завтраков Ташкента. В 10:00 здесь обычно мало посетителей — удобно сесть без толпы.",
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
		guestsWord: (n) => ruGuests(n),
		footerNote: "Кафе-ресторан в Ташкенте. Рейтинг 5,0.",
		hoursShort: "до 03:00",
		madeFor: "Чиланзар"
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
		heroLead: "An autumn alley, a green awning, and lights over the path. The kitchen stays lit until three.",
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
		houseBody: "A straight 5.0 from 3,372 ratings. Not a one-night set: breakfast, family tables, dinner and a late fire at one address.",
		pathEyebrow: "02  —  three frames",
		pathTitle: "From the alley to the fire.",
		pathLead: "Trees first. Then the striped sofas. Then the kazan they don’t hide.",
		scrollHint: "slide",
		plateEyebrow: "03  —  the plate",
		plateTitle: "Layers off the grill.",
		plateBody: "Grilled meat and potato, corn and rosemary on top. It lands in the middle of the table — and the phones come out first.",
		plateNote: "This is the plate as photographed at the house. Reviews don’t name it. The gesture does.",
		layers: [
			"meat",
			"potato",
			"corn",
			"rosemary"
		],
		menuEyebrow: "04  —  in plain words",
		menuTitle: "What people actually order.",
		menuLead: "The menu is long, and easy to lose without a translation. This is not a full price list — it’s the dishes guests already wrote about, plus what the city files the house under.",
		menuNote: "No prices on purpose: portions run large, and it’s better to confirm a plate at the table or by phone.",
		cats: {
			all: "All",
			coal: "Coals",
			table: "With the grill",
			cup: "Tea & sweet",
			city: "The city knows"
		},
		fromReview: "from reviews",
		fromList: "city lists",
		breakfastTitle: "Breakfast, while it’s still quiet",
		breakfastBody: "Zahid is on the best-breakfasts list in Tashkent. At 10:00 the room is usually uncrowded — easy to sit down.",
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
		hoursBody: "Open until 03:00. At 10:00 it’s usually quiet — that’s what the card says. Confirm the exact schedule by phone.",
		featuresTitle: "Take it with you",
		featDelivery: "Delivery",
		featTake: "Takeaway",
		featCoffee: "Coffee to go",
		formTitle: "A table",
		formLead: "This page doesn’t book by itself. We’ll write the note — you send it on WhatsApp, or just call.",
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
		guestsWord: (n) => n === 1 ? "1 guest" : `${n} guests`,
		footerNote: "A cafe-restaurant in Tashkent. Rated 5.0.",
		hoursShort: "until 03:00",
		madeFor: "Chilanzar"
	}
};
function ruGuests(n) {
	const n10 = n % 10;
	const n100 = n % 100;
	if (n10 === 1 && n100 !== 11) return `${n} гость`;
	if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return `${n} гостя`;
	return `${n} гостей`;
}
var SLOT_TIMES = [
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
	"02:30"
];
function tashkentParts(date) {
	const fmt = new Intl.DateTimeFormat("en-GB", {
		timeZone: "Asia/Tashkent",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23",
		weekday: "short",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	});
	const bag = {};
	for (const p of fmt.formatToParts(date)) bag[p.type] = p.value;
	const hour = Number(bag.hour);
	const minute = Number(bag.minute);
	const open = hour >= 10 || hour < 3;
	return {
		hour,
		minute,
		clock: `${bag.hour}:${bag.minute}`,
		open,
		isoDate: `${bag.year}-${bag.month}-${bag.day}`
	};
}
var CATS = [
	"all",
	"coal",
	"table",
	"cup",
	"city"
];
function num(n, lang) {
	return new Intl.NumberFormat(lang === "ru" ? "ru-RU" : "en-US").format(n);
}
function useInView() {
	const ref = (0, import_react.useRef)(null);
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) setOn(true);
		}, { threshold: .3 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return {
		ref,
		on
	};
}
function Count({ to, active, lang }) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setN(to);
			return;
		}
		const start = performance.now();
		let raf = 0;
		const tick = (time) => {
			const p = Math.min(1, (time - start) / 1200);
			const eased = 1 - (1 - p) ** 3;
			setN(Math.round(to * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [active, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "tabular-nums",
		children: num(n, lang)
	});
}
function OpenChip({ lang }) {
	const t = copy[lang];
	const [clock, setClock] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const read = () => {
			const parts = tashkentParts(/* @__PURE__ */ new Date());
			setClock({
				open: parts.open,
				clock: parts.clock
			});
		};
		read();
		const id = window.setInterval(read, 3e4);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "inline-flex items-center gap-2 rounded-full border border-line-dark px-3 py-1.5 text-sm text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full bg-ember ${clock?.open ? "ember-dot" : "opacity-40"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums text-paper/70",
				children: [t.clockLabel, clock ? ` ${clock.clock}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-paper/40",
				children: "·"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: clock ? clock.open ? t.openNow : t.closedNow : t.openUntil }),
			clock?.open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-paper/70",
				children: t.openUntil
			}) : null,
			clock && !clock.open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-paper/70",
				children: t.closedHint
			}) : null
		]
	});
}
function ZahidPage() {
	const [lang, setLang] = (0, import_react.useState)("ru");
	const [solid, setSolid] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const t = copy[lang];
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const height = document.documentElement.scrollHeight - window.innerHeight;
			const p = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
			document.documentElement.style.setProperty("--scroll", String(p));
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const el = document.getElementById("house");
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry) return;
			setSolid(entry.isIntersecting || entry.boundingClientRect.top < 80);
		}, {
			rootMargin: "-64px 0px 0px 0px",
			threshold: 0
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	(0, import_react.useEffect)(() => {
		if (!menuOpen) return;
		const onKey = (event) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [menuOpen]);
	const links = [
		{
			href: "#path",
			label: t.navPath
		},
		{
			href: "#menu",
			label: t.navMenu
		},
		{
			href: "#voices",
			label: t.navVoices
		},
		{
			href: "#visit",
			label: t.navVisit
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scroll-line",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#top",
			className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ember focus:px-4 focus:py-2 focus:text-ink",
			children: lang === "ru" ? "К началу" : "To the start"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: `fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${solid && !menuOpen ? "border-b border-line bg-paper/92 text-ink backdrop-blur-md" : "text-paper"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap flex h-16 items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-2.5 font-display text-xl tracking-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-9 place-items-center rounded-full bg-ember font-display text-lg text-ink",
							children: lang === "ru" ? "З" : "Z"
						}), t.logo]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 text-sm font-medium lg:flex",
						"aria-label": t.logo,
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: "opacity-80 transition-opacity duration-200 hover:opacity-100",
							children: link.label
						}, link.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {
								lang,
								setLang,
								solid: solid && !menuOpen
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#reserve",
								className: "tap hidden min-h-11 items-center rounded-full bg-ember px-4 text-sm font-semibold text-ink sm:inline-flex",
								children: t.book
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "tap grid size-11 place-items-center rounded-full border border-current/20 lg:hidden",
								"aria-expanded": menuOpen,
								"aria-label": menuOpen ? t.menuClose : t.menuOpen,
								onClick: () => setMenuOpen((open) => !open),
								children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			inert: !menuOpen,
			className: `nav-panel fixed inset-0 z-30 bg-ink text-paper lg:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex h-full flex-col justify-end gap-2 px-6 pt-24 pb-28",
				"aria-label": t.logo,
				children: [links.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setMenuOpen(false),
					className: "display border-b border-line-dark py-3 text-5xl",
					style: { animationDelay: `${i * 60}ms` },
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "mt-6 text-lg text-ember",
					children: PHONE_PRETTY
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "top",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { lang }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { lang }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { lang }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, { lang }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, { lang }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuBlock, { lang }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Voices, { lang }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visit, { lang })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { lang }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `dock fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink/95 px-3 pt-2 backdrop-blur-md ${menuOpen ? "hidden" : "md:hidden"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "tap inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-dark text-sm font-semibold text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), t.call]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#reserve",
					className: "tap inline-flex min-h-12 items-center justify-center rounded-full bg-ember text-sm font-semibold text-ink",
					children: t.book
				})]
			})
		})
	] });
}
function LangSwitch({ lang, setLang, solid }) {
	const t = copy[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"aria-label": t.langLabel,
		className: `flex rounded-full border p-0.5 text-xs font-semibold tracking-wide ${solid ? "border-line" : "border-line-dark"}`,
		children: ["ru", "en"].map((code) => {
			const on = lang === code;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": on,
				onClick: () => setLang(code),
				className: `tap min-h-9 min-w-10 rounded-full px-2 uppercase ${on ? "bg-ember text-ink" : solid ? "text-ink" : "text-paper"}`,
				children: code
			}, code);
		})
	});
}
function Hero({ lang }) {
	const t = copy[lang];
	const photo = scenes[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative flex min-h-svh flex-col justify-end pt-24 pb-12 md:pb-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap hero-grid grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-ember",
					children: t.heroKicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-paper/70",
					children: t.heroKind
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "hero-title mt-2 text-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: t.heroTitle
					}, `${lang}-title`), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hero-sub mt-1 block",
						children: t.heroSub
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lang-in mt-6 max-w-md text-lg text-paper/80",
					children: t.heroLead
				}, `${lang}-lead`),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#reserve",
						className: "tap inline-flex min-h-12 items-center rounded-full bg-ember px-5 font-semibold text-ink",
						children: t.book
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#menu",
						className: "tap inline-flex min-h-12 items-center rounded-full border border-line-dark px-5 font-medium text-paper",
						children: t.seeMenu
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenChip, { lang })
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "hero-frame",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo.src,
					width: photo.w,
					height: photo.h,
					alt: photo[lang].alt,
					className: "hero-img",
					fetchPriority: "high"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "absolute bottom-3 left-3 rounded-full bg-ink/75 px-3 py-1 text-xs tracking-wide text-paper backdrop-blur-sm",
					children: t.heroPhoto
				})]
			})]
		})
	});
}
function Marquee({ lang }) {
	const items = collections[lang];
	const row = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "marquee border-y border-ink/10 bg-ember py-3 text-ink",
		"aria-label": lang === "ru" ? "Подборки" : "Lists",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track",
			children: row.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `flex items-center ${i >= items.length ? "marquee-clone" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-4 text-sm font-semibold tracking-wide",
					children: item
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "size-1 rounded-full bg-ink/50"
				})]
			}, `${item}-${i}`))
		})
	});
}
function House({ lang }) {
	const t = copy[lang];
	const seen = useInView();
	const stats = [
		{
			value: lang === "ru" ? "5,0" : "5.0",
			label: t.ratingWord,
			live: false
		},
		{
			value: RATINGS,
			label: t.ratingsWord,
			live: true
		},
		{
			value: REVIEWS,
			label: t.reviewsWord,
			live: true
		},
		{
			value: 166,
			label: t.photosWord,
			live: true
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "house",
		className: "section bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: t.houseEyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-4 text-6xl text-ink md:text-7xl",
					children: t.houseTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-8 border-l-2 border-ember pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl leading-snug text-ink md:text-3xl",
						children: [
							"«",
							t.houseQuote,
							"»"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-3 text-sm text-mute",
						children: t.houseBy
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-ink/80",
					children: t.houseBody
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: seen.ref,
				className: "grid grid-cols-2 gap-px overflow-hidden rounded-card bg-line",
				children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-foam px-5 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-5xl text-ink",
						children: stat.live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Count, {
							to: stat.value,
							active: seen.on,
							lang
						}) : stat.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-mute",
						children: stat.label
					})]
				}, stat.label))
			})]
		})
	});
}
function Path({ lang }) {
	const t = copy[lang];
	const scroller = (0, import_react.useRef)(null);
	const slide = (dir) => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		scroller.current?.scrollBy({
			left: dir * 320,
			behavior: reduce ? "auto" : "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "path",
		className: "section bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap mb-8 flex items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker text-ember",
						children: t.pathEyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-4 text-5xl md:text-6xl",
						children: t.pathTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-paper/75",
						children: t.pathLead
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden gap-2 sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "tap grid size-11 place-items-center rounded-full border border-line-dark",
					onClick: () => slide(-1),
					"aria-label": lang === "ru" ? "Назад" : "Back",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 18 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "tap grid size-11 place-items-center rounded-full border border-line-dark",
					onClick: () => slide(1),
					"aria-label": lang === "ru" ? "Дальше" : "Forward",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scroller,
			className: "snap-row",
			children: scenes.map((scene, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "snap-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: scene.src,
						width: scene.w,
						height: scene.h,
						alt: scene[lang].alt,
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scene-shade" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "kicker text-ember",
								children: [
									"0",
									index + 1,
									" ",
									scene[lang].kicker
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display mt-2 text-4xl",
								children: scene[lang].title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xs text-sm text-paper/80",
								children: scene[lang].text
							})
						]
					})
				]
			}, scene.id))
		})]
	});
}
function Plate({ lang }) {
	const t = copy[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "overflow-hidden rounded-card bg-paper-deep",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/tower.jpg",
					width: 870,
					height: 1134,
					alt: lang === "ru" ? "Блюдо слоями: мясо и картофель с гриля, кукуруза и розмарин" : "Layered plate: grilled meat and potato, corn and rosemary",
					className: "plate-photo w-full object-cover",
					loading: "lazy"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: t.plateEyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-4 text-6xl md:text-7xl",
					children: t.plateTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-lg text-ink/80",
					children: t.plateBody
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-wrap gap-2",
					children: t.layers.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full border border-line bg-foam px-3 py-1.5 text-sm",
						children: layer
					}, layer))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md text-sm text-mute",
					children: t.plateNote
				})
			] })]
		})
	});
}
function MenuBlock({ lang }) {
	const t = copy[lang];
	const [cat, setCat] = (0, import_react.useState)("all");
	const shown = dishes.filter((dish) => cat === "all" || dish.cat === cat);
	const listId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menu",
		className: "section bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-ember",
					children: t.menuEyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-5xl md:text-6xl",
						children: t.menuTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-paper/75",
						children: t.menuLead
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-card border border-line-dark bg-ink-soft px-5 py-5 md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: t.breakfastTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-paper/75",
						children: t.breakfastBody
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "tablist",
					"aria-label": t.navMenu,
					className: "mt-8 flex gap-2 overflow-x-auto pb-1",
					children: CATS.map((id) => {
						const on = cat === id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": on,
							"aria-controls": listId,
							onClick: () => setCat(id),
							className: `tap shrink-0 rounded-full px-4 text-sm font-semibold min-h-11 ${on ? "bg-ember text-ink" : "border border-line-dark text-paper"}`,
							children: t.cats[id]
						}, id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: listId,
					role: "tabpanel",
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "lang-in divide-y divide-line-dark border-y border-line-dark",
						children: shown.map((dish, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-2 py-5 md:grid-cols-[4rem_1fr] md:gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-ember tabular-nums",
								children: ["0", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl",
										children: dish[lang].name
									}),
									dish[lang].aka ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-paper/60",
										children: dish[lang].aka
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tracking-wide text-paper/45 uppercase",
										children: dish.from === "review" ? t.fromReview : t.fromList
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-2xl text-paper/75",
								children: dish[lang].text
							})] })]
						}, dish.id))
					}, `${cat}-${lang}`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm text-paper/55",
					children: t.menuNote
				})
			]
		})
	});
}
function Voices({ lang }) {
	const t = copy[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "voices",
		className: "section bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: t.voicesEyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display max-w-xl text-5xl md:text-6xl",
						children: t.voicesTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-ink/70",
						children: t.voicesLead
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 lg:grid-cols-3",
					children: reviews.map((review, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: `flex flex-col rounded-card border border-line bg-foam p-6 ${index === 0 ? "lg:bg-ink lg:text-paper" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-xl leading-snug md:text-2xl",
							children: [
								"«",
								review[lang].text,
								"»"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-auto pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: review[lang].name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-1 text-sm ${index === 0 ? "text-mute lg:text-paper/65" : "text-mute"}`,
									children: review[lang].meta
								}),
								review.likes > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `mt-3 kicker ${index === 0 ? "text-ember-deep lg:text-ember" : "text-ember-deep"}`,
									children: [
										review.likes,
										" ",
										review.likes === 1 ? t.likeOne : t.likeMany
									]
								}) : null
							]
						})]
					}, review.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: MAPS_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink",
					children: [t.allReviews, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
				})
			]
		})
	});
}
function compose(lang, form) {
	return (lang === "ru" ? [
		"Здравствуйте! Хочу стол в Захид Кебаб.",
		`Имя: ${form.name.trim()}`,
		`Телефон: ${form.phone.trim()}`,
		`Дата: ${form.date}`,
		`Время: ${form.time}`,
		`Гостей: ${form.guests}`,
		form.note.trim() ? `Пожелание: ${form.note.trim()}` : ""
	] : [
		"Hello! I'd like a table at Zahid Kebab.",
		`Name: ${form.name.trim()}`,
		`Phone: ${form.phone.trim()}`,
		`Date: ${form.date}`,
		`Time: ${form.time}`,
		`Guests: ${form.guests}`,
		form.note.trim() ? `Note: ${form.note.trim()}` : ""
	]).filter(Boolean).join("\n");
}
function Visit({ lang }) {
	const t = copy[lang];
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		date: "",
		time: "19:30",
		guests: 2,
		note: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(null);
	const [minDate, setMinDate] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const iso = tashkentParts(/* @__PURE__ */ new Date()).isoDate;
		setMinDate(iso);
		setForm((current) => ({
			...current,
			date: current.date || iso
		}));
	}, []);
	(0, import_react.useEffect)(() => {
		setReady((message) => message ? compose(lang, form) : message);
	}, [lang, form]);
	const set = (key, value) => {
		setForm((current) => ({
			...current,
			[key]: value
		}));
		setErrors((current) => ({
			...current,
			[key]: void 0
		}));
	};
	const onSubmit = (event) => {
		event.preventDefault();
		const next = {};
		if (form.name.trim().length < 2) next.name = t.errName;
		if (form.phone.replace(/\D/g, "").length < 7) next.phone = t.errPhone;
		if (!form.date) next.date = t.errDate;
		if (!form.time) next.time = t.errTime;
		setErrors(next);
		if (Object.keys(next).length) {
			setReady(null);
			return;
		}
		setReady(compose(lang, form));
	};
	const features = [
		{
			icon: Bike,
			label: t.featDelivery
		},
		{
			icon: ShoppingBag,
			label: t.featTake
		},
		{
			icon: Coffee,
			label: t.featCoffee
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "visit",
		className: "section bg-ink pb-28 text-paper md:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker text-ember",
					children: t.visitEyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display mt-4 text-6xl md:text-7xl",
					children: t.visitTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-paper/75",
					children: t.visitLead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
							className: "kicker flex items-center gap-2 text-paper/55",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }), t.addressLabel]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-lg",
							children: t.address
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-paper/60",
								children: t.metro
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-display text-3xl",
								children: t.metroDist
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-paper/60",
								children: t.pearl
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-display text-3xl",
								children: t.pearlDist
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
							className: "kicker flex items-center gap-2 text-paper/55",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 14 }), t.hoursLabel]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-paper/80",
							children: t.hoursBody
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: features.map((feature) => {
						const Icon = feature.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex min-h-10 items-center gap-2 rounded-full border border-line-dark px-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 15 }), feature.label]
						}, feature.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE_TEL}`,
						className: "tap inline-flex min-h-12 items-center gap-2 rounded-full bg-ember px-5 font-semibold text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), PHONE_PRETTY]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: MAPS_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "tap inline-flex min-h-12 items-center gap-2 rounded-full border border-line-dark px-5 font-medium",
						children: [t.route, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "reserve",
				className: "rounded-card bg-paper p-6 text-ink md:p-8",
				children: ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lang-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t.formTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display mt-3 text-4xl",
							children: t.ready
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-ink/70",
							children: t.readyLead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-5 overflow-x-auto rounded-2xl bg-foam p-4 font-sans text-sm leading-relaxed whitespace-pre-wrap text-ink",
							children: ready
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(ready)}`,
									target: "_blank",
									rel: "noreferrer",
									className: "tap inline-flex min-h-12 items-center rounded-full bg-ember px-5 font-semibold text-ink",
									children: t.whatsapp
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${PHONE_TEL}`,
									className: "tap inline-flex min-h-12 items-center rounded-full border border-line px-5 font-semibold",
									children: t.call
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setReady(null),
									className: "tap inline-flex min-h-12 items-center px-3 text-sm font-semibold text-mute",
									children: t.edit
								})
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t.formTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display mt-3 text-4xl",
							children: lang === "ru" ? "Напишите — стол подтвердят люди." : "Write it. A person confirms the table."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-ink/70",
							children: t.formLead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-6 block text-sm font-medium",
							htmlFor: "guest-name",
							children: [t.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "guest-name",
								className: `field ${errors.name ? "field-bad" : ""}`,
								value: form.name,
								autoComplete: "name",
								onChange: (event) => set("name", event.target.value),
								"aria-invalid": Boolean(errors.name)
							})]
						}),
						errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ember-deep",
							children: errors.name
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block text-sm font-medium",
							htmlFor: "guest-phone",
							children: [t.phone, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "guest-phone",
								className: `field ${errors.phone ? "field-bad" : ""}`,
								value: form.phone,
								inputMode: "tel",
								autoComplete: "tel",
								onChange: (event) => set("phone", event.target.value),
								"aria-invalid": Boolean(errors.phone)
							})]
						}),
						errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ember-deep",
							children: errors.phone
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-medium",
								htmlFor: "guest-date",
								children: [t.date, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "guest-date",
									type: "date",
									min: minDate || void 0,
									className: `field ${errors.date ? "field-bad" : ""}`,
									value: form.date,
									onChange: (event) => set("date", event.target.value),
									"aria-invalid": Boolean(errors.date)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-medium",
								htmlFor: "guest-time",
								children: [t.time, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "guest-time",
									className: "field",
									value: form.time,
									onChange: (event) => set("time", event.target.value),
									children: SLOT_TIMES.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: slot,
										children: slot
									}, slot))
								})]
							})]
						}),
						errors.date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ember-deep",
							children: errors.date
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between border-b border-line py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: t.guests
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "tap grid size-11 place-items-center rounded-full border border-line disabled:opacity-40",
										onClick: () => set("guests", Math.max(1, form.guests - 1)),
										disabled: form.guests <= 1,
										"aria-label": "-",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 16 })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-14 text-center text-sm tabular-nums",
										children: t.guestsWord(form.guests)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "tap grid size-11 place-items-center rounded-full border border-line disabled:opacity-40",
										onClick: () => set("guests", Math.min(14, form.guests + 1)),
										disabled: form.guests >= 14,
										"aria-label": "+",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 block text-sm font-medium",
							htmlFor: "guest-note",
							children: [t.note, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "guest-note",
								className: "field",
								value: form.note,
								placeholder: t.notePh,
								onChange: (event) => set("note", event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "tap mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink font-semibold text-paper sm:w-auto sm:px-8",
							children: t.send
						})
					]
				})
			})]
		})
	});
}
function Footer({ lang }) {
	const t = copy[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink pb-28 text-paper md:pb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "wordmark",
				children: t.logo
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-line-dark pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-paper/70",
					children: t.footerNote
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-paper/50",
					children: [
						t.madeFor,
						" · ",
						t.hoursShort
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "font-display text-3xl text-ember",
					children: PHONE_PRETTY
				})]
			})]
		})
	});
}
var SplitComponent = ZahidPage;
//#endregion
export { SplitComponent as component };

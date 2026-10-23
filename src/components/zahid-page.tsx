import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Bike,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  X,
} from "lucide-react";
import {
  MAPS_URL,
  PHONE_PRETTY,
  PHONE_TEL,
  PHOTOS,
  RATINGS,
  REVIEWS,
  SLOT_TIMES,
  WHATSAPP,
  collections,
  copy,
  dishes,
  reviews,
  scenes,
  tashkentParts,
  type DishCat,
  type Lang,
} from "@/data/place";

const CATS: ("all" | DishCat)[] = ["all", "coal", "table", "cup", "city"];

function num(n: number, lang: Lang) {
  return new Intl.NumberFormat(lang === "ru" ? "ru-RU" : "en-US").format(n);
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setOn(true);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, on };
}

function Count({ to, active, lang }: { to: number; active: boolean; lang: Lang }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(to);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (time: number) => {
      const p = Math.min(1, (time - start) / 1200);
      const eased = 1 - (1 - p) ** 3;
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return <span className="tabular-nums">{num(n, lang)}</span>;
}

function OpenChip({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [clock, setClock] = useState<{ open: boolean; clock: string } | null>(null);
  useEffect(() => {
    const read = () => {
      const parts = tashkentParts(new Date());
      setClock({ open: parts.open, clock: parts.clock });
    };
    read();
    const id = window.setInterval(read, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line-dark px-3 py-1.5 text-sm text-paper">
      <span className={`size-2 rounded-full bg-ember ${clock?.open ? "ember-dot" : "opacity-40"}`} />
      <span className="tabular-nums text-paper/70">
        {t.clockLabel}
        {clock ? ` ${clock.clock}` : ""}
      </span>
      <span className="text-paper/40">·</span>
      <span>{clock ? (clock.open ? t.openNow : t.closedNow) : t.openUntil}</span>
      {clock?.open ? <span className="text-paper/70">{t.openUntil}</span> : null}
      {clock && !clock.open ? <span className="text-paper/70">{t.closedHint}</span> : null}
    </p>
  );
}

export function ZahidPage() {
  const [lang, setLang] = useState<Lang>("ru");
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const p = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
      document.documentElement.style.setProperty("--scroll", String(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("house");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setSolid(entry.isIntersecting || entry.boundingClientRect.top < 80);
      },
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const links = [
    { href: "#path", label: t.navPath },
    { href: "#menu", label: t.navMenu },
    { href: "#voices", label: t.navVoices },
    { href: "#visit", label: t.navVisit },
  ];

  return (
    <>
      <div className="scroll-line" aria-hidden="true" />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ember focus:px-4 focus:py-2 focus:text-ink"
      >
        {lang === "ru" ? "К началу" : "To the start"}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
          solid && !menuOpen ? "border-b border-line bg-paper/92 text-ink backdrop-blur-md" : "text-paper"
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5 font-display text-xl tracking-tight">
            <span className="grid size-9 place-items-center rounded-full bg-ember font-display text-lg text-ink">
              {lang === "ru" ? "З" : "Z"}
            </span>
            {t.logo}
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label={t.logo}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className="opacity-80 transition-opacity duration-200 hover:opacity-100">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch lang={lang} setLang={setLang} solid={solid && !menuOpen} />
            <a
              href="#reserve"
              className="tap hidden min-h-11 items-center rounded-full bg-ember px-4 text-sm font-semibold text-ink sm:inline-flex"
            >
              {t.book}
            </a>
            <button
              type="button"
              className="tap grid size-11 place-items-center rounded-full border border-current/20 lg:hidden"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.menuClose : t.menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        inert={!menuOpen}
        className={`nav-panel fixed inset-0 z-30 bg-ink text-paper lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-end gap-2 px-6 pt-24 pb-28" aria-label={t.logo}>
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="display border-b border-line-dark py-3 text-5xl"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="mt-6 text-lg text-ember">
            {PHONE_PRETTY}
          </a>
        </nav>
      </div>

      <main id="top">
        <Hero lang={lang} />
        <Marquee lang={lang} />
        <House lang={lang} />
        <Path lang={lang} />
        <Plate lang={lang} />
        <MenuBlock lang={lang} />
        <Voices lang={lang} />
        <Visit lang={lang} />
      </main>
      <Footer lang={lang} />

      <div className={`dock fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ink/95 px-3 pt-2 backdrop-blur-md ${menuOpen ? "hidden" : "md:hidden"}`}>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="tap inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-dark text-sm font-semibold text-paper"
          >
            <Phone size={16} />
            {t.call}
          </a>
          <a
            href="#reserve"
            className="tap inline-flex min-h-12 items-center justify-center rounded-full bg-ember text-sm font-semibold text-ink"
          >
            {t.book}
          </a>
        </div>
      </div>
    </>
  );
}

function LangSwitch({
  lang,
  setLang,
  solid,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  solid: boolean;
}) {
  const t = copy[lang];
  return (
    <div
      role="group"
      aria-label={t.langLabel}
      className={`flex rounded-full border p-0.5 text-xs font-semibold tracking-wide ${
        solid ? "border-line" : "border-line-dark"
      }`}
    >
      {(["ru", "en"] as const).map((code) => {
        const on = lang === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={on}
            onClick={() => setLang(code)}
            className={`tap min-h-9 min-w-10 rounded-full px-2 uppercase ${
              on ? "bg-ember text-ink" : solid ? "text-ink" : "text-paper"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const photo = scenes[0];
  return (
    <section className="relative flex min-h-svh flex-col justify-end pt-24 pb-12 md:pb-16">
      <div className="wrap hero-grid grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <div>
          <p className="kicker text-ember">{t.heroKicker}</p>
          <p className="mt-4 text-sm text-paper/70">{t.heroKind}</p>
          <h1 className="hero-title mt-2 text-paper">
            <span className="block" key={`${lang}-title`}>
              {t.heroTitle}
            </span>
            <span className="hero-sub mt-1 block">{t.heroSub}</span>
          </h1>
          <p key={`${lang}-lead`} className="lang-in mt-6 max-w-md text-lg text-paper/80">
            {t.heroLead}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#reserve"
              className="tap inline-flex min-h-12 items-center rounded-full bg-ember px-5 font-semibold text-ink"
            >
              {t.book}
            </a>
            <a
              href="#menu"
              className="tap inline-flex min-h-12 items-center rounded-full border border-line-dark px-5 font-medium text-paper"
            >
              {t.seeMenu}
            </a>
          </div>
          <div className="mt-6">
            <OpenChip lang={lang} />
          </div>
        </div>
        <figure className="hero-frame">
          <img
            src={photo.src}
            width={photo.w}
            height={photo.h}
            alt={photo[lang].alt}
            className="hero-img"
            fetchPriority="high"
          />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/75 px-3 py-1 text-xs tracking-wide text-paper backdrop-blur-sm">
            {t.heroPhoto}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Marquee({ lang }: { lang: Lang }) {
  const items = collections[lang];
  const row = [...items, ...items];
  return (
    <div className="marquee border-y border-ink/10 bg-ember py-3 text-ink" aria-label={lang === "ru" ? "Подборки" : "Lists"}>
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className={`flex items-center ${i >= items.length ? "marquee-clone" : ""}`}>
            <span className="px-4 text-sm font-semibold tracking-wide">{item}</span>
            <span aria-hidden="true" className="size-1 rounded-full bg-ink/50" />
          </span>
        ))}
      </div>
    </div>
  );
}

function House({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const seen = useInView<HTMLDivElement>();
  const rating = lang === "ru" ? "5,0" : "5.0";
  const stats = [
    { value: rating, label: t.ratingWord, live: false as const },
    { value: RATINGS, label: t.ratingsWord, live: true as const },
    { value: REVIEWS, label: t.reviewsWord, live: true as const },
    { value: PHOTOS, label: t.photosWord, live: true as const },
  ];
  return (
    <section id="house" className="section bg-paper text-ink">
      <div className="wrap grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p className="eyebrow">{t.houseEyebrow}</p>
          <h2 className="display mt-4 text-6xl text-ink md:text-7xl">{t.houseTitle}</h2>
          <blockquote className="mt-8 border-l-2 border-ember pl-5">
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">«{t.houseQuote}»</p>
            <footer className="mt-3 text-sm text-mute">{t.houseBy}</footer>
          </blockquote>
          <p className="mt-6 max-w-xl text-ink/80">{t.houseBody}</p>
        </div>
        <div ref={seen.ref} className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-line">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-foam px-5 py-6">
              <p className="display text-5xl text-ink">
                {stat.live ? <Count to={stat.value} active={seen.on} lang={lang} /> : stat.value}
              </p>
              <p className="mt-2 text-sm text-mute">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Path({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const scroller = useRef<HTMLDivElement>(null);
  const slide = (dir: number) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.current?.scrollBy({ left: dir * 320, behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <section id="path" className="section bg-ink text-paper">
      <div className="wrap mb-8 flex items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="kicker text-ember">{t.pathEyebrow}</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">{t.pathTitle}</h2>
          <p className="mt-4 text-paper/75">{t.pathLead}</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className="tap grid size-11 place-items-center rounded-full border border-line-dark"
            onClick={() => slide(-1)}
            aria-label={lang === "ru" ? "Назад" : "Back"}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="tap grid size-11 place-items-center rounded-full border border-line-dark"
            onClick={() => slide(1)}
            aria-label={lang === "ru" ? "Дальше" : "Forward"}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div ref={scroller} className="snap-row">
        {scenes.map((scene, index) => (
          <article key={scene.id} className="snap-card">
            <img src={scene.src} width={scene.w} height={scene.h} alt={scene[lang].alt} loading="lazy" />
            <div className="scene-shade" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="kicker text-ember">
                0{index + 1} {scene[lang].kicker}
              </p>
              <h3 className="display mt-2 text-4xl">{scene[lang].title}</h3>
              <p className="mt-2 max-w-xs text-sm text-paper/80">{scene[lang].text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Plate({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="section bg-paper text-ink">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <figure className="overflow-hidden rounded-card bg-paper-deep">
          <img
            src="/photos/tower.jpg"
            width={870}
            height={1134}
            alt={
              lang === "ru"
                ? "Блюдо слоями: мясо и картофель с гриля, кукуруза и розмарин"
                : "Layered plate: grilled meat and potato, corn and rosemary"
            }
            className="plate-photo w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div>
          <p className="eyebrow">{t.plateEyebrow}</p>
          <h2 className="display mt-4 text-6xl md:text-7xl">{t.plateTitle}</h2>
          <p className="mt-6 max-w-lg text-lg text-ink/80">{t.plateBody}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {t.layers.map((layer) => (
              <li key={layer} className="rounded-full border border-line bg-foam px-3 py-1.5 text-sm">
                {layer}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-md text-sm text-mute">{t.plateNote}</p>
        </div>
      </div>
    </section>
  );
}

function MenuBlock({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [cat, setCat] = useState<(typeof CATS)[number]>("all");
  const shown = dishes.filter((dish) => cat === "all" || dish.cat === cat);
  const listId = useId();
  return (
    <section id="menu" className="section bg-ink text-paper">
      <div className="wrap">
        <p className="kicker text-ember">{t.menuEyebrow}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <h2 className="display text-5xl md:text-6xl">{t.menuTitle}</h2>
          <p className="text-paper/75">{t.menuLead}</p>
        </div>

        <div className="mt-8 rounded-card border border-line-dark bg-ink-soft px-5 py-5 md:px-6">
          <p className="font-display text-2xl">{t.breakfastTitle}</p>
          <p className="mt-2 max-w-2xl text-sm text-paper/75">{t.breakfastBody}</p>
        </div>

        <div role="tablist" aria-label={t.navMenu} className="mt-8 flex gap-2 overflow-x-auto pb-1">
          {CATS.map((id) => {
            const on = cat === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={listId}
                onClick={() => setCat(id)}
                className={`tap shrink-0 rounded-full px-4 text-sm font-semibold min-h-11 ${
                  on ? "bg-ember text-ink" : "border border-line-dark text-paper"
                }`}
              >
                {t.cats[id]}
              </button>
            );
          })}
        </div>

        <div id={listId} role="tabpanel" className="mt-4">
          <ul key={`${cat}-${lang}`} className="lang-in divide-y divide-line-dark border-y border-line-dark">
            {shown.map((dish, index) => (
              <li key={dish.id} className="grid gap-2 py-5 md:grid-cols-[4rem_1fr] md:gap-6">
                <span className="font-display text-ember tabular-nums">0{index + 1}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-2xl">{dish[lang].name}</h3>
                    {dish[lang].aka ? <span className="text-sm text-paper/60">{dish[lang].aka}</span> : null}
                    <span className="text-xs tracking-wide text-paper/45 uppercase">
                      {dish.from === "review" ? t.fromReview : t.fromList}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-paper/75">{dish[lang].text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5 text-sm text-paper/55">{t.menuNote}</p>
      </div>
    </section>
  );
}

function Voices({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section id="voices" className="section bg-paper text-ink">
      <div className="wrap">
        <p className="eyebrow">{t.voicesEyebrow}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="display max-w-xl text-5xl md:text-6xl">{t.voicesTitle}</h2>
          <p className="max-w-sm text-ink/70">{t.voicesLead}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <figure
              key={review.id}
              className={`flex flex-col rounded-card border border-line bg-foam p-6 ${
                index === 0 ? "lg:bg-ink lg:text-paper" : ""
              }`}
            >
              <blockquote className="font-display text-xl leading-snug md:text-2xl">«{review[lang].text}»</blockquote>
              <figcaption className="mt-auto pt-6">
                <p className="font-semibold">{review[lang].name}</p>
                <p className={`mt-1 text-sm ${index === 0 ? "text-mute lg:text-paper/65" : "text-mute"}`}>
                  {review[lang].meta}
                </p>
                {review.likes > 0 ? (
                  <p className={`mt-3 kicker ${index === 0 ? "text-ember-deep lg:text-ember" : "text-ember-deep"}`}>
                    {review.likes} {review.likes === 1 ? t.likeOne : t.likeMany}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink"
        >
          {t.allReviews}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  note: string;
};

function compose(lang: Lang, form: FormState) {
  const lines =
    lang === "ru"
      ? [
          "Здравствуйте! Хочу стол в Захид Кебаб.",
          `Имя: ${form.name.trim()}`,
          `Телефон: ${form.phone.trim()}`,
          `Дата: ${form.date}`,
          `Время: ${form.time}`,
          `Гостей: ${form.guests}`,
          form.note.trim() ? `Пожелание: ${form.note.trim()}` : "",
        ]
      : [
          "Hello! I'd like a table at Zahid Kebab.",
          `Name: ${form.name.trim()}`,
          `Phone: ${form.phone.trim()}`,
          `Date: ${form.date}`,
          `Time: ${form.time}`,
          `Guests: ${form.guests}`,
          form.note.trim() ? `Note: ${form.note.trim()}` : "",
        ];
  return lines.filter(Boolean).join("\n");
}

function Visit({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    date: "",
    time: "19:30",
    guests: 2,
    note: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [ready, setReady] = useState<string | null>(null);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const iso = tashkentParts(new Date()).isoDate;
    setMinDate(iso);
    setForm((current) => ({ ...current, date: current.date || iso }));
  }, []);

  useEffect(() => {
    setReady((message) => (message ? compose(lang, form) : message));
  }, [lang, form]);

  const set = (key: keyof FormState, value: string | number) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
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
    { icon: Bike, label: t.featDelivery },
    { icon: ShoppingBag, label: t.featTake },
    { icon: Coffee, label: t.featCoffee },
  ];

  return (
    <section id="visit" className="section bg-ink pb-28 text-paper md:pb-28">
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="kicker text-ember">{t.visitEyebrow}</p>
          <h2 className="display mt-4 text-6xl md:text-7xl">{t.visitTitle}</h2>
          <p className="mt-4 max-w-md text-paper/75">{t.visitLead}</p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="kicker flex items-center gap-2 text-paper/55">
                <MapPin size={14} />
                {t.addressLabel}
              </dt>
              <dd className="mt-1 text-lg">{t.address}</dd>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-paper/60">{t.metro}</dt>
                <dd className="font-display text-3xl">{t.metroDist}</dd>
              </div>
              <div>
                <dt className="text-sm text-paper/60">{t.pearl}</dt>
                <dd className="font-display text-3xl">{t.pearlDist}</dd>
              </div>
            </div>
            <div>
              <dt className="kicker flex items-center gap-2 text-paper/55">
                <Clock size={14} />
                {t.hoursLabel}
              </dt>
              <dd className="mt-1 text-paper/80">{t.hoursBody}</dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <span
                  key={feature.label}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line-dark px-3 text-sm"
                >
                  <Icon size={15} />
                  {feature.label}
                </span>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="tap inline-flex min-h-12 items-center gap-2 rounded-full bg-ember px-5 font-semibold text-ink"
            >
              <Phone size={16} />
              {PHONE_PRETTY}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="tap inline-flex min-h-12 items-center gap-2 rounded-full border border-line-dark px-5 font-medium"
            >
              {t.route}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div id="reserve" className="rounded-card bg-paper p-6 text-ink md:p-8">
          {ready ? (
            <div className="lang-in">
              <p className="eyebrow">{t.formTitle}</p>
              <h3 className="display mt-3 text-4xl">{t.ready}</h3>
              <p className="mt-3 text-ink/70">{t.readyLead}</p>
              <pre className="mt-5 overflow-x-auto rounded-2xl bg-foam p-4 font-sans text-sm leading-relaxed whitespace-pre-wrap text-ink">
                {ready}
              </pre>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(ready)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="tap inline-flex min-h-12 items-center rounded-full bg-ember px-5 font-semibold text-ink"
                >
                  {t.whatsapp}
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="tap inline-flex min-h-12 items-center rounded-full border border-line px-5 font-semibold"
                >
                  {t.call}
                </a>
                <button
                  type="button"
                  onClick={() => setReady(null)}
                  className="tap inline-flex min-h-12 items-center px-3 text-sm font-semibold text-mute"
                >
                  {t.edit}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <p className="eyebrow">{t.formTitle}</p>
              <h3 className="display mt-3 text-4xl">
                {lang === "ru" ? "Напишите — стол подтвердят люди." : "Write it. A person confirms the table."}
              </h3>
              <p className="mt-3 text-ink/70">{t.formLead}</p>

              <label className="mt-6 block text-sm font-medium" htmlFor="guest-name">
                {t.name}
                <input
                  id="guest-name"
                  className={`field ${errors.name ? "field-bad" : ""}`}
                  value={form.name}
                  autoComplete="name"
                  onChange={(event) => set("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
              </label>
              {errors.name ? <p className="mt-1 text-sm text-ember-deep">{errors.name}</p> : null}

              <label className="mt-4 block text-sm font-medium" htmlFor="guest-phone">
                {t.phone}
                <input
                  id="guest-phone"
                  className={`field ${errors.phone ? "field-bad" : ""}`}
                  value={form.phone}
                  inputMode="tel"
                  autoComplete="tel"
                  onChange={(event) => set("phone", event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                />
              </label>
              {errors.phone ? <p className="mt-1 text-sm text-ember-deep">{errors.phone}</p> : null}

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium" htmlFor="guest-date">
                  {t.date}
                  <input
                    id="guest-date"
                    type="date"
                    min={minDate || undefined}
                    className={`field ${errors.date ? "field-bad" : ""}`}
                    value={form.date}
                    onChange={(event) => set("date", event.target.value)}
                    aria-invalid={Boolean(errors.date)}
                  />
                </label>
                <label className="block text-sm font-medium" htmlFor="guest-time">
                  {t.time}
                  <select
                    id="guest-time"
                    className="field"
                    value={form.time}
                    onChange={(event) => set("time", event.target.value)}
                  >
                    {SLOT_TIMES.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              {errors.date ? <p className="mt-1 text-sm text-ember-deep">{errors.date}</p> : null}

              <div className="mt-5 flex items-center justify-between border-b border-line py-2">
                <span className="text-sm font-medium">{t.guests}</span>
                <span className="flex items-center gap-1">
                  <button
                    type="button"
                    className="tap grid size-11 place-items-center rounded-full border border-line disabled:opacity-40"
                    onClick={() => set("guests", Math.max(1, form.guests - 1))}
                    disabled={form.guests <= 1}
                    aria-label="-"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-14 text-center text-sm tabular-nums">{t.guestsWord(form.guests)}</span>
                  <button
                    type="button"
                    className="tap grid size-11 place-items-center rounded-full border border-line disabled:opacity-40"
                    onClick={() => set("guests", Math.min(14, form.guests + 1))}
                    disabled={form.guests >= 14}
                    aria-label="+"
                  >
                    <Plus size={16} />
                  </button>
                </span>
              </div>

              <label className="mt-4 block text-sm font-medium" htmlFor="guest-note">
                {t.note}
                <input
                  id="guest-note"
                  className="field"
                  value={form.note}
                  placeholder={t.notePh}
                  onChange={(event) => set("note", event.target.value)}
                />
              </label>

              <button
                type="submit"
                className="tap mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink font-semibold text-paper sm:w-auto sm:px-8"
              >
                {t.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <footer className="bg-ink pb-28 text-paper md:pb-12">
      <div className="wrap">
        <p className="wordmark">{t.logo}</p>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-line-dark pt-6">
          <div>
            <p className="text-sm text-paper/70">{t.footerNote}</p>
            <p className="mt-1 text-sm text-paper/50">
              {t.madeFor} · {t.hoursShort}
            </p>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="font-display text-3xl text-ember">
            {PHONE_PRETTY}
          </a>
        </div>
      </div>
    </footer>
  );
}

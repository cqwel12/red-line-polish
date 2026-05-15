import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, ShieldCheck, Droplets, Award, Phone, MapPin, Clock,
  Instagram, Facebook, Calendar, ArrowUpRight, Star, Quote,
  Car, SprayCan, Gem, Wrench, Sofa, Layers, ChevronRight,
} from "lucide-react";
import hero from "@/assets/hero.jpeg";
import about from "@/assets/about.jpeg";
import g1 from "@/assets/g1.jpeg";
import g2 from "@/assets/g2.jpeg";
import g3 from "@/assets/g3.jpeg";
import g4 from "@/assets/g4.jpeg";
import g5 from "@/assets/g5.jpeg";
import g6 from "@/assets/g6.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RED LINE — Detailing & Myjnia Premium | Kraków" },
      { name: "description", content: "RED LINE Kraków — premium detailing, powłoki ceramiczne, mycie detailingowe i pielęgnacja wnętrza." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoDetailing",
        name: "RED LINE | Myjnia & Detailing",
        image: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Aleksandra Fredry 36",
          postalCode: "30-605",
          addressLocality: "Kraków",
          addressCountry: "PL",
        },
        telephone: "+48 889 975 988",
        url: "https://booksy.com/pl-pl/92055_red-line-myjnia-detailing_motoryzacja_8820_krakow",
      }),
    }],
  }),
});

const BOOKSY = "https://booksy.com/pl-pl/92055_red-line-myjnia-detailing_motoryzacja_8820_krakow";

const SERVICES = [
  { icon: ShieldCheck, title: "Pakiety ochrony", desc: "Powłoki ceramiczne 1, 3, 5 lat z korektą lakieru i pełnym detailingiem.", tag: "od 3 600 zł" },
  { icon: Gem, title: "Pakiety detailingowe", desc: "Standard i VIP — kompleksowe mycie zewnętrzne i wnętrza w standardzie premium.", tag: "od 399 zł" },
  { icon: Droplets, title: "Mycie i pielęgnacja", desc: "Bezpieczne mycie detailingowe, snow foam, dwa wiadra, mikrofibra.", tag: "Codziennie" },
  { icon: Sofa, title: "Pranie tapicerki", desc: "Pranie foteli, podsufitki, drzwi, podłogi lub całego auta.", tag: "Ekstrakcja" },
  { icon: SprayCan, title: "Polerowanie lakieru", desc: "Korekta jedno-, dwu- i wieloetapowa. Usuwanie rys, hologramów, swirli.", tag: "1–3 dni" },
  { icon: Layers, title: "Powłoki ceramiczne", desc: "Aplikacje 1, 3, 5, 7 lat oraz powłoka elastomerowa 10 lat.", tag: "do 10 lat" },
  { icon: Wrench, title: "Usługi pojedyncze", desc: "Felgi, szyby, opony, silnik, smoła, owady, ozonowanie, pielęgnacja skóry.", tag: "Ekspres" },
  { icon: Car, title: "Wosk Carnauba & Swissvax", desc: "Najwyższej jakości naturalne woski dla głębokiego, ciepłego połysku.", tag: "Klasa premium" },
];

const FEATURES = [
  { icon: Sparkles, t: "Profesjonalne kosmetyki" },
  { icon: Droplets, t: "Bezpieczne metody mycia" },
  { icon: ShieldCheck, t: "Powłoki premium" },
  { icon: Award, t: "Doświadczenie i precyzja" },
];

const GALLERY = [
  { src: g1, h: "tall" }, { src: g2, h: "short" },
  { src: g3, h: "tall" }, { src: g4, h: "short" },
  { src: g5, h: "tall" }, { src: g6, h: "short" },
];

const TESTIMONIALS = [
  { n: "Michał K.", t: "Oddałem auto na pakiet ochrony 5 lat — efekt po prostu obłędny. Lakier wygląda lepiej niż salonowy. Polecam każdemu, kto ceni detal.", s: 5 },
  { n: "Karolina W.", t: "Pranie tapicerki i detailing wnętrza w moim SUV-ie — wnętrze pachnie i wygląda jak nowe. Profesjonalne podejście od pierwszego kontaktu.", s: 5 },
  { n: "Tomasz P.", t: "Korekta lakieru dwuetapowa na czarnym BMW — perfekcja. Widać pasję i precyzję. Już umawiam kolejną wizytę.", s: 5 },
  { n: "Anna M.", t: "Najlepsza myjnia detailingowa w Krakowie. Bezpieczne metody, fantastyczna obsługa, uczciwe ceny.", s: 5 },
  { n: "Paweł S.", t: "Powłoka ceramiczna na 3 lata — woda spływa kropelkami, mycie zajmuje połowę czasu. Mistrzowska robota.", s: 5 },
  { n: "Jakub R.", t: "Profesjonalizm, terminowość i efekt który robi wrażenie. RED LINE to mój nowy adres dla auta.", s: 5 },
];

const HOURS = [
  ["Poniedziałek", "09:00 – 17:00"],
  ["Wtorek", "09:00 – 17:00"],
  ["Środa", "09:00 – 17:00"],
  ["Czwartek", "09:00 – 17:00"],
  ["Piątek", "09:00 – 17:00"],
  ["Sobota", "09:00 – 16:00"],
  ["Niedziela", "Zamknięte"],
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["O nas", "#about"], ["Oferta", "#services"], ["Galeria", "#gallery"],
    ["Opinie", "#reviews"], ["Kontakt", "#contact"],
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className={`mx-auto max-w-7xl px-6 transition-all ${scrolled ? "glass rounded-full !py-2 !px-4" : ""}`}
           style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" className="flex items-center gap-2 group">
          <span className="block w-8 h-px bg-[var(--redline)] group-hover:w-12 transition-all" />
          <span className="font-display text-xl tracking-[0.25em] text-foreground">RED LINE</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">{l}</a>
          ))}
        </nav>
        <a href={BOOKSY} target="_blank" rel="noopener noreferrer"
           className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] px-5 py-2.5 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-full">
          Umów wizytę <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Detailing premium RED LINE Kraków" width={1920} height={1280} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 md:pb-32 pt-40 w-full">
        <div className="max-w-3xl animate-[fade-up_1s_ease-out]">
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-12 h-px bg-[var(--redline)]" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">Premium Detailing · Kraków</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] mb-6">
            RED <span className="text-gradient-gold">LINE</span><br />
            <span className="text-foreground/90">Detailing &amp; Myjnia</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Perfekcyjna pielęgnacja samochodu w standardzie premium. Powłoki ceramiczne, korekta lakieru, detailing wnętrza.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={BOOKSY} target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm hover:gap-5 transition-all">
              Umów wizytę <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </a>
            <a href="#services"
               className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wider uppercase text-sm hover:border-primary hover:text-primary transition-all">
              Zobacz ofertę <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-end gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <span className="block w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 md:py-40 relative">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="img-zoom relative aspect-[4/5] overflow-hidden border border-border">
          <img src={about} alt="RED LINE studio detailingowe Kraków" width={1280} height={1280} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary">O nas</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-8">
            Pasja do motoryzacji.<br />
            <span className="text-gradient-gold">Perfekcja w detalu.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            RED LINE to krakowskie studio detailingowe, w którym każdy samochód traktujemy
            jak własny. Stawiamy na bezpieczne metody pracy, najwyższej klasy kosmetyki
            i indywidualne podejście do każdego klienta.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Specjalizujemy się w powłokach ceramicznych, korekcie lakieru i kompleksowym
            detailingu wnętrza. Łączymy doświadczenie z precyzją — tak, by efekt przeszedł
            Twoje oczekiwania.
          </p>
          <div className="grid grid-cols-2 gap-5">
            {FEATURES.map(({ icon: Icon, t }) => (
              <div key={t} className="flex items-start gap-3 p-4 border border-border bg-card/50 card-hover">
                <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-28 md:py-40 bg-[var(--graphite)]/40 relative">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Oferta</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl">
              Usługi <span className="text-gradient-gold">premium</span><br />
              dla wymagających kierowców
            </h2>
          </div>
          <a href={BOOKSY} target="_blank" rel="noopener noreferrer"
             className="text-xs uppercase tracking-[0.25em] text-primary hover:underline self-start md:self-end inline-flex items-center gap-2">
            Pełny cennik na Booksy <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {SERVICES.map(({ icon: Icon, title, desc, tag }) => (
            <article key={title} className="group bg-background p-8 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-xl tracking-wider mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-[11px] uppercase tracking-[0.2em] text-primary">{tag}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="booking" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={g3} alt="" aria-hidden className="w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Rezerwacja</span>
          <span className="block w-8 h-px bg-primary" />
        </div>
        <h2 className="font-display text-4xl md:text-7xl leading-[1.05] mb-8">
          Zarezerwuj termin<br />
          w <span className="text-gradient-gold">kilka kliknięć</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Pełny grafik dostępny online — wybierz usługę, dogodny termin i potwierdź wizytę
          przez Booksy.
        </p>
        <a href={BOOKSY} target="_blank" rel="noopener noreferrer"
           className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-medium tracking-[0.2em] uppercase text-sm hover:gap-5 transition-all">
          <Calendar className="w-5 h-5" /> Umów termin online
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </a>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary">Galeria</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Realizacje <span className="text-gradient-gold">RED LINE</span>
            </h2>
          </div>
          <a href="https://www.instagram.com/redline_md/" target="_blank" rel="noopener noreferrer"
             className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary hover:underline">
            @redline_md <Instagram className="w-4 h-4" />
          </a>
        </div>
        <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {GALLERY.map((g, i) => (
            <div key={i} className={`img-zoom mb-4 break-inside-avoid border border-border ${g.h === "tall" ? "aspect-[4/5]" : "aspect-square"}`}>
              <img src={g.src} alt={`Realizacja detailing ${i + 1}`} loading="lazy" width={800} height={1024} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-28 md:py-40 bg-[var(--graphite)]/40 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Opinie</span>
            <span className="block w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Co mówią <span className="text-gradient-gold">klienci</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {TESTIMONIALS.map((r) => (
            <figure key={r.n} className="bg-background p-8 card-hover relative">
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.s }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed mb-6">"{r.t}"</blockquote>
              <figcaption className="text-xs uppercase tracking-[0.2em] text-muted-foreground">— {r.n}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Kontakt</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-16 max-w-3xl">
          Odwiedź nasze <span className="text-gradient-gold">studio</span> w Krakowie
        </h2>

        <div className="grid lg:grid-cols-5 gap-px bg-border">
          <div className="lg:col-span-2 bg-background p-8 md:p-10 space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Adres</div>
                <p className="text-foreground">Aleksandra Fredry 36<br />30-605 Kraków, Podgórze</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-1">Telefon</div>
                <a href="tel:+48889975988" className="text-foreground hover:text-primary transition-colors text-lg">889 975 988</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Godziny otwarcia</div>
                <ul className="space-y-1.5 text-sm">
                  {HOURS.map(([d, h]) => (
                    <li key={d} className="flex justify-between gap-6 border-b border-border/50 pb-1.5">
                      <span className="text-muted-foreground">{d}</span>
                      <span className={h === "Zamknięte" ? "text-[var(--redline)]" : "text-foreground"}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href={BOOKSY} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:gap-5 transition-all">
              Umów wizytę <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-3 bg-background min-h-[400px] lg:min-h-0 relative">
            <iframe
              title="Mapa RED LINE Kraków"
              src="https://www.google.com/maps?q=Aleksandra+Fredry+36,+30-605+Krak%C3%B3w&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] grayscale contrast-110 brightness-75"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-10 bg-[var(--graphite)]/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="block w-10 h-px bg-[var(--redline)]" />
              <span className="font-display text-2xl tracking-[0.25em]">RED LINE</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Premium detailing &amp; myjnia w sercu Krakowa. Pasja, precyzja i najlepsze
              kosmetyki dla Twojego samochodu.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/redline_md/" target="_blank" rel="noopener noreferrer"
                 aria-label="Instagram"
                 className="w-11 h-11 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/redlinemd/?locale=pl_PL" target="_blank" rel="noopener noreferrer"
                 aria-label="Facebook"
                 className="w-11 h-11 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-primary mb-4">Nawigacja</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary">O nas</a></li>
              <li><a href="#services" className="hover:text-primary">Oferta</a></li>
              <li><a href="#gallery" className="hover:text-primary">Galeria</a></li>
              <li><a href="#reviews" className="hover:text-primary">Opinie</a></li>
              <li><a href="#contact" className="hover:text-primary">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-primary mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Aleksandra Fredry 36</li>
              <li>30-605 Kraków</li>
              <li><a href="tel:+48889975988" className="hover:text-primary">889 975 988</a></li>
              <li><a href={BOOKSY} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Booksy</a></li>
            </ul>
          </div>
        </div>
        <div className="hairline mb-6" />
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} RED LINE Myjnia &amp; Detailing. Wszelkie prawa zastrzeżone.</span>
          <span className="uppercase tracking-[0.25em]">Kraków · Polska</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

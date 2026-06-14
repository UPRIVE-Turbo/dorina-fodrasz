# Dorina Fodrász — Weboldal Specifikáció

**Típus:** Egyoldalas magyar nyelvű landing page
**Iparág:** Fodrászat | **Város:** Miskolc
**Web státusz:** Csak Facebook/Instagram (nincs weboldal)
**Elérhetőség:** Tel: +36 70 328 0824 | FB: facebook.com/dorinafodraszmiskolc | IG: @tdorinaa | Miskolc (Széchenyi u. környéke)

---

Készíts egy magyar nyelvű, egyoldalas landing page-et egy fodrász szalonnak:

AZ ÜZLET ADATAI:
- Név: Dorina Fodrász
- Helyszín: Miskolc (Széchenyi utca környéke — pontosítandó)
- Telefon: +36 70 328 0824
- Facebook: facebook.com/dorinafodraszmiskolc | Instagram: @tdorinaa | TikTok
- Szolgáltatások: Női és férfi hajvágás, festés, balayage, melír, styling

DESIGN:
- Stílus: Modern, divatos, nőies
- Színek: Mély lila (#6B4A8B) fejlécekhez, rozé arany (#C9A9A6) kiemelésekhez, törtfehér (#F7F5F9) háttérhez, sötétszürke (#2C2C2C) szöveghez
- Betűtípus: Elegáns serif címekhez (pl. Cormorant Garamond), sans-serif szöveghez (pl. Inter)

FELÉPÍTÉS (egyetlen görgethető oldal):
1. Hero szekció: "Dorina Fodrász — Miskolc", szlogen ("Stílus és gondoskodás minden vendégnek"), CTA: "Időpontfoglalás"
2. Szolgáltatások: Női/férfi hajvágás, festés, balayage, melír, styling — rövid leírással, tájékoztató árakkal
3. Rólunk: Dorina bemutatkozása, tapasztalat, stílus
4. Galéria: 6-8 kép placeholder (munkák, előtte/utána)
5. Időpontfoglalás űrlap: Név, telefon, kívánt szolgáltatás (legördülő), kívánt időpont, megjegyzés (a Messenger-es foglalás kiváltására)
6. Elérhetőség: Telefon, cím, nyitvatartás, Google Maps
7. Lábléc: Facebook, Instagram, telefon, © 2026

HANGNEM: Barátságos, divatos, professzionális. Tegező.

TECHNIKAI: Mobilbarát, reszponzív. Telefonszám kattintható.

---

## Technikai követelmények
- **Stack:** Next.js 14+ (App Router) + Payload CMS 3.x (Postgres / @payloadcms/db-postgres) + Tailwind CSS
- **Nyelv:** Magyar (HU)
- **Hosting:** Vercel-kompatibilis
- **Responsive:** Mobile-first
- **SEO:** Meta tagek, Open Graph, magyar title/description
- **Űrlap:** Payload CMS form submission → submissions collection
- **Térkép:** Google Maps embed (Miskolc)

## Payload CMS Collections (Postgres adapter)
- `services` — Szolgáltatások (név, leírás, ár, ikon)
- `gallery` — Galéria képek (kép, alt, sorrend)
- `submissions` — Űrlap beküldések (név, telefon, email, üzenet, szolgáltatás, időpont)
- `settings` — Globális (cégnév, telefon, cím, nyitvatartás, social linkek)

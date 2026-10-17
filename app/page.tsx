import Image from "next/image";

const LINE_URL = "https://line.me/R/ti/p/~tew.tew1234";
const PHONE = "084-713-3578";
const TEL_URL = "tel:0847133578";
const FB_URL = "https://www.facebook.com/search/top?q=Tew%20Nantiya";
const IG_URL = "https://www.instagram.com/tewtew001";

const features = [
  {
    title: "คุณภาพดี ไม่ซ้ำใคร",
    text: "คัดงานป้ายเนื้อผ้าดี ตัดเย็บเรียบร้อย แต่ละแบบมีจำนวนจำกัด ใส่แล้วไม่ชนใคร",
    bg: "bg-pink-soft",
    dot: "bg-pink",
    icon: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z",
  },
  {
    title: "ราคาดี จับต้องได้",
    text: "งานป้ายในราคาที่สบายกระเป๋า สวยได้ทุกวันโดยไม่ต้องจ่ายแพง",
    bg: "bg-sky-soft",
    dot: "bg-sky",
    icon: "M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8zM7.5 7.5h.01",
  },
  {
    title: "อัปเดตแฟชั่นตลอด",
    text: "มีของใหม่เข้าร้านอยู่เสมอ ตามเทรนด์ทันทุกซีซัน ติดตามได้ทางไลน์และ IG",
    bg: "bg-green-soft",
    dot: "bg-green",
    icon: "M21 12a9 9 0 11-3-6.7M21 4v5h-5",
  },
];

// ข้อความตัวอย่าง — ควรแก้เป็นสินค้าและราคาจริงของร้าน
const products = [
  { name: "เสื้อ / ครอปท็อป", price: "เริ่มต้น 159.-", bg: "bg-pink-soft", shape: "top" },
  { name: "เดรส", price: "เริ่มต้น 290.-", bg: "bg-sky-soft", shape: "dress" },
  { name: "กางเกง / กระโปรง", price: "เริ่มต้น 199.-", bg: "bg-green-soft", shape: "skirt" },
  { name: "ชุดเซ็ต", price: "เริ่มต้น 350.-", bg: "bg-pink-soft", shape: "set" },
];

// รูปประกอบจาก Unsplash (ใช้ฟรี) — เปลี่ยนเป็นรูปสินค้าจริงของร้านได้ที่ public/looks
const looks = [
  { src: "/looks/look-1.jpg", label: "Denim Crop", alt: "นางแบบใส่เสื้อครอปสีขาวกับแจ็คเก็ตยีนส์" },
  { src: "/looks/look-2.jpg", label: "All Black", alt: "นางแบบใส่ชุดโทนดำกับแจ็คเก็ตหนัง" },
  { src: "/looks/look-3.jpg", label: "Smart Casual", alt: "นางแบบใส่เสื้อเชิ้ตขาวกับสายเอี๊ยม" },
  { src: "/looks/look-4.jpg", label: "Pastel Pop", alt: "นางแบบสองคนใส่ชุดสีชมพูและฟ้าพาสเทล" },
  { src: "/looks/look-5.jpg", label: "Denim Overall", alt: "นางแบบใส่เอี๊ยมยีนส์กับเสื้อดำ" },
  { src: "/looks/look-6.jpg", label: "Street Chic", alt: "นางแบบใส่เบลเซอร์ดำกับกระโปรงลายสก๊อต" },
];

const faqs = [
  {
    q: "สั่งซื้อยังไง?",
    a: "ทักไลน์ tew.tew1234 ส่งรูปหรือชื่อแบบที่ชอบมาได้เลย แอดมินจะเช็คสต็อก ไซซ์ และแจ้งยอดให้ค่ะ",
  },
  {
    q: "มีไซซ์อะไรบ้าง?",
    a: "ส่วนใหญ่เป็นฟรีไซซ์และ S–XL แล้วแต่แบบ ทักมาถามสัดส่วนจริงของแต่ละตัวได้เลยค่ะ",
  },
  {
    q: "ส่งของยังไง ใช้เวลากี่วัน?",
    a: "จัดส่งทั่วประเทศ โดยปกติได้รับภายใน 1–3 วันหลังยืนยันการโอน",
  },
  {
    q: "ติดต่อได้ช่วงเวลาไหน?",
    a: "ทักได้ตลอดเวลา แอดมินจะรีบตอบกลับให้เร็วที่สุดค่ะ",
  },
];

function Icon({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

function Garment({ shape }: { shape: string }) {
  const paths: Record<string, string> = {
    top: "M22 14l10-6h16l10 6 8 14-10 5-4-6v37H28V27l-4 6-10-5 8-14z",
    dress: "M30 8h20l-2 14 14 42H18l14-42-2-14z",
    skirt: "M26 14h28l12 48H14l12-48zM26 22h28",
    set: "M24 8l8-4h16l8 4 6 12-8 3-2-3v14H28V20l-2 3-8-3 6-12zM26 42h28l6 30H20l6-30z",
  };
  return (
    <svg
      viewBox="0 0 80 80"
      className="h-24 w-24 text-foreground"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[shape]} />
    </svg>
  );
}

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-lg font-medium text-background transition hover:opacity-85 ${className}`}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-line-green" aria-hidden="true" />
      ทักไลน์เลย
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="text-sm font-medium tracking-widest text-muted">{eyebrow}</p>
      <h2 className="mt-2 font-display text-title font-semibold">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#" className="font-display text-xl font-semibold">
            TewTew<span className="text-pink">Shop</span>
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground px-4 py-1.5 text-sm font-medium transition hover:bg-foreground hover:text-background"
          >
            ทักไลน์
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ส่วนหัว */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-soft" />
          <div className="pointer-events-none absolute -right-20 top-40 h-64 w-64 rounded-full bg-sky-soft" />
          <div className="pointer-events-none absolute bottom-6 left-1/3 h-16 w-16 rounded-full bg-green-soft" />
          <div className="relative mx-auto max-w-3xl px-5 pb-20 pt-16 text-center sm:pt-24">
            <div className="mb-6 flex justify-center gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-pink" />
              <span className="h-3 w-3 rounded-full bg-sky" />
              <span className="h-3 w-3 rounded-full bg-green" />
            </div>
            <p className="text-sm font-medium tracking-widest text-muted">เสื้อผ้างานป้ายสำหรับสาว ๆ</p>
            <h1 className="mt-3 font-display text-hero font-semibold">TewTewShop</h1>
            <p className="mx-auto mt-5 max-w-xl text-lead text-muted">
              เสื้อผ้างานป้าย ราคาถูก คุณภาพดี ไม่ซ้ำใคร
              <br className="hidden sm:block" /> อัปเดตแฟชั่นใหม่ให้คุณสวยได้ทุกวัน
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <LineButton className="w-full sm:w-auto" />
              <p className="text-sm text-muted">LINE ID: tew.tew1234 · ตอบไวตลอดเวลา</p>
            </div>
          </div>
        </section>

        {/* ลุคแนะนำ */}
        <section className="bg-foreground px-5 py-20 text-background">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-medium tracking-[0.3em] text-pink">NEW ARRIVALS</p>
              <h2 className="mt-2 font-display text-title font-semibold">ลุคใหม่ ทันเทรนด์ทุกวัน</h2>
              <p className="mx-auto mt-3 max-w-md text-background/70">
                เสื้อผ้างานป้ายสไตล์วัยรุ่น ใส่ง่าย แมตช์ได้ทุกโอกาส
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
              {looks.map((l, i) => (
                <figure
                  key={l.src}
                  className={`group relative aspect-[3/4] overflow-hidden rounded-3xl ${i % 3 === 1 ? "md:translate-y-8" : ""}`}
                >
                  <Image
                    src={l.src}
                    alt={l.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                    <span className="text-xs tracking-[0.2em] text-background/70">LOOK {String(i + 1).padStart(2, "0")}</span>
                    <p className="font-display text-lg font-semibold">{l.label}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-16 text-center">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-lg font-medium text-foreground transition hover:opacity-85"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-line-green" aria-hidden="true" />
                ทักไลน์ถามแบบนี้
              </a>
            </div>
          </div>
        </section>

        {/* จุดเด่น */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="ทำไมต้อง TewTewShop" title="จุดเด่นของเรา" />
            <div className="grid gap-5 md:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className={`rounded-3xl ${f.bg} p-7`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background">
                    <Icon d={f.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-muted">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* สินค้าและราคา */}
        <section className="border-y border-line px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="สินค้า" title="สินค้าและราคา" />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {products.map((p) => (
                <div key={p.name} className="overflow-hidden rounded-3xl border border-line">
                  <div className={`flex aspect-square items-center justify-center ${p.bg}`}>
                    <Garment shape={p.shape} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{p.name}</h3>
                    <p className="mt-1 text-muted">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-muted">
              ดูแบบใหม่ทั้งหมดและเช็คสต็อกได้ทางไลน์ แบบมาไวหมดไว!
            </p>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-2xl">
            <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย" />
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-2xl leading-none text-muted transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="px-5 pb-24">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-foreground px-6 py-14 text-center text-background sm:px-12">
            <h2 className="font-display text-title font-semibold">ติดต่อเรา</h2>
            <p className="mt-2 text-background/70">เปิดตลอดเวลา ทักมาได้เลยนะคะ</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-line-green px-6 py-4 font-medium text-white transition hover:opacity-90"
              >
                LINE: tew.tew1234
              </a>
              <a
                href={TEL_URL}
                className="flex items-center justify-center gap-2 rounded-full bg-background px-6 py-4 font-medium text-foreground transition hover:opacity-90"
              >
                โทร {PHONE}
              </a>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-sky px-6 py-4 font-medium text-foreground transition hover:opacity-90"
              >
                Facebook: Tew Nantiya
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-pink px-6 py-4 font-medium text-foreground transition hover:opacity-90"
              >
                Instagram: tewtew001
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">
        <p className="font-display text-base font-semibold text-foreground">
          TewTew<span className="text-pink">Shop</span>
        </p>
        <p className="mt-1">เสื้อผ้างานป้าย ราคาถูก คุณภาพดี</p>
        <p className="mt-3">© 2026 TewTewShop</p>
        <p className="mt-1 text-xs">ภาพประกอบจาก Unsplash</p>
      </footer>
    </>
  );
}

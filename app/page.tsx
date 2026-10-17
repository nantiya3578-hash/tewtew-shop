import Image from "next/image";

const LINE_URL = "https://line.me/R/ti/p/~tew.tew1234";
const PHONE = "084-713-3578";
const TEL_URL = "tel:0847133578";
const FB_URL = "https://www.facebook.com/search/top?q=Tew%20Nantiya";
const IG_URL = "https://www.instagram.com/tewtew001";

// ข้อความตัวอย่าง — ควรแก้ชื่อสินค้าและราคาเป็นของจริง
// รูปประกอบจาก Unsplash (ใช้ฟรี) เปลี่ยนเป็นรูปสินค้าจริงได้ที่ public/shop
const products = [
  { src: "/shop/product-1.jpg", name: "เสื้อแขนกุดทรงอสมมาตร", color: "ดำ", price: 290, tag: "NEW" },
  { src: "/shop/product-2.jpg", name: "เสื้อแขนพองลายกราฟิก", color: "ชมพู", price: 259, tag: "HOT" },
  { src: "/shop/product-3.jpg", name: "จั๊มสูทผ้าขนหนูสายเดี่ยว", color: "เขียวมินต์", price: 350, tag: "NEW" },
  { src: "/shop/product-4.jpg", name: "เชิ้ตมัดย้อมโอเวอร์ไซซ์", color: "พาสเทล", price: 320, tag: "HOT" },
  { src: "/shop/product-5.jpg", name: "เสื้อไหมพรมโมแฮร์", color: "ครีม", price: 390, tag: "NEW" },
  { src: "/shop/product-6.jpg", name: "เสื้อลายสก็อตปักดอกไม้", color: "เหลือง", price: 279, tag: "NEW" },
];

const categories = ["เสื้อ", "เดรส", "เชิ้ต", "ไหมพรม", "จั๊มสูท", "กางเกง", "กระโปรง", "ชุดเซ็ต"];

const features = [
  {
    title: "คุณภาพดี ไม่ซ้ำใคร",
    text: "คัดงานป้ายเนื้อผ้าดี ตัดเย็บเรียบร้อยทุกชิ้น แต่ละแบบมีจำนวนจำกัด ใส่แล้วไม่ชนใคร",
    bg: "bg-pink-soft",
    icon: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z",
  },
  {
    title: "ราคาดี จับต้องได้",
    text: "งานป้ายในราคาที่สบายกระเป๋า สวยได้ทุกวันโดยไม่ต้องจ่ายแพง",
    bg: "bg-sky-soft",
    icon: "M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8zM7.5 7.5h.01",
  },
  {
    title: "อัปเดตแฟชั่นตลอด",
    text: "ของใหม่เข้าร้านอยู่เสมอ ตามเทรนด์ทันทุกซีซัน ติดตามแบบใหม่ได้ทางไลน์และ IG",
    bg: "bg-green-soft",
    icon: "M21 12a9 9 0 11-3-6.7M21 4v5h-5",
  },
];

const steps = [
  { title: "เลือกแบบที่ชอบ", text: "ดูสินค้าในหน้านี้ หรือขอดูแบบใหม่ทั้งหมดทางไลน์" },
  { title: "ทักไลน์ส่งรูป", text: "ส่งรูปหรือชื่อสินค้ามา แอดมินเช็คสต็อกและไซซ์ให้ทันที" },
  { title: "โอนแล้วรอรับ", text: "ยืนยันการโอน แล้วรอรับของสวยถึงหน้าบ้าน" },
];

const faqs = [
  {
    q: "งานป้ายคืออะไร?",
    a: "คือเสื้อผ้าที่คัดเกรดมาอย่างดี มีป้ายติด เนื้อผ้าและงานตัดเย็บคุณภาพดี แต่ราคาย่อมเยากว่าซื้อตามห้าง",
  },
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

function LineDot() {
  return <span className="h-2.5 w-2.5 rounded-full bg-line-green" aria-hidden="true" />;
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="text-sm font-medium tracking-[0.3em] text-muted">{eyebrow}</p>
      <h2 className="mt-2 font-display text-title font-semibold">{title}</h2>
      {sub && <p className="mx-auto mt-3 max-w-md text-muted">{sub}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* แถบโปรโมชัน */}
      <div className="bg-foreground px-4 py-2 text-center text-xs text-background sm:text-sm">
        ✦ ของใหม่เข้าทุกสัปดาห์ · ส่งทั่วไทย · ทักไลน์ได้ตลอดเวลา ✦
      </div>

      <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#" className="font-display text-xl font-semibold">
            TewTew<span className="text-pink">Shop</span>
          </a>
          <nav className="hidden gap-7 text-sm md:flex">
            <a href="#products" className="hover:text-muted">สินค้ามาใหม่</a>
            <a href="#why" className="hover:text-muted">ทำไมต้องเรา</a>
            <a href="#how" className="hover:text-muted">วิธีสั่งซื้อ</a>
            <a href="#contact" className="hover:text-muted">ติดต่อ</a>
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-85"
          >
            <LineDot />
            ทักไลน์
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ส่วนหัว */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-soft" />
          <div className="pointer-events-none absolute -bottom-24 right-1/3 h-56 w-56 rounded-full bg-sky-soft" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:pb-24 md:pt-16">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-background px-4 py-1.5 text-sm">
                <span className="h-2 w-2 rounded-full bg-pink" aria-hidden="true" />
                เสื้อผ้างานป้าย คัดเกรดทุกชิ้น
              </span>
              <h1 className="mt-5 font-display text-hero font-semibold">
                <span className="whitespace-nowrap">
                  สวยแบบ<span className="relative">
                    <span className="relative z-10">งานป้าย</span>
                    <span className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-pink/60 sm:h-4" aria-hidden="true" />
                  </span>
                </span>
                <br />
                <span className="whitespace-nowrap">ในราคาที่จับต้องได้</span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-lead text-muted md:mx-0">
                TewTewShop คัดเสื้อผ้างานป้ายคุณภาพดี ไม่ซ้ำใคร อัปเดตแฟชั่นใหม่ให้สาว ๆ สวยได้ทุกวัน
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-lg font-medium text-background transition hover:opacity-85"
                >
                  <LineDot />
                  ทักไลน์เลย
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full border border-foreground px-8 py-4 text-lg font-medium transition hover:bg-foreground hover:text-background"
                >
                  ดูสินค้ามาใหม่
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted md:justify-start">
                <li>✓ ราคาเริ่ม 259.-</li>
                <li>✓ ของมีจำนวนจำกัด</li>
                <li>✓ ตอบไวตลอดเวลา</li>
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:aspect-[4/4.5]">
                <Image
                  src="/shop/hero.jpg"
                  alt="ราวแขวนเสื้อผ้างานป้ายหลากสไตล์ในร้าน TewTewShop"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* ป้ายห้อย */}
              <div className="absolute -left-2 top-8 rotate-[-6deg] rounded-2xl bg-background px-5 py-3 shadow-lg sm:-left-6">
                <p className="text-xs tracking-[0.2em] text-muted">NEW IN</p>
                <p className="font-display text-lg font-semibold">คอลเลกชันใหม่</p>
              </div>
              <div className="absolute -bottom-4 right-4 rounded-2xl bg-sky px-5 py-3 shadow-lg">
                <p className="text-xs text-foreground/70">เริ่มต้นเพียง</p>
                <p className="font-display text-2xl font-semibold">259.-</p>
              </div>
            </div>
          </div>
        </section>

        {/* หมวดสินค้า */}
        <div className="border-y border-line bg-green-soft">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-4 [scrollbar-width:none] md:justify-center">
            {categories.map((c) => (
              <a
                key={c}
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-background px-5 py-2 text-sm font-medium transition hover:bg-foreground hover:text-background"
              >
                {c}
              </a>
            ))}
          </div>
        </div>

        {/* สินค้ามาใหม่ */}
        <section id="products" className="scroll-mt-20 px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="NEW ARRIVALS"
              title="สินค้ามาใหม่"
              sub="แต่ละแบบมีจำนวนจำกัด ถูกใจตัวไหนทักไลน์จองได้เลย"
            />
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
              {products.map((p) => (
                <article key={p.src} className="group flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-pink-soft">
                    <Image
                      src={p.src}
                      alt={`${p.name} สี${p.color}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span
                      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold tracking-wider ${
                        p.tag === "HOT" ? "bg-pink text-foreground" : "bg-background text-foreground"
                      }`}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-1 flex-col">
                    <p className="text-xs tracking-wider text-muted">งานป้าย · สี{p.color}</p>
                    <h3 className="mt-1 font-medium leading-snug sm:text-lg">{p.name}</h3>
                    <p className="mb-3 mt-1 font-display text-xl font-semibold">{p.price}.-</p>
                    <a
                      href={LINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-foreground px-4 py-2.5 text-sm font-medium transition hover:bg-foreground hover:text-background"
                    >
                      <LineDot />
                      ทักไลน์สั่งตัวนี้
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-14 rounded-3xl bg-sky-soft px-6 py-8 text-center">
              <p className="font-display text-xl font-semibold">ยังมีแบบอื่นอีกเยอะ!</p>
              <p className="mt-1 text-muted">ทักไลน์มาขอดูแบบใหม่ทั้งหมดได้เลย แบบมาไวหมดไว</p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-medium text-background transition hover:opacity-85"
              >
                <LineDot />
                ขอดูแบบทั้งหมด
              </a>
            </div>
          </div>
        </section>

        {/* จุดเด่น */}
        <section id="why" className="scroll-mt-20 border-t border-line px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="WHY TEWTEW" title="ทำไมต้อง TewTewShop" />
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

        {/* วิธีสั่งซื้อ */}
        <section id="how" className="scroll-mt-20 bg-foreground px-5 py-20 text-background">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-medium tracking-[0.3em] text-pink">HOW TO ORDER</p>
              <h2 className="mt-2 font-display text-title font-semibold">สั่งง่าย ๆ แค่ 3 ขั้นตอน</h2>
            </div>
            <ol className="grid gap-5 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-3xl border border-background/15 p-7">
                  <span className="font-display text-4xl font-semibold text-sky">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-background/70">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 text-center">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-lg font-medium text-foreground transition hover:opacity-85"
              >
                <LineDot />
                ทักไลน์เลย
              </a>
            </div>
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
        <section id="contact" className="scroll-mt-20 px-5 pb-24">
          <div className="mx-auto max-w-3xl rounded-[2rem] bg-pink-soft px-6 py-14 text-center sm:px-12">
            <h2 className="font-display text-title font-semibold">ติดต่อเรา</h2>
            <p className="mt-2 text-muted">เปิดตลอดเวลา ทักมาได้เลยนะคะ</p>
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
                className="flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 font-medium text-background transition hover:opacity-90"
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
                className="flex items-center justify-center gap-2 rounded-full bg-background px-6 py-4 font-medium text-foreground transition hover:opacity-90"
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

      {/* ปุ่มไลน์ลอยบนมือถือ */}
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ทักไลน์ TewTewShop"
        className="fixed bottom-4 right-4 z-30 flex items-center gap-2 rounded-full bg-line-green px-5 py-3 font-medium text-white shadow-lg md:hidden"
      >
        ทักไลน์
      </a>
    </>
  );
}

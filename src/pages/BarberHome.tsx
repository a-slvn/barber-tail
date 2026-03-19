const ACCENT = '#D4A76A';

const hairstyles = [
  {
    id: 1,
    name: 'Канадка',
    desc: 'Объём в теменной зоне поможет визуально скорректировать...',
  },
  {
    id: 2,
    name: 'Кроп',
    desc: 'Текстурированная чёлка, уложенная вперёд, визуально...',
  },
  {
    id: 3,
    name: 'Цезарь',
    desc: 'Короткая стрижка с чёлкой, отличный выбор для...',
  },
];

const navItems = [
  { icon: HomeIcon, label: 'Главная', active: true },
  { icon: ScissorsIcon, label: 'Примерка', active: false },
  { icon: PortraitIcon, label: 'Стилист', active: false },
  { icon: GalleryIcon, label: 'Образы', active: false },
];

export default function BarberHome() {
  return (
    <div className="min-h-screen bg-background-50 text-text-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 border-b border-base-100 bg-background-50/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-white-100">
            <ScissorsIcon
              className="size-5"
              style={{ color: ACCENT }}
            />
            <span className="text-base font-semibold">Barber Try-On</span>
          </div>
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  item.active
                    ? `text-[${ACCENT}]`
                    : 'text-text-200 hover:text-text-100'
                }`}
                style={item.active ? { color: ACCENT } : undefined}
              >
                <item.icon className="size-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="mx-auto max-w-2xl px-4 py-8">
        {/* Greeting */}
        <h1 className="text-2xl font-bold text-white-100">Привет, Andrei</h1>

        {/* Recommendations */}
        <section className="mt-8">
          <div className="flex items-center gap-2">
            <SparklesIcon
              className="size-5"
              style={{ color: ACCENT }}
            />
            <h2 className="text-lg font-semibold text-white-100">
              Подобрали для тебя
            </h2>
          </div>
          <p className="mt-1 text-sm text-text-200">
            Стрижки, которые подчеркнут твои черты лица
          </p>

          {/* Horizontal scroll cards */}
          <div className="scrollbar-hide -mx-4 mt-4 flex gap-4 overflow-x-auto px-4 pb-2">
            {hairstyles.map((h) => (
              <div
                key={h.id}
                className="min-w-[240px] max-w-[260px] shrink-0 overflow-hidden rounded-2xl border border-base-200 bg-background-100"
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/5] bg-gradient-to-b from-background-soft-400 to-background-soft-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserIcon className="size-16 text-text-200 opacity-30" />
                  </div>
                  <div className="absolute top-3 left-3 flex size-7 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                    {h.id}
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-white-100">{h.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-text-200">
                    {h.desc}
                  </p>
                  <button
                    className="mt-3 flex w-full items-center justify-center gap-1 rounded-lg border py-2.5 text-sm font-medium transition hover:bg-white/5"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    Примерить
                    <ChevronRightIcon className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action cards */}
        <section className="mt-6 space-y-3">
          {/* Try hairstyle */}
          <div className="flex items-center gap-4 rounded-2xl border border-base-200 bg-background-100 p-4">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}
            >
              <ScissorsIcon className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white-100">
                Примерить причёску
              </h3>
              <p className="text-sm text-text-200">
                Посмотри, как будешь выглядеть
              </p>
            </div>
          </div>

          {/* Personal stylist */}
          <div className="rounded-2xl border border-base-200 bg-background-100 p-4">
            <div className="flex items-center gap-4">
              <div
                className="flex size-12 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}
              >
                <SparklesIcon className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white-100">
                    Персональный стилист
                  </h3>
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: `${ACCENT}26`,
                      color: ACCENT,
                    }}
                  >
                    скоро
                  </span>
                </div>
                <p className="text-sm text-text-200">
                  Подберёт причёску под форму лица
                </p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg border border-base-200 bg-background-soft-200 py-2.5 text-sm font-medium text-text-100 transition hover:bg-background-soft-400">
              Сообщить, когда появится
            </button>
          </div>
        </section>

        {/* Recent looks */}
        <section className="mt-8">
          <h2 className="text-lg font-bold text-white-100">
            Последние образы
          </h2>
          <div className="mt-4 rounded-2xl border border-dashed border-base-200 py-10 text-center text-sm text-text-200">
            Пока пусто. Примерь первую причёску!
          </div>
        </section>
      </main>
    </div>
  );
}

/* --- Icons --- */

function ScissorsIcon({ className = 'size-5', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function HomeIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SparklesIcon({ className = 'size-5', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
    </svg>
  );
}

function PortraitIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 21v-1a5 5 0 0 1 10 0v1" />
    </svg>
  );
}

function GalleryIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function UserIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

function ChevronRightIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

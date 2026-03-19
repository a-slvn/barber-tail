import { Button } from '@/components/core/button';

const ACCENT = '#C4981A';
const ACCENT_LIGHT = '#D4A76A';

/* ─── Data ─── */

const stats = [
  { value: '2 400+', label: 'примерок сделано' },
  { value: '50+', label: 'стрижек в каталоге' },
  { value: '3', label: 'бесплатных примерки' },
];

const problems = [
  {
    icon: '😤',
    title: 'Показываешь фото — получаешь не то',
    desc: 'Барбер интерпретирует по-своему, а исправить уже поздно',
  },
  {
    icon: '🤷',
    title: 'Не знаешь, подойдёт ли стрижка',
    desc: 'Рискуешь каждый раз — а вдруг не к лицу?',
  },
  {
    icon: '⏳',
    title: 'Тратишь время на объяснения',
    desc: '«Вот тут покороче, тут подлиннее...» — и всё равно мимо',
  },
];

const steps = [
  {
    num: 1,
    icon: CameraIcon,
    title: 'Сфотографируйся',
    desc: 'Сделай селфи прямо в браузере или загрузи фото из галереи',
  },
  {
    num: 2,
    icon: PaletteIcon,
    title: 'Выбери стрижку',
    desc: 'Выбери из каталога, опиши словами или загрузи фото образца',
  },
  {
    num: 3,
    icon: SparklesIcon,
    title: 'Смотри результат',
    desc: 'Сохрани результат и покажи барберу — он поймёт с первого взгляда',
  },
];

const testimonials = [
  {
    text: 'Пришёл к барберу уже зная что хочу. Больше не трачу время на объяснения.',
    name: 'Артём К.',
    role: 'клиент барбершопа',
    initials: 'АК',
  },
  {
    text: 'Жена одобрила стрижку ещё до похода. Теперь только так принимаю решения.',
    name: 'Михаил Р.',
    role: 'постоянный клиент',
    initials: 'МР',
  },
  {
    text: 'Показываем клиентам прямо в кресле. Сразу понятно, чего хочет человек.',
    name: 'Дмитрий В.',
    role: 'барбер, 7 лет',
    initials: 'ДВ',
  },
];

const features = [
  {
    icon: ShieldIcon,
    title: 'Сохраняет лицо без изменений',
    desc: 'AI меняет только причёску, ваши черты остаются нетронутыми',
  },
  {
    icon: PhotoIcon,
    title: 'Работает на любом фото',
    desc: 'Фронтальное селфи, фото из галереи — подойдёт всё',
  },
  {
    icon: LayersIcon,
    title: 'Три режима примерки',
    desc: 'Каталог стрижек, описание словами или загрузка образца',
  },
  {
    icon: ShareIcon,
    title: 'Делись с друзьями и барбером',
    desc: 'Сохрани результат и покажи с телефона — или отправь ссылкой',
  },
];

const pricing = [
  {
    name: 'Бесплатно',
    price: '0 ₽',
    period: '',
    desc: 'Попробуй и реши, нравится ли',
    features: [
      '3 примерки',
      'Каталог стрижек',
      'Сохранение результатов',
    ],
    cta: 'Начать бесплатно',
    highlighted: false,
  },
  {
    name: 'Про',
    price: '299 ₽',
    period: '/ мес',
    desc: 'Для тех, кто экспериментирует',
    features: [
      'Безлимитные примерки',
      'Все режимы примерки',
      'Приоритетная генерация',
      'Высокое разрешение',
    ],
    cta: 'Выбрать Про',
    highlighted: true,
  },
];

const faq = [
  {
    q: 'Нужно ли скачивать приложение?',
    a: 'Нет, всё работает в браузере на любом устройстве. Просто откройте сайт и сделайте селфи.',
  },
  {
    q: 'Насколько реалистичен результат?',
    a: 'AI сохраняет ваши черты лица, форму головы и тон кожи. Результат выглядит как реальное фото.',
  },
  {
    q: 'Можно ли использовать любое фото?',
    a: 'Да, но лучший результат — на фронтальном селфи с хорошим освещением. Фото из галереи тоже подойдёт.',
  },
  {
    q: 'Как показать результат барберу?',
    a: 'Сохраните изображение на телефон или отправьте ссылку. Барбер увидит именно то, чего вы хотите.',
  },
];

/* ─── Page ─── */

export default function Landing() {
  return (
    <div className="min-h-screen bg-background-50 text-text-100">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}

/* ─── Sections ─── */

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-100 bg-background-50/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 text-white-100">
          <ScissorsIcon className="size-5" style={{ color: ACCENT }} />
          <span className="text-base font-semibold">Barber Try-On</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#pricing"
            className="hidden text-sm font-medium text-text-100 transition hover:text-white-100 sm:block"
          >
            Тарифы
          </a>
          <Button
            size="sm"
            className="rounded-full text-sm"
            style={{ backgroundColor: ACCENT }}
          >
            Попробовать бесплатно
          </Button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 600,
          background: `radial-gradient(circle, ${ACCENT}18 0%, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <span
            className="mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ backgroundColor: `${ACCENT}20`, color: ACCENT_LIGHT }}
          >
            3 примерки бесплатно
          </span>

          <h1 className="text-title-50 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Примерь стрижку{' '}
            <span style={{ color: ACCENT_LIGHT }}>до кресла</span> барбера
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base text-text-100 sm:text-lg">
            Сфотографируйся — и сразу увидишь, как будешь выглядеть с любой
            стрижкой. Покажи результат барберу.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              className="flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white transition hover:brightness-110"
              style={{ backgroundColor: ACCENT }}
            >
              Начать примерку
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </div>

        {/* Hairstyle cards */}
        <div className="mt-16 flex items-center justify-center gap-4 sm:gap-6">
          {['Андеркат', 'Фейд', 'Помп'].map((name, i) => (
            <div
              key={name}
              className="w-36 overflow-hidden rounded-2xl border border-base-200 bg-background-100 shadow-lg transition hover:scale-105 sm:w-44"
              style={{
                transform: `rotate(${(i - 1) * 4}deg)`,
              }}
            >
              <div className="relative aspect-[3/4] bg-gradient-to-b from-background-soft-400 to-background-soft-200">
                <UserIcon className="absolute inset-0 m-auto size-12 text-text-200 opacity-20" />
              </div>
              <div className="p-3 text-center">
                <span className="text-sm font-semibold text-white-100">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="border-y border-base-100 py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center sm:border-l sm:border-base-100 sm:first:border-l-0"
          >
            <div
              className="text-4xl font-bold"
              style={{ color: ACCENT_LIGHT }}
            >
              {s.value}
            </div>
            <div className="mt-1 text-sm text-text-200">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span
            className="mb-3 inline-block rounded-lg px-3.5 py-1 text-sm font-medium"
            style={{ backgroundColor: `${ACCENT}10`, color: ACCENT_LIGHT }}
          >
            Знакомо?
          </span>
          <h2 className="text-title-50 text-3xl font-semibold sm:text-4xl">
            Каждый раз одна и та же проблема
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-base-200 bg-background-100 p-6"
            >
              <div className="mb-4 text-3xl">{p.icon}</div>
              <h3 className="mb-2 text-base font-semibold text-white-100">
                {p.title}
              </h3>
              <p className="text-sm text-text-200">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="bg-background-soft-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <span
            className="mb-3 inline-block rounded-lg px-3.5 py-1 text-sm font-medium"
            style={{ backgroundColor: `${ACCENT}10`, color: ACCENT_LIGHT }}
          >
            Как это работает
          </span>
          <h2 className="text-title-50 text-3xl font-semibold sm:text-4xl">
            Три шага до нового образа
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative rounded-2xl border border-base-200 bg-background-100 p-6 pt-8"
            >
              {/* Number watermark */}
              <span
                className="pointer-events-none absolute top-3 right-4 text-7xl font-black opacity-5"
                style={{ color: ACCENT }}
              >
                {s.num}
              </span>

              {/* Icon */}
              <div
                className="mb-5 flex size-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT_LIGHT }}
              >
                <s.icon className="size-6" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white-100">
                {s.title}
              </h3>
              <p className="text-sm text-text-200">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <span
            className="mb-3 inline-block rounded-lg px-3.5 py-1 text-sm font-medium"
            style={{ backgroundColor: `${ACCENT}10`, color: ACCENT_LIGHT }}
          >
            Отзывы
          </span>
          <h2 className="text-title-50 text-3xl font-semibold sm:text-4xl">
            Что говорят клиенты
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-base-200 bg-background-100 p-6"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="size-4 text-yellow-500"
                  />
                ))}
              </div>

              <p className="flex-1 text-sm text-white-90">
                &laquo;{t.text}&raquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: `${ACCENT}26`,
                    color: ACCENT_LIGHT,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white-100">
                    {t.name}
                  </div>
                  <div className="text-xs text-text-200">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-background-soft-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="text-title-50 text-3xl font-semibold sm:text-4xl">
            Почему это работает
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-2xl border border-base-200 bg-background-100 p-6"
            >
              <div
                className="flex size-11 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT_LIGHT }}
              >
                <f.icon className="size-5" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white-100">{f.title}</h3>
                <p className="text-sm text-text-200">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <span
            className="mb-3 inline-block rounded-lg px-3.5 py-1 text-sm font-medium"
            style={{ backgroundColor: `${ACCENT}10`, color: ACCENT_LIGHT }}
          >
            Тарифы
          </span>
          <h2 className="text-title-50 text-3xl font-semibold sm:text-4xl">
            Простое ценообразование
          </h2>
          <p className="mt-3 text-sm text-text-200">
            Начни бесплатно — переходи на Про, когда понравится
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {pricing.map((p) => (
            <div
              key={p.name}
              className="relative overflow-hidden rounded-2xl border bg-background-100 p-6"
              style={{
                borderColor: p.highlighted
                  ? `${ACCENT}60`
                  : 'var(--border-color-base-200)',
              }}
            >
              {p.highlighted && (
                <div
                  className="absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  Популярный
                </div>
              )}
              <h3 className="text-lg font-semibold text-white-100">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-text-200">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white-100">
                  {p.price}
                </span>
                {p.period && (
                  <span className="text-sm text-text-200">{p.period}</span>
                )}
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckIcon
                      className="size-4 shrink-0"
                      style={{ color: ACCENT_LIGHT }}
                    />
                    <span className="text-text-100">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-8 w-full rounded-lg py-2.5 text-sm font-semibold transition"
                style={
                  p.highlighted
                    ? { backgroundColor: ACCENT, color: '#fff' }
                    : {
                        border: '1px solid var(--border-color-base-200)',
                        color: 'var(--color-text-100)',
                      }
                }
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-background-soft-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-title-50 text-3xl font-semibold sm:text-4xl">
            Частые вопросы
          </h2>
        </div>

        <div className="space-y-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-base-200 bg-background-100"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-white-100">
                {item.q}
                <ChevronDownIcon className="size-5 text-text-200 transition group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-sm text-text-200">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className="rounded-3xl border p-10 text-center sm:p-16"
          style={{ borderColor: `${ACCENT}40` }}
        >
          <div className="text-4xl">✂️</div>
          <h2 className="text-title-50 mt-4 text-3xl font-bold sm:text-4xl">
            Готов к новому образу?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-200">
            Загрузи фото, выбери стрижку — и увидишь результат за секунды
          </p>
          <button
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white transition hover:brightness-110"
            style={{ backgroundColor: ACCENT }}
          >
            Выбрать стрижку
            <ArrowRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-base-100 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center text-sm text-text-200 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <ScissorsIcon className="size-4" style={{ color: ACCENT }} />
          <span>Barber Try-On · Примерка стрижек</span>
        </div>
        <div className="flex gap-4">
          <a href="#pricing" className="transition hover:text-white-100">
            Тарифы
          </a>
          <a href="#" className="transition hover:text-white-100">
            Оферта
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Icons ─── */

function ScissorsIcon({
  className = 'size-5',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function ArrowRightIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CameraIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function PaletteIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function SparklesIcon({
  className = 'size-5',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

function StarIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ShieldIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function PhotoIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function LayersIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function ShareIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function CheckIcon({
  className = 'size-4',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronDownIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function UserIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

/* ─── Barber Try-On — AI Stylist Landing ─── */

import { createContext, useContext, useState, useCallback } from 'react';

/* ─── Theme ─── */

type Theme = 'dark' | 'light';

const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: 'dark',
  toggle: () => {},
});

function useTheme() {
  return useContext(ThemeCtx);
}

/* Palette per theme */
function t(dark: string, light: string) {
  // returns a getter; components call it inside render
  return { dark, light };
}

const palette = {
  // page
  bg:        t('#060608', '#FAFAF8'),
  bgSoft:    t('rgba(255,255,255,0.01)', 'rgba(0,0,0,0.015)'),
  // text
  heading:   t('#ffffff', '#1A1A1A'),
  body:      t('#9ca3af', '#6B7280'),
  muted:     t('#6b7280', '#9CA3AF'),
  subtle:    t('#404040', '#D1D5DB'),
  // cards / surfaces
  card:      t('rgba(255,255,255,0.03)', 'rgba(0,0,0,0.025)'),
  cardBorder:t('rgba(255,255,255,0.06)', 'rgba(0,0,0,0.07)'),
  glass:     t('rgba(255,255,255,0.03)', 'rgba(255,255,255,0.7)'),
  glassBorder: t('rgba(255,255,255,0.06)', 'rgba(0,0,0,0.06)'),
  // glow opacity modifiers
  glowA:     t('12', '08'),
  glowB:     t('06', '04'),
  // gold accents (same)
  g1:        t('#B8860B', '#96700A'),
  g2:        t('#D4A76A', '#B8860B'),
  g3:        t('#E8C88A', '#D4A76A'),
  // button
  btnText:   t('#0a0a0a', '#ffffff'),
  btnGlow1:  t('#B8860B30', '#B8860B20'),
  btnGlow2:  t('#B8860B10', '#B8860B08'),
  // nav
  navBg:     t('#060608', '#FAFAF8'),
  // grid texture
  gridOp:    t('0.015', '0.03'),
  // stat divider
  divider:   t('rgba(255,255,255,0.06)', 'rgba(0,0,0,0.08)'),
  // watermark
  wmOp:      t('0.06', '0.04'),
  // stars
  star:      t('#D4A76A', '#B8860B'),
  // highlight pricing bg
  pricingHi: t(`linear-gradient(180deg, #B8860B08, #D4A76A03, transparent)`,
               `linear-gradient(180deg, #B8860B06, #D4A76A02, transparent)`),
  pricingLo: t('rgba(255,255,255,0.02)', 'rgba(0,0,0,0.015)'),
  // footer text
  footerText:t('#404040', '#9CA3AF'),
  // faq
  faqSummary:t('#ffffff', '#1A1A1A'),
  faqBody:   t('#6b7280', '#6B7280'),
};

function useP() {
  const { theme } = useTheme();
  return (token: { dark: string; light: string }) => token[theme];
}

/* Gold palette (theme-aware) */
function useGold() {
  const p = useP();
  const g1 = p(palette.g1);
  const g2 = p(palette.g2);
  const g3 = p(palette.g3);
  const grad = `linear-gradient(135deg, ${g1}, ${g2}, ${g3})`;
  const gradText = `linear-gradient(135deg, ${g2}, ${g3}, ${p(palette.heading)}, ${g3}, ${g2})`;
  return { g1, g2, g3, grad, gradText };
}

/* ─── Data ─── */

const stats = [
  { value: '2 400+', label: 'примерок сделано' },
  { value: '50+', label: 'стрижек в каталоге' },
  { value: '3', label: 'бесплатных примерки' },
];

const problems = [
  { icon: '😤', title: 'Показываешь фото — получаешь не то', desc: 'Барбер интерпретирует по-своему, а исправить уже поздно' },
  { icon: '🤷', title: 'Не знаешь, подойдёт ли стрижка', desc: 'Рискуешь каждый раз — а вдруг не к лицу?' },
  { icon: '⏳', title: 'Тратишь время на объяснения', desc: '«Вот тут покороче, тут подлиннее...» — и всё равно мимо' },
];

const steps = [
  { num: 1, icon: CameraIcon, title: 'Сфотографируйся', desc: 'Сделай селфи прямо в браузере или загрузи фото из галереи' },
  { num: 2, icon: PaletteIcon, title: 'Выбери стрижку', desc: 'Выбери из каталога, опиши словами или загрузи фото образца' },
  { num: 3, icon: SparklesIcon, title: 'Смотри результат', desc: 'Сохрани результат и покажи барберу — он поймёт с первого взгляда' },
];

const testimonials = [
  { text: 'Пришёл к барберу уже зная что хочу. Больше не трачу время на объяснения.', name: 'Артём К.', role: 'клиент барбершопа', initials: 'АК' },
  { text: 'Жена одобрила стрижку ещё до похода. Теперь только так принимаю решения.', name: 'Михаил Р.', role: 'постоянный клиент', initials: 'МР' },
  { text: 'Показываем клиентам прямо в кресле. Сразу понятно, чего хочет человек.', name: 'Дмитрий В.', role: 'барбер, 7 лет', initials: 'ДВ' },
];

const features = [
  { icon: ShieldIcon, title: 'Сохраняет лицо без изменений', desc: 'AI меняет только причёску — ваши черты остаются нетронутыми' },
  { icon: PhotoIcon, title: 'Работает на любом фото', desc: 'Фронтальное селфи, фото из галереи — подойдёт всё' },
  { icon: LayersIcon, title: 'Три режима примерки', desc: 'Каталог стрижек, описание словами или загрузка образца' },
  { icon: ShareIcon, title: 'Делись с друзьями и барбером', desc: 'Сохрани результат и покажи с телефона — или отправь ссылкой' },
];

const pricing = [
  {
    name: 'Бесплатно', price: '0 ₽', gens: '3 генерации',
    desc: 'Попробуй и реши, нравится ли',
    features: ['3 генерации', 'Все стрижки из каталога', 'Описание своими словами', 'Сохранение результатов'],
    cta: 'Начать бесплатно', highlighted: false,
  },
  {
    name: 'Старт', price: '149 ₽', gens: '15 генераций',
    desc: 'Для тех, кто выбирает',
    features: ['15 генераций', 'Все стрижки из каталога', 'Описание своими словами', 'Загрузка образца', 'Окрашивание волос', 'Сохранение результатов', 'Голосование с друзьями'],
    cta: 'Купить', highlighted: true,
  },
  {
    name: 'Про', price: '399 ₽', gens: '50 генераций',
    desc: 'Для экспериментаторов',
    features: ['50 генераций', 'Все стрижки из каталога', 'Описание своими словами', 'Загрузка образца', 'Окрашивание волос', 'Сохранение результатов', 'Голосование с друзьями', 'Приоритетная генерация'],
    cta: 'Купить', highlighted: false,
  },
];

const faqData = [
  { q: 'Нужно ли скачивать приложение?', a: 'Нет, всё работает в браузере на любом устройстве. Просто откройте сайт и сделайте селфи.' },
  { q: 'Насколько реалистичен результат?', a: 'AI сохраняет ваши черты лица, форму головы и тон кожи. Результат выглядит как реальное фото.' },
  { q: 'Можно ли использовать любое фото?', a: 'Да, но лучший результат — на фронтальном селфи с хорошим освещением. Фото из галереи тоже подойдёт.' },
  { q: 'Как показать результат барберу?', a: 'Сохраните изображение на телефон или отправьте ссылку. Барбер увидит именно то, чего вы хотите.' },
];

/* ─── Shared UI ─── */

function GradientText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { gradText } = useGold();
  return (
    <span className={`bg-clip-text text-transparent ${className}`} style={{ backgroundImage: gradText }}>
      {children}
    </span>
  );
}

function GlassCard({ children, className = '', glow = false }: { children: React.ReactNode; className?: string; glow?: boolean }) {
  const p = useP();
  const { g1, g2 } = useGold();
  return (
    <div
      className={`relative rounded-2xl backdrop-blur-sm ${className}`}
      style={{ background: p(palette.glass), border: `1px solid ${p(palette.glassBorder)}` }}
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: `linear-gradient(135deg, ${g1}08, transparent 50%, ${g2}05)` }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  const { g1, g2 } = useGold();
  return (
    <span
      className="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
      style={{ border: `1px solid ${g2}30`, color: g2, background: `linear-gradient(135deg, ${g1}10, ${g2}08)` }}
    >
      {children}
    </span>
  );
}

function GoldButton({ children, outline = false, className = '' }: { children: React.ReactNode; outline?: boolean; className?: string }) {
  const p = useP();
  const { g2, grad } = useGold();
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${className}`}
      style={
        outline
          ? { border: `1px solid ${g2}40`, color: g2 }
          : { backgroundImage: grad, color: p(palette.btnText), boxShadow: `0 0 20px ${p(palette.btnGlow1)}, 0 0 60px ${p(palette.btnGlow2)}` }
      }
    >
      {children}
    </button>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const p = useP();
  return (
    <button
      onClick={toggle}
      className="flex size-8 items-center justify-center rounded-lg transition-colors"
      style={{ background: p(palette.card), border: `1px solid ${p(palette.cardBorder)}` }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="size-4" style={{ color: p(palette.muted) }} />
      ) : (
        <MoonIcon className="size-4" style={{ color: p(palette.muted) }} />
      )}
    </button>
  );
}

/* ─── Page ─── */

export default function Landing() {
  const [theme, setTheme] = useState<Theme>('dark');
  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      <div
        className="min-h-screen transition-colors duration-300"
        style={{ background: theme === 'dark' ? '#060608' : '#FAFAF8', color: theme === 'dark' ? '#9ca3af' : '#6B7280' }}
      >
        <NavbarSection />
        <HeroSection />
        <StatsSection />
        <ProblemSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
        <FooterSection />
      </div>
    </ThemeCtx.Provider>
  );
}

/* ─── Sections ─── */

function NavbarSection() {
  const p = useP();
  const { g2 } = useGold();
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-2xl transition-colors duration-300"
      style={{ background: `${p(palette.navBg)}cc`, borderBottom: `1px solid ${p(palette.divider)}` }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div
            className="flex size-8 items-center justify-center rounded-lg"
            style={{ background: `linear-gradient(135deg, ${p(palette.g1)}20, ${g2}10)` }}
          >
            <ScissorsIcon className="size-4" style={{ color: g2 }} />
          </div>
          <span className="text-sm font-semibold" style={{ color: p(palette.heading) }}>
            Barber Try-On
          </span>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#pricing"
            className="hidden text-sm font-medium transition sm:block"
            style={{ color: p(palette.muted) }}
          >
            Тарифы
          </a>
          <ThemeToggle />
          <GoldButton>Попробовать бесплатно</GoldButton>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const p = useP();
  const { g1, g2 } = useGold();
  return (
    <section className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28 lg:pb-32 lg:pt-36">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
        style={{ width: 900, height: 600, background: `radial-gradient(ellipse at center, ${g1}${p(palette.glowA)} 0%, ${g2}${p(palette.glowB)} 30%, transparent 70%)` }}
      />
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: Number(p(palette.gridOp)),
          backgroundImage: 'linear-gradient(rgba(128,128,128,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionBadge>
            <SparklesIcon className="size-3" />
            AI-стилист · 3 примерки бесплатно
          </SectionBadge>

          <h1
            className="mt-2 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: p(palette.heading) }}
          >
            Примерь стрижку
            <br />
            <GradientText>до кресла барбера</GradientText>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed sm:text-lg" style={{ color: p(palette.body) }}>
            Сфотографируйся — и сразу увидишь, как будешь выглядеть
            с&nbsp;любой стрижкой. Покажи результат барберу.
          </p>

          <div className="mt-10">
            <GoldButton className="px-8 py-3.5 text-base">
              Начать примерку
              <ArrowRightIcon className="size-5" />
            </GoldButton>
          </div>
        </div>

        {/* Hairstyle cards */}
        <div className="mt-20 flex items-end justify-center gap-3 sm:gap-5">
          {['Андеркат', 'Фейд', 'Помп'].map((name, i) => {
            const isCenter = i === 1;
            return (
              <div
                key={name}
                className="group relative transition-transform duration-300 hover:scale-[1.03]"
                style={{ width: isCenter ? 180 : 150, transform: `rotate(${(i - 1) * 5}deg) translateY(${isCenter ? 0 : 16}px)` }}
              >
                {isCenter && (
                  <div className="pointer-events-none absolute -inset-px rounded-2xl" style={{ background: `linear-gradient(135deg, ${g2}30, transparent 60%)` }} />
                )}
                <div className="relative overflow-hidden rounded-2xl" style={{ background: p(palette.card), border: `1px solid ${p(palette.cardBorder)}` }}>
                  <div className="relative aspect-[3/4]" style={{ background: `linear-gradient(180deg, ${p(palette.card)}, ${p(palette.bg)})` }}>
                    <UserIcon className="absolute inset-0 m-auto size-10 opacity-20" style={{ color: p(palette.subtle) }} />
                    <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, transparent 30%, ${g2}20 50%, transparent 70%)` }} />
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-xs font-semibold tracking-wide" style={{ color: p(palette.heading) }}>{name}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const p = useP();
  return (
    <section style={{ borderTop: `1px solid ${p(palette.divider)}`, borderBottom: `1px solid ${p(palette.divider)}` }} className="py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-4 sm:px-6">
        {stats.map((s, i) => (
          <div key={s.label} className="text-center" style={i > 0 ? { borderLeft: `1px solid ${p(palette.divider)}` } : undefined}>
            <GradientText className="text-3xl font-bold sm:text-4xl">{s.value}</GradientText>
            <div className="mt-1 text-xs sm:text-sm" style={{ color: p(palette.muted) }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemSection() {
  const p = useP();
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <SectionBadge>Знакомо?</SectionBadge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: p(palette.heading) }}>
            Каждый раз одна и та же проблема
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {problems.map((pr) => (
            <GlassCard key={pr.title} className="p-6" glow>
              <div className="mb-4 text-3xl">{pr.icon}</div>
              <h3 className="mb-2 text-base font-semibold" style={{ color: p(palette.heading) }}>{pr.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: p(palette.muted) }}>{pr.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const p = useP();
  const { g1, g2, grad } = useGold();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" style={{ background: `linear-gradient(180deg, ${p(palette.bgSoft)}, transparent)` }} />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <SectionBadge>Как это работает</SectionBadge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: p(palette.heading) }}>
            Три шага до нового образа
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <GlassCard key={s.num} className="p-6 pt-8" glow>
              <span
                className="pointer-events-none absolute top-2 right-4 text-8xl font-black"
                style={{ backgroundImage: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', opacity: Number(p(palette.wmOp)) }}
              >
                {s.num}
              </span>
              <div
                className="mb-5 flex size-12 items-center justify-center rounded-xl"
                style={{ border: `1px solid ${g2}20`, background: `linear-gradient(135deg, ${g1}15, ${g2}08)`, color: g2 }}
              >
                <s.icon className="size-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold" style={{ color: p(palette.heading) }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: p(palette.muted) }}>{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const p = useP();
  const { g1, g2 } = useGold();
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <SectionBadge>Отзывы</SectionBadge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: p(palette.heading) }}>
            Что говорят клиенты
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {testimonials.map((tm) => (
            <GlassCard key={tm.name} className="flex flex-col p-6" glow>
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="size-4" style={{ color: p(palette.star) }} />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed" style={{ color: p(palette.heading) }}>
                &laquo;{tm.text}&raquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: `linear-gradient(135deg, ${g1}25, ${g2}15)`, color: g2 }}
                >
                  {tm.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: p(palette.heading) }}>{tm.name}</div>
                  <div className="text-xs" style={{ color: p(palette.muted) }}>{tm.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const p = useP();
  const { g1, g2 } = useGold();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" style={{ background: `linear-gradient(180deg, ${p(palette.bgSoft)}, transparent)` }} />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: p(palette.heading) }}>
            Почему это работает
          </h2>
          <p className="mt-3" style={{ color: p(palette.muted) }}>Технология, которой можно доверять</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <GlassCard key={f.title} className="flex gap-4 p-6" glow>
              <div
                className="flex size-11 shrink-0 items-center justify-center rounded-xl"
                style={{ border: `1px solid ${g2}20`, background: `linear-gradient(135deg, ${g1}15, ${g2}08)`, color: g2 }}
              >
                <f.icon className="size-5" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold" style={{ color: p(palette.heading) }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: p(palette.muted) }}>{f.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const p = useP();
  const { g1, g2, grad } = useGold();
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <SectionBadge>Тарифы</SectionBadge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: p(palette.heading) }}>
            Без подписки — плати за то, что используешь
          </h2>
          <p className="mt-3 text-sm" style={{ color: p(palette.muted) }}>
            Первые 3 примерки бесплатно. Генерации не сгорают.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {pricing.map((pl) => (
            <div
              key={pl.name}
              className="relative flex flex-col overflow-hidden rounded-2xl p-6"
              style={{
                border: `1px solid ${pl.highlighted ? `${g2}35` : p(palette.cardBorder)}`,
                background: pl.highlighted ? p(palette.pricingHi) : p(palette.pricingLo),
              }}
            >
              {pl.highlighted && (
                <>
                  <div
                    className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2"
                    style={{ width: 300, height: 200, background: `radial-gradient(ellipse, ${g1}15 0%, transparent 70%)` }}
                  />
                  <div
                    className="absolute top-0 right-0 rounded-bl-xl px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ backgroundImage: grad, color: p(palette.btnText) }}
                  >
                    Популярный
                  </div>
                </>
              )}
              <div className="relative flex flex-1 flex-col">
                <h3 className="text-lg font-semibold" style={{ color: p(palette.heading) }}>{pl.name}</h3>
                <p className="mt-1 text-sm" style={{ color: p(palette.muted) }}>{pl.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold" style={{ color: p(palette.heading) }}>{pl.price}</span>
                </div>
                <GradientText className="mt-1 text-xs font-semibold">{pl.gens}</GradientText>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {pl.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckIcon className="size-3.5 shrink-0" style={{ color: g2 }} />
                      <span style={{ color: p(palette.body) }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  {pl.highlighted ? (
                    <GoldButton className="w-full">{pl.cta}</GoldButton>
                  ) : (
                    <GoldButton outline className="w-full">{pl.cta}</GoldButton>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const p = useP();
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" style={{ background: `linear-gradient(180deg, ${p(palette.bgSoft)}, transparent)` }} />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: p(palette.heading) }}>
            Частые вопросы
          </h2>
        </div>
        <div className="space-y-3">
          {faqData.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl backdrop-blur-sm"
              style={{ background: p(palette.glass), border: `1px solid ${p(palette.glassBorder)}` }}
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold" style={{ color: p(palette.faqSummary) }}>
                {item.q}
                <ChevronDownIcon className="size-5 transition duration-200 group-open:rotate-180" style={{ color: p(palette.subtle) }} />
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: p(palette.faqBody) }}>{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const p = useP();
  const { g1 } = useGold();
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-center sm:p-16"
          style={{ border: `1px solid ${p(palette.cardBorder)}` }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${g1}0A 0%, transparent 70%)` }} />
          <div className="relative">
            <div className="text-4xl">✂️</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: p(palette.heading) }}>
              Готов к новому образу?
            </h2>
            <p className="mx-auto mt-3 max-w-md" style={{ color: p(palette.muted) }}>
              Загрузи фото, выбери стрижку — и увидишь результат за секунды
            </p>
            <div className="mt-8">
              <GoldButton className="px-8 py-3.5 text-base">
                Выбрать стрижку
                <ArrowRightIcon className="size-5" />
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const p = useP();
  const { g2 } = useGold();
  return (
    <footer style={{ borderTop: `1px solid ${p(palette.divider)}` }} className="py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center text-xs sm:flex-row sm:justify-between sm:px-6" style={{ color: p(palette.footerText) }}>
        <div className="flex items-center gap-2">
          <ScissorsIcon className="size-3.5" style={{ color: g2 }} />
          <span>Barber Try-On · Примерка стрижек</span>
        </div>
        <div className="flex gap-4">
          <a href="#pricing" className="transition hover:opacity-70">Тарифы</a>
          <a href="#" className="transition hover:opacity-70">Оферта</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Icons ─── */

function ScissorsIcon({ className = 'size-5', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function ArrowRightIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CameraIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function PaletteIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function SparklesIcon({ className = 'size-5', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

function StarIcon({ className = 'size-4', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ShieldIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function PhotoIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function LayersIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function ShareIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function CheckIcon({ className = 'size-4', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronDownIcon({ className = 'size-5', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function UserIcon({ className = 'size-5', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

function SunIcon({ className = 'size-5', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ className = 'size-5', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

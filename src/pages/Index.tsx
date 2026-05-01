import Icon from "@/components/ui/icon"

const PHONE = "89058451101"
const TEL_URL = `tel:+7${PHONE.slice(1)}`
const WHATSAPP_URL = `https://wa.me/7${PHONE.slice(1)}`

const services = [
  { icon: "CircleDot", label: "Балансировка колёс" },
  { icon: "Wrench", label: "Монтаж шин" },
  { icon: "Scissors", label: "Ремонт боковых порезов" },
  { icon: "Disc", label: "Правка литых дисков" },
  { icon: "Disc2", label: "Правка металлических дисков" },
  { icon: "Flame", label: "Сварка аргоном (только диски)" },
]

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-[#D4AF37] font-sans">

      {/* Header */}
      <header className="border-b border-[#D4AF37]/20 px-6 py-5 flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold tracking-tight">Авто<span className="text-white">колесо</span></span>
          <p className="text-[#D4AF37]/50 text-xs tracking-widest uppercase mt-0.5">Шиномонтаж · Орск</p>
        </div>
        <a href={TEL_URL} className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors">
          <Icon name="Phone" size={16} />
          <span className="text-sm font-medium hidden sm:inline">+7 905 845-11-01</span>
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 md:py-32 text-center border-b border-[#D4AF37]/10">
        <p className="text-[#D4AF37]/50 tracking-[0.4em] uppercase text-xs mb-4">шиномонтаж</p>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none mb-6">
          Авто<span className="text-white">колесо</span>
        </h1>
        <p className="text-[#b8963e] text-lg md:text-xl max-w-md mx-auto mb-10">
          Всё для ваших колёс — быстро и по делу. Цены уточняйте по телефону или в сообщениях.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={TEL_URL}>
            <button className="flex items-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded hover:bg-[#b8963e] transition-colors">
              <Icon name="Phone" size={18} />
              Позвонить
            </button>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] font-semibold px-6 py-3 rounded hover:bg-[#D4AF37] hover:text-black transition-colors">
              <Icon name="MessageCircle" size={18} />
              WhatsApp / Макс
            </button>
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16 md:py-24 border-b border-[#D4AF37]/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Что делаем</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.label} className="flex items-center gap-4 border border-[#D4AF37]/20 rounded-lg px-5 py-4 hover:border-[#D4AF37]/60 transition-colors">
              <Icon name={s.icon} size={22} className="text-[#D4AF37]/70 shrink-0" />
              <span className="text-[#b8963e] text-base">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-[#D4AF37]/40 text-sm mt-8">Цены — уточняйте по телефону или в сообщениях</p>
      </section>

      {/* Contacts */}
      <section className="px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Контакты</h2>
        <div className="max-w-sm mx-auto flex flex-col gap-6">
          <a href={TEL_URL} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors shrink-0">
              <Icon name="Phone" size={18} className="text-[#D4AF37]/70" />
            </div>
            <div>
              <p className="text-[#D4AF37]/40 text-xs uppercase tracking-wider mb-0.5">Телефон</p>
              <p className="text-[#D4AF37] text-lg font-medium group-hover:text-white transition-colors">+7 905 845-11-01</p>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="MapPin" size={18} className="text-[#D4AF37]/70" />
            </div>
            <div>
              <p className="text-[#D4AF37]/40 text-xs uppercase tracking-wider mb-0.5">Адрес</p>
              <p className="text-[#b8963e] text-base">Орск, ул. Ленинского Комсомола, 4а</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="Clock" size={18} className="text-[#D4AF37]/70" />
            </div>
            <div>
              <p className="text-[#D4AF37]/40 text-xs uppercase tracking-wider mb-0.5">Режим работы</p>
              <p className="text-[#b8963e] text-base leading-relaxed">
                Пн–Пт: 9:00 – 19:00<br />
                Сб: 9:00 – 18:00<br />
                Вс: 9:00 – 17:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#D4AF37]/10 px-6 py-6 text-center">
        <p className="text-[#D4AF37]/30 text-sm">© 2025 Автоколесо · Орск</p>
      </footer>

    </div>
  )
}

export default Index
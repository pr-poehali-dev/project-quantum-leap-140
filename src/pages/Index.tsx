import { useState } from "react"
import Icon from "@/components/ui/icon"

const PHONE = "89058451101"
const TEL_URL = `tel:+7${PHONE.slice(1)}`
// Макс — отправка через sms: ссылка открывает приложение для SMS/звонка
const MAX_URL = `https://max.ru/chat/${PHONE}`

const services = [
  { icon: "CircleDot", label: "Балансировка колёс" },
  { icon: "Wrench", label: "Монтаж шин" },
  { icon: "Scissors", label: "Ремонт боковых порезов" },
  { icon: "Disc", label: "Правка литых дисков" },
  { icon: "Disc2", label: "Правка металлических дисков" },
  { icon: "Flame", label: "Сварка аргоном (только диски)" },
]

const Index = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Заявка с сайта!%0AИмя: ${encodeURIComponent(name)}%0AТелефон: ${encodeURIComponent(phone)}%0AУслуга: ${encodeURIComponent(service || "не указана")}`
    window.open(`https://max.ru/chat/${PHONE}?text=${text}`, "_blank")
    setSent(true)
    setName("")
    setPhone("")
    setService("")
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="min-h-screen bg-black text-[#D4AF37] font-sans">

      {/* Header */}
      <header className="border-b border-[#D4AF37]/20 px-6 py-5 flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold tracking-tight gold-shimmer">Автоколесо</span>
          <p className="text-[#D4AF37]/50 text-xs tracking-widest uppercase mt-0.5">Шиномонтаж · Орск</p>
        </div>
        <a href={TEL_URL} className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors">
          <Icon name="Phone" size={16} />
          <span className="text-sm font-medium hidden sm:inline">+7 905 845-11-01</span>
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 md:py-32 text-center border-b border-[#D4AF37]/10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-6 gold-shimmer">
          Автоколесо
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
          <a href="#booking">
            <button className="flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] font-semibold px-6 py-3 rounded hover:bg-[#D4AF37] hover:text-black transition-colors">
              <Icon name="ClipboardList" size={18} />
              Записаться
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

      {/* Booking Form */}
      <section id="booking" className="px-6 py-16 md:py-24 border-b border-[#D4AF37]/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Записаться</h2>
        <p className="text-[#D4AF37]/50 text-sm text-center mb-10">Заявка придёт в Макс — ответим быстро</p>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="bg-transparent border border-[#D4AF37]/30 text-[#D4AF37] placeholder-[#D4AF37]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
          <input
            type="tel"
            placeholder="Ваш телефон"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            className="bg-transparent border border-[#D4AF37]/30 text-[#D4AF37] placeholder-[#D4AF37]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
          <select
            value={service}
            onChange={e => setService(e.target.value)}
            className="bg-black border border-[#D4AF37]/30 text-[#D4AF37] rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
          >
            <option value="">Выберите услугу (необязательно)</option>
            {services.map(s => (
              <option key={s.label} value={s.label}>{s.label}</option>
            ))}
          </select>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#b8963e] transition-colors mt-2"
          >
            <Icon name="Send" size={18} />
            {sent ? "Открываем Макс..." : "Отправить заявку"}
          </button>
          {sent && (
            <p className="text-center text-[#D4AF37]/60 text-sm">Заявка отправлена в Макс!</p>
          )}
        </form>
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

      {/* Map */}
      <section className="px-6 py-16 md:py-24 border-t border-[#D4AF37]/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Как нас найти</h2>
        <p className="text-[#D4AF37]/50 text-sm text-center mb-8">Орск, ул. Ленинского Комсомола, 4а</p>
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden border border-[#D4AF37]/20">
          <iframe
            src="https://yandex.ru/map-widget/v1/?text=%D0%9E%D1%80%D1%81%D0%BA%2C+%D1%83%D0%BB.+%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+%D0%9A%D0%BE%D0%BC%D1%81%D0%BE%D0%BC%D0%BE%D0%BB%D0%B0%2C+4%D0%B0&z=16&l=map"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            title="Карта"
          />
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
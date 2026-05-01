import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"

const PHONE = "89058451101"
const WHATSAPP_URL = `https://wa.me/7${PHONE.slice(1)}`
const TEL_URL = `tel:+7${PHONE.slice(1)}`

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, isHero, isContacts }: SectionProps) {
  if (isHero) {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[#D4AF37]/60 tracking-[0.4em] uppercase text-sm md:text-base mb-4">шиномонтаж</p>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight text-[#D4AF37] leading-none">
            Авто<span className="text-white">колесо</span>
          </h1>
          <p className="text-[#D4AF37]/50 tracking-[0.3em] uppercase text-sm md:text-base mt-4">Орск</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <p className="text-[#D4AF37]/40 text-xs tracking-widest uppercase">листайте вниз</p>
          <Icon name="ChevronDown" className="text-[#D4AF37]/40 animate-bounce" size={20} />
        </motion.div>
      </section>
    )
  }

  if (isContacts) {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight text-[#D4AF37]"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="mt-8 flex flex-col gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href={TEL_URL} className="flex items-center gap-3 text-[#D4AF37] hover:text-white transition-colors group">
            <Icon name="Phone" size={22} className="text-[#D4AF37]/60 group-hover:text-white transition-colors" />
            <span className="text-xl md:text-2xl font-medium">+7 905 845-11-01</span>
          </a>

          <div className="flex items-start gap-3 text-[#b8963e]">
            <Icon name="MapPin" size={22} className="text-[#D4AF37]/60 mt-0.5 shrink-0" />
            <span className="text-lg md:text-xl">Орск, ул. Ленинского Комсомола, 4а</span>
          </div>

          <div className="flex items-start gap-3 text-[#b8963e]">
            <Icon name="Clock" size={22} className="text-[#D4AF37]/60 mt-0.5 shrink-0" />
            <div className="text-base md:text-lg leading-relaxed">
              <p>Пн–Пт: 9:00 – 19:00</p>
              <p>Сб: 9:00 – 18:00</p>
              <p>Вс: 9:00 – 17:00</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href={TEL_URL}>
            <Button size="lg" className="text-black bg-[#D4AF37] hover:bg-[#b8963e] border-0 font-semibold transition-colors gap-2">
              <Icon name="Phone" size={18} />
              Позвонить
            </Button>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="text-[#D4AF37] bg-transparent border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors gap-2">
              <Icon name="MessageCircle" size={18} />
              WhatsApp / Макс
            </Button>
          </a>
        </motion.div>
      </section>
    )
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      {title && (
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-[#D4AF37]"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-[#b8963e]"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#D4AF37] bg-transparent border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}

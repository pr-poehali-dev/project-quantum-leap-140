import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export const sections = [
  {
    id: 'hero',
    subtitle: null,
    title: null,
    showButton: false,
    isHero: true,
  },
  {
    id: 'services',
    title: 'Что делаем',
    content: 'Балансировка, монтаж шин, ремонт боковых порезов, правка литых и металлических дисков, сварка аргоном (варим только диски). Цены — уточняйте по телефону или в сообщениях.',
  },
  {
    id: 'about',
    title: 'Просто и честно',
    content: 'Без лишних слов — берём в работу, делаем качественно. Звоните или пишите — ответим быстро и подскажем что к чему.',
  },
  {
    id: 'contacts',
    title: 'Приезжайте!',
    content: null,
    isContacts: true,
    showButton: true,
    buttonText: 'Позвонить',
  },
]

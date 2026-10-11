// Женские SVG-иконки знаков зодиака.
// Каждый знак — милый женский персонаж в общем «космическом» стиле:
// круглый фон, лицо с глазами/румянцем/улыбкой, причёска и узнаваемый
// аксессуар знака. Палитра героини соответствует цвету/стихии знака.
// Важно: используются только сплошные заливки (без url(#...)), чтобы
// иконки корректно отображались и на экране результата.
const zodiacFemaleIcons = {
  // 0. Овен (огонь) — огненная девушка с рожками и рыжими локонами
  0: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#ffe0cc" opacity="0.35" stroke="#e8a0a0" stroke-width="1.6"/>
    <path d="M10 46 l2 2 -2 2 -2 -2z" fill="#ff8a5c" opacity="0.9"/>
    <path d="M19 16 C14 10 12 8 10 12 C9 15 12 17 16 17 Z" fill="#f2d8b8" stroke="#d9b08c" stroke-width="0.8"/>
    <path d="M45 16 C50 10 52 8 54 12 C55 15 52 17 48 17 Z" fill="#f2d8b8" stroke="#d9b08c" stroke-width="0.8"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 40 47 47 43 52 C40 49 36 48 32 48 C28 48 24 49 21 52 C17 47 15 40 15 30 Z" fill="#c9574f"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#d96a5e"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M19 24 C18 30 18 36 19 41 C20 38 21 34 21 30 Z" fill="#c9574f"/>
    <path d="M45 24 C46 30 46 36 45 41 C44 38 43 34 43 30 Z" fill="#c9574f"/>
    <path d="M50 44 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <circle cx="15" cy="16" r="1.2" fill="#ffffff" opacity="0.8"/>
    <circle cx="54" cy="24" r="1" fill="#ffffff" opacity="0.65"/>
  </svg>`,

  // 1. Телец (земля) — девушка с венком из цветов и мягкой улыбкой
  1: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#d9f2d9" opacity="0.35" stroke="#8fbfa0" stroke-width="1.6"/>
    <path d="M50 44 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 40 47 47 43 52 C40 49 36 48 32 48 C28 48 24 49 21 52 C17 47 15 40 15 30 Z" fill="#8a5a44"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#a06b52"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <g transform="translate(32,12)">
      <circle cx="-8" cy="-2" r="3" fill="#ff9ec4"/>
      <circle cx="-3" cy="-5" r="2.6" fill="#ffffff"/>
      <circle cx="3" cy="-5" r="2.6" fill="#ffd166"/>
      <circle cx="8" cy="-2" r="3" fill="#ff9ec4"/>
      <circle cx="0" cy="-7" r="2.2" fill="#ffffff"/>
    </g>
    <circle cx="15" cy="16" r="1.2" fill="#ffffff" opacity="0.8"/>
  </svg>`,

  // 2. Близнецы (воздух) — девушка с двумя косичками-хвостиками
  2: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#fff3cc" opacity="0.35" stroke="#e8cf7a" stroke-width="1.6"/>
    <circle cx="16" cy="36" r="7" fill="#e6c469"/>
    <circle cx="48" cy="36" r="7" fill="#e6c469"/>
    <path d="M14 28 l3 -5 3 5z" fill="#f5d061"/>
    <path d="M44 28 l3 5 3 -5z" fill="#f5d061"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 40 47 47 43 52 C40 49 36 48 32 48 C28 48 24 49 21 52 C17 47 15 40 15 30 Z" fill="#d9b45b"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#e6c469"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M12 46 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <circle cx="52" cy="16" r="1.2" fill="#ffffff" opacity="0.8"/>
  </svg>`,

  // 3. Рак (вода) — девушка с лунной палитрой, ракушкой-заколкой и звёздами
  3: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#dfe9ff" opacity="0.35" stroke="#a8c8e8" stroke-width="1.6"/>
    <path d="M12 18 a6 6 0 1 0 5 8.5 a5 5 0 1 1 -5 -8.5" fill="#fff6d8" opacity="0.95"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 40 47 47 43 52 C40 49 36 48 32 48 C28 48 24 49 21 52 C17 47 15 40 15 30 Z" fill="#4a6fa5"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#5b83bb"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <g transform="translate(46,13)">
      <path d="M-3 3 C-4 -3 0 -7 4 -7 C8 -7 12 -3 11 3 C8 0.5 6 0.5 4 1.5 C2 0.5 0 0.5 -3 3 Z" fill="#f0e6ff" stroke="#c9b8e8" stroke-width="0.8"/>
      <path d="M0 -2 C1 -1 1 1 0 2 M4 -3 C5 -1 5 1 4 2 M8 -2 C8.5 -1 8.5 1 8 2" stroke="#c9b8e8" stroke-width="0.6" fill="none"/>
    </g>
    <path d="M14 48 l1.4 1.4 -1.4 1.4 -1.4 -1.4z" fill="#ffffff"/>
    <path d="M50 41 l1.2 1.2 -1.2 1.2 -1.2 -1.2z" fill="#ffffff" opacity="0.8"/>
    <circle cx="18" cy="13" r="1.3" fill="#ffffff" opacity="0.85"/>
    <circle cx="53" cy="24" r="1.1" fill="#ffffff" opacity="0.7"/>
  </svg>`,

  // 4. Лев (огонь) — девушка с пышной «львиной» гривой и короной
  4: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#fff3cc" opacity="0.35" stroke="#e8c87a" stroke-width="1.6"/>
    <path d="M13 32 C11 20 16 7 32 7 C48 7 53 20 51 32 C50 44 47 50 43 53 C40 49 36 48 32 48 C28 48 24 49 21 53 C17 50 14 44 13 32 Z" fill="#e0a83c"/>
    <path d="M26 10 l1.5 4 -4 0.5 3 2.5 -1 4 3.5 -2.5 3.5 2.5 -1 -4 3 -2.5 -4 -0.5 1.5 -4" fill="#f5c542"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#f0bd50"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M51 40 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <circle cx="12" cy="18" r="1.2" fill="#ffffff" opacity="0.8"/>
  </svg>`,

  // 5. Дева (земля) — девушка с косой и колосками
  5: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#e2f2cc" opacity="0.35" stroke="#a0c07a" stroke-width="1.6"/>
    <path d="M46 28 C50 34 50 42 46 50 C43 46 43 38 46 30 Z" fill="#8a5a30"/>
    <path d="M46 28 l4 -7 M46 33 l5 -6 M46 38 l5 -5" stroke="#e8c55a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <ellipse cx="50" cy="21" rx="1.8" ry="3.2" fill="#e8c55a" transform="rotate(20 50 21)"/>
    <ellipse cx="51" cy="27" rx="1.6" ry="3" fill="#e8c55a" transform="rotate(20 51 27)"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 40 47 47 43 52 C40 49 36 48 32 48 C28 48 24 49 21 52 C17 47 15 40 15 30 Z" fill="#7a5230"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#8a5a30"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M12 46 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <circle cx="53" cy="16" r="1.2" fill="#ffffff" opacity="0.8"/>
  </svg>`,

  // 6. Весы (воздух) — девушка с пучком и серёжкой-весами
  6: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#ffe0ee" opacity="0.35" stroke="#e8a8c8" stroke-width="1.6"/>
    <circle cx="32" cy="11" r="5.5" fill="#4a3a55"/>
    <path d="M19.5 31 C19.5 17 25 13 32 13 C39 13 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#5a4a63"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 40 47 47 43 52 C40 49 36 48 32 48 C28 48 24 49 21 52 C17 47 15 40 15 30 Z" fill="#4a3a55"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <g transform="translate(47,30)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#e8c87a" stroke-width="1.2"/>
      <line x1="-5" y1="8" x2="5" y2="8" stroke="#e8c87a" stroke-width="1.2"/>
      <path d="M-5 9 l-3 4 h6 z" fill="#f5d061" opacity="0.9"/>
      <path d="M5 9 l3 4 h-6 z" fill="#f5d061" opacity="0.9"/>
    </g>
    <path d="M12 44 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <circle cx="53" cy="18" r="1.2" fill="#ffffff" opacity="0.8"/>
  </svg>`,

  // 7. Скорпион (вода) — загадочная брюнетка с короной-скорпионом
  7: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#f2d9dd" opacity="0.35" stroke="#c88a94" stroke-width="1.6"/>
    <path d="M20 14 C16 9 14 8 12 12 C11 16 14 18 18 17 Z" fill="#3a2430" stroke="#5a3a48" stroke-width="0.8"/>
    <path d="M44 14 C48 9 50 8 52 12 C53 16 50 18 46 17 Z" fill="#3a2430" stroke="#5a3a48" stroke-width="0.8"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 42 47 49 43 53 C40 50 36 49 32 49 C28 49 24 50 21 53 C17 49 15 42 15 30 Z" fill="#3a2430"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#4a2e3c"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M50 42 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <circle cx="12" cy="16" r="1.2" fill="#ffffff" opacity="0.8"/>
    <circle cx="53" cy="26" r="1" fill="#ffffff" opacity="0.65"/>
  </svg>`,

  // 8. Стрелец (огонь) — спортивная девушка с хвостом и стрелой
  8: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#d9f2ee" opacity="0.35" stroke="#8fbfb4" stroke-width="1.6"/>
    <path d="M40 18 C47 16 51 20 49 32 C48 42 45 47 43 50 C40 47 38 43 38 36 Z" fill="#8a5a33"/>
    <path d="M44 20 l3 -2 1 3 -3 2z" fill="#e0455c"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 40 47 47 43 52 C40 49 36 48 32 48 C28 48 24 49 21 52 C17 47 15 40 15 30 Z" fill="#7a5230"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#8a5a33"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M11 42 l6 -6 M11 42 l-1 4 4 -1" stroke="#e8c87a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    <path d="M12 46 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <circle cx="53" cy="16" r="1.2" fill="#ffffff" opacity="0.8"/>
  </svg>`,

  // 9. Козерог (земля) — девушка с изящными рожками и строгим взглядом
  9: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#d9e8d9" opacity="0.35" stroke="#8faf8f" stroke-width="1.6"/>
    <path d="M19 17 C15 10 13 7 11 10 C9 13 12 17 16 18 Z" fill="#d9c8a8" stroke="#b8a888" stroke-width="0.8"/>
    <path d="M45 17 C49 10 51 7 53 10 C55 13 52 17 48 18 Z" fill="#d9c8a8" stroke="#b8a888" stroke-width="0.8"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 40 47 47 43 52 C40 49 36 48 32 48 C28 48 24 49 21 52 C17 47 15 40 15 30 Z" fill="#4a3b2a"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#5a4a35"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 37.5 Q32 42.5 37 37.5" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M50 44 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <circle cx="13" cy="17" r="1.2" fill="#ffffff" opacity="0.8"/>
  </svg>`,

  // 10. Водолей (воздух) — девушка с волнами и звёздами в волосах
  10: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#d9e9f7" opacity="0.35" stroke="#8fb8d9" stroke-width="1.6"/>
    <path d="M18 14 a4 4 0 0 1 3 1 a4 4 0 0 0 6 0 a4 4 0 0 1 6 0 a4 4 0 0 0 6 0 a4 4 0 0 1 3 -1" stroke="#8fd0e8" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M15 30 C15 15 22 8 32 8 C42 8 49 15 49 30 C49 42 46 50 42 54 C39 50 36 49 32 49 C28 49 25 50 22 54 C18 50 15 42 15 30 Z" fill="#5b9bd5"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#7fb3e8"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <path d="M14 46 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 38 l1.1 1.1 -1.1 1.1 -1.1 -1.1z" fill="#ffffff" opacity="0.8"/>
    <circle cx="50" cy="16" r="1.2" fill="#ffffff" opacity="0.85"/>
    <circle cx="13" cy="20" r="1" fill="#ffffff" opacity="0.7"/>
  </svg>`,

  // 11. Рыбы (вода) — мечтательная девушка с рыбкой-подвеской
  11: `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="27" fill="#d9f2f0" opacity="0.35" stroke="#8fc4bf" stroke-width="1.6"/>
    <path d="M15 30 C15 14 22 8 32 8 C42 8 49 14 49 30 C49 42 46 50 42 55 C39 51 36 50 32 50 C28 50 25 51 22 55 C18 50 15 42 15 30 Z" fill="#7fb8b0"/>
    <circle cx="32" cy="30" r="12.5" fill="#ffe0c2"/>
    <path d="M19.5 31 C19.5 17 25 14 32 14 C39 14 44.5 17 44.5 31 C40 24 36 23 32 23 C28 23 24 24 19.5 31 Z" fill="#96cfc8"/>
    <circle cx="26" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="38" cy="32" r="2.6" fill="#2b2b3a"/>
    <circle cx="26.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="38.9" cy="31" r="1" fill="#ffffff"/>
    <circle cx="21.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <circle cx="42.5" cy="36.5" r="2.4" fill="#ffb3c1" opacity="0.7"/>
    <path d="M27 38 Q32 43 37 38" stroke="#2b2b3a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <g transform="translate(47,42)">
      <path d="M-2 0 C-2 -4 4 -4 4 0 C4 4 -2 4 -2 0 Z" fill="#f0a8a0"/>
      <path d="M3 0 l4 -3 l-2 3 l2 3 z" fill="#e89088"/>
      <circle cx="1" cy="-1" r="0.8" fill="#2b2b3a"/>
    </g>
    <path d="M12 44 l1.3 1.3 -1.3 1.3 -1.3 -1.3z" fill="#ffffff" opacity="0.85"/>
    <circle cx="53" cy="16" r="1.2" fill="#ffffff" opacity="0.8"/>
  </svg>`,
};
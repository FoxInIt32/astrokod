// SVG-иконки знаков зодиака.
// Каждая иконка имеет индивидуальную цветовую гамму (по стихии знака),
// мягкое свечение и декоративные «блёстки».
// Порядок элементов совпадает с порядком zodiacData в js/zodiac-data.js.
const zodiacIcons = [
  // 0. Овен (огонь)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-aries-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd76e"/>
        <stop offset="100%" stop-color="#ff5f6d"/>
      </linearGradient>
      <radialGradient id="zi-aries-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-aries-bg)" stroke="url(#zi-aries-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-aries-main)">\u2648</text>
    <path d="M13 15 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 17 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="18" cy="49" r="1.4" fill="#ffffff" opacity="0.8"/>
    <circle cx="47" cy="12" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 1. Телец (земля)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-taurus-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8fd694"/>
        <stop offset="100%" stop-color="#f0c75e"/>
      </linearGradient>
      <radialGradient id="zi-taurus-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-taurus-bg)" stroke="url(#zi-taurus-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-taurus-main)">\u2649</text>
    <path d="M13 18 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.85"/>
    <path d="M50 14 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="21" cy="50" r="1.3" fill="#ffffff" opacity="0.75"/>
    <circle cx="45" cy="49" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 2. Близнецы (воздух)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-gemini-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6ec6ff"/>
        <stop offset="100%" stop-color="#ffe27a"/>
      </linearGradient>
      <radialGradient id="zi-gemini-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-gemini-bg)" stroke="url(#zi-gemini-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-gemini-main)">\u264A</text>
    <path d="M14 12 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 20 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="17" cy="50" r="1.3" fill="#ffffff" opacity="0.8"/>
    <circle cx="48" cy="11" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 3. Рак (вода)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-cancer-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#5aa9ff"/>
        <stop offset="100%" stop-color="#c9d8ff"/>
      </linearGradient>
      <radialGradient id="zi-cancer-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-cancer-bg)" stroke="url(#zi-cancer-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-cancer-main)">\u264B</text>
    <path d="M13 16 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 15 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="20" cy="51" r="1.3" fill="#ffffff" opacity="0.8"/>
    <circle cx="46" cy="50" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 4. Лев (огонь)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-leo-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd76e"/>
        <stop offset="100%" stop-color="#ff9a3d"/>
      </linearGradient>
      <radialGradient id="zi-leo-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-leo-bg)" stroke="url(#zi-leo-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-leo-main)">\u264C</text>
    <path d="M14 13 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 19 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="17" cy="50" r="1.3" fill="#ffffff" opacity="0.8"/>
    <circle cx="47" cy="12" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 5. Дева (земля)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-virgo-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#9be15d"/>
        <stop offset="100%" stop-color="#f5d061"/>
      </linearGradient>
      <radialGradient id="zi-virgo-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-virgo-bg)" stroke="url(#zi-virgo-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-virgo-main)">\u264D</text>
    <path d="M13 19 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.85"/>
    <path d="M50 13 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="21" cy="50" r="1.3" fill="#ffffff" opacity="0.75"/>
    <circle cx="45" cy="48" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 6. Весы (воздух)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-libra-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff9ad5"/>
        <stop offset="100%" stop-color="#b78bff"/>
      </linearGradient>
      <radialGradient id="zi-libra-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-libra-bg)" stroke="url(#zi-libra-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-libra-main)">\u264E</text>
    <path d="M14 14 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 16 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="18" cy="50" r="1.3" fill="#ffffff" opacity="0.8"/>
    <circle cx="47" cy="49" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 7. Скорпион (вода)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-scorpio-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff5f6d"/>
        <stop offset="100%" stop-color="#9b59b6"/>
      </linearGradient>
      <radialGradient id="zi-scorpio-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-scorpio-bg)" stroke="url(#zi-scorpio-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-scorpio-main)">\u264F</text>
    <path d="M13 13 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 21 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="16" cy="50" r="1.3" fill="#ffffff" opacity="0.8"/>
    <circle cx="48" cy="11" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 8. Стрелец (огонь)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-sagittarius-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff8e53"/>
        <stop offset="100%" stop-color="#e94560"/>
      </linearGradient>
      <radialGradient id="zi-sagittarius-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-sagittarius-bg)" stroke="url(#zi-sagittarius-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-sagittarius-main)">\u2650</text>
    <path d="M14 12 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 18 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="19" cy="51" r="1.3" fill="#ffffff" opacity="0.8"/>
    <circle cx="46" cy="12" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 9. Козерог (земля)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-capricorn-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e0b565"/>
        <stop offset="100%" stop-color="#7fa86a"/>
      </linearGradient>
      <radialGradient id="zi-capricorn-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-capricorn-bg)" stroke="url(#zi-capricorn-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-capricorn-main)">\u2651</text>
    <path d="M13 17 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.85"/>
    <path d="M50 15 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="20" cy="50" r="1.3" fill="#ffffff" opacity="0.75"/>
    <circle cx="45" cy="49" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 10. Водолей (воздух)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-aquarius-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#5ee7df"/>
        <stop offset="100%" stop-color="#6ec6ff"/>
      </linearGradient>
      <radialGradient id="zi-aquarius-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-aquarius-bg)" stroke="url(#zi-aquarius-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-aquarius-main)">\u2652</text>
    <path d="M14 15 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 14 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="17" cy="50" r="1.3" fill="#ffffff" opacity="0.8"/>
    <circle cx="48" cy="50" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,

  // 11. Рыбы (вода)
  `<svg class="zodiac-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zi-pisces-main" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6ec6ff"/>
        <stop offset="100%" stop-color="#5ee7df"/>
      </linearGradient>
      <radialGradient id="zi-pisces-bg" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="27" fill="url(#zi-pisces-bg)" stroke="url(#zi-pisces-main)" stroke-width="1.6"/>
    <text x="32" y="45" text-anchor="middle" font-size="38" font-family="Georgia, 'Times New Roman', serif" fill="url(#zi-pisces-main)">\u2653</text>
    <path d="M13 14 l2.2 2.2 -2.2 2.2 -2.2 -2.2z" fill="#ffffff" opacity="0.9"/>
    <path d="M51 20 l1.7 1.7 -1.7 1.7 -1.7 -1.7z" fill="#ffffff" opacity="0.7"/>
    <circle cx="18" cy="50" r="1.3" fill="#ffffff" opacity="0.8"/>
    <circle cx="46" cy="11" r="1.2" fill="#ffffff" opacity="0.6"/>
  </svg>`,
];
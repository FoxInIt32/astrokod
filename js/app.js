const screens = {
  select: document.getElementById("screen-select"),
  result: document.getElementById("screen-result"),
};

const resultSym = document.getElementById("result-sym");
const resultName = document.getElementById("result-name");
const resultContent = document.getElementById("result-content");

let currentSign = null;

// Советы, зафиксированные на текущую сессию приложения (вариант C).
// При первом выборе знака совет запоминается, при повторных входах
// показывается тот же самый, пока приложение открыто.
// Позже можно заменить на «совет дня» (по дате) или localStorage.
const sessionAdviceMap = {};

// Возвращает совет для знака: если в этой сессии он ещё не выбран —
// генерирует случайный и запоминает его, иначе возвращает сохранённый.
function getAdviceForSign(sign, index) {
  if (sessionAdviceMap[index] === undefined) {
    sessionAdviceMap[index] = sign.advice[Math.floor(Math.random() * sign.advice.length)];
  }
  return sessionAdviceMap[index];
}

function showScreen(id) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[id].classList.add("active");
  window.scrollTo(0, 0);
}

// Счётчик для генерации уникальных id у SVG-иконок.
// Проблема: если одна и та же иконка с градиентами (url(#id)) вставлена
// несколько раз (сетка + экран результата), браузер находит первый
// (скрытый) экземпляр и не отрисовывает градиенты на втором.
// Решение: каждому экземпляру выдаём свой префикс для id.
let iconInstanceCounter = 0;

function makeIconUnique(svg) {
  iconInstanceCounter += 1;
  const prefix = "ic" + iconInstanceCounter;
  return svg
    .replace(/id="([^"]+)"/g, 'id="' + prefix + '-$1"')
    .replace(/url\(#([^)]+)\)/g, 'url(#' + prefix + '-$1)');
}

function getZodiacIcon(index) {
  const source = (zodiacFemaleIcons && zodiacFemaleIcons[index]) ? zodiacFemaleIcons[index] : zodiacIcons[index];
  return makeIconUnique(source);
}

function showResult(index) {
  const sign = zodiacData[index];
  currentSign = index;
  resultSym.innerHTML = getZodiacIcon(index);
  resultName.textContent = sign.name;

  const randomAdvice = getAdviceForSign(sign, index);
  const content =
    '<div class="card essence-card"><h3>\u2728 Знак в двух словах</h3><p>' + sign.essence + '</p></div>' +
    '<div class="card"><h3>\uD83D\uDCAB Звёздный профиль</h3>' +
      '<div class="profile-grid">' +
        '<button type="button" class="profile-item profile-btn" data-meanings="element">' +
          '<span class="profile-icon">' + sign.elementEmoji + '</span>' +
          '<span class="profile-label">Стихия</span>' +
          '<span class="profile-value">' + sign.element + '</span>' +
          '<span class="profile-toggle">\u25BC</span>' +
          '<span class="profile-desc">' + elementMeanings[sign.element] + '</span>' +
        '</button>' +
        '<button type="button" class="profile-item profile-btn" data-meanings="color">' +
          '<span class="profile-dot" style="background:' + sign.colorHex + '"></span>' +
          '<span class="profile-label">Цвет</span>' +
          '<span class="profile-value">' + sign.color + '</span>' +
          '<span class="profile-toggle">\u25BC</span>' +
          '<span class="profile-desc">' + colorMeanings[sign.color] + '</span>' +
        '</button>' +
        '<button type="button" class="profile-item profile-btn" data-meanings="stone">' +
          '<span class="profile-icon">\uD83D\uDC8E</span>' +
          '<span class="profile-label">Камень</span>' +
          '<span class="profile-value">' + sign.stone + '</span>' +
          '<span class="profile-toggle">\u25BC</span>' +
          '<span class="profile-desc">' + stoneMeanings[sign.stone] + '</span>' +
        '</button>' +
        '<button type="button" class="profile-item profile-btn" data-meanings="totem">' +
          '<span class="profile-icon">' + sign.totemEmoji + '</span>' +
          '<span class="profile-label">Тотем</span>' +
          '<span class="profile-value">' + sign.totem + '</span>' +
          '<span class="profile-toggle">\u25BC</span>' +
          '<span class="profile-desc">' + totemMeanings[sign.totem] + '</span>' +
        '</button>' +
        '<button type="button" class="profile-item profile-item-wide profile-btn" data-meanings="archetype">' +
          '<span class="profile-icon">' + sign.archetypeEmoji + '</span>' +
          '<span class="profile-label">Архетип</span>' +
          '<span class="profile-value">' + sign.archetype + '</span>' +
          '<span class="profile-toggle">\u25BC</span>' +
          '<span class="profile-desc">' + archetypeMeanings[sign.archetype] + '</span>' +
        '</button>' +
      '</div>' +
    '</div>' +
    '<div class="card"><h3>\u2B50 Твой звёздный метаболизм</h3><p>' + sign.metabolism + '</p></div>' +
    '<div class="card"><h3>\uD83C\uDF4E Что есть</h3><ul class="food-list">' +
      sign.eat.map((f) => '<li>' + f + '</li>').join("") + '</ul></div>' +
    '<div class="card"><h3>\uD83D\uDED1 Что ограничить</h3><ul class="avoid-list">' +
      sign.avoid.map((f) => '<li>' + f + '</li>').join("") + '</ul></div>' +
    '<div class="card"><h3>\uD83C\uDFC3\u200D\u2640\uFE0F Идеальная активность</h3><ul class="activity-list">' +
      sign.activity.map((a) => '<li>' + a + '</li>').join("") + '</ul></div>' +
    '<div class="card advice-card"><h3>\u2728 Совет дня</h3><p>' + randomAdvice + '</p></div>';
  resultContent.innerHTML = content;
  showScreen("result");
}

// Рисует текст с учётом переносов строк (\n) и переносом по словам,
// чтобы строки помещались в заданную ширину canvas.
function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const paragraphs = text.split("\n");
  let currentY = y;
  paragraphs.forEach(function (paragraph) {
    const words = paragraph.split(" ");
    let line = "";
    words.forEach(function (word) {
      const testLine = line ? line + " " + word : word;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = word;
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    });
    if (line) {
      ctx.fillText(line, x, currentY);
      currentY += lineHeight;
    }
    // Отступ между абзацами
    currentY += lineHeight * 0.5;
  });
  return currentY;
}

// Загружает SVG-строку как изображение для отрисовки на canvas.
// Используется для истории: рисуем женскую иконку знака вместо emoji.
function loadSvgAsImage(svgString) {
  return new Promise(function (resolve, reject) {
    const img = new Image();
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error("Не удалось загрузить SVG-иконку"));
    };
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString);
  });
}

// Генерирует фоновое изображение истории через canvas: градиент + иконка знака
// + весь текст (название, совет дня). Стикеры не используются: по результатам
// тестов VK отклоняет любые стикеры в VKWebAppShowStoryBox (см. README, заметку).
// Поле blob в VK Bridge должно быть строкой (data URL). PNG — без потерь.
async function createStoryBackground(sign, adviceText, iconIndex) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
  gradient.addColorStop(0, "#1a1a2e");
  gradient.addColorStop(0.5, "#16213e");
  gradient.addColorStop(1, "#0f3460");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Декоративные круги, чтобы фон не был плоским
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = "#e94560";
  ctx.beginPath();
  ctx.arc(900, 350, 260, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ffd700";
  ctx.beginPath();
  ctx.arc(180, 1550, 320, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Название приложения сверху
  ctx.fillStyle = "#ffd700";
  ctx.font = "700 64px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("\u2728 АстроКод Фигуры \u2728", 540, 240);

  // Иконка знака по центру: женский персонаж вместо emoji.
  // Если SVG вдруг не загрузится — рисуем символ знака как раньше.
  const iconSize = 540;
  try {
    const iconSvg = getZodiacIcon(iconIndex);
    const img = await loadSvgAsImage(iconSvg);
    ctx.drawImage(img, 540 - iconSize / 2, 760 - iconSize / 2, iconSize, iconSize);
  } catch (e) {
    console.error("createStoryBackground icon error:", e);
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 420px sans-serif";
    ctx.fillText(sign.sym, 540, 760);
  }

  // Подпись под иконкой знака
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 72px sans-serif";
  ctx.fillText("Мой знак — " + sign.sym + " " + sign.name, 540, 1100);

  // Совет дня внизу
  ctx.fillStyle = "#e94560";
  ctx.font = "700 52px sans-serif";
  ctx.fillText("Совет дня:", 540, 1300);

  ctx.fillStyle = "#ffffff";
  ctx.font = "400 48px sans-serif";
  drawWrappedText(ctx, adviceText, 540, 1420, 860, 64);

  const dataUrl = canvas.toDataURL("image/png");
  if (!dataUrl) {
    throw new Error("canvas.toDataURL вернул пустой результат");
  }
  return dataUrl;
}

// Проверяет, что ошибка VK означает отказ пользователя (закрыл редактор истории).
function isUserDeniedError(e) {
  const data = (e && e.error_data) || e || {};
  return data.error_code === 4 || /user denied/i.test(data.error_reason || "");
}

// Получает id приложения из параметров запуска, чтобы собрать ссылку action
// для истории (кнопка "Перейти в приложение"). Если не удалось — вернёт null.
async function getAppId() {
  try {
    const params = await vkBridge.send("VKWebAppGetLaunchParams");
    return params && params.vk_app_id ? params.vk_app_id : null;
  } catch (e) {
    console.error("VKWebAppGetLaunchParams error:", e);
    return null;
  }
}

async function shareResult() {
  const sign = zodiacData[currentSign];
  const advice = document.querySelector(".advice-card p").textContent;
  const shareText = "\u2648 АстроКод Фигуры \u2728\n\nМой знак — " + sign.sym + " " + sign.name + "!\nСовет дня: " + advice + "\n\nУзнай свой звёздный путь к стройности! \uD83C\uDF1F";

  if (typeof vkBridge === "undefined") {
    fallbackShare(shareText);
    return;
  }

  try {
    // supports устарел в новых версиях SDK, используем supportsAsync
    const storySupported = await vkBridge.supportsAsync("VKWebAppShowStoryBox");
    if (storySupported) {
      try {
        const blob = await createStoryBackground(sign, advice, currentSign);
        // Рабочий payload: фон без стикеров (стикеры ломают валидацию VK,
        // см. заметку в README) + action для кнопки "Перейти в приложение".
        // action_type/action без стикеров проверены и работают (вариант s1).
        const appId = await getAppId();
        const storyJson = {
          background_type: "image",
          blob: blob,
          action_type: "link",
          action: appId ? "https://vk.com/app" + appId : "https://vk.com/app",
        };
        await vkBridge.send("VKWebAppShowStoryBox", storyJson);
        return;
      } catch (e) {
        console.error("VKWebAppShowStoryBox error:", e);
        // Пользователь закрыл редактор истории — тихо выходим, без fallback
        if (isUserDeniedError(e)) {
          return;
        }
        // История не открылась по другой причине — запасной вариант
        fallbackShare(shareText);
        return;
      }
    }

    // Публикация на стене временно отключена: приложение ещё не получило
    // право wall, и VK отвечает ошибкой "Нет прав на пост".
    // Вернуть, когда права будут настроены или после модерации.
    // const wallSupported = await vkBridge.supportsAsync("VKWebAppShowWallPostBox");
    // if (wallSupported) {
    //   try {
    //     await vkBridge.send("VKWebAppShowWallPostBox", { message: shareText, attachments: "" });
    //     return;
    //   } catch (e) {
    //     console.error("VKWebAppShowWallPostBox error:", e);
    //   }
    // }

    fallbackShare(shareText);
  } catch (e) {
    console.error("shareResult error:", e);
    fallbackShare(shareText);
  }
}

function fallbackShare(text) {
  if (navigator.share) {
    // В iframe веб-шеринг часто отклоняется: в этом случае копируем текст в буфер
    navigator.share({ title: "АстроКод Фигуры", text }).catch(() => copyShareText(text));
  } else if (navigator.clipboard) {
    copyShareText(text);
  } else {
    alert(text);
  }
}

function copyShareText(text) {
  if (!navigator.clipboard) {
    alert(text);
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    alert("Текст скопирован! Вставь его в пост или сообщение \u2728");
  }).catch(() => alert(text));
}

const grid = document.getElementById("zodiac-grid");
zodiacData.forEach((sign, index) => {
  const btn = document.createElement("div");
  btn.className = "zodiac-btn";
  btn.innerHTML = getZodiacIcon(index) + '<span class="name">' + sign.name + '</span>';
  btn.addEventListener("click", () => showResult(index));
  grid.appendChild(btn);
});

document.querySelector(".back-btn").addEventListener("click", () => showScreen("select"));
document.querySelector(".btn-primary").addEventListener("click", shareResult);
document.querySelector(".btn-secondary").addEventListener("click", () => showScreen("select"));

// Раскрытие/сворачивание расшифровок в «Звёздном профиле» (делегирование)
resultContent.addEventListener("click", (e) => {
  const btn = e.target.closest(".profile-btn");
  if (!btn) return;
  btn.classList.toggle("open");
});

if (typeof vkBridge !== "undefined") {
  vkBridge.send("VKWebAppInit").catch(() => {});
}
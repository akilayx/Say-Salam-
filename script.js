/* ============================================================
   script.js — SaySalam
   ============================================================ */

'use strict';


/* ============================================================
   1. TRANSLATIONS
   ============================================================ */

const translations = {
  en: {
    'nav.home':     'Home',
    'nav.features': 'Features',
    'nav.learn':    'Learn',
    'nav.download': 'Download',
    'nav.cta':      'Start Learning',

    'hero.tag':     '🌍 Language Learning Platform',
    'hero.title':   'Learn Kyrgyz<br><em>Easily</em>',
    'hero.subtitle':'From English or Russian — fast, interactive, and fun. Start your journey to fluency today.',
    'hero.cta1':    'Start Learning',
    'hero.cta2':    'Download App',
    'hero.stat1':   'Learners',
    'hero.stat2':   'Lessons',
    'hero.stat3':   'Languages',

    'mockup.tag':   'Daily Lesson',
    'mockup.trans': 'How are you?',
    'mockup.c1':    'How are you?',
    'mockup.c2':    'Good morning',
    'mockup.c3':    'Thank you',

    'badge.streak': 'Day Streak',
    'badge.xp':     'Earned today',

    'features.tag': 'Why SaySalam',
    'features.title':'Everything you need to learn Kyrgyz',
    'features.sub': 'Proven methods, interactive tools, and a curriculum built for real results.',
    'feat1.title':  'Interactive Lessons',
    'feat1.desc':   'Structured courses from zero to conversational. Learn grammar, phrases, and culture.',
    'feat2.title':  'Vocabulary Training',
    'feat2.desc':   'Spaced repetition flashcards that adapt to your learning pace for maximum retention.',
    'feat3.title':  'Pronunciation Practice',
    'feat3.desc':   'Listen to native speakers and train your ear with audio exercises for every lesson.',
    'feat4.title':  'Gamified Quizzes',
    'feat4.desc':   'Earn XP, maintain streaks, and challenge friends. Learning Kyrgyz has never been this fun.',
    'feat5.title':  'Progress Tracking',
    'feat5.desc':   'Visual progress bars and weekly reports keep you motivated and on track.',
    'feat6.title':  'Offline Access',
    'feat6.desc':   'Download lessons and study anywhere — no internet connection required.',

    'learn.tag':      'Choose Your Path',
    'learn.title':    'Learn Kyrgyz from your language',
    'learn.sub':      'Select your native language and get a personalised learning path.',
    'path.en.title':  'From English',
    'path.en.desc':   'Lessons, grammar explanations, and exercises in English.',
    'path.ru.title':  'From Russian',
    'path.ru.desc':   'Lessons, grammar explanations, and exercises in Russian.',
    'path.badge':     'Most popular',
    'path.badge2':    'Also available',

    'demo.tag':   'Try for Free',
    'demo.title': 'Try a Lesson — Right Now',
    'demo.sub':   'No sign-up required. Pick the correct translation and see how it works.',
    'quiz.prompt':'Choose the correct translation:',
    'quiz.restart':'Try Again',
    'quiz.correct':'Correct! 🎉',
    'quiz.wrong':  'Not quite — the right answer was:',
    'quiz.score.title':'Lesson Complete!',

    'dl.tag':         'Get the App',
    'dl.title':       'Learn on any device',
    'dl.sub':         'Switch seamlessly between web and mobile. Your progress syncs automatically.',
    'dl.mobile':      '📱 Mobile App',
    'dl.web':         '🌐 Web Version',
    'dl.mobile.title':'Take SaySalam everywhere',
    'dl.mobile.desc': 'Download the app and learn on the go. Works offline, syncs with your web account.',
    'dl.free':        'Free Download',
    'dl.s1':          'Daily Streak',
    'dl.s2':          'XP This Week',
    'dl.s3':          'Lessons Done',
    'store.avail':    'Available on the',
    'store.apple':    'App Store',
    'store.get':      'Get it on',
    'store.google':   'Google Play',
    'web.title':      'Start in your browser — no install needed',
    'web.desc':       'The full SaySalam experience is available right here. Sign up for free and begin your first lesson in seconds.',
    'web.cta':        'Open Web App',

    'footer.desc':    'The friendliest way to learn Kyrgyz. From English or Russian — for free.',
    'footer.platform':'Platform',
    'footer.languages':'Languages',
    'footer.contact': 'Contact',
    'footer.from_en': 'Kyrgyz from English',
    'footer.from_ru': 'Kyrgyz from Russian',
    'footer.try':     'Try a Lesson',
    'nav.lessons':    'Lessons',
    'nav.flashcards': 'Flashcards',
    'nav.tools':      'AI Tools',

    'tree.tag':       'Learning Path',
    'tree.title':     'Your Kyrgyz Journey',
    'tree.sub':       'Tap a lesson to start. Complete each level to unlock the next.',
    'tree.l1.title':  'Greetings',
    'tree.l2.title':  'Numbers',
    'tree.l3.title':  'Colors',
    'tree.l4.title':  'Family',
    'tree.l5.title':  'Food & Drinks',

    'fc.tag':         'Flashcards',
    'fc.title':       'Master Vocabulary Fast',
    'fc.sub':         'Click the card to flip. Mark cards as known or review them again.',
    'fc.hint':        'Click to reveal',
    'fc.repeat':      'Repeat',
    'fc.know':        'Know it',
    'fc.known':       'known',
    'fc.review':      'to review',

    'ai.tag':         'AI-Powered Tools',
    'ai.title':       'Speak, See & Translate',
    'ai.sub':         'Three powerful tools to supercharge your Kyrgyz practice.',
    'ai.tab1':        'Voice Tutor',
    'ai.tab2':        'Photo Translator',
    'ai.tab3':        'Voice Translator',

    'tutor.instruction': 'Listen to the phrase, then repeat it:',
    'tutor.listen':   'Listen',
    'tutor.prev':     '← Previous',
    'tutor.next':     'Next →',

    'photo.upload':   'Drop an image or click to upload',
    'photo.hint':     'Supports JPG, PNG, WEBP',
    'photo.btn':      'Choose Photo',
    'photo.clear':    '← Try another',

    'voice.placeholder': 'Your speech will appear here...',
    'voice.result':   'Translation will appear here...',
  },

  ru: {
    'nav.home':     'Главная',
    'nav.features': 'Возможности',
    'nav.learn':    'Учиться',
    'nav.download': 'Скачать',
    'nav.cta':      'Начать учёбу',

    'hero.tag':     '🌍 Платформа изучения языков',
    'hero.title':   'Учи кыргызский<br><em>легко</em>',
    'hero.subtitle':'С русского или английского — быстро, интерактивно и весело. Начни свой путь к свободному общению.',
    'hero.cta1':    'Начать учёбу',
    'hero.cta2':    'Скачать приложение',
    'hero.stat1':   'Учеников',
    'hero.stat2':   'Уроков',
    'hero.stat3':   'Языка',

    'mockup.tag':   'Урок дня',
    'mockup.trans': 'Как дела?',
    'mockup.c1':    'Как дела?',
    'mockup.c2':    'Доброе утро',
    'mockup.c3':    'Спасибо',

    'badge.streak': 'дней подряд',
    'badge.xp':     'Заработано сегодня',

    'features.tag': 'Почему SaySalam',
    'features.title':'Всё для изучения кыргызского',
    'features.sub': 'Проверенные методики, интерактивные инструменты и программа для реальных результатов.',
    'feat1.title':  'Интерактивные уроки',
    'feat1.desc':   'Структурированные курсы от нуля до разговорного уровня. Грамматика, фразы и культура.',
    'feat2.title':  'Тренировка словаря',
    'feat2.desc':   'Карточки с интервальными повторениями, адаптированные к твоему темпу обучения.',
    'feat3.title':  'Практика произношения',
    'feat3.desc':   'Слушай носителей языка и тренируй слух с помощью аудиоупражнений.',
    'feat4.title':  'Игровые тесты',
    'feat4.desc':   'Зарабатывай XP, поддерживай серии и бросай вызов друзьям. Учёба как никогда не была такой весёлой.',
    'feat5.title':  'Отслеживание прогресса',
    'feat5.desc':   'Визуальные полосы прогресса и еженедельные отчёты держат тебя в тонусе.',
    'feat6.title':  'Офлайн-доступ',
    'feat6.desc':   'Скачивай уроки и занимайся где угодно — без подключения к интернету.',

    'learn.tag':      'Выбери путь',
    'learn.title':    'Учи кыргызский с твоего языка',
    'learn.sub':      'Выбери родной язык и получи персональный план обучения.',
    'path.en.title':  'С английского',
    'path.en.desc':   'Уроки, объяснения грамматики и упражнения на английском.',
    'path.ru.title':  'С русского',
    'path.ru.desc':   'Уроки, объяснения грамматики и упражнения на русском языке.',
    'path.badge':     'Самый популярный',
    'path.badge2':    'Также доступно',

    'demo.tag':   'Попробуй бесплатно',
    'demo.title': 'Попробуй урок — прямо сейчас',
    'demo.sub':   'Без регистрации. Выбери правильный перевод и посмотри, как это работает.',
    'quiz.prompt':'Выбери правильный перевод:',
    'quiz.restart':'Попробовать снова',
    'quiz.correct':'Правильно! 🎉',
    'quiz.wrong':  'Не совсем — правильный ответ:',
    'quiz.score.title':'Урок завершён!',

    'dl.tag':         'Скачай приложение',
    'dl.title':       'Учись на любом устройстве',
    'dl.sub':         'Переключайся между вебом и мобильным. Прогресс синхронизируется автоматически.',
    'dl.mobile':      '📱 Приложение',
    'dl.web':         '🌐 Веб-версия',
    'dl.mobile.title':'Бери SaySalam везде',
    'dl.mobile.desc': 'Скачай приложение и учись на ходу. Работает офлайн, синхронизируется с аккаунтом.',
    'dl.free':        'Бесплатно',
    'dl.s1':          'Дней подряд',
    'dl.s2':          'XP на этой неделе',
    'dl.s3':          'Уроков пройдено',
    'store.avail':    'Доступно в',
    'store.apple':    'App Store',
    'store.get':      'Скачай в',
    'store.google':   'Google Play',
    'web.title':      'Начни в браузере — установка не нужна',
    'web.desc':       'Полный опыт SaySalam доступен прямо здесь. Зарегистрируйся бесплатно и начни первый урок.',
    'web.cta':        'Открыть веб-приложение',

    'footer.desc':    'Самый дружелюбный способ учить кыргызский. С русского или английского — бесплатно.',
    'footer.platform':'Платформа',
    'footer.languages':'Языки',
    'footer.contact': 'Контакты',
    'footer.from_en': 'Кыргызский с английского',
    'footer.from_ru': 'Кыргызский с русского',
    'footer.try':     'Попробовать урок',
    'nav.lessons':    'Уроки',
    'nav.flashcards': 'Карточки',
    'nav.tools':      'ИИ-инструменты',

    'tree.tag':       'Путь обучения',
    'tree.title':     'Твой путь в кыргызском',
    'tree.sub':       'Нажми на урок, чтобы начать. Завершай уровни, чтобы открывать новые.',
    'tree.l1.title':  'Приветствия',
    'tree.l2.title':  'Числа',
    'tree.l3.title':  'Цвета',
    'tree.l4.title':  'Семья',
    'tree.l5.title':  'Еда и напитки',

    'fc.tag':         'Карточки',
    'fc.title':       'Быстро запомни слова',
    'fc.sub':         'Нажми на карточку, чтобы перевернуть. Отмечай знакомые слова.',
    'fc.hint':        'Нажми, чтобы увидеть',
    'fc.repeat':      'Повторить',
    'fc.know':        'Знаю',
    'fc.known':       'знакомых',
    'fc.review':      'на повторение',

    'ai.tag':         'ИИ-инструменты',
    'ai.title':       'Говори, смотри и переводи',
    'ai.sub':         'Три мощных инструмента для практики кыргызского.',
    'ai.tab1':        'Голосовой тьютор',
    'ai.tab2':        'Фото-переводчик',
    'ai.tab3':        'Голосовой переводчик',

    'tutor.instruction': 'Послушай фразу, затем повтори её:',
    'tutor.listen':   'Послушать',
    'tutor.prev':     '← Назад',
    'tutor.next':     'Далее →',

    'photo.upload':   'Перетащи фото или нажми для загрузки',
    'photo.hint':     'Поддерживается JPG, PNG, WEBP',
    'photo.btn':      'Выбрать фото',
    'photo.clear':    '← Попробовать другое',

    'voice.placeholder': 'Ваша речь появится здесь...',
    'voice.result':   'Перевод появится здесь...',
  }
};

let currentLang = 'en';

function applyTranslations(lang) {
  currentLang = lang;
  // Restart quiz in the new language
  currentQ = 0;
  score    = 0;
  if (quizBody)  quizBody.style.display  = '';
  if (quizScore) quizScore.classList.add('hidden');
  if (quizResult) quizResult.classList.add('hidden');
  loadQuestion(0);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang]?.[key];
    if (val === undefined) return;
    if (key === 'hero.title') {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Refresh dynamic content when language changes
  if (typeof renderTutorPhrase === 'function') renderTutorPhrase(tutorIndex);
  if (typeof renderFlashcard   === 'function') renderFlashcard(fcIndex);
  if (typeof voiceInputEl !== 'undefined' && voiceInputEl) {
    voiceInputEl.innerHTML  = `<span class="voice-placeholder">${translations[lang]['voice.placeholder']}</span>`;
    voiceOutputEl.innerHTML = `<span class="voice-placeholder">${translations[lang]['voice.result']}</span>`;
    if (typeof resetVoice === 'function') resetVoice(false);
  }
}


/* ============================================================
   2. BURGER MENU
   ============================================================ */

const burger  = document.querySelector('.burger');
const navList = document.getElementById('nav-list');
const header  = document.querySelector('.header');

if (burger && navList) {
  burger.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  navList.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', closeMenu)
  );
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !navList.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
}

function closeMenu() {
  navList?.classList.remove('open');
  burger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}


/* ============================================================
   3. NAVBAR SCROLL SHADOW
   ============================================================ */

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });


/* ============================================================
   4. LANG SWITCHER
   ============================================================ */

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
});


/* ============================================================
   5. FADE-UP SCROLL ANIMATIONS
   ============================================================ */

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));


/* ============================================================
   6. ANIMATED COUNTERS
   ============================================================ */

function animateCounter(el, target, suffix, duration = 1800) {
  const start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString() + suffix;
  })(start);
}

const countEls = document.querySelectorAll('.count');
const countObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el  = e.target;
    const tgt = parseInt(el.dataset.target, 10);
    const sfx = tgt >= 1000 ? '+' : '+';
    animateCounter(el, tgt, sfx);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });

countEls.forEach(el => countObserver.observe(el));


/* ============================================================
   7. LANGUAGE PATH SELECTION
   ============================================================ */

document.querySelectorAll('.lang-card').forEach(card => {
  card.addEventListener('click',   () => selectPath(card));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectPath(card); }
  });
});

function selectPath(card) {
  document.querySelectorAll('.lang-card').forEach(c => {
    c.classList.remove('lang-card--active');
    c.setAttribute('aria-pressed', 'false');
  });
  card.classList.add('lang-card--active');
  card.setAttribute('aria-pressed', 'true');
}


/* ============================================================
   8. DOWNLOAD TOGGLE
   ============================================================ */

const panelMobile = document.getElementById('panelMobile');
const panelWeb    = document.getElementById('panelWeb');

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (btn.dataset.platform === 'mobile') {
      panelMobile?.classList.remove('hidden');
      panelWeb?.classList.add('hidden');
    } else {
      panelWeb?.classList.remove('hidden');
      panelMobile?.classList.add('hidden');
    }
  });
});


/* ============================================================
   9. QUIZ
   ============================================================ */

const quizDataEN = [
  { word: 'Саламатсызбы?', correct: 'How are you?',      options: ['How are you?',     'Good morning',    'Thank you',          'Goodbye']          },
  { word: 'Рахмат',        correct: 'Thank you',          options: ['Please',           'Thank you',       'Hello',              'Good night']       },
  { word: 'Кечиресиз',     correct: 'Excuse me / Sorry',  options: ['You\'re welcome',  'Excuse me / Sorry','Congratulations',    'See you later']    },
  { word: 'Жакшы',         correct: 'Good / Fine',        options: ['Bad',              'Good / Fine',     'Beautiful',          'Fast']             },
  { word: 'Сүйлөшөлү',     correct: 'Let\'s talk',       options: ['Let\'s eat',       'Let\'s walk',    'Let\'s talk',       'Let\'s rest']      },
];

const quizDataRU = [
  { word: 'Саламатсызбы?', correct: 'Как дела?',          options: ['Как дела?',        'Доброе утро',     'Спасибо',            'До свидания']      },
  { word: 'Рахмат',        correct: 'Спасибо',            options: ['Пожалуйста',       'Спасибо',         'Привет',             'Спокойной ночи']   },
  { word: 'Кечиресиз',     correct: 'Извините / Простите',options: ['Пожалуйста',       'Поздравляю',      'Извините / Простите','До встречи']       },
  { word: 'Жакшы',         correct: 'Хорошо / Нормально', options: ['Плохо',            'Хорошо / Нормально','Красиво',          'Быстро']           },
  { word: 'Сүйлөшөлү',     correct: 'Давай поговорим',    options: ['Давай поедим',     'Давай погуляем',  'Давай поговорим',    'Давай отдохнём']   },
];

function getQuizData() { return currentLang === 'ru' ? quizDataRU : quizDataEN; }

let currentQ  = 0;
let score     = 0;
let answered  = false;

const quizProgress  = document.getElementById('quizProgress');
const quizLabel     = document.getElementById('quizLabel');
const quizWord      = document.getElementById('quizWord');
const quizOptions   = document.getElementById('quizOptions');
const quizBody      = document.getElementById('quizBody');
const quizResult    = document.getElementById('quizResult');
const quizResultIcon = document.getElementById('quizResultIcon');
const quizResultText = document.getElementById('quizResultText');
const quizScore     = document.getElementById('quizScore');
const scoreEmoji    = document.getElementById('scoreEmoji');
const scoreText     = document.getElementById('scoreText');
const scoreXP       = document.getElementById('scoreXP');
const quizRestart   = document.getElementById('quizRestart');

function loadQuestion(index) {
  answered = false;
  quizResult?.classList.add('hidden');

  const qd  = getQuizData();
  const q   = qd[index];
  const pct = (index / qd.length) * 100;

  if (quizProgress) quizProgress.style.width = pct + '%';
  if (quizLabel)    quizLabel.textContent = `${index + 1} / ${qd.length}`;
  if (quizWord)     quizWord.textContent  = q.word;

  if (quizOptions) {
    quizOptions.innerHTML = '';
    const shuffled = [...q.options].sort(() => Math.random() - .5);
    shuffled.forEach(opt => {
      const li  = document.createElement('li');
      const btn = document.createElement('button');
      btn.className   = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleAnswer(btn, opt, q.correct));
      li.appendChild(btn);
      quizOptions.appendChild(li);
    });
  }
}

function handleAnswer(btn, chosen, correct) {
  if (answered) return;
  answered = true;

  const allBtns = quizOptions?.querySelectorAll('.quiz-option');
  allBtns?.forEach(b => { b.disabled = true; });

  const isCorrect = chosen === correct;
  if (isCorrect) score++;

  btn.classList.add(isCorrect ? 'correct' : 'wrong');

  // Highlight correct answer if wrong
  if (!isCorrect) {
    allBtns?.forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
  }

  // Show result flash
  if (quizResult && quizResultIcon && quizResultText) {
    quizResult.classList.remove('hidden');
    quizResult.className = `quiz-result quiz-result--${isCorrect ? 'correct' : 'wrong'}`;
    quizResultIcon.textContent = isCorrect ? '🎉' : '😕';
    const t = translations[currentLang];
    quizResultText.textContent = isCorrect
      ? (t?.['quiz.correct']  || 'Correct! 🎉')
      : `${t?.['quiz.wrong'] || 'Not quite —'} ${correct}`;
  }

  setTimeout(() => {
    currentQ++;
    if (currentQ < getQuizData().length) {
      loadQuestion(currentQ);
    } else {
      showScore();
    }
  }, 1600);
}

function showScore() {
  if (quizBody)  quizBody.style.display  = 'none';
  if (quizResult) quizResult.classList.add('hidden');
  if (quizScore) quizScore.classList.remove('hidden');
  if (quizProgress) quizProgress.style.width = '100%';
  const qd = getQuizData();
  if (quizLabel)    quizLabel.textContent = `${qd.length} / ${qd.length}`;

  const xp = score * 20;
  const pct = Math.round((score / qd.length) * 100);

  if (scoreEmoji) {
    scoreEmoji.textContent = pct === 100 ? '🏆' : pct >= 60 ? '⭐' : '💪';
  }
  if (scoreText) {
    const correct_label = currentLang === 'ru' ? 'правильно' : 'correct';
    scoreText.textContent = `${score} / ${qd.length} ${correct_label} (${pct}%)`;
  }
  if (scoreXP) {
    animateCounter(scoreXP, xp, '', 800);
  }
}

function restartQuiz() {
  currentQ = 0;
  score    = 0;
  if (quizBody)  quizBody.style.display  = '';
  if (quizScore) quizScore.classList.add('hidden');
  loadQuestion(0);
}

quizRestart?.addEventListener('click', restartQuiz);

// Init quiz when it scrolls into view
const quizCard = document.getElementById('quizCard');
if (quizCard) {
  let quizStarted = false;
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !quizStarted) {
      quizStarted = true;
      loadQuestion(0);
    }
  }, { threshold: 0.3 }).observe(quizCard);
}


/* ============================================================
   10. SMOOTH SCROLL (offset for fixed header)
   ============================================================ */

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    closeMenu();
    const offset = (header?.offsetHeight || 72) + 12;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});


/* ============================================================
   11. ACTIVE NAV HIGHLIGHT
   ============================================================ */

const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navAnchors.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${e.target.id}`
        ? 'var(--primary)'
        : '';
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' }).observe;

// simpler approach
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navAnchors.forEach(a =>
      a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--text)' : ''
    );
  });
}, { rootMargin: '-35% 0px -60% 0px' })
  ; sections.forEach(s => {
  new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    navAnchors.forEach(a =>
      a.style.color = a.getAttribute('href') === `#${e.target.id}` ? 'var(--primary)' : ''
    );
  }, { rootMargin: '-35% 0px -60% 0px' }).observe(s);


/* ============================================================
   12. LESSON TREE
   ============================================================ */
const treeLessons = {
  1: { titleEN: 'Greetings',     titleRU: 'Приветствия',   done: true,  questions: [] },
  2: { titleEN: 'Numbers',       titleRU: 'Числа',          done: false,
    questions: [
      { word: 'Бир',  opt_en: ['One','Two','Three','Four'],    cor_en: 'One',   opt_ru: ['Один','Два','Три','Четыре'],     cor_ru: 'Один'  },
      { word: 'Эки',  opt_en: ['One','Two','Three','Four'],    cor_en: 'Two',   opt_ru: ['Один','Два','Три','Четыре'],     cor_ru: 'Два'   },
      { word: 'Үч',   opt_en: ['One','Two','Three','Four'],    cor_en: 'Three', opt_ru: ['Один','Два','Три','Четыре'],     cor_ru: 'Три'   },
    ]
  },
  3: { titleEN: 'Colors',        titleRU: 'Цвета',          done: false,
    questions: [
      { word: 'Кызыл', opt_en: ['Red','Blue','Green','White'],  cor_en: 'Red',   opt_ru: ['Красный','Синий','Зелёный','Белый'], cor_ru: 'Красный' },
      { word: 'Ак',    opt_en: ['Red','Blue','Green','White'],  cor_en: 'White', opt_ru: ['Красный','Синий','Зелёный','Белый'], cor_ru: 'Белый'   },
      { word: 'Жашыл', opt_en: ['Red','Blue','Green','White'],  cor_en: 'Green', opt_ru: ['Красный','Синий','Зелёный','Белый'], cor_ru: 'Зелёный' },
    ]
  },
  4: { titleEN: 'Family',        titleRU: 'Семья',          done: false,
    questions: [
      { word: 'Апа', opt_en: ['Mother','Father','Sister','Brother'], cor_en: 'Mother', opt_ru: ['Мама','Папа','Сестра','Брат'], cor_ru: 'Мама'   },
      { word: 'Ата', opt_en: ['Mother','Father','Sister','Brother'], cor_en: 'Father', opt_ru: ['Мама','Папа','Сестра','Брат'], cor_ru: 'Папа'   },
      { word: 'Эже', opt_en: ['Mother','Father','Sister','Brother'], cor_en: 'Sister', opt_ru: ['Мама','Папа','Сестра','Брат'], cor_ru: 'Сестра' },
    ]
  },
  5: { titleEN: 'Food & Drinks', titleRU: 'Еда и напитки', done: false,
    questions: [
      { word: 'Нан', opt_en: ['Bread','Water','Milk','Meat'], cor_en: 'Bread', opt_ru: ['Хлеб','Вода','Молоко','Мясо'], cor_ru: 'Хлеб' },
      { word: 'Суу', opt_en: ['Bread','Water','Milk','Meat'], cor_en: 'Water', opt_ru: ['Хлеб','Вода','Молоко','Мясо'], cor_ru: 'Вода' },
      { word: 'Эт',  opt_en: ['Bread','Water','Milk','Meat'], cor_en: 'Meat',  opt_ru: ['Хлеб','Вода','Молоко','Мясо'], cor_ru: 'Мясо' },
    ]
  },
};

let treeLevel = 0, treeLessonQ = 0, treeLessonScore = 0;

document.querySelectorAll('.tree-node').forEach(node => {
  function openOnEvent() {
    if (node.classList.contains('tree-node--locked')) {
      showLockedLessonHint(parseInt(node.dataset.level, 10));
      return;
    }
    openLesson(parseInt(node.dataset.level, 10));
  }
  node.addEventListener('click', openOnEvent);
  node.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openOnEvent(); } });
});

function showLockedLessonHint(level) {
  const panel = document.getElementById('lessonPanel');
  const title = document.getElementById('lessonTitle');
  const body = document.getElementById('lessonBody');
  if (!panel || !title || !body) return;
  const isRU = currentLang === 'ru';
  const needLevel = Math.max(1, level - 1);
  title.textContent = isRU ? 'Урок пока закрыт' : 'Lesson is locked';
  body.innerHTML = `
    <div class="lesson-complete">
      <div class="lesson-complete__emoji">🔒</div>
      <h3 class="lesson-complete__title">${isRU ? 'Сначала пройди предыдущий уровень' : 'Complete the previous level first'}</h3>
      <p style="color:var(--muted)">${isRU ? `Открой уровень ${needLevel}, затем этот урок станет активным.` : `Finish level ${needLevel}, then this lesson will unlock.`}</p>
      <p class="lesson-panel__note">${isRU ? 'Подсказка: активный уровень пульсирует красным.' : 'Tip: the active level has a red pulse.'}</p>
      <button class="btn btn--primary btn--sm" id="lockedOk">${isRU ? 'Понятно' : 'Got it'}</button>
    </div>`;
  panel.classList.remove('hidden');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  document.getElementById('lockedOk')?.addEventListener('click', () => panel.classList.add('hidden'));
}

function openLesson(level) {
  const lesson = treeLessons[level];
  if (!lesson) return;
  treeLevel = level; treeLessonQ = 0; treeLessonScore = 0;
  const panel = document.getElementById('lessonPanel');
  const title = document.getElementById('lessonTitle');
  if (!panel || !title) return;
  title.textContent = currentLang === 'ru' ? lesson.titleRU : lesson.titleEN;
  panel.classList.remove('hidden');
  if (lesson.done) {
    showLessonComplete(level, 3, 3);
  } else {
    renderLessonQ(lesson);
  }
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderLessonQ(lesson) {
  const body = document.getElementById('lessonBody');
  if (!body) return;
  const q = lesson.questions[treeLessonQ];
  const isRU = currentLang === 'ru';
  const opts = isRU ? q.opt_ru : q.opt_en;
  const cor  = isRU ? q.cor_ru  : q.cor_en;
  const total = lesson.questions.length;
  const prompt = isRU ? 'Выбери правильный перевод:' : 'Choose the correct translation:';
  body.innerHTML = `
    <div class="lesson-q">
      <p class="lesson-q__step">${treeLessonQ + 1} / ${total}</p>
      <p class="lesson-q__word">${q.word}</p>
      <p class="lesson-q__prompt">${prompt}</p>
      <div class="lesson-q__options">
        ${opts.map(o => `<button class="lesson-q__opt" data-cor="${o === cor}">${o}</button>`).join('')}
      </div>
    </div>`;
  body.querySelectorAll('.lesson-q__opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const ok = btn.dataset.cor === 'true';
      body.querySelectorAll('.lesson-q__opt').forEach(b => { b.disabled = true; });
      btn.classList.add(ok ? 'correct' : 'wrong');
      if (!ok) body.querySelectorAll('.lesson-q__opt').forEach(b => { if (b.dataset.cor === 'true') b.classList.add('correct'); });
      if (ok) treeLessonScore++;
      setTimeout(() => { treeLessonQ++; treeLessonQ < total ? renderLessonQ(lesson) : showLessonComplete(treeLevel, treeLessonScore, total); }, 1000);
    });
  });
}

function showLessonComplete(level, sc, total) {
  const body = document.getElementById('lessonBody');
  if (!body) return;
  const lesson = treeLessons[level];
  const xp = sc * 20;
  const isRU = currentLang === 'ru';
  const retryLabel = isRU ? 'Повторить' : 'Try Again';
  const contLabel  = isRU ? 'Продолжить' : 'Continue';
  const title      = isRU ? 'Урок завершён!' : 'Lesson Complete!';
  body.innerHTML = `
    <div class="lesson-complete">
      <div class="lesson-complete__emoji">${sc === total ? '🏆' : sc >= total / 2 ? '⭐' : '💪'}</div>
      <h3 class="lesson-complete__title">${title}</h3>
      <p style="color:var(--muted);margin-bottom:.6rem">${sc} / ${total}</p>
      <div class="lesson-complete__xp">+${xp} XP</div>
      ${!lesson.done ? `<button class="btn btn--outline btn--sm" id="treeRetry">${retryLabel}</button>&nbsp;` : ''}
      <button class="btn btn--primary btn--sm" id="treeCont">${contLabel}</button>
    </div>`;
  document.getElementById('treeRetry')?.addEventListener('click', () => { treeLessonQ = 0; treeLessonScore = 0; renderLessonQ(lesson); });
  document.getElementById('treeCont')?.addEventListener('click', () => { document.getElementById('lessonPanel')?.classList.add('hidden'); });
}
document.getElementById('lessonClose')?.addEventListener('click', () => { document.getElementById('lessonPanel')?.classList.add('hidden'); });


/* ============================================================
   13. FLASHCARDS
   ============================================================ */
const flashcardsData = [
  { emoji: '👋', word: 'Саламатсызбы?', en: 'How are you?',       ru: 'Как дела?',             ex_en: 'Formal daily greeting',             ex_ru: 'Формальное приветствие'      },
  { emoji: '🙏', word: 'Рахмат',        en: 'Thank you',           ru: 'Спасибо',               ex_en: 'Рахмат! — Thank you!',              ex_ru: 'Рахмат! — Спасибо!'          },
  { emoji: '😊', word: 'Жакшы',         en: 'Good / Fine',         ru: 'Хорошо / Нормально',   ex_en: 'Мен жакшымын — I am fine',          ex_ru: 'Мен жакшымын — Всё хорошо'  },
  { emoji: '1️⃣', word: 'Бир',           en: 'One',                 ru: 'Один',                  ex_en: 'Бир чыны чай — one cup of tea',     ex_ru: 'Бир чыны чай — одна чашка'  },
  { emoji: '2️⃣', word: 'Эки',           en: 'Two',                 ru: 'Два',                   ex_en: 'Эки адам — two people',             ex_ru: 'Эки адам — два человека'    },
  { emoji: '🔴', word: 'Кызыл',         en: 'Red',                 ru: 'Красный',               ex_en: 'Кызыл гүл — red flower',            ex_ru: 'Кызыл гүл — красный цветок' },
  { emoji: '⬜', word: 'Ак',            en: 'White',               ru: 'Белый',                 ex_en: 'Ак кар — white snow',               ex_ru: 'Ак кар — белый снег'         },
  { emoji: '👩', word: 'Апа',           en: 'Mother',              ru: 'Мама',                  ex_en: 'Менин апам — my mother',            ex_ru: 'Менин апам — моя мама'       },
  { emoji: '🍞', word: 'Нан',           en: 'Bread',               ru: 'Хлеб',                  ex_en: 'Нан жедим — I ate bread',           ex_ru: 'Нан жедим — я съел хлеб'    },
  { emoji: '💧', word: 'Суу',           en: 'Water',               ru: 'Вода',                  ex_en: 'Суу ичтим — I drank water',         ex_ru: 'Суу ичтим — я выпил воду'   },
];

let fcIndex = 0;
const fcKnown = new Set();
const flashcardEl   = document.getElementById('flashcard');
const fcEmojiEl     = document.getElementById('fcEmoji');
const fcWordEl      = document.getElementById('fcWord');
const fcTransEl     = document.getElementById('fcTranslation');
const fcExEl        = document.getElementById('fcExample');
const fcCounterEl   = document.getElementById('fcCounter');
const fcKnownCntEl  = document.getElementById('fcKnownCount');
const fcRevCntEl    = document.getElementById('fcReviewCount');

function renderFlashcard(idx) {
  const c = flashcardsData[idx];
  if (!c) return;
  flashcardEl?.classList.remove('flipped');
  setTimeout(() => {
    if (fcEmojiEl)   fcEmojiEl.textContent   = c.emoji;
    if (fcWordEl)    fcWordEl.textContent     = c.word;
    if (fcTransEl)   fcTransEl.textContent   = currentLang === 'ru' ? c.ru : c.en;
    if (fcExEl)      fcExEl.textContent      = currentLang === 'ru' ? c.ex_ru : c.ex_en;
    if (fcCounterEl) fcCounterEl.textContent = `${idx + 1} / ${flashcardsData.length}`;
    if (fcKnownCntEl) fcKnownCntEl.textContent = fcKnown.size;
    if (fcRevCntEl)   fcRevCntEl.textContent   = flashcardsData.length - fcKnown.size;
  }, 150);
}

flashcardEl?.addEventListener('click', () => flashcardEl.classList.toggle('flipped'));
flashcardEl?.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flashcardEl.classList.toggle('flipped'); } });
document.getElementById('fcNext')?.addEventListener('click',   () => { fcIndex = (fcIndex + 1) % flashcardsData.length; renderFlashcard(fcIndex); });
document.getElementById('fcPrev')?.addEventListener('click',   () => { fcIndex = (fcIndex - 1 + flashcardsData.length) % flashcardsData.length; renderFlashcard(fcIndex); });
document.getElementById('fcKnow')?.addEventListener('click',   () => { fcKnown.add(fcIndex); fcIndex = (fcIndex + 1) % flashcardsData.length; renderFlashcard(fcIndex); });
document.getElementById('fcRepeat')?.addEventListener('click', () => { fcKnown.delete(fcIndex); fcIndex = (fcIndex + 1) % flashcardsData.length; renderFlashcard(fcIndex); });

const fcSection = document.getElementById('flashcards');
if (fcSection) {
  let fcInited = false;
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !fcInited) { fcInited = true; renderFlashcard(0); }
  }, { threshold: 0.15 }).observe(fcSection);
}


/* ============================================================
   14. AI TABS
   ============================================================ */
document.querySelectorAll('.ai-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ai-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
    const panelId = 'panel' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1);
    document.querySelectorAll('.ai-panel').forEach(p => p.classList.add('hidden'));
    document.getElementById(panelId)?.classList.remove('hidden');
  });
});


/* ============================================================
   15. VOICE TUTOR
   ============================================================ */
const tutorPhrases = [
  { kyrgyz: 'Саламатсызбы?', en: 'How are you?',        ru: 'Как дела?'           },
  { kyrgyz: 'Мен жакшымын',  en: 'I am fine',           ru: 'Я в порядке'         },
  { kyrgyz: 'Атыңыз ким?',   en: 'What is your name?',  ru: 'Как вас зовут?'      },
  { kyrgyz: 'Менин атым...',  en: 'My name is...',       ru: 'Меня зовут...'       },
  { kyrgyz: 'Рахмат',        en: 'Thank you',            ru: 'Спасибо'             },
  { kyrgyz: 'Кечиресиз',     en: 'Excuse me',            ru: 'Извините'            },
  { kyrgyz: 'Жакшы бол',     en: 'Goodbye',              ru: 'До свидания'         },
  { kyrgyz: 'Ооба',          en: 'Yes',                  ru: 'Да'                  },
  { kyrgyz: 'Жок',           en: 'No',                   ru: 'Нет'                 },
  { kyrgyz: 'Кош келиңиз',   en: 'Welcome',              ru: 'Добро пожаловать'    },
];

let tutorIndex = 0;
let tutorRecognizer = null;

function renderTutorPhrase(idx) {
  const p = tutorPhrases[idx];
  const phraseEl = document.getElementById('tutorPhrase');
  const transEl  = document.getElementById('tutorTrans');
  const labelEl  = document.getElementById('tutorRecordLabel');
  if (phraseEl) phraseEl.textContent = p.kyrgyz;
  if (transEl)  transEl.textContent  = currentLang === 'ru' ? p.ru : p.en;
  if (labelEl)  labelEl.textContent  = currentLang === 'ru' ? 'Нажмите, чтобы говорить' : 'Tap to Speak';
  const fb = document.getElementById('tutorFeedback');
  if (fb) { fb.classList.add('hidden'); fb.textContent = ''; }
}

document.getElementById('tutorPrev')?.addEventListener('click', () => { tutorIndex = (tutorIndex - 1 + tutorPhrases.length) % tutorPhrases.length; renderTutorPhrase(tutorIndex); });
document.getElementById('tutorNext')?.addEventListener('click', () => { tutorIndex = (tutorIndex + 1) % tutorPhrases.length; renderTutorPhrase(tutorIndex); });

document.getElementById('tutorListen')?.addEventListener('click', () => {
  if (!('speechSynthesis' in window)) return;
  const utt = new SpeechSynthesisUtterance(tutorPhrases[tutorIndex].kyrgyz);
  utt.lang = 'ru-RU'; utt.rate = 0.8;
  speechSynthesis.cancel(); speechSynthesis.speak(utt);
});

document.querySelector('.tutor__phrase-box')?.addEventListener('click', e => {
  if (e.target.closest('#tutorListen')) return;
  document.getElementById('tutorListen')?.click();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const tutorRecordBtn   = document.getElementById('tutorRecord');
const tutorFeedbackEl  = document.getElementById('tutorFeedback');

tutorRecordBtn?.addEventListener('click', () => {
  if (!SpeechRecognition) {
    showTutorFeedback('try', currentLang === 'ru' ? '🎤 Используйте Chrome для распознавания речи.' : '🎤 Use Chrome for speech recognition.');
    return;
  }
  if (tutorRecognizer) { tutorRecognizer.stop(); return; }
  tutorRecordBtn.classList.add('recording');
  document.getElementById('tutorRecordLabel').textContent = currentLang === 'ru' ? 'Слушаю...' : 'Listening...';
  tutorRecognizer = new SpeechRecognition();
  tutorRecognizer.lang = 'ru-RU'; tutorRecognizer.interimResults = false; tutorRecognizer.maxAlternatives = 5;
  tutorRecognizer.onresult = e => {
    const spoken   = e.results[0][0].transcript.toLowerCase().trim();
    const expected = tutorPhrases[tutorIndex].kyrgyz.toLowerCase();
    const common   = [...expected].filter(c => spoken.includes(c)).length;
    const ratio    = common / expected.length;
    if (ratio >= 0.7)      showTutorFeedback('correct', currentLang === 'ru' ? '🎉 Отлично! Произношение хорошее!' : '🎉 Excellent! Great pronunciation!');
    else if (ratio >= 0.4) showTutorFeedback('try',     (currentLang === 'ru' ? '👍 Почти! Попробуй ещё: ' : '👍 Almost! Try again: ') + `"${tutorPhrases[tutorIndex].kyrgyz}"`);
    else                   showTutorFeedback('wrong',   (currentLang === 'ru' ? '🔄 Скажи: ' : '🔄 Try to say: ') + `"${tutorPhrases[tutorIndex].kyrgyz}"`);
  };
  tutorRecognizer.onerror = () => { showTutorFeedback('try', currentLang === 'ru' ? '🎤 Не удалось распознать. Попробуй снова.' : '🎤 Could not hear. Please try again.'); resetTutor(); };
  tutorRecognizer.onend   = () => resetTutor();
  tutorRecognizer.start();
});

document.querySelector('.tutor__record-area')?.addEventListener('click', e => {
  if (e.target.closest('#tutorRecord')) return;
  tutorRecordBtn?.click();
});

function showTutorFeedback(type, msg) {
  if (!tutorFeedbackEl) return;
  tutorFeedbackEl.className = `tutor__feedback tutor__feedback--${type}`;
  tutorFeedbackEl.textContent = msg;
  tutorFeedbackEl.classList.remove('hidden');
}
function resetTutor() {
  tutorRecognizer = null;
  tutorRecordBtn?.classList.remove('recording');
  const lbl = document.getElementById('tutorRecordLabel');
  if (lbl) lbl.textContent = currentLang === 'ru' ? 'Нажмите, чтобы говорить' : 'Tap to Speak';
}

renderTutorPhrase(0);


/* ============================================================
   16. PHOTO TRANSLATOR
   ============================================================ */
const fakePhotoSets = [
  [{ ky: 'Дарак', en: 'Tree',   ru: 'Дерево' }, { ky: 'Асман', en: 'Sky',    ru: 'Небо'    }, { ky: 'Жол',    en: 'Road',   ru: 'Дорога'  }],
  [{ ky: 'Үй',    en: 'House',  ru: 'Дом'    }, { ky: 'Эшик',  en: 'Door',   ru: 'Дверь'   }, { ky: 'Терезе', en: 'Window', ru: 'Окно'    }],
  [{ ky: 'Адам',  en: 'Person', ru: 'Человек'}, { ky: 'Кол',   en: 'Hand',   ru: 'Рука'    }, { ky: 'Баш',    en: 'Head',   ru: 'Голова'  }],
  [{ ky: 'Суу',   en: 'Water',  ru: 'Вода'   }, { ky: 'Таш',   en: 'Stone',  ru: 'Камень'  }, { ky: 'Чөп',    en: 'Grass',  ru: 'Трава'   }],
  [{ ky: 'Машина',en: 'Car',    ru: 'Машина' }, { ky: 'Жол',   en: 'Road',   ru: 'Дорога'  }, { ky: 'Нур',    en: 'Light',  ru: 'Свет'    }],
];

const photoInputEl    = document.getElementById('photoInput');
const photoDropZoneEl = document.getElementById('photoDropZone');
const photoResultEl   = document.getElementById('photoResult');
const photoPreviewEl  = document.getElementById('photoPreview');
const photoLabelsEl   = document.getElementById('photoLabels');
const photoClearEl    = document.getElementById('photoClear');

photoInputEl?.addEventListener('change', e => { if (e.target.files[0]) processPhoto(e.target.files[0]); });
photoDropZoneEl?.addEventListener('dragover', e => { e.preventDefault(); photoDropZoneEl.classList.add('drag-over'); });
photoDropZoneEl?.addEventListener('dragleave', () => photoDropZoneEl.classList.remove('drag-over'));
photoDropZoneEl?.addEventListener('drop', e => {
  e.preventDefault(); photoDropZoneEl.classList.remove('drag-over');
  const f = e.dataTransfer.files[0];
  if (f && f.type.startsWith('image/')) processPhoto(f);
});
photoDropZoneEl?.addEventListener('click', e => { if (e.target !== photoInputEl && !e.target.closest('label')) photoInputEl?.click(); });

function processPhoto(file) {
  const reader = new FileReader();
  reader.onload = ev => {
    if (photoPreviewEl) photoPreviewEl.src = ev.target.result;
    photoDropZoneEl?.classList.add('hidden');
    photoResultEl?.classList.remove('hidden');
    if (photoLabelsEl) photoLabelsEl.innerHTML = `<span style="color:var(--muted);font-size:.88rem">${currentLang === 'ru' ? '🔍 Анализирую изображение...' : '🔍 Analyzing image...'}</span>`;
    setTimeout(() => {
      const set = fakePhotoSets[Math.floor(Math.random() * fakePhotoSets.length)];
      if (photoLabelsEl) {
        photoLabelsEl.innerHTML = `<p style="font-size:.82rem;color:var(--muted);margin-bottom:.5rem;width:100%">${currentLang === 'ru' ? '🏷️ Обнаруженные объекты:' : '🏷️ Detected objects:'}</p>` +
          set.map((w, i) => `<div class="photo-label-tag" style="animation-delay:${i * 0.12}s"><span>${w.ky}</span><small>${currentLang === 'ru' ? w.ru : w.en}</small></div>`).join('');
      }
    }, 1400);
  };
  reader.readAsDataURL(file);
}

photoClearEl?.addEventListener('click', () => {
  photoDropZoneEl?.classList.remove('hidden');
  photoResultEl?.classList.add('hidden');
  if (photoInputEl)  photoInputEl.value = '';
  if (photoLabelsEl) photoLabelsEl.innerHTML = '';
});


/* ============================================================
   17. VOICE TRANSLATOR
   ============================================================ */
const voiceDictEN = {
  'hello':'Салам','hi':'Салам','how are you':'Саламатсызбы?','good morning':'Кутман таң',
  'thank you':'Рахмат','thanks':'Рахмат','please':'Сурансам','you are welcome':'Эч нерсе эмес',
  'yes':'Ооба','no':'Жок','good':'Жакшы','bad':'Жаман','ok':'Макул','fine':'Жакшы',
  'water':'Суу','food':'Тамак','bread':'Нан','meat':'Эт','milk':'Сүт','tea':'Чай',
  'one':'Бир','two':'Эки','three':'Үч','four':'Төрт','five':'Беш','ten':'Он',
  'mother':'Апа','father':'Ата','sister':'Эже','brother':'Байке','family':'Үй-бүлө',
  'house':'Үй','road':'Жол','sky':'Асман','tree':'Дарак','sun':'Күн','moon':'Ай',
  'red':'Кызыл','white':'Ак','black':'Кара','blue':'Көк','green':'Жашыл','yellow':'Сары',
  'i love you':'Мен сени сүйөм','goodbye':'Жакшы бол','excuse me':'Кечиресиз',
  'sorry':'Кечиресиз','welcome':'Кош келиңиз','where':'Кайда','what':'Эмне','who':'Ким',
};
const voiceDictRU = {
  'привет':'Салам','здравствуйте':'Саламатсызбы?','здравствуй':'Саламатсызбы?',
  'доброе утро':'Кутман таң','как дела':'Саламатсызбы?','хорошо':'Жакшы',
  'спасибо':'Рахмат','пожалуйста':'Сурансам','не за что':'Эч нерсе эмес',
  'да':'Ооба','нет':'Жок','плохо':'Жаман','ладно':'Макул',
  'вода':'Суу','еда':'Тамак','хлеб':'Нан','мясо':'Эт','молоко':'Сүт','чай':'Чай',
  'один':'Бир','два':'Эки','три':'Үч','четыре':'Төрт','пять':'Беш','десять':'Он',
  'мама':'Апа','папа':'Ата','сестра':'Эже','брат':'Байке','семья':'Үй-бүлө',
  'дом':'Үй','дорога':'Жол','небо':'Асман','дерево':'Дарак','солнце':'Күн','луна':'Ай',
  'красный':'Кызыл','белый':'Ак','чёрный':'Кара','синий':'Көк','зелёный':'Жашыл','жёлтый':'Сары',
  'я тебя люблю':'Мен сени сүйөм','до свидания':'Жакшы бол','извините':'Кечиресиз',
  'простите':'Кечиресиз','добро пожаловать':'Кош келиңиз','где':'Кайда','что':'Эмне','кто':'Ким',
};

function translateToKyrgyz(text) {
  const dict  = currentLang === 'ru' ? voiceDictRU : voiceDictEN;
  const lower = text.toLowerCase().trim();
  if (dict[lower]) return dict[lower];
  const words = lower.split(/\s+/).map(w => dict[w]).filter(Boolean);
  return words.length ? words.join(' ') : null;
}

const voiceMicBtnEl   = document.getElementById('voiceMicBtn');
const voiceMicLabelEl = document.getElementById('voiceMicLabel');
const voiceInputEl    = document.getElementById('voiceInput');
const voiceOutputEl   = document.getElementById('voiceOutput');
const voiceHistoryEl  = document.getElementById('voiceHistory');
let voiceListening    = false;
let voiceRecognizer   = null;

voiceMicBtnEl?.addEventListener('click', () => {
  if (voiceListening) { voiceRecognizer?.stop(); return; }
  if (!SpeechRecognition) {
    if (voiceInputEl) voiceInputEl.textContent = currentLang === 'ru' ? 'Используйте Chrome для распознавания речи.' : 'Use Chrome for speech recognition.';
    return;
  }
  voiceListening = true;
  voiceMicBtnEl.classList.add('listening');
  if (voiceMicLabelEl) voiceMicLabelEl.textContent = currentLang === 'ru' ? 'Слушаю...' : 'Listening...';
  if (voiceInputEl)  voiceInputEl.innerHTML  = `<span class="voice-placeholder">${currentLang === 'ru' ? 'Говорите сейчас...' : 'Speak now...'}</span>`;
  if (voiceOutputEl) voiceOutputEl.innerHTML = `<span class="voice-placeholder">${currentLang === 'ru' ? 'Переводим...' : 'Translating...'}</span>`;
  voiceRecognizer = new SpeechRecognition();
  voiceRecognizer.lang = currentLang === 'ru' ? 'ru-RU' : 'en-US';
  voiceRecognizer.interimResults = true;
  voiceRecognizer.onresult = ev => {
    const transcript = ev.results[0][0].transcript;
    if (voiceInputEl) voiceInputEl.textContent = transcript;
    if (ev.results[0].isFinal) {
      const tr = translateToKyrgyz(transcript);
      if (voiceOutputEl) voiceOutputEl.textContent = tr || (currentLang === 'ru' ? '🤔 Слово ещё не в словаре' : '🤔 Word not in dictionary yet');
      if (tr && voiceHistoryEl) {
        const item = document.createElement('div');
        item.className = 'voice-history-item';
        item.innerHTML = `<span>${transcript}</span><span>${tr}</span>`;
        voiceHistoryEl.prepend(item);
      }
    }
  };
  voiceRecognizer.onerror = () => resetVoice(true);
  voiceRecognizer.onend   = () => resetVoice(false);
  voiceRecognizer.start();
});

function resetVoice(clearBoxes) {
  voiceListening = false; voiceRecognizer = null;
  voiceMicBtnEl?.classList.remove('listening');
  if (voiceMicLabelEl) voiceMicLabelEl.textContent = currentLang === 'ru' ? 'Нажмите, чтобы говорить' : 'Tap to speak';
  if (clearBoxes) {
    if (voiceInputEl)  voiceInputEl.innerHTML  = `<span class="voice-placeholder">${translations[currentLang]['voice.placeholder']}</span>`;
    if (voiceOutputEl) voiceOutputEl.innerHTML = `<span class="voice-placeholder">${translations[currentLang]['voice.result']}</span>`;
  }
}
});


/* ============================================================
   12. SCROLL-TO-TOP BUTTON
   ============================================================ */

const scrollBtn = Object.assign(document.createElement('button'), {
  innerHTML:  '↑',
  ariaLabel:  'Back to top',
});
scrollBtn.style.cssText = `
  position:fixed; bottom:1.75rem; right:1.75rem;
  width:44px; height:44px; border-radius:50%;
  background:var(--primary); color:#fff;
  font-size:1.1rem; font-weight:700;
  border:none; cursor:pointer;
  box-shadow:0 4px 16px rgba(79,142,247,.4);
  opacity:0; transform:translateY(12px);
  transition:opacity .3s,transform .3s;
  z-index:99; display:flex; align-items:center; justify-content:center;
`;
document.body.appendChild(scrollBtn);
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  const show = window.scrollY > 400;
  scrollBtn.style.opacity   = show ? '1' : '0';
  scrollBtn.style.transform = show ? 'translateY(0)' : 'translateY(12px)';
}, { passive: true });


/* ============================================================
   13. INIT
   ============================================================ */

applyTranslations('en');

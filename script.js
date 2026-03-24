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

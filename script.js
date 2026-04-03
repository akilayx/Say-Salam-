'use strict';
 
// ═══════════════════════════════════════════════════════════
// I18N
// ═══════════════════════════════════════════════════════════
const I18N = {
  en: {
    'nav.home':'Home','nav.features':'Features','nav.lessons':'Lessons',
    'nav.flashcards':'Flashcards','nav.tools':'AI Tools','nav.download':'Download',
    'nav.cta':'Start Learning','nav.learn':'Learn',
    'hero.tag':'🌍 Language Learning Platform','hero.title':'Learn Kyrgyz<br><em>Easily</em>',
    'hero.subtitle':'From English or Russian — fast, interactive, and fun.',
    'hero.cta1':'Start Learning','hero.cta2':'Download App',
    'hero.stat1':'Learners','hero.stat2':'Lessons','hero.stat3':'Languages',
    'mockup.tag':'Daily Lesson','mockup.trans':'How are you?',
    'mockup.c1':'How are you?','mockup.c2':'Good morning','mockup.c3':'Thank you',
    'badge.streak':'Day Streak','badge.xp':'Earned today',
    'features.tag':'Why SaySalam','features.title':'Everything you need to learn Kyrgyz',
    'features.sub':'Proven methods, interactive tools, and a curriculum built for real results.',
    'feat1.title':'Interactive Lessons','feat1.desc':'Structured courses from zero to conversational.',
    'feat2.title':'Vocabulary Training','feat2.desc':'Spaced repetition flashcards that adapt to your learning pace.',
    'feat3.title':'Pronunciation Practice','feat3.desc':'Listen to native speakers and train your ear.',
    'feat4.title':'Gamified Quizzes','feat4.desc':'Earn XP, maintain streaks, and challenge friends.',
    'feat5.title':'Progress Tracking','feat5.desc':'Visual progress bars and weekly reports.',
    'feat6.title':'Offline Access','feat6.desc':'Download lessons and study anywhere.',
    'learn.tag':'Choose Your Path','learn.title':'Learn Kyrgyz from your language',
    'learn.sub':'Select your native language and get a personalised learning path.',
    'path.en.title':'From English','path.en.desc':'Lessons and exercises in English.',
    'path.ru.title':'From Russian','path.ru.desc':'Уроки и упражнения на русском языке.',
    'path.badge':'Most popular','path.badge2':'Also available',
    'demo.tag':'Try for Free','demo.title':'Try a Lesson — Right Now',
    'demo.sub':'No sign-up required. Pick the correct translation.',
    'quiz.prompt':'Choose the correct translation:',
    'quiz.score.title':'Lesson Complete!','quiz.restart':'Try Again',
    'tree.tag':'Learning Path','tree.title':'Your Kyrgyz Journey',
    'tree.sub':'Tap a lesson to start. Complete each level to unlock the next.',
    'tree.l1.title':'Greetings','tree.l2.title':'Numbers','tree.l3.title':'Colors',
    'tree.l4.title':'Family','tree.l5.title':'Food & Drinks',
    'fc.tag':'Flashcards','fc.title':'Master Vocabulary Fast',
    'fc.sub':'Click the card to flip. Mark cards as known or review them again.',
    'fc.hint':'Click to reveal','fc.repeat':'Repeat','fc.know':'Know it',
    'fc.known':'known','fc.review':'to review',
    'ai.tag':'AI-Powered Tools','ai.title':'Speak, See & Translate',
    'ai.sub':'Three powerful tools to supercharge your Kyrgyz practice.',
    'ai.tab1':'Voice Tutor','ai.tab2':'Photo Translator','ai.tab3':'Voice Translator',
    'tutor.instruction':'Listen to the phrase, then repeat it:',
    'tutor.listen':'Listen','tutor.prev':'Previous','tutor.next':'Next',
    'photo.upload':'Drop an image or click to upload',
    'photo.hint':'Supports JPG, PNG, WEBP','photo.btn':'Choose Photo','photo.clear':'Try another',
    'voice.placeholder':'Your speech will appear here...','voice.result':'Translation will appear here...',
    'dl.tag':'Get the App','dl.title':'Learn on any device',
    'dl.sub':'Switch seamlessly between web and mobile.',
    'dl.mobile':'📱 Mobile App','dl.web':'🌐 Web Version',
    'dl.mobile.title':'Take SaySalam everywhere','dl.mobile.desc':'Download the app and learn on the go.',
    'store.avail':'Available on the','store.apple':'App Store',
    'store.get':'Get it on','store.google':'Google Play',
    'dl.free':'Free Download','dl.s1':'Daily Streak','dl.s2':'XP This Week','dl.s3':'Lessons Done',
    'web.title':'Start in your browser','web.desc':'The full SaySalam experience is available right here.',
    'web.cta':'Open Web App',
    'footer.desc':'The friendliest way to learn Kyrgyz. For free.',
    'footer.platform':'Platform','footer.languages':'Languages',
    'footer.from_en':'Kyrgyz from English','footer.from_ru':'Kyrgyz from Russian',
    'footer.try':'Try a Lesson','footer.contact':'Contact',
  },
  ru: {
    'nav.home':'Главная','nav.features':'Возможности','nav.lessons':'Уроки',
    'nav.flashcards':'Карточки','nav.tools':'AI Инструменты','nav.download':'Скачать',
    'nav.cta':'Начать учиться','nav.learn':'Учиться',
    'hero.tag':'🌍 Платформа для изучения языков',
    'hero.title':'Учи кыргызский<br><em>Легко</em>',
    'hero.subtitle':'С английского или русского — быстро, интерактивно и весело.',
    'hero.cta1':'Начать учиться','hero.cta2':'Скачать приложение',
    'hero.stat1':'Учеников','hero.stat2':'Уроков','hero.stat3':'Языка',
    'mockup.tag':'Урок дня','mockup.trans':'Как дела?',
    'mockup.c1':'Как дела?','mockup.c2':'Доброе утро','mockup.c3':'Спасибо',
    'badge.streak':'Дней подряд','badge.xp':'Заработано сегодня',
    'features.tag':'Почему SaySalam','features.title':'Всё для изучения кыргызского',
    'features.sub':'Проверенные методы и интерактивные инструменты.',
    'feat1.title':'Интерактивные уроки','feat1.desc':'Структурированные курсы с нуля до разговорного.',
    'feat2.title':'Тренировка словаря','feat2.desc':'Карточки с интервальными повторениями.',
    'feat3.title':'Практика произношения','feat3.desc':'Слушай носителей языка и тренируй слух.',
    'feat4.title':'Игровые викторины','feat4.desc':'Зарабатывай XP и соревнуйся с друзьями.',
    'feat5.title':'Отслеживание прогресса','feat5.desc':'Визуальные графики и еженедельные отчёты.',
    'feat6.title':'Офлайн-доступ','feat6.desc':'Загружай уроки и учись где угодно.',
    'learn.tag':'Выбери путь','learn.title':'Учи кыргызский со своего языка',
    'learn.sub':'Выбери родной язык и получи персонализированный путь обучения.',
    'path.en.title':'С английского','path.en.desc':'Уроки и упражнения на английском.',
    'path.ru.title':'С русского','path.ru.desc':'Уроки и упражнения на русском.',
    'path.badge':'Популярнее всего','path.badge2':'Тоже доступно',
    'demo.tag':'Попробуй бесплатно','demo.title':'Попробуй урок прямо сейчас',
    'demo.sub':'Без регистрации. Выбери правильный перевод.',
    'quiz.prompt':'Выбери правильный перевод:',
    'quiz.score.title':'Урок завершён!','quiz.restart':'Попробовать снова',
    'tree.tag':'Путь обучения','tree.title':'Твой путь в кыргызский',
    'tree.sub':'Нажми на урок чтобы начать.',
    'tree.l1.title':'Приветствия','tree.l2.title':'Числа','tree.l3.title':'Цвета',
    'tree.l4.title':'Семья','tree.l5.title':'Еда и напитки',
    'fc.tag':'Карточки','fc.title':'Быстро запоминай слова',
    'fc.sub':'Нажми на карточку чтобы перевернуть. Отмечай знакомые слова.',
    'fc.hint':'Нажми чтобы увидеть','fc.repeat':'Повторить','fc.know':'Знаю',
    'fc.known':'известно','fc.review':'на повторение',
    'ai.tag':'AI Инструменты','ai.title':'Говори, Смотри и Переводи',
    'ai.sub':'Три мощных инструмента для практики кыргызского.',
    'ai.tab1':'Голосовой тьютор','ai.tab2':'Фото переводчик','ai.tab3':'Голосовой переводчик',
    'tutor.instruction':'Слушай фразу, затем повтори:',
    'tutor.listen':'Слушать','tutor.prev':'Назад','tutor.next':'Далее',
    'photo.upload':'Перетащи изображение или нажми для загрузки',
    'photo.hint':'Поддерживаются JPG, PNG, WEBP',
    'photo.btn':'Выбрать фото','photo.clear':'Другое фото',
    'voice.placeholder':'Ваша речь появится здесь...','voice.result':'Перевод появится здесь...',
    'dl.tag':'Получить приложение','dl.title':'Учись на любом устройстве',
    'dl.sub':'Переключайся между вебом и мобильным.',
    'dl.mobile':'📱 Мобильное приложение','dl.web':'🌐 Веб версия',
    'dl.mobile.title':'Бери SaySalam везде','dl.mobile.desc':'Скачай приложение и учись на ходу.',
    'store.avail':'Доступно в','store.apple':'App Store',
    'store.get':'Получить в','store.google':'Google Play',
    'dl.free':'Бесплатно','dl.s1':'Дней подряд','dl.s2':'XP на этой неделе','dl.s3':'Уроков пройдено',
    'web.title':'Начни в браузере','web.desc':'Полный опыт SaySalam прямо здесь.',
    'web.cta':'Открыть веб-приложение',
    'footer.desc':'Самый дружелюбный способ учить кыргызский. Бесплатно.',
    'footer.platform':'Платформа','footer.languages':'Языки',
    'footer.from_en':'Кыргызский с английского','footer.from_ru':'Кыргызский с русского',
    'footer.try':'Попробовать урок','footer.contact':'Контакты',
  }
};
 
let currentLang = 'en';
 
function applyI18n(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = I18N[lang][key];
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
    else if (key === 'hero.title') el.innerHTML = val;
    else el.textContent = val;
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}
 
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => { applyI18n(btn.dataset.lang); initQuiz(); });
});
 
// ═══════════════════════════════════════════════════════════
// BURGER
// ═══════════════════════════════════════════════════════════
function initBurger() {
  const burger = document.querySelector('.burger');
  const navList = document.getElementById('nav-list');
  const header = document.querySelector('.header');
  const navActions = document.querySelector('.nav-actions');
  if (!burger || !navList) return;

  const setState = (open) => {
    navList.classList.toggle('nav-links--open', open);
    navList.classList.toggle('open', open);
    navActions?.classList.toggle('open', open);
    header?.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  burger.addEventListener('click', () => {
    const open = !navList.classList.contains('open') && !navList.classList.contains('nav-links--open');
    setState(open);
  });
  navList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setState(false));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setState(false);
  });
}
 
// ═══════════════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════════════════════
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}
 
// ═══════════════════════════════════════════════════════════
// COUNTERS
// ═══════════════════════════════════════════════════════════
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      let cur = 0;
      const step = target / (1800 / 16);
      const tick = () => {
        cur = Math.min(cur + step, target);
        el.textContent = target >= 1000 ? Math.round(cur).toLocaleString() + '+' : Math.round(cur);
        if (cur < target) requestAnimationFrame(tick);
      };
      tick();
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count').forEach(el => obs.observe(el));
}
 
// ═══════════════════════════════════════════════════════════
// QUIZ
// ═══════════════════════════════════════════════════════════
const QUIZ_DATA = {
  en: [
    { word: 'Саламатсызбы?', options: ['How are you?','Good morning','Thank you','Goodbye'], answer: 0 },
    { word: 'Рахмат', options: ['Hello','Thank you','Please','Sorry'], answer: 1 },
    { word: 'Жакшы', options: ['Bad','Good','Fast','Slow'], answer: 1 },
    { word: 'Суу', options: ['Fire','Earth','Water','Air'], answer: 2 },
    { word: 'Мен', options: ['You','He/She','We','I'], answer: 3 },
  ],
  ru: [
    { word: 'Саламатсызбы?', options: ['Как дела?','Доброе утро','Спасибо','До свидания'], answer: 0 },
    { word: 'Рахмат', options: ['Привет','Спасибо','Пожалуйста','Извините'], answer: 1 },
    { word: 'Жакшы', options: ['Плохо','Хорошо','Быстро','Медленно'], answer: 1 },
    { word: 'Суу', options: ['Огонь','Земля','Вода','Воздух'], answer: 2 },
    { word: 'Мен', options: ['Ты','Он/Она','Мы','Я'], answer: 3 },
  ]
};
 
let quizState = { q: 0, score: 0, answered: false };
 
function initQuiz() {
  quizState = { q: 0, score: 0, answered: false };
  document.getElementById('quizScore')?.classList.add('hidden');
  document.getElementById('quizBody')?.classList.remove('hidden');
  renderQuestion();
}
 
function renderQuestion() {
  const data = QUIZ_DATA[currentLang];
  const q = data[quizState.q];
  const total = data.length;
  document.getElementById('quizProgress').style.width = (quizState.q / total * 100) + '%';
  document.getElementById('quizLabel').textContent = `${quizState.q + 1} / ${total}`;
  document.getElementById('quizWord').textContent = q.word;
  document.getElementById('quizResult').classList.add('hidden');
  const opts = document.getElementById('quizOptions');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const li = document.createElement('li');
    li.className = 'quiz-option';
    li.textContent = opt;
    li.tabIndex = 0;
    li.setAttribute('role', 'button');
    li.addEventListener('click', () => handleAnswer(i, q.answer));
    li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handleAnswer(i, q.answer); });
    opts.appendChild(li);
  });
  quizState.answered = false;
}
 
function handleAnswer(chosen, correct) {
  if (quizState.answered) return;
  quizState.answered = true;
  document.querySelectorAll('.quiz-option').forEach((opt, i) => {
    opt.style.pointerEvents = 'none';
    if (i === correct) opt.classList.add('quiz-option--correct');
    else if (i === chosen) opt.classList.add('quiz-option--wrong');
  });
  if (chosen === correct) quizState.score++;
  const resultEl = document.getElementById('quizResult');
  resultEl.classList.remove('hidden');
  document.getElementById('quizResultIcon').textContent = chosen === correct ? '✅' : '❌';
  const correctText = QUIZ_DATA[currentLang][quizState.q].options[correct];
  document.getElementById('quizResultText').textContent = chosen === correct
    ? (currentLang === 'en' ? 'Correct! Well done.' : 'Правильно! Отлично.')
    : (currentLang === 'en' ? `Wrong. Correct: "${correctText}"` : `Неверно. Правильно: "${correctText}"`);
  setTimeout(() => {
    quizState.q++;
    if (quizState.q >= QUIZ_DATA[currentLang].length) showQuizScore();
    else renderQuestion();
  }, 1400);
}
 
function showQuizScore() {
  document.getElementById('quizBody').classList.add('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  const score = quizState.score, total = QUIZ_DATA[currentLang].length;
  document.getElementById('scoreEmoji').textContent = score === total ? '🏆' : score >= 3 ? '⭐' : '💪';
  document.getElementById('scoreText').textContent = currentLang === 'en'
    ? `You got ${score} out of ${total} correct!` : `Правильных: ${score} из ${total}!`;
  document.getElementById('scoreXP').textContent = score * 20;
  document.getElementById('quizScore').classList.remove('hidden');
  document.getElementById('quizProgress').style.width = '100%';
  document.getElementById('quizLabel').textContent = `${total} / ${total}`;
}
document.getElementById('quizRestart')?.addEventListener('click', initQuiz);
 
// ═══════════════════════════════════════════════════════════
// LESSON TREE
// ═══════════════════════════════════════════════════════════
const LESSON_CONTENT = {
  1: {
    en: { title: 'Greetings', items: [
      {kg:'Салам',tr:'Hello (informal)'},{kg:'Саламатсызбы?',tr:'How are you? (formal)'},
      {kg:'Кандайсыз?',tr:'How are you?'},{kg:'Жакшымын, рахмат',tr:"I'm fine, thank you"},
      {kg:'Кош болуңуз',tr:'Goodbye (formal)'},{kg:'Жакшы бол',tr:'Goodbye (informal)'},
    ]},
    ru: { title: 'Приветствия', items: [
      {kg:'Салам',tr:'Привет (неформально)'},{kg:'Саламатсызбы?',tr:'Как дела? (формально)'},
      {kg:'Кандайсыз?',tr:'Как вы?'},{kg:'Жакшымын, рахмат',tr:'Я в порядке, спасибо'},
      {kg:'Кош болуңуз',tr:'До свидания (формально)'},{kg:'Жакшы бол',tr:'Пока (неформально)'},
    ]}
  },
  2: {
    en: { title: 'Numbers', items: [
      {kg:'Бир',tr:'One (1)'},{kg:'Эки',tr:'Two (2)'},{kg:'Үч',tr:'Three (3)'},
      {kg:'Төрт',tr:'Four (4)'},{kg:'Беш',tr:'Five (5)'},{kg:'Алты',tr:'Six (6)'},
      {kg:'Жети',tr:'Seven (7)'},{kg:'Сегиз',tr:'Eight (8)'},{kg:'Тогуз',tr:'Nine (9)'},{kg:'Он',tr:'Ten (10)'},
    ]},
    ru: { title: 'Числа', items: [
      {kg:'Бир',tr:'Один (1)'},{kg:'Эки',tr:'Два (2)'},{kg:'Үч',tr:'Три (3)'},
      {kg:'Төрт',tr:'Четыре (4)'},{kg:'Беш',tr:'Пять (5)'},{kg:'Алты',tr:'Шесть (6)'},
      {kg:'Жети',tr:'Семь (7)'},{kg:'Сегиз',tr:'Восемь (8)'},{kg:'Тогуз',tr:'Девять (9)'},{kg:'Он',tr:'Десять (10)'},
    ]}
  }
};
 
function initLessonTree() {
  document.querySelectorAll('.tree-node:not(.tree-node--locked)').forEach(node => {
    node.addEventListener('click', () => openLesson(+node.dataset.level));
    node.addEventListener('keydown', e => { if (e.key === 'Enter') openLesson(+node.dataset.level); });
  });
  document.getElementById('lessonClose')?.addEventListener('click', () => {
    document.getElementById('lessonPanel').classList.add('hidden');
  });
}
 
function openLesson(level) {
  const panel = document.getElementById('lessonPanel');
  const content = LESSON_CONTENT[level];
  if (!content) return;
  const lang = currentLang === 'ru' ? 'ru' : 'en';
  const data = content[lang];
  document.getElementById('lessonTitle').textContent = data.title;
  document.getElementById('lessonBody').innerHTML = data.items.map((item, i) => `
    <div class="lesson-item" style="animation-delay:${i*50}ms">
      <span class="lesson-item__kg">${item.kg}</span>
      <span class="lesson-item__tr">${item.tr}</span>
      <button class="lesson-item__play" onclick="speakKyrgyz('${item.kg.replace(/'/g,"\\'")}')">🔊</button>
    </div>
  `).join('');
  panel.classList.remove('hidden');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
 
// ═══════════════════════════════════════════════════════════
// FLASHCARDS — improved with categories
// ═══════════════════════════════════════════════════════════
const FLASHCARDS = [
  {emoji:'👋',kg:'Салам',en:'Hello',ru:'Привет',ex_en:'Салам! Кандайсыз? — Hello! How are you?',ex_ru:'Салам! Кандайсыз? — Привет! Как дела?'},
  {emoji:'🙏',kg:'Рахмат',en:'Thank you',ru:'Спасибо',ex_en:'Чоң рахмат! — Thank you very much!',ex_ru:'Чоң рахмат! — Большое спасибо!'},
  {emoji:'🌊',kg:'Суу',en:'Water',ru:'Вода',ex_en:'Суу ичейин — I will drink water',ex_ru:'Суу ичейин — Я выпью воды'},
  {emoji:'🏠',kg:'Үй',en:'House / Home',ru:'Дом',ex_en:'Менин үйүм — My home',ex_ru:'Менин үйүм — Мой дом'},
  {emoji:'🍎',kg:'Алма',en:'Apple',ru:'Яблоко',ex_en:'Кызыл алма — Red apple',ex_ru:'Кызыл алма — Красное яблоко'},
  {emoji:'☀️',kg:'Күн',en:'Sun / Day',ru:'Солнце / День',ex_en:'Жакшы күн! — Good day!',ex_ru:'Жакшы күн! — Хороший день!'},
  {emoji:'🌙',kg:'Ай',en:'Moon / Month',ru:'Луна / Месяц',ex_en:'Толгон ай — Full moon',ex_ru:'Толгон ай — Полная луна'},
  {emoji:'❤️',kg:'Жүрөк',en:'Heart',ru:'Сердце',ex_en:'Жүрөк согот — Heart beats',ex_ru:'Жүрөк согот — Сердце бьётся'},
  {emoji:'📚',kg:'Китеп',en:'Book',ru:'Книга',ex_en:'Китеп окуйм — I read a book',ex_ru:'Китеп окуйм — Я читаю книгу'},
  {emoji:'🐴',kg:'Жылкы',en:'Horse',ru:'Лошадь',ex_en:'Кыргыз жылкысы — Kyrgyz horse',ex_ru:'Кыргыз жылкысы — Кыргызская лошадь'},
  {emoji:'🏔️',kg:'Тоо',en:'Mountain',ru:'Гора',ex_en:'Бийик тоо — High mountain',ex_ru:'Бийик тоо — Высокая гора'},
  {emoji:'👁️',kg:'Көз',en:'Eye',ru:'Глаз',ex_en:'Кара көз — Dark eyes',ex_ru:'Кара көз — Тёмные глаза'},
];
 
let fcIndex = 0, fcKnown = new Set(), fcFlipped = false;
let fcCategory = 'all', fcFiltered = [...FLASHCARDS];
 
function initFlashcards() {
  injectFCFilterBar();
  renderFC();
  document.getElementById('flashcard')?.addEventListener('click', flipCard);
  document.getElementById('flashcard')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') flipCard();
    if (e.key === 'ArrowRight') fcNextCard();
    if (e.key === 'ArrowLeft') fcPrevCard();
  });
  document.getElementById('fcNext')?.addEventListener('click', fcNextCard);
  document.getElementById('fcPrev')?.addEventListener('click', fcPrevCard);
  document.getElementById('fcKnow')?.addEventListener('click', markKnown);
  document.getElementById('fcRepeat')?.addEventListener('click', markRepeat);
}
 
function injectFCFilterBar() {
  if (document.getElementById('fc-filter-bar')) return;
  const wrap = document.querySelector('.flashcard-wrap');
  if (!wrap) return;
  const bar = document.createElement('div');
  bar.id = 'fc-filter-bar';
  bar.className = 'fc-filter-bar';
  bar.innerHTML = `
    <button class="fc-filter-btn active" data-fc-filter="all">Все / All <span id="fc-count-all">${FLASHCARDS.length}</span></button>
    <button class="fc-filter-btn" data-fc-filter="review">🟡 Review <span id="fc-count-review">${FLASHCARDS.length}</span></button>
    <button class="fc-filter-btn" data-fc-filter="known">🟢 Known <span id="fc-count-known">0</span></button>
  `;
  wrap.insertBefore(bar, wrap.firstChild);
  bar.querySelectorAll('.fc-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      fcCategory = btn.dataset.fcFilter;
      bar.querySelectorAll('.fc-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      fcFiltered = getFilteredCards();
      fcIndex = 0;
      renderFC();
    });
  });
}
 
function getFilteredCards() {
  if (fcCategory === 'known') return FLASHCARDS.filter((_, i) => fcKnown.has(i));
  if (fcCategory === 'review') return FLASHCARDS.filter((_, i) => !fcKnown.has(i));
  return [...FLASHCARDS];
}
 
function renderFC() {
  if (!fcFiltered.length) {
    document.getElementById('fcWord').textContent = currentLang === 'ru' ? 'Нет карточек' : 'No cards here';
    document.getElementById('fcEmoji').textContent = '🎉';
    document.getElementById('fcCounter').textContent = '0 / 0';
    return;
  }
  const fc = fcFiltered[fcIndex];
  const origIdx = FLASHCARDS.indexOf(fc);
  fcFlipped = false;
  document.getElementById('flashcard')?.classList.remove('flipped');
  document.getElementById('fcWord').textContent = fc.kg;
  document.getElementById('fcEmoji').textContent = fc.emoji;
  document.getElementById('fcTranslation').textContent = currentLang === 'ru' ? fc.ru : fc.en;
  document.getElementById('fcExample').textContent = currentLang === 'ru' ? fc.ex_ru : fc.ex_en;
  document.getElementById('fcCounter').textContent = `${fcIndex + 1} / ${fcFiltered.length}`;
  const knowBtn = document.getElementById('fcKnow');
  const repeatBtn = document.getElementById('fcRepeat');
  knowBtn?.classList.toggle('fc-active-know', fcKnown.has(origIdx));
  repeatBtn?.classList.toggle('fc-active-repeat', !fcKnown.has(origIdx));
  updateFCStats();
}
 
function flipCard() {
  fcFlipped = !fcFlipped;
  document.getElementById('flashcard')?.classList.toggle('flipped', fcFlipped);
}
 
function fcNextCard() {
  fcIndex = (fcIndex + 1) % Math.max(fcFiltered.length, 1);
  renderFC();
}
function fcPrevCard() {
  fcIndex = (fcIndex - 1 + Math.max(fcFiltered.length, 1)) % Math.max(fcFiltered.length, 1);
  renderFC();
}
 
function markKnown() {
  const fc = fcFiltered[fcIndex];
  fcKnown.add(FLASHCARDS.indexOf(fc));
  fcFiltered = getFilteredCards();
  if (fcIndex >= fcFiltered.length) fcIndex = Math.max(0, fcFiltered.length - 1);
  const btn = document.getElementById('fcKnow');
  if (btn) { btn.textContent = '✓✓ Great!'; setTimeout(() => { btn.innerHTML = `✓ <span>${currentLang==='ru'?'Знаю':'Know it'}</span>`; }, 800); }
  renderFC();
}
function markRepeat() {
  const fc = fcFiltered[fcIndex];
  fcKnown.delete(FLASHCARDS.indexOf(fc));
  fcFiltered = getFilteredCards();
  renderFC();
}
 
function updateFCStats() {
  const k = fcKnown.size, r = FLASHCARDS.length - k;
  document.getElementById('fcKnownCount').textContent = k;
  document.getElementById('fcReviewCount').textContent = r;
  if (document.getElementById('fc-count-all')) document.getElementById('fc-count-all').textContent = FLASHCARDS.length;
  if (document.getElementById('fc-count-known')) document.getElementById('fc-count-known').textContent = k;
  if (document.getElementById('fc-count-review')) document.getElementById('fc-count-review').textContent = r;
}
 
// ═══════════════════════════════════════════════════════════
// AI TABS
// ═══════════════════════════════════════════════════════════
function initAITabs() {
  document.querySelectorAll('.ai-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ai-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active'); tab.setAttribute('aria-selected','true');
      document.querySelectorAll('.ai-panel').forEach(p => p.classList.add('hidden'));
      const id = 'panel' + tab.dataset.tab[0].toUpperCase() + tab.dataset.tab.slice(1);
      document.getElementById(id)?.classList.remove('hidden');
    });
  });
}
 
// ═══════════════════════════════════════════════════════════
// SPEECH SYNTHESIS
// ═══════════════════════════════════════════════════════════
function speakKyrgyz(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'ky-KG'; utt.rate = 0.85;
  window.speechSynthesis.speak(utt);
}
 
// ═══════════════════════════════════════════════════════════
// VOICE TUTOR
// ═══════════════════════════════════════════════════════════
const TUTOR_PHRASES = [
  {kg:'Саламатсызбы?',en:'How are you?',ru:'Как дела?'},
  {kg:'Менин атым...',en:'My name is...',ru:'Меня зовут...'},
  {kg:'Жакшымын, рахмат',en:"I'm fine, thank you",ru:'Я в порядке, спасибо'},
  {kg:'Кечиресиз',en:'Excuse me / Sorry',ru:'Извините / Простите'},
  {kg:'Ооба / Жок',en:'Yes / No',ru:'Да / Нет'},
];
let tutorIdx = 0;
 
function initVoiceTutor() {
  renderTutorPhrase();
  document.getElementById('tutorListen')?.addEventListener('click', () => speakKyrgyz(TUTOR_PHRASES[tutorIdx].kg));
  document.getElementById('tutorNext')?.addEventListener('click', () => { tutorIdx = (tutorIdx+1)%TUTOR_PHRASES.length; renderTutorPhrase(); });
  document.getElementById('tutorPrev')?.addEventListener('click', () => { tutorIdx = (tutorIdx-1+TUTOR_PHRASES.length)%TUTOR_PHRASES.length; renderTutorPhrase(); });
  initTutorRecord();
}
 
function renderTutorPhrase() {
  const p = TUTOR_PHRASES[tutorIdx];
  document.getElementById('tutorPhrase').textContent = p.kg;
  document.getElementById('tutorTrans').textContent = currentLang === 'ru' ? p.ru : p.en;
  document.getElementById('tutorFeedback')?.classList.add('hidden');
}
 
function initTutorRecord() {
  const btn = document.getElementById('tutorRecord');
  const label = document.getElementById('tutorRecordLabel');
  const feedback = document.getElementById('tutorFeedback');
  if (!btn) return;
  let recording = false, recognition = null;
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SR();
    recognition.lang = 'ky-KG';
    recognition.onresult = (e) => {
      const heard = e.results[0][0].transcript;
      const target = TUTOR_PHRASES[tutorIdx].kg;
      const match = heard.toLowerCase().includes(target.toLowerCase().slice(0,4));
      feedback.classList.remove('hidden');
      feedback.innerHTML = match
        ? `<span style="color:#22c55e">✅ ${currentLang==='ru'?'Отлично!':'Great!'}</span>`
        : `<span style="color:#f59e0b">💬 "${heard}"<br><small>${currentLang==='ru'?'Попробуй ещё':'Keep trying!'}</small></span>`;
      btn.classList.remove('recording'); label.textContent = currentLang==='ru'?'Нажми чтобы говорить':'Tap to Speak'; recording = false;
    };
    recognition.onerror = () => { label.textContent = currentLang==='ru'?'Ошибка микрофона':'Mic error'; btn.classList.remove('recording'); recording = false; };
  }
  btn.addEventListener('click', () => {
    if (!recognition) { label.textContent = currentLang==='ru'?'Не поддерживается':'Not supported'; return; }
    if (!recording) { recognition.start(); recording=true; btn.classList.add('recording'); label.textContent=currentLang==='ru'?'Слушаю...':'Listening...'; }
    else { recognition.stop(); recording=false; btn.classList.remove('recording'); label.textContent=currentLang==='ru'?'Нажми чтобы говорить':'Tap to Speak'; }
  });
}
 
// ═══════════════════════════════════════════════════════════
// PHOTO TRANSLATOR
// ═══════════════════════════════════════════════════════════
const PHOTO_LABELS = [
  {emoji:'🏠',kg:'Үй',en:'House',ru:'Дом'},{emoji:'🌳',kg:'Дарак',en:'Tree',ru:'Дерево'},
  {emoji:'🚗',kg:'Машина',en:'Car',ru:'Машина'},{emoji:'☁️',kg:'Булут',en:'Cloud',ru:'Облако'},
  {emoji:'🐕',kg:'Ит',en:'Dog',ru:'Собака'},{emoji:'🐈',kg:'Мышык',en:'Cat',ru:'Кошка'},
  {emoji:'📱',kg:'Телефон',en:'Phone',ru:'Телефон'},{emoji:'🍞',kg:'Нан',en:'Bread',ru:'Хлеб'},
];
 
function initPhotoTranslator() {
  const dropZone = document.getElementById('photoDropZone');
  const input = document.getElementById('photoInput');
  const result = document.getElementById('photoResult');
  const preview = document.getElementById('photoPreview');
  const labels = document.getElementById('photoLabels');
  const clear = document.getElementById('photoClear');
  if (!dropZone) return;
 
  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    preview.src = URL.createObjectURL(file);
    dropZone.style.display = 'none'; result.classList.remove('hidden');
    labels.innerHTML = '<p style="opacity:.6;font-size:14px;margin-bottom:12px">🔍 Analyzing...</p>';
    setTimeout(() => {
      const picked = [...PHOTO_LABELS].sort(() => Math.random()-.5).slice(0,3);
      labels.innerHTML = picked.map(l => `
        <div class="photo-label-item">
          <span class="photo-label-emoji">${l.emoji}</span>
          <span class="photo-label-kg">${l.kg}</span>
          <span class="photo-label-tr">${currentLang==='ru'?l.ru:l.en}</span>
          <button class="photo-label-play" onclick="speakKyrgyz('${l.kg}')">🔊</button>
        </div>`).join('');
    }, 1200);
  };
 
  input.addEventListener('change', () => handleFile(input.files[0]));
  dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop', e => { e.preventDefault(); dropZone.classList.remove('drag-over'); handleFile(e.dataTransfer.files[0]); });
  clear?.addEventListener('click', () => { result.classList.add('hidden'); dropZone.style.display=''; input.value=''; });
}
 
// ═══════════════════════════════════════════════════════════
// VOICE TRANSLATOR — full dictionary-based translation
// ═══════════════════════════════════════════════════════════
 
// English → Kyrgyz: phrases first, then single words
const DICT_EN = {
  // Full phrases (checked first)
  'how are you': 'Кандайсыз?',
  'how are you doing': 'Кандайсыз?',
  'good morning': 'Куттуктайм таңыңыз',
  'good afternoon': 'Куттуктайм күнүңүз',
  'good evening': 'Куттуктайм кечиңиз',
  'good night': 'Жакшы жаткыла',
  'thank you very much': 'Чоң рахмат',
  'thank you': 'Рахмат',
  'excuse me': 'Кечиресиз',
  'i am fine': 'Мен жакшымын',
  "i'm fine": 'Мен жакшымын',
  'i am good': 'Мен жакшымын',
  "i'm good": 'Мен жакшымын',
  'what is your name': 'Атыңыз ким?',
  'my name is': 'Менин атым',
  'nice to meet you': 'Таанышканыма кубандым',
  'see you later': 'Кийинчерээк көрүшөбүз',
  'see you': 'Кийинчерээк',
  'where is': 'Кайда',
  'where are': 'Кайда',
  'where is the cave': 'Үңкүр кайда?',
  'where is the city': 'Шаар кайда?',
  'where is the market': 'Базар кайда?',
  'i want to know': 'Мен билгим келет',
  'i wanna know': 'Мен билгим келет',
  'i want': 'Мен каалайм',
  'i wanna': 'Мен каалайм',
  'i need': 'Мага керек',
  'how much': 'Канча турат?',
  'how many': 'Канча?',
  'do you speak kyrgyz': 'Сиз кыргызча сүйлөйсүзбү?',
  'i speak kyrgyz': 'Мен кыргызча сүйлөйм',
  'i don\'t understand': 'Мен түшүнбөдүм',
  'i do not understand': 'Мен түшүнбөдүм',
  'can you help me': 'Мага жардам берсеңиз болобу?',
  'where is the bathroom': 'Дааратхана кайда?',
  'what time is it': 'Саат нечеде?',
  'i love you': 'Мен сени жакшы көрөм',
  'hello everyone': 'Баарыңарга салам',
  // Words
  'hello': 'Салам', 'hi': 'Салам', 'hey': 'Эй',
  'goodbye': 'Кош болуңуз', 'bye': 'Жакшы бол', 'farewell': 'Кош болуңуз',
  'thanks': 'Рахмат', 'thank': 'Рахмат',
  'please': 'Сураныч', 'sorry': 'Кечиресиз',
  'yes': 'Ооба', 'no': 'Жок', 'ok': 'Макул', 'okay': 'Макул',
  'maybe': 'Балким',
  // Question words
  'where': 'Кайда', 'when': 'Качан', 'what': 'Эмне', 'who': 'Ким',
  'why': 'Эмне үчүн', 'how': 'Кандай', 'which': 'Кайсы',
  // Pronouns
  'i': 'Мен', 'you': 'Сен/Сиз', 'he': 'Ал', 'she': 'Ал', 'we': 'Биз',
  'they': 'Алар', 'me': 'Мени', 'my': 'Менин', 'your': 'Сенин',
  // Verbs
  'want': 'каалайм', 'wanna': 'каалайм', 'know': 'билем',
  'go': 'барам', 'come': 'келем', 'see': 'көрөм', 'eat': 'жейм',
  'drink': 'ичем', 'sleep': 'уктайм', 'speak': 'сүйлөйм',
  'listen': 'угам', 'read': 'окуйм', 'write': 'жазам',
  'help': 'жардам берем', 'love': 'жакшы көрөм', 'like': 'жактырам',
  'have': 'бар', 'need': 'керек', 'find': 'таап алам',
  'think': 'ойлойм', 'understand': 'түшүнөм', 'live': 'жашайм',
  // Places
  'cave': 'үңкүр', 'house': 'үй', 'home': 'үй', 'school': 'мектеп',
  'city': 'шаар', 'town': 'шаар', 'village': 'айыл', 'country': 'өлкө',
  'street': 'көчө', 'road': 'жол', 'market': 'базар', 'shop': 'дүкөн',
  'hospital': 'оорукана', 'hotel': 'мейманкана', 'airport': 'аэропорт',
  'station': 'бекет', 'park': 'парк', 'mountain': 'тоо',
  'river': 'дарыя', 'lake': 'көл', 'sea': 'деңиз',
  'forest': 'токой', 'field': 'талаа', 'desert': 'чөл',
  // Food
  'water': 'суу', 'food': 'тамак', 'bread': 'нан', 'milk': 'сүт',
  'tea': 'чай', 'coffee': 'кофе', 'meat': 'эт', 'rice': 'күрүч',
  'apple': 'алма', 'fruit': 'жемиш', 'vegetable': 'жашылча',
  // Objects
  'phone': 'телефон', 'book': 'китеп', 'car': 'машина', 'money': 'акча',
  'bag': 'сумка', 'key': 'ачкыч', 'door': 'эшик', 'window': 'терезе',
  'table': 'стол', 'chair': 'отургуч', 'bed': 'керебет',
  // Nature
  'sun': 'күн', 'moon': 'ай', 'star': 'жылдыз', 'sky': 'асман',
  'earth': 'жер', 'fire': 'от', 'wind': 'шамал', 'rain': 'жамгыр',
  'snow': 'кар', 'cloud': 'булут', 'flower': 'гүл', 'tree': 'дарак',
  // People
  'mother': 'апа', 'father': 'ата', 'sister': 'эже/сиңди',
  'brother': 'ага/ини', 'friend': 'дос', 'man': 'эркек',
  'woman': 'аял', 'child': 'бала', 'boy': 'бала', 'girl': 'кыз',
  // Colors
  'red': 'кызыл', 'blue': 'көк', 'green': 'жашыл', 'yellow': 'сары',
  'black': 'кара', 'white': 'ак', 'orange': 'кызгылт сары',
  // Numbers
  'one': 'бир', 'two': 'эки', 'three': 'үч', 'four': 'төрт', 'five': 'беш',
  'six': 'алты', 'seven': 'жети', 'eight': 'сегиз', 'nine': 'тогуз', 'ten': 'он',
  'hundred': 'жүз', 'thousand': 'миң',
  // Adjectives
  'good': 'жакшы', 'bad': 'жаман', 'big': 'чоң', 'small': 'кичине',
  'new': 'жаңы', 'old': 'эски', 'fast': 'тез', 'slow': 'жай',
  'beautiful': 'сулуу', 'hot': 'ысык', 'cold': 'суук', 'happy': 'бактылуу',
  'sad': 'кайгылуу', 'tired': 'чарчаган', 'hungry': 'ач', 'thirsty': 'суусаган',
  'important': 'маанилүү', 'interesting': 'кызыктуу', 'difficult': 'кыйын',
  'easy': 'жеңил', 'right': 'туура', 'wrong': 'туура эмес',
  // Time
  'today': 'бүгүн', 'tomorrow': 'эртең', 'yesterday': 'кечээ',
  'now': 'азыр', 'later': 'кийинчерээк', 'morning': 'эртең менен',
  'evening': 'кечинде', 'night': 'түн', 'day': 'күн',
  'week': 'жума', 'month': 'ай', 'year': 'жыл',
  // Skip words
  'the': '', 'a': '', 'an': '', 'to': '', 'of': '', 'in': '', 'at': '',
  'is': '', 'are': '', 'was': '', 'were': '', 'be': '', 'been': '',
  'and': 'жана', 'or': 'же', 'but': 'бирок', 'so': 'ошондуктан',
  'not': 'эмес', "don't": 'эмес', "doesn't": 'эмес', "can't": 'болбойт',
  'it': 'ал', 'this': 'бул', 'that': 'ал',
};
 
// Russian → Kyrgyz
const DICT_RU = {
  // Phrases
  'как дела': 'Кандайсыз?',
  'как вы': 'Кандайсыз?',
  'как ты': 'Кандайсың?',
  'доброе утро': 'Куттуктайм таңыңыз',
  'добрый день': 'Куттуктайм күнүңүз',
  'добрый вечер': 'Куттуктайм кечиңиз',
  'спокойной ночи': 'Жакшы жаткыла',
  'большое спасибо': 'Чоң рахмат',
  'я в порядке': 'Мен жакшымын',
  'меня зовут': 'Менин атым',
  'как вас зовут': 'Атыңыз ким?',
  'как тебя зовут': 'Атың ким?',
  'приятно познакомиться': 'Таанышканыма кубандым',
  'до свидания': 'Кош болуңуз',
  'до встречи': 'Кийинчерээк көрүшөбүз',
  'где находится': 'Кайда жайгашкан?',
  'пещера где': 'Үңкүр кайда?',
  'где пещера': 'Үңкүр кайда?',
  'где город': 'Шаар кайда?',
  'хочу знать': 'Мен билгим келет',
  'хочу узнать': 'Мен билгим келет',
  'сколько стоит': 'Канча турат?',
  'не понимаю': 'Мен түшүнбөдүм',
  'я не понимаю': 'Мен түшүнбөдүм',
  'помогите пожалуйста': 'Жардам берсеңиз болобу?',
  'я тебя люблю': 'Мен сени жакшы көрөм',
  'я вас люблю': 'Мен сизди жакшы көрөм',
  // Words
  'привет': 'Салам', 'здравствуй': 'Саламатсызбы', 'здравствуйте': 'Саламатсызбы',
  'пока': 'Жакшы бол', 'прощай': 'Кош болуңуз',
  'спасибо': 'Рахмат', 'пожалуйста': 'Сураныч', 'извини': 'Кечиресиз',
  'извините': 'Кечиресиз', 'прости': 'Кечиресиз',
  'да': 'Ооба', 'нет': 'Жок', 'ок': 'Макул', 'хорошо': 'Жакшы',
  'может быть': 'Балким',
  // Question words
  'где': 'Кайда', 'когда': 'Качан', 'что': 'Эмне', 'кто': 'Ким',
  'зачем': 'Эмне үчүн', 'почему': 'Эмне үчүн', 'как': 'Кандай',
  'сколько': 'Канча', 'какой': 'Кайсы', 'какая': 'Кайсы',
  // Pronouns
  'я': 'Мен', 'ты': 'Сен', 'он': 'Ал', 'она': 'Ал', 'мы': 'Биз',
  'они': 'Алар', 'мне': 'Мага', 'моя': 'Менин', 'мой': 'Менин',
  // Verbs
  'хочу': 'каалайм', 'хочется': 'каалайм', 'знаю': 'билем',
  'иду': 'барам', 'иди': 'бар', 'прихожу': 'келем',
  'вижу': 'көрөм', 'ем': 'жейм', 'пью': 'ичем',
  'сплю': 'уктайм', 'говорю': 'сүйлөйм', 'слушаю': 'угам',
  'читаю': 'окуйм', 'пишу': 'жазам', 'помогу': 'жардам берем',
  'люблю': 'жакшы көрөм', 'нравится': 'жактырам',
  'есть': 'бар', 'нужно': 'керек', 'понимаю': 'түшүнөм',
  'живу': 'жашайм', 'думаю': 'ойлойм',
  // Places
  'пещера': 'үңкүр', 'пещеру': 'үңкүрдү', 'дом': 'үй', 'школа': 'мектеп',
  'город': 'шаар', 'деревня': 'айыл', 'страна': 'өлкө',
  'улица': 'көчө', 'дорога': 'жол', 'рынок': 'базар', 'магазин': 'дүкөн',
  'больница': 'оорукана', 'гостиница': 'мейманкана', 'аэропорт': 'аэропорт',
  'вокзал': 'бекет', 'парк': 'парк', 'гора': 'тоо',
  'река': 'дарыя', 'озеро': 'көл', 'море': 'деңиз',
  'лес': 'токой', 'поле': 'талаа', 'пустыня': 'чөл',
  // Food
  'вода': 'Суу', 'еда': 'тамак', 'хлеб': 'нан', 'молоко': 'сүт',
  'чай': 'чай', 'кофе': 'кофе', 'мясо': 'эт', 'рис': 'күрүч',
  'яблоко': 'алма', 'фрукт': 'жемиш', 'овощ': 'жашылча',
  // Objects
  'телефон': 'телефон', 'книга': 'китеп', 'машина': 'машина', 'деньги': 'акча',
  'сумка': 'сумка', 'ключ': 'ачкыч', 'дверь': 'эшик', 'окно': 'терезе',
  'стол': 'стол', 'стул': 'отургуч', 'кровать': 'керебет',
  // Nature
  'солнце': 'күн', 'луна': 'ай', 'звезда': 'жылдыз', 'небо': 'асман',
  'земля': 'жер', 'огонь': 'от', 'ветер': 'шамал', 'дождь': 'жамгыр',
  'снег': 'кар', 'облако': 'булут', 'цветок': 'гүл', 'дерево': 'дарак',
  // People
  'мама': 'апа', 'папа': 'ата', 'сестра': 'эже/сиңди',
  'брат': 'ага/ини', 'друг': 'дос', 'мужчина': 'эркек',
  'женщина': 'аял', 'ребёнок': 'бала', 'мальчик': 'бала', 'девочка': 'кыз',
  // Colors
  'красный': 'кызыл', 'синий': 'көк', 'зелёный': 'жашыл', 'жёлтый': 'сары',
  'чёрный': 'кара', 'белый': 'ак',
  // Numbers
  'один': 'бир', 'два': 'эки', 'три': 'үч', 'четыре': 'төрт', 'пять': 'беш',
  'шесть': 'алты', 'семь': 'жети', 'восемь': 'сегиз', 'девять': 'тогуз', 'десять': 'он',
  // Adjectives
  'плохой': 'жаман', 'большой': 'чоң', 'маленький': 'кичине',
  'новый': 'жаңы', 'старый': 'эски', 'быстрый': 'тез', 'медленный': 'жай',
  'красивый': 'сулуу', 'горячий': 'ысык', 'холодный': 'суук', 'счастливый': 'бактылуу',
  'грустный': 'кайгылуу', 'уставший': 'чарчаган', 'голодный': 'ач',
  // Time
  'сегодня': 'бүгүн', 'завтра': 'эртең', 'вчера': 'кечээ',
  'сейчас': 'азыр', 'потом': 'кийинчерээк', 'утром': 'эртең менен',
  'вечером': 'кечинде', 'ночью': 'түндө', 'неделя': 'жума',
  'месяц': 'ай', 'год': 'жыл',
  // Skip
  'и': '', 'в': '', 'на': '', 'к': '', 'с': '', 'из': '', 'от': '', 'по': '',
  'не': 'эмес', 'это': 'бул', 'тот': 'ал', 'та': 'ал', 'что': 'эмне',
};
 
function translateToKyrgyz(text) {
  const isRu = /[а-яёА-ЯЁ]/.test(text);
  const dict = isRu ? DICT_RU : DICT_EN;
  let input = text.toLowerCase().trim().replace(/[!?.]+$/, '');
 
  // 1. Full phrase match
  if (dict[input]) return dict[input];
 
  // 2. Multi-word phrase match (longest first)
  const multiPhrases = Object.keys(dict).filter(k => k.includes(' ')).sort((a,b) => b.length - a.length);
  let working = input;
  for (const phrase of multiPhrases) {
    if (working.includes(phrase)) {
      working = working.replace(phrase, ' __REPL_' + Object.keys(dict).indexOf(phrase) + '__ ');
    }
  }
 
  // 3. Expand replacements back
  working = working.replace(/__REPL_(\d+)__/g, (_, idx) => {
    const key = Object.keys(dict)[+idx];
    return dict[key] || key;
  });
 
  // 4. Word-by-word
  const words = working.split(/\s+/);
  const parts = words.map(word => {
    const clean = word.replace(/[.,!?;:'"]/g, '').toLowerCase();
    if (!clean) return null;
    const tr = dict[clean];
    if (tr === '') return null;
    if (tr) return tr;
    return word;
  }).filter(Boolean);
 
  if (!parts.length) return text;
  const result = parts.join(' ');
  return result.charAt(0).toUpperCase() + result.slice(1);
}
 
// ── Voice Translator UI
const voiceHistoryArr = [];
 
function initVoiceTranslator() {
  const micBtn = document.getElementById('voiceMicBtn');
  const micLabel = document.getElementById('voiceMicLabel');
  const inputEl = document.getElementById('voiceInput');
  const outputEl = document.getElementById('voiceOutput');
  const historyEl = document.getElementById('voiceHistory');
  if (!micBtn) return;
 
  let recognition = null, isListening = false;
 
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SR();
    recognition.continuous = false;
    recognition.interimResults = true;
 
    recognition.onstart = () => {
      micBtn.classList.add('mic-active');
      micLabel.textContent = currentLang === 'ru' ? '🔴 Слушаю...' : '🔴 Listening...';
    };
 
    recognition.onresult = (e) => {
      let interimText = '', finalText = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalText += t;
        else interimText += t;
      }
      const display = finalText || interimText;
      inputEl.innerHTML = `<span class="voice-text">${escHtml(display)}</span>`;
      const partial = translateToKyrgyz(display);
      outputEl.innerHTML = `<span class="voice-text voice-text--kg${!finalText ? ' voice-text--interim' : ''}">${escHtml(partial)}</span>`;
      if (finalText) {
        voiceHistoryArr.unshift({ original: finalText, translated: partial });
        renderVoiceHistory(historyEl);
        setTimeout(() => speakKyrgyz(partial), 400);
      }
    };
 
    recognition.onend = () => {
      micBtn.classList.remove('mic-active');
      isListening = false;
      micLabel.textContent = currentLang === 'ru' ? 'Нажми чтобы говорить' : 'Tap to speak';
    };
 
    recognition.onerror = (e) => {
      micBtn.classList.remove('mic-active');
      isListening = false;
      const msg = e.error === 'not-allowed'
        ? (currentLang === 'ru' ? 'Нет доступа к микрофону' : 'Microphone access denied')
        : (currentLang === 'ru' ? 'Ошибка' : 'Error');
      micLabel.textContent = msg;
    };
  }
 
  micBtn.addEventListener('click', () => {
    if (!recognition) { micLabel.textContent = currentLang === 'ru' ? 'Не поддерживается' : 'Not supported'; return; }
    if (isListening) { recognition.stop(); isListening = false; }
    else { recognition.lang = currentLang === 'ru' ? 'ru-RU' : 'en-US'; recognition.start(); isListening = true; }
  });
 
  injectManualInput(inputEl, outputEl, historyEl);
}
 
function injectManualInput(inputEl, outputEl, histEl) {
  if (document.getElementById('manualTranslateWrap')) return;
  const voiceCard = document.querySelector('.voice-card');
  if (!voiceCard) return;
  const wrap = document.createElement('div');
  wrap.id = 'manualTranslateWrap';
  wrap.className = 'manual-translate-wrap';
  wrap.innerHTML = `
    <div class="manual-divider"><span>${currentLang === 'ru' ? '— или введите текст —' : '— or type text —'}</span></div>
    <div class="manual-row">
      <input type="text" id="manualInput" class="manual-input" placeholder="${currentLang === 'ru' ? 'Введите текст для перевода...' : 'Type to translate...'}">
      <button class="btn btn--primary btn--sm" id="manualBtn">${currentLang === 'ru' ? 'Перевести' : 'Translate'}</button>
    </div>
  `;
  voiceCard.appendChild(wrap);
 
  const doTranslate = () => {
    const text = document.getElementById('manualInput').value.trim();
    if (!text) return;
    const translated = translateToKyrgyz(text);
    inputEl.innerHTML = `<span class="voice-text">${escHtml(text)}</span>`;
    outputEl.innerHTML = `<span class="voice-text voice-text--kg">${escHtml(translated)}</span>`;
    voiceHistoryArr.unshift({ original: text, translated });
    renderVoiceHistory(histEl);
    speakKyrgyz(translated);
    document.getElementById('manualInput').value = '';
  };
 
  document.getElementById('manualBtn')?.addEventListener('click', doTranslate);
  document.getElementById('manualInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') doTranslate(); });
}
 
function renderVoiceHistory(el) {
  if (!el) return;
  el.innerHTML = voiceHistoryArr.slice(0, 8).map(h => `
    <div class="voice-hist-item">
      <span class="voice-hist-orig">${escHtml(h.original)}</span>
      <span class="voice-hist-arrow">→</span>
      <span class="voice-hist-kg">${escHtml(h.translated)}</span>
      <button class="voice-hist-play" onclick="speakKyrgyz('${h.translated.replace(/'/g,"\\'")}')">🔊</button>
    </div>`).join('');
}
 
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
 
// ═══════════════════════════════════════════════════════════
// DOWNLOAD TOGGLE
// ═══════════════════════════════════════════════════════════
function initDownloadToggle() {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.download-panel').forEach(p => p.classList.add('hidden'));
      const id = 'panel' + btn.dataset.platform[0].toUpperCase() + btn.dataset.platform.slice(1);
      document.getElementById(id)?.classList.remove('hidden');
    });
  });
}
 
// ═══════════════════════════════════════════════════════════
// LANG CARDS
// ═══════════════════════════════════════════════════════════
function initLangCards() {
  document.querySelectorAll('.lang-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.lang-card').forEach(c => { c.classList.remove('lang-card--active'); c.setAttribute('aria-pressed','false'); });
      card.classList.add('lang-card--active'); card.setAttribute('aria-pressed','true');
    });
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') card.click(); });
  });
}
 
// ═══════════════════════════════════════════════════════════
// NAVBAR SCROLL
// ═══════════════════════════════════════════════════════════
function initNavbarScroll() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('navbar--scrolled', window.scrollY > 50), { passive: true });
}
 
// ═══════════════════════════════════════════════════════════
// EXTRA STYLES
// ═══════════════════════════════════════════════════════════
function injectStyles() {
  const s = document.createElement('style');
  s.textContent = `
    .voice-text{font-size:1rem;line-height:1.6;font-weight:500;color:inherit;}
    .voice-text--kg{font-size:1.1rem;font-weight:700;color:var(--primary,#e8400c);}
    .voice-text--interim{opacity:.5;}
    .manual-translate-wrap{margin-top:20px;}
    .manual-divider{display:flex;align-items:center;gap:10px;margin-bottom:14px;}
    .manual-divider::before,.manual-divider::after{content:'';flex:1;height:1px;background:rgba(0,0,0,0.1);}
    .manual-divider span{font-size:12px;color:#888;white-space:nowrap;}
    .manual-row{display:flex;gap:8px;}
    .manual-input{flex:1;padding:10px 14px;border:1.5px solid rgba(0,0,0,0.15);border-radius:10px;font-size:.95rem;outline:none;font-family:inherit;background:rgba(255,255,255,.7);}
    .manual-input:focus{border-color:var(--primary,#e8400c);}
    .voice-history{margin-top:16px;display:flex;flex-direction:column;gap:6px;max-height:220px;overflow-y:auto;}
    .voice-hist-item{display:flex;align-items:center;gap:8px;padding:9px 12px;background:rgba(0,0,0,.04);border-radius:9px;flex-wrap:wrap;}
    .voice-hist-orig{font-size:.85rem;color:#555;flex:1;min-width:100px;}
    .voice-hist-arrow{color:#bbb;font-size:.8rem;}
    .voice-hist-kg{font-size:.9rem;font-weight:700;color:var(--primary,#e8400c);flex:1;min-width:100px;}
    .voice-hist-play{background:none;border:none;cursor:pointer;font-size:.95rem;padding:2px 6px;opacity:.7;}
    .voice-hist-play:hover{opacity:1;}
    .mic-active{animation:micPulse 1s ease infinite!important;}
    @keyframes micPulse{0%,100%{box-shadow:0 0 0 0 rgba(232,64,12,.5)}50%{box-shadow:0 0 0 14px rgba(232,64,12,0)}}
    .fc-filter-bar{display:flex;gap:8px;justify-content:center;margin-bottom:18px;flex-wrap:wrap;}
    .fc-filter-btn{padding:7px 16px;border-radius:99px;border:1.5px solid rgba(0,0,0,.12);background:transparent;font-size:.8rem;font-weight:600;cursor:pointer;transition:all .2s;font-family:inherit;}
    .fc-filter-btn.active,.fc-filter-btn:hover{background:var(--primary,#e8400c);color:#fff;border-color:var(--primary,#e8400c);}
    .fc-active-know{background:#22c55e!important;color:#fff!important;border-color:#22c55e!important;}
    .fc-active-repeat{background:#f59e0b!important;color:#fff!important;border-color:#f59e0b!important;}
    .lesson-item{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:10px;background:rgba(0,0,0,.03);margin-bottom:7px;animation:liFadeIn .3s ease both;}
    .lesson-item__kg{font-size:1rem;font-weight:700;color:var(--primary,#e8400c);min-width:130px;}
    .lesson-item__tr{font-size:.875rem;color:#555;flex:1;}
    .lesson-item__play{background:none;border:none;cursor:pointer;font-size:1rem;padding:3px 7px;opacity:.7;transition:opacity .2s;border-radius:6px;}
    .lesson-item__play:hover{opacity:1;background:rgba(0,0,0,.06);}
    @keyframes liFadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
    .photo-label-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;background:rgba(0,0,0,.04);margin-bottom:8px;}
    .photo-label-emoji{font-size:1.3rem;}
    .photo-label-kg{font-weight:700;font-size:.95rem;color:var(--primary,#e8400c);min-width:75px;}
    .photo-label-tr{font-size:.85rem;color:#555;flex:1;}
    .photo-label-play{background:none;border:none;cursor:pointer;font-size:.95rem;opacity:.7;}
    .photo-label-play:hover{opacity:1;}
  `;
  document.head.appendChild(s);
}
 
// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  injectStyles();
  applyI18n('en');
  initBurger();
  initNavbarScroll();
  initScrollAnimations();
  initCounters();
  initQuiz();
  initLessonTree();
  initFlashcards();
  initAITabs();
  initVoiceTutor();
  initPhotoTranslator();
  initVoiceTranslator();
  initDownloadToggle();
  initLangCards();
});

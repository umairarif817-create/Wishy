// ============================================================
// Small shared behaviors. Nothing here needs editing to reskin
// the site — just the HTML/CSS.
// ============================================================

// Sprinkle a few floating hearts/petals in the background.
function startAmbient(symbols = ['♥', '✿', '♡']) {
  const wrap = document.querySelector('.ambient');
  if (!wrap) return;
  const count = window.innerWidth < 600 ? 8 : 14;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = 14 + Math.random() * 18 + 'px';
    el.style.animationDuration = 10 + Math.random() * 12 + 's';
    el.style.animationDelay = Math.random() * 10 + 's';
    wrap.appendChild(el);
  }
}

// Envelope open interaction on index.html
function initEnvelope() {
  const envelope = document.querySelector('.envelope');
  const reveal = document.querySelector('.after-open');
  if (!envelope) return;
  envelope.addEventListener('click', () => {
    if (envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    if (reveal) {
      setTimeout(() => reveal.classList.add('show'), 350);
    }
  });
}

// Music page: toggle vinyl spin with the audio
function initRecordPlayer() {
  const audio = document.querySelector('audio');
  const record = document.querySelector('.record');
  if (!audio || !record) return;
  audio.addEventListener('play', () => record.classList.add('spin'));
  audio.addEventListener('pause', () => record.classList.remove('spin'));
  audio.addEventListener('ended', () => record.classList.remove('spin'));
}

// Tease gate: the "No" button dodges around the screen a few times,
// then a popup lets the person through. Only runs on pages that have
// a .dodge-btn (currently just index.html).
function initTeaseGame() {
  const btn = document.querySelector('.dodge-btn');
  const popup = document.querySelector('.tease-popup');
  if (!btn || !popup) return;

  const MAX_DODGES = 5;
  let count = 0;
  let isFixed = false;

  function dodge(e) {
    if (e) e.preventDefault();
    if (count >= MAX_DODGES) return;

    // First dodge: switch from normal flow into a fixed position at its
    // current spot, so the jump to "fixed" positioning is invisible.
    if (!isFixed) {
      const rect = btn.getBoundingClientRect();
      btn.style.position = 'fixed';
      btn.style.left = rect.left + 'px';
      btn.style.top = rect.top + 'px';
      btn.style.margin = '0';
      btn.style.transition = 'left .45s ease, top .45s ease, transform .45s ease';
      isFixed = true;
    }

    count++;

    // Move it to the next point on a circle around the screen center,
    // so it visibly "revolves" rather than jumping randomly.
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.34;
    const angle = (count * (360 / MAX_DODGES)) * (Math.PI / 180);
    const bw = btn.offsetWidth;
    const bh = btn.offsetHeight;

    let x = cx + radius * Math.cos(angle) - bw / 2;
    let y = cy + radius * Math.sin(angle) - bh / 2;
    x = Math.max(12, Math.min(window.innerWidth - bw - 12, x));
    y = Math.max(12, Math.min(window.innerHeight - bh - 12, y));

    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    btn.style.transform = `rotate(${count * 30}deg)`;

    if (count >= MAX_DODGES) {
      setTimeout(() => popup.classList.add('show'), 500);
    }
  }

  btn.addEventListener('mouseenter', dodge);
  btn.addEventListener('click', dodge);
  btn.addEventListener('touchstart', dodge, { passive: false });
}

document.addEventListener('DOMContentLoaded', () => {
  startAmbient();
  initEnvelope();
  initRecordPlayer();
  initTeaseGame();
});

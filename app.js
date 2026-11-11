/* ============================================================
   PORTFOLIO ENGINE — بيقرأ كل حاجة من config.js
   مش محتاج تعدل حاجة هنا غالباً
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('preloader').classList.add('hidden'), 600);
  });

  /* ---------- Render content from CONFIG ---------- */
  const C = CONFIG;

  // Hero
  document.getElementById('heroName').innerHTML = C.name.replace(' ', ' <span class="gold">') + '</span>';
  document.getElementById('heroTagline').textContent = C.tagline;
  document.getElementById('heroLoc').innerHTML = '📍 ' + C.location + ' &nbsp;·&nbsp; ' + C.availability;
  document.title = C.name + ' — Portfolio';

  // Links
  const L = C.links;
  document.getElementById('liLinkedin').href = L.linkedin;
  document.getElementById('liGithub').href = L.github;
  document.getElementById('clEmail').href = L.email;
  document.getElementById('clEmailText').textContent = C.email;
  document.getElementById('clLinkedin').href = L.linkedin;
  document.getElementById('clWhatsapp').href = L.whatsapp;
  document.getElementById('clPhoneText').textContent = C.phone;

  // About
  document.getElementById('aboutText').innerHTML = C.about.paragraphs.map(p => `<p>${p}</p>`).join('');
  document.getElementById('statsRow').innerHTML = C.about.stats.map(s => `
    <div class="stat-card">
      <div class="stat-num">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  // Skills
  document.getElementById('skillsGrid').innerHTML = C.skills.map(s => `
    <div class="skill-card reveal">
      <div class="skill-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');

  // Experience
  document.getElementById('timeline').innerHTML = C.experience.map(e => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <span class="timeline-period">${e.period}</span>
      <h3>${e.role}</h3>
      <div class="timeline-company">${e.company}</div>
      <ul>${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>`).join('');

  // Projects
  document.getElementById('projectsGrid').innerHTML = C.projects.map(p => `
    <div class="project-card reveal">
      <div class="project-emoji">${p.emoji}</div>
      <div class="project-cat">${p.category}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      ${p.link ? `<a class="project-link" href="${p.link}" target="_blank">View Project <span>→</span></a>` : ''}
    </div>`).join('');

  // Volunteer
  document.getElementById('volunteerGrid').innerHTML = C.volunteer.map(v => `
    <div class="volunteer-card reveal">
      <h3>${v.role}</h3>
      <div class="volunteer-org">${v.org}</div>
      <div class="volunteer-period">${v.period}</div>
      <p>${v.desc}</p>
    </div>`).join('');

  // Languages
  document.getElementById('langsBlock').innerHTML = C.languages.map(l => `
    <div class="lang-item">
      <div class="lang-head">
        <span class="lang-name">${l.name}</span>
        <span class="lang-level">${l.level}</span>
      </div>
      <div class="lang-bar"><div class="lang-fill" data-w="${l.percent}"></div></div>
    </div>`).join('');

  // Tools
  document.getElementById('toolsCloud').innerHTML = C.tools.map(t => `<span class="tool-pill">${t}</span>`).join('');

  // Education
  document.getElementById('eduDegree').textContent = C.education.degree;
  document.getElementById('eduSchool').textContent = C.education.school;
  document.getElementById('certsList').innerHTML = C.education.certs.map(c => `<div class="cert-item">${c}</div>`).join('');

  // Contact
  document.getElementById('contactHeading').innerHTML = C.contact.heading.replace('Together', '<span class="gold">Together</span>');
  document.getElementById('contactText').textContent = C.contact.text;

  /* ---------- Particles ---------- */
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const N = window.innerWidth < 700 ? 35 : 70;
  for (let i = 0; i < N; i++) {
    particles.push({
      x: Math.random() * 2000, y: Math.random() * 1200,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      a: Math.random() * 0.5 + 0.15,
      gold: Math.random() > 0.4,
    });
  }
  function drawParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold ? `rgba(212,175,55,${p.a})` : `rgba(74,158,255,${p.a * 0.7})`;
      ctx.fill();
    });
    // connect near particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x % W, particles[i].y % H);
          ctx.lineTo(particles[j].x % W, particles[j].y % H);
          ctx.strokeStyle = `rgba(212,175,55,${0.12 * (1 - d / 130)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();

  /* ---------- Custom cursor ---------- */
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });
  (function ringLoop() {
    rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(ringLoop);
  })();
  document.querySelectorAll('a, button, .skill-card, .project-card, .tool-pill, .stat-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });

  /* ---------- Scroll: progress bar + nav + toTop ---------- */
  const nav = document.querySelector('nav');
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    const st = window.scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('progress').style.width = (st / dh * 100) + '%';
    nav.classList.toggle('scrolled', st > 60);
    toTop.classList.toggle('show', st > 500);
  }, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Mobile menu ---------- */
  const ham = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open');
    navLinks.classList.remove('open');
  }));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        // animate language bars
        en.target.querySelectorAll('.lang-fill').forEach(f => {
          f.style.width = f.dataset.w + '%';
        });
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Hero parallax on mouse ---------- */
  const heroPhoto = document.querySelector('.hero-photo-wrap');
  if (heroPhoto && window.matchMedia('(hover: hover)').matches) {
    document.getElementById('hero').addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      heroPhoto.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
});

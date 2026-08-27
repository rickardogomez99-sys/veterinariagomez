// ---------- Scroll reveal ----------
(function(){
  var els = document.querySelectorAll('.reveal');
  if(!els.length) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  },{threshold:0.15});
  els.forEach(function(el){ obs.observe(el); });
})();

// ---------- Cookie consent banner ----------
// Stores only a simple yes/no choice locally in the visitor's own browser
// (localStorage) — no tracking cookie is set until the visitor accepts.
(function(){
  var KEY = 'vg-cookie-consent'; // 'accepted' | 'rejected'
  var banner = document.getElementById('cookie-banner');
  if(!banner) return;
  var stored = localStorage.getItem(KEY);

  function loadAnalytics(){
    // Analytics is only loaded after explicit consent.
    // Replace G-XXXXXXXXXX with your real Google Analytics 4 ID.
    if(window.__vgAnalyticsLoaded) return;
    window.__vgAnalyticsLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }

  if(stored === 'accepted'){
    loadAnalytics();
  } else if(stored !== 'rejected'){
    banner.classList.add('show');
  }

  var acceptBtn = banner.querySelector('.accept');
  var rejectBtn = banner.querySelector('.reject');
  if(acceptBtn){
    acceptBtn.addEventListener('click', function(){
      localStorage.setItem(KEY, 'accepted');
      banner.classList.remove('show');
      loadAnalytics();
    });
  }
  if(rejectBtn){
    rejectBtn.addEventListener('click', function(){
      localStorage.setItem(KEY, 'rejected');
      banner.classList.remove('show');
    });
  }
})();

// ---------- Contact form validation ----------
// Client-side validation with inline error states. To actually receive these
// messages by email, connect the form to a form backend (Formspree, Web3Forms,
// etc.) by setting the form's action/endpoint — see the comment near the form.
(function(){
  var form = document.getElementById('contact-form');
  if(!form) return;
  var status = document.getElementById('form-status');

  var validators = {
    name: function(v){ return v.trim().length >= 2; },
    phone: function(v){ return /^[0-9\s\-\+\(\)]{10,15}$/.test(v.trim()); },
    message: function(v){ return v.trim().length >= 10; }
  };
  var errors = {
    name: 'Escribe tu nombre (mínimo 2 letras).',
    phone: 'Escribe un teléfono válido (10 dígitos).',
    message: 'Cuéntanos brevemente qué necesitas (mínimo 10 caracteres).'
  };

  function validateField(input){
    var name = input.name;
    var field = input.closest('.field');
    var errEl = field.querySelector('.err');
    var ok = validators[name] ? validators[name](input.value) : true;
    field.classList.toggle('invalid', !ok);
    field.classList.toggle('valid', ok);
    if(errEl) errEl.textContent = ok ? '' : errors[name];
    return ok;
  }

  form.querySelectorAll('input,textarea').forEach(function(input){
    input.addEventListener('blur', function(){ validateField(input); });
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var inputs = form.querySelectorAll('input,textarea');
    var allOk = true;
    inputs.forEach(function(input){
      if(!validateField(input)) allOk = false;
    });

    if(!allOk){
      status.textContent = 'Revisa los campos marcados en rojo.';
      status.className = 'form-status show';
      status.style.color = 'var(--bad)';
      return;
    }

    // No backend is connected yet, so we can't actually send the message.
    // Once a form endpoint is set (see HTML comment above the <form>),
    // replace this block with a real fetch() POST to that endpoint.
    status.textContent = 'Este formulario aún no está conectado a un servicio de envío.';
    status.className = 'form-status show';
    status.style.color = 'var(--steel)';
  });
})();

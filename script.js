// menu mobile
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// cards da home clicáveis
document.querySelectorAll('.card-link').forEach(card => {
  card.addEventListener('click', () => {
    const target = card.getAttribute('data-target');
    if (target) window.location.href = target;
  });
});

// filtro simples de pacientes
const buscaPacientes = document.getElementById('buscaPacientes');
if (buscaPacientes) {
  buscaPacientes.addEventListener('input', e => {
    const termo = e.target.value.toLowerCase();
    document.querySelectorAll('.paciente-card').forEach(card => {
      const nome = card.dataset.nome.toLowerCase();
      card.style.display = nome.includes(termo) ? '' : 'none';
    });
  });
}

// expandir detalhes dos pacientes
document.querySelectorAll('.paciente-card .ver-detalhes').forEach(btn => {
  btn.addEventListener('click', () => {
    const detalhes = btn.parentElement.querySelector('.detalhes');
    detalhes.classList.toggle('oculto');
  });
});

// expandir agenda de profissionais
document.querySelectorAll('.profissional-card .ver-agenda').forEach(btn => {
  btn.addEventListener('click', () => {
    const detalhes = btn.parentElement.querySelector('.detalhes');
    detalhes.classList.toggle('oculto');
  });
});

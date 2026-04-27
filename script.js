document.addEventListener('DOMContentLoaded', () => {
  const tier1Cards = document.querySelectorAll('[data-tier1]');
  const tier2Cards = document.querySelectorAll('[data-tier2]');
  const tier1Panels = document.querySelectorAll('.tier1-panel');
  const tier2Panels = document.querySelectorAll('.tier2-panel');

  function closeTier2() {
    tier2Cards.forEach(card => card.classList.remove('active'));
    tier2Panels.forEach(panel => panel.classList.remove('active'));
  }

  tier1Cards.forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.tier1;
      const target = document.querySelector(`.tier1-panel[data-parent="${key}"]`);
      const alreadyOpen = card.classList.contains('active');

      tier1Cards.forEach(item => item.classList.remove('active'));
      tier1Panels.forEach(panel => panel.classList.remove('active'));
      closeTier2();

      if (!alreadyOpen && target) {
        card.classList.add('active');
        target.classList.add('active');
      }
    });
  });

  tier2Cards.forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.tier2;
      const parent = card.dataset.parent;
      const scopeCards = document.querySelectorAll(`.subtier-card[data-parent="${parent}"]`);
      const scopePanels = document.querySelectorAll(`.tier2-panel[data-parent="${parent}"]`);
      const target = document.querySelector(`.tier2-panel[data-parent="${parent}"][data-subparent="${key}"]`);
      const alreadyOpen = card.classList.contains('active');

      scopeCards.forEach(item => item.classList.remove('active'));
      scopePanels.forEach(panel => panel.classList.remove('active'));

      if (!alreadyOpen && target) {
        card.classList.add('active');
        target.classList.add('active');
      }
    });
  });
});

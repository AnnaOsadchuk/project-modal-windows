(() => {
  const refs = {
    openModaltableBtn: document.querySelector('[data-modaltable-open]'),
    closeModaltableBtn: document.querySelector('[data-modaltable-close]'),
    modaltable: document.querySelector('[data-modaltable]'),
  };

  refs.openModaltableBtn.addEventListener('click', toggleModaltable);
  refs.closeModaltableBtn.addEventListener('click', toggleModaltable);

  function toggleModaltable() {
    refs.modaltable.classList.toggle('is-hidden');
  }
})();

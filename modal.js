const modalShadow = document.getElementById('modal_modalShadow');

// Opens a modal with the given ID.
function modal_open(modalId) {
  const modal = document.getElementById(modalId);
  const openModal = document.getElementsByClassName('modal_open');
  if (openModal.length > 0) { modal_close(openModal[0].id); }
  modalShadow.classList.remove('modal_closed');
  modal.classList.remove('modal_closed');
  modal.classList.add('modal_open');
}

// Closes a modal with the given ID.
function modal_close(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('modal_open');
  modal.classList.add('modal_closed');
  modalShadow.classList.add('modal_closed');
}


// ============== ADD CLICK HANDLERS BELOW ============== \\

modalShadow.addEventListener('click', () =>
{
  const openModal = document.getElementsByClassName('modal_open');
  if (openModal.length > 0) { modal_close(openModal[0].id); }
});

document.getElementById('open1').addEventListener('click', () =>
{
  modal_open('modal1');
});

document.getElementById('modal_close').addEventListener('click', () =>
{
  modal_close('modal1');
});

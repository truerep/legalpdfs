function toggleAccountMenu() {
  document.querySelector('.account-cta').classList.toggle('active');
}

function toggleSearchBar() {
  document.querySelector('.search-bar-wrapper').classList.toggle('active');
}

function toggleSidebar() {
  document.querySelector('.footer-wrapper').classList.toggle('active');
}

function toggleFaq(button) {
  const accordionItem = button.closest('.accordian-item');

  if (accordionItem) {
    accordionItem.classList.toggle('active');
  }
}
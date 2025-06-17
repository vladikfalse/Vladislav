

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const logoRef = document.querySelector('.logo-text-primary');

  menuBtnRef.addEventListener('click', () => {
    // Переключаем классы
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');

    const menuIsNowOpen = mobileMenuRef.classList.contains('is-open');
    menuBtnRef.setAttribute('aria-expanded', menuIsNowOpen);

    // Скрываем логотип, но не убираем его место
    if (logoRef) {
      logoRef.classList.toggle('logo-hidden', menuIsNowOpen);
    }
  });
})();















// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');
//   const logoRef = document.querySelector('.logo-text-primary'); // логотип

//   menuBtnRef.addEventListener('click', () => {
//     // Переключаем классы
//     menuBtnRef.classList.toggle('is-open');
//     mobileMenuRef.classList.toggle('is-open');

//     // Читаем новое состояние меню после переключения
//     const menuIsNowOpen = mobileMenuRef.classList.contains('is-open');

//     // Устанавливаем aria-expanded по новому состоянию
//     menuBtnRef.setAttribute('aria-expanded', menuIsNowOpen);

//     // Прячем или показываем логотип
//     if (logoRef) {
//       logoRef.style.display = menuIsNowOpen ? 'none' : 'inline-block';
//     }
//   });
// })();





















// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     const isExpanded = menuBtnRef.getAttribute('aria-expanded') === 'true';

//     menuBtnRef.setAttribute('aria-expanded', !isExpanded);
//     menuBtnRef.classList.toggle('is-open');
//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();




  // const menuButton = document.querySelector('[data-menu-button]');
  // const menu = document.querySelector('[data-menu]');
  // const logo = document.querySelector('.logo-text-primary');

  // // menuButton.addEventListener('click', () => {
  // //   const isOpen = menu.classList.toggle('is-open');

  //   // Прячем логотип, если меню открылось
  //   if (isOpen) {
  //     logo.classList.add('logo-hidden');
  //   } else {
  //     logo.classList.remove('logo-hidden');
  //   }
  // });
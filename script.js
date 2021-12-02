'use strict';

const noScroll = document.querySelector('.page');

//submenu link

const subLink = document.querySelector('.submenu');
const subMenu = document.querySelector('.submenu-items');

subLink.addEventListener('mouseover', () => {
  subMenu.style.opacity = 1;
});

subLink.addEventListener('mouseout', () => {
  subMenu.style.opacity = 0;
});

// mobile menu open / close + mobile submenu link

const main = document.querySelector('.main');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.mobile-menu-close-btn');
const menuOpen = document.querySelector('.mobile-nav-menu-btn');
const mobileSubLink = document.querySelector('.mobile-submenu');
const mobileSubMenu = document.querySelector('.mobile-submenu-items');

menuOpen.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateY(0)';
});

menuClose.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateY(-100%)';
});

main.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateY(-100%)';
});

mobileSubLink.addEventListener('mouseover', () => {
  mobileSubMenu.style.display = 'flex';
});

mobileSubLink.addEventListener('mouseout', () => {
  mobileSubMenu.style.display = 'none';
});

// show / close modal form

const modalClose = document.querySelector('.close-btn');
const modalWindow = document.querySelector('.modal');
const modalBox = document.querySelector('.modal-container');

function showModal() {
  modalWindow.style.display = 'block';
  noScroll.classList.add('unscroll');
};

setInterval(showModal, 10000);

modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  noScroll.classList.remove('unscroll');
});

modalBox.addEventListener('click', (event) => {
  if (event.target === modalBox) {
    modalWindow.style.display = 'none';
    noScroll.classList.remove('unscroll');
  }
});

//branches switch

const switches = document.querySelectorAll('.switch');
const branches = document.querySelectorAll('.branch-wrapper');

switches.forEach((item) => {
  item.addEventListener('click', () => {
    let currentSwitch = item;
    let switchId = currentSwitch.getAttribute('data-tab');
    let currentBranch = document.querySelector(switchId);

    if (!currentSwitch.classList.contains('switch-active')) {
      switches.forEach((item) => {
        item.classList.remove('switch-active');
      });
  
      branches.forEach((item) => {
        item.classList.remove('active-branch');
      });
  
      currentSwitch.classList.add('switch-active');
      currentBranch.classList.add('active-branch');
    }
  });
});

document.querySelector('.switch:nth-child(6)').click();

//mobile branches switch

const switchesMobile = document.querySelectorAll('.mobile-switch');
const branchesMobile = document.querySelectorAll('.mobile-branch-description');

switchesMobile.forEach((item) => {
  item.addEventListener('click', () => {
    let currentSwitch = item;
    let switchId = currentSwitch.getAttribute('data-tab');
    let currentBranch = document.querySelector(switchId);

    if (!currentSwitch.classList.contains('mobile-switch-active')) {
      switchesMobile.forEach((item) => {
        item.classList.remove('mobile-switch-active');
      });
  
      branchesMobile.forEach((item) => {
        item.style.display = 'none';
      });
  
      currentSwitch.classList.add('mobile-switch-active');
      currentBranch.style.display = 'block';
    }
  });
});

document.querySelector('[data-tab="#tab-6"]').click();

// slider

const sliderBox = document.querySelector('.news-container');
const sliderLine = document.querySelector('.news-wrapper');
const sliderRange = document.querySelector('.slider');

sliderRange.addEventListener('input', () => {
  let a = sliderLine.clientWidth;
  let b = sliderBox.clientWidth;

  sliderRange.setAttribute('max', a - b);
  sliderLine.style.transform = `translateX(-${sliderRange.value}px)`;
});

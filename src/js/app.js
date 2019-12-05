import 'core-js/features/symbol';
import 'core-js/features/array/from';
import 'core-js/features/promise';
import 'intersection-observer';
import './lib/polyfill';
import smoothscroll from 'smoothscroll-polyfill';

import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import setTabs from './components/setTabs';
import setScrollbar from './components/setScrollbar';
import toggleMenu from './components/toggleMenu';
import setSliders from './components/setSliders';
import setGallery from './components/setGallery';
import setSelects from './components/selects/setSelects';
import scrollTo from './components/scrollTo';
import setPopups from './components/setPopups';
import toggleMenuDropdown from './components/toggleMenuDropdown';

document.addEventListener('DOMContentLoaded', () => {
  sayHello();
  setHTMLClassNames();
  setLazy();
  smoothscroll.polyfill();

  setTabs();
  setScrollbar();
  toggleMenu();
  setSliders();
  setGallery();
  setSelects();
  scrollTo();
  setPopups();
  toggleMenuDropdown();
});

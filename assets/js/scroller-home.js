// assets/js/scroller-home.js
import { manageScrollAndStyle } from './scrollManager.js';

const homeSettings = {
  headerId: 'header',
  navContentId: 'nav-content',
  navActionId: 'navAction',
  toggleSelector: '.toggleColour',
  bgColor: '#dfe7e9', // Hintergrundfarbe als Hex-Wert
  navActionBgClass: 'bg-cyan-500',
  navActionTextClass: 'text-white',
  toggleTextClass: 'text-gray-800',
  toggleTextClassInverse: 'text-white'
};

manageScrollAndStyle(homeSettings);
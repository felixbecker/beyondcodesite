// assets/js/scroller-other.js
import { manageScrollAndStyle } from './scrollManager.js';

const otherSettings = {
  headerId: 'header',
  navContentId: 'nav-content',
  navActionId: 'navAction',
  toggleSelector: '.toggleColour',
  bgColor: 'white', // Hintergrundfarbe als Hex-Wert oder Farbname
  navActionBgClass: 'bg-gray-800',
  navActionTextClass: 'text-white',
  toggleTextClass: 'text-gray-800',
  toggleTextClassInverse: 'text-black'
};

manageScrollAndStyle(otherSettings);
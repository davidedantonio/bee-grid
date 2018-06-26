'use strict';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'navbar';
const VERSION = '1.0.0';

const ClassName = {
  OPEN: '--open',
  NAVBAR: '--navbar',
  LAYOUT: '--has-navbar',
  BUTTON: '--toggler-menu',
  OVERLAY: '--overlay',
  OVERLAYVISIBLE: '--visible'
};

const Selector = {
  DATA: '[data-navbar]',
  DATA_SELECTOR: 'data-navbar',
  NAVBAR_OPEN: ClassName.NAVBAR + '.open'
};

const Events = {
  CLICK: 'click'
};

class Navbar {

  constructor(element) {
    // get element
    var self = this;
    this._element = element;

    // button to toggle menu
    this._button = document.querySelector('.' + ClassName.BUTTON);

    // if button doesn't exist in the dom don't display
    if (this._element == null) {
      this._button.style.display = 'none';
      return false;
    }

    // Element data-navbar attribute value
    this._class = element.getAttribute(Selector.DATA_SELECTOR);

    // get layout
    this._layout = element.parentNode;

    // add classes
    this._element.classList.add(ClassName.NAVBAR);
    this._layout.classList.add(ClassName.LAYOUT + '-' + this._class);

    if (this._element != null) {
      // add overlay
      this._overlay = document.createElement('div');
      this._overlay.classList.add(ClassName.OVERLAY);
      this._overlay.addEventListener(Events.CLICK, function () {
        self._toggleNavbar(self);
      });
      document.body.appendChild(this._overlay);
    }

    // if an element exist add click EVENT
    if (this._button !== null) {
      this._button.addEventListener(Events.CLICK, function () {
        self._toggleNavbar(self);
      });
    }
  }

  _toggleNavbar(self) {
    let navbarEl = self._element;
    self._overlay.classList.toggle(ClassName.OVERLAYVISIBLE);
    navbarEl.classList.toggle(ClassName.OPEN);
  }

  static _getElement() {
    let navbar = document.querySelector(Selector.DATA);
    return new Navbar(navbar);
  }

}

const BGNavbar = Navbar._getElement();
//# sourceMappingURL=navbar.js.map
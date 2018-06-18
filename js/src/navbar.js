'use strict';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
const NAME = 'navbar'
const VERSION = '1.0.0'

const ClassName = {
    OPEN: '--open',
    NAVBAR: '--navbar',
    LAYOUT: '--has-navbar',
    BUTTON: '--toggler-menu',
    OVERLAY: '--overlay',
    OVERLAYVISIBLE: '--visible'
}

const Selector = {
    DATA: '[data-navbar]',
    NAVBAR_OPEN: ClassName.NAVBAR + '.open'
}

const Event = {}

class Navbar {

    constructor(element) {

        // get element and layout
        var self = this;
        this._element = element;
        this._layout = element.parentNode;

        // add classes
        this._element.classList.add(ClassName.NAVBAR);
        this._layout.classList.add(ClassName.LAYOUT);

        // add overlay
        this._overlay = document.createElement('div');
        this._overlay.classList.add(ClassName.OVERLAY);
        this._overlay.addEventListener("click",
            function () {
                self._toggleNavbar(self);
            });
        document.body.appendChild(this._overlay);

        // button to toggle menu
        this._button = document.createElement('button');
        this._button.classList.add(ClassName.BUTTON);
        this._button.innerText = '';
        this._button.addEventListener("click",
            function () {
                self._toggleNavbar(self);
            });
        this._layout.appendChild(this._button);
    }

    _toggleNavbar(self) {
        let navbarEl = self._element;
        self._overlay.classList.toggle(ClassName.OVERLAYVISIBLE);
        navbarEl.classList.toggle(ClassName.OPEN)
    }

    static _getElement() {
        let navbar = document.querySelector(Selector.DATA);
        return new Navbar(navbar)
    }
}

const BGNavbar = Navbar._getElement();

(function () {

  var BrickLayoutElementPrototype = Object.create(HTMLElement.prototype);

  BrickLayoutElementPrototype.openDrawer = function() {
    this.setAttribute("open","");
  };
  BrickLayoutElementPrototype.closeDrawer = function() {
    this.removeAttribute("open");
  };
  BrickLayoutElementPrototype.toggleDrawer = function() {
    if (this.hasAttribute("open")) {
      this.removeAttribute("open");
    } else {
      this.setAttribute("open","");
    }
  };

  BrickLayoutElementPrototype.attachedCallback = function() {
    // var self = this;

    // var minS = window.matchMedia( "(min-width: 768px)" );
    // var minM = window.matchMedia( "(min-width: 992px)" );
    // var minL = window.matchMedia( "(min-width: 1200px)" );
    // var = sizeDescriptors = {
    //   minS: {
    //     query: window.matchMedia( "(min-width: 768px)" );
    //     cssClass : window.
    //   }
    // }
    // function updateClass(mediaQuery, cssClass) {
    //   if (mediaQuery) {
    //     self.classList.add(cssClass);
    //   } else {
    //     self.classList.remove(cssClass);
    //   }
    // }

    // function sHandler() {
    //   updateClass(s,"size-s");
    // }
    // function mHandler() {
    //   updateClass(m,"size-m");
    // }
    // function lHandler() {
    //   updateClass(l,"size-l");
    // }

    // s.addListener(sHandler);
    // m.addListener(mHandler);
    // l.addListener(lHandler);
  };

  window.BrickLayoutElement = document.registerElement('brick-layout', {
    prototype: BrickLayoutElementPrototype
  });

})();

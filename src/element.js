(function () {
  // var prefix = (function () {
  //   var styles = window.getComputedStyle(document.documentElement, ''),
  //       pre = (Array.prototype.slice
  //         .call(styles)
  //         .join('')
  //         .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
  //       )[1];
  //   return {
  //     dom: pre === 'ms' ? 'MS' : pre,
  //     lowercase: pre,
  //     css: '-' + pre + '-',
  //     js: pre === 'ms' ? pre : pre[0].toUpperCase() + pre.substr(1)
  //   };
  // })();

  // var matches = Element.prototype.matches ||
  //               Element.prototype.matchesSelector ||
  //               Element.prototype[prefix.lowercase + 'MatchesSelector'];

  // function matchSelector(element, selector) {
  //   return matches.call(element, selector);
  // }

  // function delegate(delegateEl, type, selector, handler) {
  //   delegateEl.addEventListener(type, function(event) {
  //     var target = event.target;
  //     var matches = delegateEl.querySelectorAll(selector);
  //     for (var el = target; el.parentNode && el !== delegateEl; el = el.parentNode) {
  //       for (var i = 0; i < matches.length; i++) {
  //         if (matches[i] === el) {
  //           handler.call(el, event);
  //           return;
  //         }
  //       }
  //     }
  //   });
  // }

  // function getLayoutScroll(layout, element){
  //   var scroll = element.__layoutScroll__ = element.__layoutScroll__ || Object.defineProperty(element, '__layoutScroll__', {
  //     value: {
  //       last: element.scrollTop
  //     }
  //   }).__layoutScroll__;
  //   var now = element.scrollTop,
  //       buffer = layout.scrollBuffer;
  //   scroll.max = scroll.max || Math.max(now + buffer, buffer);
  //   scroll.min = scroll.min || Math.max(now - buffer, buffer);
  //   return scroll;
  // }

  // function maxContent(layout){
  //   layout.setAttribute('content-maximizing', null);
  // }

  // function minContent(layout){
  //   layout.removeAttribute('content-maximized');
  //   layout.removeAttribute('content-maximizing');
  // }

  // function evaluateScroll(event){
  //   var layout = event.currentTarget;
  //   console.log("hidetrigger",layout.hideTrigger);
  //   if (layout.hideTrigger === 'scroll' && !event.currentTarget.hasAttribute('content-maximizing')) {

  //     var target = event.target;
  //     if (layout.scrollTarget ? matchSelector(target, layout.scrollTarget) : target.parentNode === layout){
  //       var now = target.scrollTop,
  //           buffer = layout.scrollBuffer,
  //           scroll = getLayoutScroll(layout, target);

  //       if (now > scroll.last) {
  //         scroll.min = Math.max(now - buffer, buffer);
  //       } else if (now < scroll.last) {
  //         scroll.max = Math.max(now + buffer, buffer);
  //       }

  //       if (!layout.maxcontent) {
  //         if (now > scroll.max && !layout.hasAttribute('content-maximized')) {
  //           maxContent(layout);
  //         } else if (now < scroll.min) {
  //           minContent(layout);
  //         }
  //       }

  //       scroll.last = now;
  //     }
  //   }
  // }

  var ElementPrototype = Object.create(HTMLElement.prototype);

  // Lifecycle methods

  ElementPrototype.createdCallback = function () {

  };

  ElementPrototype.attachedCallback = function () {
    // Events
    // var self = this;
    // console.log(self);
    // self.addEventListener('scroll', function() {
    //   console.log("scrolling");
    // },true);

    // self.addEventListener('transitionend', function(e){
    //   var node = e.target;
    //   if (self.hasAttribute('content-maximizing') &&
    //       node.parent === self &&
    //       node.nodeName.toLowerCase() === 'header' || node.nodeName.toLowerCase() === 'footer') {
    //     self.setAttribute('content-maximized', null);
    //     self.removeAttribute('content-maximizing');
    //   }
    // });
    // self.addEventListener('mouseout', function(e) {
    //   console.log("hover");
    //   if (self.hideTrigger === 'hover' &&
    //       !self.maxcontent &&
    //       !self.hasAttribute('content-maximized') &&
    //       (!e.relatedTarget || !self.contains(e.relatedTarget))) {
    //     maxContent(self);
    //   }
    // });
    // self.addEventListener('mouseover', function(e) {
    //   if (self.hideTrigger === 'hover' &&
    //      !self.maxcontent &&
    //      (self.hasAttribute('content-maximized') || self.hasAttribute('content-maximizing')) &&
    //      (self === e.relatedTarget || !self.contains(e.relatedTarget))) {
    //     minContent(self);
    //   }
    // });
    // delegate(self,'click','section',function(e){
    //   var layout = e.currentTarget;
    //   if (layout.hideTrigger === 'tap' && !layout.maxcontent && self.parentNode === layout) {
    //     if ((layout.hasAttribute('content-maximizing') || layout.hasAttribute('content-maximized'))) {
    //       minContent(layout);
    //     } else {
    //       maxContent(layout);
    //     }
    //   }
    // });
  };

  ElementPrototype.detachedCallback = function () {

  };

  ElementPrototype.attributeChangedCallback = function (attr, oldVal, newVal) {
    if (attr in attrs) {
      attrs[attr].call(this, oldVal, newVal);
    }
  };

  // Custom methods

  ElementPrototype.foo = function () {

  };

  // Attribute handlers

  var attrs = {
    'attr': function (oldVal, newVal) {

    }
  };

  // Property handlers

  Object.defineProperties(ElementPrototype, {
    // 'scrollTarget': {
    //   get : function () {
    //     return this.getAttribute('scroll-target');
    //   },
    //   set : function (newVal) {
    //     this.setAttribute('scroll-target', newVal);
    //   }
    // },
    // 'scrollBuffer': {
    //   get: function() {
    //     return Number(this.getAttribute('scroll-buffer')) || 80;
    //   },
    //   set: function (newVal) {
    //     this.setAttribute('scroll-buffer', newVal);
    //   }
    // },
    // 'hideTrigger': {
    //   get: function() {
    //     return Number(this.getAttribute('hide-trigger'));
    //   },
    //   set: function (newVal) {
    //     this.setAttribute('hide-trigger', newVal);
    //   }
    // },
    // 'maxcontent': {
    //   get: function() {
    //     return this.hasAttribute('maxcontent');
    //   },
    //   set: function(newVal){
    //     if (newVal) {
    //       this.setAttribute('maxcontent','');
    //       maxContent(this);
    //     } else {
    //       this.removeAttribute('maxcontent');
    //       if (!this.hasAttribute('content-maximizing')) {
    //         minContent(this);
    //       }
    //     }
    //   }
    // }
  });

  // Register the element

  window.CustomElement = document.registerElement('x-layout', {
    prototype: ElementPrototype
  });

})();

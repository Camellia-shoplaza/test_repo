<<<<<<< HEAD
!function($,window,document){var MenuToggle={init:function(){this.cacheElements(),this.bindEvents()},cacheElements:function(){this.$button=$("[data-toggle-menu]"),this.$menu=$("[data-menu]"),this.$topbarNav=$("[data-topbar-nav]")},bindEvents:function(){$(document).on("click","[data-toggle-menu]",this.handleClick.bind(this))},handleClick:function(){this.$button.toggleClass(LotusConfig.css.activeClass),this.$topbarNav.toggleClass(LotusConfig.css.topbarNavActive),this.$menu.toggle()}};window.MenuToggle=MenuToggle}(jQuery,window,document);
=======
(function($, window, document) {
  ('use strict');

  var MenuToggle = {
    init: function() {
      this.cacheElements();
      this.bindEvents();
    },
    cacheElements: function() {
      this.$button = $('[data-toggle-menu]');
      this.$menu = $('[data-menu]');
      this.$topbarNav = $('[data-topbar-nav]');
    },
    bindEvents: function() {
      $(document).on('click', '[data-toggle-menu]', this.handleClick.bind(this));
    },
    handleClick: function() {
      this.$button.toggleClass(LotusConfig.css.activeClass);
      this.$topbarNav.toggleClass(LotusConfig.css.topbarNavActive);
      this.$menu.toggle();
    }
  };

  window.MenuToggle = MenuToggle;
})(jQuery, window, document);
>>>>>>> 36e0bca9382d2b53e24414367b17228cdeb5653e

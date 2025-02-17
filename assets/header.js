<<<<<<< HEAD
!function($,window){var Header={init:function(){this.cacheElements(),this.setSearchFocus(),this.applyVariant(),this.bindEvents()},cacheElements:function(){this.$window=$(window),this.$topbar=$("[data-topbar]"),this.$correctSearch=$("[data-correct-search]"),this.$searchBox=$("[data-search-box]"),this.$topbarNav=$("[data-topbar-nav]")},bindEvents:function(){$(window).on("scroll resize",this.handleScroll.bind(this))},setSearchFocus:function(){this.$correctSearch.length&&(this.$searchBox.find(".search").html(this.$correctSearch.html()),this.$searchBox.find("#query").focus())},applyVariant:function(){LotusUtils.isHomePage()||LotusUtils.isSearchResultsPage()?this.$topbar.addClass(LotusConfig.css.topbarLarge):this.$topbar.addClass(LotusConfig.css.topbarSmall),this.$topbar.removeClass(LotusConfig.css.hiddenClass),$(window).trigger("resize")},handleScroll:function(){this.$window.scrollTop()>this.$topbarNav.outerHeight()?this.$topbarNav.addClass(LotusConfig.css.topbarScroll):this.$topbarNav.removeClass(LotusConfig.css.topbarScroll)}};window.Header=Header}(jQuery,window,document);
=======
(function($, window, document) {
  ('use strict');

  var Header = {
    init: function() {
      this.cacheElements();
      this.setSearchFocus();
      this.applyVariant();
      this.bindEvents();
    },
    cacheElements: function () {
      this.$window = $(window);
      this.$topbar = $('[data-topbar]');
      this.$correctSearch = $('[data-correct-search]');
      this.$searchBox = $('[data-search-box]');
      this.$topbarNav = $('[data-topbar-nav]');

    },
    bindEvents: function() {
      $(window).on('scroll resize', this.handleScroll.bind(this));
    },
    setSearchFocus: function() {
      if (this.$correctSearch.length) {
        this.$searchBox.find('.search').html(this.$correctSearch.html());
        this.$searchBox.find('#query').focus();
      }
    },
    applyVariant: function() {
      if (LotusUtils.isHomePage() || LotusUtils.isSearchResultsPage()) {
        this.$topbar.addClass(LotusConfig.css.topbarLarge);
      } else {
        this.$topbar.addClass(LotusConfig.css.topbarSmall);
      }

      this.$topbar.removeClass(LotusConfig.css.hiddenClass);
      $(window).trigger('resize');
    },
    handleScroll: function() {
      var scrolled = this.$window.scrollTop();
      if (scrolled > this.$topbarNav.outerHeight()) {
        this.$topbarNav.addClass(LotusConfig.css.topbarScroll);
      } else {
        this.$topbarNav.removeClass(LotusConfig.css.topbarScroll);
      }
    }
  };

  window.Header = Header;
})(jQuery, window, document);
>>>>>>> 36e0bca9382d2b53e24414367b17228cdeb5653e

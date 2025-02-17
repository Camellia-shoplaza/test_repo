<<<<<<< HEAD
!function($,window){var Layout={init:function(){(LotusUtils.isHomePage()||LotusUtils.isSearchResultsPage())&&($("[data-hero-unit]").removeClass(LotusConfig.css.hiddenClass),$("[data-footer-submit-ticket]").removeClass(LotusConfig.css.hiddenClass)),LotusUtils.isSearchResultsPage()&&$("[data-hero-unit]").addClass(LotusConfig.css.hiddenClass)}};window.Layout=Layout}(jQuery,window,document);
=======
(function($, window, document) {
  ('use strict');

  var Layout = {
    init: function() {
      if (LotusUtils.isHomePage() || LotusUtils.isSearchResultsPage()) {
        $('[data-hero-unit]').removeClass(LotusConfig.css.hiddenClass);
        $('[data-footer-submit-ticket]').removeClass(LotusConfig.css.hiddenClass);
      }
      if(LotusUtils.isSearchResultsPage()){
        $('[data-hero-unit]').addClass(LotusConfig.css.hiddenClass);
      }
    }
  };

  window.Layout = Layout;
})(jQuery, window, document);
>>>>>>> 36e0bca9382d2b53e24414367b17228cdeb5653e

<<<<<<< HEAD
!(function ($, window) {
  var LotusIcons = {
    insertIcons: function () {
      $('[data-lotus-icon]').each(function (index, el) {
        var key,
          value,
          $el = $(el),
          id = $el.attr('data-lotus-icon'),
          imgUrl =
            ((key = id),
            Object.keys(window.LotusConfig.icons).some(function (k) {
              return k === key
                ? ((value = window.LotusConfig.icons[k]), !0)
                : window.LotusConfig.icons[k] &&
                  'object' == typeof window.LotusConfig.icons[k]
                ? void 0 !==
                  (value = window.LotusConfig.icons.getValueByKey(
                    window.LotusConfig.icons[k],
                    key,
                  ))
                : void 0
            }),
            value)
=======
/**
 * LotusIcons v1.0.0 - Fast, caching, dynamic inline SVG DOM injection library
 * Copyright (c) 2015-2019 Lotus Studio <hello@lotus-studio.co>
 */

;(function ($, window, document) {
  ;('use strict')

  /**
   * Recursively finds a value by key in window.LotusConfig.icons
   * @param  {String} key
   */
  function getValueByKey(key) {
    var value
    Object.keys(window.LotusConfig.icons).some(function (k) {
      if (k === key) {
        value = window.LotusConfig.icons[k]
        return true
      }
      if (
        window.LotusConfig.icons[k] &&
        typeof window.LotusConfig.icons[k] === 'object'
      ) {
        value = window.LotusConfig.icons.getValueByKey(
          window.LotusConfig.icons[k],
          key,
        )
        return value !== undefined
      }
    })
    return value
  }

  var LotusIcons = {
    // Insert all icons specified in LotusConfig.icons object
    insertIcons: function () {
      $('[data-lotus-icon]').each(function (index, el) {
        var $el = $(el)
        var id = $el.attr('data-lotus-icon')
        var imgUrl = getValueByKey(id)
>>>>>>> 36e0bca9382d2b53e24414367b17228cdeb5653e
        $el.attr('src', imgUrl)
        $el.attr('alt', `icon-${id}`)
      })
    },
  }
<<<<<<< HEAD
  ;(window.LotusIcons = LotusIcons),
    $(function () {
      LotusIcons.insertIcons()
    })
=======

  window.LotusIcons = LotusIcons

  $(function () {
    LotusIcons.insertIcons()
  })
>>>>>>> 36e0bca9382d2b53e24414367b17228cdeb5653e
})(jQuery, window, document)

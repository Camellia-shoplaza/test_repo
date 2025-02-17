<<<<<<< HEAD
document.addEventListener("DOMContentLoaded",(function(){function Dropdown(toggle,menu){this.toggle=toggle,this.menu=menu,this.menuPlacement={top:menu.classList.contains("dropdown-menu-top"),end:menu.classList.contains("dropdown-menu-end")},this.toggle.addEventListener("click",this.clickHandler.bind(this)),this.toggle.addEventListener("keydown",this.toggleKeyHandler.bind(this)),this.menu.addEventListener("keydown",this.menuKeyHandler.bind(this))}Dropdown.prototype={get isExpanded(){return"true"===this.menu.getAttribute("aria-expanded")},get menuItems(){return Array.prototype.slice.call(this.menu.querySelectorAll("[role='menuitem']"))},dismiss:function(){this.isExpanded&&(this.menu.setAttribute("aria-expanded",!1),this.menu.classList.remove("dropdown-menu-end","dropdown-menu-top"))},open:function(){this.isExpanded||(this.menu.setAttribute("aria-expanded",!0),this.handleOverflow())},handleOverflow:function(){var rect=this.menu.getBoundingClientRect(),overflow_right=rect.left<0||rect.left+rect.width>window.innerWidth,overflow_bottom=rect.top<0||rect.top+rect.height>window.innerHeight;(overflow_right||this.menuPlacement.end)&&this.menu.classList.add("dropdown-menu-end"),(overflow_bottom||this.menuPlacement.top)&&this.menu.classList.add("dropdown-menu-top"),this.menu.getBoundingClientRect().top<0&&this.menu.classList.remove("dropdown-menu-top")},focusNextMenuItem:function(currentItem){if(this.menuItems.length){var currentIndex=this.menuItems.indexOf(currentItem),nextIndex=currentIndex===this.menuItems.length-1||currentIndex<0?0:currentIndex+1;this.menuItems[nextIndex].focus()}},focusPreviousMenuItem:function(currentItem){if(this.menuItems.length){var currentIndex=this.menuItems.indexOf(currentItem),previousIndex=currentIndex<=0?this.menuItems.length-1:currentIndex-1;this.menuItems[previousIndex].focus()}},clickHandler:function(){this.isExpanded?this.dismiss():this.open()},toggleKeyHandler:function(e){switch(e.keyCode){case 13:case 32:case 40:e.preventDefault(),this.open(),this.focusNextMenuItem();break;case 38:e.preventDefault(),this.open(),this.focusPreviousMenuItem();break;case 27:this.dismiss(),this.toggle.focus()}},menuKeyHandler:function(e){var firstItem=this.menuItems[0],lastItem=this.menuItems[this.menuItems.length-1],currentElement=e.target;switch(e.keyCode){case 27:this.dismiss(),this.toggle.focus();break;case 40:e.preventDefault(),this.focusNextMenuItem(currentElement);break;case 38:e.preventDefault(),this.focusPreviousMenuItem(currentElement);break;case 9:e.shiftKey?currentElement===firstItem?this.dismiss():(e.preventDefault(),this.focusPreviousMenuItem(currentElement)):currentElement===lastItem?this.dismiss():(e.preventDefault(),this.focusNextMenuItem(currentElement));break;case 13:case 32:e.preventDefault(),currentElement.click()}}};var dropdowns=[];Array.prototype.slice.call(document.querySelectorAll(".dropdown-toggle")).forEach((function(toggle){var menu=toggle.nextElementSibling;menu&&menu.classList.contains("dropdown-menu")&&dropdowns.push(new Dropdown(toggle,menu))})),document.addEventListener("click",(function(evt){dropdowns.forEach((function(dropdown){dropdown.toggle.contains(evt.target)||dropdown.dismiss()}))}))}));
=======
document.addEventListener("DOMContentLoaded", function() {
  // Key map
  var ENTER = 13;
  var ESCAPE = 27;
  var SPACE = 32;
  var UP = 38;
  var DOWN = 40;
  var TAB = 9;

  function Dropdown(toggle, menu) {
    this.toggle = toggle;
    this.menu = menu;

    this.menuPlacement = {
      top: menu.classList.contains("dropdown-menu-top"),
      end: menu.classList.contains("dropdown-menu-end")
    };

    this.toggle.addEventListener("click", this.clickHandler.bind(this));
    this.toggle.addEventListener("keydown", this.toggleKeyHandler.bind(this));
    this.menu.addEventListener("keydown", this.menuKeyHandler.bind(this));
  }

  Dropdown.prototype = {
    get isExpanded() {
      return this.menu.getAttribute("aria-expanded") === "true";
    },

    get menuItems() {
      return Array.prototype.slice.call(
        this.menu.querySelectorAll("[role='menuitem']")
      );
    },

    dismiss: function() {
      if (!this.isExpanded) return;

      this.menu.setAttribute("aria-expanded", false);
      this.menu.classList.remove("dropdown-menu-end", "dropdown-menu-top");
    },

    open: function() {
      if (this.isExpanded) return;

      this.menu.setAttribute("aria-expanded", true);
      this.handleOverflow();
    },

    handleOverflow: function() {
      var rect = this.menu.getBoundingClientRect();

      var overflow = {
        right: rect.left < 0 || rect.left + rect.width > window.innerWidth,
        bottom: rect.top < 0 || rect.top + rect.height > window.innerHeight
      };

      if (overflow.right || this.menuPlacement.end) {
        this.menu.classList.add("dropdown-menu-end");
      }

      if (overflow.bottom || this.menuPlacement.top) {
        this.menu.classList.add("dropdown-menu-top");
      }

      if (this.menu.getBoundingClientRect().top < 0) {
        this.menu.classList.remove("dropdown-menu-top");
      }
    },

    focusNextMenuItem: function(currentItem) {
      if (!this.menuItems.length) return;

      var currentIndex = this.menuItems.indexOf(currentItem);
      var nextIndex =
        currentIndex === this.menuItems.length - 1 || currentIndex < 0
          ? 0
          : currentIndex + 1;

      this.menuItems[nextIndex].focus();
    },

    focusPreviousMenuItem: function(currentItem) {
      if (!this.menuItems.length) return;

      var currentIndex = this.menuItems.indexOf(currentItem);
      var previousIndex =
        currentIndex <= 0 ? this.menuItems.length - 1 : currentIndex - 1;

      this.menuItems[previousIndex].focus();
    },

    clickHandler: function() {
      if (this.isExpanded) {
        this.dismiss();
      } else {
        this.open();
      }
    },

    toggleKeyHandler: function(e) {
      switch (e.keyCode) {
        case ENTER:
        case SPACE:
        case DOWN:
          e.preventDefault();
          this.open();
          this.focusNextMenuItem();
          break;
        case UP:
          e.preventDefault();
          this.open();
          this.focusPreviousMenuItem();
          break;
        case ESCAPE:
          this.dismiss();
          this.toggle.focus();
          break;
      }
    },

    menuKeyHandler: function(e) {
      var firstItem = this.menuItems[0];
      var lastItem = this.menuItems[this.menuItems.length - 1];
      var currentElement = e.target;

      switch (e.keyCode) {
        case ESCAPE:
          this.dismiss();
          this.toggle.focus();
          break;
        case DOWN:
          e.preventDefault();
          this.focusNextMenuItem(currentElement);
          break;
        case UP:
          e.preventDefault();
          this.focusPreviousMenuItem(currentElement);
          break;
        case TAB:
          if (e.shiftKey) {
            if (currentElement === firstItem) {
              this.dismiss();
            } else {
              e.preventDefault();
              this.focusPreviousMenuItem(currentElement);
            }
          } else if (currentElement === lastItem) {
            this.dismiss();
          } else {
            e.preventDefault();
            this.focusNextMenuItem(currentElement);
          }
          break;
        case ENTER:
        case SPACE:
          e.preventDefault();
          currentElement.click();
          break;
      }
    }
  };

  var dropdowns = [];
  var dropdownToggles = Array.prototype.slice.call(
    document.querySelectorAll(".dropdown-toggle")
  );

  dropdownToggles.forEach(function(toggle) {
    var menu = toggle.nextElementSibling;
    if (menu && menu.classList.contains("dropdown-menu")) {
      dropdowns.push(new Dropdown(toggle, menu));
    }
  });

  document.addEventListener("click", function(evt) {
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.toggle.contains(evt.target)) {
        dropdown.dismiss();
      }
    });
  });
});
>>>>>>> 36e0bca9382d2b53e24414367b17228cdeb5653e

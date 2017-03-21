function WritePost () {
  this._init();
  this._initEvent();
}

WritePost.prototype = {

  _init: function () {
    this.$form = $('#write_form');
    this.$titleForm = $('[name=title]');
    this.$contentsForm = $('[name=contents]');
    this.$checkboxForm = $('.agree_submit');
    this.$submitBtn = $('[type=submit]');
    this.KEY_ENTER = 13;
  },

  _initEvent: function () {
    this.blockEnterKeyInTitle();
    this.whenSelectedCheckbox();
    this.beforeSubmit();
    this.pluginMousetrap();
  },

  focusTitle: function () {
    this.$titleForm.focus();
  },

  focusContents: function () {
    this.$contentsForm.focus();
  },

  focuseCheckbox: function () {
    this.$checkboxForm.focus();
  },

  blockEnterKeyInTitle: function () {
    var _this = this;

    this.$titleForm.on('keydown', function (event) {
      if (event.which === _this.KEY_ENTER) {
        event.preventDefault();
      }
    });
  },

  checkIfAgreed: function () {
    if ( this.$checkboxForm.is(':checked') ) {
      this.$submitBtn.removeAttr('disabled');
    } else {
      this.$submitBtn.attr('disabled', 'disabled');
    }
  },

  whenSelectedCheckbox: function () {
    var _this = this;

    this.$checkboxForm.on('click', function () {
      _this.checkIfAgreed();
    });
  },

  beforeSubmit: function () {
    var _this = this;

    this.$form.on('submit', function (event) {
      var titleValue = _this.$titleForm.val().trim();
      var contentsValue = _this.$contentsForm.val().trim();

      if ( titleValue === '' ) {
        _this.focusTitle();
        event.preventDefault();
      }

      if ( contentsValue === '' ) {
        _this.focusContents();
        event.preventDefault();
      }

      if ( !_this.$checkboxForm.is(':checked') ) {
        _this.focuseCheckbox();
        event.preventDefault();
      }
    });
  },

  pluginMousetrap: function () {
    var _this = this;
    var textarea = document.querySelector('textarea');

    Mousetrap(textarea).bind(['command+enter'], function() {
      _this.$form.submit();
    });
  }

};
$(function () {

  var textarea = document.querySelector('textarea');

  Mousetrap(textarea).bind(['command+enter'], function() {
    $('#write_form').submit();
  });

  var $title = $('[name=title]');
  var $contents = $('[name=contents]');
  var $checkbox = $('.agree_submit');
  var $submit = $('[type=submit]');
  var KEY_ENTER = 13;

  function forceTitle() {
    $title.focus();
  }

  function forceContents() {
    $contents.focus();
  }

  $title.on('keydown', function (e) {
    if (e.which === KEY_ENTER) {
      e.preventDefault();
    }
  });

  $checkbox.on('click', function () {
    if ($(this).is(':checked')) {
      $submit.removeAttr('disabled');
    } else {
      $submit.attr('disabled', '')
    }
  });

  $('#write_form').on('submit', function () {
    var titleValue = $title.val().trim();
    var contentsValue = $contents.val().trim();

    if (titleValue === '') {
      console.log('제목을 입력하세요!');
      forceTitle();
      return false;
    }

    if (contentsValue === '') {
      console.log('내용을 입력하세요!');
      forceContents();
      return false;
    }

    if (!$checkbox.is(':checked')) {
      $checkbox.focus();
      return false;
    }
  });

});
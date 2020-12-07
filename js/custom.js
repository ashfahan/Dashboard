jQuery(document).ready(function ($) {
  // header
  // sidebar_button-menu
  $(function () {
    $(".sidebar_button-menu").on("click", function (event) {
      event.preventDefault();
      $(".global-indent").toggleClass("sidebar-active");
      $(".sidebar_item").removeClass("sidebar_sub-list-active");
    });
  });
  // resize
  function resizeHeader() {
    if ($(window).width() <= 992) {
      $(".sidebar_list-dropout .sidebar_link").on("click", function () {
        $(".global-indent").addClass("sidebar-active");
      });
    } else {
      $(".sidebar_list-dropout .sidebar_link").on("click", function () {
        $(".global-indent").removeClass("sidebar-active");
      });
    }
  }
  resizeHeader();
  $(window).resize(function () {
    resizeHeader();
  });
  // sidebar_link
  $(".sidebar_list-dropout .sidebar_link").on("click", function (event) {
    event.preventDefault();
    $(".sidebar_list-dropout .sidebar_link").not(this).parents(".sidebar_item").removeClass("sidebar_sub-list-active");
    $(this).parents(".sidebar_item").toggleClass("sidebar_sub-list-active");
  });
  // header-alert_button
  $(function () {
    $(".header-alert_button").on("click", function (event) {
      event.preventDefault();
      $(".header-alert").toggleClass("header-alert-active");
    });
    $(document).mouseup(function (e) {
      var block = $(".header-alert");
      if (!block.is(e.target) && block.has(e.target).length === 0) {
        block.removeClass("header-alert-active");
      }
    });
  });
  // header-language_button
  $(function () {
    $(".header-language_button").on("click", function (event) {
      event.preventDefault();
      $(".header-language").toggleClass("header-language-active");
    });
    $(document).mouseup(function (e) {
      var block = $(".header-language");
      if (!block.is(e.target) && block.has(e.target).length === 0) {
        block.removeClass("header-language-active");
      }
    });
  });
  // header-language
  $(function () {
    $(".language-rtl").on("click", function (event) {
      event.preventDefault();
      $("body").addClass("rtl");
    });
    $(".language-ltr").on("click", function (event) {
      event.preventDefault();
      $("body").removeClass("rtl");
    });
  });
  // header-user_button
  $(function () {
    $(".header-user_button").on("click", function (event) {
      event.preventDefault();
      $(".header-user").toggleClass("header-user-active");
    });
    $(document).mouseup(function (e) {
      var block = $(".header-user");
      if (!block.is(e.target) && block.has(e.target).length === 0) {
        block.removeClass("header-user-active");
      }
    });
  });
  // header end

  // tab button
  // button
  $(document).mouseup(function (e) {
    var div = $(".button-wrap");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".button-wrap").removeClass("button-active");
    }
  });

  $(".choice_button").click(function () {
    $(this).parents(".button-wrap").toggleClass("button-active");
  });

  $(".tab-button").click(function () {
    $(".choice_button").html($(this).html());
    $(this).parents(".button-wrap").removeClass("button-active");
  });
  // tab
  $(".tab-button").click(function () {
    var index = $(this).index();

    $(".tab-button").removeClass("tab-active");
    $(this).addClass("tab-active");

    $(".tab-content").removeClass("tab-active");
    $(".tab-content").eq(index).addClass("tab-active");
  });
  // tab button end

  // popup
  $(".button-event").click(function (event) {
    event.preventDefault();
    $(".popup-event").animate(300, function () {
      $("body").addClass("active-overflow");
      $(this).addClass("popup-active").animate({ opacity: 1 }, 300);
    });
  });

  $(".popup-close").click(function () {
    $(".popup-wrapper").animate({ opacity: 0 }, 300, function () {
      $("body").removeClass("active-overflow");
      $(this).removeClass("popup-active");
    });
  });

  $(".popup-wrapper, .popup-container")
    .click(function () {
      $(".popup-wrapper").animate({ opacity: 0 }, 300, function () {
        $("body").removeClass("active-overflow");
        $(this).removeClass("popup-active");
      });
    })
    .children()
    .click(function (e) {
      e.stopPropagation();
    });
  // popup end

  // table_links
  $(document).mouseup(function (e) {
    var div = $(".table_links");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".table_links").removeClass("table_links-active");
    }
  });

  $(".table_links_button").click(function () {
    event.preventDefault();
    $(".table_links_button").not(this).parents(".table_links").removeClass("table_links-active");
    $(this).parents(".table_links").toggleClass("table_links-active");
  });
  // table_links end
});
//jQuery

jQuery(document).ready(($) => {
  // header

  // sidebar_button-menu
  $(() => {
    $(".sidebar_button-menu").on("click", (event) => {
      event.preventDefault();
      $(".global-indent").toggleClass("sidebar-active");
      $(".sidebar_item").removeClass("sidebar_sub-list-active");
    });
  });

  // resize
  function resizeHeader() {
    if ($(window).width() <= 992) $(".sidebar_list-dropout .sidebar_link").on("click", () => $(".global-indent").addClass("sidebar-active"));
    else $(".sidebar_list-dropout .sidebar_link").on("click", () => $(".global-indent").removeClass("sidebar-active"));
  }
  resizeHeader();
  $(window).resize(() => resizeHeader());

  // sidebar_link
  $(".sidebar_list-dropout .sidebar_link").on("click", (event) => {
    event.preventDefault();
    $(".sidebar_list-dropout .sidebar_link").not(this).parents(".sidebar_item").removeClass("sidebar_sub-list-active");
    $(this).parents(".sidebar_item").toggleClass("sidebar_sub-list-active");
  });

  // header-alert_button
  $(() => {
    $(".header-alert_button").on("click", (event) => {
      event.preventDefault();
      $(".header-alert").toggleClass("header-alert-active");
    });
    $(document).mouseup((e) => {
      var block = $(".header-alert");
      if (!block.is(e.target) && block.has(e.target).length === 0) block.removeClass("header-alert-active");
    });
  });

  // header-language_button
  $(() => {
    $(".header-language_button").on("click", (event) => {
      event.preventDefault();
      $(".header-language").toggleClass("header-language-active");
    });
    $(document).mouseup((e) => {
      var block = $(".header-language");
      if (!block.is(e.target) && block.has(e.target).length === 0) block.removeClass("header-language-active");
    });
  });

  // header-language
  $(() => {
    $(".language-rtl").on("click", (event) => {
      event.preventDefault();
      $("body").addClass("rtl");
    });
    $(".language-ltr").on("click", (event) => {
      event.preventDefault();
      $("body").removeClass("rtl");
    });
  });

  // Dropdown
  var dropdowntriggers = document.getElementsByClassName("dropdown-trigger");
  Object.keys(dropdowntriggers).forEach((k) => {
    dropdowntriggers[k].onclick = (e) => e.target.closest(".dropdown-trigger").classList.toggle("active");
  });

  // Sidebar
  if (document.querySelector(".lyt-sidebar + .overlay")) {
    document.querySelector(".lyt-sidebar + .overlay").onclick = () => document.querySelector(".lyt-sidebar").classList.remove("active");
  }

  if (document.querySelector(".lyt-sidebar-open")) {
    document.querySelector(".lyt-sidebar-open").onclick = () => document.querySelector(".lyt-sidebar").classList.add("active");
  }

  if (document.querySelector(".lyt-sidebar-toggle")) {
    document.querySelector(".lyt-sidebar-toggle").onclick = () => document.querySelector(".lyt-sidebar").classList.toggle("active");
  }

  // header end

  // tab button

  // button
  $(document).mouseup((e) => {
    var div = $(".button-wrap");
    if (!div.is(e.target) && div.has(e.target).length === 0) $(".button-wrap").removeClass("button-active");
  });

  $(".choice_button").click(() => $(this).parents(".button-wrap").toggleClass("button-active"));

  $(".tab-button").click(() => {
    $(".choice_button").html($(this).html());
    $(this).parents(".button-wrap").removeClass("button-active");
  });

  // tab
  $(".tab-button").click(() => {
    var index = $(this).index();

    $(".tab-button").removeClass("tab-active");
    $(this).addClass("tab-active");

    $(".tab-content").removeClass("tab-active");
    $(".tab-content").eq(index).addClass("tab-active");
  });

  // tab button end

  // popup
  $(".button-event").click((event) => {
    event.preventDefault();
    $(".popup-event").animate(300, () => {
      $("body").addClass("overflow-hidden");
      $(this).addClass("popup-active").animate({ opacity: 1 }, 300);
    });
  });

  $(".popup-close").click(() => {
    $(".popup-wrapper").animate({ opacity: 0 }, 300, () => {
      $("body").removeClass("overflow-hidden");
      $(this).removeClass("popup-active");
    });
  });

  $(".popup-wrapper, .popup-container")
    .click(() => {
      $(".popup-wrapper").animate({ opacity: 0 }, 300, () => {
        $("body").removeClass("overflow-hidden");
        $(this).removeClass("popup-active");
      });
    })
    .children()
    .click((e) => e.stopPropagation());

  // popup end

  // table_links
  $(document).mouseup((e) => {
    var div = $(".table_links");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".table_links").removeClass("table_links-active");
    }
  });

  $(".table_links_button").click((event) => {
    event.preventDefault();
    $(".table_links_button").not(this).parents(".table_links").removeClass("table_links-active");
    $(this).parents(".table_links").toggleClass("table_links-active");
  });

  // table_links end
});
//jQuery

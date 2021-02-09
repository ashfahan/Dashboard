var popoveritems = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popover = popoveritems.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl, { html: true, container: "body", sanitize: false }));
popoveritems.forEach((element) => (element.onclick = () => popover.forEach((e) => (e._element != element ? e.hide() : null))));

jQuery(document).ready(($) => {
  const headroom = new Headroom(document.querySelector("body"), {
    // vertical offset in px before element is first unpinned
    offset: 0,
    // scroll tolerance in px before state changes
    tolerance: 0,
    // css classes to apply
    classes: {
      // when element is initialised
      initial: "headroom",
      // when scrolling up
      pinned: "headroom--pinned",
      // when scrolling down
      unpinned: "headroom--unpinned",
      // when above offset
      top: "headroom--top",
      // when below offset
      notTop: "headroom--not-top",
      // when at bottom of scroll area
      bottom: "headroom--bottom",
      // when not at bottom of scroll area
      notBottom: "headroom--not-bottom",
      // when frozen method has been called
      frozen: "headroom--frozen",
      // multiple classes are also supported with a space-separated list
      pinned: "headroom--pinned foo bar"
    },
    // callback when pinned, `this` is headroom object
    onPin: function () {},
    // callback when unpinned, `this` is headroom object
    onUnpin: function () {},
    // callback when above offset, `this` is headroom object
    onTop: function () {},
    // callback when below offset, `this` is headroom object
    onNotTop: function () {},
    // callback when at bottom of page, `this` is headroom object
    onBottom: function () {},
    // callback when moving away from bottom of page, `this` is headroom object
    onNotBottom: function () {}
  });
  headroom.init();

  // sidebar_button-menu
  $(".sidebar_button-menu").on("click", (event) => {
    event.preventDefault();
    $(".global-indent").toggleClass("sidebar-active");
    $(".sidebar_item").removeClass("sidebar_sub-list-active");
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
  $(".header-alert_button").on("click", (event) => {
    event.preventDefault();
    $(".header-alert").toggleClass("header-alert-active");
  });
  $(document).mouseup((e) => {
    var block = $(".header-alert");
    if (!block.is(e.target) && block.has(e.target).length === 0) block.removeClass("header-alert-active");
  });

  // header-language_button
  $(".header-language_button").on("click", (event) => {
    event.preventDefault();
    $(".header-language").toggleClass("header-language-active");
  });
  $(document).mouseup((e) => {
    var block = $(".header-language");
    if (!block.is(e.target) && block.has(e.target).length === 0) block.removeClass("header-language-active");
  });

  // header-language
  $(".language-rtl").on("click", (event) => {
    event.preventDefault();
    $("body").addClass("rtl");
  });
  $(".language-ltr").on("click", (event) => {
    event.preventDefault();
    $("body").removeClass("rtl");
  });

  // Dropdown
  var dropdowntriggers = document.getElementsByClassName("dropdown-trigger");
  Object.values(dropdowntriggers).forEach((trigger) => {
    trigger.onclick = (e) => {
      Object.values(dropdowntriggers).forEach((trigger) => {
        if (e.target != trigger && trigger.closest(".dropdown-trigger").classList.contains("active")) trigger.closest(".dropdown-trigger").classList.remove("active");
      });
      e.target.closest(".dropdown-trigger").classList.toggle("active");
    };
  });

  // Sidebar
  if ((lytsidebaroverlay = document.querySelectorAll(".lyt-sidebar + .overlay"))) {
    lytsidebaroverlay.forEach((overlay) => {
      overlay.onclick = (e) => {
        const sidebar = e.target.previousSibling.previousSibling;
        sidebar.classList.remove("z-top");
        sidebar.classList.remove("active");
      };
    });
  }

  if ((lytsidebartoggle = document.querySelectorAll(".lyt-sidebar-toggle"))) {
    lytsidebartoggle.forEach((toggle) => {
      toggle.onclick = (e) => {
        const sidebar = e.target.closest(".lyt-sidebar");
        sidebar.classList.toggle("active");
        sidebar.classList.toggle("z-top");
      };
    });
  }

  // header end

  // tab button

  // button

  if (document.querySelectorAll(".tabs").length) {
    // const queryString = window.location.hash;
    // const activeTab = e.querySelector(queryString ? `a[href='${queryString}']` : "a.tabs-switcher");

    document.querySelectorAll(".tabs").forEach((tabs) => {
      $.fx.off = true;
      const firsttab = tabs.querySelector(".tab_content:first-child").getAttribute("data-tab");
      changetab(firsttab, tabs);
      $.fx.off = false;
    });

    function changetab(href, root) {
      root.setAttribute("active", href);
      root.querySelectorAll("a.tabs-switcher").forEach((e) => e.classList.remove("active")); // Hide all content
      root.querySelector(`.tabs-switcher[href*='#${href}']`).classList.add("active");
      root.querySelectorAll(`.tab_content`).forEach((e) => {
        if (e.parentElement.closest(".tabs") === root) $(e).slideUp(400);
      });
      root.querySelectorAll(`[data-tab='${href}']`).forEach((e) => $(e).slideDown(400));
      root.querySelectorAll(`[data-tab='${href}']`).forEach((e) => e.classList.add("active"));
    }

    // On Click Event
    document.querySelectorAll("a.tabs-switcher").forEach((e) => {
      e.onclick = (event) => {
        const switcher = event.target;
        const href = switcher.getAttribute("href").replace("#", "");
        const parent = switcher.getAttribute("data-parent");
        const root = switcher.closest(parent ?? ".tabs");
        changetab(href, root);
      };
    });
  }
  // tab button end

  // edit button

  document.querySelectorAll('[data-button="edit"]').forEach((button) => {
    button.onclick = () => {
      const form = button.closest(".data").nextElementSibling.nextElementSibling;
      $(form).toggle("fast");
    };
  });

  //

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

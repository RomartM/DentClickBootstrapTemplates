(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

  // Calendar
  $('#calendar').fullCalendar({
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listWeek'
      },
      defaultDate: '2020-07-04',
      navLinks: true,
      eventLimit: true,
      events: [{
              title: 'Customer Name',
              start: '2020-07-16',
              end: '2020-07-18'
          },
          {
              title: 'Customer Name',
              start: '2020-07-20',
              allDay: true
          },
          {
              title: 'Customer Name',
              start: '2020-07-14T09:00:00',
              end: '2020-07-14T11:00:00'
          },
          {
              title: 'Customer Name',
              start: '2020-07-21T19:00:00',
              end: '2020-07-21T22:00:00'
          },
          {
              title: 'Customer Name',
              start: '2020-07-15',
              allDay: true
          },
          {
              title: 'Customer Name',
              start: '2020-07-23',
              end: '2020-07-29'
          },
      ]
  });

  function resize_container(){
    $("#content .container-fluid").height(jQuery(window).height() - 105);
  }

  // Resize content view port
  $(window).resize(function(){
      resize_container()
  });

  resize_container(); // Init

})(jQuery); // End of use strict

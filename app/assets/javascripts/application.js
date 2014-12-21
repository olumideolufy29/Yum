// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_self
//= require_directory .
jQuery(document).ready(function() {

  if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if ($("body").hasClass("recette")) {
      var largeur = $('.liste-avis li').map(function() {
        return $(this).outerWidth(true);
      }).get();
      var largeurTotale = 0;
      for (var i = 0; i < largeur.length; i++) {
        largeurTotale += largeur[i] << 0;
      }

      $(".liste-avis").width(largeurTotale);


      var titre = $("h2").detach();
      var sous_titre = $("#recette > q").detach();
      $(".infos").prepend('<section class="titre">');
      $(".titre").append(titre, sous_titre);
    };

  }

  /*-------  Login ------- */
  $('header').parent().addClass('account disable');

  $("#login").click(function() {
    $('header').parent().toggleClass('disable').toggleClass('enable');
  });


  if ($("body").hasClass("recette")) {

    /*-------  Etapes Done  ------- */

    $(".recette-steps .number").click(function() {
      $(this).parent().toggleClass('done');
    });


    /*-------  Nombres personnes / Recette  ------- */

    var nbPersonnes = parseInt($(".personnes span").text());



    var ingredients = [];
    var ingredients1person = [];

    $(".quantity").each(function() {
      ingredients.push(parseInt($(this).html()))
    });
    for (i = 0; i < ingredients.length; i++) {
      ingredients1person[i] = ingredients[i] / nbPersonnes;
    }



    $('#plus').click(function() {
      if (nbPersonnes < 20) {
        $('#minor').removeClass('disable');
        nbPersonnes = nbPersonnes + 1;
        console.log(nbPersonnes);
        $(".personnes span").html(nbPersonnes);
        for (i = 0; i < ingredients1person.length; i++) {
          ingredients[i] = ingredients1person[i] * nbPersonnes;
          $(".quantity").eq(i).contents().get(0).nodeValue = (ingredients[i]);
          //$(".quantity").eq(i).css("display","inline");
          var largeur = ($(".quantity").eq(i).width());
          //$(".quantity").eq(i).css("display","inline-block");
          //$(".quantity").eq(i).width(largeur);
        }
      } else {
        $('#plus').addClass('disable');
      }
    });

    $('#minor').click(function() {
      if (nbPersonnes > 1) {
        $('#plus').removeClass('disable');
        nbPersonnes = nbPersonnes - 1;
        console.log(nbPersonnes);
        $(".personnes span").html(nbPersonnes);
        for (i = 0; i < ingredients1person.length; i++) {
          ingredients[i] = ingredients1person[i] * nbPersonnes;
          $(".quantity").eq(i).contents().get(0).nodeValue = (ingredients[i]);
          //$(".quantity").eq(i).css("display","inline");
          var largeur = ($(".quantity").eq(i).width());
          //$(".quantity").eq(i).css("display","inline-block");
          //$(".quantity").eq(i).width(largeur);
        }
      } else {
        $('#minor').addClass('disable');
      }
    });


    //litres


    $(".unity").each(function() {

      if ($(".unity").text().indexOf('l') > -1) {
        if ($(".unity").text().indexOf('m') > -1) {
          var value = parseInt($(".unity").prev().text());
          if (value > 500) {
            ($this).replace('m', 'c');
          }
        }

        if ($(".unity").text().indexOf('c') > -1) {
          if ((parseInt($this).prev() > 500)) {
            ($this).replace('c', 'd');
          }
        }
        if ($(".unity").text().indexOf('d') > -1) {
          if ((parseInt($this).prev() > 500)) {
            ($this).replace('d', '');
          }
        }
      }

      if ($(".unity").text().indexOf('g') > -1) {
        console.log($(this));
        var value = parseInt($(this).prev().text());
        if (value > 999) {
          console.log('1000');
          ($this).replace('g', 'kg');
        }
      }



    });


    //grammes


    $('.liste-avis li:nth-child(4n)').css({
      "-webkit-animation": "bulle .5s cubic-bezier(0.19, 1, 0.22, 1.03) 1.5s 1 forwards",
      "animation": "bulle .5s cubic-bezier(0.19, 1, 0.22, 1.03) 1.5s 1 forwards"
    });
    $('.liste-avis li:nth-child(4n+1)').css({
      "-webkit-animation": "bulle .5s cubic-bezier(0.19, 1, 0.22, 1.03) .9s 1 forwards",
      "animation": "bulle .5s cubic-bezier(0.19, 1, 0.22, 1.03) .9s 1 forwards"
    });
    $('.liste-avis li:nth-child(4n+2)').css({
      "-webkit-animation": "bulle .5s cubic-bezier(0.19, 1, 0.22, 1.03) 1.1s 1 forwards",
      "animation": "bulle .5s cubic-bezier(0.19, 1, 0.22, 1.03) 1.1s 1 forwards"
    });
    $('.liste-avis li:nth-child(4n+3)').css({
      "-webkit-animation": "bulle .5s cubic-bezier(0.19, 1, 0.22, 1.03) 1.3s 1 forwards",
      "animation": "bulle .5s cubic-bezier(0.19, 1, 0.22, 1.03) 1.3s 1 forwards"
    });


    var canvas = document.getElementById("background");
    var canvasContext = canvas.getContext("2d");
    var canvasBackground = new Image();
    canvasBackground.src = "../img/burger.png";

    var drawBlur = function() {
      var w = canvas.width;
      var h = canvas.height;
      canvasContext.drawImage(canvasBackground, 0, 0, w, h);
      stackBlurCanvasRGBA("background", 0, 0, w, h, 10);
    }

    canvasBackground.onload = function() {
      drawBlur();
    }
    $('.timer').click(function() {

      var $countdown = $(".time");
      var valeurTimer = parseInt($countdown.text()) * 6000;
      var incrementTime = 1000;
      var currentTime = valeurTimer - incrementTime;
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', '../audio/ding.mp3');

      $(function() {
        // Setup the timer
        $(".timer").css({
          "width": "110px"
        });
        $(".progress").addClass('active');


        $(".progress").velocity({
          width: "120px;"
        }, {
          duration: valeurTimer
        });


        Timer = $.timer(updateTimer, incrementTime, true);

      });

      function updateTimer() {

        // Output timer position
        var date = new Date(currentTime);
        var m = date.getMinutes();
        var s = date.getSeconds();
        var h = date.getHours() - 1;

        //$(".progress").width(  $(".progress").width() + (valeurTimer/) );


        $countdown.html((h == 0 ? "" : h + " h ") + (m == 0 ? "" : m + " min ") + s + " s");

        // If timer is complete, trigger alert
        if (currentTime == 0) {
          Timer.stop();
          $(".timer").addClass("complete");
          $countdown.html("Fini !");
          audioElement.play();
          return;
        }

        // Increment timer position
        currentTime -= incrementTime;
        if (currentTime < 0) currentTime = 0;
      }

    });
  }


  //TODO: Commenter la suite


  /*-------  Popup Recherche / Tags  ------- */

  var icon_search = $(".icon-search");
  var icon_tags = $(".icon-tags");
  var tags_popup = $(".tags-popup");
  var search_popup = $(".search-popup");

  var input_search = $("input#search");

  $(function() {
    FastClick.attach(document.body);
  });

  icon_tags.click(function(e) { // Clic sur le bouton tag
    e.preventDefault();
    event.stopPropagation();
    if (search_popup.is(":visible")) {
      search_popup.fadeOut(150);
    }

    if (tags_popup.is(":visible")) {
      tags_popup.fadeOut(150);
    } else {
      tags_popup.toggle();
    }
    return false;
  });

  icon_search.click(function() { // Clic sur le bouton de recherche
    event.preventDefault();
    event.stopPropagation();
    if (tags_popup.is(":visible")) {
      tags_popup.fadeOut(150);
    }

    if (search_popup.is(":visible")) {
      search_popup.fadeOut(150);
    } else {
      search_popup.toggle();
    }
    return false;
  });

  $(document).click(function() { // Clic sur le reste de la page pour cacher les popups
    if (!$(event.target).is(search_popup) && !$(event.target).is(tags_popup) && !$(event.target).is("#search") && !$(event.target).is(".tags-popup button")) {
      tags_popup.fadeOut(150);
      search_popup.fadeOut(150);
    }
  });



  input_search.keydown(function() {
    var largeurSearch = $("#search").width();
    $(".search-popup").width(largeurSearch + 20);
  });

  // VOIR http://www.fakeyourbeauty.com/jquery.autosize.input.debug.js





  var buttonFilter = {

    $filters: null,
    $reset: null,
    groups: [],
    outputArray: [],
    outputString: '',


    init: function() {
      var self = this;
      self.$filters = $('.tags-popup');
      self.$reset = $('#Reset');
      self.$container = $('#container_grille');

      self.$filters.find('fieldset').each(function() {
        self.groups.push({
          $buttons: $(this).find('.filter'),
          active: ''
        });
      });

      self.bindHandlers();
    },

    bindHandlers: function() {
      var self = this;

      self.$filters.on('click', '.filter', function(e) {
        e.preventDefault();

        var $button = $(this);

        $button.hasClass('active') ?
          $button.removeClass('active') :
          $button.addClass('active').siblings('.filter').removeClass('active');

        self.parseFilters();
      });


      self.$reset.on('click', function(e) {
        e.preventDefault();

        self.$filters.find('.filter').removeClass('active');

        self.parseFilters();
      });
    },

    parseFilters: function() {
      var self = this;


      for (var i = 0, group; group = self.groups[i]; i++) {
        group.active = group.$buttons.filter('.active').attr('data-filter') || '';
      }

      self.concatenate();
    },


    concatenate: function() {
      var self = this;

      self.outputString = '';

      for (var i = 0, group; group = self.groups[i]; i++) {
        self.outputString += group.active;
      }


      !self.outputString.length && (self.outputString = 'all');


      if (self.$container.mixItUp('isLoaded')) {
        self.$container.mixItUp('filter', self.outputString);
      }
    }
  };


  $(function() {


    buttonFilter.init();


    $('#container_grille').mixItUp({
      controls: {
        enable: false
      },
      animation: {
        duration: 200,
        animateResizeContainer: false,
        effects: 'fade translateY(-10%) stagger(12ms)'
      }

    });
  });

  var inputText;
  var $matching = $();

  // Delay function
  var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $("#search").keyup(function() {
    // Delay function invoked to make sure user stopped typing
    delay(function() {
      inputText = $("#search").val().toLowerCase();

      // Check to see if search field is empty
      if ((inputText.length) > 0) {
        $('.mix').each(function() {
          $this = $("this");

          // add item to be filtered out if search text matches items inside the title
          if ($(this).data("tags") && $(this).data("tags").match(inputText)) {
            $matching = $matching.add(this);
          } else {
            // removes any previously matched item
            $matching = $matching.not(this);
          }
        });
        $("#container_grille").mixItUp('filter', $matching);
      } else {
        // resets the filter to show all item if search is empty
        $("#").mixItUp('filter', 'all');
      }
    }, 200);
  });


});
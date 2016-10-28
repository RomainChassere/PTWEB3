$( document ).ready(function() {
  var block = $('nav');
  var navPosition = block.offset().top;
  var fixed = false;

  $(document).on('scroll', function() {
    if($(window).scrollTop() > navPosition) {
      fixed = true;
      if (fixed == true){
        block.addClass('fixed');
        $('#panier').hide(500);
        console.log('class');
        fixed = false;
      }
    } else {
      block.removeClass('fixed');
      $('#panier').show(400);
      console.log('class');
    }
  });

<<<<<<< HEAD
  $('#like').on("mouseover", function() {
    console.log('OUI');
    $('#like').addClass('animated pulse');
    $('#pouce').addClass('white');
    $('#pouce').addClass('blue'); 
  });

  $('#fa-upload').on("mouseover", function() {
    console.log('OUI200');
    $('#fa-upload').addClass('animated bounce');
  });

=======
  /* $('#like').on("mouseover", function() {
    console.log('OUI');
    $('#like').addClass('animated pulse');
    $('#pouce').addClass('white');
    $('#pouce').addClass('blue');
  }); hovicon effect-1 sub-a*/

  $('#fa-upload').on("mouseover", function() {
    $('#fa-upload').addClass('animated bounce');
  });

  $('#white_cart').on("mouseover", function() {
    $(this).addClass('animated tada');
  });


>>>>>>> origin/master
  });

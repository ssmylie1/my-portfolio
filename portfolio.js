<script type="text/javascript">
  $(document).ready(function() {

  $('.header a').click(function(e) {
    e.preventDefault();
    var curInx = this.hash;
    var target = $(curInx);
    var targetOffset = target.offset().top;

    $("body").animate({scrollTop:targetOffset}, 400, function() {
      location.hash = curInx;
    });


  });


  $(window).scroll(function() {
      var sticky = function(index) {
        $('li').removeClass('active'), $('.' + index + '-nav').addClass('active');
      };
    $('#container > div').each(function(){
      var cur = $(this);
      var curTop = cur.offset().top;
      var curInx = cur.attr("id");
      var sidebarTop = $('.'+curInx+'-nav').offset().top +60;
        if (sidebarTop > curTop) {
          sticky(curInx);
        }
    });
  });

  });


</script> 
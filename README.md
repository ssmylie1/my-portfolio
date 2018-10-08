<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width">
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
  <link href='https://fonts.googleapis.com/css?family=Lato:400,900|Bitter' rel='stylesheet' type='text/css'>

  <title>My Online Portfolio</title>

  <style type="text/css">

/* Beginning of CSS */

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Bitter', serif;
    margin:0px auto;
  }

  .image {
    background: #cecece;
    display: inline-block;
    width: auto;
    height: auto;
    width: 80%;
    height: 250px;
    margin: 20px auto;
    opacity: .8;
    cursor: pointer;
  }

  .image:hover {
    opacity: 1
  }

  img {
    width: 100%;
    margin: auto;
    display: block;
  }

  .header li, a, .button, h3, .image{
      transition: all 0.10s ease-in-out;
    -webkit-transition: all 0.10s ease-in-out;
    -moz-transition: all 0.10s ease-in-out;
    -o-transition: all 0.10s ease-in-out;
  }

  .header {
    width: 100%;
    top:0px;
    background:#fff;
    position: fixed;
    height: 40px;
    z-index: 9999;
    text-align: center;
    border-bottom: 1px solid #f5f1ef;
    display: inline-block;
  }

  .header ul {
    margin: auto;
    display: inline-block;
    padding: 0px;
  }

  .header li {
    float: left;
    padding: 10px 20px 10px 0px;
    cursor: pointer;
    list-style-type: none;
    height:40px;
  }

  .header li h3 {
    border-left: 1px solid #cecece;
    padding-left: 20px;
  }

  .header li:first-child h3{
    border-left:0px;
  }

  .header li.active a {
    color: rgba(0,0,0,.8);
  }

  .header li a {
    color:#B2AB9E;
  }

  a {
    color:rgba(0,0,0,.8);
    text-decoration: none;
  }

  a:hover {
    color:rgba(0,0,0,.8);
  }

  #container {
    color: #333;
    width: 100%;
    margin:0px;
    font-weight: 200;
    text-align: center;
  }

  #container .inner {
    max-width: 960px;
    width: 100%;
    margin:10px auto;
    padding:20px 0px;
    display: inline-block;
  }

  #container .inner.double {
    float: left;
    width: 50%;
  }

  #container .inner.triple {
    float: left;
    width: 33%;
  }

  .inner.triple p {
    max-width: 300px;
    margin: auto;
    width: 100%;
    height:50px
  }

  h1 {
    font-size: 80px;
    color:#565656;
    font-weight: 200;
    margin: 50px 0px 20px
  }

  h2 {
    font-size: 40px;
    color:#565656;
    margin:50px 0px 0px 0px;
    font-weight: 200;
  }

  h3 {
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: .1em;
    font-weight: bold;
    margin:0px;
  }

  p {
    font-size: 15px;
    color: rgba(0,0,0,.8);
    font-family: "Lato", sans-serif;
    letter-spacing: .02em;
    font-weight: 300;
    line-height: 1.5em
  }

  #container > div {
    padding-top:10px;
    display: inline-block;
    width: 100%
  }

  .section {
    border-bottom: 1px solid #cecece;
    padding: 50px 0px;
    display: inline-block;
    width: 100%;
    min-height: 400px
  }

  .footer .section{
    margin: 0px;
     border:0px;
  }

  .footer {
    background: #222;
  }

  .footer p {
    color: #fff
  }

  #contact .section{
    min-height: 600px
  }

/* End of regular CSS */



/* Beginning of CSS for mobile */

  @media screen and (max-width: 480px){ 
    
    p {
      margin-bottom: 0px
    }

    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 30px
    }

    header li {
      padding:10px 8px 10px 0px;
    }

    header li h3 {
      padding-left:8px;
    }

    .image {
      width: 100%;
      max-width: 300px
    }

    #container .inner.double, #container .inner.triple {
      max-width: 300px;
      width: 100%;
      float: none;
      margin: 30px auto 0px;
    }

    #home p {
      padding:0px 50px;
    }

    .inner.triple p {
      height: auto
    }

  }

  /* End of CSS for mobile*/

  </style>




<body> <!-- start of body -->


  <div class="header"> <!-- beginning of header -->
    <ul>
      <li class="home-nav active"><h3><a href="#home">My Name</a></h3></li>
      <li class="work-nav"><h3><a href="#work">Work</a></h3></li>
      <li class="contact-nav"><h3><a href="#contact">Contact</a></h3></li>
    </ul>
  </div> <!-- end of header -->


  <div id="container"> <!-- beginning of container -->

    <div id="home"> <!-- beginning of home -->
      <div class="section"> <!-- beginning of section -->

        <div class="inner">
          <h1>My Online Portfolio</h1>
          <p>I'm So and So. Here's my portfolio.</p>
          <div class="image"><img src=""></div>
        </div>

      </div> <!-- end of section -->
    </div> <!-- end of home -->


    <div id="work"> <!-- beginning of work -->

      <div class="section">
        <h2>2 Column Section</h2>
        
        <div class="inner double">
          <p>Title</p>
          <div class="image"><img src=""></div>
        </div>

        <div class="inner double">
          <p>Title</p>
          <div class="image"><img src=""></div>
        </div>

      </div> <!-- end of section -->


      <div class="section">
        <h2>3 Column Section</h2>
        
        <div class="inner triple">
          <p>Title</p>
          <div class="image"><img src=""></div>
        </div>

        <div class="inner triple">
          <p>Title</p>
          <div class="image"><img src=""></div>
        </div>

        <div class="inner triple">
          <p>Title</p>
          <div class="image"><img src=""></div>
        </div>

      </div> <!-- end of section -->

    </div> <!-- end of work -->


    <div id="contact"> <!-- beginning of contact -->
      <div class="section">
        <h2>Contact Me!</h2>
        <div class="inner"><p>Email me here.</p></div>
      </div>
    </div> <!-- end of contact -->


    <div class="footer"> <!-- beginning of footer -->
      <div class="section">
        <p>Some final text</p>
      </div>
    </div> <!-- end of footer -->


  </div> <!-- end of container -->





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

</body> <!-- end of body -->
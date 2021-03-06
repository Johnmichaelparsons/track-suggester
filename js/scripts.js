$(document).ready(function() {

  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();                                               // This is what I've been using for smooth scroll, I understand this is a bit overkill for one link.
          $('html, body').animate({
            scrollTop: target.offset().top                                      // Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
          }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            }
          });
        }
      }
    });
  $("form").submit(function(event) {
    var rubytotal = 0;
    var phptotal = 0;
    var csharptotal = 0;
    $(".ruby").hide();
    $(".php").hide();
    $(".csharp").hide();
    $('#output').hide();
    event.preventDefault();
    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();
    var answer4 = $("input:radio[name=question4]:checked").val();
    var answer5 = $("input:radio[name=question5]:checked").val();
    if (answer1 === "ruby1") {
      $(rubytotal = (parseInt(rubytotal) + 1));
    }
    if (answer1 === "php1") {
      $(phptotal = (parseInt(phptotal) + 1));
    }
    if (answer1 === "csharp1") {
      $(csharptotal = (parseInt(csharptotal) + 1));
    }

    if (answer2 === "ruby2") {
      $(rubytotal = (parseInt(rubytotal) + 1));
    }
    if (answer2 === "php2") {
      $(phptotal = (parseInt(phptotal) + 1));
    }
    if (answer2 === "csharp2") {
      $(csharptotal = (parseInt(csharptotal) + 1));
    }

    if (answer3 === "ruby3") {
      $(rubytotal = (parseInt(rubytotal) + 1));
    }
    if (answer3 === "php3") {
      $(phptotal = (parseInt(phptotal) + 1));
    }
    if (answer3 === "csharp3") {
      $(csharptotal = (parseInt(csharptotal) + 1));
    }

    if (answer4 === "ruby4") {
      $(rubytotal = (parseInt(rubytotal) + 1));
    }
    if (answer4 === "php4") {
      $(phptotal = (parseInt(phptotal) + 1));
    }
    if (answer4 === "csharp4") {
      $(csharptotal = (parseInt(csharptotal) + 1));
    }

    if (answer5 === "ruby5") {
      $(rubytotal = (parseInt(rubytotal) + 10));
    }
    if (answer5 === "php5") {
      $(phptotal = (parseInt(phptotal) + 10));
    }
    if (answer5 === "csharp5") {
      $(csharptotal = (parseInt(csharptotal) + 10));
    }
    if (rubytotal > phptotal && rubytotal > csharptotal) {
      $('.ruby').toggle();
    }
    if (phptotal > csharptotal && phptotal > rubytotal) {
      $('.php').toggle();
    }
    if (csharptotal > rubytotal && csharptotal > phptotal) {
      $('.csharp').toggle();
    }
  });
});




//  For improvements on functionality later.
//
//
// if (rubytotal === phptotal && rubytotal ===  csharptotal){
//   $('#output').toggle();
//   $("#output").text("It looks like you are undecided! Consult Sorting Hat or try the quiz again.");
// }
// if (rubytotal === phptotal && rubytotal > csharptotal){
//   $('#output').toggle();
//   $("#output").text("It looks like you you tied on Ruby/Rails and PHP/Drupal! ");
// }
// if (rubytotal === csharptotal && rubytotal > phptotal){
//   $('#output').toggle();
//   $("#output").text("It looks like you you tied on Ruby/Rails and C#! ");
// }
// if (phptotal === csharptotal && csharptotal > rubytotal){
//   $('#output').toggle();
//   $("#output").text("It looks like you you tied on PHP/Drupal and C#/.Net! ");
// }
// console.log(csharptotal + "csharp");
// console.log(rubytotal + "ruby");       Debugging
// console.log(phptotal + "php");

$('.txt').html(function(i, html) {  //this functions is what it gives every letter a different color in the "about me" section 
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

$( document ).ready(function() { //with this function, a tooltip or "hover box" is shown with information about the project being hovered over (portfolio or project section)
  $('[data-toggle="tooltip"]').tooltip();  


  $('.thumbnail').hover(
    function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
          },
          function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
          }
          ); 

jQuery(document.links).filter(function() { //this function gives all the links within the document the attribute "_blank", which allows to open it in a new window
  return this.hostname != window.location.hostname; 
}) .attr('target', '_blank'); 

});

$('.navbar-toggler').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.navbar-minimal').toggleClass('open');
  })
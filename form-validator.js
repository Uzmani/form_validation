// shorthand for $(document).ready();

$(function(){
  $('button').on('click', function(event) {
  
    event.preventDefault();

    $('#errors li').remove();
     var email = $('input[name="email"]').val();
     var password = $('input[name="password"]').val();
     
    if ((/(.+)@(.+){2,}\.(.+){2,}/).test(email) === false) {
      $('#errors').append("<li> Must be a valid email </li>");
    } 
    
    if ( (/[\d]/).test(password) === false) {
      $('#errors').append("<li> Password must have at least 1 numeric character </li>");
    } 

    if ( (/[A-Z]/).test(password) === false) {
      $('#errors').append("<li> Password must have at least 1 uppercase letter </li>");      
    }
    if ( (/.{8,}/).test(password) === false) {
      $('#errors').append("<li> Password must have at least 8 characters </li>");      
    }
    

  });

});
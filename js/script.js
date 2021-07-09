$(document).ready(function() {
    //Ripples.
    $("#header,.info").ripples({
        dropRadius:25,
        perturbance:0.6,
        
      });
});
//magnific popup 
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image' ,
  // other options
  gallery:{
    enabled:true,
  }
});
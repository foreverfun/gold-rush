
$(document).on('ready', function() {
   $('.container').on('click', function(e){
   		//console.log(e.pageX);
   		//console.log(e.pageY);
      
    if (e.target.nodeName !== "BUTTON") {
      // add button to the map
      var addBtn = 
        $('<div>')
           .addClass('marker')
           .css ({
             "top":e.pageY,
             "left":e.pageX
           })
        .append("<button type='button' class='btn'>marker</button>");
        $('.container').append(addBtn);
    }
     $('.btn').on('click', function() {
      $(this).parent().remove();
   });
      
      
  			
   });
  
});
$('#clock').countdown('2021/1/1',function(event){
  var $this =  $(this).html(event.strftime('' +'%w weeks %d days %H hours :%M min:%S sec'));
});
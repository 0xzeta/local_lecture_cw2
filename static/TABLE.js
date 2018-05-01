//hello.js
$(function(){
	$('#schedule').css('border','20px solid black');
	$('tr.t1:first-child').css('background','grey');
});

$(function(){
	$('#key th').css('color','red');
	$('#key').css('border','solid');
});

$(function(){
	$('table td:not(:empty)').mouseover(function(){
		$(this).css('background','red');
	});

	$('table td').mouseout(function(){
		$(this).css('background','inherit');
	});

//hide key//
	// $('body').prepend($('<div/>',
	// {
	// 	text:'Hide key',
	// 	css:{color:'blue', cursor:'pointer'},
	// 	click:function(){
	// 		$('#key').toggle();
	// 	}
	// }));




	$('body').prepend($('<div/>',
	{
		text:'Hide key',
		css:{color:'blue', cursor:'pointer'},
		click:function(){
	if ($('#key:visible').length==1){
		$('#key').fadeOut('slow');
		$(this).text('Show Key');
	}else{
		$('#key').fadeIn('slow');
		$(this).text('Hide Key');
	}
}}));
});

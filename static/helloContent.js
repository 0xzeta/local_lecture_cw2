//hello.js
$(document).ready(function(){
	alert("Hello World");
});

$(function(){
	var msg = $('<div>Hello World</div>');
	$('body').append(msg);
});

$(function(){
	for(var i = 0; i <100; i++){
		var msg = $('<div>Hello World</div>');
		msg.css('font-size',i);
		$('body').append(msg);
	}
});

///new img added///
$(function(){
	var gb = $('<div/>');
	gb.append($('<div/>',{text:'Great Britain'}));
	gb.append($('<img/>',{src:'file:///C:/Users/X541UJ/cw2/static/gb.gif'}));
	$('#countries').append(gb);
	$('#countries').attr("id","gid");
});

$(function(){
	var elem = $('<div/>');
	elem.html('An example element');
	elem.css('border','solid blue');
	$('body').append(elem);
})

//css funditon added//
$(function(){
	$('#fr img').css({
		background: "yellow",
		border:"3px black solid",
		width:"200px"
	});
});

$(function(){
	$('#fi img').css({
		background: "yellow",
		border:"3px red solid",
		width:"200px"
	});
});

$(function(){
	$('#gid img').css({
		background: "yellow",
		border:"3px red solid",
		width:"200px"
	});
});
//end css funditon added//




$(function(){
	$('p:first-child').css('border','solid');
	$('p:nth-child').css('border','solid');
	$('p:eq(1)').css('border','solid');
	$('p:last').css('border','solid');
});

$(function(){
	$('body').append($('<div>Hide Key</div>'));
});

$(function(){
	$('body').prepend($('<div>',{text:'Hide Key',css:{color:'blue'}}));
});
$(function(){
	$('#key th').css('color','red');
	$('#key').css('border','solid');
});

$(function(){
	var ca={
		cname:"A J CUMMING",
		caddress:{
			street:"10 Colinton Rd",
			town:"Edinburgh",
			post_code:"EH14 5DT"
		},
		transaction:[
			{whn:"2014-01-11",nar:"Cash Withdrawal",amt:-100},
			{whn:"2014-01-11",nar:"BUS FARE",amt:-35},
		]
	};
	alert(ca.transaction[1].nar);
});
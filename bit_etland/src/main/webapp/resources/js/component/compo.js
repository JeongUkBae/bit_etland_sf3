var $$ = $$ ||{};
$$ ={
		div: x=>{
			return $('<div id='+x.id+'></div>');
		},
		a : x=>{
			return $('<a href="'+x.url+'" id='+x.id+'/>');
		},
		li : x=>{
			return $('<li id='+x.id+'>');
		},
		hs : x=>{
			return $('<h'+x.size+' id='+x.id+'/>');
		},
		
		p : x=>{
			return $('<p></p>');
		},
		
		form : x=>{
			return $('<form id="'+x.id+'"><form/>')
		},
		label : x =>{
			return $('<label for='+x.name+'/>')
		},
		input : x=>{
			return $('<input type='+x.type+' id='+x.id+'></input>')
		},
		span : x=>{
			return $('<span id='+x.id+'></span> ')
		},
		small : x=>{
			return $('<small>'+x.name+'</small>')
		},
		 nav : ()=>{
			 $('#nav').children().eq(0).html($$.a({id:'seq', url:'#'}).text('수열'))
			 $('#nav').children().eq(1).html($$.a({id:'math', url:'#'}).text('수학'))
			 $('#nav').children().eq(2).html($$.a({id:'sort', url:'#'}).text('배열'))
			 $('#nav').children().eq(3).html($$.a({id:'coll', url:'#'}).text('자료구조'))
			 $('#nav').append($$.li({id:'', value:''}))
			 		  	.children().eq(4).html($$.a({id:'app', url:'#'}).text('응용'));
		},
		
}
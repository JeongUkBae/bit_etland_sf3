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
			return $('<h'+x.size+'/>');
		}

}
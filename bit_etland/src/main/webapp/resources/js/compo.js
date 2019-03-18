var $$ = $$ ||{};
$$ ={
		div: x=>{
			return '<div id='+x.id+' class='+x.clazz+'></div>';
		},
		a : x=>{
			return '<a href="#" id='+x.id+' class='+x.clazz+'>'+x.value+'</a>';
		},
		li : x=>{
			return '<li href="#" id='+x.id+' class='+x.clazz+'>';
		}

}
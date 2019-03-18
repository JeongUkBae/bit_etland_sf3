var algo = algo || {};
algo = (()=>{
	let init =x=>{

		algo.$.init(x);
		
		
	};
	let onCreate =()=>{
		
		setContentView();
	};
	let setContentView =()=>{
		$.getScript($.js()+'/compo.js',()=>{
		//	$('').html($$.div({id:'nav',clazz:'nav nav-pills nav-stacked'}))
		//	 $('li').html($$.li())
			 $('#nav').children().eq(0).html($$.a({id:'seq', value:'수열'}))
			 $('#nav').children().eq(1).html($$.a({id:'math', value:'수학'}))
			 $('#nav').children().eq(2).html($$.a({id:'sort', value:'정렬'}))
			 $('#nav').children().eq(3).html($$.a({id:'arr', value:'배열'}))
			 $('#nav').append($$.li({id:'', value:''}))
			 		  	.children().eq(4).html($$.a({id:'app', value:'응용'}));
		})
	};
	return {init:init, onCreate:onCreate};
})();


algo.$= {
		init : (x)=>{

			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				algo.onCreate();
			})
		}
	};


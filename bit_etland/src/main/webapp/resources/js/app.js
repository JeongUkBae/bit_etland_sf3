var app = app || {};
app = (()=>{
	var init =x=>{
		app.session.init(x);
		onCreate();
	};
	var onCreate =()=>{
		
		setContentView();
	};
	var setContentView =()=>{
		// $('#top') navibar  content intro2 about parllax service works parllax2
		// team contact bottom footer
		 $('#top').empty().text('탑');
		 $('#navibar').empty().text('네비바');
		 $('#content').empty().text('콘텐츠');
		 $('#intro2').empty().text('인트로');
		 $('#about').empty().text('어바웃');
		 $('#parllax').empty().text('파렉');
		 $('#service').empty().text('서비스');
		 $('#works').empty().text('워크');
		 $('#parllax2').empty().text('바렉2');
		 $('#team').empty().text('팀');
		 $('#contact').empty().text('콘텐트');
		 $('#bottom').empty().text('보텀');
		 $('#footer').empty().text('푸터');
		 
		 $('#top').html('<h1>탑</h1>');
		 $('#navibar').html('<h1>네비바</h1>');
		 $('#content').html('<h1>콘텐츠</h1>');
		 $('#intro2').html('<h1>인트로</h1>');
		 $('#about').html('<h1>어바웃</h1>');
		 $('#parllax').html('<h1>파렉</h1>');
		 $('#service').html('<h1>서비스</h1>');
		 $('#works').html('<h1>워크</h1>');
		 $('#parllax2').html('<h1>바렉2</h1>');
		 $('#team').html('<h1>팀</h1>');
		 $('#contact').html('<h1>콘텐트</h1>');
		 $('#bottom').html('<h1>보텀</h1>');
		 $('#footer').html('<h1>푸터</h1>');
		 

	};
	return {init:init};
})();

app.session =(()=>{
	var init =x=>{
		onCreate(x);
	};
	var onCreate =x=>{
		sessionStorage.setItem('ctx',x);
		sessionStorage.setItem('img',x+'/resources/img');
		sessionStorage.setItem('css',x+'/resources/css');
		sessionStorage.setItem('js',x+'/resources/js');
	};
	return {init:init}
})();

app.$ = {
		ctx:()=>{return sessionStorage.getItem('ctx')},
		img:()=>{return sessionStorage.getItem('img')},
		css:()=>{return sessionStorage.getItem('css')},
		js:()=>{return sessionStorage.getItem('js')}
	};
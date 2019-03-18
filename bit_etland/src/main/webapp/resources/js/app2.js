var app = app || {};
app.path = (()=>{
	var init = (x)=>{
		app.session.init(x);
		onCreate();
	};
	var onCreate =()=>{
		setContextView();
	};
	var setContextView=()=>{};
	return {init:init};
})();

app.session =(()=>{
	var init =(x)=>{
		onCreate(x);
	};
	var onCreate =(x)=>{
		sessionStorage.setItem('ctx',x);
	};
	return {init:init};
})();

app.$ ={
		ctx : ()=>{return sessionStorage.getItem('ctx')}
};
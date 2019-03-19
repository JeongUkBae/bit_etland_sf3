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
			 $('#nav').children().eq(0).html($$.a({id:'seq', url:'#'}).text('수열'))
			 $('#nav').children().eq(1).html($$.a({id:'math', url:'#'}).text('수학'))
			 $('#nav').children().eq(2).html($$.a({id:'sort', url:'#'}).text('배열'))
			 $('#nav').children().eq(3).html($$.a({id:'coll', url:'#'}).text('자료구조'))
			 $('#nav').append($$.li({id:'', value:''}))
			 		  	.children().eq(4).html($$.a({id:'app', url:'#'}).text('응용'));
			 //수열 1 - 1+2+3+4+…+100까지의 합계 (do~while) 
			 $('#hs').children('h2').eq(0).html($$.hs({size:'2'})
					 		.text('등차 수열의 합계'));
			 $('#hs').children('h2').eq(1).html($$.hs({size:'2'})
					 		.text('등비 수열의 합계'));
			 $('p#result_1').html($$.form({id: 'form'}));
			 inputForm();
			 $('p#result_2').html($$.form({id: 'form'}));
			 inputForm();
			 $('#ch_h').html($$.span({id:'bi_btn_1'}).addClass('label label-danger cursor').text('결과'))
			 $('#ch_h').append($$.span({id:'bi_btn_2'}).addClass('label label-primary cursor').text('리셋'))
			 //html($$.span({id:'bi_btn_1'}).addClass('label label-danger').text('결과'))
			// $('span#bi_btn_1').append($$.span({id:'bi_btn_2'}).addClass('label label-primary').text('리셋'))
			 
			 $('#answer_btn_1').text('결과').addClass('cursor').click(()=>{
				 $.ajax({
					url : $.ctx()+'/algo/seq/1',
					type : 'post',
					data : JSON.stringify({start:$('#start').val(), end:$('#end').val(),diff:$('#diff').val()}),
					dateType : 'json',
					contentType : "application/json; charset=utf-8",
					success : d=>{
						alert('넘어온 문제번호:'+d.result);
						$("#hs").children('p').eq(0).html($$.p().text('답은 :: '+d.result));
					},
					error : e=>{
						alert('AJAX 실패');
					}
				 });
			 });
			 
			 $('#answer_btn_2').text('리셋').addClass('cursor').click(()=>{
				 inputForm();
			 });
			 
			 
			 
			 
/*			 $('#answer_btn_2').text('Reset').addClass('cursor')
			 $("#hs").children('p').eq(0).html($$.div({id:'content_1'}));
			 $('#content_1').append($$.form({id:'reset_form'}).append($$.label({name:''})).text('새로운 값')
					 .append('</br>')
					 	.append($$.input({type:'text',id:'start_num'})).append('</br>')
					 	.append($$.input({type:'text',id:'end_num'})).append('</br>')
					 	.append($$.input({type:'text',id:'diff_num'})).append('</br>') )*/
		 		
		})
	};
	let inputForm =()=>{
		$('p#result_1').html($$.form({id: 'form'}));
		 	$('form#form').html($$.div({id: 'div_1'}).addClass('form-group'));
			$('div#div_1').html($$.label({name: 'lab_1'}).text('시작값 :'))
						.append($$.input({type:'text', id: 'start'}));
			$('form#form').append($$.div({id: 'div_2'}).addClass('form-group'));
			$('div#div_2').html($$.label({name: 'lab_2'}).text('한계값 :'))
						.append($$.input({type:'text', id: 'end'}));
			$('form#form').append($$.div({id: 'div_3'}).addClass('form-group'));	
			$('div#div_3').html($$.label({name: 'lab_3'}).text('공차 :'))
						.append($$.input({type:'text', id: 'diff'}));
			
	}
	let ajaxResult =()=>{

	}
	
	
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


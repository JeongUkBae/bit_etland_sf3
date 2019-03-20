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
			 nav();
			 remove();
			 questions('등차수열');

			 $('#hs').prepend($$.div({id:'right_start'}));
			 $('#leave_a_comment').before('<div id="right_end"/>')
			 $('#right_start').nextUntil('#right_end').wrapAll('<div id="new_div"></div>');
			 var str = $('#new_div').html();
			 $('#new_div').remove();
			 $('#right_end').remove();
			 alert(str);
			 let arr =[
				 {id:'a', val:'등차수열'},
				 {id:'b', val:'등비수열'},
				 {id:'c', val:'팩토리수열'},
				 {id:'d', val:'파보나치수열'}
			 ];
			 $.each(arr,(i,j)=>{
				 $('#right_start').append(str);
				 $('#question').attr('id','question_'+j.id);
				 $('#question_'+j.id).text(j.val);
				  alert(j.id+' , '+j.val);
				  
			 });
			 
		 		
		})
	};

	let remove=()=>{
		 $('#rm_start').before('<div id="del_start"/>')
		 $('#rm_end').after('<div id="del_end"/>')
		 $('#del_start').nextUntil('#del_end').wrap('del').remove();
	}
	
	let nav =()=>{
		 $('#nav').children().eq(0).html($$.a({id:'seq', url:'#'}).text('수열'))
		 $('#nav').children().eq(1).html($$.a({id:'math', url:'#'}).text('수학'))
		 $('#nav').children().eq(2).html($$.a({id:'sort', url:'#'}).text('배열'))
		 $('#nav').children().eq(3).html($$.a({id:'coll', url:'#'}).text('자료구조'))
		 $('#nav').append($$.li({id:'', value:''}))
		 		  	.children().eq(4).html($$.a({id:'app', url:'#'}).text('응용'));
	}
	
	let inputForm =()=>{
		$('p#result_1').html($$.form({id:'form'}));
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

	let questions =(x)=>{
		 $('#question').text(x);
		 inputForm();
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


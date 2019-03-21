function sequence(){
	_sequence.nav();
	_sequence.remove();
	_sequence.questions('등차수열');
	
	
		 $('#hs').prepend($$.div({id:'right_start'}));
		 $('#leave_a_comment').before('<div id="right_end"/>')
		 $('#right_start').nextUntil('#right_end').wrapAll('<div id="new_div"></div>');
		 let str = $('#new_div').html();
		 $('#new_div').remove();
		 $('#right_end').remove();
		 alert(str);
		 let arr =[
			 {id:'a', val:'등차수열의 합계', index:'1'},
			 {id:'b', val:'등비수열의 합계', index:'2'},
			 {id:'c', val:'팩토리수열의 합계', index:'3'},
			 {id:'d', val:'파보나치수열의 합계', index:'4'}
		 ];
		 $.each(arr,(i,j)=>{
			 
			 $(str).appendTo('#right_start')
			 $('#question').attr('id','question_'+j.id);
			 $('#question_'+j.id).text(j.val);
			 $('.buttons').empty();
			_sequence.inputForm(j); 
			 $('<span class="label label-danger"></span>')
			 	.text('결과').addClass('cursor').appendTo('.buttons')
			 	.click(()=>{
			 		let data = {start : $('#start').val(),
			 					end : $('#end').val(),
			 					diff : $('#diff').val()};
			 		alert('일단 결과 클릭됨 '+$('#start').val());
					 $.ajax({
						url : $.ctx()+'/algo/seq/1',
						type : 'post',
						data : JSON.stringify(data),
						dateType : 'json',
						contentType : "application/json",
						success : d=>{
							alert('넘어온 문제번호:'+d.result);
							$('#result').html($$.hs({id: 'h_res',size: '2' })
									.text('결과값: '+d.result));
							
						},
						error : e=>{
							alert('AJAX 실패');
						}
					 });
					 
			 	}); 

			 $('<span class="label label-warning" style="margin-left: 20px"></span>')
				.text('리셋')
				.addClass('cursor')
				.appendTo('.buttons')
				.click(()=>{
					$('.form').remove();
					_sequence.inputForm(j);
					//_sequence.questions();
					//_sequence.inputForm();
				 });
		 });
	 
	} // call back
	


var _sequence = {

		 remove : ()=>{
			 $('#rm_start').before('<div id="del_start"/>')
			 $('#rm_end').after('<div id="del_end"/>')
			 $('#del_start').nextUntil('#del_end').remove();
		},
		
		 nav : ()=>{
			 $('#nav').children().eq(0).html($$.a({id:'seq', url:'#'}).text('수열'))
			 $('#nav').children().eq(1).html($$.a({id:'math', url:'#'}).text('수학'))
			 $('#nav').children().eq(2).html($$.a({id:'sort', url:'#'}).text('배열'))
			 $('#nav').children().eq(3).html($$.a({id:'coll', url:'#'}).text('자료구조'))
			 $('#nav').append($$.li({id:'', value:''}))
			 		  	.children().eq(4).html($$.a({id:'app', url:'#'}).text('응용'));
		},
		
		 inputForm : (x)=>{
			$('p#result').html($$.form({id:'form_'+x.id}));
			 	$('form#form_'+x.id).html($$.div({id: 'div_1'}).addClass('form-group'));
				$('div#div_1').html($$.label({name: 'lab_1'}).text('시작값 :'))
							.append($$.input({type:'text', id: 'start'}));
				$('form#form_'+x.id).append($$.div({id: 'div_2'}).addClass('form-group'));
				$('div#div_2').html($$.label({name: 'lab_2'}).text('한계값 :'))
							.append($$.input({type:'text', id: 'end'}));
				$('form#form_'+x.id).append($$.div({id: 'div_3'}).addClass('form-group'));	
				$('div#div_3').html($$.label({name: 'lab_3'}).text('공차 :'))
							.append($$.input({type:'text', id: 'diff'}));
				
		},

		 questions : (x)=>{
			 $('#question').text(x);
			 	/*_sequence.inputForm();*/
			/* $('#reset_btn').text('리셋').addClass('cursor').click(()=>{
				 _sequence.inputForm();
			 });*/
		}
		
		
}; //end
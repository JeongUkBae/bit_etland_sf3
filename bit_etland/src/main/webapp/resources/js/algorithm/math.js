function math(){
	_math.all_remove();
	$('#new_div').remove();
	 $('#right_content').prepend($$.div({id:'right_start'}));
	 $('#leave_a_comment').before('<div id="right_end"/>')
	 $('#right_start').nextUntil('#right_end').wrapAll('<div id="new_div"></div>');
	 let str = $('#new_div').html();
	 $('#new_div').remove();
	 $('#right_end').remove();
	 alert(str);
	 let arr =[
		 {id:'con', val:'1. Count 알고리즘'},
		 {id:'mni', val:'2. 최댓값과 최솟값'},
		 {id:'sum', val:'3. 합계와 평균'},
		 {id:'sosu', val:'4. 소수 판별'}
	 ];
	 $.each(arr,(i,j)=>{
		 let GID = Math.floor(Math.random()*10000) +1; // 5656
		 let _GID = '#'+GID;
		 $('<div id="'+GID+'">'+str+'</div>').appendTo('#right_start');
		 
		 let POST = GID+"_POST";
		 let _POST = '#'+POST;
		 $(_GID+' h4').attr('id',POST);
		 
		 let TITLE = GID+"_TITLE";
		 let _TITLE = '#'+TITLE;
		 $(_GID+' h2').attr('id',TITLE);
		 
		 let DATE = GID+'_DATE';
		 let _DATE = '#'+DATE;
		 $(_TITLE).siblings('h5').eq(0).attr('id',DATE);
		 
		 let BTN = GID+'_BTN';
		 let _BTN = '#'+BTN;
		 $(_TITLE).siblings('h5').eq(1).attr('id',BTN);
		 
		 let INPUT = GID+'_INPUT';
		 let _INPUT = '#'+INPUT;
		 $(_GID+' p').attr('id',INPUT);
		 $(_TITLE).text(j.val);
		 $(_BTN).empty();
		 $(_INPUT).empty();
		 let x=[];
		 switch(arr,j.id){
		 case 'ari' :  x = [{id:GID+'_start', txt:'시작값'},
		 	  {id:GID+'_end', txt:'한계값'},
		 	  {id:GID+'_diff', txt:'공차'}];
		 	break;
		 case 'geo' :  x = [{id:GID+'_start', txt:'시작값'},
		 	  {id:GID+'_end', txt:'한계값'},
		 	  {id:GID+'_diff', txt:'공비'}];
		 	break;
		 case 'fac' :  x = [{id:GID+'_start', txt:'시작값'},
		 	  {id:GID+'_end', txt:'한계값'},
		 	  {id:GID+'_diff', txt:'수열'}];
		 	break;
		 case 'fibo' :  x = [{id:GID+'_start', txt:'시작값'},
		 	  {id:GID+'_end', txt:'한계값'},
		 	  {id:GID+'_diff', txt:'누승'}];
		 	break;
		 }
		
		 
		 $(_sequence.inputForm(x)).appendTo(_INPUT);
		 $('#del_start').remove();
		 $('#del_end').remove();
		 
		 
		 $('<span class="label label-danger"></span>')
		 	.text('결과').addClass('cursor').attr('name',j.id).appendTo(_BTN)
		 	.click(function(){
		 		let that = $(this).attr('name');
		 		let data = {start : $(_GID+'_start').val(),
		 					end : $(_GID+'_end').val(),
		 					diff : $(_GID+'_diff').val()};
		 		alert('일단 결과 클릭됨 '+$('start').val());
				 $.ajax({
					url : $.ctx()+'/algo/seq/'+that,
					type : 'post',
					data : JSON.stringify(data),
					dateType : 'json',
					contentType : "application/json",
					success : d=>{
						alert('넘어온 문제번호:'+d.result);
						$(_INPUT).empty();
						$('<h2>결과값 : '+d.result+'</h2>')
						.appendTo(_INPUT);
						
					},
					error : e=>{
						alert('AJAX 실패');
					}
				 });
				 
		 	}); 

		 $('<span class="label label-warning" style="margin-left: 20px"></span>')
			.text('리셋')
			.addClass('cursor')
			.appendTo(_BTN)
			.click(()=>{
				$(_INPUT).empty();
				$(_sequence.inputForm(x))
					.appendTo(_INPUT);
			 });
	 });
	 

 
} // call back

/*	 
		 $(str).appendTo('#right_start')
		 $('#question').attr('id','question_'+j.id);
		 $('#question_'+j.id).text(j.val);
		 $('.buttons').empty();
		_sequence.inputForm(j); */


var _math = {
		all_remove : ()=>{
			 $('#rm_start').before('<div id="del_start"/>')
			 $('#rm_end').after('<div id="del_end"/>')
			 $('#del_start').nextUntil('#del_end').remove();
			 $('#new_div').remove();
			 $('#right_end').remove();
		}
		
}
	 
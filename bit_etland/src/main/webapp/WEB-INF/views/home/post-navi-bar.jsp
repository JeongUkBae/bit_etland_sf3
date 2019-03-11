<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${css}/customer/navi_bar.css" />
<!-- <!-- <div class="navi-bar">
	<ul class="ul_navi_bar">
		<li><a href="home.do">홈</a></li>
		<li><a href="#">마이페이지</a>
		<li><a href="customer.do">주문</a>
		<li><a href="#">사원</a></li>
		<li><a href="#">상품</a>
		<li><a href="#">선박</a>
		<li><a href="#">공급업체</a>
	</ul>
<div class="navi-bar">
	<ul class="ul_navi_bar">
	<li><a href="home.do">홈</a></li>
	</ul> 
	
</div>
</div> -->


<div class="navi-bar" id="navi-bar">
	<div class = "row" id="ul_navi_bar">
	
		<div class="col-row-1 col-md-offset-3"> 
		<ul>
		<li><a href="home.do">홈</a> </li>
	
		<li><a id="category">카테고리</a></li>
	
		<li><a href="#">사원</a></li>
		
		<li><a href="#">주문</a></li>
		
		<li><a id="product" href="#">상품</a></li>
		
		<li><a href="#">선박</a></li>
		
		<li><a href="#">공급업체</a></li>
	</ul>
</div>
		
			 	<a  href="#" class="count active" >${user.customerName} 님 환영합니다.</a>
							

	</div>
</div>



<script>
$('#category').attr('style','cursor:pointer').click(function(){
	alert('카테고리클릭')
	location.assign('${ctx}/category.do?cmd=cate_list&page=list');
});

</script>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<link rel="stylesheet" 
	href="${css}/customer/list.css" />
<link rel="stylesheet" href="${css}/customer/navi_bar.css" />
<div class="grid-item" id="navi_bar">
	<jsp:include page="../home/post-navi-bar.jsp"/>
	</div>

 	<h1><font style="font-size: 30px">검색 결과</font></h1>

<div class="grid-item" id="content">
<div class="row">

  <div class="col-xs-6">
	  <img src="${img}/${image.imgName}.${image.imgExtention}" style="height: 200px; width: 100%;"/>
  </div>
  <div class="col-xs-6">
		<form id="form">
  				 아이디: <input type="text" name="customerID" value="${user.customerID}" readonly/> <br />
				 이름 : <input type="text" name="customerName" value="${user.customerName}" readonly/><br />
				생년월일 :<input type="text" name="ssn" value="${user.ssn}" readonly/> <br />
				성별 : 남 <br />
				전화번호 : <input type="text" name="phone" value="${user.phone}"/><br />
				우편번호 : <input type="text" name="postalcode" value="${user.postalcode}"/><br />
				지번주소 : <input type="text" name="city" value="${user.city}"/><br />
				상세주소 : <input type="text" name="address" value="${user.address}"/><br />
				임시비밀번호 : <input type="text" name="password" value="${user.password}"/><br />
			
			</form>
  <div class="grid-item">
		<span id="update_access" class="label label-primary">확인</span>
		
	</div>
	  <div class="grid-item">
		<span id="update_reset" class="label label-danger">취소</span>
	</div>
  </div>
  
</div>
</div>



<script>
$('#update_access').attr('style','cursor:pointer').click(function(){
	 var form = $('#form');
	 form.attr('action','${ctx}/customer/update');
	 form.attr('method','post');
	 form.submit();
});
$('#update_reset').attr('style','cursor:pointer').click(function(){
	 alert('취소 클릭!');
	location.assign('${ctx}/customer.do?cmd=cust_retrieve&page=detail&customerID=${cust.customerID}');
});
</script>
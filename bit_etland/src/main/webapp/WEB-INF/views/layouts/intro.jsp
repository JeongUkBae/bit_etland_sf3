<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!-- 
	@Author : 배정욱 gt1854@gmail.com
	@Date : 2019. 3. 12. 오전 9:53:23
	@File Name : intro.jsp
	@Desc: 인트로화면 - 로그인, 회원가입 
 -->
<jsp:include page="common.jsp" />
	<body>
<!-- 	<div id="wrapper" class="grid-full-container container-fluid">
	       <div class="grid-top">
			<div class="top"> -->
			<tiles:insertAttribute name="top" />
		<!-- 	</div> -->
			
			<!-- <div class="nav"> -->
			<tiles:insertAttribute name="nav" />
		<!-- 	</div> -->
			
		<!-- 	<div class="content"> -->
			<tiles:insertAttribute name="content" />
		<!-- 	</div> -->
			
		<!-- 	<div class="bottom"> -->
			<tiles:insertAttribute name="bottom" />
<!-- 			</div>
		</div>
	</div> -->


	</body>
</html>
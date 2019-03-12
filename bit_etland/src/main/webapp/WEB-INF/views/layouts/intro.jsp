<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!-- 
	@Author : 배정욱 gt1854@gmail.com
	@Date : 2019. 3. 12. 오전 9:53:23
	@File Name : intro.jsp
	@Desc: 인트로화면 - 로그인, 회원가입 
 -->
<jsp:include page="common.jsp"></jsp:include>

	<body>
	<div id="wrapper" class="grid-full-container container-fluid">
	       <div class="grid-top">
			<div class="top">
			<tiles:insertAttribute name="top" />
			</div>
			
			<div class="navibar">
			<tiles:insertAttribute name="navibar" />
			</div>
			
			
			<div class="intro2">
			<tiles:insertAttribute name="intro2" />
			</div>
			
			<div class="about">
			<tiles:insertAttribute name="about" />
			</div>
			
			<div class="parllax">
			<tiles:insertAttribute name="parllax" />
			</div>
			
			<div class="service">
			<tiles:insertAttribute name="service" />
			</div>	
			
			<div class="works">
			<tiles:insertAttribute name="works" />
			</div>
			
			<div class="parllax2">
			<tiles:insertAttribute name="parllax2" />
			</div>
			
			<div class="team">
			<tiles:insertAttribute name="team" />
			</div>
			
			<div class="contact">
			<tiles:insertAttribute name="contact" />
			</div>
			
			<div class="bottom">
			<tiles:insertAttribute name="bottom" />
			</div>
			
			<div class="footer">
			<tiles:insertAttribute name="footer" />
			</div>
		</div>
	</div>

	</body>
</html>
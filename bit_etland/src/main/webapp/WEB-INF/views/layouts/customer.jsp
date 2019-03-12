<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!-- 
	@Author : 배정욱 gt1854@gmail.com
	@Date : 2019. 3. 12. 오전 9:53:23
	@File Name : customer.jsp
	@Desc: 고객 템플릿 페이지 
 -->
 <jsp:include page="common.jsp"></jsp:include>
 
	<body>

	<div id="wrapper" class="grid-full-container container-fluid">
	       <div class="grid-top">
			<div class="top">
			<tiles:insertAttribute name="top" />
			</div>
			
					<tiles:insertAttribute name="navibar" />

			<div class="intro2">
			<tiles:insertAttribute name="intro2" ignore="true" />
			</div>
			
			<div class="about">
			<tiles:insertAttribute name="about" ignore="true"/>
			</div>
			
			<div class="parllax">
			<tiles:insertAttribute name="parllax" ignore="true"/>
			</div>
			
			<div class="service">
			<tiles:insertAttribute name="service" ignore="true"/>
			</div>	
			
			<div class="works">
			<tiles:insertAttribute name="works" ignore="true"/>
			</div>
			
			<div class="parllax2">
			<tiles:insertAttribute name="parllax2" ignore="true"/>
			</div>
			
			<div class="team">
			<tiles:insertAttribute name="team" ignore="true"/>
			</div>
			
			<div class="contact">
			<tiles:insertAttribute name="contact" ignore="true"/>
			</div>
			
			<div class="bottom">
			<tiles:insertAttribute name="bottom" ignore="true"/>
			</div>
			
			<div >
			<tiles:insertAttribute name="footer" ignore="true"/>
			</div>
		</div>
	</div>
  <!-- js -->
  <script src="${js}jquery.js"></script>
  <script src="${js}bootstrap.min.js"></script>
  <script src="${js}wow.min.js"></script>
  <script src="${js}jquery.scrollTo.min.js"></script>
  <script src="${js}jquery.nav.js"></script>
  <script src="${js}modernizr.custom.js"></script>
  <script src="${js}grid.js"></script>
  <script src="${js}stellar.js"></script>
  <!-- Contact Form JavaScript File -->
  <script src="${js}contactform.js"></script>

  <!-- Template Custom Javascript File -->
  <script src="${js}custom.js"></script>
	</body>
	 	
</html>
 
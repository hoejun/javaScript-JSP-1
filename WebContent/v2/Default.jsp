<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<% 		
//request영역의 데이터를 한글처리
request.setCharacterEncoding("UTF-8");

//폼에서 전송받은 id, pass 저장
		String id=request.getParameter("txtUserID");
		String pass =request.getParameter("txtpassword");
%>

<!-- 출력 -->
<%=id %><br/> 
<%=pass %>
</body>
</html>
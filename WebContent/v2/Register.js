/*자바스크립트 파일*/

//Register.html의 <form>태그의 submit버튼 눌렀을떄 호출되는 함수 
function checkForm() {
	// 아이디 체크
	// 만약 id가 txtUserID인 input태그에 적힌 텍스트의 길이가 3자보다 작으면??
	if (document.getElementById("txtUserID").value.length < 3) {

		window.alert("아이디를 정확하게 입력하시오.");
		// 해당 input태그란에 포커스 주기
		document.getElementById("txtUserID").focus();

		return false;

	}
	// 암호체크
	/*
	 * document객체의 Form이름(RegisterForm)에있는.... id가 "txtPassword"인 input태그의 비밀번호를
	 * 가져오기
	 */

	// 1방법
	// var pwd = document.RegisterForm.txtPassword;
	// 2방법
	var pwd = document.getElementById("txtPassword");
	// 적은 암호 데이터가 3자이하거나 15자 이상일경우 .. 경고 메세지
	if (pwd.value.length < 3
			|| document.getElementById("txtPassword").value.length > 15) {
		// 메세지
		window.alert("암호는 3자이상 15자 이하로 입력하시오.");
		// 해당 password 태그란에 포커스 주기
		pwd.select();
		// 멈추기
		return false;

	}
	
	//암호와 확인암호가 같은지 체크
	//만약에 적은 암호와 확인암호가 같지 않다면? 경고메세지 띄우기
	//경고메세지->"암호가 틀렸습니다. 다시확인하십시오."
	if (pwd.value != document.getElementById("txtPasswordConfirm").value){
		// 메세지
		window.alert("암호가 틀렸습니다. 다시 확인 하십시오.");
		// 해당 password 태그란에 포커스 주기
		pwd.select();
		// 멈추기
		document.getElementById("txtPasswordConfirm").value="";//클리어
		document.getElementById("txtPasswordConfirm").focus();
		return false;

	}
	
	// 이름체크
	//적은이름이  2자이 이하거나  5자 이상일경우.. 경고메세지 
	 //경고메세지 -> "이름은 2자이상 5자 이하로 입력하시오."
	//해당 란에 포커스 주기 
	//form 멈추기 

	var cne = document.getElementById("txtCustomerName");
	if (cne.value.length < 2
			|| cne.value.length > 5) {
		// 메세지
		window.alert("이름은 2자이상 5자 이하로 입력하시오");
		// 해당 password 태그란에 포커스 주기
		pwd.select();
		// 멈추기
		return false;
	}
}

//아이디 체크 페이지 열기
function CheckID() {
	window.open("CheckID.html", "chk", "width=300,height=100");
}

var userName = '';
var password = "";
$(document).ready(function() {
	$('#loginbut').click(function() {
		$('#loginInfo').empty();
		userName = $('#user_name').val();
		password = $('#user_password').val();
		if (userName.length <= 0) {
			var informationHtml = "<strong>用户名不能为空!</strong>";
			$('#loginInfo').html(informationHtml);
			return false;
		}
		if (password.length <= 0) {
			var informationHtml = "<strong>密码不能为空!</strong>";
			$('#loginInfo').html(informationHtml);
			return false;
		}
		login();
		return false;
	});
});
function login() {
	var informationHtml = "";
	$.ajax({
		type : 'POST',
		contentType : 'application/x-www-form-urlencoded;charset=UTF-8',// 发送信息至服务器时内容编码类型
		url : '../../handler/user/login',
		async : false, // 需要同步请求数据
		data : {
			"userName" : userName,
			"password" : password
		},
		dataType : 'json',
		success : function(data) {
			if (data.ret) {
				var resultData = data.data.result;
				if (resultData == "success") {
					informationHtml = "<strong>正在登陸，請稍等……!</strong>";
					window.location.href = "isearch.html";
				} else if (resultData == "passwordError")
					informationHtml = "<strong>密码错误!</strong>";
				else if (resultData == "null")
					informationHtml = "<strong>该用户不存在!</strong>";
			} else
				informationHtml = "<strong>登录失敗!</strong>";
		}
	});
	$('#loginInfo').html(informationHtml);
	return false;
}
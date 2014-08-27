Login-Page
==========

a simple login page 

这是之前为实验室系统写的一个登录界面。页面由三部分组成title、content、footer


1、title
用于显示一些额外信息，可以不写
2、content
中一个div中id="header"，显示系统名称
id="darkbanner"，显示页面信息“登录”
id="darkbannerwrap"，显示登录提示，例如密码错误、正在登录
form表单输入用户名和密码。其中登录按钮采用图片形式显示。
<button id="loginbut">
	<img src="ISearch4_Login_files/key.png" alt="">登 录
</button>
.form button {
    background-color: #92c97c;
    border: 1px solid #73b35a;
    color: #e8f7df;
    cursor: pointer;
    display: block;
    float: left;
    font-family: "Lucida Grande",Tahoma,Arial,Verdana,sans-serif;
    font-size: 100%;
    font-weight: bold;
    line-height: 130%;
    margin: 0 7px 0 160px;
    padding: 5px 10px 6px 7px;
    text-decoration: none;
}
button:hover {
    background-color: #e8f7df;
    border: 1px solid #92c97c;
    color: #31940c;
}
.buttons a:active {
    background-color: #e8f7df;
    border: 1px solid #92c97c;
    color: #31940c;
}
3、footer
显示版权或者系统信息
例如：
<footer class="footer">西南科技大学计算机科学与技术学院 知识工程实验室</footer>
其中 class="footer" 
.footer {
    margin-top: 10px;
}

js

点击登录后先进行表单验证，如果不满足条件，在信息提示处提示信息

$('#loginbut').click(function() {
    //验证信息完整
});
输入无误调用 login();
function login() {
//采用 $.ajax 向后台发送请求，登录成功进行跳转，不成功在信息提示处提示信息
}

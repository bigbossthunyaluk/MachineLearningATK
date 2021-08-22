function buttonClicked(){
    var uname = document.getElementById("LOGINusername").value;
    var pass = document.getElementById("LOGINpassword").value;
        if(uname=="admin" && pass=="password")
        {
            window.location="../admin/admin.html";
        }
        else{
            window.alert("กรอกรหัสผ่านไม่ถูกต้อง");
            window.location="login.html";
        }
    }
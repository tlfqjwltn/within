window.onload=function(){
    let submit = document.querySelector('.submit_label');
    //체크박스
    let checkAll = document.querySelector('#allCheck');
    let joinCheck = document.querySelectorAll('.join_check');
    let check = false;

    checkAll.onclick=function(){
        if(check == false){
            check = true;
            for(let i = 0; i<joinCheck.length; i++){
                joinCheck[i].checked = true;
                checkAll.checked = true;
            }
        } else{
            check = false;
            for(let i = 0; i<joinCheck.length; i++){
                joinCheck[i].checked = false;
                checkAll.checked = false;
            }
        }
    }
    submit.onclick=function submitCheck(e){
        e.preventDefault();
        let id = document.querySelector('#id_text_box').value;
        let idCheck = document.querySelector('.check_id');
        let pw1 = document.querySelector('#pw_txt').value;
        let pw2 = document.querySelector('#pwcheck_txt').value;
        let pwCheck = document.querySelector('.check_pw');
        let mail = document.querySelector('#mail_txt').value;
        let mailCheck = document.querySelector('.check_mail');
        let regId = /^[a-z0-9]{5,12}$/;
        // ID 영문, 숫자만 가능, 5~12자
        let regPw = /^[A-Za-z0-9+]{6,16}$/;
        // pw 대소문자,숫자만 가능 6~16자
        let regMail = /^\w{5,12}@[a-z]{2,10}[\.][a-z]{2,3}[\.]?[a-z]{0,3}$/;
        // 메일 아이디 5~12자 @ 도메인.2~3글자.0or3글자
        let checkAll = document.querySelector('#allCheck');
        let joinCheck = document.querySelectorAll('.join_check');
        let chk1 = document.querySelector('.check_off_text1')
        let chk2 = document.querySelector('.check_off_text2')
        let chk3 = document.querySelector('.check_off_text3')
        if(!(regId.test(id))){
            idCheck.innerHTML = "아이디를 확인하세요.";
            pwCheck.innerHTML = "";
            mailCheck.innerHTML = "";
            idCheck.style.color = "#FF000080";
            id = '';
            return false;
        } else if(!(regPw.test(pw1))){
            pwCheck.innerHTML="비밀번호는 숫자+영어의 조합 6~16자리여야 합니다."
            idCheck.innerHTML="";
            mailCheck.innerHTML = "";
            pwCheck.style.color = "#FF000080";
            pw1 = '';
            return false;
        } else if(pw1!=pw2){
            pwCheck.innerHTML = "비밀번호가 일치하지 않습니다.";
            idCheck.innerHTML="";
            mailCheck.innerHTML = "";
            pwCheck.style.color = "#FF000080";
            pw2 = '';
            return false;
        } else if(!(regMail.test(mail))){
            mailCheck.innerHTML = "이메일 주소를 확인하세요.";
            idCheck.innerHTML="";
            pwCheck.innerHTML="";
            mailCheck.style.color = "#FF000080";
            mail = '';
            return false;
        } else if(joinCheck[0].checked!=true){
            idCheck.innerHTML="";
            pwCheck.innerHTML="";
            mailCheck.innerHTML="";
            chk1.innerHTML = '만 14세 이상만 가입 가능합니다.';
            chk2.innerHTML="";
            chk3.innerHTML="";
            chk1.style.color = "#FF000080";
            return false;
        } else if(joinCheck[1].checked!=true){
            idCheck.innerHTML="";
            pwCheck.innerHTML="";
            mailCheck.innerHTML="";
            chk1.innerHTML = "";
            chk2.innerHTML = "필수 동의 약관을 확인하세요.";
            chk3.innerHTML="";
            chk2.style.color = "#FF000080";
            return false;
        } else if(joinCheck[2].checked!=true){
            idCheck.innerHTML="";
            pwCheck.innerHTML="";
            mailCheck.innerHTML="";
            chk1.innerHTML = "";
            chk2.innerHTML = "";
            chk3.innerHTML = '필수 동의 약관을 확인하세요.'
            chk3.style.color = "#FF000080";
            return false;
        } else{
            location.replace('index.html')
            alert(`${id}님 가입을 축하합니다.`);
        };
    }
}

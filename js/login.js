$(()=>{
    $('#login_btn').click((e)=>{
        e.preventDefault();
        let id = $('.login_text_box').val();
        let pw = $('.pw_text_box').val();
        let idCheck = $('.check_id');
        let pwCheck = $('.check_pw');
        console.log(id);
        if(id!='admin'){
            idCheck.html('아이디를 확인하세요.');
            pwCheck.html('');
        } else if(pw!='123456'){
            idCheck.html('');
            pwCheck.html('비밀번호를 확인하세요.');
        } else{
            idCheck.html('');
            pwCheck.html('');
            alert(id+'님 환영합니다.');
            location.replace('logined.html')
        };
    });
});
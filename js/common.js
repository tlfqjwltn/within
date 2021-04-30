window.onload=function(){
    
    
    
    // sec5꺼
    let sec5Btn2 = document.querySelector(".sec5_big_ico2")
    let sec5Btn2on = document.querySelector(".sec5_big_ico2on")
    let sec5Btn3 = document.querySelector(".sec5_big_ico3")
    let sec5Btn3on = document.querySelector(".sec5_big_ico3on")
    
    sec5Btn2.onclick=function(e){
        e.preventDefault();
        sec5Btn2.style.display='none'
        sec5Btn2on.style.display='block'
    }
    sec5Btn2on.onclick=function(e){
        e.preventDefault();
        sec5Btn2.style.display='block'
        sec5Btn2on.style.display='none'
    }
    sec5Btn3.onclick=function(e){
        e.preventDefault();
        sec5Btn3.style.display='none'
        sec5Btn3on.style.display='block'
    }
    sec5Btn3on.onclick=function(e){
        e.preventDefault();
        sec5Btn3.style.display='block'
        sec5Btn3on.style.display='none'
    }
}
$(function(){
    $('.')
})
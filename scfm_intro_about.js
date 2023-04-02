

function go_sub(){
    $('#start0').css({transition:"1s"});
    $('#start0').css({background:"transparent"});
    $('#start0').css({border:"1px solid #1b1b1b"});
    $('#start0').css({color:"#1b1b1b"});
    $('.quest00').attr("onclick","jump_quest(7)");
    setTimeout(function() {$('.countercheck').counterUp({
		delay: 10,
		time: 1000
});
}, 500);  
}

function car1(){
    var cj= $('#hope_1').val();
    $('input[name=item1]').val(cj);
}

function car2(){
    var cj= $('#hope_2').val();
    $('input[name=item1]').val(cj);
}

function car3(){
    var cj= $('#hope_3').val();
    $('input[name=item1]').val(cj);
}

function car4(){
    var cj= $('#hope_4').val();
    $('input[name=item1]').val(cj);
}
function car5(){
    var cj= $('#hope_5').val();
    $('input[name=item1]').val(cj);
}

function go_gw(){
    $('#start1').css({transition:"2.0s"});
    $('#start1').css({background:"transparent"});
    $('#start1').css({border:"1px solid #1b1b1b"});
    $('#start1').css({color:"#1b1b1b"});
    $('.quest8').attr("onclick","jump_quest(7)");
    
}



function go_weight(){
    $('#next_gw').css({transition:"1s"});
    $('#next_gw').css({background:"transparent"});
    $('#next_gw').css({border:"1px solid #1b1b1b"});
    $('#next_gw').css({color:"#1b1b1b"});
    $('.quest0').attr("onclick","jump_quest(2)");


    
}

function go_height(){
$('#next_nw').css({transition:"1s"});
    $('#next_nw').css({background:"transparent"});
    $('#next_nw').css({border:"1px solid #1b1b1b"});
    $('#next_nw').css({color:"#1b1b1b"});
    $('.quest2').attr("onclick","jump_quest(3)");

}

function go_age(){
$('#next_height').css({transition:"1s"});
    $('#next_height').css({background:"transparent"});
    $('#next_height').css({border:"1px solid #1b1b1b"});
    $('#next_height').css({color:"#1b1b1b"});
    $('.quest3').attr("onclick","jump_quest(4)");


}

// function go_name(){
// $('#next_age').css({transition:"1s"});
//     $('#next_age').css({background:"transparent"});
//     $('#next_age').css({border:"1px solid #1b1b1b"});
//     $('#next_age').css({color:"#1b1b1b"});
//     $('.quest4').attr("onclick","jump_quest(5)");


// }



function go_se(){
    $('#next_age').css({transition:"1s"});
        $('#next_age').css({background:"transparent"});
        $('#next_age').css({border:"1px solid #1b1b1b"});
        $('#next_age').css({color:"#1b1b1b"});
        $('.quest4').attr("onclick","jump_quest(1)");
    
    
    }
    


function go_phone(){
$('#next_name').css({transition:"1s"});
    $('#next_name').css({background:"transparent"});
    $('#next_name').css({border:"1px solid #1b1b1b"});
    $('#next_name').css({color:"#1b1b1b"});
    $('.quest5').attr("onclick","jump_quest(6)");


}

function go_result(){
$('#next_phone').css({transition:"1s"});
    $('#next_phone').css({background:"transparent"});
    $('#next_phone').css({border:"1px solid #1b1b1b"});
    $('#next_phone').css({color:"#1b1b1b"});
    
    $('#hidden_iframe11').attr("onload", "if(submitted){}");
     $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-UpBt9OoGHS_EkTSrEk7t4efAHxoWhtQUAgG--wdyGf6rHg/formResponse");
    $('.quest6').attr("onclick","jump_quest(99)");
    
    

}

function ban() {
									
    $('#dzi1_ord').text('남성은 참여가 불가능합니다.');
    $('#dzi1_ord').css({color:"#fff"});

}




function fecheck(){
    $("#female").prop('checked', true); 
}





function name() {
    const regex1 = /^[|가-힣|]+$/;
       var nm= $('#now_name').val();

       

       if(regex1.test(nm) && nm.length>1)
       {
           $('#quest5_1').prop("disabled", false);
           $("input[name=name]").val(nm);
           $('#next_name').css({transition:"1s"});
                   $('#next_name').css({background:"#1b1b1b"});
                   $('#next_name').css({border:"1px solid #fff"});
                   $('#next_name').css({color:"#fff"});
                   $('#alert_name').css({transition:"1s"});
                   $('#alert_name').css({color:"#fff"});
                   $('#alert_name').text('　');

                  

       }
       else {
               
                   $('#quest5_1').prop("disabled", true);
                   $('#next_name').css({transition:"1s"});
                   $('#next_name').css({background:"transparent"});
                   $('#next_name').css({border:"1px solid #1b1b1b"});
                   $('#next_name').css({color:"#1b1b1b"});
                   $('#alert_name').css({transition:"1s"});
                   $('#alert_name').css({color:"#fff"});
                   $('#alert_name').text('입력값을 확인하세요.');
           }
               
           if(nm=="")
           {
               $('#quest5_1').prop("disabled", true);
                   $('#next_name').css({transition:"1s"});
                   $('#next_name').css({background:"transparent"});
                   $('#next_name').css({border:"1px solid #1b1b1b"});
                   $('#next_name').css({color:"#1b1b1b"});
                   $('#alert_name').css({transition:"1s"});
                   $('#alert_name').css({color:"#fff"});
                   $('#alert_name').text('　');
           }

           if(/*nm=="테스트" ||*/ nm=="그냥" || nm=="아아아" || nm=="아아"|| nm=="냥냥" || nm.substr(0, 1) == "보"|| nm.substr(0, 1) == "시"|| nm.substr(0, 1) == "씨"|| nm.substr(0, 1) == "쓰"|| nm.substr(0, 1) == "그"|| nm.substr(0, 1) == "빨"|| nm.substr(0, 1) == "메"|| nm.substr(0, 1) == "랄"|| nm.substr(0, 1) == "씹"|| nm.substr(0, 1) == "좆"|| nm.substr(0, 1) == "뽀"|| nm.substr(0, 1) == "찌"|| nm.substr(0, 1) == "쫄"|| nm.substr(0, 1) == "짤"|| nm.substr(0, 1) == "쎅"|| nm.substr(0, 1) == "섹"|| /*nm.substr(0, 1) == "테"||*/ nm.substr(0, 1) == "존"|| nm.substr(0, 1) == "썅"|| nm.substr(0, 1) == "짱"|| nm.substr(0, 1) == "쌕"|| nm.substr(0, 1) == "쎄")
           {
               $('#quest5_1').prop("disabled", true);
               $('#next_name').prop("disabled", true);
               $('#next_name').css({background:"#858788"});
               $('#next_name').css({color:"#fff"});
               $('#alert_name').css({transition:"1s"});
               $('#alert_name').css({color:"#343efa"});
               $('#alert_name').text('장난 신청은 불가능합니다!');
           }    

   }

  function maxLengthCheck(object){										
   if (object.value.length > object.maxLength){
       object.value = object.value.slice(0, object.maxLength);
   }    
   }

   function now_phone() {
    var ph= $('#phone').val();
    const regex = /^[|0-9|]+$/;


     if ($('#agree12').is(":checked")==true)
     {

    if(ph.substr(0, 3) == "010" && ph.length==11 && regex.test(ph))
    {
        $('#quest6_1').prop("disabled", false);
        $("input[name=tel2]").val(ph.substr(3,4));
        $("input[name=tel3]").val(ph.substr(7,4)); 
        $('#next_phone').css({transition:"1s"});
        $('#hidden_iframe11').attr("onload", "if(submitted){}");
        $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-UpBt9OoGHS_EkTSrEk7t4efAHxoWhtQUAgG--wdyGf6rHg/formResponse");
       $('.quest6').attr("onclick","jump_quest(99)");

                $('#next_phone').css({background:"#1b1b1b"});
                $('#next_phone').css({border:"1px solid #fff"});
                $('#next_phone').css({color:"#fff"});
                $('#alert_phone').css({transition:"1s"});
                $('#alert_phone').css({color:"#fff"});
                $('#alert_phone').text('　');
    }
    else {
            
                $('#quest6_1').prop("disabled", true);
                $('#next_phone').css({transition:"1s"});
                $('#next_phone').css({background:"transparent"});
                $('#next_phone').css({border:"1px solid #1b1b1b"});
                $('#next_phone').css({color:"#1b1b1b"});
                $('#alert_phone').css({transition:"1s"});
                $('#alert_phone').css({color:"#fff"});
                $('#alert_phone').text('올바른 번호를 입력하세요.');
        }
    } 
    else {
            
        $('#quest6_1').prop("disabled", true);
        $('#next_phone').css({transition:"1s"});
        $('#next_phone').css({background:"transparent"});
        $('#next_phone').css({border:"1px solid #1b1b1b"});
        $('#next_phone').css({color:"#1b1b1b"});
        $('#alert_phone').css({transition:"1s"});
        $('#alert_phone').css({color:"#fff"});
        $('#alert_phone').text('개인정보를 체크하세요');
}
       
        if(ph<0)
        {
            
        
            $('#quest6_1').prop("disabled", true);
            $('#next_phone').css({transition:"1s"});
            $('#next_phone').css({border:"1px solid #1b1b1b"});
            $('#next_phone').css({background:"transparent"});
            $('#next_phone').css({color:"#1b1b1b"});
            $('#alert_phone').css({transition:"1s"});
            $('#alert_phone').css({color:"#fff"});
            $('#alert_phone').text('입력값을 확인하세요');
        }    
       
        if(ph=="")
        {
            $('#quest6_1').prop("disabled", true);
                $('#next_phone').css({transition:"1s"});
                $('#next_phone').css({background:"transparent"});
                $('#next_phone').css({border:"1px solid #1b1b1b"});
                $('#next_phone').css({color:"#1b1b1b"});
                $('#alert_phone').css({transition:"1s"});
                $('#alert_phone').css({color:"#fff"});
                $('#alert_phone').text('　');
        }

        if(/*ph=="01011111111" ||*/ ph=="01022222222"|| ph=="01033333333"|| ph=="01044444444"|| ph=="01055555555"|| ph=="01066666666"|| ph=="01077777777"|| ph=="01088888888"|| ph=="01099999999"|| ph=="01000000000"|| ph=="01012121212"|| ph=="01012341234"|| ph=="01034343434"|| ph=="01012345678" || ph=="01000000001" || ph=="01000000002" || ph=="01000000003" || ph=="01000000004" || ph=="01000000005" || ph=="01000000006" || ph=="01000000007" || ph=="01000000008" || ph=="01000000009" || ph=="01000000010")
        {
                 $('#quest6_1').prop("disabled", true);
                $('#next_phone').css({transition:"1s"});
                $('#next_phone').css({background:"transparent"});
                $('#next_phone').css({border:"1px solid #1b1b1b"});
                $('#next_phone').css({color:"#1b1b1b"});
                $('#alert_phone').css({transition:"1s"});
                $('#alert_phone').css({color:"#fff"});
                $('#alert_phone').text('올바른 번호를 입력하세요.');
        }
}


function oo()  {
						
    const query = '.input_font:checked';
    const selectedEls = 
        document.querySelectorAll(query);
    

    let result = '';
    
    selectedEls.forEach((el) => {
      result += el.value + '/ ';
   
    });

            var cast =result; 

            localStorage.setItem("cast", JSON.stringify(cast));
}


function pp(){
						   
    var ss = $('input[name=result1]:checked').val();


    
    jump_quest(99);
                                         }

            function jump_quest(i){
            
                
setTimeout(function() {
$('.backg').hide();
$('#quest'+i+'_wrap').show();
$(window).scrollTop(0);	
}, 400);

       if(i==99){
      var ss = $('input[name=result1]:checked').val();
      const random_number = Math.floor(Math.random() * 100); 


   var effect = setInterval(scroll, 3000);
              setTimeout(function(){clearInterval(effect)}, 4300);

$("#box").animate({width: "100%"},5300);
           



setTimeout(function() {
   /*원하는 검사 결과 링크로 이동*/
   OnSubmit();
   jump_quest(100);
//    document.getElementsByName('inputForm').submit();
}, 5300);						
}

}







   $(function(){
    $('#now_name').bind("click keyup",name);
    $(".input_font").on("click",oo);
    $('.result').on("click",pp);
    $('#agree12, #phone').bind("click keyup", now_phone);
  })
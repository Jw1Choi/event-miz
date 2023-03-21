function final() {


    if ($('#agree12').is(":checked")==true)
{
              
 $('#quest6_1').prop("disabled", false);
 $('#end0').css({transition:"1s"});
     $('#end0').css({background:"#1b1b1b"});
     $('#end0').css({border:"1px solid #fff"});
     $('#end0').css({color:"#fff"});
     $('#end0').css({cursor:"pointer"});
     $('#alert_42').css({transition:"1s"});
     $('#alert_42').css({color:"#fff"});
     $('#alert_42').text('　');
}
else {
   
     $('#quest6_1').prop("disabled", true);
     $('#end0').css({transition:"1s"});
     $('#end0').css({background:"transparent"});
     $('#end0').css({border:"1px solid #1b1b1b"});
     $('#end0').css({color:"#1b1b1b"});
     $('#end0').css({cursor:"unset"});
     $('#alert_42').css({transition:"1s"});
     $('#alert_42').css({color:"#fff"});
     $('#alert_42').text('개인정보동의 체크를 확인하세요.');
 }
}



  $(function(){
 $('#agree12').bind("click keyup", final);
})
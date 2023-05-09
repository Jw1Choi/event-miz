const testbody = document.getElementById('test_body');
testbody.innerHTML = `
<div class="main">
<div class="inner">
    <div class="title" style="">
     
        <!-- <img src="./img/gov.png" style="width:150px"> -->
   <img src="./img/logo.png" style="width:250px">
        <h1 class="wow fadeInUp"><span style="color:yellow">현재 페이지 한정</span><br>한정 매물 특가 프로모션</h1><br>
        <a href="#sec05" class="scroll box">
            <span class="timer">
                현재 특가 | <span class="today_date2" style="bottom:0;"></span> 
                </script> ( <span id="countdown1"></span>)
            
            </span>
        </a> <br><br>
    </div>
    <img src="img/bg4.png" class="bg" style="opacity: 0.6;">
    <img src="img/main4.png" class="img-main wow fadeInUp">
    <ul class="listWrap">
        <li class="wow fadeInUp">
            <div class="blink">
               특정 딜러에게만<br>전달되는 한정매물<br>
            <!-- <span class="num">국내차, 외제차</span> -->
            </div>
        </li>
        <li class="wow fadeInUp" data-wow-delay=".1s">
            <div>
                즉시 출고<br>
                최소 <span class="num">7</span>일 이내<br>
            </div>
     
        </li>
        <li class="wow fadeInUp" data-wow-delay=".2s">
            <div>
                전기차부터 신차까지<br>
             <u style="color:yellow">한정수량 확보</u>
            </div>
        </li>
    </ul>
    <!-- <div class="wow fadeIn">
        <a href="#sec05" class="scroll btn-main">
            안심대출 신청하기
        </a>
    </div> -->
</div>
</div>
<!-- end main -->


<div class="sec03 contents bg-light">
    <div class="inner">
        <div class="row">
            <div class="col-md-4 col-12 wow fadeInLeft">
                <div class="row">
                    <h2 class="col-md-12 col-6">
                        자동차 업체와 판매사가<br>판매 촉진 목적으로<br><br><span>마진 확 없애버린<br>이벤트성 한정 매물을<br>빠르게 공유합니다.</span>
                    </h2>
                    <div class="col-md-12 col-6">
                        <img src="img/won.png">
                    </div>
                </div>
            </div>
            <div class="col-md-8 col-12 wow fadeInRight">
                <p>
                    누군가는 받게 될<br>좋은 가격과 혜택을<br><span>이왕이면 여러분이<br>가져가셨으면 좋겠습니다.</span>
                    
                    <!-- <br><br>추가 할인 혜택<br><span>즉시 </span><span class="counter">100</span><span>만원 할인</span> -->
                   
                </p>
            </div>
        </div>
    </div>
</div>

<!-- contents -->
<div class="contentsWrap">


<!-- <div class="sec01 contents bg-light">
    <div class="inner">
        <h1>페이지 한정<br>오늘의 프로모션</h1><br><br>
        <span id="rent_btn" style="padding:10px 40px;border:1px solid #3684d2;margin-right:20px;border-radius:5px;background:#3684d2;color:white;cursor:pointer;" onclick="rent()">장기렌트</span><span id="lease_btn" style="padding:10px 40px;border:1px solid #3684d2;border-radius:5px;background:white;cursor:pointer;" onclick="lease()">신차리스</span><br><br><br>

    


        <div id="rent">
        <div class="box">
            <h3 style="line-height:1.4"><img src="./img/grand.png"> 그랜저<br><span>GN7 (H) 1.6T 익스클루시브</span></h3>
            <p class="p-text">
                차량가 <b>49,530,000원</b><br><br>
                <del>월 551,700원</del><br>
                월 <span class="counter" style="font-size:27px;">524,324</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
           
              </span>
            </p>
            <p class="m-text">
                차량가 <b>49,530,000원</b><br><br>
                <del>월 551,700원</del><br>
                월 <span class="counter" style="font-size:20px;">524,324</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
                [7일 배송 특가]
            </p>
        </div>
        <div class="box">
            <h3 style="line-height:1.4"><img src="./img/carnival.png"> 카니발 4세대<br><span>KA4 (D) 2.2 노블레스 9인승</span></h3>
            <p class="p-text">
                <del>월 512,390원</del><br>
                월 <span class="counter" style="font-size:27px;">455,240</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
              </span>
            </p>
            <p class="m-text">
                <del>월 512,390원</del><br>
                월 <span class="counter" style="font-size:20px;">455,240</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
           
            </p>
        </div>

        <div class="box">
            <h3 style="line-height:1.4"><img src="./img/gv80.png"> GENESIS G80<br><span>THE ALL NEW GENESIS G80 (G) 3.5T</span></h3>
            <p class="p-text">
                <del>월 1,137,200원</del><br>
                월 <span class="counter" style="font-size:27px;">1,011,615</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
              </span>
            </p>
            <p class="m-text">
                <del>월 1,137,200원</del><br>
                월 <span class="counter" style="font-size:20px;">1,011,615</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
             
            </p>
        </div>
    </div>


    <div id="lease" style="display:none;">
        <div class="box">
            <h3 style="line-height:1.4"><img src="./img/bmw.png"> BMW<br><span>530I LUXURY</span></h3>
            <p class="p-text">
                차량가 <b>76,100,000원</b><br><br>
                <del>월 1,453,900원</del><br>
                월 <span class="counter" style="font-size:27px;">1,376,800</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
           
              </span>
            </p>
            <p class="m-text">
                차량가 <b>76,100,000원</b><br><br>
                <del>월 1,453,900원</del><br>
                월 <span class="counter" style="font-size:27px;">1,376,800</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
            </p>
        </div>
        <div class="box">
            <h3 style="line-height:1.4"><img src="./img/grand.png">그랜저<br><span>GRANDEUR GN7 (G) 2.5 프리미엄</span></h3>
            <p class="p-text">
                차량가 <b>37,850,000원</b><br><br>
                <del>월 685,200원</del><br>
                월 <span class="counter" style="font-size:27px;">645,400</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
           
      
            </p>
            <p class="m-text">
                차량가 <b>37,850,000원</b><br><br>
                <del>월 685,200원</del><br>
                월 <span class="counter" style="font-size:27px;">645,400</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
            </p>
        </div>

        <div class="box">
            <h3 style="line-height:1.4"><img src="./img/benz.png"> BENZ<br><span>GLC 220 4MATIC 2.0(D)</span></h3>
            <p class="p-text">
                차량가 <b>69,600,000원</b><br><br>
                <del>월 1,316,700원</del><br>
                월 <span class="counter" style="font-size:27px;">1,246,200</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
           
              </span>
            </p>
            <p class="m-text">
                차량가 <b>69,600,000원</b><br><br>
                <del>월 1,316,700원</del><br>
                월 <span class="counter" style="font-size:27px;">1,246,200</span>원<br><span class="blink" >추가 할인 (신청자 한정)</span><br>
            </p>
        </div>
    </div>

    </div>
</div>-->





<div class="sec02 contents">
    <ul class="inner">
        <li class="wow fadeInUp">
            <div class="title">한정 수량 차종</div>
            <div class="txt">
                - 오늘 기준 (<span class="today_date" style="bottom:0;"></span>) 의 특가상품 구성<br><br>
                - 원하시는 차종에 맞는 매물을 바로 찾아드립니다.<br><br>
                <span class="blink" >- 수량 마감 시 혜택이 끝날 수 있습니다. </span><br><br>
                - 국내, 수입차 전차종 견적도 추가할인해 드립니다.
            </div>
        </li><br>
        <li class="wow fadeInUp" data-wow-delay=".1s">
            <div class="title">할인 혜택 대상 및 신청방법</div>
            <div class="txt">
            <br>
                <span style="bottom:0px;">할인대상: </span> 24세 이상 현재 페이지 신청자<br><br>
                <span style="bottom:0px;">신청방법: </span> 하단 신청란에 신청 가능<br>
               
            </div>
        </li>
        <!-- <li class="wow fadeInUp" data-wow-delay=".2s">
            <div class="title">신청기간</div>
            <div class="txt">
                교육 예산 소진시까지
            </div>
        </li> -->

    </ul>
</div>

<!-- <div class="sec04 contents" id="sec05">
    <div class="inner">
        <div class="row">
            <div class="col-md-6 col-12 left wow fadeInLeft">
                <h2>
                    <img src="img/icon2.png">
                    근로자 특별지원<br><span>신청 대상자</span>
                </h2>
                <p>
                    대출상품은 조건이 다양하므로<br>
                    본인에게 적합한 대출상품에 대해 구체적으로 확인 후<br>
                    진행하여야 합니다.<br><br>
                    모바일 안심신청시 대출 사기나 불법 사채에 대한<br>
                    걱정 없이 안전하게 상담을 받을 수 있습니다.
                </p>
            </div>
            <div class="col-md-6 col-12 right wow fadeInRight">
                <p><em>대상</em>4대보험 가입 직장인 및 소득증빙 가능자</p>

                <p><em>소득</em>재직기간 3개월 이상 근로자</p>
                <p><em>신용</em>신용점수 600점 이상 우대</p>
                <p><em>나이</em>만 25세~55세 대상</p>
                <p><em>부채</em>담보대출을 제외한 연봉대비 200% 미만</p>

            </div>
        </div>
    </div>
</div> -->
<!-- <div class="sec05 contents bg-light">
    <div class="inner">
        <div class="box">
            <div class="row">
                <div class="col wow fadeInLeft">
                    <h4>지원대상</h4>
                    <img src="img/circle1.png">
                    <p>
                        <span>만 25세 이상 55세 이하</span><br>
                        소득확인이 가능한 자
                    </p>
                </div>
                <div class="col wow fadeInLeft" data-wow-delay=".2s">
                    <h4>신청방법</h4>
                    <img src="img/circle2.png">
                    <p>
                        <span>하단 신청란에서 신청</span><br>
                        (무방문, 무서류, 당일승인)
                    </p>
                </div>
                <div class="col wow fadeInLeft" data-wow-delay=".3s">
                    <h4 class="txt-red">신청불가 대상</h4>
                    <img src="img/circle3.png">
                    <p>
                        <span class="txt-red">연체·무직·군미필</span>은<br>
                        지원이 불가합니다
                    </p>
                </div>
            </div>
        </div> 
        <br><br>
      
    </div>
</div> -->


  
</form>




<div class="form-box" id="fm-box">
    <div class="inner">
        <h1 class="form-top-title">한정 매물 견적 신청하기</h1>
        <div class="form-box-inner">
            <form action="" id="form_e11" method="POST" target="hidden_iframe11"  onsubmit="dll();kakaoPixel('7504569149976260948').purchase('purchase');submitted=true;">

                <div class="form-box-tb-out">
                <br>
                    <table class="form-box-tb">
                        <tbody>
                            <tr>
                                <th>견적 유형</th>
                                <td>
                               
                                    <select name="entry.34131472" id='car_type' class="form-control" placeholder="견적 유형">

                                        <option value="견적 유형" selected disabled>견적 유형
                                            <option value="장기렌트">장기렌트</option>
                                            <option value="신차리스">신차리스</option>
                                           
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->차종</th>
                                <td>
                                    <input type='text' name='entry.140519695' id='car' class="form-control" placeholder="차종">
                                </td>
                            </tr>
                        <tr>
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                            <td>
                                <input type='text' name='entry.583978956' id='name' class="form-control" placeholder="성함" maxlength="4">
                            </td>
                        </tr>
                        <tr>
                            <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
                            <td>
                                <input type='text' name='entry.576088086' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
                            </td>
                        </tr>
                        <tr>
                            <!-- <th>지역</th>
                            <td>
                           
                                <select name="entry.272078534" id='id-number' class="form-control" placeholder="해당 지역">

                                    <option value="해당 지역" selected disabled>해당 지역
                                        <option value="서울">서울</option>
                                        <option value="부산">부산</option>
                                        <option value="대구">대구</option>
                                        <option value="인천">인천</option>
                                        <option value="광주">광주</option>
                                        <option value="대전">대전</option>
                                        <option value="울산">울산</option>
                                        <option value="세종">세종</option>
                                        <option value="경기">경기</option>
                                        <option value="강원">강원</option>
                                        <option value="충북">충북</option>
                                        <option value="충남">충남</option>
                                        <option value="전북">전북</option>
                                        <option value="전남">전남</option>
                                        <option value="경북">경북</option>
                                        <option value="경남">경남</option>
                                        <option value="제주">제주</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>통화가능시간</th>
                            <td>
                                <select name="entry.472954139" id='time' class="form-control" placeholder="현재 조건">

                                    <option value="통화가능시간" selected disabled>통화가능시간
                                        <option value="언제나 통화 가능">언제나 통화 가능</option>
                                        <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                        <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                        <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                        <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                        <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                        <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                        <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                        <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                        <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                        <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>문의사항</th>
                            <td>
                                <textarea name='entry.1292376548' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                            </td>
                        </tr> -->
                        <!-- <tr>
                            <th>대출금액</th>
                            <td>
                            <input name='M_items_value_16' type='text' value='' class='ri_16 text_box' placeholder="필요금액을 입력하세요." pattern="\d*"><span class="text_box_text">&nbsp;만원</span>
                            </td>
                        </tr> -->
                        <!-- <tr>
                            <th>!--<i class="fa fa-user" aria-hidden="true"></i>--메모</th>
                            <td>
                                <textarea name="M_data" type="text" class="form-info" placeholder="개인 신용에 어떠한 영향도 끼치지 않으며, 한도안내 후 개인정보는 전부 파기됩니다." onkeyup="cdcheck(this)" onkeydown="cdcheck(this)"></textarea>
                            </td> 
                        </tr>   -->
                        <tr>
                            <td colspan="2" style="border-bottom: none"> 
                                <!-- <span class="red-txt">신용 8~10등급은 접수 불가합니다.</span> -->
                            
                                <input class="submit-btn" type='submit' id='send_message' value='할인 견적 받기' disabled style="background-color: #595858;">
                                <input class="submit-btn"  id='send_message1' value='잠시만 기다려주세요.' disabled style="background-color:black;display:none;">
                                <div class="form-agree-box">
                                    <p class="form-info-agree">
                                        <span>
                                           
                                            <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked>
                                            <label style="color:black; font-weight:300;font-size:13px;margin-top:-3px;" for="agree11">개인정보보호정책</label>
                        
                        
                                            <span class="privacyBtn" style="color:black;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                                [자세히 보기]
                                            </span>
                                        </span>
                                    </p>

                                    <script type="text/javascript">var submitted = false;</script>

                                    <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    </div>
</div><!----form-end------>
</div><!-- contentsWrap end -->


<section id="dbscf" style="display:none;" >
<form id="db" name="inputForm" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/site17/ifr/ifr_save.php">
<input type="hidden" name="ms" value="S00242885B" />
<input type="hidden" name="ca" value="C05120127C" />
<input type="hidden" name="auto_defense" />




<div class="input_title"><span>이름</span><input type="text" name="name" /></div>
<div class="input_title"><span>전화번호</span>
<select type="text" name="tel1" style="width:20%; border:none; border-bottom:1px solid #ccc;" >
<option value="010">010</option>
<option value="011">011</option>
<option value="016">016</option>
<option value="017">017</option>
<option value="018">018</option>
<option value="019">019</option>
</select>-
<input type="text" name="tel2" style="width:20%;" maxlength="4" />-
<input type="text" name="tel3" style="width:20%;" maxlength="4" />
</div>
<div class="input_title"><span>차종</span><input type="text" name="item1" /></div>

<div style="font-size:0.7em;"><input type="checkbox" name="agree" id="agreement"  style="margin:0 0; vertical-align:middle;" checked /><label for="agreement">개인정보 취급 동의</label><a href="javascript:dbdb_pri_popup();">[보기]</a>

</form>

<div class="footer_btn">
<a href="#" onclick="javascript:OnSubmit();">
 <span style="color:#fff">신청하기</span>
    </a>

</section>



<div class="wrap linkWrap">
<div class="sec00 contents" style="padding-top:80px;">
    <div class="inner">
    <p>
    <p class="today_date1"></p>
        현재 <span class="counter" style="bottom:1px;">27</span> 명이 신청 대기 중입니다.
    </p>
    <div class="box_02">
        <div class="box_02_1">
            <div style="position:relative;height:150px;overflow:hidden;">
                <div id="ticker_wrap" style="position: absolute;top:0px;right:0px;width:100%;">
                    <table id="ticker" class="tg">
                    <tbody>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">그랜저</span></td>
                            <td class="tg-02ax">경기 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">카니발</span></td>
                            <td class="tg-02ax">전남 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">아이오닉5</span></td>
                            <td class="tg-02ax">서울 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">아반떼</span></td>
                            <td class="tg-02ax">인천 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">벤츠</span></td>
                            <td class="tg-02ax">경북 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">GV80</span></td>
                            <td class="tg-02ax">서울 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">신형 그랜저</span></td>
                            <td class="tg-02ax">경남 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">벤츠 GLC</span></td>
                            <td class="tg-02ax">서울 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                        <tr>
                            <td class="tg-0lax"><span class="submit_02">니로</span></td>
                            <td class="tg-02ax">경기 / 신청 완료</td>
                            <td class="tg-03ax"><span class="submit_03">신청완료</span></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</div>
<div class="bottom">
<footer>
    롯데렌터카 대표이사 최진환<br>

    경기도 안양시 동안구 전파로 88 신원비젼타워 8층 서울본사: 서울시 강남구 테헤란로 422 KT타워 6~9층<br>
    
    사업자등록번호 214-87-79183 통신판매업신고번호 : 제2010-경기안양-420호<br>

    마케팅 대행업체: 플로스 | flosmarketing@naver.com | 서울 영등포구 선유로 53길 22 502호 | 사업자등록번호: 471-09-01112   
</footer>
</div>


<div id="privacy">
<div id="privacyContent">
    <div class="titWrap">
        <span>개인정보취급방침</span>
        <i style="margin-top:-23px !important" class="ion-close-circled closeBtn"></i>
    </div>
    <div style="line-height:1.2" class="conWrap">
        개인정보취급방침<br><br>
        수집하는 개인정보의 항목<br>
        "롯데렌터카"는 적법하고 공정한 수단에 의해서만 개인정보를 수집하며, 회원가입약관 또는 개인정보의 제공, 활용 동의서의 내용에 대해 이용자의 개인정보를 수집하는 경우에 당해<br> 이용자가 동의함 또는 동의하지 않음 버튼을 클릭 하는 등의 이용자의 동의를 얻는 절차를 거칩니다.<br>
        <br>
        수집하는 개인정보 항목<br>
        회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br><br>

        ● 수집항목 : 이름 , 휴대전화번호 , 희망 차종, 견적 유형 등 개인맞춤 서비스를 제공하기 위해 수집됩니다.<br>
        ● 개인정보 수집방법 : 신청폼 , 전화를 통한 고객상담.<br>
        <br>
        개인정보의 수집 및 이용목적<br>
        회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br><br>
        
        개인정보의 제 3자 제공 및 취급위탁<br>
        회사는 귀하의 개인정보를 (개인정보의 수집목적 및 이용목적)에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여 이용하거나 타인 또는 타기업, 기관에 제공하지 않습니다. 그러나 보다 나은 서비스 제공을 위하여 귀하의 개인정보를 제휴사에게 제공하거나 또는 제휴사와 공유할 수 있습니다. 개인정보를 제공하거나 공유할 경우에는 사전에 귀하의 동의를 구하는 절차를 거치게 되며, 귀하께서 동의하지 않는 경우에는 제휴사에게 제공하거나 제휴사와 공유하지 않습니다.<br><br>
        
        위탁자 : ㈜마케팅이즈, ㈜마루커뮤니케이션, 카카오토카, FLOS MARKETING <br>
        위탁 목적 : 광고를 통한 개인정보 취급 및 보관, 광고/마케팅 업무대행<br>
        위탁 정보의 내용 : 수집되는 정보일체<br>
        위탁 정보의 보유기간 : 수집 및 동의일로부터 3년<br><br>
        
        ● 마케팅 및 광고에 활용<br>
        이벤트 등 광고성 정보 전달<br><br>

        개인정보의 보유 및 이용기간><br>
        원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br><br>

        보존 항목 : 이름 , 휴대전화번호 , 차종 등.<br>
        보존 근거 : 고객의요청이 있을시 즉시폐기<br>
        보존 기간 : 3년<br><br>

        그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.<br><br>

        소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)<br>
        신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 (신용정보의 이용 및 보호에 관한 법률)<br><br>

        개인정보의 파기절차 및 방법<br>
        회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br><br>

        ● 파기절차<br>
        신청폼을 통해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.<br><br>

        별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.<br><br>

        ● 파기방법<br>
        - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br>
        - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br><br>

        
        이용자 및 법정대리인의 권리와 그 행사방법<br>
        이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.<br><br>

        이용자들의 개인정보 조회,수정을 위해서는 본인 확인 절차를 거치신 후 정정 또는 삭제가 가능합니다.<br><br>

        혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.<br><br>
        
        개인정보관리책임자<br><br>

        회사: FLOS MARKETING<br>
        이름: 최지웅<br>
        이메일: flosmarketing@naver.com<br><br>

        귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.<br><br>

        회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.<br><br>


        개인정보에 관한 민원서비스<br>
        회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.<br>
        <br>
    귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.<br><br>

        기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.<br>
        1.개인분쟁조정위원회 <br>
        2.정보보호마크인증위원회 <br>
        3.대검찰청 인터넷범죄수사센터 <br>
        4.경찰청 사이버테러대응센터 <br />
        <br />

    </div>
</div>
</div>
`;

document.body.appendChild(testbody.content);
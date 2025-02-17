$(() => {
  SearchResultsFilters.init();
  Header.init();
  MenuToggle.init();
  Layout.init();
});
// Google Analysis
$(() => {
  function initGoogleAnalysis() {
    const $GAHeaderTag = $(`
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K567QTPV');</script>
    <!-- End Google Tag Manager -->
    `);
    $("head").append($GAHeaderTag);

    const $GABodyTag = $(`
      <!-- Google Tag Manager (noscript) --> <noscript><iframe src="ns " height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) -->
    `);
    $("body").append($GABodyTag);
  }
  initGoogleAnalysis();
});
var getCookieValue = function (cookieName) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + "=")) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  return null;
};

$.get("/api/v2/users/me", function (response) {
  // 请求成功时的逻辑

  if (response.user.id) {
    window.ip = response.user.id;
  } else {
    var user_random_id_value = getCookieValue("user_random_id");
    if (user_random_id_value) {
      window.ip = user_random_id_value;
    } else {
      var currentDate = new Date();
      var randomNum = Math.floor(Math.random() * 100000000000);
      var expirationDate = new Date(
        currentDate.getFullYear() + 1,
        currentDate.getMonth(),
        currentDate.getDate()
      );
      var expirationDateString = expirationDate.toGMTString();
      window.ip = randomNum;
      document.cookie =
        `user_random_id=${randomNum};expires=` + expirationDateString;
    }
  }
  sa.init({
    server_url:
      "https://r.shoplazza.com/beacon/sa.gif?project=production&storeid=null&gzip=0",
  });
  sa.registerPage({ user_id: ip, url: location.href });
}).fail(function () {
  // 请求失败时的逻辑
  window.ip = "";
});
// sa埋点上报
// 初始化search_url

var secondLi = $(".breadcrumbs li:eq(1)");
if (secondLi.find("a").length) {
  var newBreadcrumbsText = secondLi
    .find("a")
    .text()
    .replace(/[\(\（][^\(\（\)\）]*[\)\）]/g, "")
    .replace(/[\[\【][^\[\【\]\】]*[\]\】]/g, "");
  secondLi.find("a").text(newBreadcrumbsText);
} else {
  var newBreadcrumbsLiText = secondLi
    .text()
    .replace(/[\(\（][^\(\（\)\）]*[\)\）]/g, "")
    .replace(/[\[\【][^\[\【\]\】]*[\]\】]/g, "");
  secondLi.text(newBreadcrumbsLiText);
}
var list = document.querySelectorAll(".page-description");
if (list.length) {
  list.forEach((item) => {
    item.innerHTML = item.textContent;
    item.setAttribute("style", "display:block");
  });
}

var zholdIds = [
  "4409086882329",
  "4408007756697",
  "4407532576793",
  "5670323195161",
  "6155280282393",
  "4407148773273",
];
var zhnewIds = [
  "4409138209945",
  "10990434640921",
  "10990157049625",
  "11942298685721",
  "10281137058457",
  "4408566561177",
];

for (var i = 0; i < zholdIds.length; i++) {
  if (window.location.href.indexOf(zholdIds[i]) > -1) {
    window.location.href =
      "https://helpcenter.shoplazza.com/hc/zh-cn/articles/" + zhnewIds[i];
  }
}

var enoldIds = [
  "217352077",
  "216552968",
  "4408542208793",
  "4848673687321",
  "4848338360217",
  "5657837150361",
  "6157815062041",
];
var ennewIds = [
  "216553098",
  "216552958",
  "10990434640921",
  "11942298685721",
  "11942298685721",
  "11942298685721",
  "10281137058457",
];

for (var i = 0; i < enoldIds.length; i++) {
  if (window.location.href.indexOf(enoldIds[i]) > -1) {
    window.location.href =
      "https://helpcenter.shoplazza.com/hc/en-us/articles/" + ennewIds[i];
  }
}

// 法务
var enoldIds = ["9523185587609", "9523499534617", "9523675797785"];
var ennewIds = ["10045532340377", "10046023537177", "10046124598681"];

for (var i = 0; i < enoldIds.length; i++) {
  if (window.location.href.indexOf(enoldIds[i]) > -1) {
    window.location.href =
      "https://helpcenter.shoplazza.com/hc/en-us/articles/" + ennewIds[i];
  }
}

//AUP一级目录创建后，仅中文需要重定向（英文直接修改路径放置位置）和附录文章
var zholdIds = [
  "10238356926873",
  "7804953837977",
  "9809631162393",
  "10110065929753",
  "9583342064409",
  "10674109013273",
  "10063691252121",
  "9435240055065",
  "10327388320537",
  "10071297226137",
  "10062772132505",
  "9578806843033",
  "9432552701977",
];
var zhnewIds = [
  "10243705728409",
  "7710569834393",
  "9809979349785",
  "10112023630873",
  "9582726535833",
  "10674408711577",
  "10074221066649",
  "9436055082521",
  "10327510373145",
  "10071803724697",
  "10063425395353",
  "9581271329177",
  "9435895532057",
];
for (var i = 0; i < zholdIds.length; i++) {
  if (window.location.href.indexOf(zholdIds[i]) > -1) {
    window.location.href =
      "https://helpcenter.shoplazza.com/hc/zh-cn/articles/" + zhnewIds[i];
  }
}

// //中文section-section
// var zholdIds = ["4668009732505"];
// var zhnewIds = ["10260192849049"];

// for (var i = 0; i < zholdIds.length; i++){
//   if (window.location.href.indexOf(zholdIds[i]) > -1) {
//     window.location.href = 'https://helpcenter.shoplazza.com/hc/zh-cn/sections/' + zhnewIds[i];
//   }
// }

//英文section-section，支付板块上线后发布
var enoldIds = [
  "4647142710041",
  "4647166741529",
  "4647207770137",
  "4647220622105",
  "4647273452185",
  "4647297560985",
];
var ennewIds = [
  "10281534381593",
  "10281400207385",
  "10281400207385",
  "10281400207385",
  "10281400207385",
  "10633474263065",
];

for (var i = 0; i < enoldIds.length; i++) {
  if (window.location.href.indexOf(enoldIds[i]) > -1) {
    window.location.href =
      "https://helpcenter.shoplazza.com/hc/en-us/sections/" + ennewIds[i];
  }
}

var sectionsIds = ["13457070816153", "13457188187545"];
for (var i = 0; i < sectionsIds.length; i++) {
  if (window.location.href.indexOf(sectionsIds[i]) > -1) {
    window.location.href = "https://helpcenter.shoplazza.com/hc/";
  }
}

//支付板块中文categories
//var zholdcats = ["4644802389529"];
//var zhnewcats = ["10235152010137"];

//for (var i = 0; i < zholdcats.length; i++){
//    if (window.location.href.indexOf(zholdcats[i]) > -1) {
//     window.location.href = 'https://helpcenter.shoplazza.com/hc/zh-cn/categories/' + zhnewcats[i];
//   }
// }

// 获取搜索框内的查询参数
var language = LotusUtils.getLocale();
var chat_gpt_content_obj = JSON.parse(
  sessionStorage.getItem("chat_local_questions")
);
if (!chat_gpt_content_obj) {
  chat_gpt_content_obj = [];
  if (language == "zh-cn") {
    chat_gpt_content_obj.push({
      ruler: "chat_gpt_role",
      info: `Shoplazza 智能助理为您服务，请问有什么可以帮您呢？<div>
      <br/>
      <div>常见问题:</div>
      <div>
        <div><a href='https://helpcenter.shoplazza.com/hc/zh-cn/articles/4411988701337-%E7%BB%91%E5%AE%9A%E5%92%8C%E8%A7%A3%E6%9E%90%E5%9F%9F%E5%90%8D'>1.绑定和解析域名</a></div>
        <div><a href='https://helpcenter.shoplazza.com/hc/zh-cn/articles/19327923670937-%E4%B8%BB%E9%A2%98%E5%8D%A1%E7%89%87%E5%9B%BE%E7%89%87%E6%8E%A8%E8%8D%90%E5%B0%BA%E5%AF%B8'>2.主题卡片图片推荐尺寸</a></div>
        <div><a href='https://helpcenter.shoplazza.com/hc/zh-cn/articles/11942298685721-PayPal%E7%BB%91%E5%AE%9A%E6%8C%87%E5%8D%97#paypal--0-0'>3.绑定PayPal收款</a></div>
        <div><a href='https://helpcenter.shoplazza.com/hc/zh-cn/articles/4408584181145-%E8%AE%BE%E7%BD%AEGoogle-Ads%E8%BD%AC%E5%8C%96%E8%B7%9F%E8%B8%AA#-google-ads--0-0'>4.如何设置Google ads 转化追踪？</a></div>
        <div><a href='https://helpcenter.shoplazza.com/hc/zh-cn/sections/25791958482201-%E8%81%9A%E5%90%88Pixel'>5.添加pixel（像素）？</a></div>
        <div><a href='https://helpcenter.shoplazza.com/hc/zh-cn/articles/10951988666265-%E8%AE%BE%E7%BD%AE%E9%80%9A%E7%94%A8%E7%89%A9%E6%B5%81%E6%96%B9%E6%A1%88#h_01HFZKQDEEE2HY5T5BDHCPNVGM'>6.设置物流</a></div>
      </div>
    </div>`,
    });
  } else {
    chat_gpt_content_obj.push({
      ruler: "chat_gpt_role",
      info: `Hello! I'm your Help Center virtual assistant. Here to guide you to the right answers and resources. What can I help you with today?`,
    });
  }
  $(".oldChatRequest").append(`<div class="chat_request">
                      <div class="chat_request_body">
                              <div class="chat_request_content">
                                  <div class="chat_request_content_header">
                                      <div class="chat_request_icon"><img
                                      src="https://img.staticdj.com/oss/operation/09c141bdbd585b7f552bece8bbf25eb0.png" alt="">
                                      </div>
                                      <div class="chat_request_info">
                                          <span class="chat_request_msg">${decodeURIComponent(
                                            chat_gpt_content_obj[0].info
                                          )}</span>
                                      </div>
                                  </div>
                                  
                                  </div>
                                  <div class="unLikePosition" style="display: none;">
                                      <div class="unLikePostionBtnList">
                                          <div class="unLikePostionRegBtn">${
                                            language == "zh-cn"
                                              ? "问题已解决"
                                              : "Problem solved"
                                          }</div>
                                          <div class="unLikePostionRejBtn">${
                                            language == "zh-cn"
                                              ? "问题未解决"
                                              : "Problem not solved"
                                          }</div>
                                      </div>
                                      <div class="unLikePostionText">
                                          <textarea class="myTextarea" id="myTextarea" style="color: #000;" rows="4" cols="50" placeholder =" ${
                                            language == "zh-cn"
                                              ? "留言建议"
                                              : "Message suggestions"
                                          }"></textarea>
                                      </div>
                                      <div class="unLikePostionTextLine"></div>
                                      <div class="unLikePostionSubmit">
                                          <div class="unLikePostionSubmitBtn">${
                                            language == "zh-cn"
                                              ? "提交"
                                              : "Submit"
                                          }</div>
                                      </div>
                                  </div>
                      </div>
    
    <div class="likeAndDislikeContent">
      <div class="likeAndDislike">
          <span class="ChatLikeBtn UPLike">
              <svg class="UPLike" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86582 3.6645C8.98132 3.43351 9.21741 3.2876 9.47566 3.2876C10.2129 3.2876 10.9199 3.58046 11.4413 4.10177C11.9626 4.62308 12.2554 5.33012 12.2554 6.06736V6.95901H15.7695C16.015 6.95908 16.2579 7.01138 16.4817 7.11244C16.7054 7.2135 16.9051 7.36101 17.0675 7.54517C17.2298 7.72933 17.3512 7.94593 17.4234 8.18058C17.4956 8.41501 17.5171 8.66211 17.4865 8.90549M17.4865 8.90549L16.6998 15.1993C16.6471 15.6175 16.4435 16.0027 16.1275 16.2816C15.8114 16.5604 15.4044 16.7143 14.983 16.7144H3.70631C3.38637 16.7144 3.07955 16.5873 2.85332 16.3611C2.62709 16.1349 2.5 15.8281 2.5 15.5081V9.73877C2.5 9.41884 2.62709 9.11201 2.85332 8.88579C3.07954 8.65956 3.38637 8.53247 3.70631 8.53247H6.43184L8.86582 3.6645M6.17141 9.8961V15.3508H3.86364V9.8961H6.17141Z" fill="#8E8E8E"/>
              </svg>
          </span>
          <span class="ChatUnLikeBtn DOWNLike">
              <svg class="DOWNLike" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86582 16.3355C8.98132 16.5665 9.21741 16.7124 9.47566 16.7124C10.2129 16.7124 10.9199 16.4195 11.4413 15.8982C11.9626 15.3769 12.2554 14.6699 12.2554 13.9326V13.041H15.7695C16.015 13.0409 16.2579 12.9886 16.4817 12.8876C16.7054 12.7865 16.9051 12.639 17.0675 12.4548C17.2298 12.2707 17.3512 12.0541 17.4234 11.8194C17.4956 11.585 17.5171 11.3379 17.4865 11.0945M17.4865 11.0945L16.6998 4.80067C16.6471 4.38249 16.4435 3.99726 16.1275 3.71843C15.8114 3.4396 15.4044 3.28569 14.983 3.28557H3.70631C3.38637 3.28557 3.07955 3.41266 2.85332 3.63888C2.62709 3.86511 2.5 4.17194 2.5 4.49187V10.2612C2.5 10.5812 2.62709 10.888 2.85332 11.1142C3.07954 11.3404 3.38637 11.4675 3.70631 11.4675H6.43184L8.86582 16.3355M6.17141 10.1039V4.6492H3.86364V10.1039H6.17141Z" fill="#8E8E8E"/>
              </svg>
          </span>
      </div>
    </div>
    
  </div>`);
  sessionStorage.setItem(
    "chat_local_questions",
    JSON.stringify(chat_gpt_content_obj)
  );
}

var chat_success = false;
var hiddenSearchQueryDom = document.querySelector("#hidden_query");
var searchparams = hiddenSearchQueryDom?.innerText;
let chat_str = "";
if (searchparams) {
  window.main_search = true;
  $(".chat_gpt_content").append(`<div class="chat_response">
        <div class="chat_response_icon"></div>
        <span class="chat_response_msg">${searchparams}</span>
      </div>`);
  $(".chat_gpt_content").append(`<div class="chat_request">
                    <div class="chat_request_body">
                        <div class="chat_request_content">
                            <div class="chat_request_content_header">
                                <div class="chat_request_icon"><img
                                    src="https://img.staticdj.com/oss/operation/09c141bdbd585b7f552bece8bbf25eb0.png" alt="">
                                </div>
                                <div class="chat_request_info">
                                    <span class="chat_request_msg"></span>
                                    <div class="loding_request">
                                        <span class="loding_request_icon_1">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <circle cx="4" cy="4" r="4" fill="#AFAFAF"/>
                                          </svg>
                                        </span>
                                        <span class="loding_request_icon_2">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <circle cx="4" cy="4" r="4" fill="#C7C7C7"/>
                                          </svg>
                                        </span>
                                        <span class="loding_request_icon_3">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <circle cx="4" cy="4" r="4" fill="#D9D9D9"/>
                                          </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    <div class="unLikePosition" style="display: none;">
                            <div class="unLikePostionBtnList">
                                <div class="unLikePostionRegBtn">${
                                  language == "zh-cn"
                                    ? "问题已解决"
                                    : "Problem solved"
                                }</div>
                                <div class="unLikePostionRejBtn">${
                                  language == "zh-cn"
                                    ? "问题未解决"
                                    : "Problem not solved"
                                }</div>
                            </div>
                            <div class="unLikePostionText">
                                <textarea class="myTextarea" id="myTextarea" style="color: #000;" rows="4" cols="50" placeholder='${
                                  language == "zh-cn"
                                    ? "留言建议"
                                    : "Message suggestions"
                                }'></textarea>
                            </div>
                            <div class="unLikePostionTextLine"></div>
                            <div class="unLikePostionSubmit">
                                <div class="unLikePostionSubmitBtn">${
                                  language == "zh-cn" ? "提交" : "Submit"
                                }</div>
                            </div>
                        </div>
                </div>
                <div class="likeAndDislikeContent">
                        <div class="likeAndDislike">
                            <span class="ChatLikeBtn UPLike">
                                <svg class="UPLike" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86582 3.6645C8.98132 3.43351 9.21741 3.2876 9.47566 3.2876C10.2129 3.2876 10.9199 3.58046 11.4413 4.10177C11.9626 4.62308 12.2554 5.33012 12.2554 6.06736V6.95901H15.7695C16.015 6.95908 16.2579 7.01138 16.4817 7.11244C16.7054 7.2135 16.9051 7.36101 17.0675 7.54517C17.2298 7.72933 17.3512 7.94593 17.4234 8.18058C17.4956 8.41501 17.5171 8.66211 17.4865 8.90549M17.4865 8.90549L16.6998 15.1993C16.6471 15.6175 16.4435 16.0027 16.1275 16.2816C15.8114 16.5604 15.4044 16.7143 14.983 16.7144H3.70631C3.38637 16.7144 3.07955 16.5873 2.85332 16.3611C2.62709 16.1349 2.5 15.8281 2.5 15.5081V9.73877C2.5 9.41884 2.62709 9.11201 2.85332 8.88579C3.07954 8.65956 3.38637 8.53247 3.70631 8.53247H6.43184L8.86582 3.6645M6.17141 9.8961V15.3508H3.86364V9.8961H6.17141Z" fill="#8E8E8E"/>
                                </svg>
                            </span>
                            <span class="ChatUnLikeBtn DOWNLike">
                                <svg class="DOWNLike" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86582 16.3355C8.98132 16.5665 9.21741 16.7124 9.47566 16.7124C10.2129 16.7124 10.9199 16.4195 11.4413 15.8982C11.9626 15.3769 12.2554 14.6699 12.2554 13.9326V13.041H15.7695C16.015 13.0409 16.2579 12.9886 16.4817 12.8876C16.7054 12.7865 16.9051 12.639 17.0675 12.4548C17.2298 12.2707 17.3512 12.0541 17.4234 11.8194C17.4956 11.585 17.5171 11.3379 17.4865 11.0945M17.4865 11.0945L16.6998 4.80067C16.6471 4.38249 16.4435 3.99726 16.1275 3.71843C15.8114 3.4396 15.4044 3.28569 14.983 3.28557H3.70631C3.38637 3.28557 3.07955 3.41266 2.85332 3.63888C2.62709 3.86511 2.5 4.17194 2.5 4.49187V10.2612C2.5 10.5812 2.62709 10.888 2.85332 11.1142C3.07954 11.3404 3.38637 11.4675 3.70631 11.4675H6.43184L8.86582 16.3355M6.17141 10.1039V4.6492H3.86364V10.1039H6.17141Z" fill="#8E8E8E"/>
                                </svg>
                            </span>
                        </div>
                    </div>
  </div>`);
  try {
    var source = new EventSource(
      `https://langouste.shoplazza.com/api/langouste/gpt/stream/message?prompt=${searchparams}&locale=${language}`
    );
    var chat_gpt_clear_btn_disabled_main =
      document.getElementsByClassName("chat_gpt_clear_btn")[0];
    chat_gpt_clear_btn_disabled_main.disabled = true;
    window.win_chat_gpt_clear_btn_disabled = true;
    var saHelpCenterData =
      JSON.parse(sessionStorage.getItem("saHelpCenter")) || {};
    if (
      saHelpCenterData.ChatGptOptions !== "stop" &&
      !isNaN(saHelpCenterData.ChatGptOptions)
    ) {
      saHelpCenterData.ChatGptOptions += 1;
    }
    sessionStorage.setItem("saHelpCenter", JSON.stringify(saHelpCenterData));

    let chat_gpt_content_obj = JSON.parse(
      sessionStorage.getItem("chat_local_questions")
    );
    if (chat_gpt_content_obj) {
      chat_gpt_content_obj.push({
        ruler: "admin_role",
        info: searchparams,
      });
    } else {
      chat_gpt_content_obj = [];
      chat_gpt_content_obj.push({
        ruler: "admin_role",
        info: searchparams,
      });
    }
    var likeAndDislikeContentList = document.getElementsByClassName(
      "likeAndDislikeContent"
    );
    likeAndDislikeContentList[
      likeAndDislikeContentList.length - 1
    ].style.display = "none";
    sessionStorage.setItem(
      "chat_local_questions",
      JSON.stringify(chat_gpt_content_obj)
    );
    source.onerror = function () {
      $(".loding_request").last().remove();
      source.close(); // 关闭连接
      var data =
        "I'm sorry, but I can only assist in English. Could you please rephrase your question in English?";
      $(".chat_request_msg")
        .last()
        .append("<span>" + decodeURIComponent(data) + "</span>");
      window.main_search = false;
      likeAndDislikeContentList[
        likeAndDislikeContentList.length - 1
      ].style.display = "flex";
      chat_gpt_clear_btn_disabled_main.disabled = false;
      window.win_chat_gpt_clear_btn_disabled = false;
      if (chat_gpt_content_obj) {
        chat_gpt_content_obj.push({
          ruler: "chat_gpt_role",
          info: data,
        });
      } else {
        chat_gpt_content_obj = [];
        chat_gpt_content_obj.push({
          ruler: "chat_gpt_role",
          info: data,
        });
      }
      sessionStorage.setItem(
        "chat_local_questions",
        JSON.stringify(chat_gpt_content_obj)
      );
    };
    source.onmessage = function (event) {
      var data = event.data; // 将返回的数据解析为JSON格式
      $(".loding_request").last().remove();
      if (data == "!!!") {
        source.close(); // 关闭连接
        window.main_search = false;
        likeAndDislikeContentList[
          likeAndDislikeContentList.length - 1
        ].style.display = "flex";
        chat_gpt_clear_btn_disabled_main.disabled = false;
        window.win_chat_gpt_clear_btn_disabled = false;
        if (chat_gpt_content_obj) {
          chat_gpt_content_obj.push({
            ruler: "chat_gpt_role",
            info: chat_str,
          });
        } else {
          chat_gpt_content_obj = [];
          chat_gpt_content_obj.push({
            ruler: "chat_gpt_role",
            info: chat_str,
          });
        }
        sessionStorage.setItem(
          "chat_local_questions",
          JSON.stringify(chat_gpt_content_obj)
        );
      } else {
        chat_str += data;
        // 将数据展示到HTML上
        $(".chat_request_msg")
          .last()
          .append("<span>" + decodeURIComponent(data) + "</span>");
      }
    };
  } catch (error) {
    console.log("error", error);
  }
}
var saHelpCenterData = JSON.parse(sessionStorage.getItem("saHelpCenter")) || {};
saHelpCenterData.isTrackSources = false;
// 设置localStorage
sessionStorage.setItem("saHelpCenter", JSON.stringify(saHelpCenterData));
// 读取localStorage
var isTrackSourcesValue = saHelpCenterData.isTrackSources;
// 进入帮助中心时触发

var oldUrl = document.referrer;
setTimeout(() => {
  if (!isTrackSourcesValue) {
    if (oldUrl.includes("www.shoplazza")) {
      // 官网
      sa.track("help_center_pv", {
        user_sources: "admin",
        time: new Date().getTime(),
      });
      var saHelpCenterData = { isTrackSources: true };
      sessionStorage.setItem("saHelpCenter", JSON.stringify(saHelpCenterData));
    } else if (oldUrl.includes("myshoplazza.com")) {
      // 店铺
      sa.track("help_center_pv", {
        user_sources: "shop",
        time: new Date().getTime(),
      });
      var saHelpCenterData = { isTrackSources: true };
    } else {
      sa.track("help_center_pv", {
        user_sources: "other",
        time: new Date().getTime(),
      });
      var saHelpCenterData = { isTrackSources: true };
    }
  }
}, 1200);

setTimeout(() => {
  $('.results_search_input_form input[type="submit"]').click(function () {
    // 在这里添加点击事件的处理逻辑
    sa.track("help_center_questioner", { time: new Date().getTime() });
  });
  $('.header_search_input_form input[type="submit"]').click(function () {
    // 在这里添加点击事件的处理逻辑
    sa.track("help_center_questioner", { time: new Date().getTime() });
  });
}, 1000);
// window.onbeforeunload=function (){
//   if(window.location.href.includes('helpcenter.shoplazza.com')) {
//     sa.track('help_center_left', {time:new Date().getTime()});
//   }
// }
let beforeTime = 0,
  leaveTime = 0;

window.onunload = () => {
  leaveTime = new Date().getTime() - beforeTime;
  if (leaveTime <= 5) {
    sa.track("help_center_left", { time: new Date().getTime() });
    sessionStorage.clear();
  } else {
    console.log("====刷新=====");
  }
};

window.onbeforeunload = () => {
  beforeTime = new Date().getTime();
};

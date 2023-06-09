"use strict";

const url = document.location.href;
const mainUrl = "https://egg-type.web.app/";

const kakao_btn = document.querySelector(".shares .kakao");
const facebook_btn = document.querySelector(".shares .facebook");
const twitter_btn = document.querySelector(".shares .twitter");
const clip_btn = document.querySelector(".shares .clip");

// kakao
kakao_btn.addEventListener("click", () => {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: document.getElementById("typeName").innerText,
          description: document.getElementById("typeTag").innerText.replaceAll("\n", " "),
          imageUrl: document.getElementById("typeImage").src,
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: '테스트하기',
            link: {
              mobileWebUrl: mainUrl,
              webUrl: mainUrl,
            },
          },
          {
            title: '결과보기',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
    });
});

// facebook
facebook_btn.addEventListener("click", () => {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + curUrl);
});

// twitter
twitter_btn.addEventListener("click", () => {
    const text = '나는 어떤 계란 요리일까?'
    window.open("https://twitter.com/intent/tweet?text=" + text + "&url=" + tw_url);
});

// copy link
clip_btn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    alert("결과 링크가 복사되었습니다.");
    document.body.removeChild(textarea);
});

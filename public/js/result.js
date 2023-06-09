'use strict';

const typeTitle = document.getElementById("typeTitle");
const typeImage = document.getElementById("typeImage");
const typeName = document.getElementById("typeName");
const typeTag = document.getElementById("typeTag");
const typeInfo = document.getElementById("typeInfo");
const typeGuide = document.getElementById("typeGuide");
const typeUrl = document.getElementById("typeUrl");

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const idx = Number(urlParams.get('idx'));
    loadResult(idx);
});

function loadResult(idx) {
    typeTitle.innerHTML = r_info[idx]["typeTitle"];
    typeImage.src = r_info[idx]["typeImage"];
    typeName.innerHTML = r_info[idx]["typeName"];
    typeTag.innerHTML = r_info[idx]["typeTag"];

    for (let info of r_info[idx]["typeInfo"].split("/")) {
        const template = document.createElement("li");
        template.classList.add("li_tag");
        template.innerHTML = info;
        typeInfo.appendChild(template);
    }

    for (let guide of r_info[idx]["typeGuide"].split("/")) {
        const template = document.createElement("li");
        template.classList.add("guideline-item");
        template.innerHTML = guide;
        typeGuide.appendChild(template);
    }

    typeUrl.href = r_info[idx]["typeUrl"];
}

const reply_btn = document.querySelector(".resultBtn .retry");
const view_btn = document.querySelector(".resultBtn .viewType");
reply_btn.addEventListener('click', () => {
    location.href = '/';
});

view_btn.addEventListener('click', () => {
    location.href = '/view';
});

// 결과 다운로드
// document.querySelector(".resultDown").addEventListener('click', () => {
//     // const node = document.querySelector(".resultPage");

//     // domtoimage.toJpeg(node, { quality: 0.95 })
//     // .then(function(dataUrl) {
//     //     var link = document.createElement('a');
//     //     link.download = 'my-image-name.jpeg';
//     //     link.href = dataUrl;
//     //     link.click();
//     // })
//     // .catch(function(error) {
//     //     console.error('Oops, something went wrong!', error);
//     // });


//     html2canvas(document.querySelector(".resultPage")).then(canvas => {
//         const imgData = canvas.toDataURL("image/jpeg");
//         const link = document.createElement('a');
//         link.href = imgData;
//         link.download = 'result_capture.jpg';
    
//         link.click();
//     });
// });


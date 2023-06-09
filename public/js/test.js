"use strict";

const weight = JSON.parse(decodeUnicode(w));
let choices = {};
let qNum = 0;

const question_div = document.querySelector(".question_div");
const button_div = document.querySelector(".button_div");

const answer1 = document.getElementById("a1");
const answer2 = document.getElementById("a2");

const progress_num = document.getElementById("progress_num");
const progress_bar = document.querySelector(".progress-bar");

document.addEventListener("DOMContentLoaded", function() {
    loadQuestion(qNum);
});

function loadQuestion(idx) {
    // 질문
    question_div.innerHTML = "";
    const questionBox = document.createElement('div');
    questionBox.classList.add("question");
    questionBox.style.animation = 'fade-in 2s';
    questionBox.innerHTML = q[idx]['question'];
    question_div.appendChild(questionBox);
    
    // 답변
    button_div.innerHTML = "";
    for(let i=1; i<=2; i++) {
        const answer = document.createElement("button");
        answer.classList.add("btn");
        answer.id = `a${i}`;
        answer.setAttribute('onclick', `btnClick("${i}")`);
        answer.innerHTML = q[idx][`choice${i}`];
        answer.style.animation = 'fade-in 2s';
        button_div.appendChild(answer);
    }

    // 프로그레스
    progress_num.innerText = idx+1;
    progress_bar.style.width = `${idx+1}0%`;
}

function decodeUnicode(str) {
  return decodeURIComponent(
    atob(str)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
}

function prevClick() {
    if (qNum > 0) {
        qNum--
        loadQuestion(qNum);
    }
}

function btnClick(val) {
    const container = document.querySelector(".container");
    choices[qNum] = Number(val);
    if (qNum < q.length -1) {
        qNum++;
        loadQuestion(qNum);
    } else {
        const TotalList = weightCalc();
        const first = TotalList[0] > TotalList[1] ? 'E' : 'I';
        const second = TotalList[4] > TotalList[5] ? 'T' : 'F';
        const third = TotalList[2] > TotalList[3] ? 'J' : 'P';
        const typeIdx = r[first+second+third];

        container.innerHTML = "";

        const newDiv = document.createElement("div");
        newDiv.classList.add("loading");
        newDiv.innerHTML = `
            <p>loading...</p>
            <img src='/images/egg_loading.gif'>
        `;

        // if (window.innerWidth <= 900) {
        //     newDiv.innerHTML = `
        //         <p>loading...</p>
        //         <img src='/images/egg_loading_white.gif'>
        //     `;
        // } else {
        //     newDiv.innerHTML = `
        //         <p>loading...</p>
        //         <img src='/images/egg_loading.gif'>
        //     `;
        // }

        container.appendChild(newDiv);
        setTimeout(() => {
            location.href = `/result?idx=${typeIdx}`;
        }, 3000)
    }
}

function weightCalc() {
    let sumList = [0, 0, 0, 0, 0, 0];
    for (let i in choices) {
        for (let [index, item] of weight[i][choices[i]].entries()) {
            sumList[index] += item;
        }
    }
    return sumList;
}
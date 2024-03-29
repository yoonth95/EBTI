"use strict";

const q = [
  {
    question: `<i class="fa-solid fa-face-grin-beam-sweat"></i>주말에 친구들이 갑자기 <br>방문했습니다. 당신의 반응은?`,
    choice1: "즉석에서 무언가를 요리하여 <br>함께 먹는다.",
    choice2: "사전에 말이 있었으면 <br>좋았을 텐데...",
  },
  {
    question: `<i class="fa-solid fa-book-open-reader"></i>식당에서 메뉴를 선택할 때, <br>당신은?`,
    choice1: "이미 먹어 본 메뉴를 선택한다.",
    choice2: "새로운 메뉴를 시도해본다.",
  },
  {
    question: `<i class="fa-solid fa-list-check"></i>요리를 시작하기 전에 <br>어떻게 준비하나요?`,
    choice1: "레시피를 읽고, 필요한 재료를 <br>미리 준비한다.",
    choice2: "그때그때 필요한 재료를 <br>찾아다닌다.",
  },
  {
    question: `<i class="fa-solid fa-person-circle-question"></i>요리할 때 가장 중요하게 <br>생각하는 것은 무엇인가요?`,
    choice1: "맛과 완성도",
    choice2: "사람들이 어떤 반응을 보일지",
  },
  {
    question: `<i class="fa-solid fa-pencil"></i>요리 후기를 남길 때, 당신은?`,
    choice1: "개인적인 요리 일지에 <br>기록한다.",
    choice2: "나의 요리를 소셜 미디어에 <br>공유한다.",
  },
  {
    question: `<i class="fa-solid fa-utensils"></i>음식을 할 때, <br>주로 어떤 요리를 만드나요?`,
    choice1: "새로운 레시피나 독특한 재료를 <br>사용한 요리를 만든다.",
    choice2: "잘 알고 있는 요리를 만든다.",
  },
  {
    question: `<i class="fa-solid fa-map-location-dot"></i>식당을 고를 때,<br>당신은?`,
    choice1: "그때의 기분과 상황에 따라 결정한다.",
    choice2: "미리 검색하고 결정한다.",
  },
  {
    question: `<i class="fa-solid fa-kitchen-set"></i>다른 사람을 위해 요리할 때,<br>고려하는 것은 무엇인가요?`,
    choice1: "상대방의 취향을 <br>최우선으로 고려한다.",
    choice2: "실용적이고 효율적인 방식으로 <br>요리를 한다.",
  },
  {
    question: `<i class="fa-solid fa-children"></i>요리할 때, <br>누구와 함께 하는 것을 <br>선호하나요?`,
    choice1: "혼자 요리하는 것이 더 편하다.",
    choice2: "친구들이나 가족과 <br>함께하는 것이 더 즐겁다.",
  },
  {
    question: `<i class="fa-solid fa-receipt"></i>어떤 방법을 선호하나요?`,
    choice1: "레시피를 따르며 <br>일정한 양의 재료를 사용한다.",
    choice2: "레시피를 참고로만 하고 <br>나만의 요리를 만든다.",
  },
  {
    question: `<i class="fa-regular fa-thumbs-up"></i>요리할 때 <br>어떤 것이 더 마음에 드나요?`,
    choice1: "요리 과정에서 생기는 <br>뜻밖의 상황이 재미있고 흥미롭다.",
    choice2: "요리를 계획하고 준비하는 것이 <br>마음을 안정시킨다.",
  },
  {
    question: `<i class="fa-regular fa-face-sad-tear"></i>요리에서 실패했을 때, <br>당신은?`,
    choice1: "다음에는 어떻게 하면 <br>실패하지 않을지 고민한다.",
    choice2: "그래도 노력했으니 만족한다.",
  }
];

const w = "eyIwIjp7IjEiOlsxLDAsMCwwLDAsMCwwLDBdLCIyIjpbMCwxLDAsMCwwLDAsMCwwXX0sIjEiOnsiMSI6WzAsMCwxLDAsMCwwLDAsMF0sIjIiOlswLDAsMCwxLDAsMCwwLDBdfSwiMiI6eyIxIjpbMCwwLDAsMCwxLDAsMCwwXSwiMiI6WzAsMCwwLDAsMCwxLDAsMF19LCIzIjp7IjEiOlswLDAsMCwwLDAsMCwxLDBdLCIyIjpbMCwwLDAsMCwwLDAsMCwxXX0sIjQiOnsiMSI6WzAsMSwwLDAsMCwwLDAsMF0sIjIiOlsxLDAsMCwwLDAsMCwwLDBdfSwiNSI6eyIxIjpbMCwwLDAsMSwwLDAsMCwwXSwiMiI6WzAsMCwxLDAsMCwwLDAsMF19LCI2Ijp7IjEiOlswLDAsMCwwLDAsMSwwLDBdLCIyIjpbMCwwLDAsMCwxLDAsMCwwXX0sIjciOnsiMSI6WzAsMCwwLDAsMCwwLDAsMV0sIjIiOlswLDAsMCwwLDAsMCwxLDBdfSwiOCI6eyIxIjpbMCwxLDAsMCwwLDAsMCwwXSwiMiI6WzEsMCwwLDAsMCwwLDAsMF19LCI5Ijp7IjEiOlswLDAsMSwwLDAsMCwwLDBdLCIyIjpbMCwwLDAsMSwwLDAsMCwwXX0sIjEwIjp7IjEiOlswLDAsMCwwLDAsMSwwLDBdLCIyIjpbMCwwLDAsMCwxLDAsMCwwXX0sIjExIjp7IjEiOlswLDAsMCwwLDAsMCwxLDBdLCIyIjpbMCwwLDAsMCwwLDAsMCwxXX19";

const r = {
  "ESTP": 1,
  "ISTJ": 2,
  "ISFP": 3,
  "ESTJ": 4,
  "ISTP": 5,
  "ISFJ": 6,
  "INFJ": 7,
  "INTJ": 8,
  "ENTP": 9,
  "ESFJ": 10,
  "INFP": 11,
  "ENFJ": 12,
  "ESFP": 13,
  "ENFP": 14,
  "INTP": 15,
  "ENTJ": 16,
}

const r_info = {
  1: {
    "typeName": "계란 김밥",
    "typeTitle": "현실적인 모험가",
    "typeTag": "#현실주의자 #즉흥적인결정 <br>#실용주의",
    "typeInfo": `실용적이고 현실적임/융통성 있음/다양한 재료를 활용하는 창의성 있음/감각적이고 실제적인 경험을 선호함/기회를 즉시 포착함/즉흥적으로 행동함/사람들과 함께 있을 때 에너지를 얻음/적응력과 재치 있음/결과 중심적임/빠른 의사결정을 할 수 있음`,
    "typeGuide": `장기적인 계획을 세우고 이를 따르는 연습을 해보세요./객관적인 분석과 자료 수집에 의존하려는 경향을 개발하세요./타인의 감정과 입장을 이해하려는 노력을 기울이세요.`,
    "typeImage": '/images/1.png',
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80+%EA%B9%80%EB%B0%A5"
  },
  2: {
    "typeName": "계란 말이",
    "typeTitle": "체계적인 관리자",
    "typeTag": "#질서정연 #엄격한규칙지키기 <br>#일관성있는생각",
    "typeInfo": `세부적인 사항에 집중함/체계적이고 조직적임/실용적이고 현실적임/책임감이 강함/전통과 규칙을 중요시함/계획에 따라 일을 처리함/집중력이 뛰어남/한 가지 일에 집중해서 완성하는 것을 선호함/현실적인 해결책을 찾는 데 능숙함/항상 준비가 되어 있고 믿을 수 있음`,
    "typeGuide": `새로운 아이디어와 접근법에 대해 열린 마음을 가지려고 노력하세요./다른 사람들의 감정에 민감하게 반응하는 법을 배우세요./융통성을 키우고 변화를 받아들이는 법을 배우세요.`,
    "typeImage": "/images/2.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80+%EB%A7%90%EC%9D%B4"
  },
  3: {
    "typeName": "계란 볶음밥",
    "typeTitle": "독창적인 예술가",
    "typeTag": "#아티스틱솔로몬 #내색하지않는감성 <br>#유연한사고방식",
    "typeInfo": `개성적이고 독창적임/적응력과 융통성 있음/개인의 가치와 신념을 중요시함/현재의 경험에 집중함/외부 세계에 대한 깊은 통찰력을 가짐/사람들과 동물에 대한 따뜻한 감정을 가짐/경험을 통해 배우는 것을 선호함/세부 사항에 민감함/스트레스를 피하려 함/현재를 즐기려고 함`,
    "typeGuide": `자신의 감정을 표현하고 의사소통하는 방법을 배우세요./개인의 가치와 믿음을 타인과 공유하는 법을 배우세요./계획을 세우고 이를 따르는 연습을 해보세요.`,
    "typeImage": "/images/3.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80+%EB%B3%B6%EC%9D%8C%EB%B0%A5"
  },
  4: {
    "typeName": "계란 샌드위치",
    "typeTitle": "철저한 관리자",
    "typeTag": "#효율적인조직가 #분명한결정 <br>#구조적인생각",
    "typeInfo": `실질적이고 체계적임/세부 사항에 민감함/실질적인 결과를 중요시함/효율성과 조직을 좋아함/명확한 규칙과 기대치를 선호함/목표 지향적임/논리적이고 분석적임/책임감이 강함/결정적임/사회적 순서를 중요시함`,
    "typeGuide": `다른 사람들의 관점과 감정을 이해하려는 노력을 기울이세요./예상치 못한 상황이나 변화를 받아들이는 능력을 개발하세요./지속적인 자기개발과 학습에 대한 중요성을 인식하세요.`,
    "typeImage": "/images/4.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80+%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98"
  },
  5: {
    "typeName": "계란 후라이",
    "typeTitle": "현실적인 해결사",
    "typeTag": "#현실적인사고 #독립적인행동 <br>#합리적인결정",
    "typeInfo": `간단하고 실질적임/현실적인 문제 해결을 좋아함/독립적이고 자유로움을 좋아함/논리적이고 분석적임/실험적임/순간적인 기회를 잘 이용함/직접적이고 정직함/융통성 있음/적응력이 뛰어남/실용적인 해결책을 찾는 데 능숙함`,
    "typeGuide": `장기적인 목표 설정과 계획을 세우는 연습을 해보세요./타인의 감정과 입장을 이해하려는 노력을 기울이세요./팀 작업과 협력에 더 많이 참여하는 방법을 배우세요.`,
    "typeImage": "/images/5.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80+%ED%9B%84%EB%9D%BC%EC%9D%B4"
  },
  6: {
    "typeName": "계란국",
    "typeTitle": "배려심 많은 보호자",
    "typeTag": "#배려심넘치는친구 #정확한기억력 <br>#일관성있는사랑",
    "typeInfo": `전통적이고 편안함/보호적이고 배려심 많음/세부 사항에 주의를 기울임/실용적이고 현실적임/사람들의 감정과 필요를 잘 이해함/책임감이 강하고 충실함/조직적이고 체계적임/환경을 잘 관찰함/일상의 순서와 조직을 유지하는 데 능숙함/논리보다 감정에 더 의존함`,
    "typeGuide": `변화를 받아들이는 것에 대한 열린 마음을 가지려고 노력하세요./자신의 감정을 표현하고 공유하는 연습을 해보세요./장기적인 목표를 설정하고 계획을 세우는 방법을 배우세요.`,
    "typeImage": "/images/6.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80%EA%B5%AD"
  },
  7: {
    "typeName": "계란찜",
    "typeTitle": "직관적인 카운셀러",
    "typeTag": "#인간미넘치는통찰자 #따뜻한이해심 <br>#창의적인비전",
    "typeInfo": `조심스럽고 세심함/독창적이고 직관적임/개인의 가치와 신념을 중요시함/사람들의 감정과 필요를 이해함/심미적 감각이 뛰어남/사회적 공정성을 중요시함/미래 지향적이고 이상주의적임/일의 의미와 목적에 중점을 둠/세상을 개선하려는 강한 의지를 가짐/복잡한 아이디어와 이론을 이해하는 능력이 있음`,
    "typeGuide": `완벽주의를 너무 추구하지 않도록 주의하세요./자신의 생각과 감정을 구체적으로 표현하는 연습을 해보세요./자신의 필요와 감정을 타인에게 명확하게 전달하는 방법을 배우세요.`,
    "typeImage": "/images/7.png",
    "typeUrl": `https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80%EC%B0%9C`
  },
  8: {
    "typeName": "삶은 계란",
    "typeTitle": "전략적인 건축가",
    "typeTag": "#독립적인비전 #전략적인생각 <br>#논리적인판단",
    "typeInfo": `단순하면서도 전략적임/독립적이고 자기 주도적임/미래 지향적이고 계획적임/복잡한 아이디어와 이론을 이해하고 사용하는 능력이 있음/기존 방식에 만족하지 않음/개인의 능력과 성과를 중요시함/합리적이고 논리적임/자신의 아이디어를 현실화하는 능력이 뛰어남/혼자서 일하는 것을 선호함/항상 향상과 발전을 추구함`,
    "typeGuide": `타인의 감정과 관점을 이해하고 공감하는 법을 배우세요./작은 성공이나 일상적인 즐거움을 인정하고 축하하는 방법을 배우세요./감정을 표현하고 표현하는 연습을 해보세요.`,
    "typeImage": "/images/8.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%82%B6%EC%9D%80+%EA%B3%84%EB%9E%80"
  },
  9: {
    "typeName": "스크램블 에그",
    "typeTitle": "창의적인 논변가",
    "typeTag": "#끊임없는아이디어 #토론하는즐거움 <br>#새로운것에도전",
    "typeInfo": `창의적이고 독창적임/새로운 아이디어와 가능성을 좋아함/토론을 좋아하고 도전적임/통찰력 있음/유연하고 적응력 있음/복잡한 문제를 해결하는 능력이 있음/다양한 관점을 이해하고 평가하는 능력이 있음/변화와 새로운 경험을 선호함/통찰력과 전략적 사고를 갖춤/고정관념에 얽매이지 않음`,
    "typeGuide": `계획을 세우고 이를 실천하는 연습을 해보세요./피드백을 수용하고 이를 통해 성장하는 방법을 배우세요./다른 사람들의 감정과 입장을 이해하려는 노력을 기울이세요.`,
    "typeImage": '/images/9.png',
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%8A%A4%ED%81%AC%EB%9E%A8%EB%B8%94+%EC%97%90%EA%B7%B8"
  },
  10: {
    "typeName": "에그 베네딕트",
    "typeTitle": "세심한 제공자",
    "typeTag": "#사회적인조화 #헌신적인사랑 <br>#구체적인배려",
    "typeInfo": `섬세하고 사교적임/타인의 감정과 필요를 잘 이해함/협동적이고 참여를 선호함/전통과 순서를 중요시함/타인을 돕는 데 탁월함/친절하고 책임감 있음/사람들 사이의 조화를 추구함/충성심이 강함/실용적이고 현실적임/효율적인 일의 조직과 진행을 좋아함`,
    "typeGuide": `개인적인 목표를 설정하고 이를 달성하는 연습을 해보세요./타인의 관점과 방식을 이해하고 받아들이는 법을 배우세요./너무 많은 책임을 맡지 않도록 주의하세요.`,
    "typeImage": "/images/10.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%97%90%EA%B7%B8+%EB%B2%A0%EB%84%A4%EB%94%95%ED%8A%B8"
  },
  11: {
    "typeName": "에그 타르트",
    "typeTitle": "이상적인 중재자",
    "typeTag": "#창조적인영감 #따뜻한동정심 <br>#개인적인가치중시",
    "typeInfo": `독창적이고 창조적임/개인의 가치와 신념을 중요시함/이상주의적임/세상을 개선하려는 강한 의지를 가짐/인간의 복잡한 감정을 이해함/사회적 공정성을 중요시함/자기 자신과 타인의 개성을 존중함/경험을 통해 배우는 것을 선호함/스트레스를 피하려 함/동정심이 많음`,
    "typeGuide": `자신의 생각과 감정을 명확하게 표현하는 방법을 배우세요./현실적인 문제 해결 방법에 집중하는 연습을 해보세요./스스로를 너무 엄격하게 판단하지 않도록 주의하세요.`,
    "typeImage": "/images/11.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%97%90%EA%B7%B8+%ED%83%80%EB%A5%B4%ED%8A%B8"
  },
  12: {
    "typeName": "에그 머핀",
    "typeTitle": "이해심 많은 선생님",
    "typeTag": "#사교적인통찰자 #따뜻한사랑 <br>#공감능력강함",
    "typeInfo": `사교적이고 이해심 많음/다른 사람을 돕는 데 탁월함/긍정적이고 인화적임/타인의 감정과 가치를 이해함/조화를 중요시하며 팀워크를 잘 함/이상주의적이고 미래 지향적임/의사소통 능력이 뛰어남/강한 리더십을 보임/복잡한 사람들 사이의 관계를 이해하는 능력이 있음/다른 사람의 관점과 감정을 잘 이해함`,
    "typeGuide": `자신의 필요와 감정을 타인에게 명확하게 전달하는 법을 배우세요./자신의 감정 상태를 인식하고 관리하는 방법을 배우세요./스스로에게 필요한 시간과 공간을 확보하는 법을 배우세요.`,
    "typeImage": "/images/12.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%97%90%EA%B7%B8+%EB%A8%B8%ED%95%80"
  },
  13: {
    "typeName": "에그 인 헬",
    "typeTitle": "활기찬 연예인",
    "typeTag": "#즉흥적인놀이 #사람을위한예술 <br>#행복을추구",
    "typeInfo": `재미있고 활기찬 성격임/사회적이고 친화력이 있음/경험적인 학습을 선호함/실제적이고 실질적임/유연하고 적응력이 있음/다른 사람과 함께하는 것을 좋아함/현재의 즐거움과 즉흥적인 활동을 선호함/감정 표현이 풍부함/관대하고 도움을 잘 줌/자신의 감정과 타인의 감정을 잘 이해함`,
    "typeGuide": `장기적인 목표 설정과 계획을 세우는 연습을 해보세요./자신의 행동이 타인에게 미치는 영향을 이해하는 법을 배우세요./타인의 관점과 방식을 이해하려는 노력을 기울이세요.`,
    "typeImage": "/images/13.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%97%90%EA%B7%B8+%EC%9D%B8+%ED%97%AC"
  },
  14: {
    "typeName": "오믈렛",
    "typeTitle": "열정적인 챔피언",
    "typeTag": "#창조적인영감 #개방적인생각 <br>#신선한아이디어",
    "typeInfo": `개방적이고 창의적임/열정적이고 열린 마음을 가짐/새로운 가능성을 탐색하는 것을 좋아함/사람들과 아이디어를 공유하는 것을 즐김/감정 표현이 풍부하며 이해심 많음/유연하고 적응력이 뛰어남/자신의 가치와 신념을 중요시함/다양한 관점을 이해하고 수용함/감정적인 연결을 중요시함/기존의 규칙이나 방법을 뛰어넘는 것을 선호함`,
    "typeGuide": `디테일에 주의를 기울이는 연습을 해보세요./장기적인 목표를 설정하고 이를 달성하는 방법을 배우세요./타인의 피드백을 받아들이는 능력을 개발하세요.`,
    "typeImage": "/images/14.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%98%A4%EB%AF%88%EB%A0%9B"
  },
  15: {
    "typeName": "포치드 에그",
    "typeTitle": "분석적인 사색가",
    "typeTag": "#논리적인사고 #독립적인판단 <br>#창의적인해결책",
    "typeInfo": `분석적이고 이론적임/복잡한 문제를 해결하는 것을 즐김/논리적이고 합리적임/독립적이고 자기 주도적임/새로운 아이디어와 전략을 선호함/공정성과 객관성을 중요시함/세부 사항에 대한 깊은 이해가 있음/비평적 사고 능력이 뛰어남/효율성을 중요시함/기존의 규칙에 얽매이지 않고 독창적인 방법을 찾음`,
    "typeGuide": `감정을 표현하고 의사소통하는 법을 배우세요./구체적인 목표를 설정하고 이를 달성하는 연습을 해보세요./타인의 관점과 감정을 이해하려는 노력을 기울이세요.`,
    "typeImage": "/images/15.png",
    "typeUrl": `https://www.youtube.com/results?search_query=%ED%8F%AC%EC%B9%98%EB%93%9C+%EC%97%90%EA%B7%B8`
  },
  16: {
    "typeName": "계란 카레",
    "typeTitle": "결정적인 사령관",
    "typeTag": "#전략적인지도자 #강력한결정 <br>#논리적인조직가",
    "typeInfo": `결정적이고 계획적임/독립적이며 리더십이 뛰어남/합리적이고 논리적임/목표 지향적임/복잡한 문제를 해결하는 능력이 있음/효율성과 조직을 중요시함/강한 의지와 독립적인 성향을 가짐/자신의 의견을 명확하게 표현함/계획을 세우고 이행하는 능력이 뛰어남/빠르고 결정적인 판단 능력을 가짐`,
    "typeGuide": `타인의 감정과 관점을 이해하려는 노력을 기울이세요./개인적인 감정을 표현하고 공유하는 방법을 배우세요./생활에서의 소소한 즐거움을 인정하고 즐기는 법을 배우세요.`,
    "typeImage": "/images/16.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80+%EC%B9%B4%EB%A0%88"
  }
}

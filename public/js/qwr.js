"use strict";

const q = [
  {
    question: `<i class="fa-solid fa-children"></i>새로운 환경이나 <br>변화에 직면했을 때, 나는?`,
    choice1: "주변 사람들과 이야기하며 <br>적응하는 것을 선호한다.",
    choice2: "혼자 생각하며 적응하는 것을 선호한다.",
  },
  {
    question: `<i class="fa-solid fa-list-check"></i>다수의 일을 처리할 때, <br>나는?`,
    choice1: "한 가지 일에 집중하여 <br>철저하게 처리한다.",
    choice2: "여러 일을 동시에 처리한다.",
  },
  {
    question: `<i class="fa-regular fa-thumbs-up"></i>성공한 프로젝트를 <br>마무리하였을 때, 나는?`,
    choice1: "성공을 분석하고 개선 방법을 모색한다.",
    choice2: "감격의 순간에 잠시 머무르며, <br>이룬 성과에 대해 기뻐한다.",
  },
  {
    question: `<i class="fa-solid fa-person-chalkboard"></i>회의나 토론에서의 나는?`,
    choice1: "다른 사람들의 의견을 듣고, <br>내 생각을 정리한다.",
    choice2: "적극적으로 의견을 제시하고 <br>이야기를 주도한다.",
  },
  {
    question: `<i class="fa-solid fa-video"></i>영화를 보는 이유는?`,
    choice1: "새로운 이야기와 경험을 <br>제공하기 때문이다.",
    choice2: "편안함과 안식을 <br>제공하기 때문이다.",
  },
  {
    question: `<i class="fa-solid fa-person-hiking"></i>어려운 상황에 <br>직면했을 때, 나는?`,
    choice1: "포기하지 않고 <br>해결하려고 노력한다.",
    choice2: "포기하고 다른 것을 찾는다.",
  },
  {
    question: `<i class="fa-solid fa-cart-shopping"></i>소품을 구매할 때, 나는?`,
    choice1: "독특하고 참신한 디자인을 <br>선호한다.",
    choice2: "실용성이 있는 물건을 <br>선호한다.",
  },
  {
    question: `<i class="fa-solid fa-person-digging"></i>작업을 할 때, 나는?`,
    choice1: "다른 사람들과 협업을 <br>선호한다.",
    choice2: "혼자 하는 것을 선호한다.",
  },
  {
    question: `<i class="fa-solid fa-diagram-project"></i>프로젝트를 진행할 때, <br>나는?`,
    choice1: "과정을 즐기며 <br>유연하게 변화에 대응한다.",
    choice2: "결과에 집중하고 계획대로 <br>진행한다.",
  },
  {
    question: `<i class="fa-solid fa-people-arrows"></i>관계에서 가장 중요하게 <br>생각하는 것은?`,
    choice1: "사실적이고 논리적인 의사소통",
    choice2: "감정적인 연결과 이해",
  }
];

const w = "eyIwIjp7IjEiOlsxLDAsMCwwLDAsMF0sIjIiOlswLDEsMCwwLDAsMF19LCIxIjp7IjEiOlswLDAsMSwwLDAsMF0sIjIiOlswLDAsMCwxLDAsMF19LCIyIjp7IjEiOlswLDAsMCwwLDEsMF0sIjIiOlswLDAsMCwwLDAsMV19LCIzIjp7IjEiOlswLDEsMCwwLDAsMF0sIjIiOlsxLDAsMCwwLDAsMF19LCI0Ijp7IjEiOlswLDAsMCwwLDAsMF0sIjIiOlswLDAsMCwwLDAsMF19LCI1Ijp7IjEiOlswLDAsMSwwLDAsMF0sIjIiOlswLDAsMCwxLDAsMF19LCI2Ijp7IjEiOlswLDAsMCwwLDAsMV0sIjIiOlswLDAsMCwwLDEsMF19LCI3Ijp7IjEiOlsxLDAsMCwwLDAsMF0sIjIiOlswLDEsMCwwLDAsMF19LCI4Ijp7IjEiOlswLDAsMCwxLDAsMF0sIjIiOlswLDAsMSwwLDAsMF19LCI5Ijp7IjEiOlswLDAsMCwwLDEsMF0sIjIiOlswLDAsMCwwLDAsMV19fQ==";

const r = {
  "ITJ": 1,
  "ITP": 2,
  "EFP": 3,
  "ETJ": 4,
  "ETP": 5,
  "IFP": 6,
  "EFJ": 7,
  "IFJ": 8,
}

const r_info = {
  1: {
    "typeName": "삶은 계란",
    "typeTitle": "안정적인 마라토너",
    "typeTag": "#자신만의세계 #차분한강인함 <br>#조용한결단력",
    "typeInfo": `복잡하고 어려운 문제에도 차분하게 대응/일관된 성격과 행동으로 안정감 제공/겉보기와 달리 안정적이고 강인한 면모/신중하게 고민하고 결정, 변치 않는 성격/일상에서 안정을 찾으며 혼란스러움 피함/남의 시선 신경 쓰지 않고, 자신의 일에 집중/계획적이고 체계적인 행동으로 예측 가능/단순하고 이해하기 쉬운 것을 좋아함/안정적인 환경을 선호함/주관이 뚜렷하고, 생각을 분명하게 표현함`,
    "typeGuide": `다른 사람의 감정에 민감하게 반응하려 노력하세요. 이는 공감력을 키우는 데 도움이 될 것입니다./때로는 변화를 받아들이는 것이 좋습니다. 모든 것이 항상 계획대로 진행되지 않음을 이해하려고 노력하세요./자신의 생각과 감정을 다른 사람에게 더 열린 방식으로 표현하려고 노력하세요.`,
    "typeImage": '/images/steam_egg.png',
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%82%B6%EC%9D%80+%EA%B3%84%EB%9E%80"
  },
  2: {
    "typeName": "계란 후라이",
    "typeTitle": "독립적인 해결사",
    "typeTag": "#독특한시스템 #서늘한분석력 <br>#창조적인지능",
    "typeInfo": `분석적이고 논리적인 사고력을 가지고 있습니다./복잡한 문제를 해결하는 데 탁월한 능력을 가지고 있습니다./독립적으로 행동하며, 다른 사람의 의견이나 간섭을 그다지 원하지 않습니다./창의적인 발상을 통해 새로운 아이디어를 만들어냅니다./공정성과 공평성을 중요하게 생각합니다./상세한 관찰력을 가지고 있습니다./자신만의 시스템을 만드는 것을 선호합니다./현실적이고 실질적인 결과를 중시합니다./변화에 유연하게 대응하는 능력을 가지고 있습니다./주관적인 의견보다는 객관적인 팩트를 더 중요하게 생각합니다.`,
    "typeGuide": `사람들과의 사회적 상호작용을 더 많이 찾아보세요. 이는 교류를 통해 더 많은 관점을 이해하는 데 도움이 됩니다./감정적인 측면에 대한 이해를 높이려 노력하세요. 이는 논리와 이성만으로는 이해하기 어려운 문제를 해결하는 데 도움이 됩니다./계획을 세우고 따르는 습관을 들이려 노력하세요. 이는 목표를 달성하는 데 도움이 됩니다.`,
    "typeImage": "/images/egg_fried.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80+%ED%9B%84%EB%9D%BC%EC%9D%B4"
  },
  3: {
    "typeName": "스크램블 에그",
    "typeTitle": "사회적인 에너지파",
    "typeTag": "#분위기메이커 #스포티브한친구 <br>#가변성의매력",
    "typeInfo": `사람들과 함께하는 것을 즐깁니다./감정적인 표현이 풍부하며 이를 통해 다른 사람과의 연결을 추구합니다./상황에 적응하는 능력이 뛰어나며 유연하게 대응합니다./즐거움과 재미를 중요하게 생각합니다./다른 사람의 감정에 민감하며 이해하는 능력이 있습니다./사회적인 활동을 즐깁니다./새로운 경험과 모험을 즐깁니다./독창적인 아이디어와 통찰력을 발휘합니다./자유로운 생각과 행동을 중요하게 생각합니다./타인을 돕는 것에 큰 만족감을 느낍니다.`,
    "typeGuide": `장기적인 목표를 세우고 계획을 세워 따르는 것이 중요합니다. 이는 의사결정에 도움이 됩니다./감정을 관리하고 통제하는 방법을 배우는 것이 중요합니다. 이는 감정이 판단력을 흐리는 것을 방지합니다./자신의 감정을 균형 잡히게 표현하는 방법을 배우는 것이 중요합니다.`,
    "typeImage": "/images/scrambled.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%8A%A4%ED%81%AC%EB%9E%A8%EB%B8%94+%EC%97%90%EA%B7%B8"
  },
  4: {
    "typeName": "계란 말이",
    "typeTitle": "안정적인 리더",
    "typeTag": "#체계적인조직가 #논리적인결정력 <br>#프로젝트의지휘자",
    "typeInfo": `목표 지향적이며 계획을 세우는 데 탁월한 능력을 가지고 있습니다./뛰어난 리더십을 가지고 있습니다./객관적이며 합리적인 결정을 내립니다./체계적이고 조직적입니다./효율성을 중시하며 시간 관리에 능합니다./엄격한 기준을 설정하고 이를 유지합니다./실용적이고 실질적인 결과를 추구합니다./자신의 의견을 단호하게 표현합니다./변화를 좋아하지 않으며 안정된 환경을 선호합니다./사회적인 규칙과 질서를 중요하게 생각합니다.`,
    "typeGuide": `다른 사람의 의견과 관점을 더욱 존중하려고 노력하세요. 이는 팀워크를 강화하는 데 도움이 됩니다./감정적인 측면을 고려하여 판단하려고 노력하세요. 이는 다른 사람에게 공감을 표현하는 데 도움이 됩니다./완벽주의를 과도하게 추구하지 않으려 노력하세요. 완벽은 항상 가능한 것이 아닙니다.`,
    "typeImage": "/images/roll_egg.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80+%EB%A7%90%EC%9D%B4"
  },
  5: {
    "typeName": "오믈렛",
    "typeTitle": "창의적인 모험가",
    "typeTag": "#감각적인탐험가 #다양성의사랑 <br>#혁신적인아이디어",
    "typeInfo": `창의적이고 새로운 아이디어를 만드는 데 능합니다./뛰어난 문제 해결 능력을 가지고 있습니다./적응성이 뛰어나며 변화를 잘 받아들입니다./사회적 활동을 즐깁니다./타인의 의견을 존중하며 다양성을 인정합니다./새로운 경험과 모험을 즐깁니다./감각적이고 세세한 관찰력을 가지고 있습니다./공정성과 공평성을 중요하게 생각합니다./호기심이 많으며 항상 새로운 것을 배우려고 합니다./열정적이며 다른 사람을 돕는 것을 즐깁니다.`,
    "typeGuide": `장기적인 계획을 세우고 이를 따르는 것이 중요합니다. 이는 목표를 달성하는데 도움이 됩니다./자신의 감정과 타인의 감정을 더욱 존중하고 이해하려 노력하세요./진지한 상황이나 문제를 적절하게 처리하는 방법을 배우는 것이 중요합니다.`,
    "typeImage": "/images/omelet.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EC%98%A4%EB%AF%88%EB%A0%9B"
  },
  6: {
    "typeName": "계란 샌드위치",
    "typeTitle": "독특한 예술가",
    "typeTag": "#감성적인예술성 #일관된독창력 <br>#고집스런성취욕",
    "typeInfo": `자신만의 독특한 방식으로 일을 처리하고, 개인의 가치와 독립성을 중요하게 여김/예술적인 감각이 뛰어나며, 주변 환경에 대한 세심한 주의를 기울임/일단 마음을 먹으면 그것을 이루기 위해 고집스럽게 행동/감정이 풍부하며, 다른 사람의 감정에 대해 이해하고 공감하는 능력이 뛰어남/변경사항이나 불확실성에 대한 대처능력이 좋음. 변화를 받아들이는 유연성이 있음/자신만의 판단에 따라 행동하며, 다른 사람의 간섭을 받지 않고 싶어 함/창조적인 아이디어와 독특한 접근법을 통해 문제를 해결하는 능력이 있음/타인의 관점과 생각을 이해하려 노력하며, 다양성을 존중함/사물의 내면과 본질에 대해 깊이 생각하는 경향이 있음`,
    "typeGuide": `자신의 감정을 건강한 방법으로 표현하고 관리하는 방법을 배우는 것이 중요합니다./다른 사람의 의견과 생각을 더욱 존중하려 노력하세요./필요한 때에는 논리적이고 분석적인 접근법을 사용하는 것이 중요합니다.`,
    "typeImage": "/images/egg_sandwich.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80+%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98"
  },
  7: {
    "typeName": "계란 볶음밥",
    "typeTitle": "사람 중심의 조화로운 커넥터",
    "typeTag": "#인간관계의프로 #공감능력의마스터 <br>#사람을위한리더",
    "typeInfo": `사람들과의 교류를 즐기고, 그룹에서 활동하는 것을 선호합니다./다른 사람들을 연결시키고, 그들 사이의 조화를 이루는 것을 좋아합니다./다른 사람의 감정을 잘 이해하고, 그들의 입장에서 생각하는 능력이 뛰어납니다./주어진 역할과 책임에 대해 매우 신중하게 대합니다./미래를 계획하고 조직화하는 능력이 있습니다./탁월한 의사소통 능력을 가지고 있어, 사람들과의 대화를 통해 관계를 유지하고 갈등을 해결하는 데 탁월합니다./자신의 감정을 솔직하게 표현하며, 다른 사람들의 진심성을 중요하게 생각합니다./타인을 돕는 것을 중요하게 생각하며, 이를 통해 만족감을 얻습니다./새로운 상황이나 변화에 잘 적응하고, 유연성을 가지고 대응합니다./자연스러운 리더십을 가지고 있어, 다른 사람들을 이끄는데 능합니다.`,
    "typeGuide": `모든 사람을 만족시키려는 압박에서 벗어나려 노력하세요. 이는 건강한 균형을 유지하는 데 도움이 됩니다./자신의 감정과 필요성을 무시하지 않도록 하세요./다른 사람의 의견과 감정을 너무 개인적으로 받아들이지 않으려 노력하세요.`,
    "typeImage": "/images/egg_fried_rice.png",
    "typeUrl": `https://www.youtube.com/results?search_query=%ED%8F%AC%EC%B9%98%EB%93%9C+%EC%97%90%EA%B7%B8`
  },
  8: {
    "typeName": "계란찜",
    "typeTitle": "끈기있는 돌파자",
    "typeTag": "#따뜻한동정심 #부드러운끈기 <br>#직관력의마스터",
    "typeInfo": `동정심이 많으며 타인의 감정에 민감합니다./사람들을 돕는 것을 좋아하며, 이를 위해 노력합니다./강한 직관력을 가지고 있습니다./뛰어난 계획 수립 능력을 가지고 있습니다./깊이 있는 사고를 합니다./일관된 가치관을 가지고 있습니다./변화에 대한 적응력이 좋습니다./타인의 관점을 이해하려고 노력합니다./조용하며 내성적인 성격을 가지고 있습니다./안정적인 환경을 선호하며, 혼란과 불확실성을 피하려 합니다.`,
    "typeGuide": `다른 사람의 의견과 생각을 더욱 존중하려 노력하세요./자신의 필요와 감정을 무시하지 않으려고 노력하세요./간혹 자신을 위해 시간을 내는 것이 중요합니다. 이는 건강한 균형을 유지하는 데 도움이 됩니다.`,
    "typeImage": "/images/egg_custard.png",
    "typeUrl": "https://www.youtube.com/results?search_query=%EA%B3%84%EB%9E%80%EC%B0%9C"
  },
}
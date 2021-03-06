# Test Props and State
*코드스테이츠 Software Engineering Bootcamp - Section 1 - [React] 기초*

props와 state를 연습하기 위해 만든 페이지입니다.



## App.js
파일 하단에 Parent와 Child 컴포넌트를 만들었습니다.  
Parent에서 Child 컴포넌트를 사용할 때, Child의 props를 통해서 값을 전달합니다.  
자식 컴포넌트의 여는 태그와 닫는 태그 안에 넣은 값을 props.children으로 인식합니다.  


state 기능 실습은 컴포넌트별로 파일을 분리하여 진행했습니다.  


## Checkbox.js
checkbox input 요소의 체크여부에 따라 state를 설정합니다.  
체크박스 클릭 여부에 따라 변수에 불린값이 할당할 수 있다는 점을 이용하여 조건에 따라 다른 문구를 렌더링하고 CSS 스타일을 부여했습니다.  


## Select.js
드롭다운 메뉴에서 고른 선택지에 따라 다른 문구를 렌더링합니다.  
선택할 때마다 select 요소의 onChange에 적용한 이벤트 함수가 실행되고  
event.target.value에 선택지가 할당됩니다.  
이를 변수 choice의 값을 바꿀 때 사용할 수 있도록 setChoice의 인자로 사용했습니다.  


## PopUp.js
open 버튼을 클릭하면 팝업 모달이 뜨고, 팝업의 close 버튼을 클릭하면 사라집니다.  
변수 showPopup엔 불린값이 할당되고  
버튼 요소의 클릭 이벤트로 적용한 함수가 showPopup의 값을 반대로 바꿉니다.  
처음 앱을 실행시켰거나 팝업이 없는 상태에서 open버튼을 클릭하면  
showPopup에 true값이 할당되어, 렌더링 조건에 따라 팝업이 뜹니다.  
반대로 팝업이 떠 있는 상태에서 close 버튼을 클릭하면 showPopup에 false가 할당되어 팝업이 사라집니다.  


## Input.js
CSS 대신 styled-components를 사용하여 스타일이 미리 적용된 컴포넌트를 만든 뒤 Input 컴포넌트를 구성했습니다.  
데이터 배열을 렌더링할 때 필요한 id를 자동으로 만들 수 있도록 uuid를 사용하였습니다.  
사용자 이름과 메세지를 입력한 뒤에 하단의 send 버튼을 누르면 div.messages에 입력한 메세지가 추가됩니다.  
사용자가 작성한 이름과 메시지는 각각 name, message라는 변수에 할당되고  
contents에는 메시지 데이터 배열이 할당됩니다.  
contents의 초기값으로 사용하기 위해 더미데이터인 mockMessage를 만들었습니다.  
send 버튼을 클릭하면 name, message 변수를 이용해 새 메시지 객체(newMessage)를 만들어  
contents에 newMessage가 추가된 배열을 재할당하는 이벤트 함수가 실행됩니다.


## App.css
편의상 모든 컴포넌트의 CSS 작업을 App.css 한 곳에서 진행했습니다.  
체크박스 체크 여부에 따라 조건부 렌더링을 구현하기 위해 red와 green 클래스의 스타일 속성을 지정했습니다.  
팝업 요소가 돋보이도록 배경색을 묽은 검정색으로 덮기 위해(overlay) popup 클래스를 사용하고  
실제 popup창의 스타일은 popup-inner에 적용했습니다.  

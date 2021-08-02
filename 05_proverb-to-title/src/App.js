import { useState } from 'react';

function App() {
  const proverbs = [
    "좋은 소프트웨어의 기능이란 복잡한 것을 간단하게 보이도록 만드는 것이다. - Grady Booch -",
    "손으로 10초면 충분히 할 수 있는 일을 컴퓨터로 하루 종일 프로그래밍해서 자동으로 수행할 때, 나는 더할 나위 없이 큰 행복을 느낀다. - 더글라스 노엘 애덤스 -",
    "C는 유별나고 결함이 있으며 엄청나게 성공했다. - 데니스 리치 -",
    "나는 바닷가에서 노는 한 소년과 같았다. 내가 더 예쁜 조개와 더 동그란 조약돌을 찾는 동안 거대한 진리의 바다는 여전히 말없이 내 눈 앞에 펼쳐져 있었다. - 아이작 뉴턴 -",
    "내일 우리는 더 빨리 달리고 더 멀리 팔을 뻗을 것이다...... 그러면 마침내 어느 찬란한 아침...... 그러므로 우리는 물결을 거스르는 배처럼, 쉴새없이 과거 속으로 밀려나면서도 끝내 앞으로 나아가는 것이다. - 위대한 개츠비, 프란시스 스콧 피츠제럴드 -"
  ];

  const [proverb, setProverb] = useState('버튼을 클릭하세요');
  const buttonHandler = () => {
    let randomIndex = Math.floor(Math.random() * proverbs.length);
    setProverb(proverbs[randomIndex]);
  }

  return (
    <div className="App">
      <h1>{proverb}</h1>
      <button onClick={buttonHandler}>Reset Title</button>
    </div>
  );
}

export default App;

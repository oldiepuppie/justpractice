import { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1.2rem
`;

const ProverbBox = styled.p`
  font-size: 1.5rem;
  line-height: 160%;
  padding: .5rem .5rem;
  background-color: #FDFAF6;
`;

function App() {
  const proverbs = [
    '좋은 디자인은 그 때문에 소모되는 비용보다 빠르게 가치가 쌓인다.',
    '파이썬이 베이식과 동급이라면 옵티머스 프라임은 트럭이다.',
    '말은 쉽지, 코드를 보여줘.',
    'C는 유별나고, 결함 있고,  엄청나게 성공했다.',
    '이론상, 이론과 실제는 같다. 실제로는, 그렇지 않다.',
    '프로그래밍은 자기 얼굴을 차는 것과 같아서, 조만간 코피가 날 것이다.',
    '인간적인 반복, 성스러운 재귀'
  ];
  // https://blog.fupfin.com/?p=11

  const [proverb, setProverb] = useState('버튼을 클릭하세요');
  const buttonHandler = () => {
    let randomIndex = Math.floor(Math.random() * proverbs.length);
    setProverb(proverbs[randomIndex]);
  }

  return (
    <div className="App">
      <ProverbBox>{proverb}</ProverbBox>
      <StyledButton onClick={buttonHandler}>Reset Title</StyledButton>
    </div>
  );
}

export default App;

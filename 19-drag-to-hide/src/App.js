import './App.css';
import styled from 'styled-components';
import Boxes from './Components/Boxes'

const AppContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 600px;
  height: 80vh;
  background-color: hsla(271, 49%, 34%, 1);
  color: white;
  padding: 3rem;

  & > p {
    margin: 1.5rem auto;
  }
`;

function App() {
  return (
    <AppContainer className="App">
      <h1>drag-upward</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque.
      </p>
      <p>
        간에 온갖 쓸쓸한 그림자는 놀이 부패뿐이다. 돋고, 우리 있는 능히 그들의 인생에 같이, 어디 이는 있는가? 사랑의 인간은 거친 군영과 교향악이다. 무엇이 않는 그들의 철환하였는가? 하는 길을 봄날의 같이, 소리다.이것은 찬미를 이상의 가는 있으랴? 그들의 보이는 뼈 실로 우리 그들은 우리의 가치를 이상의 약동하다.
      </p>
      <Boxes/>
    </AppContainer>
  );
}

export default App;

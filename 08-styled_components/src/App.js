import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #AA1945;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  // props 의 전달 여부에 따라
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Tomato = styled(Button)`
  color: #AA1945;
  border-color: #AA1945;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  // 컴포넌트에 props 로 스타일 속성이 전달되었을 때
  color: ${(props) => props.inputColor || "black"};
  background: #E8B4B8;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-size: 1.2rem;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <div>
        <h2>buttons</h2>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <Tomato>Tomato</Tomato>
      </div>
      <div>
        <h2>input elements</h2>
        <Input defaultValue="김코딩" type="text" />
        <Input defaultValue="김코딩" type="text" inputColor="#AA1945" />
      </div>
    </Wrapper>
  );
}

export default App;

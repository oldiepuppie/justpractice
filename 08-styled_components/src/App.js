import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Tomato = styled(Button)`
  color: tomato;
  border-color: tomato;
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
    </Wrapper>
  );
}

export default App;

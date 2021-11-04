import styled from "styled-components";

// ul {
//   list-style-type: none;
// }

const BoxesComponent = styled.div`
  position: absolute;
  bottom: 0;
  overflow: scroll;
  background-color: hsla(320, 100%, 41%, 1);
  padding : 1rem;
  height: 40vh;
`;

const BoxContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: hsla(320, 100%, 41%, 1);
  list-style-type: none;
  padding: 1rem;
  color: black;
`;

const Box = styled.li`
  background-color: hsla(62, 100%, 50%, 1);
  width: 200px;
  height: 100px;
  margin: .5rem;
  padding: .5rem;
`;

const Boxes = () => {
  return (
    <BoxesComponent className="Boxes">
      <h2>This is a component called Boxes.</h2>
      <BoxContainer>
        <Box>
          apple
        </Box>
        <Box>
          orange
        </Box>
        <Box>
          grape
        </Box>
        <Box>
          melon
        </Box>
        <Box>
          strawberry
        </Box>
        <Box>
          blueberry
        </Box>
        <Box>
          banana
        </Box>
        <Box>
          pineapple
        </Box>
        <Box>
          fruits
        </Box>
        <Box>
          delicious
        </Box>
        <Box>
          sweet
        </Box>
        <Box>
          sour
        </Box>
      </BoxContainer>
    </BoxesComponent>
  );

}

export default Boxes;
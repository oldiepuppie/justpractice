import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as UpwardArrow } from '../Icon/triangle.svg';

const BoxesComponent = styled.div`
  position: absolute;
  bottom: ${props => props.displayed ? '0' : '-250px'};
  overflow: ${props => props.displayed ? 'scroll' : 'hidden'};
  transition-duration: .5s;
  background-color: hsla(320, 100%, 41%, 1);
  padding : 0.2rem 2rem;
  height: 40vh;

  & svg {
    margin: 1rem;
    cursor: pointer;
    transform: ${props => props.displayed? 'rotate(180deg)' : null};
  }
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
  const [ isDisplayed, setIsDisplayed ] = useState(false);

  const onClickHandler = () => {
    setIsDisplayed(prev => !prev);
  }

  return (
    <BoxesComponent className="Boxes" displayed={isDisplayed}>
      <h2>
        <UpwardArrow width='15px' height='20px' fill='white' onClick={onClickHandler} />
      </h2>
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
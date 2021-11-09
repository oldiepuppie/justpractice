import { useState } from "react";
import styled from "styled-components";

const NewPaginationContainer = styled.div.attrs({
  className: "newPagination"
})`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
`;

const PageNumbersList = styled.ul.attrs({
  className: "pageNumbersList"
})`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const PageNumberItem = styled.li.attrs({
  className: "pageNumberItem"
})`
  padding: 0 1rem;
`;

const PaginationWithArrow = () => {
  const [ pageNumbers, setPageNumbers ] = useState([1,2,3,4,5,6,7,8,9,10]);
  const prevHandler = () => {
    console.log('prev button works')
  }

  const nextHandler = () => {
    console.log('next button works')
  }

  return (
    <NewPaginationContainer>
      <span className="prevButton" onClick={prevHandler}>⬅️</span>
      <PageNumbersList>
        {
          pageNumbers.map(number => {
            return (
              <PageNumberItem key={number} id={number}>{number}</PageNumberItem>
            );
          })
        }
      </PageNumbersList>
      <span className="nextButton" onClick={nextHandler}>➡️</span>
    </NewPaginationContainer>
  );
}

export default PaginationWithArrow;
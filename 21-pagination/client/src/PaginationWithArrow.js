import { useEffect, useState } from "react";
import styled from "styled-components";

const NewPaginationContainer = styled.div.attrs({
  className: "newPagination"
})`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  // color: ${props => props.clicked ? '#148F77' : '#545454'};
  color: #A1A1A1;
  font-weight: bold;
`;

const PageNumbersList = styled.ul.attrs({
  className: "pageNumbersList"
})`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0 1rem;
`;

const ArrowButton = styled.span.attrs({
  className: "arrow"
})`
  &:hover {
    color: black;
  }
`;

const PageNumberItem = styled.li.attrs({
  className: "pageNumberItem"
})`
  padding: 0 1rem;
  &:hover {
    color: black;
  }
`;

/*
  props
  - 모든 페이지의 갯수
  - numbersPerRow
    --> lastIdx
  - 숫자 버튼에 들어갈 handler 함수
*/

const PaginationWithArrow = ({dataLength, unit, numberButtonClickHandler}) => {
  const numberOfPages = Math.ceil(dataLength / unit);
  const numberArr = new Array(numberOfPages).fill(0).map((el, idx) => idx + 1);
  const [startIdx, setStartIdx] = useState(0);
  const [lastIdx, setLastIdx] = useState(unit);
  const cutArrInit = new Array(unit).fill(0).map((el, idx) => idx + 1);
  const [cutArr, setCutArr] = useState(cutArrInit);
  // const [clicked, setClicked] = useState(false);
  // const [isNoPrev, setIsNoPrev] = useState(true);
  // const [isNoNext, setIsNoNext] = useState(false);

  const prevHandler = () => {
    if(startIdx === 0) return;
    console.log('**prev**');
    setStartIdx(prev => prev - unit);
    setLastIdx(prev => prev - unit);
  }

  const nextHandler = () => {
    let tempIdxEnd = Math.ceil(numberArr.length/unit) * unit;
    if(lastIdx === tempIdxEnd) return;
    console.log('**next**');
    setStartIdx(prev => prev + unit);
    setLastIdx(prev => prev + unit);
  }

  useEffect(()=>{
    let tempIdxEnd = Math.ceil(numberArr.length/unit) * unit;

    if(startIdx >= unit || lastIdx <= tempIdxEnd) {
      const result = numberArr.slice(startIdx, lastIdx);
      setCutArr(prev => result);
    }
  }, [startIdx, lastIdx])

  return (
    <NewPaginationContainer>
      <ArrowButton className="prevButton" onClick={prevHandler}>
        ⬅️
      </ArrowButton>
      <PageNumbersList>
        {
          cutArr.map(number => {
            return (
              <PageNumberItem
                key={number}
                id={number}
                onClick={() => {
                  numberButtonClickHandler(number);
                }}
              >
                {number}
              </PageNumberItem>
            );
          })
        }
      </PageNumbersList>
      <ArrowButton className="nextButton" onClick={nextHandler}>
        ➡️
      </ArrowButton>
    </NewPaginationContainer>
  );
}

export default PaginationWithArrow;

// [idea]
// 5개씩 보여줄 것이다
  // numberArr.slice(0,5)
  // numberArr.slice(5,10)
  // numberArr.slice(10,15)이지만 결과는 === numberArr.slice(10,12)
// 인덱스가 0~15 범위를 넘어가면 동작하지 않게 바꾸기
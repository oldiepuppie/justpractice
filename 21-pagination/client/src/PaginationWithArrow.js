import { useEffect, useState } from "react";
import styled from "styled-components";

const NewPaginationContainer = styled.div.attrs({
  className: "newPagination"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

const PageNumbersList = styled.ul.attrs({
  className: "pageNumbersList"
})`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0 1rem;
`;

const PageNumberItem = styled.li.attrs({
  className: "pageNumberItem"
})`
  padding: 0 1rem;
`;

/* TODO
  props
  - 모든 페이지의 갯수
  - numbersPerRow
    --> lastIdx
  - 숫자 버튼에 들어갈 handler 함수
*/

const PaginationWithArrow = () => {
  // const [ pageNumbers, setPageNumbers ] = useState([1,2,3,4,5,6,7,8,9,10]);

  // const numberArr = new Array(numberOfPages).fill(0).map((el, idx) => idx + 1);
  const numberArr = [1,2,3,4,5,6,7,8,9,10,11,12];
  const [startIdx, setStartIdx] = useState(0);
  const numbersPerRow = 5;
  const [lastIdx, setLastIdx] = useState(numbersPerRow);
  const [cutArr, setCutArr] = useState(numberArr.slice(startIdx, numbersPerRow));

  // 5개씩 보여줄 것이다
  // numberArr.slice(0,5)
  // numberArr.slice(5,10)
  // numberArr.slice(10,15)이지만 결과는 === numberArr.slice(10,12)

  // TODO 인덱스가 0~12 범위를 넘어가면 동작하지 않게 바꾸기
  const prevHandler = () => {
    if(startIdx < numbersPerRow) return;
    console.log('**prev**')
    setStartIdx(prev => prev - numbersPerRow);
    setLastIdx(prev => prev - numbersPerRow);
  }

  const nextHandler = () => {
    let tempIdxEnd = Math.ceil(numberArr.length/numbersPerRow) * numbersPerRow;
    if(lastIdx >= tempIdxEnd) return;
    console.log('**next**')
    setStartIdx(prev => prev + numbersPerRow);
    setLastIdx(prev => prev + numbersPerRow);
  }

  useEffect(()=>{
    console.log(startIdx);
    let tempIdxEnd = Math.ceil(numberArr.length/numbersPerRow) * numbersPerRow;
    if(startIdx >= numbersPerRow || lastIdx <= tempIdxEnd) {
      const result = numberArr.slice(startIdx, lastIdx);
      setCutArr(prev => result);
    }
  }, [startIdx, lastIdx])

  return (
    <NewPaginationContainer>
      <span className="prevButton" onClick={prevHandler}>
        ⬅️
      </span>
      <PageNumbersList>
        {
          cutArr.map(number => {
            return (
              <PageNumberItem
                key={number}
                id={number}
              >
                {number}
              </PageNumberItem>
            );
          })
        }
      </PageNumbersList>
      <span className="nextButton" onClick={nextHandler}>
        ➡️
      </span>
    </NewPaginationContainer>
  );
}

export default PaginationWithArrow;
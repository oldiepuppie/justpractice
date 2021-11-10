import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import DataList from "./DataList";
import Pagination from "./Pagination";
import PaginationWithArrow from "./PaginationWithArrow";

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [ list, setList ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  // 1페이지로 시작
  const itemsPerPage = 6;
  // 한 페이지에 5개씩 보여준다

  useEffect(() => {
    const getData = async () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setList(res.data)
      })
      .catch(err => console.log(err));
    }

    getData();
  }, [])

  const lastIdx = currentPage * itemsPerPage;
  const firstIdx = lastIdx - itemsPerPage;
  // 1페이지에서 (0 ~ 5) -> slice -> 0 ~ 4
    // lastIdx = 1 * 5
    // firstIdx = 5 - 5
  // 2페이지에서 (5 ~ 10) -> slice -> 5 ~ 9
    // lastIdx = 2 * 5
    // firstIdx = 10 - 5

  const slicedData = (dataArr) => {
    return dataArr.slice(firstIdx, lastIdx);
  }

  return (
    <AppContainer className="App">
      <PaginationWithArrow
        dataLength={list.length}
        unit={5}
        numberButtonClickHandler={setCurrentPage}
      />
      <h1>pagination</h1>
      <h2>100 / 6</h2>
      <DataList data={slicedData(list)}/>
      <Pagination
        itemsPerPage={Math.ceil(list.length / itemsPerPage)}
        numberButtonHandler={setCurrentPage}
      />
    </AppContainer>
  );
}

export default App;

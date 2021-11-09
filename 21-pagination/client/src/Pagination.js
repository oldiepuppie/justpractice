import styled from "styled-components";

const PaginationContainer = styled.div`
  width: 100vw;
  position: sticky;
  left: 0;
  bottom: 0;
  background: white;
  border-top: 1px solid #D0D3D4;
`;

const PageUl = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;

  & > li {
    font-weight: bold;
    margin: 0 .25rem;
    cursor: pointer;
  }

  & > li:hover {
    color: #148F77;
  }
`;

const Pagination = ({ itemsPerPage, numberButtonHandler }) => {
  const numbers = new Array(itemsPerPage).fill(0).map((el, idx) => idx + 1);

  return (
    <PaginationContainer className="pagination">
      <PageUl>
        {/* <span className="arrowLeft">⬅️</span> */}
        {
          numbers.map((number) => {
            return (
              <li
                className="pageNumber"
                key={number}
                onClick={() => numberButtonHandler(number)}
              >
                {number}
              </li>
            );
          })
        }
        {/* <span className="arrowRight">➡️</span> */}
      </PageUl>
    </PaginationContainer>
  );
}

export default Pagination;
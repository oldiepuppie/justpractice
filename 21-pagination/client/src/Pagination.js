import styled from "styled-components";

const PageUl = styled.ul`
  display: flex;
  width: 50vw;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
`;

const Pagination = ({ itemsPerPage, totalItems, numberButtonHandler }) => {
  const dummy = [1,2,3,4,5];

  return (
    <div className="pagination">
      <PageUl>
        {/* <span className="arrowLeft">⬅️</span> */}
        {
          dummy.map((number) => {
            return (
              <li className="pageNumber" key={number} onClick={numberButtonHandler}>
                {number}
              </li>
            );
          })
        }
        {/* <span className="arrowRight">➡️</span> */}
      </PageUl>
    </div>
  );
}

export default Pagination;
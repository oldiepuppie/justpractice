import styled from "styled-components";

const StyledDataList = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  li {
    width: 40%;
    padding: 1rem;
  }
`;

const DataList = ({ data }) => {

  return (
    <div className="dataListContainer">
      <StyledDataList className="dataList">
        {
          data.map(item => {
            return (
              <li key={item.id} className="listItem">
                <h3>{item.id}</h3>
                <p>User ID: {item.userId}</p>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </li>
            );
          })
        }
      </StyledDataList>
    </div>
  );
}

export default DataList;
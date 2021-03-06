import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart, faMapMarkerAlt, faPencilAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const Outer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 5rem;

  @media screen and (min-width: 1081px) {
    width: 1080px;
    position: relative;
  }
`;

const Buttons = styled.div`
  background-color: #85C1E9;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1081px) {
    background-color: #85C1E9;
    border: 1px solid black;
    width: 400px;
  }
`;

const Button = styled.button`
  // background-color: #85C1E9;
  padding: .5rem;
  margin: .5rem;
  font-size: 2rem;
`;

export default function Menu () {
  return (
    <Outer className="menuBar">
      <Buttons>
        {/*
          <Link to='/mainpage'>
            <Button>
              <FontAwesomeIcon icon={faHome} />
            </Button>
          </Link>
        */}
        <Button>
          <FontAwesomeIcon icon={faHome} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faHeart} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faPencilAlt} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faUserAlt} />
        </Button>
      </Buttons>
    </Outer>
  );
}
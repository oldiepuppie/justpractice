import styled from 'styled-components'
import Modal from '../Modal';

const Outer = styled.div `
  position: relative;
  height: 1800px;

  @media screen and (min-width: 1080px) {
    height: 50vh;
  }
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export default function Map() {
  return (
    <Outer>
      <Image
        src='images/map.png'
        alt='map'
      />
      <Modal />
    </Outer>
  );
}
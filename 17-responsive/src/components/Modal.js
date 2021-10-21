import styled from "styled-components";

const Inner = styled.div`
  position: fixed;
  right: 0;
  bottom: 4.5rem;
  border: 1px solid #616161;
  background-color: var(--modal-bg-color);
  width: 400px;
  height: 70vh;

  @media screen and (min-width: 1080px) {
    width: 30vw;
    bottom: 5rem;
  }
`;

export default function Modal() {
  return (
    <Inner className="modal">
      모달모달
    </Inner>
  );
}
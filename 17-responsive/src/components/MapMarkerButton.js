import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Button = styled.button`
  color: #C2185B;
  font-size: 2.5rem;
`;

export default function MapMarkerButton() {
  return (
    <Button className="mapMarkerButton">
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </Button>
  );
}
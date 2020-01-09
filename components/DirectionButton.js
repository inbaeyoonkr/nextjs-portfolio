import styled from 'styled-components';

const DirectionButtonBlock = styled.div`
  position: absolute;
  top: 0;
  right: 3rem;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DirectionButton = ({ direction }) => {
  return <DirectionButtonBlock>></DirectionButtonBlock>;
};

export default DirectionButton;

import styled, { css } from 'styled-components';
import Link from 'next/link';

const DirectionButtonBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  ${props =>
    props.direction === 'left'
      ? css`
          left: 3rem;
        `
      : css`
          right: 3rem;
        `};
`;

const ImageBlock = styled.img`
  width: 2rem;
`;

const DirectionButton = ({ direction, src }) => {
  return (
    <DirectionButtonBlock direction={direction}>
      <Link href={src}>
        {direction === 'left' ? (
          <a>
            <ImageBlock src='/static/icons/left-arrow.svg' />
          </a>
        ) : (
          <a>
            <ImageBlock src='/static/icons/right-arrow.svg' />
          </a>
        )}
      </Link>
    </DirectionButtonBlock>
  );
};

export default DirectionButton;

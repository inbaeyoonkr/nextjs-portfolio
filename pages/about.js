import styled from 'styled-components';
import DirectionButton from '../components/DirectionButton';

const AboutBlock = styled.div`
  position: absolute;
  top: 0;
  right: 3rem;
  bottom: 0;
  left: 3rem;
  display: flex;
  flex-direction: row;
`;

const About = () => {
  return (
    <AboutBlock>
      <DirectionButton src={'/'} direction={'left'}></DirectionButton>

      <DirectionButton src={'projects'} direction={'right'}></DirectionButton>
    </AboutBlock>
  );
};

export default About;

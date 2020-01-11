import styled from 'styled-components';
import DirectionButton from '../components/DirectionButton';

const AboutBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoBlock = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: row;
`;

const SkillBlock = styled.div`
  width: 60%;
  background-color: yellow;
`;

const CarrerBlock = styled.div`
  width: 40%;
  background-color: lime;
`;

const About = () => {
  return (
    <AboutBlock>
      <DirectionButton src={'/'} direction={'left'}></DirectionButton>
      <InfoBlock>
        <SkillBlock>기술</SkillBlock>
        <CarrerBlock>경력</CarrerBlock>
      </InfoBlock>
      <DirectionButton src={'projects'} direction={'right'}></DirectionButton>
    </AboutBlock>
  );
};

export default About;

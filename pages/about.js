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
`;

const CarrerBlock = styled.div`
  width: 40%;
`;
const Header = styled.h2`
  margin: 0;
  text-align: center;
`;

const SkillImage = styled.img`
  width: 2rem;
  transition: 1s ease-in-out;
`;

const imageSrcs = [
  '/static/icons/html.svg',
  '/static/icons/css.svg',
  '/static/icons/javascript.svg'
];

const About = () => {
  return (
    <AboutBlock>
      <DirectionButton src={'/'} direction={'left'}></DirectionButton>
      <InfoBlock>
        <SkillBlock>
          <Header>Skills</Header>
          {imageSrcs.map(src => (
            <SkillImage src={src}></SkillImage>
          ))}
        </SkillBlock>
        <CarrerBlock>
          <Header>Careers</Header>
        </CarrerBlock>
      </InfoBlock>
      <DirectionButton src={'projects'} direction={'right'}></DirectionButton>
    </AboutBlock>
  );
};

export default About;

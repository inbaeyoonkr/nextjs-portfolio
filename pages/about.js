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

const CarrerInfoBox = styled.div`
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  color: #868e96;
  text-align: center;
  padding: 1rem 2rem;

  & + & {
    margin-top: 1rem;
  }

  .period {
  }
  .title {
    color: #343a40;
    font-weight: 500;
    font-size: 1.5rem;
  }
  .description {
  }
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

const About = props => {
  const carrers = props.carrers.default;

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
          {carrers.map(carrer => (
            <CarrerInfoBox>
              <div className='title'>{carrer.title}</div>
              <div className='period'>{carrer.period}</div>
              <div className='description'>{carrer.description}</div>
            </CarrerInfoBox>
          ))}
        </CarrerBlock>
      </InfoBlock>
      <DirectionButton src={'projects'} direction={'right'}></DirectionButton>
    </AboutBlock>
  );
};

About.getInitialProps = async function() {
  const data = await import('../data/carrers.json');

  return {
    carrers: data
  };
};

export default About;

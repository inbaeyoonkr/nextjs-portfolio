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
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  img {
    width: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    :last-child {
      display: none;
    }
  }

  .wrapper {
  }
`;

const CarrerInfoBox = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  color: #868e96;
  text-align: center;
  width: 80%;
  height: 5rem;
  transition: height 0.5s;
  transition-timing-function: linear;
  overflow: hidden;

  .period {
  }

  .title {
    color: #343a40;
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
  }
  .description {
  }

  :hover {
    height: 8rem;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Header = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
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
            <>
              <CarrerInfoBox>
                <div className='title'>{carrer.title}</div>
                <div className='period'>{carrer.period}</div>
                <div className='description'>{carrer.description}</div>
              </CarrerInfoBox>
              <img src='/static/icons/down-arrow.svg'></img>
            </>
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

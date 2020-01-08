import Layout from '../components/Layout';
import styled from 'styled-components';

const IndexBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Index = () => {
  return (
    <Layout>
      <IndexBlock>
        <h1>THis is Index Page aa</h1>
      </IndexBlock>
    </Layout>
  );
};

export default Index;

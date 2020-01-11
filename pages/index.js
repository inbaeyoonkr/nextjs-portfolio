import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import DirectionButton from '../components/DirectionButton';

const INFO_MESSAGES =
  '안녕하세요.<br/>웹 개발자 윤인배 입니다.<br/>React와 Django를 좋아합니다.<br/>사실 다 좋아합니다.';

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false
});

const printMessages = info => {
  return (
    <Typewriter
      options={{
        cursor: ''
      }}
      onInit={typewriter => {
        typewriter
          .typeString(info)
          .callFunction(() => {
            console.log('String typed out!');
          })
          .start();
      }}
    />
  );
};

const IndexBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageBlock = styled.div`
  text-align: center;
  margin-top: -5rem;
  font-size: 1.2rem;
  line-height: 3;
`;

class Index extends Component {
  render() {
    return (
      <IndexBlock>
        <MessageBlock>{printMessages(INFO_MESSAGES)}</MessageBlock>
        <DirectionButton src={'about'} direction={'right'} />
      </IndexBlock>
    );
  }
}

export default Index;

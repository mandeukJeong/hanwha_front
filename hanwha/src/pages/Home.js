import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/colors';
import IntroduceWrap from '../components/home/IntroduceWrap';
import OrangeWrap from '../components/home/OrangeWrap';
import PlayerWrap from '../components/home/PlayerWrap';
import VoteWrap from '../components/home/VoteWrap';
import ChatWrap from '../components/home/ChatWrap';
import GalleryWrap from '../components/home/GalleryWrap';

const HomeWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;

const Home = () => {
  return (
    <HomeWrap>
      <IntroduceWrap />
      <OrangeWrap />
      <PlayerWrap />
      <VoteWrap />
      <ChatWrap />
      <GalleryWrap />
    </HomeWrap>
  );
};

export default Home;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';
import { mediaMax, mediaMin } from '../../utils/media';
import main_bg1 from '../../assets/home/main_bg1.jpeg';
import main_bg2 from '../../assets/home/main_bg2.JPG';
import main_bg3 from '../../assets/home/main_bg3.JPG';
import main_bg4 from '../../assets/home/main_bg4.jpeg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const test = keyframes`
  0%, 20% {
    background-image: url(${main_bg1});
  }
  25%, 45% {
    background-image: url(${main_bg2});
  }
  50%, 70% {
    background-image: url(${main_bg3});
  }
  75%, 95% {
    background-image: url(${main_bg4});
  }
  100% {
    background-image: url(${main_bg1});
  }
`;
const IntroWrap = styled.section`
  height: calc(100vh - 76px);
  ${mediaMax.medium`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
const IntroMainBg = styled.div`
  position: relative;
  animation: ${test} 20s infinite;
  background-size: cover;
  background-position: center;
  ${mediaMin.large`
    height: 100%;
  `}
  ${mediaMax.medium`
    height: 50%;
  `}
`;
const IntroTint = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.67);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IntroText = styled.div`
  display: inline-flex;
  gap: 0.3em;
  font-weight: 800;
  text-shadow: 0 0 6px ${COLORS.white};
  animation: ${fadeIn} 2s ease-in-out forwards;
  span {
    &:last-child {
      color: ${COLORS.orange};
      text-shadow: 0 0 6px ${COLORS.orange};
    }
  }
  ${mediaMin.large`
    letter-spacing: -10px;
    font-size: 7em;
  `}
  ${mediaMax.medium`
    letter-spacing: -8px;
    font-size: 6em;
  `}
  ${mediaMax.small`
    letter-spacing: -5px;
    font-size: 3em;
  `}
`;

const IntroduceWrap = () => {
  return (
    <IntroWrap>
      <IntroMainBg>
        <IntroTint>
          <IntroText>
            <span>DIFFERENT</span>
            <span>US</span>
          </IntroText>
        </IntroTint>
      </IntroMainBg>
    </IntroWrap>
  );
};

export default IntroduceWrap;

import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import CustomBtn from '../../components/common/CustomBtn';
import Ryu from '../../assets/players/Ryu.png';
import Moon from '../../assets/players/Moon.png';
import Lee from '../../assets/players/Lee.png';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  padding: 0 20px;
`;
const HeaderSection = styled.section`
  height: 100px;
  line-height: 100px;
  ${mediaMax.small`
    height: 80px;
    line-height: 80px;
  `};
  h1 {
    font-weight: 700;
    font-size: ${SIZES.ltxlarge};
    ${mediaMax.small`
      font-size: ${SIZES.tbxlarge};
    `};
  }
`;
const MainSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding-top: 30px;
  padding-bottom: 100px;
  ${mediaMax.medium`
    padding-top: 25px;
  `};
  ${mediaMax.small`
    padding-top: 15px;
    gap: 25px;
  `};
`;
const PlayerWrap = styled.div`
  width: 30%;
  ${mediaMax.medium`
    width: 45%;
  `};
`;
const PlayerImg = styled.div`
  width: 100%;
  background-image: url(${(props) => props.$bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 100%;
  margin-bottom: 20px;
  position: relative;
  ${mediaMax.medium`
    margin-bottom: 15px;
  `};
  ${mediaMax.small`
    margin-bottom: 10px;
  `};
  a {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.$bg});
    a {
      display: inherit;
    }
  }
`;

const InfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  ${mediaMax.medium`
    gap: 10px;
  `};
  h2 {
    color: ${COLORS.grey};
    font-weight: 700;
    vertical-align: center;
    font-size: 60px;
    height: 60px;
    line-height: 60px;
    margin-bottom: 16px;
    ${mediaMax.small`
      font-size: 35px;
      height: 35px;
      line-height: 35px;
      margin-bottom: 0;
    `};
  }
`;
const NameWrap = styled.div`
  height: 60px;
  ${mediaMax.small`
    height: 35px;
  `};
  h3 {
    font-weight: 400;
    font-size: ${SIZES.ltmedium};
    ${mediaMax.small`
      font-size: ${SIZES.mblarge};
    `};
  }
  p {
    color: ${COLORS.grey};
    font-weight: 500;
    font-size: ${SIZES.ltsmall};
    ${mediaMax.small`
      font-size: ${SIZES.mbmedium};
    `};
  }
`;

const PositionList = () => {
  return (
    <MainWrap>
      <HeaderSection>
        <h1>PITCHER</h1>
      </HeaderSection>
      <MainSection>
        <PlayerWrap>
          <PlayerImg $bg={Ryu}>
            <CustomBtn
              to="/players/detail"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="PROFILE"
            />
          </PlayerImg>
          <InfoWrap>
            <h2>99</h2>
            <NameWrap>
              <h3>류현진</h3>
              <p>RYU HYUN JIN</p>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImg $bg={Moon}>
            <CustomBtn
              to="/players/detail"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="PROFILE"
            />
          </PlayerImg>
          <InfoWrap>
            <h2>1</h2>
            <NameWrap>
              <h3>문동주</h3>
              <p>MOON DONG JU</p>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImg $bg={Lee}>
            <CustomBtn
              to="/players/detail"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="PROFILE"
            />
          </PlayerImg>
          <InfoWrap>
            <h2>4</h2>
            <NameWrap>
              <h3>이승관</h3>
              <p>LEE SEONG GWAN</p>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImg $bg={Ryu}>
            <CustomBtn
              to="/players/detail"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="PROFILE"
            />
          </PlayerImg>
          <InfoWrap>
            <h2>99</h2>
            <NameWrap>
              <h3>류현진</h3>
              <p>RYU HYUN JIN</p>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImg $bg={Moon}>
            <CustomBtn
              to="/players/detail"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="PROFILE"
            />
          </PlayerImg>
          <InfoWrap>
            <h2>1</h2>
            <NameWrap>
              <h3>문동주</h3>
              <p>MOON DONG JU</p>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImg $bg={Lee}>
            <CustomBtn
              to="/players/detail"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="PROFILE"
            />
          </PlayerImg>
          <InfoWrap>
            <h2>4</h2>
            <NameWrap>
              <h3>이승관</h3>
              <p>LEE SEONG GWAN</p>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImg $bg={Ryu}>
            <CustomBtn
              to="/players/detail"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="PROFILE"
            />
          </PlayerImg>
          <InfoWrap>
            <h2>99</h2>
            <NameWrap>
              <h3>류현진</h3>
              <p>RYU HYUN JIN</p>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImg $bg={Moon}>
            <CustomBtn
              to="/players/detail"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="PROFILE"
            />
          </PlayerImg>
          <InfoWrap>
            <h2>1</h2>
            <NameWrap>
              <h3>문동주</h3>
              <p>MOON DONG JU</p>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
        <PlayerWrap>
          <PlayerImg $bg={Lee}>
            <CustomBtn
              to="/players/detail"
              $border={COLORS.grey}
              $fontColor={COLORS.white}
              $bgColor={COLORS.orange}
              text="PROFILE"
            />
          </PlayerImg>
          <InfoWrap>
            <h2>4</h2>
            <NameWrap>
              <h3>이승관</h3>
              <p>LEE SEONG GWAN</p>
            </NameWrap>
          </InfoWrap>
        </PlayerWrap>
      </MainSection>
    </MainWrap>
  );
};

export default PositionList;

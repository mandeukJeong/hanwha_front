import React, { useState, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { SIZES } from '../../constants/size';
import { mediaMax } from '../../utils/media';
import hanwha_wordmark from '../../assets/logo/hanwha_wordmark.png';
import { sendEmail, checkAuth, changePassword } from '../../services/auth';

const MainWrap = styled.main`
  color: ${COLORS.white};
  background-color: ${COLORS.black};
`;
const FindPwWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(90vh - 76px);
  ${mediaMax.small`
    height: calc(100vh - 76px);
  `};
`;
const LogoLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
  height: 120px;
  line-height: 120px;
  margin-bottom: 0.5em;
  ${mediaMax.medium`
    height: 150px;
    line-height: 150px;
  `};
  ${mediaMax.small`
    height: 100px;
    line-height: 100px;
  `};
`;
const LogoImg = styled.img`
  height: 100%;
`;
const FormWrap = styled.form`
  width: 35%;
  max-width: 550px;
  margin-bottom: 40px;
  ${mediaMax.medium`
    width: 80%;
    margin-bottom: 35px;
  `};
  ${mediaMax.small`
    margin-bottom: 30px;
  `};
`;
const AuthInputWrap = styled.div`
  display: flex;
  gap: 0.5em;
  margin-bottom: 20px;
  ${mediaMax.medium`
    margin-bottom: 18px;
  `};
  ${mediaMax.small`
    margin-bottom: 15px;
  `};
`;
const AuthInput = styled.input`
  color: ${COLORS.white};
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${COLORS.grey};
  background-color: inherit;
  padding: 18px;
  font-size: ${SIZES.ltxsmall};
  margin-bottom: 20px;
  ${mediaMax.medium`
    padding: 18px;
    font-size: ${SIZES.tbmedium};
    margin-bottom: 18px;
  `};
  ${mediaMax.small`
    padding: 15px;
    font-size: ${SIZES.mbmedium};
    margin-bottom: 15px;
  `};
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const AuthBtn = styled.button`
  cursor: pointer;
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  border: none;
  font-weight: 600;
  border-radius: 10px;
  font-size: ${SIZES.ltxsmall};
  width: 25%;
  ${mediaMax.medium`
    font-size: ${SIZES.tbmedium};
    width: 30%;
  `};
  ${mediaMax.small`
    font-size: ${SIZES.mbmedium};
    width: 40%;
  `};
`;
const ErrorWrap = styled.div`
  text-align: center;
  margin: 30px 0;
  font-size: ${SIZES.ltxsmall};
  font-weight: 600;
  color: red;
  ${mediaMax.medium`
    margin: 35px 0;
    font-size: ${SIZES.tbmedium};
  `};
  ${mediaMax.small`
    margin: 25px 0;
    font-size: ${SIZES.mbmedium};
  `};
`;
const AlertWrap = styled.div`
  margin-bottom: 20px;
  font-size: ${SIZES.ltxsmall};
  font-weight: 600;
  color: ${COLORS.orange};
  ${mediaMax.medium`
    margin-bottom: 18px;
    font-size: ${SIZES.tbmedium};
  `};
  ${mediaMax.small`
    margin-bottom: 15px;
    font-size: ${SIZES.mbmedium};
  `};
`;
const SubmitBtn = styled.button`
  width: 100%;
  background-color: ${COLORS.dark};
  color: ${COLORS.white};
  cursor: pointer;
  font-weight: 700;
  border: none;
  font-size: ${SIZES.ltsmall};
  padding: 20px 30px;
  ${mediaMax.medium`
    font-size: ${SIZES.tbmedium};
    padding: 24px 34px
  `};
  ${mediaMax.small`
    font-size: ${SIZES.mbmedium};
    padding: 15px 25px;
  `};
`;

const passwordReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const FindPwPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isSend, setIsSend] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [state, dispatch] = useReducer(passwordReducer, {
    email: '',
    verifyNumber: '',
    password: '',
    passwordConfirm: '',
  });

  const { email, verifyNumber, password, passwordConfirm } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  const onSendSubmit = (e) => {
    e.preventDefault();

    if (email === '') {
      setErrorMessage('이메일을 입력해주세요.');
      return;
    }

    sendEmail(email)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage('');
          setIsSend(true);
        }
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setErrorMessage(e.response.data.error);
        }
      });
  };

  const onCheckSubmit = (e) => {
    e.preventDefault();

    if (email === '') {
      setErrorMessage('이메일을 입력해주세요.');
      return;
    }

    if (verifyNumber === '') {
      setErrorMessage('인증번호를 입력해주세요.');
      return;
    }

    checkAuth(email, verifyNumber)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage('');
          setIsVerify(true);
        }
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setErrorMessage('인증번호가 일치하지 않습니다.');
        }
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // input 빈 칸 존재 시
    if (
      Object.values({ email, verifyNumber, password, passwordConfirm }).some(
        (value) => value === ''
      )
    ) {
      setErrorMessage('빈칸을 모두 입력해주세요.');
      return;
    }

    // 비밀번호, 비밀번호 확인 불일치 시
    if (password !== passwordConfirm) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    changePassword(email, verifyNumber, password)
      .then((response) => {
        if (response.status === 200) {
          setErrorMessage('');
          alert('비밀번호 변경이 완료되었습니다.');
          navigate('/login');
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          setErrorMessage('빈칸을 모두 입력해주세요.');
        } else if (e.response.status === 404) {
          setErrorMessage(e.response.data.error);
        } else {
          setErrorMessage('비밀번호 변경에 실패하였습니다.');
        }
      });
  };

  return (
    <MainWrap>
      <FindPwWrap>
        <h1>
          <LogoLink to="/">
            <LogoImg src={hanwha_wordmark} alt="홈으로" />
          </LogoLink>
        </h1>
        <FormWrap>
          <AuthInputWrap>
            <AuthInput
              name="email"
              value={email}
              type="text"
              placeholder="이메일"
              autoComplete="off"
              disabled={isSend}
              onChange={onChange}
            />
            <AuthBtn disabled={isSend} onClick={onSendSubmit}>
              인증번호 발급
            </AuthBtn>
          </AuthInputWrap>
          <AlertWrap>{isSend && <p>인증번호가 전송되었습니다.</p>}</AlertWrap>
          <AuthInputWrap>
            <AuthInput
              name="verifyNumber"
              value={verifyNumber}
              type="text"
              placeholder="인증번호"
              autoComplete="off"
              disabled={isVerify}
              onChange={onChange}
            />
            {isSend && (
              <AuthBtn disabled={isVerify} onClick={onCheckSubmit}>
                인증번호 확인
              </AuthBtn>
            )}
          </AuthInputWrap>
          <AlertWrap>
            {isSend && isVerify && <p>인증번호가 일치합니다.</p>}
          </AlertWrap>
          <AuthInput
            name="password"
            value={password}
            type="password"
            placeholder="비밀번호"
            autoComplete="off"
            onChange={onChange}
          />
          <AuthInput
            name="passwordConfirm"
            value={passwordConfirm}
            type="password"
            placeholder="비밀번호 확인"
            autoComplete="off"
            onChange={onChange}
          />
          <ErrorWrap>
            <p>{errorMessage}</p>
          </ErrorWrap>
          <SubmitBtn type="submit" onClick={onSubmit}>
            SUBMIT
          </SubmitBtn>
        </FormWrap>
      </FindPwWrap>
    </MainWrap>
  );
};

export default FindPwPage;

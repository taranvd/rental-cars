import styled from 'styled-components';
import Heart from '@react-sandbox/heart';
import { Button } from 'rsuite';

export const StyledHeart = styled(Heart)`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const Image = styled.img`
  margin-bottom: 14px;
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #121417;
`;

export const Price = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const Desc = styled.p`
  height: 40px;
  margin-bottom: 28px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: rgba(18, 20, 23, 0.5);
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
`;

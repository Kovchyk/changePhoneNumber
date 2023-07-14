import styled from 'styled-components';

const TitleStyled = styled.button`
  height: 40px;
  width: 106px;
  border: ${({ theme }) => theme.border.grey};
  border-radius: ${({ theme }) => theme.radii[3]};
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  color: ${({ theme }) => theme.colors.dark};
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    outline: transparent !important;
    border: ${({ theme }) => theme.border.primary};
  }
`;

export const ArrowUp = styled.span`
  margin-top: 5px;
  width: 9px;
  height: 9px;
  transform: rotate(45deg);

  &::before,
  &:after {
    content: '';
    display: block;
    background: ${({ theme }) => theme.colors.grey};
    border-radius: ${({ theme }) => theme.radii[1]};
    position: absolute;
  }

  &:before {
    width: 100%;
    height: 1px;
  }

  &:after {
    width: 1px;
    height: 100%;
  }
`;

export const ArrowDown = styled(ArrowUp)`
  margin-top: -5px;
  transform: rotate(225deg);
`;

export const Image = styled.img`
  border: ${({ theme }) => theme.border.grey};
  width: 22px;
  height: 16px;
`;

export default TitleStyled;

import styled from 'styled-components';
import { variant, buttonStyle, system } from 'styled-system';
import { Box } from './Box/Box';
import mainTheme from './theme/main';

const buttonSize = variant({
  prop: 'size',
  key: 'buttonSizes',
});

export const Button = styled(Box.withComponent('button'))(
  {
    appearance: 'none',
    border: 0,
    outline: 0,
    fontFamily: 'inherit',
    fontWeight: mainTheme.fontWeights[1],
  },
  system({
    width: true,
    height: true,
  }),
  buttonStyle,
  buttonSize,
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  borderRadius: mainTheme.radii[3],
};

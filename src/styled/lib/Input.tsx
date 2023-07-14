import styled from 'styled-components';
import { Box } from './Box/Box';
import mainTheme from './theme/main';

export const Input = styled(Box.withComponent('input'))({
  fontFamily: 'inherit',
  fontWeight: mainTheme.fontWeights[0],
  fontSize: mainTheme.fontSizes[4],
  lineHeight: mainTheme.lineHeights[5],
  borderRadius: mainTheme.radii[3],
  border: mainTheme.border.grey,
  color: mainTheme.colors.dark,
  width: '100%',
  height: mainTheme.sizes[1],
  padding: '8px 12px',

  '&:focus': {
    outline: 0,
    border: mainTheme.border.primary,
  },

  '::placeholder': {
    color: mainTheme.colors.grey,
  },
});

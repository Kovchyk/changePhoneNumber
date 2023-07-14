import colors from './colors';
import fontSizes from './fontSizes';
import space from './space';
import { radii, border } from './borders';
import { ThemeProps } from './types';

export default {
  colors,
  space,
  radii,
  border,
  fontSizes,
  fontWeights: [400, 500, 600],
  lineHeights: ['14px', '16px', '18px', '20px', '22px', '24px', '28px', '30px'],
  sizes: [32, 40],
  buttonSizes: {
    medium: {
      fontSize: fontSizes[4],
      padding: '4px 8px',
      height: 32,
    },
    large: {
      fontSize: fontSizes[10],
      padding: '20px 28px',
    },
  },
  buttons: {
    primary: {
      color: colors.white,
      backgroundColor: colors.primary,
      border: border.none,
    },
    secondary: {
      color: colors.black,
      backgroundColor: colors.white,
      border: border.primary,
    },
  },
} as ThemeProps;

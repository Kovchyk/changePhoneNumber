import colors from './colors';
import { StylesProps } from './types';

export const border: StylesProps = {
  primary: `solid 1px ${colors['primary']}`,
  grey: `solid 1px ${colors['borderGrey']}`,
  none: 'none',
};

export const radii: string[] = ['initial', '2px', '4px', '6px', '12px'];

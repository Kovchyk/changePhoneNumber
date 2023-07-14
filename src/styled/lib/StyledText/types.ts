import { StyledProps } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DesignSystemTextProps extends StyledProps<any> {
  truncatable?: boolean;
  stroke?: boolean;
  text: string;
}

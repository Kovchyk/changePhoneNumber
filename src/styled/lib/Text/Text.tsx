import React from 'react';
import Box from '../Box/Box';
import { ForwardRef } from '../types';
import { StyledProps } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Text: ForwardRef<HTMLDivElement, StyledProps<any>> = React.forwardRef(function Text(props, ref) {
  return <Box as='span' ref={ref} tx='text' {...props} />;
});

export default Text;

import React from 'react';
import { Box } from '../../styled';
import { IChildren } from './types';

const Body: React.FunctionComponent<IChildren> = ({ children }) => {
  return <Box id='modal-body'>{children}</Box>;
};

export default Body;

import React from 'react';
import { Box } from '../../styled';
import { IChildren } from './types';

const Header: React.FunctionComponent<IChildren> = ({ children }) => {
  return (
    <Box id='modal-footer' pb={6}>
      {children}
    </Box>
  );
};

export default Header;

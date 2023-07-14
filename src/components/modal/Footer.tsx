import React from 'react';
import { Box } from '../../styled';
import { IChildren } from './types';

const Footer: React.FunctionComponent<IChildren> = ({ children }) => {
  return (
    <Box id='modal-footer' pt={8}>
      {children}
    </Box>
  );
};

export default Footer;

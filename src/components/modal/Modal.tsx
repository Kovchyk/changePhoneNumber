import React from 'react';
import { Portal } from 'react-portal';
import { Box, Flex } from '../../styled';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

interface IModalProps {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNode[];
  onClickOutside: () => void;
}

const ModalInner: React.FunctionComponent<IModalProps> = ({ isOpen, children, onClickOutside }) => {
  if (isOpen) {
    return (
      <Portal>
        <Flex
          bg='grey'
          position='fixed'
          top={0}
          bottom={0}
          left={0}
          right={0}
          justifyContent='center'
          alignItems='center'
          zIndex={99998}
          onClick={onClickOutside}
        >
          <Box
            id='modal'
            width={564}
            maxHeight='90vh'
            bg='white'
            borderRadius={4}
            p={8}
            overflow='hidden'
            onClick={event => event.stopPropagation()}
          >
            {children}
          </Box>
        </Flex>
      </Portal>
    );
  } else return null;
};

const Modal: any = ModalInner;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

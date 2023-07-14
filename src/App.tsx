import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box, Flex, Button, Title1Bold, BodySemibold } from './styled';
import Modal from './components/modal/Modal';
import InputMask from './components/InputMask';
import Dropdown from './components/dropdown/Dropdown';
import { getCountries } from './services/api';
import { COUNTRIES } from './constants';
import { IItem } from './types';

const App: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [countrySelected, setCountrySelected] = useState<IItem>(COUNTRIES[0]);

  // const { isLoading, isError, data, error } = useQuery(['contries'], getCountries);

  // console.log(isLoading, error, data);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setPhoneNumber('');
    setCountrySelected(COUNTRIES[0]);
    handleModalClose();
  };

  const handleSave = () => {
    handleModalClose();
    console.log('phoneNumber', phoneNumber);
    console.log('code', countrySelected.code);
  };

  const handleInputChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleDropdownSelect = (selected: IItem) => {
    setCountrySelected(selected);
  };

  return (
    <Flex id='app' justifyContent='center' alignItems='center'>
      <Button size='large' variant='primary' onClick={handleModalOpen}>
        Open modal
      </Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClickOutside={handleModalClose}>
          <Modal.Header>
            <Title1Bold text='Change phone number' />
          </Modal.Header>
          <Modal.Body>
            <BodySemibold text='Provide new phone number' color='dark' ml={4} />
            <Flex>
              <Dropdown list={COUNTRIES} onSelect={handleDropdownSelect} selected={countrySelected} />
              <Box ml={5} flexGrow={1}>
                <InputMask onChange={handleInputChange} initialValue={phoneNumber} />
              </Box>
            </Flex>
          </Modal.Body>
          <Modal.Footer>
            <Flex justifyContent='flex-end'>
              <Button variant='secondary' width={116} onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant='primary' width={116} ml={6} onClick={handleSave}>
                Save
              </Button>
            </Flex>
          </Modal.Footer>
        </Modal>
      )}
    </Flex>
  );
};

export default App;

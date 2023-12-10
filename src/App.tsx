import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Box, Flex, Button, Title1Bold, BodySemibold } from './styled';
import Modal from './components/modal/Modal';
import InputMask from './components/InputMask';
import Dropdown from './components/dropdown/Dropdown';
import { getCountries } from './services/api';
import { IItem } from './types';

const App: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [countries, setCountries] = useState<IItem[]>([]);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [countrySelected, setCountrySelected] = useState<IItem | null>(null);

  const { isLoading, isError, data } = useQuery('countries', getCountries, { initialData: { data: [] } });

  useEffect(() => {
    const countries: IItem[] = data.data.map((country: any) => {
      return {
        id: country.ccn3,
        code: `${country.idd.root}${country.idd.suffixes[0]}`,
        title: country.name.common,
        flagUrl: country.flags.svg,
      };
    });

    setCountries(countries);
    setCountrySelected(countries[0]);
  }, [data]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setPhoneNumber('');
    setCountrySelected(countries[0] || null);
    setIsModalOpen(false);
  };

  const handleSave = () => {
    setIsModalOpen(false);
    console.log('phoneNumber', phoneNumber);
    console.log('code', countrySelected?.code);
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
      <Modal isOpen={isModalOpen} onClickOutside={handleModalClose}>
        <Modal.Header>
          <Title1Bold text='Change phone number' />
        </Modal.Header>
        <Modal.Body>
          <BodySemibold text='Provide new phone number' color='dark' ml={4} />
          <Flex>
            <Dropdown list={countries} onSelect={handleDropdownSelect} selected={countrySelected} />
            <Box ml={5} flexGrow={1}>
              <InputMask onChange={handleInputChange} initialValue={phoneNumber} />
            </Box>
          </Flex>
        </Modal.Body>
        <Modal.Footer>
          <Flex justifyContent='flex-end'>
            <Button variant='secondary' width={['50%', 116]} onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant='primary' width={['50%', 116]} ml={6} onClick={handleSave}>
              Save
            </Button>
          </Flex>
        </Modal.Footer>
      </Modal>
    </Flex>
  );
};

export default App;

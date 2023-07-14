import React, { useState, useEffect, useRef } from 'react';
import { Portal } from 'react-portal';
import { Box, CenSpbtwRowFlex, ColFlex, Text, TextRegular } from '../../styled';
import TitleStyled, { ArrowUp, ArrowDown, Image } from './styled/TitleStyled';
import { IItem, IDropdownProps } from '../../types';

const Dropdown: React.FunctionComponent<IDropdownProps> = ({ list, onSelect, selected }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };
  const selectItem = (item: IItem) => {
    onSelect(item);
  };
  const titleRef = useRef<HTMLButtonElement>(null);
  const titleElemCoords = titleRef.current && titleRef.current.getBoundingClientRect();
  const titleElemBottomCoord: number = (titleElemCoords && titleElemCoords.bottom) || 0;
  const listMarginTop = 4;
  const listTopCoord = titleElemBottomCoord + listMarginTop;

  useEffect(() => {
    const handler = () => setIsListOpen(false);

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, [isListOpen]);

  return (
    <Box className='dd-wrapper'>
      <TitleStyled type='button' className='dd-header' onClick={toggleList} ref={titleRef}>
        <Image src={selected.flagUrl} alt='flag' />
        <div className='dd-header-title'>{selected.code}</div>
        {isListOpen ? <ArrowUp /> : <ArrowDown />}
      </TitleStyled>
      {isListOpen && (
        <Portal>
          <Box
            position='fixed'
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex={99998}
            onClick={() => setIsListOpen(false)}
          >
            <ColFlex
              role='list'
              className='dd-list'
              zIndex={999999}
              position='fixed'
              top={listTopCoord}
              left={titleElemCoords?.left}
              background='white'
              width={260}
              maxHeight={260}
              borderRadius={3}
              borderColor='borderGrey'
              borderWidth={1}
              borderStyle='solid'
              overflowY='auto'
            >
              {list.map(item => (
                <CenSpbtwRowFlex
                  px={5}
                  py={4}
                  className='dd-list-item'
                  key={item.id}
                  onClick={() => selectItem(item)}
                  color='dark'
                  fontSize={4}
                >
                  <CenSpbtwRowFlex>
                    <Box mr={5}>
                      <Image src={item.flagUrl} alt='flag' />
                    </Box>
                    <TextRegular text={item.title} truncatable />
                  </CenSpbtwRowFlex>
                  <Text fontWeight={1}>{item.code}</Text>
                </CenSpbtwRowFlex>
              ))}
            </ColFlex>
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default Dropdown;

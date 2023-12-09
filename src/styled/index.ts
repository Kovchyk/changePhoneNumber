import styled from 'styled-components';
import StyledText from './lib/StyledText/StyledText';
import Box from './lib/Box/Box';

export const Flex = styled(Box)({ display: 'flex' });
export const ColFlex = styled(Flex)({ flexDirection: 'column' });
export const RowFlex = styled(Flex)({ flexDirection: 'row' });
export const CenSpbtwRowFlex = styled(RowFlex)({
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Title1Bold = StyledText(6, 5, 2);
export const BodySemibold = StyledText(2, 1, 1);
export const TextRegular = StyledText(4, 2);

export { Box } from './lib/Box/Box';
export { Button } from './lib/Button';
export { Input } from './lib/Input';
export { Text } from './lib/Text/Text';

export { default as mainTheme } from './lib/theme/main';
export * from './lib/theme/main';

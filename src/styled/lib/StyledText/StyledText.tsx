import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import { DesignSystemTextProps } from './types';

const TruncatableText = styled(Text)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-break: break-all;
`;

export const StyledText: (
  fontSize: number,
  lineHeight: number,
  fontWeight?: number,
  textDecoration?: string,
) => React.FunctionComponent<DesignSystemTextProps> = (
  fontSize,
  lineHeight,
  fontWeight = 0,
  textDecoration = 'none',
) => {
  const DesignSystemText = (props: DesignSystemTextProps): JSX.Element => {
    if (!props.truncatable) {
      return (
        <Text {...{ fontSize, lineHeight, fontWeight, textDecoration, ...props }}>
          {props.stroke ? <s>{props.text}</s> : props.text}
        </Text>
      );
    }

    return (
      <TruncatableText {...{ fontSize, lineHeight, fontWeight, textDecoration, ...props }}>
        {props.text}
      </TruncatableText>
    );
  };

  return DesignSystemText;
};

export default StyledText;

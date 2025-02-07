import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ActivityIndicator} from 'react-native';

//Interface that defines the props that the Button component will receive, extending the props of the TouchableOpacityBox component to be able to uses personalized props in Button
interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}
///touchableOpacityBoxProps are the props that the component will receive but the title and loading props, for example de onPress prop
export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      borderRadius="s16"
      height={50}
      alignItems="center"
      justifyContent="center"
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold color="primaryContrast">
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

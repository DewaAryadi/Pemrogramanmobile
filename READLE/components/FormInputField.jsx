import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import useTheme from '../hooks/useTheme';

const { palette, radius } = useTheme();

const styles = StyleSheet.create({
  input: {
    borderColor: palette.common.gray.main,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'Roboto',
    borderRadius: radius.normal,
  },
});

const FormInputField = ({
  state, setState, options,
}) => (
  <TextInput
    value={state}
    onChangeText={(text) => setState(text)}
    style={[styles.input, { marginBottom: 8 }]}
    {...options}
  />
);

export default FormInputField;

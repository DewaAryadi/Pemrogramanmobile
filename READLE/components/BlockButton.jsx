import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import useTheme from '../hooks/useTheme';

const { radius } = useTheme();

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pills,
  },
});

const BlockButton = ({
  label, bgColor, textColor, onPress,
}) => (
  <TouchableOpacity
    style={[styles.button, {
      backgroundColor: bgColor,
    }]}
    onPress={onPress}
  >
    <Text style={{ color: textColor }}>{label}</Text>
  </TouchableOpacity>
);

export default BlockButton;

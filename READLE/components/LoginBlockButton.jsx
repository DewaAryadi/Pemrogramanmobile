import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import useTheme from '../hooks/useTheme';

const { typography, radius } = useTheme();

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pills,
  },
});

const LoginBlockButton = ({
  icon, label, style, onPress,
}) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
  >
    <MaterialCommunityIcons
      name={icon.name}
      size={typography.size.xl}
      color={icon.color}
    />
    <Text style={{
      marginLeft: 8,
      color: label.color,
    }}
    >
      {label.placeholder}
    </Text>
  </TouchableOpacity>
);

export default LoginBlockButton;

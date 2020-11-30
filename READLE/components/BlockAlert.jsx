import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useTheme from '../hooks/useTheme';

const { radius } = useTheme();

const styles = StyleSheet.create({
  alert: {
    padding: 16,
    marginBottom: 16,
    borderRadius: radius.normal,
  },
});

const BlockAlert = ({ message, bgColor, textColor }) => (
  <View style={[styles.alert, {
    backgroundColor: bgColor,
  }]}
  >
    <Text style={{ color: textColor }}>
      {message}
    </Text>
  </View>
);

export default BlockAlert;

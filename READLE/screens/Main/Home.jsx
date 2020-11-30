import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {StyleSheet,View,Text,ScrollView,TouchableOpacity,} from 'react-native';
import Constants from 'expo-constants';
import Bookslist from '../../components/Bookslist';
import useTheme from '../../hooks/useTheme';

const { palette, typography } = useTheme();

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: palette.common.white, paddingTop: Constants.statusBarHeight,
  },
  iconButton: {padding: 8, borderRadius: 100,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={{
      padding: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
    >
      <View>
        <Text style={{
          color: palette.text.secondary,
        }}
        >
          Welcome to Readle
        </Text>
        <Text style={{
          fontWeight: 'bold',
          fontSize: typography.size.md,
        }}
        >
          Bambang
        </Text>
      </View>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialCommunityIcons
          name="bell"
          size={24}
          style={{ color: palette.text.secondary }}
        />
      </TouchableOpacity>
    </View>
    <ScrollView style={{ paddingHorizontal: 24 }}>
      {[1, 2, 3, 4].map((i) => (
        <Bookslist key={i} navigation={navigation} />
      ))}
    </ScrollView>
  </View>
);

export default HomeScreen;

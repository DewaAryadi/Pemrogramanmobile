import React from 'react';
import {StyleSheet,Text,View,ScrollView,Image,FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Bookcover from '../assets/Image/Bookcover.jpg';
import useTheme from '../hooks/useTheme';

const DetailsScreen = () => (
  <ScrollView>
    <View style={styles.container}>
      <View>
        <Image
          style={styles.bookcover}
          source={Bookcover}
        />
      </View>
      <View style={{ padding: 24 }}>
        <Text style={styles.BookTitle}>Harry Potter Chapter 4</Text>
        <Text style={styles.BookDescription}>
        Harry Potter hidup sebagai anak biasa di keluarga paman dan bibinya setelah saat 
        ia masih bayi ditinggalkan di depan rumah mereka oleh Albus Dumbledore. 
        Orang tuanya dibunuh oleh penyihir hitam yang sangat kuat bernama Voldemort 
        namun ia menghilang saat mencoba membunuh Harry. Oleh keluarga Dursley, 
        ia diperlakukan semena-mena karena keluarga Dursley tidak ingin Harry 
        dan orang lain tahu bahwa mereka adalah keluarga dari penyihir.
        </Text>
        <View style={{
          ...styles.flexRow,
          justifyContent: 'space-between',
        }}
        >
          <View style={styles.flexRow}>
            {[1, 2, 3, 4, 5].map((i) => (
              <MaterialCommunityIcons
                key={`icon-${i}`}
                name="star"
                size={16}
                color={palette.warning.main}
              />
            ))}
            <Text style={{ marginLeft: 4, color: palette.text.secondary }}>5.0 (1M)</Text>
          </View>
          <View style={styles.flexRow}>
            <View style={{
              ...styles.flexRow,
              marginRight: 8,
            }}
            >
              <MaterialCommunityIcons
                name="thumb-up"
                size={16}
                color={palette.text.secondary}
              />
              <Text style={{ marginLeft: 4, color: palette.text.secondary }}>3M</Text>
            </View>
            <View style={styles.flexRow}>
              <MaterialCommunityIcons
                name="comment"
                size={16}
                color={palette.text.secondary}
              />
              <Text style={{ marginLeft: 4, color: palette.text.secondary }}>2M</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
);

const { typography, palette } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.common.white,
  },
  bookcover: {
    width: '100%',
    height: 280,
    resizeMode: 'cover',
  },
  BookTitle: {
    fontSize: typography.size.md,
    fontWeight: '700',
    marginBottom: 16,
  },
  BookDescription: {
    color: palette.text.secondary,
    marginBottom: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DetailsScreen;

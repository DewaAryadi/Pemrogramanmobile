import React from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import avatar from '../assets/Image/Publisheravatar.png';
import Bookcover from '../assets/Image/Bookcover.jpg';
import useTheme from '../hooks/useTheme';

const Bookslist = ({ navigation }) => (
  <View style={{ marginBottom: 24 }}>
    <TouchableOpacity style={styles.publisherContainer}>
      <View style={styles.publisherAvatarWrapper}>
        <Image
          style={{
            width: 32,
            height: 32,
          }}
          source={avatar}
        />
      </View>
      <View>
        <Text style={styles.publisherName}>J.K.Rowling</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.BookImageWrapper}
      onPress={() => navigation.navigate('Details')}
    >
      <Image
        style={{
          width: '100%',
          height: 180,
          resizeMode: 'cover',
        }}
        source={Bookcover}
      />
    </TouchableOpacity>

    <View>
      <Text style={styles.Booktitle}>Harry Potter Chapter 4</Text> 
      </View>
  </View>
);

const { radius, typography, palette } = useTheme();

const styles = StyleSheet.create({
  publisherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  publisherAvatarWrapper: {
    borderRadius: radius.pills,
    overflow: 'hidden',
    marginRight: 8,
  },
  publisherName: {
    fontSize: typography.size.sm,
  },
  publishDate: {
    fontSize: typography.size.xs,
    color: palette.text.secondary,
  },
  BookImageWrapper: {
    overflow: 'hidden',
    marginVertical: 12,
    borderRadius: radius.normal,
  },
  Booktitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: typography.size.sm,
  },
  metaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Bookslist;

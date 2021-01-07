import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",  
  },
});

const DetailsScreen = () => (
  <ScrollView style={styles.container}>
    
      <Image style={{height: 350, width: 370, marginTop: 30}} source={require('../assets/foto/brown.jpg')}/>
    
      <View>

      <View style={{padding:10, marginBottom: 5, color: 'black'}}>
        <Text style={{color: "black", fontSize: 25}}>
          Bahan:
        </Text>
        <Text style={{color: "black"}}>
          125 gr Coklat batang
        </Text>
        <Text style={{color: "black"}}>
          100 gr ROYAL PALMIA BUTTER MARGARINE
        </Text>
        <Text style={{color: "black"}}>
          1 bgks Vanili
        </Text>
        <Text style={{color: "black"}}>
          1 sdt SP
        </Text>
        <Text style={{color: "black"}}>
          1/2 sdt Baking powder
        </Text>
        <Text style={{color: "black"}}>
          3 butir Telur
        </Text>
        <Text style={{color: "black"}}>
          ½ kg Tepung terigu
        </Text>
        <Text style={{color: "black"}}>
          5 sdm Gula pasir
        </Text>
        <Text style={{color: "black"}}>
          1 bgks Chocolatos choco drink
        </Text>
        <Text style={{color: "black"}}>
          1 sachet SKM coklat
        </Text>

        <Text style={{color: "black", marginTop: 10,fontSize: 25}}>
        Cara Membuat:
        </Text>
        <Text style={{color: "black"}}>
        1. Panaskan tempat pengukus
        </Text>
        <Text style={{color: "black"}}>
        2. 125gr coklat batang di tim dengan 100gr ROYAL PALMIA BUTTER MARGARINE
        </Text>
        <Text style={{color: "black"}}>
        3. 3 butir telur, gula pasir, vanili, dan SP kocok dengan kecepatan sedang
        </Text>
        <Text style={{color: "black"}}>
        4. Masukkan tepung terigu, chocolatos choco drink, baking powder. Aduk menggunakan kecepatan rendah atau bisa dengan spatula
        </Text>
        <Text style={{color: "black"}}>
        5. Masukkan coklat dan simas yang sudah di tim. Aduk dengan spatula
        </Text>
        <Text style={{color: "black"}}>
        6. Bagi adonan menjadi 3 bagian
        </Text>
        <Text style={{color: "black"}}>
        7. 1 adonan ditambah 1 sachet SKM coklat
        </Text>
        <Text style={{color: "black"}}>
        8. Siapkan loyang yang sudah dilumuri simas dan beri kertas roti 9
        </Text>
        <Text style={{color: "black"}}>
        9. Masukan adonan 1 pada loyang dan kukus kurang lebih 10 menit tusuk dengan lidi hingga tidak lengket
        </Text>
        <Text style={{color: "black"}}>
        10. Tuang adonan ke 2 (yang sudah di tamabah SKM coklat) kukus kurang lebih 10 menit tusuk dengan lidi hingga tidak lengket
        </Text>
        <Text style={{color: "black"}}>
        11. Tuang adonan ke 3 kukus hingga matang
        </Text>
        <Text style={{color: "black"}}>
        12. Angkat loyang dan dapat disajikan
        </Text>

      </View>
      </View>
  </ScrollView>
);
export default DetailsScreen;

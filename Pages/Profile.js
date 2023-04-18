import { StyleSheet, Text, View,Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image
        source={require('../Images/Photo.png')}
        style={{
          width: 200,
          height: 200,
          borderRadius: 200 / 2
        }}/>
      </View>
      <View style={styles.profile}>
        <FontAwesome name="id-card-o"size={30}/>
        <Text style={styles.Text}>Viriansyah Eka Yumardila</Text>
      </View>
      <View style={styles.profile}>
        <FontAwesome5 name="user-graduate"size={30}/>
        <Text style={styles.Text}>Teknik Informatika</Text>
      </View>
      <View style={styles.profile}>
        <FontAwesome5 name="school"size={30}/>
        <Text style={styles.Text}>Universitas Widyatama Bandung</Text>
      </View>
      <View style={styles.profile}>
        <MaterialCommunityIcons name="calendar-account-outline"size={30}/>
        <Text style={styles.Text}>Bandung, 09 Juni 2000</Text>
      </View>
      <View style={styles.profile}>
      <MaterialCommunityIcons name="gender-male"size={30}/>
        <Text style={styles.Text}>Laki - Laki</Text>
      </View>
      <View style={styles.profile}>
        <FontAwesome name="home"size={30}/>
        <Text style={styles.Text}>Komp. Antapani Mas No 49 Blok A, 003/019, Antapani Kidul, Antapani, Kota Bandung</Text>
      </View>
      <View style={styles.profile}>
        <FontAwesome name="tasks"size={30}/>
        <Text style={styles.Text}>* Membuat Aplikasi Android Dengan JAVA tentang Asmaul Husna.
        {"\n"}* Membuat Aplikasi Android Dengan React Native tentang Resep Makanan/Minuman.
        {"\n"}* Membuat Aplikasi Android Dengan Ionic tentang to-do-list.</Text>
        
      </View>
      <View style={styles.profile}>
        <FontAwesome name="github"size={30}/>
        <TouchableOpacity
        onPress={ ()=>{ Linking.openURL('https://github.com/viriansyah/')}}>
          <Text style={styles.TextGithub}>Click On Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
  },
  Image:{
    alignItems:'center',
  },
  Text:{
    flex:1,
    marginTop:5,
    marginLeft:10,
    fontSize:16,
  },
  TextGithub:{
    flex:1,
    marginTop:5,
    marginLeft:10,
    fontSize:16,
    color:"blue"
  },
  profile:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
  },

})
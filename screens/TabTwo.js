import { View, Text,SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, ScrollView, Image,Vide } from 'react-native';
import React,{useState} from 'react';

const imagesData = [
  { id: 1, keyword: 'headache', url: require('../video/headache.png') },
  { id: 2, keyword: 'backpain', url: require('../video/backpain.png') },
  { id: 3, keyword: 'stomachpain', url: require('../video/stomach.png') },
  { id: 4, keyword: 'tooothache', url: require('../video/toothache.png') },
  { id: 5, keyword:  'malaria', url: require('../video/malaria.png')},
];

const TabTwo = () => {
  
  const [searchKeyword, setSearchKeyword] = useState('');
  const [displayedImage, setDisplayedImage] = useState(null);

  const handleSearch = () => {
    const foundImage = imagesData.find((image) =>
      image.keyword.toLowerCase() === searchKeyword.toLowerCase()
    );
    if (foundImage) {
      setDisplayedImage(foundImage.url);
    } else {
      setDisplayedImage(null); // Reset displayed image if not found
    }
  };

  return (
    <SafeAreaView style={{flex:1,justifyContent:'space-between',alignItems:'center'}}>
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        height:"130%"
      }}>
        <View style={{width:'100%',flex:3,flexDirection:'column',alignItems:'center'}}>
            <View style={{height:'6%',width:'98%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',paddingLeft:'8%'}}>
              <Text>EHGLISH</Text>
              <View style={{backgroundColor:'purple',width:'12%',heght:'50%',}}>
              </View>
              <Text>SIGN LANGUAGE</Text>
            </View>
            <View  style={{width:'98%',height:'36%',marginTop:'4%',alignItems:'center',justifyContent:'space-evenly'}}>
              <TextInput placeholder='TAB TO ENTER TEXT' value={searchKeyword} onChangeText={(text) => setSearchKeyword(text)} style={{width:'100%',height:'70%',fontSize:30,backgroundColor:'black',borderRadius:10}}/>
              <TouchableOpacity onPress={handleSearch} style={{height:'20%',backgroundColor:'#1D1E2C',width:'50%',borderRadius:8,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#849483',fontSize:20}}>Translate</Text>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'dodgerblue',width:'92%',height:'35%',marginTop:'4%'}}>
               <Image source={displayedImage} style={{width:'98%',height:'98%'}}/>
            </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>MB
  )
}

export default TabTwo
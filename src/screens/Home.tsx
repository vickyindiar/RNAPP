import React, { useState, FC } from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions, TextInput, Button, Platform } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { dataTopics, IDataTopics } from '../store/data/static_data';
import Carousel, { ParallaxImage, ParallaxImageProps, ParallaxImageProperties } from 'react-native-snap-carousel';
import { Props } from 'react-native-paper/lib/typescript/components/RadioButton/RadioButton';


const widthC = Dimensions.get('screen').height;
const { width: screenWidth } = Dimensions.get('window')

interface IProps{
  item: IDataTopics,
  index: number
}

const RenderItem:FC<IProps> = ({item, index}, parallaxProps : ParallaxImageProperties) => {
  console.log(item.url)
  return (
      <View style={styles.item}>
          <ParallaxImage
              source={item.url}
              containerStyle={styles.imageContainer}
              style={styles.image}
              parallaxFactor={0.4}
              // {...parallaxProps}
          />
          <Text style={styles.title} numberOfLines={2}>
              { item.title }
          </Text>
      </View>
  );
}


const Home: FC = () => {
  return (
    <ScrollView>
        <View style={styles.mainWrapper}>
          <View style={styles.circle}>
          </View>
          <View style={styles.ourTopics}>
            <View style={{flex:1,  flexDirection:'row', justifyContent:'space-between', paddingHorizontal:2}} >
              <Text style={styles.title}>Our Top Topics</Text>
              <Icon name='menu' size={40} color={'white'}/>
            </View>
            <View>
            <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={dataTopics}
                renderItem={RenderItem}
                hasParallaxImages={true}
            />
            </View>
          </View> 
          <View style={styles.bestSellers}>
            <Text style={styles.title}>Best Sellers</Text>
            <View></View>
          
          </View>
          <View style={styles.genere}>
            <Text style={styles.title}>Generes</Text>
            <View></View>
          
          </View> 
          <View style={styles.recentViews}>
            <Text style={styles.title}>Recently View</Text>
            <View></View>
          </View>
          <View style={styles.newsLetter}>
              <Text> Recieve our monthly newsletter and receive updates</Text>
              <TextInput></TextInput>
              <TextInput></TextInput>
              <Button title='Sign up' ></Button>

          </View>
          
        </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    borderColor:'black',
    borderWidth:2,
    borderStyle:'dashed',
    height:2000
  },
  circle: {
    position:'absolute',
    top: -500,
    left:-160,
    width: 800,
    height: 800,
    borderRadius:800,
    backgroundColor: '#5ABD8C'
  },
  ourTopics:{
    flex:1,
    paddingVertical:20
  },
  title:{
    fontSize:30,
    color:'white'
  },
  bestSellers:{
    flex:1,
    backgroundColor: Colors.blue800
  },
  genere:{
    flex:1,
    backgroundColor:Colors.amber50
  },
  recentViews:{
    flex:1,
    backgroundColor:Colors.cyan400

  },
  newsLetter: {
    flex: 1,
    backgroundColor:Colors.yellowA700
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  



})

export default Home
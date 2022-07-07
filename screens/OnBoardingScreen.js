import React from 'react';
import { Image, View, TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import Onboarding from 'react-native-onboarding-swiper';

const Square = ({ isLight, selected }) => {

   

  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  } else {
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

const Done = ({ isLight, ...props }) => (
  <TouchableOpacity
    title={'Done'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: backgroundColor(isLight),
    }}
    textStyle={{ color: color(isLight) }}
    {...props} 
  />
);

const Skip = ({ isLight, skipLabel, ...props }) => (
    
  <TouchableOpacity

onPress={()=>navigation.navigate('Home')}

    title={'Skip'}
    buttonStyle={{
      backgroundColor: backgroundColor(isLight),
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  >
   <Text> {skipLabel}</Text>
  </TouchableOpacity>
);

const Next = ({ isLight, ...props }) => (
  <TouchableOpacity
    title={'Next'}
    buttonStyle={{
      backgroundColor:'blue',
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: 'blue',
    }}
    textStyle={{ color: color(isLight) }}
    {...props}
  />
);

const CustomButtons = () => (
  <Onboarding
    DotComponent={Square}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    titleStyles={{ color: 'blue' }} // set default color for the title
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/digital.png')} />,
        title: 'Digital Marketting',
        subtitle: 'Brands that take advantage of online marketing have reported as much as a 76% increase in both direct and indirect sales',
        titleStyles: { color: 'red' }, // overwrite default color
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/dev.png')} />,
        title: 'Web Development',
        subtitle: 'We conceptualize, wire frame, and design modern websites. Our clients include individuals, corporations, and organizations seeking a detailed, clean, and functional approach to conveying their message.',
      },
      {
        backgroundColor: '#fff',
        image:  <Image source={require('../assets/dev.png')} />,
        title: 'Graphic Design',
        subtitle: "Collectively our team has more than 10 years of design experience both as ideators and executors of ground-breaking design concepts. From logos, flyers to brochures, signs and billboards, we are your one stop shop for amazingly engaging visuals.",
      },
      {
        backgroundColor: '#fff',
        image:  <Image source={require('../assets/content.png')} />,
        title: 'Content Creation',
        subtitle: "Do you have an exciting idea that you want to bring to life? We’ve got the right mix of talent and creative skills to help you go from concept to reality.",
      },
    ]}
  />
);

export default CustomButtons;
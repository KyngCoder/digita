import React from 'react';
import { Image, View, TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';


const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
      <View 
          style={{
              width:6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor
          }}
      />
  );
}

const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);

const CustomButtons = ({navigation}) => (
  
  <Onboarding
    DotComponent={Dots}
    NextButtonComponent={Next}
    SkipButtonComponent={Skip}
    DoneButtonComponent={Done}
    onSkip={() => navigation.replace("Home")}
        onDone={() => navigation.navigate("Home")}
    titleStyles={{ color: 'blue' }} // set default color for the title
    pages={[
      {
        backgroundColor: '#fff',
        image: <Image source={require("../assets/1.png")} />,
        title: 'Digital Marketting',
        subtitle: 'Brands that take advantage of online marketing have reported as much as a 76% increase in both direct and indirect sales',
        titleStyles: { color: 'red' }, // overwrite default color
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/3.png')} />,
        title: 'Web Development',
        subtitle: 'We conceptualize, wire frame, and design modern websites. Our clients include individuals, corporations, and organizations seeking a detailed, clean, and functional approach to conveying their message.',
      },
      {
        backgroundColor: '#fff',
        image:  <Image source={require('../assets/2.png')} />,
        title: 'Graphic Design',
        subtitle: "Collectively our team has more than 10 years of design experience both as ideators and executors of ground-breaking design concepts. From logos, flyers to brochures, signs and billboards, we are your one stop shop for amazingly engaging visuals.",
      },
      {
        backgroundColor: '#fff',
        image:  <Image source={require('../assets/4.png')} />,
        title: 'Content Creation',
        subtitle: "Do you have an exciting idea that you want to bring to life? We’ve got the right mix of talent and creative skills to help you go from concept to reality.",
      },
    ]}
  />
);

export default CustomButtons;
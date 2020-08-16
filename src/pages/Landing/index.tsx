import React from 'react';
import { View,Text,Image,ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import { 
  Container,
  Message,
  Logos,
  Content,
  Banner,
  Button,
  ButtonText
} from './styles';

import Logo from '../../Assets/Logo.png'
import Bg from '../../Assets/landing_bg.png'


const Landing: React.FC = () => {
  const { navigate } = useNavigation()

  function handleGoToList(){
    navigate('tab')
  }

  return(
    <Container>
      <Banner
        resizeMode="contain" 
        source={Bg}
      >
        <Content>
          <Logos resizeMode="contain"  source={Logo}/>
          
          <Message>O seu app de controle de finanças.</Message>
          
          <Button onPress={handleGoToList}>
            <ButtonText>Começar agora</ButtonText>
          </Button>
        </Content>
      </Banner>
    </Container>
  );
}

export default Landing;
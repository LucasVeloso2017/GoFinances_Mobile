import React, { useState, useEffect } from 'react';
import { View,Text,Image } from 'react-native';

import {Container,Header,Indicador,Price} from './styles';

interface CardProps{
  title:string
  price:string
  image?:Image
  flag:boolean
}

const Card: React.FC<CardProps> = ({title,price,image,flag}:CardProps) => {
  
  const[verify,setVerify] = useState(false)
  
  useEffect(()=>{
    setVerify(flag)
  },[flag])

  return(
    <Container verify={verify}>
      <Header>
        <Indicador verify={verify}>{title}</Indicador>
        <Image source={image}/>
      </Header>
      <View>
        <Price verify={verify}>R${price}</Price>
      </View>
    </Container>
  );
}

export default Card;
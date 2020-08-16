import React from 'react';
import { View,Text } from 'react-native';

import { Container,Content,Title,Price,BalanceInfo,Type,DateItem } from './styles';

interface ListSpecProps{
    title:string
    price:any
    type:string
    dateItem:string
}


const SpecCard: React.FC<ListSpecProps> = ({title,price,type,dateItem}:ListSpecProps) => {
    return(
        <Container>
            <Content>
                <Title>{title}{'\n'}</Title>
                <Price>R$ {price}</Price>
            </Content>
            <BalanceInfo>
                <Type>{type}</Type>
                <DateItem>{dateItem}</DateItem>
            </BalanceInfo>
        </Container>
    )
}

export default SpecCard;
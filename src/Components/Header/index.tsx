import React from 'react';
import { View } from 'react-native';
import Logo from '../../Assets/Logo.png'
import { Container,Banner } from './styles';

const Header: React.FC = () => {
    return(
        <Container>
            <Banner resizeMode="contain" source={Logo}/>
        </Container>
    );
}

export default Header;
import React,{useState} from 'react';
import { View,KeyboardAvoidingView,Platform,StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import Header from '../../Components/Header'
import BtnIncome from '../../Assets/Entradas.png'
import BtnOutcome from '../../Assets/Saidas.png'

import api from '../../services/api'


import { Container,
    FormContent,
    Title,
    Input,
    InputContainer,
    ButtonContainer,
    Button,
    ButtonText,
    LogoBtn,
    SubmitButton,
    SubmitButtonText
} from './styles';

const AddResults: React.FC = () => {

    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[type,setType] = useState('')
  
    const { navigate } = useNavigation()

    function handleIncomeType(){
        setType('income')
    }
    function handleOutcomeType(){
        setType('outcome')
    }

    function handleSubmit(){
        const data = {
            title:name,
            value:Number(price),
            category,
            type
        }

        api.post('transactions',data)
        navigate('Listagem')
    }

    return (
        <>
            <Header/>
            <Container>
                <FormContent>
                    <Title>Cadastro</Title>
                    <InputContainer>
                        
                        <Input
                            value={name}
                            onChangeText={e => setName(e)}
                            placeholder="Nome"
                        />
                        <Input
                            value={price}
                            onChangeText={e => setPrice(e)}
                            placeholder="Preço"
                        />

                        <ButtonContainer>

                            <Button onPress={handleIncomeType}>
                                <LogoBtn resizeMode="contain" source={BtnIncome}/>
                                <ButtonText>Entradas</ButtonText>
                            </Button>

                            <Button onPress={handleOutcomeType}>
                                <LogoBtn  resizeMode="contain" source={BtnOutcome}/>
                                <ButtonText>Saidas</ButtonText>
                            </Button>

                        </ButtonContainer>

                        <Input
                            value={category}
                            onChangeText={e => setCategory(e)}
                            placeholder="Categoria"
                        />

                        <SubmitButton onPress={handleSubmit}>
                            <SubmitButtonText>Enviar</SubmitButtonText>
                        </SubmitButton>

                    </InputContainer>
                </FormContent>
            </Container>
        </>
    );
}

export default AddResults;
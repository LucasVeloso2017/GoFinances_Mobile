import styled,{css} from 'styled-components/native'



const Container = styled.View`
    flex:1;
`
const FormContent = styled.View`
    flex:1;
    border-top-right-radius:30px;
    border-top-left-radius:30px;
    margin-top:-80px;
    background-color:#E5E5E5;
    padding:30px;
`
const Title = styled.Text`
    font-size:25px;
    color: #363F5F;
`

const InputContainer = styled.View`
    flex:1;
    flex-direction:column;
    margin-top:30px;

`

const ButtonContainer = styled.View`
    margin-top:10px;
    width:100%;
    height:70px;
    flex-direction:row;
`
const Button = styled.TouchableOpacity`
    flex:1;
    margin-left:5px;
    border-radius:8px;   
    flex-direction:row;
    background-color:#F0F2F5;
    justify-content:space-around;
    align-items:center;
`
const ButtonText = styled.Text`
    font-size:16px;
`
const LogoBtn = styled.Image`
    width:30%;
`
const Input = styled.TextInput`
    margin-top:15px;
    width:100%;
    height:60px;
    border-radius:8px;
    padding:10px;
    background-color:white;
`
const SubmitButton = styled.TouchableOpacity`
    width:100%;
    height:65px;
    margin-top:20px;
    border-radius:8px;
    background-color:#FF872C;
    justify-content:center;
    align-items:center;
`
const SubmitButtonText = styled.Text`
    font-size:22px;
    color:white;
`

export {
    Container,
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
}
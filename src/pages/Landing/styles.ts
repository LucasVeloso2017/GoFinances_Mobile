import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
    background-color:#5636D3;
    padding:40px;
`

export const Banner = styled.ImageBackground`
    flex:1;
    width:100%;
`

export const Content = styled.View`
    flex:1;
    padding-top:250px;
`

export const Logos = styled.Image`
    width:80%;
    height:8%;
`

export const Message = styled.Text`
    margin-top:100px;
    max-width:350px;
    font-size:30px;
    color:white;
`
export const Button = styled.TouchableOpacity`
    margin-top:110px;
    width:100%;
    height:110px;
    border-radius:8px;
    background-color:#FF872C;
    justify-content:center;
    align-items:center;
`
export const ButtonText = styled.Text`
   font-size:22px;
   font-weight:bold;
   color:white;
`
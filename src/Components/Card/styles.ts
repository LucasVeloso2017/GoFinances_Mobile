import styled,{css} from 'styled-components/native'

interface Props{
    verify:boolean
}

const Container = styled.View<Props>`
    margin-top:50px;
    width:350px;
    height:150px;
    border-radius:8px;
    background-color:white;
    margin:10px;
    padding:10px;
 
    ${
        props => props.verify && css`
            background-color:#FF872C;
        `
    }
`
const Header = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    height:70px;

`
const Indicador = styled.Text<Props>`
    font-size:18px;

    ${
        props => props.verify && css`
            color:white;
        `
    }
`
const Price = styled.Text<Props>`
    font-size:30px;
    
    ${
        props => props.verify && css`
            color:white;
        `
    }
`

export {Container,Header,Indicador,Price}
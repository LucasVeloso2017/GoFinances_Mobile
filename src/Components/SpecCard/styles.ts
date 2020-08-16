import styled,{css} from 'styled-components/native'

const Container = styled.View`
    width:100%;
    height:200px;
    margin-top:10px;
    border-radius:8px;
    background-color:white;
    padding:30px;
`
const Content = styled.View`
    flex-direction:column;
    justify-content:center;
`
const Title = styled.Text`
    font-size:22px;
`
const Price = styled.Text`
    font-size:20px;
`
const BalanceInfo = styled.View`
    margin-top:30px;
    flex-direction:row;
    justify-content:space-between;
`
const Type = styled.Text`
    font-size:17px;
`
const DateItem = styled.Text`
    font-size:16px;
`

export { Container,Content,Title,Price,BalanceInfo,Type,DateItem }
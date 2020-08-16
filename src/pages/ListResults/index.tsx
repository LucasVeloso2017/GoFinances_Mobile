import React, { useEffect,useState } from 'react';
import { View,ScrollView,Image,Text } from 'react-native';

import Header from '../../Components/Header'
import Entradas from '../../Assets/Entradas.png'
import Saidas from '../../Assets/Saidas.png'
import Total from '../../Assets/Total.png'

import Card_header from '../../Components/Card'
import Card_body from '../../Components/SpecCard'

import api from '../../services/api'
import formatValue  from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';

import {
    Container,
    ContainerCart,
    ScrollViewr,
    ContainerList,
    Title
} from './styles';

interface Transaction {
    id: string;
    title: string;
    value: number;
    formattedValue: string;
    formattedDate: string;
    type: 'income' | 'outcome';
    category: { title: string };
    created_at: Date;
}

interface Balance {
    income: string;
    outcome: string;
    total: string;
}

const ListResults: React.FC = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [balance, setBalance] = useState<Balance>({} as Balance);

    useEffect(() => {
        async function loadTransactions(): Promise<void> {
          //const response = await api.get('/transactions')
    
            const response = await api.get(`transactions`);
            
            setBalance(response.data.balance)
            setTransactions(response.data.transactions)
        }
        
        loadTransactions();
      }, [balance]);

    return(
        <Container>
            <Header/>
            <ContainerCart>
                <ScrollViewr horizontal>
                    <Card_header
                        title="Entradas"
                        price={balance.income}
                        flag={false}
                        image={Entradas}
                    />    
                    <Card_header
                        title="Saidas"
                        price={balance.outcome}
                        flag={false}
                        image={Saidas}
                    />    
                    <Card_header
                        title="Total"
                        price={balance.total}
                        flag={true}
                        image={Total}
                    />    
                </ScrollViewr>
            </ContainerCart>

            <Title>Listagem</Title>

            <ContainerList>
                <ScrollView>
                    {
                        transactions.map(item => {
                            return(
                            <Card_body
                                key={item.id}
                                title={item.title}
                                price={item.type === 'outcome' ? ` - ${item.value}`:`+ ${item.value}` }
                                type={item.category.title}
                                dateItem={formatDate(item.created_at)}
                            />
                            )
                        })
                    }

                    

                </ScrollView>
            </ContainerList>

        </Container>    
    )
}   

export default ListResults;
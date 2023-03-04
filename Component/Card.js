import React  from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
  
const CreateCard = ({author,title,date,link}) => {
      
    return(
         
        <Card style={Styles.container}>
        <Card.Content>
            <Title>{title}</Title>
        </Card.Content>
       <Card.Content>
        <Paragraph>{author}</Paragraph>
        <Paragraph>{date}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onClick={(e)=>{
            e.preventDefault();
            window.open({link})
          }}>Link</Button>
        </Card.Actions>
      </Card>
         
    )
}
export default CreateCard;
  
const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
        margin:37
    }
})
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import newsApi from './Config/Api';
import CreateCard from './Component/Card';

export default function App() {
    const [ news,setNews ] = useState([]);
    useEffect(()=>{
      getNewHeadline();
    },[])

    const getNewHeadline = () =>{
      newsApi.get(`top-headlines?country=us&apiKey=6a1bc27649d747ad954660c33fb6167b`)
      .then(async function(response){
        setNews(response.data['articles'])
        // console.log(response.data['articles'])
      }).catch((error)=>{
        console.log(error)
      })
    }

  return (
    <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollview}
        onContentSizeChange={this.onContentSizeChange}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>Latest News!!!!</Text>
          {
            news.length>0 && news.map((ele) => {
              return(
                <CreateCard key={ele.title} author={ele.author} title={ele.title} date={ele.publishedAt} link={ele.url}/>
              )
            })
          }
          <StatusBar style="auto" />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow:'scroll',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize: 28,
    marginTop:55,
    fontWeight:'bold',
    backgroundColor:'green',
    padding:10,
    width:'100%',
    textAlign:'center'
  }
});

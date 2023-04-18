import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import Axios from 'axios';

export default function List({navigation}) {
    const [data, setData]=useState([])
    const Api='https://jsonplaceholder.typicode.com/posts'

    const renderItem=({item})=>{
        return(
            <TouchableOpacity onPress={() => navigation.navigate('detail', item)}>
                <View style={styles.flatlist}>
                    <Text style={styles.text}>{item.id}</Text>
                    <Text style={styles.text2}></Text>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const getData=()=>{
        Axios.get(Api)
        .then((json) => setData(json.data))
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <View style={styles.container}>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}/>
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex: 1,
        padding:10,
    },
    imageView: {
        width: 130,
        height: 130 ,
        margin:5,
        marginLeft: 5,
        borderRadius : 10
    },
    text:{
        fontSize:15,
    },
    flatlist:{
        flex:1, 
        flexDirection:'column',
        backgroundColor: '#ccb385',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    text2: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginTop:10,
      },
})
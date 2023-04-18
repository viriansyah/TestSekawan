import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Detail({route}) {
    const {id,title,body}=route.params;
    return (
        <View style={styles.container}>
            <View style={styles.viewtext}>
                <Text style={styles.text}>{id}</Text>
                <Text style={styles.text2}></Text>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text2}></Text>
                <Text style={styles.text}>{body}</Text>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    viewtext:{ 
        flexDirection:'column',
        backgroundColor: '#ccb385',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    text:{
        fontSize:15,
    },
    text2: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginTop:10
    },
})
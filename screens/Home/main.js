import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import {  } from "";

export function Home({navigation}){

    const SubmitForm=()=>{
        navigation.push('Detail', data);

    }

    const [data, setData] = useState({
        username:'11',
        password:'22'
    });
    /** ----------- */
    return(
        <View style={style.Home} >
            <Text style={style.heading}>Login</Text>
            
            <View style={style.LoginForm} >
                <TextInput style={style.TxtInput} placeholder="Username" onChangeText={text=>setData({...data,username:text})} />
                <TextInput style={style.TxtInput} placeholder="Password" onChangeText={text=>setData({...data,password:text})} />
                <View style={style.SubmitBtn}>
                    <Button title="SUBMIT" color="red" onPress={()=>SubmitForm()}/>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Home:{
        flex:1,
        // backgroundColor:'black',
        margin:'5%'
    },
    heading:{
        fontSize:30,
        fontWeight:'700',
        alignSelf:'center',
        color:'red',
        padding:'2%'
    },
    LoginForm:{
        flex:1,
        // backgroundColor:'pink',
        margin:'5%'
    },
    TxtInput:{
        borderWidth:2,
        borderColor:'grey',
        padding:'1%',
        fontSize:16,
        borderRadius:10,
        marginTop:'10%'
    },
    SubmitBtn:{
        marginTop:'10%'
    }
});

export function Detail({navigation, route}){
    let resp = route.params;
    // console.log(resp)
    alert("!@#");
    return(
        <View>
            <Text>
                Username : {resp.username}
            </Text>

            <Text>
                Password : {resp.password}
            </Text>
            <Button title="Home Page" onPress={()=>{
                navigation.navigate('Home');
                
            }} />
        </View>
    )
}
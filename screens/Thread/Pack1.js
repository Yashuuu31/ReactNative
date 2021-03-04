import React, { } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";


export function Post() {
    return (
        <View style={postStyle.main}>
            {/* Post Header */}
            <View style={postStyle.header}>
                <View style={postStyle.headerImage}>
                    <Image style={postStyle.headerProfile} source={{ uri: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png' }} />
                </View>

                <View style={postStyle.headerTitle}>
                    <Text style={{fontSize:17, fontWeight:'700', marginLeft:'5%', marginTop:'7%'}}>Yash Chauhan</Text>
                </View>

                <View style={postStyle.headerAction}>
                    <Icon.Button name="more-vertical" iconStyle={{fontSize:25, paddingLeft:'2.5%', color:'#000'}} style={{width:'100%', height:'100%', backgroundColor:'#fff'}} />
                </View>
            </View>

        </View>
    );
}

const postStyle = StyleSheet.create({
    main: {
        height: '75%',
        backgroundColor: 'lightblue',
    },
    header: {
        height: '13%',
        backgroundColor: '#fff',
        elevation:2,
        flexDirection:'row' 
    },

    // Header Image
    headerImage: {
        height: '80%',
        width: '12%',
        backgroundColor: 'pink',
        borderRadius: 40,
        overflow: 'hidden',
        marginTop: '2%',
        marginLeft: '2%',
    },
    headerProfile: {
        height: '100%',
        width: '100%'
    },

    // Header User Title
    headerTitle:{
        width:'65%',
        height:'100%',
        backgroundColor:'#fff',
        marginLeft:'4%',
    },
    headerAction:{
        width:'100%'
    }
});
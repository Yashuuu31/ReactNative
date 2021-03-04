import React, { } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as P1 from "./Pack1";


export default function Thread() {
    return (
        <ScrollView style={style.master} contentContainerStyle={{flexGrow:1}}>
            <P1.Post />
        </ScrollView>
    )
}

const style = StyleSheet.create({
    master: {
        flex: 1,
        backgroundColor: 'red'
    }
});
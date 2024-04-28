import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Text as PaperText } from 'react-native-paper'; 

const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <PaperText>Details Screen</PaperText> 
        </View>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center" 
    }
});

import React from 'react';
import { StyleSheet, View } from 'react-native'; 
import { Button, Text } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('Details')}>
                Go to details
            </Button>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center" 
    }
});

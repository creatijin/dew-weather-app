import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class Weather extends Component {
    render() {
        return(
            <LinearGradient 
             colors={["#00C6FB", "#005BEA"]} style={styles.container}
            >
                <View style={styles.upper}>
                    <Text>Icon here!</Text>
                    <Text style={styles.temp}>35°</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining like A MF</Text>
                    <Text style={styles.subtitle}>For more info look outsie</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        color:"white"
    },
    temp: {
        fontSize: 28,
        color:"white",
        marginTop: 15
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 28,
        color:"white",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 18,
        color:"white",
        marginBottom: 24
    }
});
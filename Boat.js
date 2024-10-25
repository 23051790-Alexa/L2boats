import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Boat = ({ name, description, picture }) => {
    return (
        <View style={styles.boatContainer}>
            <Image source={picture} style={styles.boatImage} />
            <Text style={styles.boatName}>{name}</Text>
            <Text style={styles.boatDescription}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    boatContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    boatImage: {
        width: 400,
        height: 300,
    },
    boatName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    boatDescription: {
        textAlign: 'center',
        paddingHorizontal: 10,
    },
});

export default Boat;


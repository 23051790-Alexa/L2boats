import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Boat from './Boat';

const boatsData = [
    {
        name: 'Sea Ray 500 Sundancer',
        description: 'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
        picture: require('./img/sea_ray.jpg'),
    },
    {
        name: 'Four Winns Horizon 180',
        description: 'A sporty look and refined details truly set the Horizon 180 above all others.',
        picture: require('./img/four_winns.jpg'),
    },
    {
        name: 'Flipper 640 ST',
        description: 'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
        picture: require('./img/flipper.jpg'),
    },
    {
        name: 'Princess V48',
        description: 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
        picture: require('./img/princess.jpg'),
    },
    {
        name: 'Bayliner 175 Bowrider',
        description: 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
        picture: require('./img/bayliner.jpg'),
    },
    {
        name: 'Fairline Targa 47',
        description: 'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
        picture: require('./img/fairline.jpg'),
    },
];

const App = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {boatsData.map((boat, index) => (
                <Boat
                    key={index}
                    name={boat.name}
                    description={boat.description}
                    picture={boat.picture}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 20,
    },
});

export default App;


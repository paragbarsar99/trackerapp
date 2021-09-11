import React from "react"
import { View, Text, StyleSheet,Button } from 'react-native'

const IndexScreen = ({ navigation }) => {
    return (<View>

        <Text>
            Index Screen
        </Text>
        <Button
            title="Move to TrackDetails "
            onpress={() => navigation.navigate('TrackDetailsScreen')}>
        </Button>
    </View>)
};

const styles = StyleSheet.create({});

export default IndexScreen;
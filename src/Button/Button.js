import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const button = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[
            styles.button,
            props.color ? { backgroundColor: props.color } : null,
            props.width ? { width: props.width } : null,
            props.height ? { height: props.height } : null,
        ]}>
            <Text style={[
                styles.buttonText,
                props.fontSize ? { fontSize: props.fontSize } : null
            ]}>
                {props.children}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        borderRadius: 2,
        backgroundColor: '#2196F3',
        width: '100%',
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
    }, buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
        paddingVertical: 12,
        paddingHorizontal: 6
    }
});

export default button;

import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function Header({title,iconLeft,iconRight,onPressLeft,onPressRight}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPressLeft}>
                <Image
                    source={iconLeft}
                    style={styles.iconArrow}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Text style={styles.titleHeader}>{title}</Text>
            <TouchableOpacity style={styles.cricleIcon} onPress={onPressRight}>
                <Image
                    source={iconRight}
                    style={styles.iconShopping}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}
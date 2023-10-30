import { View, Text, Image, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import icon from '../../utils/icon'
import { useState } from 'react'
export default function Header({ title, iconLeft, iconRight, onPressLeft, onPressRight, type, focusInput, onSearch }) {

    if (type == 'filter') {
        const [textSearch, setTextSearch] = useState('')
        let inputSearch;
        useEffect(() => {
            if (focusInput) {
                inputSearch.focus();
            }
        }, [])
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={onPressLeft}>
                    <Image
                        source={iconLeft}
                        style={styles.iconArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', backgroundColor: '#f3f3f3', flexGrow: 1, padding: 5, borderRadius: 10, alignItems: 'center', marginHorizontal: 20 }}>
                    <Image
                        source={icon.search}
                        style={{ width: 25, height: 25, marginRight: 10 }}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={{ flexGrow: 1, padding: 0 }}
                        ref={(input) => { inputSearch = input; }}
                        placeholder="Search Here...."
                        onChangeText={(text) => setTextSearch(text)}
                        onSubmitEditing={() => onSearch(textSearch)}
                    />
                </View>

            </View>
        )
    }
    else
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
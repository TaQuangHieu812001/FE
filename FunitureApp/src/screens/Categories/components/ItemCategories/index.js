import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';



export default function ListCategory({categories}) {

    const [checkCategory, setCheckCategory] = useState(0)

    const SelectCategory = id => {
        setCheckCategory(id)
    };


    const ItemCategories = ({item}) => {

        return (
            <TouchableOpacity
                style={[
                    styles.btnCategory,
                    {
                        backgroundColor: item.id === checkCategory ? '#303030' : '#ffff'
                    }
                ]}
                onPress={() => SelectCategory(item.id)}
            >
                <View style={[styles.cricleIcon, {
                    backgroundColor: item.id === checkCategory ? '#ffff' : '#f8f8f8',
                }]}>
                    <Image
                        source={{uri:item.image}}
                        style={[
                            styles.iconCategory,
                            {
                                tintColor: item.id === checkCategory ? '#303030' : '#909090',
                            }

                        ]}
                        resizeMode="contain"
                    />
                </View>
                <Text
                    style={[
                        styles.titleCategory,
                        {
                            color: item.id === checkCategory ? '#ffff' : '#909090'
                        }
                    ]}>
                    {item.name}
                </Text>
            </TouchableOpacity>

        )
    }
    return (
        <FlatList
            data={categories}
            renderItem={ItemCategories}
            numColumns={2}
        />

    );
}
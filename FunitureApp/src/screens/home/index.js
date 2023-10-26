import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import icon from '../../utils/icon'
import styles from './styles'
import ItemCategory from '../../components/home/ItemCategory'
import Product from '../../components/product'
import { ScreenName } from '../../navigation/ScreenName'
import CategoryApi from '../../api/Category.api'
import { useEffect } from 'react'
import { useState } from 'react'


const HomeScreen = ({ navigation }) => {
    const [categories, setCategories] = useState();
    useEffect(() => {
        const dataCategory = async () => {
            try {
                const categoriesResult = await CategoryApi();
                const data = categoriesResult.data.data;
                setCategories(data)
            } catch (error) {
                console.log(error)
            }
        }
        dataCategory();
    }, [])

  


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Good Evening</Text>
                    <Text style={styles.text_wellcome}>Welcome Back...</Text>
                </View>
                <TouchableOpacity style={styles.btnProfile} onPress={() => navigation.navigate(ScreenName.PROFILE_SCREEN)}>
                    <Image source={icon.profile} style={styles.iconProfile} resizeMode='contain' />
                </TouchableOpacity>
            </View>
            <View style={styles.parentSearchFilter}>
                <View style={styles.btnSearch}>
                    <Image
                        source={icon.search}
                        style={styles.iconSearch}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search Here...."
                        onPre
                    />
                </View>
                <TouchableOpacity>
                    <Image
                        source={icon.filter}
                        resizeMode="contain"
                        style={styles.iconFilter}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.listCategory}>
                <Text style={styles.titleCategory}>Choose Category</Text>

                <TouchableOpacity onPress={() => navigation.navigate(ScreenName.CATEGORIES_SCREEN)}>
                    <Text style={styles.titleViewAll}>View All</Text>
                </TouchableOpacity>
            </View>
            {/* Item Category*/}
       
            {
                categories? (
                    <ItemCategory categories={categories} />
                ) : <Text>Du lieu dang duoc cap nhat</Text>
            }

            <View style={styles.listCategory}>
                <TouchableOpacity>
                    <Text style={styles.titleCategory}>NewArrival</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.titleViewAll}>View All</Text>
                </TouchableOpacity>
            </View>
            <Product />
        </SafeAreaView>
    )
}
export default HomeScreen
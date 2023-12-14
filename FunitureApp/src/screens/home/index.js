import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import icon from '../../utils/icon'
import styles from './styles'
import ItemCategory from '../../components/home/ItemCategory'
import Product from '../../components/product'
import { ScreenName } from '../../navigation/ScreenName'
import CategoryApi from '../../api/Category.api'
import ProductApi from '../../api/Product.api'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProduct] = useState([]);
    let userState = useSelector(state => state.user);
    useEffect(() => {
        dataCategory();
        getProductHome();
    }, []);
    const dataCategory = async () => {
        try {
            const categoriesResult = await CategoryApi();
            const data = categoriesResult.data.data;
            setCategories(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getProductHome = async () => {
        let res = await ProductApi.ProductHome();
        if (res.isSuccess) {
            setProduct(res.data)
        }
        else alert(res.msg)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Chào buổi sáng</Text>
                    <Text style={styles.text_wellcome}>Mong rằng sẽ có trải nghiệm tốt...</Text>
                </View>
                <TouchableOpacity style={styles.btnProfile} onPress={() => navigation.navigate(ScreenName.PROFILE_SCREEN)}>
                    <Image source={icon.profile} style={styles.iconProfile} resizeMode='contain' />
                </TouchableOpacity>
            </View>
            <View style={styles.parentSearchFilter}>
                <TouchableOpacity onPress={() => navigation.navigate(ScreenName.FillterScreen)} style={styles.btnSearch}>
                    <Image
                        source={icon.search}
                        style={styles.iconSearch}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Tìm kiếm...."
                        editable={false}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={icon.filter}
                        resizeMode="contain"
                        style={styles.iconFilter}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.listCategory}>
                <Text style={styles.titleCategory}>Danh mục sản phẩm</Text>

                <TouchableOpacity onPress={() => navigation.navigate(ScreenName.CATEGORIES_SCREEN)}>
                    <Text style={styles.titleViewAll}>Hiện tất</Text>
                </TouchableOpacity>
            </View>
            {/* Item Category*/}

            {
                categories ? (
                    <ItemCategory categories={categories} navigation={navigation} />
                ) : <Text>Dữ liệu đang được cập nhật vui lòng chờ....</Text>
            }

            <View style={styles.listCategory}>
                <TouchableOpacity>
                    <Text style={styles.titleCategory}>Hàng mới nhất</Text>
                </TouchableOpacity>
                
            </View>
            {
                products.length > 0 &&
                <Product products={products} navigation={navigation} />
            }
        </SafeAreaView>
    )
}
export default HomeScreen
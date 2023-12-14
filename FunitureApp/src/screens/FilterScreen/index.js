import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useCallback, useState } from "react";
import Header from '../../components/header';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather'
import icon from '../../utils/icon'
import ProductApi from '../../api/Product.api';
import Product from '../../components/product'
import { ScreenName } from '../../navigation/ScreenName';
const FilterScreen = ({ navigation }) => {
    const [relateProducts, setRelateProduct] = useState([])

    const [searchHistory, setSearchHistory] = useState([
        { name: 'abc' },
        { name: 'ghế' },
        { name: '123' },
        { name: "đèn bàn" },
        { name: 'sofa' }
    ])
    useEffect(() => {
        getProductHome();
    }, [])
    const getProductHome = async () => {
        let res = await ProductApi.ProductHome();
        if (res.isSuccess) {
            setRelateProduct(res.data)
        }
        else alert(res.msg)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 10 }}>
            <Header
                type='filter'
                iconLeft={icon.arrowLeft}
                focusInput={true}
                onPressLeft={() => navigation.goBack()}
                onSearch={(text) => navigation.navigate(ScreenName.ProductFilterScreen, { name: text })}
            />
            <View style={{ paddingHorizontal: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'baseline' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000', marginTop: 10 }} >Hiện đầu tiên</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#fea800' }}>Xóa tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    {
                        searchHistory.length > 0 && searchHistory.map(e => <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Icon
                                    name="clock"
                                    size={15}
                                    color='#909090'
                                />
                                <Text style={{ color: '#909090', marginLeft: 10 }}>{e.name}</Text>
                            </View>
                            <Icon
                                name="x"
                                size={15}
                                color='#909090'
                            />
                        </TouchableOpacity>)
                    }
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#000', marginTop: 10 }}>Sản phẩm</Text>

            </View>
            {
                relateProducts.length > 0 && <Product
                    products={relateProducts}
                    navigation={navigation}
                />
            }
        </SafeAreaView>
    )
}

export default FilterScreen

const styles = StyleSheet.create({})
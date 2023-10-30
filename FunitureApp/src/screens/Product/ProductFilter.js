import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useCallback, useState } from "react";
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product from '../../components/product';
import ProductApi from '../../api/Product.api'
import icon from '../../utils/icon';
import Header from '../../components/header';
const ProductCateFilter = ({ navigation, route }) => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        let response = await ProductApi.ProductApiFilter(null, null, null, route.params.name);
        if (response.isSuccess) {
            setProduct(response.data);
        } else alert(response.msg)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header
                title={`Tìm kiếm với '${route.params.name}'`}
                iconLeft={icon.arrowLeft}
                iconRight={icon.shopping}
                onPressLeft={() => navigation.goBack()}
                onPressRight={() => navigation.navigate(ScreenName.CART_sCREEN)}
            />
            <View>
                {
                    products.length > 0 ? <Product products={products} navigation={navigation} /> : <Text style={{ textAlign: 'center' }}>Không tìm thấy sản phẩm</Text>
                }
            </View>
        </SafeAreaView>
    )
}

export default ProductCateFilter

const styles = StyleSheet.create({})
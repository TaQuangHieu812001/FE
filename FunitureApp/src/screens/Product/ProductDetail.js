import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'
import ProductApi from '../../api/Product.api'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import IconFA from 'react-native-vector-icons/FontAwesome'
import icon from '../../utils/icon'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../redux/Cart/action';
import Carousel from 'react-native-reanimated-carousel';
import { ScreenName } from '../../navigation/ScreenName'
const ProductDetail = ({ route, navigation }) => {
    const [product, setProduct] = useState(null);
    const [productAttr, setProductAttr] = useState(null);
    const [productCount, setProductCount] = useState(1);
    console.log("a",product?.product.image)
    const dispatch = useDispatch();
    let CartState = useSelector(state => state.CartReducer);
    useEffect(() => {
        getProductDetail(); 
    }, [])
    const AddCart = () => {
        dispatch(AddToCart({
            product: product.product,
            productAttribute: productAttr,
            count: productCount,
            selected: false,
        }))
    }
    const getProductDetail = async () => {
        let response = await ProductApi.GetProductDetail(route.params.id);
        if (response.isSuccess) {
            setProduct(response.data);
            setProductAttr(response.data.productAttribute[0])
        }
        else alert(response.msg)
    }
    const getPrice = () => {
        return productAttr.price * productCount
    }
    if (product == null || productAttr == null)
        return <></>;
    else
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ marginLeft: Dimensions.get('window').width * 0.15, width: Dimensions.get('window').width * 0.85, height: Dimensions.get('window').height / 2, position: 'relative', zIndex: 1 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 40, height: 40, borderRadius: 20, position: 'absolute', top: 20, left: -20, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', zIndex: 9, elevation: 9 }}>
                            <Icon
                                name='arrow-left'
                                size={20}
                                color={'#000'}
                            />
                        </TouchableOpacity>
                        <View style={{ width: 55, alignItems: 'center', position: 'absolute', top: '25%', left: -25, backgroundColor: '#fff', borderRadius: 55 / 2, zIndex: 9, justifyContent: 'space-between', backgroundColor: '#fff', elevation: 9, zIndex: 9, height: '50%', paddingVertical: 15 }}>
                            {
                                product.productAttribute.map(e => (<TouchableOpacity style={{ borderColor: '#f5f5f5', width: 30, height: 30, borderWidth: 5, borderRadius: 99, backgroundColor: e.hexColor }}>
                                </TouchableOpacity>
                                ))
                            }

                        </View>
                        <View style={{ flex: 1, borderBottomLeftRadius: 50, overflow: 'hidden' }}>
                            <Carousel
                                loop
                                width={Dimensions.get('window').width * 0.85}
                                height={Dimensions.get('window').height / 2}
                                autoPlay={true}
                                data={['http://192.168.1.15:5000/images/stylish-sofa.png', 'http://192.168.1.15:5000/images/product1.png']}
                                scrollAnimationDuration={1000}

                                renderItem={({ item, index }) => (

                                    <Image
                                        source={{ uri: item }}
                                        style={{ width: undefined, height: undefined, flex: 1 }}
                                        resizeMode='cover'
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>{product.product.nameProduct}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20, marginVertical: 10 }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000' }}>${getPrice()}</Text>
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 15, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}

                                >
                                    <Icon
                                        name='minus'
                                        size={20}
                                        color={'#000'}
                                    />
                                </TouchableOpacity>
                                <Text style={{ marginHorizontal: 10 }}>{productCount}</Text>
                                <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 15, borderWidth: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
                                    <Icon
                                        name='plus'
                                        size={20}
                                        color={'#fff'}
                                    />
                                </TouchableOpacity>
                            </View> */}

                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                            <IconFA
                                name='star'
                                size={20}
                                color='#f2c94c'
                            />
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000', marginLeft: 10, marginRight: 20 }}>4.5</Text>
                            <Text>(50 review)</Text>
                        </TouchableOpacity>
                        <View>
                            <Text>
                                {`Ghế sofa 3 chỗ được chia thành các loại ghế sofa khác nhau và gồm 3 loại dựa theo chất liệu đó là sofa da 3 chỗ, sofa nỉ 3 chỗ và sofa gỗ bọc da nỉ 3 chỗ ngồi`}
                            </Text>
                            {/* <TouchableOpacity >
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Xem thêm</Text>
                            </TouchableOpacity> */}
                        </View>

                    </View>
                    <View style={{ height: 100 }}></View>
                </ScrollView>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 20, alignSelf: 'center' }}>
                    <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 50, backgroundColor: '#303030', borderRadius: 10, marginRight: 20 }} onPress={() => AddCart()}>
                        <Text style={{ color: '#fff', fontSize: 17, textAlign: 'center' }}>Thêm vào giỏ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 45, height: 45, borderRadius: 99, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => navigation.navigate(ScreenName.MyCartAtHome)}
                    >
                        <Image
                            source={icon.shopping}
                            style={{ width: 30, height: 30 }}
                            resizeMode="contain"
                        />
                        <View style={{ backgroundColor: 'orange', width: 20, height: 20, borderRadius: 10, position: 'absolute', top: -5, right: -5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 10 }}>{CartState.length}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
}

export default ProductDetail

const styles = StyleSheet.create({})
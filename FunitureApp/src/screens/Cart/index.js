import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/header';
import icon from '../../utils/icon';
import styles from './styles';
import image from '../../utils/image';
import { useState } from 'react';


const MyCartScreen = () => {
  const [selectProduct, setSelectProduct] = useState(false)
  const [count, setCount] = useState(0); // Số lượng sản phẩm ban đầu
  const [selectItems,setSelectItems] =useState(count)

  const checkProduct = () => {
    setSelectProduct(!selectProduct);//check true fail checkbox
    if(selectProduct){
      setSelectItems(0)
    }else{
      setSelectItems(count)
    }
  };
  
  const formatCount = (value) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const updateCount = (count, setCount) => {
    if (count >= 1) {
      setCount(count);
      setSelectItems(count)
    }
    console.log(count)
    console.log(selectItems);
  };
  return (
    <View style={styles.container}>
      <Header
        iconLeft={icon.arrowLeft}
        title='My Cart'
      />
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.productMain}>
          <TouchableOpacity style={styles.btnCheckbox} onPress={() => checkProduct()}>
            <Image
              source={selectProduct ? icon.checkboxTrue : icon.checkboxFail}
              resizeMode='contain'
              style={styles.checkbox}
            />
          </TouchableOpacity>

          <View style={styles.viewProduct}>
            <Image
              source={image.stand}
              resizeMode='contain'
              style={styles.product}
            />
            <View style={styles.detailProduct}>
              <View>
                <Text style={styles.nameProduct}>Minimal Stand</Text>
                <Text style={styles.price}>$25.00</Text>
              </View>
              <View style={styles.buyProduct}>
                <TouchableOpacity onPress={() => updateCount(count - 1, setCount)}>
                  <Image
                    source={icon.decrease}
                    resizeMode='contain'
                    style={styles.buyCount}
                  />
                </TouchableOpacity>
                <Text style={styles.count}>{formatCount(count)}</Text>
                <TouchableOpacity onPress={() => updateCount(count + 1, setCount)}>
                  <Image
                    source={icon.increase}
                    resizeMode='contain'
                    style={styles.buyCount}

                  />
                </TouchableOpacity>

              </View>

            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.detailFooter}>
          <Text style={styles.itemProduct}>SelectItems({selectItems})</Text>
         <View style={styles.total}>
         <Text style={styles.titleTotal}>Total</Text>
         <Text style={styles.priceTotal}>$ 105.99</Text>
         </View>
        </View>
        <TouchableOpacity style={styles.btnCheckOut}>
          <Text style={styles.contentCheckOut}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyCartScreen;
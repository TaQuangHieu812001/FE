import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import icon from '../../utils/icon';
import ListCategory from './components/ItemCategories';
import Header from '../../components/header';
import {ScreenName} from '../../navigation/ScreenName';
import {useState} from 'react';
import {useEffect} from 'react';
import CategoryApi from '../../api/Category.api'
const CategoriesScreen = () => {
  const navigation = useNavigation();

  const [categories, setCategories] = useState();
  useEffect(() => {
    const dataCategory = async () => {
      try {
        const categoriesResult = await CategoryApi();
        const data = categoriesResult.data.data;
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    dataCategory();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        title="Danh mục sản phẩm"
        iconLeft={icon.arrowLeft}
        iconRight={icon.shopping}
        onPressLeft={() => navigation.goBack()}
        onPressRight={() => navigation.navigate(ScreenName.CART_sCREEN)}
      />
      <ListCategory  categories ={categories}/>
    </View>
  );
};
export default CategoriesScreen;

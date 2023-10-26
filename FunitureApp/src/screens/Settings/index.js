import { View, Text, TouchableOpacity, Image, TextInput, Switch } from 'react-native'
import React from 'react'
import styles from './styles';
import Header from "../../components/header";
import icon from '../../utils/icon';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const SettingScreen = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [changeName, setChangeName] = useState('Hieu Quang Ta')
    const [changeEmail, setChangeEmail] = useState('taquanghieu812001@gmail.com')
    const [changPassword, setChangePassword] = useState('133434341111111')
    const [isEnabled, setIsEnabled] = useState(false);
    // const navigation =useNavigation();


    // logic
    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }
    const handleSaveClick = () => {
        setIsEditing(false)
    }
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
      };
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Header
                    iconLeft={icon.arrowLeft}
                    title='Settings'
                // onPressLeft={() => navigation.goBack()}r
                />
                <View style={styles.editInformation}>
                    <Text style={styles.title}>
                        Personal information
                    </Text>
                    <TouchableOpacity onPress={handleEditClick}>
                        <Image
                            source={icon.edit}
                            resizeMode='contain'
                            style={styles.editIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputInformation}>
                    <Text style={styles.name}>Name</Text>
                    <TextInput
                        value={changeName}
                        onChangeText={setChangeName}
                        editable={isEditing}
                        style={[styles.inputNameUser, { borderWidth: isEditing ? 1 : 0 }]}
                    />
                </View>

                <View style={styles.inputInformation}>
                    <Text style={styles.name}>Name</Text>
                    <TextInput
                        value={changeEmail}
                        onChangeText={setChangeEmail}
                        editable={isEditing}
                        style={[styles.inputNameUser, { borderWidth: isEditing ? 1 : 0 }]}
                    />
                </View>
                <View style={styles.editPassword}>
                    <Text style={styles.title}>
                        Password
                    </Text>
                    <TouchableOpacity onPress={handleEditClick}>
                        <Image
                            source={icon.edit}
                            resizeMode='contain'
                            style={styles.editIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputInformation}>
                    <TextInput
                        value={changPassword}
                        onChangeText={setChangePassword}
                        secureTextEntry={true}
                        style={[styles.inputNameUser, { borderWidth: isEditing ? 1 : 0 }]}
                    />
                </View>
                <Text style={styles.title}>Notification</Text>
                <View style={styles.notification}>
                    <Text style={styles.nameNotification}>{changeEmail}</Text>
                    <Switch
                        trackColor={{ false: '#E0E0E0', true: '#27AE60' }}
                        thumbColor={isEnabled ? '#ffff' : 'white'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}   
                    />
                </View>
                <View style={styles.notification}>
                    <Text style={styles.nameNotification}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: '#E0E0E0', true: '#27AE60' }}
                        thumbColor={isEnabled ? '#ffff' : 'white'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}   
                    />
                </View>
                <View style={styles.notification}>
                    <Text style={styles.nameNotification}>Delivery status changes</Text>
                    <Switch
                        trackColor={{ false: '#E0E0E0', true: '#27AE60' }}
                        thumbColor={isEnabled ? '#ffff' : 'white'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}   
                    />
                </View>
                <Text style={styles.titleHelp}>Help Center</Text>
                <View style={styles.descriptionHelp}>
                    <Text style={styles.nameHelpCenter}>FAQ</Text>
                    <TouchableOpacity>
                        <Image
                            source={icon.arrowBottom}
                            resizeMode='contain'
                            style={styles.arrowBottomIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.descriptionHelp}>
                    <Text style={styles.nameHelpCenter}>Contact Us</Text>
                    <TouchableOpacity>
                        <Image
                            source={icon.arrowBottom}
                            resizeMode='contain'
                            style={styles.arrowBottomIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.descriptionHelp}>
                    <Text style={styles.nameHelpCenter}>Privacy & Terms</Text>
                    <TouchableOpacity>
                        <Image
                            source={icon.arrowBottom}
                            resizeMode='contain'
                            style={styles.arrowBottomIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default SettingScreen;
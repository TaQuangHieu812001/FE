import { View, Text, TouchableOpacity, Image, TextInput, Switch, InteractionManager, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles';
import Header from "../../components/header";
import icon from '../../utils/icon';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import UserApi from '../../api/User.api'
import { useEffect } from 'react';
import { useRef } from 'react';
import { ChangeProfile, Logout } from '../../redux/Login/action';
import { ScreenName } from '../../navigation/ScreenName';
const SettingScreen = ({ navigation }) => {
    let userState = useSelector(state => state.LoginReducer.dataUser);
    const dispatch = useDispatch();
    const refInputName = useRef()
    const refInputPass = useRef()
    const [changeName, setChangeName] = useState('')
    const [changeEmail, setChangeEmail] = useState('')
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEditName, setIsEditingName] = useState(false);
    const [isEditingPass, setIsEditingPass] = useState(false);

    // const navigation =useNavigation();

    useEffect(() => {
        setChangeEmail(userState.email),
            setChangeName(userState.name)
    }, [])
    const handleLogout =()=>{
        dispatch(Logout())
       
    }
    // logic
    const handleEditPassClick = async () => {
        if (isEditingPass) {
            //save
            var resUpdate = await UserApi.UpdatePass({
                oldPass, newPass
            });
            if (resUpdate.isSuccess) {
                dispatch(ChangeProfile(changeName));
            }
            else {
                alert(resUpdate.msg)
            }
            setIsEditingPass(false);
            return;
        }
        setIsEditingPass(true);
        // InteractionManager.runAfterInteractions(() => {
        //     refInputPass.current.focus();
        // });

    }
    const handleEditNameClick = async () => {
        if (isEditName) {
            //save
            console.log({
                userName: changeName
            })
            var resUpdate = await UserApi.UpdateProfile({
                userName: changeName
            });
            if (resUpdate.isSuccess) {
                dispatch(ChangeProfile(changeName));
            }
            else {
                alert(resUpdate.msg)
            }
            setIsEditingName(false);
            return;
        }

        setIsEditingName(true);
        // InteractionManager.runAfterInteractions(() => {
        //     refInputName.current.focus();
        // });

    }

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    return (

        <View style={styles.container}>
            <View style={styles.body}>
                <Header
                    iconLeft={icon.arrowLeft}
                    title='Cài đặt'
                onPressLeft={() => navigation.goBack()}
                />
                <View style={styles.editInformation}>
                    <Text style={styles.title}>
                        Sửa thông tin
                    </Text>
                    {
                        isEditName ? <TouchableOpacity onPress={handleEditNameClick} style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 10,
                            paddingVertical: 3,
                            backgroundColor: 'green',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5
                        }}>
                            <Text style={{ color: '#fff' }}>Lưu</Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={handleEditNameClick}>
                            <Image
                                source={icon.edit}
                                resizeMode='contain'
                                style={styles.editIcon}
                            />
                        </TouchableOpacity>
                    }

                </View>

                <View style={styles.inputInformation}>
                    <Text style={styles.name}>Tên</Text>
                    <TextInput
                        autoFocus
                        ref={refInputName}
                        value={changeName}
                        placeholder='Tên'
                        onChangeText={(txt) => setChangeName(txt)}
                        editable={isEditName}
                        style={[styles.inputNameUser]}
                    />
                </View>

                <View style={styles.inputInformation}>
                    <Text style={styles.name}>Tài khoản</Text>
                    <TextInput

                        placeholder='tài khoản'
                        value={changeEmail}
                        onChangeText={setChangeEmail}
                        editable={false}
                        style={[styles.inputNameUser]}
                    />
                </View>
                <View style={styles.editPassword}>
                    <Text style={styles.title}>
                        Đổi mật khẩu
                    </Text>
                    {
                        isEditingPass ? <TouchableOpacity onPress={handleEditPassClick} style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 10,
                            paddingVertical: 3,
                            backgroundColor: 'green',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5
                        }}>
                            <Text style={{ color: '#fff' }}>Lưu</Text>
                        </TouchableOpacity>
                            : <TouchableOpacity onPress={handleEditPassClick}>
                                <Image
                                    source={icon.edit}
                                    resizeMode='contain'
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                    }

                </View>
                <View style={styles.inputInformation}>
                    {
                        isEditingPass && <>
                            <TextInput
                                autoFocus
                                ref={refInputPass}
                                value={oldPass}
                                onChangeText={(txt) => setOldPass(txt)}
                                secureTextEntry={true}
                                placeholder='Old password'
                                style={[styles.inputNameUser]}
                            />

                            <TextInput
                                value={newPass}
                                placeholder='New password'
                                onChangeText={(txt) => setNewPass(txt)}
                                secureTextEntry={true}
                                style={[styles.inputNameUser]}
                            />
                        </>
                    }

                </View>
                <View style={{ height: 10 }}></View>
                <Text style={styles.title}>Thông báo</Text>
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
                    <Text style={styles.nameNotification}>Chế độ sáng tối</Text>
                    <Switch
                        trackColor={{ false: '#E0E0E0', true: '#27AE60' }}
                        thumbColor={isEnabled ? '#ffff' : 'white'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.notification}>
                    <Text style={styles.nameNotification}>Trạng thái hoạt động</Text>
                    <Switch
                        trackColor={{ false: '#E0E0E0', true: '#27AE60' }}
                        thumbColor={isEnabled ? '#ffff' : 'white'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Text style={styles.titleHelp}>Trợ giúp</Text>
                {/* <View style={styles.descriptionHelp}>
                    <Text style={styles.nameHelpCenter}>FAQ</Text>
                    <TouchableOpacity>
                        <Image
                            source={icon.arrowBottom}
                            resizeMode='contain'
                            style={styles.arrowBottomIcon}
                        />
                    </TouchableOpacity>
                </View> */}
                {/* <View style={styles.descriptionHelp}>
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
                </View> */}
                <TouchableOpacity style={styles.btnLogout}
                    onPress={() =>handleLogout() 
                    }>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default SettingScreen;
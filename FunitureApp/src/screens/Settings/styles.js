import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    body: {
        flex: 1,
        backgroundColor: '#ffff',
        marginHorizontal: 12,
    },
    editInformation: {
        marginTop: '8%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#303030',
    },
    editIcon: {
        width: 20,
        height: 20,
    },
    inputInformation: {
        width: "90%",
        // borderWidth:1,
        justifyContent: "center",
        marginHorizontal: 10,
    },
    inputNameUser: {
        height: 40,
        color: '#303030',
        fontWeight: '400',
        fontSize: 16,
    },
    name: {
        fontSize: 13,
        color: '#909090',
        fontWeight: '400',
    },
    editPassword: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5%',
    },
    notification: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5%',
    },
    nameNotification: {
        fontSize: 15,
        color: '#303030',
        fontWeight: '400',
    },
    titleHelp:{
        fontSize: 18,
        fontWeight: '500',
        color: '#303030',
        marginTop:'7%',
    },
    descriptionHelp:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'6%',
        marginHorizontal:10,
    },
    nameHelpCenter:{
        fontSize: 16,
        color: '#303030',
        fontWeight: '600',
    },
    arrowBottomIcon:{
        width:18,
        height:18,
        alignSelf:'center',
    },
    btnLogout:{
        marginTop:'20%',
        backgroundColor:'black',
        width:'80%',
        padding:10,
        alignSelf:'center',
        borderRadius:8,
    }
    
})
export default styles;
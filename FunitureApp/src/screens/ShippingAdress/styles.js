import { StyleSheet } from "react-native";
import { windowDimensions } from "../../utils/dimesion";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingHorizontal: 12,
    },
    body: {
        flex: 1,
    },
    contentShipping: {
        fontSize: 16,
        color: '#303030',
        fontWeight: '500',
        marginTop: '10%',
    },
    addressDetails: {
        //width: windowDimensions.width * 0.89,
        padding: 8,
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 8,
        borderColor: 'rgba(55, 73, 87, 0.2)',
    },
    btnShipping: {
        marginTop: "3%",
        width: 26,
        padding: 2,
    },
    iconRectangle: {
        width: 20,
        height: 20,
    },
    nameCustomer: {
        fontSize: 16,
        color: '#303030',
        fontWeight: '500',
    },
    iconPhone: {
        width: 20,
        height: 20,
    },
    phoneNumber: {
        color: '#909090',
        marginLeft: '2%',
    },
    contact: {

        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    footerOrdersDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        alignItems: 'center',
    },
    btnEdit: {

        width: 65,
        height: 36,
        backgroundColor: '#303030',
        borderRadius: 8,
        justifyContent: 'center',
    },
    contnentEdit: {
        fontWeight: '500',
        color: '#ffff',
        textAlign: 'center',
        fontSize: 16,
        alignSelf: 'center',
    },
    btnDelete: {
        width: 40,
        height: 40,

    },
    iconRecycle: {
        width: 36,
        height: 36,
    }

})

export default styles
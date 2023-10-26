import { StyleSheet } from "react-native";
import { windowDimensions } from "../../utils/dimesion";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    body: {
        marginHorizontal: 12,
    },
    OrderStatus: {
        marginTop: windowDimensions.height * 0.04,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    nameStatus: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: "#303030",
    },
    horizontalShort: {
        width: 40,
        height: 4,
        backgroundColor: "#303030",
        alignSelf: 'center',
        marginTop: 8,
    },

})

export default styles
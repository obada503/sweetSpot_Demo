import { StyleSheet,Dimensions } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { COLORFONTS, SIZEFONTS } from "../../../Constants/theme";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create(
    {
        container:
        {
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop:25, 
          
        },
        box:
        {
            flex:1,
            alignItems: 'center',
        

        },
        title:
        {
            color: COLORFONTS.white,
            fontSize: SIZEFONTS.h1 *1.5,
            fontWeight: 'bold'
        },
        subTitle:
        {
            color: COLORFONTS.white,
            fontSize: SIZEFONTS.h4,
            paddingTop: 6
        },
        dataContainer:
        {
            marginTop: 80,
        },
        textinput:
        {
            color: COLORFONTS.white,
            fontSize: SIZEFONTS.h3,
            borderBottomColor: COLORFONTS.lightgrey,
            borderBottomWidth: 1,
            paddingVertical: 15,
            marginHorizontal: 15,
            marginVertical: 5,

        },
        buttonContainer:
        {
            marginTop: 50
        },
        firstButton:
        {
            backgroundColor: COLORFONTS.secondary,
            padding: 20,
            marginHorizontal: 30,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
        },
        buttonText:
        {
            color: COLORFONTS.white,
            fontWeight: 'bold',
            fontSize: SIZEFONTS.h4,
            fontFamily:'monospace'
        },
        buttonText2:
        {
            color: "#000000",
            fontWeight: 'bold',
            fontSize: SIZEFONTS.h4,
            fontFamily:'monospace'
        },

        buttonText1:
        {
            color: COLORFONTS.white,
            fontWeight: 'bold',
            fontSize: SIZEFONTS.h5,
            fontFamily:'monospace'
        },
        add:
        { 
            backgroundColor: COLORFONTS.secondary,
            position: 'absolute',
            bottom: 75,
            right: 125,
            borderRadius:70,
            alignItems:'center',
            justifyContent:'center'
        },
        sellerItemsContainer:{
            width:100,
            height:120,
            borderRadius:15,
            overflow:'hidden',
            marginHorizontal:10
        },
        image:
        {
            marginHorizontal:10,
            width:undefined,
            height:undefined

        },
        SellerInventory: 
        {
            backgroundColor: "#eeeeee",
        },
        SellerInventoryContainer: 
        {
            backgroundColor: "#eeeeee",
            paddingVertical: 8,
            paddingBottom: 45,
            marginHorizontal: 8,
        },
        card: 
        {
            backgroundColor: 'white',
            borderRadius: 16,
            marginBottom:100,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '4%',
          
        },
        image: 
        {
            flex:1,
            aspectRatio: 1,
            width: '100%',
            height:'100%',
            resizeMode:'contain'
        },
        infoContainer: 
        {
            padding: 50
        },
        screen: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
        },
        viewWrapper: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
        },
        modalView: {
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            elevation: 5,
            transform: [{ translateX: -(width * 0.4) }, 
                        { translateY: -90 }],
            height: "60%",
            width: width * 0.8,
            backgroundColor: "#fff",
            borderRadius: 7,
        },
        textInput: {
            width: "80%",
            borderRadius: 5,
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderWidth: 1,
            marginBottom: 8,
        },
    }
);

export default styles;
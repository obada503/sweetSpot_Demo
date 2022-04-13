import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { COLORFONTS, SIZEFONTS } from "../../../Constants/theme";

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
            flex:1,
            width:undefined,
            height:undefined

        }
        
     
    }
);

export default styles;
import { StyleSheet } from "react-native";
import { COLORFONTS, SIZEFONTS } from "../../../Constants/theme";

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
        },
        topContainer:
        {
            marginTop: 170,
            alignItems: 'center'

        },
        title:
        {
            color: COLORFONTS.white,
            fontSize: SIZEFONTS.h1 *2.2,
            fontWeight: 'bold',
            fontFamily:'serif'
            
        },
        subTitle:
        {
            color: COLORFONTS.white,
            fontSize: SIZEFONTS.h4 *1.5,
            paddingTop: 6,
            fontFamily:'sans-serif'
            
        },
        dataContainer:
        {
            marginTop: 9,
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
            fontWeight: 'bold',

        },
        buttonContainer:
        {
            marginTop: 20
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
        },

        forgotButton: {
            marginVertical: 10,
            alignItems:'center',
            backgroundColor: COLORFONTS.secondary,
            marginHorizontal:120,
            borderRadius: 8,
          },
        navButtonText: {
            fontSize: SIZEFONTS.h4,
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            color: COLORFONTS.white,
          },
    }
);

export default styles;
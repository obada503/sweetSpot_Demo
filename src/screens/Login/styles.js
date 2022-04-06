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
            marginTop: 300,
            alignItems: 'center'

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
            paddingTop: 6,
            
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
            fontWeight: 'bold',

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
        },
    }
);

export default styles;
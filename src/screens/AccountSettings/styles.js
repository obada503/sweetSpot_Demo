import { StyleSheet } from "react-native";
import { COLORFONTS, SIZEFONTS } from "../../../Constants/theme";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
          },
          userInfoSection: {
            paddingHorizontal: 30,
            marginBottom: 5,
            alignItems:'center',
          },
          userInfoSection2: {
            paddingHorizontal: 30,
            marginBottom: 5,
            alignItems:'flex-start',
          },
          title: {
            fontSize: 24,
            fontWeight: 'bold',
            fontFamily:'monospace',
            marginTop:10,
            marginLeft:20,
            color:'#00fa9a',
          },
          title1: {
            fontSize: 20,
            fontFamily:'monospace',
            marginTop:5,
            marginLeft:20,
            color:'#696969',
          },
          title2: {
            fontSize: 20,
            fontWeight: 'bold',
            marginTop:5,
            marginLeft:20,
            color:"#00fa9a"
          },
          editProfileTitle:{
            fontSize: 22,
            fontWeight:'bold',
            fontFamily:'monospace',
            marginTop:5,
            marginLeft:20,
            color:'#00ff7f',
            borderBottomWidth:1, 
            borderBottomColor:'#00fa9a',
            borderStartWidth: 5,
            
          },
          caption: {
            fontSize: 14,
            lineHeight: 14,
            fontWeight: '500',
          },
          row: {
            flexDirection: 'row',
            marginBottom: 10,
          },
          infoBoxWrapper: {
            borderBottomColor: '#00ffff',
            borderBottomWidth: 1,
            borderTopColor: '#00ffff',
            borderTopWidth: 1,
            flexDirection: 'row',
            height: 100,
          },
          infoBox: {
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          menuWrapper: {
            marginTop: 10,
          },
          menuItem: {
            flexDirection: 'row',
            paddingVertical: 15,
            paddingHorizontal: 30,
          },
          menuItemText: {
            color: '#696969',
            marginLeft: 20,
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 26,
          },
          container2: {
            flexDirection:'row',
            marginVertical:20,
          },
          
    }
);

export default styles;
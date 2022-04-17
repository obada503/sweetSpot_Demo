import { StyleSheet } from "react-native";


const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageContainer: {
            alignItems: 'center',
            justifyContent: 'center',
          backgroundColor: 'white'
        },
        infoContainer: {
          padding: 16
        },
        name: {
          fontSize: 22,
          fontWeight: 'bold',
        },
        price: {
          fontSize: 16,
          fontWeight: '600',
          marginBottom: 8,
        },
        description: {
          fontSize: 16,
          fontWeight: '400',
          color: '#787878',
          marginBottom: 16,
        },
      card: {
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%',
      
      },
      image: {
        flex:1,
        aspectRatio: 1,
        width: '100%',
        height:'100%',
        resizeMode:'contain'
      },

    }
)


export default styles;
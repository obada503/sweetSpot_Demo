import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORFONTS, SIZEFONTS } from '../../Constants/theme';

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: 3,
    marginVertical:10,
    padding:10,
    justifyContent: 'center',
    marginHorizontal:30

    
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    alignItems: 'center',
    
    
  },
  buttonText: {
    color: COLORFONTS.white,
    fontWeight: 'bold',
    fontSize: SIZEFONTS.h4
  },
})
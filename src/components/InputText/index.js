import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';

const InputText = ({
  label = '',
  error = '',
  customStyles,
  placeholder = '',
  style,
  value,
  setValue,
  ...rest
}) => {

  return (
    <View style={styles.container}>
      {label && <Text style={styles.text}>{label}</Text>}
      <View
        style={[styles.sectionInput, style, customStyles]}>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder={placeholder}
          {...rest}
        />
      </View>
    </View>
  );
};

export default InputText;

import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import type {PropsWithChildren, PropsWithoutRef} from 'react';
import React from 'react';
import {Colors, Size, Typo} from '../../styles';

interface SearchBarInterface extends PropsWithoutRef<TextInputProps> {
  placeholder?: string;
}

const SearchBar = ({placeholder = '', ...rest}: SearchBarInterface) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        style={styles.inputContainer}
        placeholder={placeholder}
        placeholderTextColor={Colors.COLOR_GRAY}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.COLOR_LIGHT_GRAY,
    marginHorizontal: Size.SIZE_24,
    marginTop: Size.SIZE_14,
    borderRadius: 8,
    paddingHorizontal: Size.SIZE_14,
  },

  inputContainer: {
    ...(Typo.TextNormalRegular as any),
  },
});

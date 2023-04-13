import * as React from 'react';
import type {PropsWithChildren} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

type TouchableProps = PropsWithChildren<{
  onPress(): () => void;
  style: StyleProp<ViewStyle>;
  disabled: boolean;
}>;

const Touchable = ({onPress, style, children, disabled}: TouchableProps) => {
  return (
    <TouchableOpacity
      style={style}
      activeOpacity={0.6}
      onPress={() => (disabled ? null : onPress)}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;

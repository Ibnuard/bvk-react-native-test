//Initialize typhography
import {StyleProp, TextStyle} from 'react-native/types';
import {COLOR_BLACK} from './colors';
import {scaleFont} from './scaler';

//font size
export const FONT_SIZE_10 = scaleFont(10);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_24 = scaleFont(24);

//default styling extra small
export const TextExtraSmallRegular: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_10,
  fontWeight: 'normal',
};

export const TextExtraSmallBold: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_10,
  fontWeight: 'bold',
};

//default styling small
export const TextSmallRegular: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_12,
  fontWeight: 'normal',
};

export const TextSmallBold: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_12,
  fontWeight: 'bold',
};

//default styling normal
export const TextNormalRegular: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_14,
  fontWeight: 'normal',
};

export const TextNormalBold: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_14,
  fontWeight: 'bold',
};

//default styling medium
export const TextMediumRegular: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_16,
  fontWeight: 'normal',
};

export const TextMediumBold: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_16,
  fontWeight: 'bold',
};

//default styling large
export const TextLargeRegular: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_18,
  fontWeight: 'normal',
};

export const TextLargeBold: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_18,
  fontWeight: 'bold',
};

//default styling extra large
export const TextExtraLargeRegular: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_24,
  fontWeight: 'normal',
};

export const TextExtraLargeBold: StyleProp<TextStyle> = {
  color: COLOR_BLACK,
  fontFamily: 'Poppins-Regular',
  fontSize: FONT_SIZE_24,
  fontWeight: 'bold',
};

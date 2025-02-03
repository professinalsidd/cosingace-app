import {StyleProp, TextStyle} from 'react-native';

type LayoutType = {
  children: React.ReactNode;
};

type InputTypes = {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  style?: TextStyle;
  secureTextEntry?: boolean;
};

type ButtonTypes = {
  title: string;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

type DateTypes = {
  mode?: any;
  date: any;
  setDate: any;
};

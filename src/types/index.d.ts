import {StyleProp, TextStyle} from 'react-native';

type LayoutType = {
  children: React.ReactNode;
  style?: StyleProp;
};

type InputTypes = {
  label: string;
  value?: string;
  onChange?: (text: string) => void;
  placeholder?: string;
  style?: TextStyle;
  secureTextEntry?: boolean;
  readOnly?: boolean;
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

type CardsTypes = {
  headerTitle: string;
  label: string;
  description: string;
  link: string;
  type?: string;
};

type TextTypes = {
  style?: TextStyle;
  type?: string;
  title: string;
};

type CardItem = {
  img: any;
  heading?: string;
  content?: string;
  key?: string;
};

type CardTypes = {
  data: CardItem[];
};

type headerType = {
  title: string;
};

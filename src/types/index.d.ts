type LayoutType = {
  children: React.ReactNode;
};

type InputProps = {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  style?: TextStyle;
  secureTextEntry?: boolean;
};

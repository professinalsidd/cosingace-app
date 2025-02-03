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
  title: String;
  onClick?: () => void;
  style?: TextStyle;
};

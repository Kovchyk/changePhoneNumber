export interface StylesProps {
  [key: string]: string;
}

export interface ThemeProps {
  border: {
    [key: string]: string;
  };
  colors: {
    [key: string]: string;
  };
  space: {
    [key: number]: string | number;
  };
  radii: {
    [key: number]: string;
  };
  sizes: number[];
  fontSizes: string[];
  fontWeights: number[];
  lineHeights: string[];
}

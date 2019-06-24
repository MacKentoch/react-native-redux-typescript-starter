declare module 'react-native-cardview' {
  import * as React from 'react';

  export interface CardViewProps {
    style?: React.StyleProp<any>;
    cardElevation?: number;
    cardMaxElevation?: number;
    cornerRadius?: number;
    useCompatPadding?: number;
    cornerOverlap?: number;
  }

  class CardView extends React.Component<CardViewProps, any> {}

  export default CardView;
}

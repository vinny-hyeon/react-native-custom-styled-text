# react-native-custom-styled-text

React Native component used to a variety of custom styles within a text. This is a port of [react-native-custom-styled-text](https://github.com/bini0823/react-native-custom-styled-text#readme).

## Installation

With npm:

```
npm i react-native-custom-styled-text
```

With yarn:

```
yarn add react-native-custom-styled-text
```

## Usage

To use it, wrap up the texts which want to apply style with '[' ']'
You can 1 or more style to the text. 

```jsx
import CustomStyledText from 'react-native-custom-styled-text';

<CustomStyledText
  text="[Hello] Fancy [text]"
  style={styles.fontStyle}
  highlightStyle={[styles.firstCustomStyle, styles.secondCustomStyle]}
/>

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  firstCustomStyle: {
    color: 'red',
  },
  secondCustomStyle: {
    color: 'blue',
  },
});
```

And the `CustomStyledText` component will highlight all occurrences of terms which wrap up with '[' ']'

<img width="368" alt="screen shot 2015-12-19 at 8 23 43 am" src="https://user-images.githubusercontent.com/43259318/121778909-1cb41000-cbd4-11eb-97fd-deac6e19f7bb.png">

## Props

You can pass all Text style props like `style` to the Text component that is used as a wrapper '[' ']'.

| Property           | Type          | Required? | Description                                                                                                                                         |
| :----------------- | :------------ | :-------: | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| text        | String |     ✓     | text                                                                                                                               |
| style    | TextStyle        |          | Text's style                                                                                                                        |
| highlightStyle         | TextStyle, TextStyle[]       |           | 1 or more custom style                                                             |
| ...otherProps      | any       |           | react-native Text component props                                                                     |

## License

[MIT License](LICENSE)

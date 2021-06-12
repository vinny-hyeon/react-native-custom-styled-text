import React from "react";
import { Text, TextStyle } from "react-native";

interface HighlightableTextProps {
  text: string;
  style: TextStyle;
  highlightStyle: TextStyle | Array<TextStyle>;
}

interface ParsedText {
  text: string;
  isHighlighted: boolean;
}

const parseHighlightedText = (text: string) => {
  let isHighlighted = false;
  const textArr = text.split("");
  return textArr.reduce((acc, char, index) => {
    if (char === "[") {
      isHighlighted = true;
    } else if (char === "]") {
      isHighlighted = false;
    }

    const isFirstChar = index === 0;
    const isStartOfHighlight = char === "[";
    const isAfterEndOfHighlight = textArr[index - 1] === "]";
    const isStartOfTextFragment =
      isFirstChar || isStartOfHighlight || isAfterEndOfHighlight;
    const textFragment = isStartOfTextFragment
      ? {
          text: "",
          isHighlighted,
        }
      : acc[acc.length - 1];

    const updatedTextFragment =
      char !== "[" && char !== "]"
        ? {
            text: `${textFragment.text}${char}`,
            isHighlighted,
          }
        : textFragment;

    if (isStartOfTextFragment) {
      return [...acc, updatedTextFragment];
    }

    return [...acc.slice(0, -1), updatedTextFragment];
  }, []);
};

const CustomStyledText = ({
  text,
  style,
  highlightStyle,
  ...otherProps
}: HighlightableTextProps): JSX.Element => {
  if (Array.isArray(highlightStyle)) {
    const highlightStyleNum = highlightStyle.length;
    const highlightWordNum = parseHighlightedText(text).filter(
      (ele: ParsedText) => ele.isHighlighted
    ).length;

    if (highlightStyleNum !== highlightWordNum) {
      throw new Error(
        "Highlighted style array length and Highlighted word string number is different"
      );
    }
  }

  const isMultipleStyle = Array.isArray(highlightStyle);
  let styleIndex = -1;
  return (
    <Text style={style} {...otherProps}>
      {parseHighlightedText(text).map(({ text: t, isHighlighted }, index) => {
        if (isHighlighted) {
          if (isMultipleStyle) {
            styleIndex += 1;
          }
          return (
            <Text
              key={index.toString()}
              style={
                isMultipleStyle ? highlightStyle[styleIndex] : highlightStyle
              }
            >
              {t}
            </Text>
          );
        }
        return t;
      })}
    </Text>
  );
};

export default CustomStyledText;

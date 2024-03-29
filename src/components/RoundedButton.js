import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  isIcon = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      {isIcon ? (
        <Icon name={props.name} size={props.iconSize} color={props.iconColor} />
      ) : (
        <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#fff",
      borderWidth: 2,
    },
    text: { color: "#fff", fontSize: size / 3 },
  });

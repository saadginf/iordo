import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./AppText";
import colors from "../config/colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,

  isRtl = false,
}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={isRtl ? styles.containerRTL : styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View
          style={isRtl ? styles.detailsContainerRTL : styles.detailsContainer}
        >
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {subTitle && (
            <Text style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </Text>
          )}
        </View>
        <MaterialCommunityIcons
          color={colors.medium}
          name={isRtl ? "chevron-left" : "chevron-right"}
          size={25}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  containerRTL: {
    alignItems: "center",
    flexDirection: "row-reverse",

    padding: 5,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 9,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  detailsContainerRTL: {
    flex: 1,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
  },
  title: {
    fontWeight: "800",
  },
});

export default ListItem;

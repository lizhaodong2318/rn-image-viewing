/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";

import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";

export const ImageLoading = () => {
  const SCREEN = Dimensions.get("window");
  const SCREEN_WIDTH = SCREEN.width;
  const SCREEN_HEIGHT = SCREEN.height;

  return (
    <View style={{
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <ActivityIndicator size="small" color="#FFF" />
    </View>
  );
}

const styles = StyleSheet.create({

});

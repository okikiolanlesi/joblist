import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { View, ScrollView, SafeAreaView, Text } from "react-native";

import { COLORS, icons, image, SIZES, FONTS } from "../constants";
import {
  NearbyJobs,
  PopularJobs,
  ScreenHeaderBtn,
  welcome,
} from "../components";
const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
        }}
      />
    </SafeAreaView>
  );
};

export default index;

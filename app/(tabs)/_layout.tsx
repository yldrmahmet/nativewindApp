import { Tabs } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "home", headerShown: false }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "search", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "profile", headerShown: false }}
      />
      <Tabs.Screen
        name="saved"
        options={{ title: "saved", headerShown: false }}
      />
    </Tabs>
  );
}

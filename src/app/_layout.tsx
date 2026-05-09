import "../global.css";

import { NativeTabs } from "expo-router/unstable-native-tabs";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

function AppLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Plan</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="book.pages" md="book" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="shop">
        <NativeTabs.Trigger.Icon sf="cart" md="shopping_cart" />
        <NativeTabs.Trigger.Label>Shop</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="cook">
        <NativeTabs.Trigger.Icon sf="cooktop" md="cooking" />
        <NativeTabs.Trigger.Label>Cook</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <AppLayout />
    </ConvexProvider>
  );
}

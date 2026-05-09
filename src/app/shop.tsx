import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ShopScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-background-dark"
      style={{ paddingTop: insets.top }}
    >
      <Text className="font-base font-sans">Shop Screen</Text>
    </View>
  );
}

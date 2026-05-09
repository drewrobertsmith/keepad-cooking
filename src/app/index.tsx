import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LegendList } from "@legendapp/list/react-native";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Index() {
  const insets = useSafeAreaInsets();
  const data = useQuery(api.recipes.getRecipes);

  return (
    <View
      className="flex-1 bg-background-dark"
      style={{ paddingTop: insets.top }}
    >
      <Text className="font-base font-sans">Recipes</Text>
      <LegendList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

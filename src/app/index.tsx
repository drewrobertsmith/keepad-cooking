import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LegendList } from "@legendapp/list/react-native";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { SymbolView } from "expo-symbols";
import {
  Host,
  Column,
  Button,
  BottomSheet,
  Text as NativeText,
} from "@expo/ui";
import { useState } from "react";

function RecipeListItem({ item }) {
  return (
    <View className="p-2 gap-2 rounded-2xl bg-background-light">
      <Text className="font-base text-lg font-semibold text-foreground">
        {item.title}
      </Text>
      <Text className="shrink text-muted" numberOfLines={3}>
        {item.description}
      </Text>
      <Text className="font-base text-foreground">{item.cookTime} min</Text>
    </View>
  );
}

export default function Index() {
  const insets = useSafeAreaInsets();
  const data = useQuery(api.recipes.getRecipes);
  const [isPresented, setIsPresented] = useState(false);

  return (
    <Host style={{ flex: 1, paddingTop: insets.top }}>
      <View className="flex-1 bg-background-dark gap-4">
        <View className="w-full flex-row justify-between p-2">
          <Text className="font-semibold text-3xl font-sans text-foreground">
            Recipes
          </Text>
          <Pressable onPress={() => setIsPresented(true)}>
            <SymbolView
              name={{ ios: "plus.circle", android: "add_circle" }}
              size={40}
            />
          </Pressable>
        </View>
        <LegendList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <RecipeListItem item={item} />}
          contentContainerClassName="p-4"
        />
      </View>
      <BottomSheet
        isPresented={isPresented}
        onDismiss={() => setIsPresented(false)}
      >
        <Column spacing={12}>
          <NativeText textStyle={{ fontSize: 18, fontWeight: "700" }}>
            Sheet contents
          </NativeText>
          <Text>Drag down or tap the overlay to dismiss.</Text>
          <Button label="Close" onPress={() => setIsPresented(false)} />
        </Column>
      </BottomSheet>
    </Host>
  );
}

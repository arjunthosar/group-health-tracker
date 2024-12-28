import { Button, Text, View } from "react-native";
import { useState } from "react";

export default function Index() {
  const [x, setX] = useState(0);


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>{x}</Text>
      <Button
        title="Increment"
        onPress={() => {setX(x + 1); console.log(x)}}
      />
    </View>
  );
}

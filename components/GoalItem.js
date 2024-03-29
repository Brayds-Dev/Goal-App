import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable android_ripple={{color: '#210644'}}
       onPress={props.onDeleteItem.bind(this, props.id)}
       style={({pressed}) => pressed && styles.pressedItems}
       >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItems: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 10,
  },
});

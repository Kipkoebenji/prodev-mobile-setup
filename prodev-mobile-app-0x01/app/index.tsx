import { Text, View , StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text >Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.largeText}>Typescript is great if you practice more</Text>
      <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
      <Text style={styles.smallText}>Alx is awesome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#90caf9"

  },
  largeText:{
    fontSize: 20,  
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  }
})

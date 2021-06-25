import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 3,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 40,
  },
  message: {
    width: '100%',
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#4285F4',
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: '#FFF',
    fontSize: 15,
    textAlign: "center",
  }
})
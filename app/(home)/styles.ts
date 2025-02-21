import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    color: "#fff",
    height: 56,
    padding: 12,
    borderRadius: 5,
  },
  form: {
    marginTop: 24,
    flexDirection: "row",
    gap: 12,
  },
  participants: {
    marginTop: 24,
  },
})

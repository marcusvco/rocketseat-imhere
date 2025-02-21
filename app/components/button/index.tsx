import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native"
import { styles } from "./styles"

interface ButtonProps {
  children: string
  color?: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.color }]}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  )
}

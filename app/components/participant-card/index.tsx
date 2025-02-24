import { Text, View } from "react-native"
import { Button } from "../button"
import { styles } from "./styles"

interface ParticipantProps {
  participant: { id: string; name: string }
  onRemove: (id: string) => void
}

export function ParticipantCard(props: ParticipantProps) {
  return (
    <View style={styles.participant}>
      <Text style={styles.participantName}>{props.participant.name}</Text>
      <Button
        children="-"
        color="#e23c44"
        onPress={() => props.onRemove(props.participant.id)}
      />
    </View>
  )
}

import { Alert, FlatList, Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../components/button"
import { ParticipantCard } from "../components/participant-card"
import { useState } from "react"
import uuid from "react-native-uuid"

interface Participant {
  id: string
  name: string
}

export default function Index() {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleAddParticipant(name: string) {
    if (!name) {
      Alert.alert("Nome inválido", "O nome do participante não pode ser vazio")
      return
    }

    const newParticipant: Participant = {
      id: uuid.v4(),
      name,
    }

    setParticipants([...participants, newParticipant])
  }

  function handleRemoveParticipant(id: string) {
    Alert.alert("Remover participante", "Deseja remover este participante?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Remover",
        style: "destructive",
        onPress: () => {
          setParticipants(
            participants.filter((participant) => participant.id !== id)
          )
        },
      },
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <Button
          children="+"
          color="#31cf67"
          onPress={() => handleAddParticipant(participantName)}
        />
      </View>
      <FlatList
        style={styles.participants}
        data={participants}
        renderItem={({ item }) => (
          <ParticipantCard
            key={item.id}
            participant={item}
            onRemove={() => handleRemoveParticipant(item.id)}
          />
        )}
      />
    </SafeAreaView>
  )
}

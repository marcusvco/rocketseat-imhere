import { Alert, FlatList, Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../components/button"
import { ParticipantCard } from "../components/participant-card"

interface Participant {
  id: number
  name: string
}

export default function Index() {
  let participants: Participant[] = [
    { id: 1, name: "João" },
    { id: 2, name: "Maria" },
    { id: 3, name: "José" },
    { id: 4, name: "Ana" },
    { id: 5, name: "Carlos" },
    { id: 6, name: "Mariana" },
    { id: 7, name: "Pedro" },
    { id: 8, name: "Paula" },
    { id: 9, name: "Lucas" },
    { id: 10, name: "Laura" },
  ]

  function handleRemoveParticipant(id: number) {
    Alert.alert("Remover participante", "Deseja remover este participante?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Remover",
        style: "destructive",
        onPress: () => {
          participants = participants.filter(
            (participant) => participant.id !== id
          )
          // setParticipants([...participants])
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
        />
        <Button children="+" color="#31cf67" onPress={() => {}} />
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

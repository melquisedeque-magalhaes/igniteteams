import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function CardPlayer() {

  const { COLORS } = useTheme()

  return (
    <Container>
      <MaterialIcons name='verified-user' weight="fill" color={COLORS.GRAY_200} />
    </Container>
  )
}
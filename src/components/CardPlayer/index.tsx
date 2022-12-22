import { ButtonIcon } from "@components/ButtonIcon";
import { useTheme } from "styled-components/native";
import { Container, Icon, Title } from "./styles";

interface CardPlayerProps {
  name: string
  onRemove: () => void
}

export function CardPlayer({ name, onRemove }: CardPlayerProps) {

  const { COLORS } = useTheme()

  return (
    <Container>
      <Icon name="person" />
      <Title>{name}</Title>
      <ButtonIcon icon="X" color={COLORS.RED_500} onPress={onRemove} />
    </Container>
  )
}
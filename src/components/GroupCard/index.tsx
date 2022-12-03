import { TouchableOpacityProps } from "react-native";
import { Title, Container, Icon } from "./styles";

interface GroupCardProps extends TouchableOpacityProps {
  title: string
}

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
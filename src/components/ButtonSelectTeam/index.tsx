import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonSelectTeamProps extends TouchableOpacityProps{
  title: string
  isSelected?: boolean
}

export function ButtonSelectTeam({ title, isSelected = false, ...rest}:ButtonSelectTeamProps) {
  return(
    <Container isSelected={isSelected} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
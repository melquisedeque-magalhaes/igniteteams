import styled from "styled-components/native";

interface ContainerProps {
  backgroundColor: string
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 56px;
  width: 56px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;
`
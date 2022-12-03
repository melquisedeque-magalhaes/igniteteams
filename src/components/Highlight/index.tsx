import { SubTitle } from "@components/SubTitle";
import { Title } from "@components/Title";
import { Container } from "./styles";

interface HighlightProps {
  title: string
  subTitle: string
}

export function Highlight({ subTitle, title }: HighlightProps) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <SubTitle>
        {subTitle}
      </SubTitle>
    </Container>
  )
}
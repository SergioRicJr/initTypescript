import { Center, Input } from "@chakra-ui/react"

interface ICard {
  id?: number,
  paragraph?: string,
  details?: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <>
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
    </>
  )
}

import { Box, Text } from '@chakra-ui/react'

interface ICardInfo {
    mainContent: string
    content: string
}

export const CardInfo = ({mainContent, content}: ICardInfo) => {
  return (
    <Box backgroundColor="white" width={320} padding={8} minHeight="120px" borderRadius={25}>
        <Text fontSize="2xl" fontWeight="bold" >{mainContent}</Text>
        <Text fontSize="xl" >{content}</Text>
    </Box>
  )
}

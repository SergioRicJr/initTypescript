import { Box, Center, Input } from "@chakra-ui/react"
// import { useCallback, useEffect, useState } from "react"
// import { ButtonMy } from "../button"
// import { login } from "../../services/login"
// import { api } from "../../services/api"
// import { IUserData } from "./interfaces"

// interface ICard {
//   id?: number,
//   paragraph?: string,
//   details?: string
// }

export const Card = ({children}:any) => {
  return(
    <Box backgroundColor="#FFFFFF" padding="15px" borderRadius="25px">
        {children}
    </Box>
  )
}

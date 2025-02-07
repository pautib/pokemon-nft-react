import { useContext } from "react"
import { SmartContractContext } from "../context"

export const useSmartContractProvider = () => useContext(SmartContractContext)
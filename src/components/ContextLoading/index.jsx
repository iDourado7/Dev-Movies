import { createContext, useContext, useState } from "react"

const LoadingContext = createContext()

export default function LoadingProvider({ children }) {
    const [carregandoPagina, setCarregandoPagina] = useState(true)

    return (
        <LoadingContext.Provider value={{ carregandoPagina, setCarregandoPagina }}>
            {children}
        </LoadingContext.Provider>
    )
}

export function useLoading() {
    return useContext(LoadingContext)
}
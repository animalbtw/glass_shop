'use client'

import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined)

export function AppWrapper({children}: {children: React.ReactNode}) {
    const [isModalOpen, setModalOpen] = useState(true)

    return (
        <AppContext.Provider value={{isModalOpen, setModalOpen}}>
            {children}
        </AppContext.Provider>
    )
} 

export function useAppContext() {
    return useContext(AppContext)
}
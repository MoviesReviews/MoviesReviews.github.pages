import { createContext, useState } from "react"

export const CreatedAlertContext = createContext()

export default function CreatedAlertProvider({ children }) {
    const [createdReview, setCreatedReview] = useState(false)
    
    const changeCreatedReviewState = (isCreated) => {
        setCreatedReview(isCreated)
    }

    const alert = {
        changeCreatedReviewState,
        createdReview
    }

    return (
        <CreatedAlertContext.Provider value={alert}>
            {children}
        </CreatedAlertContext.Provider>
    )
} 
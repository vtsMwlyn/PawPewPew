import { createContext , useContext, useState, useEffect } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({children}){
    const [message, setMessage] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    const showToast = (msg) => {
        setMessage(msg)
        setIsVisible(true)
    }

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [isVisible])

    return (
        <ToastContext.Provider value={{showToast}}>
            {children}
            <div
                className={`
                fixed bottom-20 left-1/2 -translate-x-1/2 z-50 text-white bg-black/90 rounded-lg text-lg tracking-wide uppercase flex items-center justify-center pointer-events-none transition-all duration-300 ease-out py-3 px-6 shadow-2xl
                ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'} `}
            >
                <span>{message}</span>
            </div>
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext)
import { createContext, useContext, useState, useCallback } from 'react'
import type { ReactNode } from 'react'

type CurrencyContextType = {
  currency: string
  setCurrency: (currency: string) => void
  formatPrice: (price: number) => string
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState('USD')

  const formatPrice = useCallback((price: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    return formatter.format(price)
  }, [currency])

  const value = {
    currency,
    setCurrency,
    formatPrice,
  }

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  )
}

// This is the hook your components are using
export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrencyContext must be used within a CurrencyProvider')
  }
  return context
}

// Also export the alias for any component that might use 'useCurrency'
export const useCurrency = useCurrencyContext

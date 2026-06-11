import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useCurrency } from '@/hooks/useCurrency';

type CurrencyContextType = ReturnType<typeof useCurrency>;

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const currency = useCurrency();
  return (
    <CurrencyContext.Provider value={currency}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrencyContext() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error('useCurrencyContext must be used within CurrencyProvider');
  return context;
}

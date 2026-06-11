import { useState, useCallback } from 'react';
import { exchangeRates, currencies } from '@/data/content';

export function useCurrency() {
  const [currency, setCurrency] = useState('USD');

  const convert = useCallback(
    (amountUSD: number): number => {
      const rate = exchangeRates[currency] || 1;
      return Math.round(amountUSD * rate * 100) / 100;
    },
    [currency]
  );

  const formatPrice = useCallback(
    (amountUSD: number): string => {
      const converted = convert(amountUSD);
      const curr = currencies.find((c) => c.code === currency);
      const symbol = curr?.symbol || '$';
      return `${symbol}${converted.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
    [convert, currency]
  );

  return { currency, setCurrency, convert, formatPrice, currencies };
}

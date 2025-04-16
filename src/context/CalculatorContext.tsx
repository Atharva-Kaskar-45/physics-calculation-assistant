
import React, { createContext, useContext, useState, useEffect } from 'react';

type ModuleType = 'a' | 'b' | 'c' | 'd' | 'e' | null;
type CalculationType = 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | null;

interface CalculatorContextType {
  module: ModuleType;
  calculationType: CalculationType;
  result: string | null;
  setModule: (module: ModuleType) => void;
  setCalculationType: (type: CalculationType) => void;
  setResult: (result: string) => void;
  resetCalculator: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [module, setModule] = useState<ModuleType>(null);
  const [calculationType, setCalculationType] = useState<CalculationType>(null);
  const [result, setResult] = useState<string | null>(null);

  // Reset result when calculation type changes
  useEffect(() => {
    // Clear the result whenever the calculation type changes
    setResult(null);
  }, [calculationType]);

  const resetCalculator = () => {
    setModule(null);
    setCalculationType(null);
    setResult(null);
  };

  return (
    <CalculatorContext.Provider value={{
      module,
      calculationType,
      result,
      setModule,
      setCalculationType,
      setResult,
      resetCalculator
    }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};

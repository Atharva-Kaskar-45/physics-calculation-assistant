import React from 'react';
import { Button } from '@/components/ui/button';
import { useCalculator } from '@/context/CalculatorContext';
import { ChevronLeft } from 'lucide-react';

const TopicMenu: React.FC = () => {
  const { module, setModule, setCalculationType, setResult } = useCalculator();
  
  // Define module options
  const moduleOptions: Record<string, { id: string; label: string }[]> = {
    a: [
      { id: 'f', label: 'Calculate De-Broglie Wavelength' },
      { id: 'g', label: 'Calculate De-Broglie Wavelength (if potential difference given)' },
      { id: 'h', label: 'Calculate energy of electron/proton' },
      { id: 'i', label: 'Calculate momentum of electron/proton' },
    ],
    b: [
      { id: 'j', label: 'Calculate interplanar distance' },
      { id: 'k', label: 'Calculate wavelength of x-ray' },
      { id: 'l', label: 'Calculate glancing angle' },
      { id: 'm', label: 'Calculate order of reflection' },
    ],
    c: [
      { id: 'n', label: 'Calculate probability of electron' },
      { id: 'o', label: 'Calculate energy level of particle' },
      { id: 'p', label: 'Calculate resistivity of p/n type semiconductor' },
      { id: 'q', label: 'Calculate Hall voltage' },
      { id: 'r', label: 'Calculate concentration of acceptor/donor atoms' },
    ],
    d: [
      { id: 's', label: 'Calculate thickness of film in reflected ray' },
      { id: 't', label: 'Calculate order of thickness' },
      { id: 'u', label: 'Calculate minimum thickness of light that will appear dark in the reflected light' },
      { id: 'v', label: 'Calculate minimum thickness of light that will appear bright in the reflected light' },
    ],
    e: [
      { id: 'w', label: 'Calculate critical temperature of the element' },
      { id: 'x', label: 'Calculate critical magnetic field' },
    ],
  };
  
  // Get module title
  const getModuleTitle = () => {
    switch (module) {
      case 'a': return 'Quantum Physics';
      case 'b': return 'Crystallography';
      case 'c': return 'Semiconductors';
      case 'd': return 'Interference in thin film';
      case 'e': return 'Superconductors and Supercapacitors';
      default: return '';
    }
  };
  
  // Handle going back to main menu
  const handleBackToMainMenu = () => {
    setModule(null);
    setResult(null); // Clear result when going back to main menu
  };
  
  // Handle calculation type selection
  const handleCalculationTypeSelect = (calcType: string) => {
    setCalculationType(calcType as any);
    setResult(null); // Clear result when selecting a new calculation
  };
  
  if (!module) return null;
  
  const options = moduleOptions[module] || [];
  
  return (
    <div className="space-y-6 px-4 w-full max-w-full">
      <div className="flex items-center mb-6">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleBackToMainMenu}
          className="mr-2 h-8 w-8 md:h-10 md:w-10 flex-shrink-0"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
        <h2 className="text-accent-color text-lg md:text-xl break-words">{getModuleTitle()}</h2>
      </div>
      <div className="grid gap-4 w-full">
        {options.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className="w-full flex items-start justify-start text-secondary-color hover:text-secondary-color/80 h-auto min-h-12 py-3 px-3 md:px-4 text-sm md:text-base lg:text-lg font-normal text-left border border-secondary hover:border-primary transition-all"
            onClick={() => handleCalculationTypeSelect(option.id)}
          >
            <span className="break-words whitespace-normal">
              {option.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopicMenu;

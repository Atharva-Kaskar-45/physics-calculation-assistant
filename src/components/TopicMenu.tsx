
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
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={handleBackToMainMenu}
          className="mr-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-accent-color text-xl">{getModuleTitle()}</h2>
      </div>

      <div className="grid gap-4">
        {options.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className="flex items-center justify-start text-secondary-color hover:text-secondary-color/80 h-14 text-lg font-normal text-left border border-secondary hover:border-primary transition-all"
            onClick={() => handleCalculationTypeSelect(option.id)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopicMenu;

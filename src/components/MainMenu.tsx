import React from 'react';
import { Button } from '@/components/ui/button';
import { useCalculator } from '@/context/CalculatorContext';
import { 
  Atom, 
  Hexagon, 
  Cpu, 
  Layers, 
  Zap 
} from 'lucide-react';

const MainMenu: React.FC = () => {
  const { setModule } = useCalculator();
  
  const modules = [
    { id: 'a', label: 'Quantum Physics', icon: <Atom className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: 'b', label: 'Crystallography', icon: <Hexagon className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: 'c', label: 'Semiconductors', icon: <Cpu className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: 'd', label: 'Interference in thin film', icon: <Layers className="h-4 w-4 md:h-5 md:w-5" /> },
    { id: 'e', label: 'Superconductors and Supercapacitors', icon: <Zap className="h-4 w-4 md:h-5 md:w-5" /> },
  ];
  
  return (
    <div className="space-y-6 animate-fade-in px-4 w-full max-w-full">
      <h2 className="text-accent-color text-lg md:text-xl font-medium mb-4 animate-slide-in-right">Select any module:</h2>
      <div className="grid gap-4 w-full">
        {modules.map((module, index) => (
          <Button
            key={module.id}
            variant="outline"
            className="w-full flex items-start justify-start text-secondary-color hover:text-secondary-color/80 h-auto min-h-12 py-3 px-3 md:px-4 text-sm md:text-base lg:text-lg font-medium border border-secondary hover:border-primary transition-all transform hover:scale-[1.02] hover:shadow-lg animate-fade-in"
            style={{ 
              animationDelay: `${index * 150}ms`,
              opacity: 0,
              animation: `fade-in 0.5s ease-out ${index * 150}ms forwards, slide-in-right 0.5s ease-out ${index * 150}ms forwards`
            }}
            onClick={() => setModule(module.id as any)}
          >
            <span className="mr-2 flex-shrink-0 mt-0.5">
              {module.icon}
            </span>
            <span className="break-words whitespace-normal">
              {module.label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;

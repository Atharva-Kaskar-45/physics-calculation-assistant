
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
    { id: 'a', label: 'Quantum Physics', icon: <Atom className="mr-2 h-5 w-5" /> },
    { id: 'b', label: 'Crystallography', icon: <Hexagon className="mr-2 h-5 w-5" /> },
    { id: 'c', label: 'Semiconductors', icon: <Cpu className="mr-2 h-5 w-5" /> },
    { id: 'd', label: 'Interference in thin film', icon: <Layers className="mr-2 h-5 w-5" /> },
    { id: 'e', label: 'Superconductors and Supercapacitors', icon: <Zap className="mr-2 h-5 w-5" /> },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-accent-color text-xl font-medium mb-4 animate-slide-in-right">Select any module:</h2>
      <div className="grid gap-4">
        {modules.map((module, index) => (
          <Button
            key={module.id}
            variant="outline"
            className="flex items-center justify-start text-secondary-color hover:text-secondary-color/80 h-14 text-lg font-medium border-2 border-secondary hover:border-primary transition-all transform hover:scale-[1.02] hover:shadow-lg animate-fade-in"
            style={{ 
              animationDelay: `${index * 150}ms`,
              opacity: 0,
              animation: `fade-in 0.5s ease-out ${index * 150}ms forwards, slide-in-right 0.5s ease-out ${index * 150}ms forwards`
            }}
            onClick={() => setModule(module.id as any)}
          >
            {module.icon}
            {module.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;

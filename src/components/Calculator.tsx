
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCalculator } from '@/context/CalculatorContext';
import { ChevronLeft } from 'lucide-react';
import * as calculations from '@/utils/calculations';

interface InputField {
  id: string;
  label: string;
  unit: string;
  placeholder: string;
}

const Calculator: React.FC = () => {
  const { module, calculationType, setCalculationType, setResult, result } = useCalculator();
  const [inputValues, setInputValues] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);

  const getCalculationTitle = () => {
    switch (calculationType) {
      // Quantum Physics
      case 'f': return 'Calculate De-Broglie Wavelength';
      case 'g': return 'Calculate De-Broglie Wavelength (Potential)';
      case 'h': return 'Calculate Energy of Particle';
      case 'i': return 'Calculate Momentum of Particle';
      
      // Crystallography
      case 'j': return 'Calculate Interplanar Distance';
      case 'k': return 'Calculate X-Ray Wavelength';
      case 'l': return 'Calculate Glancing Angle';
      case 'm': return 'Calculate Order of Reflection';
      
      // Semiconductors
      case 'n': return 'Calculate Probability of Electron';
      case 'o': return 'Calculate Energy Level of Particle';
      case 'p': return 'Calculate Resistivity of Semiconductor';
      case 'q': return 'Calculate Hall Voltage';
      case 'r': return 'Calculate Concentration of Atoms';
      
      // Interference in thin film
      case 's': return 'Calculate Thickness of Film';
      case 't': return 'Calculate Order of Thickness';
      case 'u': return 'Calculate Minimum Dark Thickness';
      case 'v': return 'Calculate Minimum Bright Thickness';
      
      // Superconductors
      case 'w': return 'Calculate Critical Temperature';
      case 'x': return 'Calculate Critical Magnetic Field';
      
      default: return '';
    }
  };

  const getInputFields = (): InputField[] => {
    switch (calculationType) {
      // Quantum Physics
      case 'f': return [
        { id: 'pc', label: 'Planck\'s constant', unit: 'J.s', placeholder: '6.63e-34' },
        { id: 'mfe', label: 'Mass of electron/proton', unit: 'kg', placeholder: '9.11e-31' },
        { id: 'sl', label: 'Speed of light', unit: 'm/s', placeholder: '3e8' },
      ];
      case 'g': return [
        { id: 'pc', label: 'Planck\'s constant', unit: 'J.s', placeholder: '6.63e-34' },
        { id: 'mfp', label: 'Mass of the particle', unit: 'kg', placeholder: '9.11e-31' },
        { id: 'en', label: 'Energy of the particle', unit: 'J', placeholder: '1.6e-19' },
      ];
      case 'h': return [
        { id: 'pc', label: 'Planck\'s constant', unit: 'J.s', placeholder: '6.63e-34' },
        { id: 'mfp', label: 'Mass of the particle', unit: 'kg', placeholder: '9.11e-31' },
        { id: 'wl', label: 'Wavelength of the particle', unit: 'm', placeholder: '1e-10' },
      ];
      case 'i': return [
        { id: 'pc', label: 'Planck\'s constant', unit: 'J.s', placeholder: '6.63e-34' },
        { id: 'wl', label: 'Wavelength of the particle', unit: 'm', placeholder: '1e-10' },
      ];
      
      // Crystallography
      case 'j': return [
        { id: 'lc', label: 'Lattice constant', unit: 'Angstrom', placeholder: '5.43' },
        { id: 'hm', label: 'h Miller indice', unit: '', placeholder: '1' },
        { id: 'km', label: 'k Miller indice', unit: '', placeholder: '1' },
        { id: 'lm', label: 'l Miller indice', unit: '', placeholder: '1' },
      ];
      case 'k': return [
        { id: 'id', label: 'Interplanar distance', unit: 'Angstrom', placeholder: '3.14' },
        { id: 'on', label: 'Order of reflection', unit: '', placeholder: '1' },
        { id: 'an', label: 'Glancing angle', unit: 'degrees', placeholder: '30' },
      ];
      case 'l': return [
        { id: 'id', label: 'Interplanar distance', unit: 'Angstrom', placeholder: '3.14' },
        { id: 'on', label: 'Order of reflection', unit: '', placeholder: '1' },
        { id: 'wl', label: 'Wavelength', unit: 'Angstrom', placeholder: '1.54' },
      ];
      case 'm': return [
        { id: 'id', label: 'Interplanar distance', unit: 'Angstrom', placeholder: '3.14' },
        { id: 'an', label: 'Glancing angle', unit: 'degrees', placeholder: '30' },
        { id: 'wl', label: 'Wavelength', unit: 'Angstrom', placeholder: '1.54' },
      ];
      
      // Semiconductors
      case 'n': return [
        { id: 'eol', label: 'Electron occupying energy level', unit: 'J', placeholder: '1.6e-19' },
        { id: 'kc', label: 'Boltzmann constant', unit: 'J/K', placeholder: '1.38e-23' },
        { id: 'tm', label: 'Temperature', unit: 'K', placeholder: '300' },
      ];
      case 'o': return [
        { id: 'fe', label: 'Fermi energy', unit: 'J', placeholder: '8.2e-19' },
        { id: 'kc', label: 'Boltzmann constant', unit: 'J/K', placeholder: '1.38e-23' },
        { id: 'tm', label: 'Temperature', unit: 'K', placeholder: '300' },
        { id: 'eol', label: 'Probability of electron', unit: '', placeholder: '0.5' },
      ];
      case 'p': return [
        { id: 'mo', label: 'Mobility', unit: 'm²/V-sec', placeholder: '0.135' },
        { id: 'hc', label: 'Hall coefficient', unit: 'm³/C', placeholder: '3.55e-4' },
      ];
      case 'q': return [
        { id: 'jc', label: 'Current density', unit: 'A/m²', placeholder: '1000' },
        { id: 'bz', label: 'Magnetic field', unit: 'T', placeholder: '1.5' },
        { id: 'wi', label: 'Width of sample', unit: 'm', placeholder: '0.01' },
        { id: 'nc', label: 'Concentration of donor/acceptor atom', unit: '/m³', placeholder: '1e22' },
        { id: 'ec', label: 'Charge of electron', unit: 'C', placeholder: '1.6e-19' },
      ];
      case 'r': return [
        { id: 'mo', label: 'Mobility', unit: 'm²/V-sec', placeholder: '0.135' },
        { id: 're', label: 'Resistivity', unit: 'Ohm-m', placeholder: '2.3e-5' },
        { id: 'ec', label: 'Charge of electron', unit: 'C', placeholder: '1.6e-19' },
      ];
      
      // Interference in thin film
      case 's': return [
        { id: 'wl', label: 'Wavelength', unit: 'cm', placeholder: '5.9e-5' },
        { id: 'ri', label: 'Refractive index', unit: '', placeholder: '1.5' },
        { id: 'an', label: 'Cosine of angle', unit: '', placeholder: '0.866' },
      ];
      case 't': return [
        { id: 'wl', label: 'Wavelength', unit: 'cm', placeholder: '5.9e-5' },
        { id: 'ri', label: 'Refractive index', unit: '', placeholder: '1.5' },
        { id: 'an', label: 'Cosine of angle', unit: '', placeholder: '0.866' },
        { id: 'th', label: 'Thickness of film', unit: 'cm', placeholder: '0.0001' },
      ];
      case 'u': return [
        { id: 'wl', label: 'Wavelength', unit: 'cm', placeholder: '5.9e-5' },
        { id: 'ri', label: 'Refractive index', unit: '', placeholder: '1.5' },
      ];
      case 'v': return [
        { id: 'wl', label: 'Wavelength', unit: 'cm', placeholder: '5.9e-5' },
        { id: 'ri', label: 'Refractive index', unit: '', placeholder: '1.5' },
      ];
      
      // Superconductors
      case 'w': return [
        { id: 'tm', label: 'Temperature', unit: 'K', placeholder: '77' },
        { id: 'hc', label: `Critical field at given temperature`, unit: 'A/m', placeholder: '1e5' },
        { id: 'h0', label: 'Critical field at absolute zero', unit: 'A/m', placeholder: '1.6e6' },
      ];
      case 'x': return [
        { id: 'tm', label: 'Temperature', unit: 'K', placeholder: '77' },
        { id: 'tc', label: 'Critical temperature', unit: 'K', placeholder: '92' },
        { id: 'h0', label: 'Critical field at absolute zero', unit: 'T', placeholder: '16' },
      ];
      
      default: return [];
    }
  };

  const handleInputChange = (id: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [id]: value }));
    setError(null);
  };

  const validateInputs = (): boolean => {
    const fields = getInputFields();
    for (const field of fields) {
      const value = inputValues[field.id];
      if (!value || isNaN(parseFloat(value))) {
        setError(`Please enter a valid number for ${field.label}`);
        return false;
      }
    }
    return true;
  };

  const performCalculation = () => {
    if (!validateInputs()) return;

    try {
      let calculationResult = '';

      // Convert input values to numbers
      const numericValues: Record<string, number> = {};
      Object.entries(inputValues).forEach(([key, value]) => {
        numericValues[key] = parseFloat(value);
      });

      // Perform the calculation based on the type
      switch (calculationType) {
        // Quantum Physics
        case 'f':
          calculationResult = calculations.calculateDeBroglieWavelength(
            numericValues.pc,
            numericValues.mfe,
            numericValues.sl
          );
          break;
        case 'g':
          calculationResult = calculations.calculateDeBroglieWavelengthPotential(
            numericValues.pc,
            numericValues.mfp,
            numericValues.en
          );
          break;
        case 'h':
          calculationResult = calculations.calculateParticleEnergy(
            numericValues.pc,
            numericValues.mfp,
            numericValues.wl
          );
          break;
        case 'i':
          calculationResult = calculations.calculateMomentum(
            numericValues.pc,
            numericValues.wl
          );
          break;
          
        // Crystallography
        case 'j':
          calculationResult = calculations.calculateInterplanarDistance(
            numericValues.lc,
            numericValues.hm,
            numericValues.km,
            numericValues.lm
          );
          break;
        case 'k':
          calculationResult = calculations.calculateXRayWavelength(
            numericValues.id,
            numericValues.on,
            numericValues.an
          );
          break;
        case 'l':
          calculationResult = calculations.calculateGlancingAngle(
            numericValues.id,
            numericValues.on,
            numericValues.wl
          );
          break;
        case 'm':
          calculationResult = calculations.calculateOrderOfReflection(
            numericValues.id,
            numericValues.an,
            numericValues.wl
          );
          break;
          
        // Semiconductors
        case 'n':
          calculationResult = calculations.calculateElectronProbability(
            numericValues.eol,
            numericValues.kc,
            numericValues.tm
          );
          break;
        case 'o':
          calculationResult = calculations.calculateEnergyLevel(
            numericValues.fe,
            numericValues.kc,
            numericValues.tm,
            numericValues.eol
          );
          break;
        case 'p':
          calculationResult = calculations.calculateResistivity(
            numericValues.mo,
            numericValues.hc
          );
          break;
        case 'q':
          calculationResult = calculations.calculateHallVoltage(
            numericValues.jc,
            numericValues.bz,
            numericValues.wi,
            numericValues.nc,
            numericValues.ec
          );
          break;
        case 'r':
          calculationResult = calculations.calculateConcentration(
            numericValues.mo,
            numericValues.re,
            numericValues.ec
          );
          break;
          
        // Interference in thin film
        case 's':
          calculationResult = calculations.calculateFilmThickness(
            numericValues.wl,
            numericValues.ri,
            numericValues.an
          );
          break;
        case 't':
          calculationResult = calculations.calculateOrderOfThickness(
            numericValues.wl,
            numericValues.ri,
            numericValues.an,
            numericValues.th
          );
          break;
        case 'u':
          calculationResult = calculations.calculateMinDarkThickness(
            numericValues.wl,
            numericValues.ri
          );
          break;
        case 'v':
          calculationResult = calculations.calculateMinBrightThickness(
            numericValues.wl,
            numericValues.ri
          );
          break;
          
        // Superconductors
        case 'w':
          calculationResult = calculations.calculateCriticalTemperature(
            numericValues.tm,
            numericValues.hc,
            numericValues.h0
          );
          break;
        case 'x':
          calculationResult = calculations.calculateCriticalMagneticField(
            numericValues.tm,
            numericValues.tc,
            numericValues.h0
          );
          break;
          
        default:
          throw new Error('Invalid calculation type');
      }

      setResult(calculationResult);
    } catch (err: any) {
      setError(`Calculation error: ${err.message}`);
    }
  };

  if (!calculationType) return null;

  const inputFields = getInputFields();

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setCalculationType(null)}
            className="mr-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <CardTitle className="text-accent-color">{getCalculationTitle()}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {inputFields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id} className="text-secondary-color">
              {field.label} {field.unit ? `(${field.unit})` : ''}:
            </Label>
            <Input
              id={field.id}
              placeholder={field.placeholder}
              value={inputValues[field.id] || ''}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              type="text"
            />
          </div>
        ))}

        {error && (
          <div className="text-destructive font-medium text-sm mt-2">{error}</div>
        )}

        {result && (
          <div className="mt-6 p-4 bg-muted rounded-md">
            <p className="font-medium">Result:</p>
            <p className="text-destructive-color text-xl font-semibold mt-2">{result}</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full"
          onClick={performCalculation}
        >
          Calculate
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Calculator;

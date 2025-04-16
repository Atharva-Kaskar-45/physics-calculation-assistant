
// Helper function to format scientific notation with proper units
export const formatResult = (value: number, unit: string): string => {
  if (Math.abs(value) < 0.0001 || Math.abs(value) > 10000) {
    return `${value.toExponential(6)} ${unit}`;
  }
  return `${value.toFixed(6)} ${unit}`;
};

// Quantum Physics calculations
export const calculateDeBroglieWavelength = (planckConstant: number, mass: number, speed: number): string => {
  const result = planckConstant / (mass * speed);
  return formatResult(result, 'meters');
};

export const calculateDeBroglieWavelengthPotential = (planckConstant: number, mass: number, energy: number): string => {
  const result = planckConstant / Math.sqrt(2 * mass * energy);
  return formatResult(result, 'meters');
};

export const calculateParticleEnergy = (planckConstant: number, mass: number, wavelength: number): string => {
  const result = (planckConstant * planckConstant) / (2 * mass * wavelength * wavelength);
  return formatResult(result, 'Joules');
};

export const calculateMomentum = (planckConstant: number, wavelength: number): string => {
  const result = planckConstant / wavelength;
  return formatResult(result, 'Kg-m/sec');
};

// Crystallography calculations
export const calculateInterplanarDistance = (latticeConstant: number, h: number, k: number, l: number): string => {
  const result = latticeConstant / Math.sqrt((h * h) + (k * k) + (l * l));
  return formatResult(result, 'Angstrom');
};

export const calculateXRayWavelength = (interplanarDistance: number, orderOfReflection: number, glancingAngle: number): string => {
  const angleInRadians = (glancingAngle * Math.PI) / 180;
  const result = (2 * interplanarDistance * Math.sin(angleInRadians)) / orderOfReflection;
  return formatResult(result, 'Angstrom');
};

export const calculateGlancingAngle = (interplanarDistance: number, orderOfReflection: number, wavelength: number): string => {
  const sinTheta = (orderOfReflection * wavelength) / (2 * interplanarDistance);
  const angleInRadians = Math.asin(sinTheta);
  const angleInDegrees = (angleInRadians * 180) / Math.PI;
  return formatResult(angleInDegrees, 'degrees');
};

export const calculateOrderOfReflection = (interplanarDistance: number, glancingAngle: number, wavelength: number): string => {
  const angleInRadians = (glancingAngle * Math.PI) / 180;
  const result = (2 * interplanarDistance * Math.sin(angleInRadians)) / wavelength;
  return formatResult(result, '');
};

// Semiconductors calculations
export const calculateElectronProbability = (energyLevel: number, boltzmannConstant: number, temperature: number): string => {
  const result = 1 / (1 + Math.exp(energyLevel / (boltzmannConstant * temperature)));
  return formatResult(result, '');
};

export const calculateEnergyLevel = (fermiEnergy: number, boltzmannConstant: number, temperature: number, probability: number): string => {
  const result = fermiEnergy + (boltzmannConstant * temperature) * Math.log(1 / probability - 1);
  return formatResult(result, 'Joules');
};

export const calculateResistivity = (mobility: number, hallCoefficient: number): string => {
  const result = hallCoefficient / mobility;
  return formatResult(result, 'Ohm-meter');
};

export const calculateHallVoltage = (currentDensity: number, magneticField: number, width: number, concentration: number, charge: number): string => {
  const result = (currentDensity * magneticField * width) / (concentration * charge);
  return formatResult(result, 'Volt');
};

export const calculateConcentration = (mobility: number, resistivity: number, charge: number): string => {
  const result = 1 / (charge * mobility * resistivity);
  return formatResult(result, '/m^3');
};

// Thin film interference calculations
export const calculateFilmThickness = (wavelength: number, refractiveIndex: number, cosAngle: number): string => {
  const result = wavelength / (4 * refractiveIndex * cosAngle);
  return formatResult(result, 'centimeter');
};

export const calculateOrderOfThickness = (wavelength: number, refractiveIndex: number, cosAngle: number, thickness: number): string => {
  const result = (2 * refractiveIndex * thickness * cosAngle) / wavelength;
  return formatResult(result, '');
};

export const calculateMinDarkThickness = (wavelength: number, refractiveIndex: number): string => {
  const result = wavelength / (2 * refractiveIndex);
  return formatResult(result, 'centimeter');
};

export const calculateMinBrightThickness = (wavelength: number, refractiveIndex: number): string => {
  const result = wavelength / (4 * refractiveIndex);
  return formatResult(result, 'centimeter');
};

// Superconductors calculations
export const calculateCriticalTemperature = (temperature: number, criticalField: number, criticalFieldZero: number): string => {
  const temp = Math.sqrt(1 - (criticalField / criticalFieldZero));
  const result = temperature / temp;
  return formatResult(result, 'Kelvin');
};

export const calculateCriticalMagneticField = (temperature: number, criticalTemperature: number, criticalFieldZero: number): string => {
  const result = criticalFieldZero * (1 - (temperature / criticalTemperature));
  return formatResult(result, 'Tesla');
};

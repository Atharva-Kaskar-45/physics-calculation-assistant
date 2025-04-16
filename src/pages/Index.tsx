
import React from 'react';
import Layout from '@/components/Layout';
import MainMenu from '@/components/MainMenu';
import TopicMenu from '@/components/TopicMenu';
import Calculator from '@/components/Calculator';
import { CalculatorProvider, useCalculator } from '@/context/CalculatorContext';

// Wrap the calculator components in the provider context
const CalculatorApp = () => {
  const { module, calculationType } = useCalculator();

  // Determine which component to show based on state
  let component;
  if (calculationType) {
    component = <Calculator />;
  } else if (module) {
    component = <TopicMenu />;
  } else {
    component = <MainMenu />;
  }

  return component;
};

// Main Index page
const Index = () => {
  return (
    <Layout>
      <CalculatorProvider>
        <div className="bg-card rounded-lg shadow-md border p-6">
          <CalculatorApp />
        </div>
      </CalculatorProvider>
    </Layout>
  );
};

export default Index;

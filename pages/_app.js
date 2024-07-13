import { useState } from 'react';
import Step1 from './step1';
import Step2a from './step2a';
import Step2b from './step2b';
import Step2c from './step2c';
import Step3 from './step3';
import Step4 from './step4';

const App = () => {
  const [stepData, setStepData] = useState({
    step1: {},
    step2a: {},
    step2b: {},
    step2c: {},
    step3: {},
    step4: {},
  });

  const handleStepDataChange = (step, data) => {
    setStepData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  return (
    <>
      <Step1 data={stepData.step1} onChange={(data) => handleStepDataChange('step1', data)} />
      <Step2a data={stepData.step2a} onChange={(data) => handleStepDataChange('step2a', data)} />
      <Step2b data={stepData.step2b} onChange={(data) => handleStepDataChange('step2b', data)} />
      <Step2c data={stepData.step2c} onChange={(data) => handleStepDataChange('step2c', data)} />
      <Step3 data={stepData.step3} onChange={(data) => handleStepDataChange('step3', data)} />
      <Step4 data={stepData.step4} onChange={(data) => handleStepDataChange('step4', data)} stepData={stepData} />
    </>
  );
};

export default App;

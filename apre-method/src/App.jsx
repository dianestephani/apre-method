import './App.css'
import OneRMCalculator from './OneRMCalculator'
import ApreAdjustmentCalc from './ApreAdjustmentCalc'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      padding: '1rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <OneRMCalculator />
      <ApreAdjustmentCalc />
    </div>
  )
}

export default App

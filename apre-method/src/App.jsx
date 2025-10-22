import './App.css'
import OneRMCalculator from './OneRMCalculator'
import ApreAdjustmentCalc from './ApreAdjustmentCalc'
import ApreRoutinesTable from './ApreRoutinesTable'

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
      <ApreRoutinesTable />
      <ApreAdjustmentCalc />
    </div>
  )
}

export default App

import { useState } from 'react'

function OneRMCalculator() {
  const [weightLifted, setWeightLifted] = useState('')
  const [repsAchieved, setRepsAchieved] = useState('')
  const [result, setResult] = useState('')

  const handleCalculate = () => {
    // Placeholder for calculation logic to be implemented later
    setResult('Calculation will be implemented here')
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">APRE Method Calculator</h1>

          <div className="card">
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="weightLifted" className="form-label">
                    Weight Lifted (lbs)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="weightLifted"
                    value={weightLifted}
                    onChange={(e) => setWeightLifted(e.target.value)}
                    placeholder="Enter weight"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="repsAchieved" className="form-label">
                    Repetitions Achieved
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="repsAchieved"
                    value={repsAchieved}
                    onChange={(e) => setRepsAchieved(e.target.value)}
                    placeholder="Enter reps"
                    required
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary w-100 mb-3"
                  onClick={handleCalculate}
                >
                  Calculate!
                </button>

                <div className="mb-3">
                  <label htmlFor="result" className="form-label">
                    Result
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="result"
                    value={result}
                    readOnly
                    placeholder="Result will appear here"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OneRMCalculator

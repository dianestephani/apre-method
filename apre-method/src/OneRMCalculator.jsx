import { useState } from 'react'

function OneRMCalculator() {
  const [weightLifted, setWeightLifted] = useState('')
  const [repsAchieved, setRepsAchieved] = useState('')
  const [result, setResult] = useState('')

  const handleCalculate = () => {
    // Calculate one-rep max using the formula: oneRM = weightLifted * (1 + (repsAchieved / 30))
    const weight = parseFloat(weightLifted)
    const reps = parseFloat(repsAchieved)

    if (isNaN(weight) || isNaN(reps) || weight <= 0 || reps <= 0) {
      setResult('Please enter valid positive numbers')
      return
    }

    const oneRM = weight * (1 + (reps / 30))
    setResult(oneRM.toFixed(2))
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 col-lg-6">
          <h1 className="mb-4">1RM Calculator</h1>

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

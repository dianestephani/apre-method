import { useState } from 'react'

function OneRMCalculator() {
  const [weightLifted, setWeightLifted] = useState('')
  const [repsAchieved, setRepsAchieved] = useState('')
  const [result, setResult] = useState('')
  const [result3RM, setResult3RM] = useState('')
  const [result6RM, setResult6RM] = useState('')
  const [result10RM, setResult10RM] = useState('')

  const handleCalculate = () => {
    // Calculate one-rep max using the formula: oneRM = weightLifted * (1 + (repsAchieved / 30))
    const weight = parseFloat(weightLifted)
    const reps = parseFloat(repsAchieved)

    if (isNaN(weight) || isNaN(reps) || weight <= 0 || reps <= 0) {
      setResult('Please enter valid positive numbers')
      setResult3RM('')
      setResult6RM('')
      setResult10RM('')
      return
    }

    const oneRM = weight * (1 + (reps / 30))
    setResult(oneRM.toFixed(2))

    // Calculate 3RM: 1RM * 0.91, rounded to nearest 0.5
    const threeRM = Math.round((oneRM * 0.91) * 2) / 2
    setResult3RM(threeRM.toFixed(1))

    // Calculate 6RM: 1RM * 0.85, rounded to nearest 0.5
    const sixRM = Math.round((oneRM * 0.85) * 2) / 2
    setResult6RM(sixRM.toFixed(1))

    // Calculate 10RM: 1RM * 0.75, rounded to nearest 0.5
    const tenRM = Math.round((oneRM * 0.75) * 2) / 2
    setResult10RM(tenRM.toFixed(1))
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 col-lg-6">
          <h1 className="mb-4">Max Calculator</h1>

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
                    1RM
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

                <div className="mb-3">
                  <label htmlFor="result3RM" className="form-label">
                    3RM
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="result3RM"
                    value={result3RM}
                    readOnly
                    placeholder="Result will appear here"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="result6RM" className="form-label">
                    6RM
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="result6RM"
                    value={result6RM}
                    readOnly
                    placeholder="Result will appear here"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="result10RM" className="form-label">
                    10RM
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="result10RM"
                    value={result10RM}
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

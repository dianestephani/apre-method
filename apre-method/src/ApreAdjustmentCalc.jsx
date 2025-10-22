import { useState } from 'react'

function ApreAdjustmentCalc() {
  const [selectedRM, setSelectedRM] = useState('3RM')

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-6">
          <h1 className="mb-4">APRE Adjustment Calculator</h1>

          <div className="card">
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label htmlFor="rmSelect" className="form-label">
                    Select RM
                  </label>
                  <select
                    className="form-select"
                    id="rmSelect"
                    value={selectedRM}
                    onChange={(e) => setSelectedRM(e.target.value)}
                  >
                    <option value="3RM">3RM</option>
                    <option value="6RM">6RM</option>
                    <option value="10RM">10RM</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApreAdjustmentCalc

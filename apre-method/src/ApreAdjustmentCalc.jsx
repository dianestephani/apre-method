import { useState } from 'react'

function ApreAdjustmentCalc() {
  const [selectedRM, setSelectedRM] = useState('3RM')
  const [selectedRange, setSelectedRange] = useState('')

  // Define options for each RM type
  const rangeOptions = {
    '3RM': ['1-2', '3-4', '5-6', '7+'],
    '6RM': ['0-2', '3-4', '5-7', '8-12', '13+'],
    '10RM': ['4-6', '7-8', '9-11', '12-16', '17+']
  }

  // Define adjustment messages based on RM and range
  const adjustmentMessages = {
    '3RM': {
      '1-2': 'Decrease by 5-10#',
      '3-4': 'Weight stays the same',
      '5-6': 'Increase by 5-10#',
      '7+': 'Increase by 10-15#'
    },
    '6RM': {
      '0-2': 'Decrease by 5-10#',
      '3-4': 'Decrease by 0-5#',
      '5-7': 'Weight stays the same',
      '8-12': 'Increase by 5-10#',
      '13+': 'Increase by 10-15#'
    },  
    '10RM': {
      '4-6': 'Decrease by 5-10#',
      '7-8': 'Decrease by 0-5#',
      '9-11': 'Weight stays the same',
      '12-16': 'Increase by 5-10#',
      '17+': 'Increase 10-15#'
    }  
  }

  // Handle RM selection change
  const handleRMChange = (e) => {
    setSelectedRM(e.target.value)
    setSelectedRange('') // Reset the range selection when RM changes
  }

  // Get the adjustment message based on current selections
  const getAdjustmentMessage = () => {
    if (!selectedRange) return ''
    return adjustmentMessages[selectedRM]?.[selectedRange] || ''
  }

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
                    onChange={handleRMChange}
                  >
                    <option value="3RM">3RM</option>
                    <option value="6RM">6RM</option>
                    <option value="10RM">10RM</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="rangeSelect" className="form-label">
                    Reps Achieved
                  </label>
                  <select
                    className="form-select"
                    id="rangeSelect"
                    value={selectedRange}
                    onChange={(e) => setSelectedRange(e.target.value)}
                  >
                    <option value="">Select range</option>
                    {rangeOptions[selectedRM].map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="adjustment" className="form-label">
                    Adjustment
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adjustment"
                    value={getAdjustmentMessage()}
                    readOnly
                    placeholder="Select options above"
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

export default ApreAdjustmentCalc

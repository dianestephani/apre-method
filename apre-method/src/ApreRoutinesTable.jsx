function ApreRoutinesTable() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-6">
          <h1 className="mb-4">APRE Routines</h1>

          <p className="mb-4">
            This table shows what your routine should look like, depending on which protocol you've chosen. To find your weight adjustment for the fourth set, enter the data from your third set into the calculator below.
          </p>

          <div className="card">
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Set</th>
                    <th>3RM Routine</th>
                    <th>6RM Routine</th>
                    <th>10RM Routine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>Warm up</td>
                    <td>Warm up</td>
                    <td>Warm Up</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>6 reps at 50% 3RM</td>
                    <td>10 reps at 50% 6RM</td>
                    <td>12 reps at 50% 10RM</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>3 reps at 75% 3RM</td>
                    <td>6 reps at 75% 6RM</td>
                    <td>10 reps at 75% 10RM</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Reps to failure at 3RM</td>
                    <td>Reps to failure at 6RM</td>
                    <td>Reps to failure at 10RM</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Adjusted reps to failure</td>
                    <td>Adjusted reps to failure</td>
                    <td>Adjusted reps to failure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApreRoutinesTable

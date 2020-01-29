const getLinearRegressionCoeff = (xValues, yValues) => {
  const findLineByLeastSquares = (xValues, yValues) => {
    var sum_x = 0;
    var sum_y = 0
    var sum_xy = 0
    var sum_xx = 0
    var count = 0

    /*
     * We'll use those variables for faster read/write access.
     */
    var x = 0
    var y = 0
    var values_length = xValues.length

    if (values_length != yValues.length) {
        throw new Error('The parameters values_x and values_y need to have same size!')
    }

    /*
     * Nothing to do.
     */
    if (values_length === 0) {
        return [ [], [] ]
    }

    /*
     * Calculate the sum for each of the parts necessary.
     */
    for (var v = 0; v < values_length; v++) {
        x = xValues[v]
        y = yValues[v]
        sum_x += x
        sum_y += y
        sum_xx += x*x
        sum_xy += x*y
        count++
    }

    /*
     * Calculate m and b for the formular:
     * y = x * m + b
     */
    var m = (count*sum_xy - sum_x*sum_y) / (count*sum_xx - sum_x*sum_x)
    var b = (sum_y/count) - (m*sum_x)/count

    /*
     * We will make the x and y result line now
     */
    var result_xValues = []
    var result_yValues = []

    for (var v = 0; v < values_length; v++) {
        x = xValues[v]
        y = x * m + b
        result_xValues.push(x)
        result_yValues.push(y)
    }

    return [result_xValues, result_yValues]
}

  const findLineCoef = (xValues, yValues) => {
    const xDiff = xValues[1] - xValues[0]
    const yDiff = yValues[1] - yValues[0]
    return yDiff / xDiff
  }
  
  const leastSquaresLine = findLineByLeastSquares(xValues, yValues)
  const lineCoef = findLineCoef(leastSquaresLine[0], leastSquaresLine[1])
  return lineCoef
}

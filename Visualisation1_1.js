{
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "data": {
        "url": "https://raw.githubusercontent.com/L-brierton/IVdata/master/Make%20Model%20Data%202016.csv",
        "format": {
          "type": "csv"
        }
      },
      "title": {
        "text": "Car Make vs Pass Rates",
        "anchor": "middle"
      },
      "width":1000,
      "height":400,
      "mark":"bar",
      "encoding": {
        "x": {
          "field": "VehicleMake",
          "type": "nominal",
		  "axis" :{
              "grid": false,
              "title": "Vehicle Make"},
          "sort": {
              "op": "mean",
              "field": "PASS %",
              "order": "descending"
          }
        },
        "y": {
          "field":  "PASS %",
          "type": "quantitative",
          "aggregate": "mean",
		  "axis" :{
            "grid": false, 
            "title": "Average Pass Percentage"
          }
          
        },
        "tooltip":{
            "aggregate": "count",
            "type":"quantitative"
        }
      }
    }
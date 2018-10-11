 {
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "data": {
        "url": "https://raw.githubusercontent.com/L-brierton/IVdata/master/Make%20Model%20Data%202016.csv",
        "format": {
          "type": "csv"
        }
      },
      "title": {
        "text": "Fig 2: Car Make vs Pass Rates for Top 10 Most Popular Irish Car Manufacturers",
        "anchor": "middle"
      },
      "width":600,
      "height":400,
      "transform": [
        {
            "filter": {
                "field": "VehicleMake", 
                "oneOf":["HYUNDAI", "VOLKSWAGEN","TOYOTA","FORD","NISSAN","SKODA","RENAULT","OPEL","KIA","AUDI"]
                }
        }
    ],
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
            "field":"Name",
            "type":"nominal"
        }
      }
    }
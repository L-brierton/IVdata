{
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "data": {
        "url": "https://raw.githubusercontent.com/L-brierton/IVdata/master/Make%20Model%20Data%202016.csv",
        "format": {
          "type": "csv"
        }
      },
      "title": {
        "text": "Year of Make vs Pass Rates",
        "anchor": "middle"
      },
      "width":1000,
      "height":400,
      "transform": [
           {
             "filter":{ 
                "field": "VehicleMake", 
                "oneOf":["HYUNDAI", "VOLKSWAGEN","TOYOTA","FORD","NISSAN","SKODA","RENAULT","OPEL","KIA","AUDI"]
              } 
            },
            {
              "filter": {
                "field": "YearOfBirth",
                "range": [1996, 2016]
              }
            }
      ],
      "mark":"line",
      "encoding": {
        "x": {
          "field": "YearOfBirth",
          "type": "ordinal",
		  "axis" :{
              "grid": false,
              "title": "Year of Make"}
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
        "color":{
            "field": "VehicleMake",
            "type": "nominal",
            "legend": {
              "title": "Vehicle Make"
              }
        }
      }
    }
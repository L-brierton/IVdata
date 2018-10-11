{
      "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
      "data": {
        "url": "https://raw.githubusercontent.com/L-brierton/IVdata/master/Make%20Model%20Data%202016.csv",
        "format": {
          "type": "csv"
        }
      },
      "transform": [
        {
             "filter":{ 
                "field": "VehicleMake", 
                "oneOf":["HYUNDAI", "VOLKSWAGEN","TOYOTA","FORD","NISSAN","SKODA","RENAULT","OPEL","KIA","AUDI"]
              } 
            }
      ],
      "title": {
        "text": "Top 10 Most Popular Car Makes compared by Fail Items",
        "anchor": "middle"
      },
      "repeat": {"column": ["Vehicle and Safety Equipment %","Lighting and Electrical %", "Steering and Suspension %", "Wheels and Tyres %"]},
 "spec":{
    "mark": "bar",
    "encoding": {
        "x": {
        "field": "VehicleMake",
        "type": "nominal",
        "axis": {"title": null},

        "sort": {
            "op": "mean",
            "field": {"repeat": "column"},
            "order": "descending"
        }
        },
        "y": {
        "field": {"repeat": "column"},
        "type": "quantitative",
        "aggregate": "mean"
        },
        "color": {
  	      "condition": {
  	        "test": "datum.VehicleMake == 'SKODA'",
  			  "value": "#FF7F50"
  	      },
  	      "value": "#00C5CD"
        }
    }
  }
    
}
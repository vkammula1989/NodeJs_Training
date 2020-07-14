const csv = require("csvtojson");
const fs = require("fs");
const path = require("path");
 
 class CsvToJsonConverter {
     constructor(){
        const csvFilePath = path.resolve(__dirname, "../csv/input.csv");
        const txtFilePath = path.resolve(__dirname, "../txt/output.txt");
        this.readStream = fs.createReadStream(csvFilePath);
        this.writeStream = fs.createWriteStream(txtFilePath);
     }
     convertCsvToJson(){
        const csvToJson = csv({
            colParser: {
              amount: "omit",
              price: "number"
            }
          })
            .preFileLine((fileLineString, lineIdx) => {
              if (lineIdx === 0) {
                return fileLineString.toLowerCase();
              }
              return fileLineString;
            })
            .on("error", err => {
              console.log(err);
            });
          
          this.readStream.pipe(csvToJson).pipe(this.writeStream);
     }
 }

 module.exports = new CsvToJsonConverter()
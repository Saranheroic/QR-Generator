import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs"

inquirer
  .prompt([
    {message: "Type the URL to generate your QR Code",name:"URL"}
  ])
  .then((answers) => {
    const g=answers.URL;
    var qr_svg = qr.image(g);
qr_svg.pipe(fs.createWriteStream('QR_img.png'));
 

  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      // Something else went wrong
    }
  });


//rows

async function ExportFile(drawList){
const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('My Sheet');
worksheet.columns=[
    {header:`#1`,key:"firstId",width:5},
    {header:`Choser Name`,key:"firtsName",width:20},
    {header:`Choser Surname`,key:"firstSurname",width:25},
    {header:` `,key:"blank",width:5},
    {header:`#2`,key:"secondId",width:5},
    {header:`Chosen User Name`,key:"secondName",width:20},
    {header:`Chosen User Surname`,key:"secondSurname",width:25},

]
worksheet.getRow(1).font = { bold: true };
worksheet.getCell('A1').border =setBorder('thick')
worksheet.getCell('B1').border =setBorder('thick')
worksheet.getCell('C1').border =setBorder('thick')
worksheet.getCell('D1').border =setBorder('thick')
worksheet.getCell('E1').border =setBorder('thick')
worksheet.getCell('F1').border =setBorder('thick')
worksheet.getCell('G1').border =setBorder('thick')

worksheet.getCell('A1').fill=setSolidColor('73A9AD');
worksheet.getCell('B1').fill=setSolidColor('73A9AD');
worksheet.getCell('C1').fill=setSolidColor('73A9AD');
worksheet.getCell('D1').fill=setSolidColor('73A9AD');
worksheet.getCell('E1').fill=setSolidColor('73A9AD');
worksheet.getCell('F1').fill=setSolidColor('73A9AD');
worksheet.getCell('G1').fill=setSolidColor('73A9AD');
for(let i=0;i<drawList.length;i++){
    if (i%2==0) {
        worksheet.getCell('A'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('B'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('C'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('D'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('E'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('F'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('G'+(i+2)).fill=setSolidColor('C4DFAA');
    }
    else{
        worksheet.getCell('A'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('B'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('C'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('D'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('E'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('F'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('G'+(i+2)).fill=setSolidColor('90C8AC');
    }
   
    worksheet.addRow()
    worksheet.getCell('A'+(i+2)).border =setBorder('thin');
    worksheet.getCell('B'+(i+2)).border =setBorder('thin');
    worksheet.getCell('C'+(i+2)).border =setBorder('thin');
    worksheet.getCell('D'+(i+2)).border =setBorder('thin');
    worksheet.getCell('E'+(i+2)).border =setBorder('thin');
    worksheet.getCell('F'+(i+2)).border =setBorder('thin');
    worksheet.getCell('G'+(i+2)).border =setBorder('thin');


    worksheet.getCell('A'+(i+2)).value=drawList[i].choserUser.id;
    worksheet.getCell('B'+(i+2)).value=drawList[i].choserUser.name;
    worksheet.getCell('C'+(i+2)).value=drawList[i].choserUser.surname;
    worksheet.getCell('D'+(i+2)).value='---->';
    worksheet.getCell('E'+(i+2)).value=drawList[i].chosenUser.id;
    worksheet.getCell('F'+(i+2)).value=drawList[i].chosenUser.name;
    worksheet.getCell('G'+(i+2)).value=drawList[i].chosenUser.surname;


}
const buffer = workbook.xlsx.writeBuffer();
console.log(worksheet)
return buffer
function setBorder(border){
    return  {
      top: {style:border},
      left: {style:border},
      bottom: {style:border},
      right: {style:border}
    };
  }
}
function setSolidColor(color){
    return  {
      type: 'pattern',
    pattern:'solid',
    fgColor:{argb:color},
      
    };
  }
export default{
    ExportFile
}
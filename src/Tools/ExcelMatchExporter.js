

//rows

async function ExportFile(matchList){
const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('My Sheet');
worksheet.columns=[
    {header:`#1`,key:"firstId",width:5},
    {header:`First Person Name`,key:"firtsName",width:20},
    {header:`First Person Surname`,key:"firstSurname",width:25},
    {header:`#2`,key:"secondId",width:5},
    {header:`Second Person Name`,key:"secondName",width:20},
    {header:`Second Person Surname`,key:"secondSurname",width:25},

]
worksheet.getRow(1).font = { bold: true };
worksheet.getCell('A1').border =setBorder('thick')
worksheet.getCell('B1').border =setBorder('thick')
worksheet.getCell('C1').border =setBorder('thick')
worksheet.getCell('D1').border =setBorder('thick')
worksheet.getCell('E1').border =setBorder('thick')
worksheet.getCell('F1').border =setBorder('thick')

worksheet.getCell('A1').fill=setSolidColor('73A9AD');
worksheet.getCell('B1').fill=setSolidColor('73A9AD');
worksheet.getCell('C1').fill=setSolidColor('73A9AD');
worksheet.getCell('D1').fill=setSolidColor('73A9AD');
worksheet.getCell('E1').fill=setSolidColor('73A9AD');
worksheet.getCell('F1').fill=setSolidColor('73A9AD');
for(let i=0;i<matchList.length;i++){
    if (i%2==0) {
        worksheet.getCell('A'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('B'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('C'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('D'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('E'+(i+2)).fill=setSolidColor('C4DFAA');
        worksheet.getCell('F'+(i+2)).fill=setSolidColor('C4DFAA');
    }
    else{
        worksheet.getCell('A'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('B'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('C'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('D'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('E'+(i+2)).fill=setSolidColor('90C8AC');
        worksheet.getCell('F'+(i+2)).fill=setSolidColor('90C8AC');
    }
    if(i!=matchList.length-1 ){
    worksheet.addRow()
    worksheet.getCell('A'+(i+2)).border =setBorder('thin');
    worksheet.getCell('B'+(i+2)).border =setBorder('thin');
    worksheet.getCell('C'+(i+2)).border =setBorder('thin');
    worksheet.getCell('D'+(i+2)).border =setBorder('thin');
    worksheet.getCell('E'+(i+2)).border =setBorder('thin');
    worksheet.getCell('F'+(i+2)).border =setBorder('thin');


    worksheet.getCell('A'+(i+2)).value=matchList[i].firstUser.id;
    worksheet.getCell('B'+(i+2)).value=matchList[i].firstUser.name;
    worksheet.getCell('C'+(i+2)).value=matchList[i].firstUser.surname;
    worksheet.getCell('D'+(i+2)).value=matchList[i].secondUser.id;
    worksheet.getCell('E'+(i+2)).value=matchList[i].secondUser.name;
    worksheet.getCell('F'+(i+2)).value=matchList[i].secondUser.surname;
    }
    else if(i==matchList.length-1 && matchList[matchList.length-1].secondUser.id==0){
        worksheet.addRow()
        worksheet.getCell('A'+(i+2)).border =setBorder('thin');
        worksheet.getCell('B'+(i+2)).border =setBorder('thin');
        worksheet.getCell('C'+(i+2)).border =setBorder('thin');
        worksheet.getCell('D'+(i+2)).border =setBorder('thin');
        worksheet.getCell('E'+(i+2)).border =setBorder('thin');
        worksheet.getCell('F'+(i+2)).border =setBorder('thin');

    
        worksheet.getCell('A'+(i+2)).value=matchList[i].firstUser.id;
        worksheet.getCell('B'+(i+2)).value=matchList[i].firstUser.name;
        worksheet.getCell('C'+(i+2)).value=matchList[i].firstUser.surname;
    }
    else if(i==matchList.length-1 && matchList[matchList.length-1].secondUser.id!=0){
        worksheet.addRow()
        worksheet.getCell('A'+(i+2)).border =setBorder('thin');
        worksheet.getCell('B'+(i+2)).border =setBorder('thin');
        worksheet.getCell('C'+(i+2)).border =setBorder('thin');
        worksheet.getCell('D'+(i+2)).border =setBorder('thin');
        worksheet.getCell('E'+(i+2)).border =setBorder('thin');
        worksheet.getCell('F'+(i+2)).border =setBorder('thin');

    
        worksheet.getCell('A'+(i+2)).value=matchList[i].firstUser.id;
        worksheet.getCell('B'+(i+2)).value=matchList[i].firstUser.name;
        worksheet.getCell('C'+(i+2)).value=matchList[i].firstUser.surname;
        worksheet.getCell('D'+(i+2)).value=matchList[i].secondUser.id;
        worksheet.getCell('E'+(i+2)).value=matchList[i].secondUser.name;
        worksheet.getCell('F'+(i+2)).value=matchList[i].secondUser.surname;
    }
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
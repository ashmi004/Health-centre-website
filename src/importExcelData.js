// src/importExcelData.js

require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');
const ExcelJS = require('exceljs');
const { connectDBstudent, disconnectDBstudent } = require('./lib/mongodbstudent');
const Student = require('./models/student');

const excelFilePath = 'C:\\Users\\91932\\Desktop\\student.xlsx'; // Update with your local path

async function importDataFromExcel() {
  try {
    // Connect to MongoDB
    await connectDBstudent();

    // Load the workbook
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);

    // Assuming data is in the first worksheet
    const worksheet = workbook.getWorksheet(1);
    const students = [];

    // Iterate over each row (assuming first row is headers)
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber !== 1) { // Skip header row
        const studentData = {
          rollNo: row.getCell(1).value,
          name: row.getCell(2).value,
          email: row.getCell(3).value.text || row.getCell(3).value,
          department: row.getCell(4).value,
          
        };
        students.push(studentData);
      }
    });

    // Insert data into MongoDB
    const result = await Student.insertMany(students);
    console.log(`${result.length} records inserted successfully.`);
    
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    // Disconnect from MongoDB
    await disconnectDBstudent();
  }
}

// Call the import function
importDataFromExcel();

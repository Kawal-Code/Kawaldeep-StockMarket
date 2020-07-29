using StockMarket.ExcelAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.OleDb;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Data;

namespace StockMarket.ExcelAPI.Repositories
{
    public class UploadRepository : IUploadRepository
    {

        StockDbContext db = new StockDbContext();
        public void LoadData(string filePath)
        {
            var list = new List<StockPrice>();
            FileInfo info = new FileInfo(filePath);
            string fileExtension = info.Extension;
            string excelConString = "";
            //Get connection string using extension
            switch (fileExtension)
            {
                // If uploaded file is Excel 1997 - 2007.
                case ".xls":
                    excelConString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source={0};Extended Properties='Excel 8.0;HDR=YES'";
                    break;
                //If uploaded file is Excel 2007 and above
                case ".xlsx":
                    excelConString = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source={0};Extended Properties='Excel 8.0;HDR=YES'";
                    break;
            }
            // Read data from first sheet of excel into datatable
            DataTable dt = new DataTable();
            excelConString = string.Format(excelConString, filePath);

            using (OleDbConnection excelOledbConnection = new OleDbConnection(excelConString))
            {
                using (OleDbCommand excelDbCommand = new OleDbCommand())
                {
                    using (OleDbDataAdapter excelDataAdapter = new OleDbDataAdapter())
                    {
                        excelDbCommand.Connection = excelOledbConnection;

                        excelOledbConnection.Open();
                        // Get schema from excel sheet
                        DataTable excelSchema = GetSchemaFromExcel(excelOledbConnection);
                        // Get sheet name
                        string sheetName = excelSchema.Rows[0]["TABLE_NAME"].ToString();
                        excelOledbConnection.Close();

                        // Read Data from First Sheet.
                        excelOledbConnection.Open();
                        excelDbCommand.CommandText = "SELECT * From [" + sheetName + "]";
                        excelDataAdapter.SelectCommand = excelDbCommand;
                        //Fill datatable from adapter
                        excelDataAdapter.Fill(dt);
                        excelOledbConnection.Close();
                        foreach (DataRow r in dt.Rows)
                        {
                            list.Add(
                                new StockPrice()
                                {
                                    CompanyCode = int.Parse(r[0].ToString().Trim()),
                                    StockExchange = r[1].ToString().Trim(),
                                    CurrentPrice = r[2].ToString().Trim(),
                                    Date = r[3].ToString().Trim(),
                                    Time = r[4].ToString().Trim()

                                }
                                );
                        }
                        db.StockPrice.AddRange(list);  //insert list of rows to table
                        db.SaveChanges();
                    }
                }

            }

        }
        private static DataTable GetSchemaFromExcel(OleDbConnection excelOledbConnection)
        {
            return excelOledbConnection.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, null);
        }
    }
}

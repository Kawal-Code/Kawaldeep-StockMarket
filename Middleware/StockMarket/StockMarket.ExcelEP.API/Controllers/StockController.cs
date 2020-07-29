using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using StockMarket.ExcelEP.API.Models;
using System.Text;

namespace StockMarket.ExcelEP.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Stock")]
    public class StockController : Controller
    {
        //[Obsolete]
        //private readonly IHostingEnvironment _hostingEnvironment;
        StockDbContext _db = new StockDbContext();

        //public StockController(IHostingEnvironment hostingEnvironment, StockDbContext db)
        //{
        //    //_hostingEnvironment = hostingEnvironment;
        //    //_db = db;
        //}


        [HttpGet]
        [Route("ImportStock")]
        public IList<StockPrice> ImportStock()
        {
            string filePath = @"C:\Users\socgend44\Desktop\Upload\sample_stock_data.xlsx";

            //  string rootFolder = _hostingEnvironment.WebRootPath;
            // string fileName = @"ImportCustomers.xlsx";
            //  FileInfo file = new FileInfo(Path.Combine(rootFolder, fileName));

            FileInfo file = new FileInfo(filePath);
            string fileName = file.Name;
            using (ExcelPackage package = new ExcelPackage(file))
            {
                ExcelWorksheet workSheet = package.Workbook.Worksheets["Sheet1"];
                int totalRows = workSheet.Dimension.Rows;

                List<StockPrice> stockPrices = new List<StockPrice>();

                for (int i = 2; i <= totalRows; i++)
                {
                    stockPrices.Add(new StockPrice
                    {
                        CompanyCode = int.Parse(workSheet.Cells[i, 1].Value.ToString().Trim()),
                        StockExchange = workSheet.Cells[i, 2].Value.ToString().Trim(),
                        CurrentPrice = workSheet.Cells[i, 3].Value.ToString().Trim(),
                        Date = workSheet.Cells[i, 4].Value.ToString().Trim(),
                        Time = workSheet.Cells[i, 5].Value.ToString().Trim(),
                    });
                }

                _db.StockPrice.AddRange(stockPrices);
                _db.SaveChanges();

                return stockPrices;
            }
        }

        //[HttpGet]
        //[Route("ExportStock")]
        //public string ExportStock()
        //{
        //    string filePath = @"C:\Users\socgend44\Desktop\Upload\sample_stock_data.xlsx";
        //    //string rootFolder = _hostingEnvironment.WebRootPath;
        //    //string fileName = @"ExportCustomers.xlsx";

        //    //FileInfo file = new FileInfo(Path.Combine(rootFolder, fileName));

        //    using (ExcelPackage package = new ExcelPackage(file))
        //    {

        //       IList<StockPrice> stockList = _db.StockPrice.ToList();

        //        ExcelWorksheet worksheet = package.Workbook.Worksheets.Add("Stock");
        //        int totalRows = stockList.Count();

        //        worksheet.Cells[1, 1].Value = "Company Code";
        //        worksheet.Cells[1, 2].Value = "Stock Exchange";
        //        worksheet.Cells[1, 3].Value = "Stock Date";
        //        worksheet.Cells[1, 4].Value = "Stock Time";
        //        int i = 0;
        //        for (int row = 2; row <= totalRows + 1; row++)
            //    {
            //        worksheet.Cells[row, 1].Value = stockList[i].CompanyCode;
            //        worksheet.Cells[row, 2].Value = stockList[i].StockExchange;
            //        worksheet.Cells[row, 3].Value = stockList[i].Date;
            //        worksheet.Cells[row, 4].Value = stockList[i].Time;
            //        i++;
            //    }

            //    package.Save();

            //}

        //    return " Customer list has been exported successfully";
        //}
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.ExcelAPI.Services;

namespace StockMarket.ExcelAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        UploadService service = new UploadService();
        [HttpGet]
        [Route("LoadData")]
        public IActionResult LoadExcel()
        {
            try
            {
                string path = @"C:\Users\socgend44\Desktop\sample_stock_data.xlsx"; 
                service.LoadData(path);
                return Ok("Records Uploaded");

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }
    }
}

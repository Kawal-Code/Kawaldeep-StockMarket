using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.UserAPI.Models;
using StockMarket.UserAPI.Services;

namespace StockMarket.UserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BarChartController : ControllerBase
    {

        BarChartService service = new BarChartService();
        [HttpGet]
        [Route("GetCharts")]
        public IActionResult Get()
        {
            return Ok(service.GetAll());
         }

      
    }
}

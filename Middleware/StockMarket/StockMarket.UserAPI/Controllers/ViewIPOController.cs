using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.UserAPI.Services;
using StockMarket.UserAPI.Models;

namespace StockMarket.UserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViewIPOController : ControllerBase
    {
        ViewIPoService service = new ViewIPoService();
        [HttpGet]
        [Route("GetIPOs")]
        public IActionResult Get()
        {
            return Ok(service.GetAll());


        }
    }
}

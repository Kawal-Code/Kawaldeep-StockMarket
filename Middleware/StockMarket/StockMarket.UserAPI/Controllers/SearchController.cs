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
    public class SearchController : ControllerBase
    {
        SearchService service = new SearchService();
        [HttpGet]
        [Route("GetAll")]
        public IActionResult Get()
        {
            return Ok(service.GetAll());


        }
        [HttpGet]
        [Route("GetById/{id}")]
        public IActionResult Get(string id)
        {
            CompanyRelated c = service.GetCompany(id);
            if (c == null)
                return NotFound("Invalid Id");
            else
                return Ok(c);
        }
    }
}

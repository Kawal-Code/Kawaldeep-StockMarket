using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AdminAPI.Models;
using StockMarket.AdminAPI.Services;

namespace StockMarket.AdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManageStockController : ControllerBase
    {
        StockExchangeService service = new StockExchangeService();
        [HttpGet]
        [Route("GetStockExchangeList")]
        public IActionResult Get()
        {
            return Ok(service.GetStockExchangeList());
        }
        [HttpGet]
        [Route("GetById/{id}")]
        public IActionResult Get(int id)
        {
            StockExchange c = service.GetStockExchage(id);
            if (c == null)
                return NotFound("Invalid Id");
            else
                return Ok(c);
        }
        [HttpPost]

        [Route("Add")]
        public IActionResult Post(StockExchange item)
        {
            service.Add(item);
            return Ok("Record Added");
        }
        [HttpDelete]

        [Route("Delete/{Id}")]
        public IActionResult Delete(string Id)
        {
            service.Delete(Id);
            return Ok("Record Deleted");
        }
        [HttpPut]
        [Route("Edit")]
        public IActionResult Put(StockExchange item)
        {
            service.Edit(item);
            return Ok("Record Updated");
        }

        [HttpGet]
        [Route("GetCompanies")]
        public IActionResult Gett(StockExchange stockex)
        {
            
                return Ok(service.GetCompanies(stockex));


        }
    }
}

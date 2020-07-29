using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AdminAPI.Services;
using StockMarket.AdminAPI.Models;
using StockMarket.AdminAPI.Repositories;



namespace StockMarket.AdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyRelatedController : ControllerBase
    {
        CompanyRelatedService service = new CompanyRelatedService();
        [HttpGet]
        [Route("GetCompanies")]
        public IActionResult Get()
        {
            return Ok(service.GetCompanies());
                
        
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
        [HttpPost]

        [Route("Add")]
        public IActionResult Post(CompanyRelated item)
        {
            service.Add(item);
            return Ok("Record Added");
        }
        [HttpDelete]


        [Route("Delete/{id}")]
        public IActionResult Delete(string id)
        {
            service.Delete(id);
            return Ok("Record Deleted");
        }
        [HttpPut]
        [Route("Edit")]
        public IActionResult Put(CompanyRelated item)
        {
            service.Edit(item);
            return Ok("Record Updated");
        }
        [HttpPut]
        [Route("UpdateIPO")]
        public IActionResult Put(IposPlanned item)
        {
            service.Update(item);
            return Ok("Record Updated");
        }
        [HttpGet]
        [Route("GetIPO")]
        public IActionResult Gett()
        {
            return Ok(service.GetIpo());


        }


    }
}

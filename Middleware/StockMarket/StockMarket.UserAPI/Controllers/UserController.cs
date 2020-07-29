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
    public class UserController : ControllerBase
    {
      UpdateService service = new UpdateService();

        [HttpPut]
        [Route("Update")]
        public IActionResult Put(User item)
        {
            service.Update(item);
            return Ok("Record Updated");
        }
       
    }
}

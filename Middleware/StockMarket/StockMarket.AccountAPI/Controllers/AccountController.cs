using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockMarket.AccountAPI.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using StockMarket.AccountAPI.Models;

namespace StockMarket.AccountAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration configuration;
        public AccountController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        UserService service = new UserService();
        
        [HttpGet]
        [Route("Login/{UserName}/{Password}")]
        public IActionResult Login(string Username,string Password)
        {
            Token t = service.Login(Username, Password);
            if (t != null)
                return Ok(t);
            else
                return NotFound("Invalid User Credentials");
        }
        
        [HttpPost]
        [Route("SignUp")]
        public IActionResult Post(User item)
        {
            service.Add(item);
            return Ok("User Added Sucessfully");
        }

        [Route("Validate/{UserName}/{Password}")]
        public IActionResult Validate(string uname, string pwd)
        {
            if (uname == "Admin" && pwd == "12345")
            {
                return Ok(GenerateJwtToken(uname));
            }
            else
                return NotFound("Invalid User");
        }
        private Token GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            var response = new Token
            {
                uname = uname,
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };
            return response;
        }

    }
}

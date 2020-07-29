using StockMarket.AccountAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AccountAPI.Services
{
    interface IUserService
    {
        Token Login(string UserName, string Password);
        public void Add(User item);
    }
}

using StockMarket.AccountAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StockMarket.AccountAPI.Models;

namespace StockMarket.AccountAPI.Services
{
    public class UserService : IUserService
    {
        UserRepository _repo = new UserRepository();
        

        public void Add(User item)
        {
            _repo.Add(item);
        }
        

        public Token Login(string UserName, string Password)
        {
            return _repo.Login(UserName, Password);
        }
    }
}

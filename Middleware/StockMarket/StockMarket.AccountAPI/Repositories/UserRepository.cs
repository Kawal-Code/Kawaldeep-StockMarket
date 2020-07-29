using StockMarket.AccountAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Principal;

namespace StockMarket.AccountAPI.Repositories
{
    public class UserRepository :IUserRepository
    {
        
        StockDbContext db = new StockDbContext();
        public void Add(User item)
        {
            db.User.Add(item);
            db.SaveChanges();
        }
        

        public Token Login(string UserName, string Password)
        {
            User user = db.User.SingleOrDefault(u => u.UserName == UserName && u.Password == Password);
            if(user!=null)
            {
               return new Token() { token = "Some token" };
            }
            else
            {
                return null;
            }
        }
    }
}

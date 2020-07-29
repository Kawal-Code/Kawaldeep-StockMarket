using StockMarket.UserAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Repositories
{
    public class UpdateRepository : IUpdateRepository
    {
        private StockDbContext db;

        public object User { get; internal set; }

        public UpdateRepository()
        { db = new StockDbContext(); }

        public void Update(User item)
        {
           
            db.User.Update(item);
            db.SaveChanges();
        }

      
    }
}

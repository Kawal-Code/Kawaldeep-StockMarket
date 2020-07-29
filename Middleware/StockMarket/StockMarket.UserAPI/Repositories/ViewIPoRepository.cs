using StockMarket.UserAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Repositories
{
    public class ViewIPoRepository : IViewIPoRepository
    {
        private StockDbContext db;

        public object CompanyRelated { get; internal set; }

        public ViewIPoRepository()
        { db = new StockDbContext(); }
        public List<IposPlanned> GetAll()
        {
            return db.IposPlanned.OrderBy(s=>s.CompanyName).ToList();
        }
    }
}

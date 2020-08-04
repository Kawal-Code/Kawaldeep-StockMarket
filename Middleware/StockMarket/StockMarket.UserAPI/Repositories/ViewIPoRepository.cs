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
        private StockDbContext stockDbContext;

        public object CompanyRelated { get; internal set; }

        public ViewIPoRepository()
        { db = new StockDbContext(); }

        public ViewIPoRepository(StockDbContext stockDbContext)
        {
            this.stockDbContext = stockDbContext;
        }

        public List<IposPlanned> GetAll()
        {
            return db.IposPlanned.OrderBy(s=>s.CompanyName).ToList();
        }
    }
}

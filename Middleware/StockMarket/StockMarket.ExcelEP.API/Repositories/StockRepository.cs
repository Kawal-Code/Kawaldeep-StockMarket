using StockMarket.ExcelEP.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.ExcelEP.API.Repositories
{
    public class StockRepository : IStockRepository
    {
        private StockDbContext db;

        public object StockPrice { get; internal set; }

        public StockRepository()
        { db = new StockDbContext(); }

        public List<StockPrice> GetCompanies()
        {
            return db.StockPrice.ToList();
        }
    }
}

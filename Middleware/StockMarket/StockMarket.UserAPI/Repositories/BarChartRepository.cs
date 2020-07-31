using StockMarket.UserAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Repositories
{
    public class BarChartRepository : IBarChartRepository
    {


        private StockDbContext db;

        public object IposPlanned { get; internal set; }

        public BarChartRepository()
        { db = new StockDbContext(); }


        public List<IposPlanned> GetAll()
        {
           
            return db.IposPlanned.ToList();
        }
    }
}

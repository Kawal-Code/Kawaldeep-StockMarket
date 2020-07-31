using StockMarket.UserAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Repositories
{
    interface IBarChartRepository
    {
        public List<IposPlanned> GetAll();
    }
}

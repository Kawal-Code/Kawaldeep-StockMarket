using StockMarket.UserAPI.Models;
using StockMarket.UserAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Services
{
    public class BarChartService: IBarChartService
    {
        BarChartRepository _repo = new BarChartRepository();

        public List<IposPlanned> GetAll()
        {
            return _repo.GetAll();
        }
    }
}

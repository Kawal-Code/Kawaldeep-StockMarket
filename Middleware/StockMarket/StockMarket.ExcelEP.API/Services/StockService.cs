using StockMarket.ExcelEP.API.Models;
using StockMarket.ExcelEP.API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.ExcelEP.API.Services
{
    public class StockService : IStockService
    {
        StockRepository _repo = new StockRepository();
        public List<StockPrice> GetCompanies()
        {
            return _repo.GetCompanies();
        }
    }
}

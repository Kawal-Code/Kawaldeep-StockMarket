using StockMarket.ExcelEP.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.ExcelEP.API.Repositories
{
    interface IStockRepository
    {
        public List<StockPrice> GetCompanies();
    }
}

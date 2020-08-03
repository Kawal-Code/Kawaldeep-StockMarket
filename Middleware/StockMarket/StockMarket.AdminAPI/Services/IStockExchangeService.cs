using StockMarket.AdminAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AdminAPI.Services
{
    interface IStockExchangeService
    {
        public List<StockExchange> GetStockExchangeList();

        public StockExchange GetStockExchage(int id);
        public void Add(StockExchange item);
        public void Delete(string Id);
        public void Edit(StockExchange item);
        public List<IposPlanned> GetCompanies(StockExchange stockex);
    }
}

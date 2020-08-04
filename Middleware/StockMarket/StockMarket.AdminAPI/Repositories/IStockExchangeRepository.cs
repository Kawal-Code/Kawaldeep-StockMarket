using StockMarket.AdminAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AdminAPI.Repositories
{
    interface IStockExchangeRepository
    {
        public List<StockExchange> GetStockExchangeList();
        public List<IposPlanned> GetCompanies(StockExchange stockex);
        public StockExchange GetStockExchage(int id);
        public void Add(StockExchange item);
        public void Delete(int Id);
        public void Edit(StockExchange item);

    }
}

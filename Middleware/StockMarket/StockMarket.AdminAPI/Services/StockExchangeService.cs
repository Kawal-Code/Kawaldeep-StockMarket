using StockMarket.AdminAPI.Models;
using StockMarket.AdminAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AdminAPI.Services
{
    public class StockExchangeService : IStockExchangeService
    {
        StockExchangeRepository _repo = new StockExchangeRepository();
        public void Add(StockExchange item)
        {
            _repo.Add(item);
        }

        public void Delete(string Id)
        {
            _repo.Delete(Id);
        }

        public void Edit(StockExchange item)
        {
            _repo.Edit(item);
        }

        public List<IposPlanned> GetCompanies(StockExchange stockex)
        {
            return _repo.GetCompanies(stockex);
        }

        public StockExchange GetStockExchage(int id)
        {
            return _repo.GetStockExchage(id);
        }

        public List<StockExchange> GetStockExchangeList()
        {
            return _repo.GetStockExchangeList();
        }
    }
}

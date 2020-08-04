using Microsoft.EntityFrameworkCore.Storage;
using StockMarket.AdminAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AdminAPI.Repositories
{
    public class StockExchangeRepository : IStockExchangeRepository
    {
        private StockDbContext db;

        public object StockExchange { get; internal set; }

        public StockExchangeRepository()
        { db = new StockDbContext(); }

        private readonly StockDbContext context;
        public StockExchangeRepository(StockDbContext _context)
        {
            db = _context;
        }
        public void Add(StockExchange item)
        {
            db.StockExchange.Add(item);
            db.SaveChanges();
        }

        public void Delete(int Id)
        {
            StockExchange c = db.StockExchange.Find(Id);
            db.StockExchange.Remove(c);
            db.SaveChanges();
        }

        public void Edit(StockExchange item)
        {
            db.StockExchange.Update(item);
            db.SaveChanges();
        }

        public StockExchange GetStockExchage(int id)
        {
            return db.StockExchange.Find(id);
        }

        public List<StockExchange> GetStockExchangeList()
        {
            return db.StockExchange.ToList();
        }

        public List<IposPlanned> GetCompanies(StockExchange stockex)
        {
            throw new NotImplementedException();
        }
    }
}

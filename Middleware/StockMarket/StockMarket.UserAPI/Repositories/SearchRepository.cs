using StockMarket.UserAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Repositories
{
    public class SearchRepository : ISearchRepository
    {
        private StockDbContext db;

        public object CompanyRelated { get; internal set; }

        public SearchRepository()
        { db = new StockDbContext(); }
        public List<CompanyRelated> GetAll()
        {
            return db.CompanyRelated.ToList();
        }

        public CompanyRelated GetCompany(string id)
        {
            return db.CompanyRelated.SingleOrDefault(c => c.CompanyName == id);
        }
    }
}

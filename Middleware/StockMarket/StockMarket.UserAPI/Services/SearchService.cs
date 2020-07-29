using StockMarket.UserAPI.Models;
using StockMarket.UserAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Services
{
    public class SearchService : ISearchService
    {

        SearchRepository _repo = new SearchRepository();
       
        public List<CompanyRelated> GetAll()
        {
            return _repo.GetAll();
        }

        public CompanyRelated GetCompany(string id)
        {
            return _repo.GetCompany(id);
        }


    }
}


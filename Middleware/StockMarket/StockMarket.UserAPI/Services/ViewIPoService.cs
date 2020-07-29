using StockMarket.UserAPI.Models;
using StockMarket.UserAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Services
{
    public class ViewIPoService : IViewIPoRepository
    {
        ViewIPoRepository _repo = new ViewIPoRepository();

        public List<IposPlanned> GetAll()
        {
            return _repo.GetAll();
        
    }
    }
}

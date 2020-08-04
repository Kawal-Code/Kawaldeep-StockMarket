using StockMarket.UserAPI.Models;
using StockMarket.UserAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace StockMarket.UserAPI.Services
{
    public class UpdateService : IUpdateService
    {
        UpdateRepository _repo = new UpdateRepository();
       

        public void Update(User item)
        {
            _repo.Update(item);
        }
    }
}

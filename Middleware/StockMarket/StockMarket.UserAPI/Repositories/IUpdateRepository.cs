using StockMarket.UserAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Repositories
{
    interface IUpdateRepository
    {

        public void Update(User item);
       
    }
}

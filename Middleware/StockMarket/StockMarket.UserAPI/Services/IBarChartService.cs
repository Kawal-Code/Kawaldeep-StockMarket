using StockMarket.UserAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.UserAPI.Services
{
    interface IBarChartService
    {
        public List<IposPlanned> GetAll();
    }
}










/*IposPlanned = db.IposPlanned.ToList();
            if(ipo !=null)
            {
                return ipo;
            }
            else
            {
                return null;
            }*/
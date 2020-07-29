using System;
using System.Collections.Generic;

namespace StockMarket.AccountAPI.Models
{
    public partial class IposPlanned
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string StockExchange { get; set; }
        public int? PricePerShare { get; set; }
        public int? TotalShares { get; set; }
        public DateTime OpenDateTime { get; set; }
        public string Remarks { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace StockMarket.ExcelAPI.Models
{
    public partial class StockData
    {
        public int CompanyCode { get; set; }
        public string StockExchange { get; set; }
        public double? CurrentPrice { get; set; }
        public DateTime? Date { get; set; }
        public TimeSpan? Time { get; set; }
    }
}

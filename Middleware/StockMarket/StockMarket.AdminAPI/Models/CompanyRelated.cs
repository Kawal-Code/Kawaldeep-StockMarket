using System;
using System.Collections.Generic;

namespace StockMarket.AdminAPI.Models
{
    public partial class CompanyRelated
    {
        public string CompanyName { get; set; }
        public string Turnover { get; set; }
        public string Ceo { get; set; }
        public string BoardofDirectors { get; set; }
        public string ListInStockExchanges { get; set; }
    }
}

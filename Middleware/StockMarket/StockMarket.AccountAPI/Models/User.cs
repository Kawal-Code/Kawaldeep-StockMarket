using System;
using System.Collections.Generic;

namespace StockMarket.AccountAPI.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string UserType { get; set; }
        public string MobileNumber { get; set; }
        public string Email { get; set; }
    }
}

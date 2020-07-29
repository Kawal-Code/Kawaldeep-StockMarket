using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace StockMarket.AdminAPI.Models
{
    public partial class User
    { 
        [Required]
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        [RegularExpression("[a-z0-9]{5}")]
        public string Password { get; set; }
        public string UserType { get; set; }
       
        public string MobileNumber { get; set; }
        public string Email { get; set; }
    }
}

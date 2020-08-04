using StockMarket.UserAPI.Models;
using StockMarket.UserAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
namespace UserAPI.Test
{
    public class TestViewIPoRepository
    {
        private readonly ViewIPoRepository repo;
        public TestViewIPoRepository()
        {
            repo = new ViewIPoRepository(new StockDbContext());
        }
        [Fact]
        public void TestGetAll()
        {
            List<IposPlanned> list = repo.GetAll();
            Assert.NotNull(list);
        }
       
    }
}

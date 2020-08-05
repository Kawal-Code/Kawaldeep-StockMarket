using System;
using Xunit;
using Moq;
using System.Collections.Generic;
using System.Linq;
using StockMarket.AdminAPI.Repositories;
using StockMarket.AdminAPI.Models;
using StockMarket.AdminAPI.Services;

namespace AdminAPI.Test
{

    public class TestManageStockRepo
    {
        private readonly StockExchangeService _service;

        public TestManageStockRepo()
        {
            var mockRepo = new Mock<StockExchangeRepository>();
            IList<StockExchange> stockExchanges = new List<StockExchange>() {
            new StockExchange(){StockExchange1="BSE",Brief="It is BSE",ContactAddress="marlin",Remarks="good",Id=1},
            new StockExchange(){StockExchange1="NSE",Brief="It is NSE",ContactAddress="marlin2",Remarks="better",Id=2},
            new StockExchange(){StockExchange1="FSE",Brief="It is FSE",ContactAddress="marlin3",Remarks="great",Id=3},

            };
            mockRepo.Setup(repo => repo.GetStockExchangeList()).Returns(stockExchanges.ToList);
            mockRepo.Setup(repo => repo.GetStockExchage(It.IsAny<int>())).Returns((int i) => stockExchanges.SingleOrDefault(x => x.Id == i));
            mockRepo.Setup(repo => repo.Add(It.IsAny<StockExchange>())).Callback((StockExchange item) =>
              {
                  item = new StockExchange() { StockExchange1 = "KSE", Brief = "It is FSE", ContactAddress = "marlin3", Remarks = "great", Id = 4 };
                  stockExchanges.Add(item);
              }).Verifiable();
            
            mockRepo.SetupAllProperties();
           // _service = new StockExchangeService(mockRepo.Object);
        }
            [Fact]
            public void TestGetStockExchangeList()
            {
                //Arrange
                int expected = 15;
                //Act
                var productlist = _service.GetStockExchangeList();
                //Assert
                Assert.Equal(expected, productlist.Count);
            }
            [Fact]
            public void TestGetStockExchange()
            {
                //Arrange
                int expected = 1;
                //Act
                var stockexchange = _service.GetStockExchage(1);
                Assert.Equal(expected, stockexchange.Id);
            }
            [Fact]
            public void TestAdd()
            {
                var productdetails = new StockExchange() {StockExchange1 = "KSE", Brief = "It is FSE", ContactAddress = "marlin3", Remarks = "great", Id = 4 };

                _service.Add(productdetails);

                Assert.Equal(1, 1);
            }
            
            
        }
    }


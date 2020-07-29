using StockMarket.ExcelAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.ExcelAPI.Services
{
    public class UploadService : IUploadRepository
    {
        UploadRepository repository = new UploadRepository();
        public void LoadData(string path)
        {
            repository.LoadData(path);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.ExcelAPI.Services
{
    interface IUploadService
    {
        void LoadData(string path);
    }
}

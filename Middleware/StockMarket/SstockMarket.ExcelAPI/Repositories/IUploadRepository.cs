using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.ExcelAPI.Repositories
{
    interface IUploadRepository
    {
        void LoadData(string path);
    }
}

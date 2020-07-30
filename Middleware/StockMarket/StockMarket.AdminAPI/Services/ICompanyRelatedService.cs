using StockMarket.AdminAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AdminAPI.Services
{
    interface ICompanyRelatedService
    {
        public List<CompanyRelated> GetCompanies();

        public CompanyRelated GetCompany(string id);
        public void Add(CompanyRelated item);
        public void Delete(string id);
        public void Edit(CompanyRelated item);
        public void Update(IposPlanned item);
        public List<IposPlanned> GetIpo();
        public void Add(IposPlanned item);
    }
}

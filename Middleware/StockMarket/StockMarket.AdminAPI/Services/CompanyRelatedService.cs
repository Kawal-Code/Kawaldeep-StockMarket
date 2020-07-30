using StockMarket.AdminAPI.Models;
using StockMarket.AdminAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace StockMarket.AdminAPI.Services
{
    public class CompanyRelatedService : ICompanyRelatedService
    {
        
        CompanyRelatedRespository _repo = new CompanyRelatedRespository();
        public void Add(CompanyRelated item)
        {
            _repo.Add(item);
           
        }

        public void Delete(string id)
        {
            _repo.Delete(id);
            
        }

        public List<CompanyRelated> GetCompanies()
        {
            return _repo.GetCompanies();
        }

        public void Edit(CompanyRelated item)
        {
            _repo.Edit(item);
            

        }

        public CompanyRelated GetCompany(string id)
        {
            return _repo.GetCompany(id);
        }

        public void Update(IposPlanned item)
        {
            _repo.Update(item);
        }
        public List<IposPlanned> GetIpo()
        {
            return _repo.GetIpo();
        }

        public void Add(IposPlanned item)
        {
            _repo.Add(item);
        }
    }
}

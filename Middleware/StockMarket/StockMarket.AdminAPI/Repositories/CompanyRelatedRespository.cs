using StockMarket.AdminAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.AdminAPI.Repositories
{
    public class CompanyRelatedRespository : ICompanyRelatedRepository
    {
        private StockDbContext db;

        public object CompanyRelated { get; internal set; }

        public CompanyRelatedRespository()
        { db = new StockDbContext(); }
        
        public void Add(CompanyRelated item)
        {
            db.CompanyRelated.Add(item);
            db.SaveChanges();
        }

        internal void SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void Delete(String id)
        {
            CompanyRelated c = db.CompanyRelated.Find(id);
            db.CompanyRelated.Remove(c);
            db.SaveChanges();
        }



        public List<CompanyRelated> GetCompanies()
        {
            return db.CompanyRelated.ToList();
        }

        public void Edit(CompanyRelated item)
        {
            db.CompanyRelated.Update(item);
            db.SaveChanges();
        }

        public CompanyRelated GetCompany(string id)
        {
            return db.CompanyRelated.SingleOrDefault(c => c.CompanyName == id);
        }
        public void Update(IposPlanned item)
        {
            db.IposPlanned.Update(item);
            db.SaveChanges();
        }
        public List<IposPlanned> GetIpo()
        {
            return db.IposPlanned.ToList();
        }
        public void Add(IposPlanned item)
        {
            db.IposPlanned.Add(item);
            db.SaveChanges();
        }

    }
}
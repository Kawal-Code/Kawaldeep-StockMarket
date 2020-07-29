using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace StockMarket.AdminAPI.Models
{
    public partial class StockDbContext : DbContext
    {
        public StockDbContext()
        {
        }

        public StockDbContext(DbContextOptions<StockDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CompanyRelated> CompanyRelated { get; set; }
        public virtual DbSet<IposPlanned> IposPlanned { get; set; }
        public virtual DbSet<Sectors> Sectors { get; set; }
        public virtual DbSet<StockData> StockData { get; set; }
        public virtual DbSet<StockExchange> StockExchange { get; set; }
        public virtual DbSet<StockPrice> StockPrice { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=SOCDNET37;Database=StockDb;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CompanyRelated>(entity =>
            {
                entity.HasKey(e => e.CompanyName);

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.BoardofDirectors)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.Ceo)
                    .HasColumnName("CEO")
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.ListInStockExchanges)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.Turnover)
                    .HasMaxLength(32)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<IposPlanned>(entity =>
            {
                entity.ToTable("IPOsPlanned");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.OpenDateTime).HasColumnType("datetime");

                entity.Property(e => e.Remarks)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.StockExchange)
                    .IsRequired()
                    .HasMaxLength(32)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Sectors>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Brief)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.SectorName)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsFixedLength();
            });

            modelBuilder.Entity<StockData>(entity =>
            {
                entity.HasKey(e => e.CompanyCode);

                entity.Property(e => e.CompanyCode).ValueGeneratedNever();

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.StockExchange)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<StockExchange>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Brief)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.ContactAddress)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.StockExchange1)
                    .HasColumnName("StockExchange")
                    .HasMaxLength(32)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<StockPrice>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.StockExchange)
                    .HasMaxLength(32)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.MobileNumber)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(32)
                    .IsUnicode(false);

                entity.Property(e => e.UserType)
                    .HasMaxLength(1)
                    .IsFixedLength();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

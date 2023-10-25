﻿using Entities.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Entities
{
    public class RepositoryContext : DbContext
    {
        public RepositoryContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Owner>? Owners { get; set; }
        public DbSet<Account>? Accounts { get; set; }
    }
}
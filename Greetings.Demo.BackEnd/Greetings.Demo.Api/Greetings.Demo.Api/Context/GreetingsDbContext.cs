using Greetings.Demo.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Greetings.Demo.Api.Context
{
    public class GreetingsDbContext : DbContext
    {
        public GreetingsDbContext(DbContextOptions<GreetingsDbContext> options) : base(options)
        {

        }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<MessageType> MessageTypes { get; set; }
    }
}

using Greetings.Demo.Api.Context;
using Greetings.Demo.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Greetings.Demo.Api.Repositories
{
    public class LanguageRepository : ILanguageRepository
    {
        private readonly GreetingsDbContext _context;
        public LanguageRepository(GreetingsDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Language> GetAll()
        {
            return _context.Languages.ToList();
        }
    }
}

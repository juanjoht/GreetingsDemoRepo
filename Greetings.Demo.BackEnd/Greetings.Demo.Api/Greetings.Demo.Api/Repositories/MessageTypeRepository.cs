using Greetings.Demo.Api.Context;
using Greetings.Demo.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Greetings.Demo.Api.Repositories
{
    public class MessageTypeRepository : IMessageTypeRepository
    {
        private readonly GreetingsDbContext _context;
        public MessageTypeRepository(GreetingsDbContext context)
        {
            _context = context;
        }
        public IEnumerable<MessageType> GetAll()
        {
            return _context.MessageTypes.ToList();
        }
    }
}

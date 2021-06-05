using Greetings.Demo.Api.Context;
using Greetings.Demo.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Greetings.Demo.Api.Repositories
{
    public class MessageRepository : IMessageRepository
    {
        private readonly GreetingsDbContext _context;
        public MessageRepository(GreetingsDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Message> GetAll()
        {
            return _context.Messages.ToList();
        }

        public Message GetByLanguageIdAndMessageTypeId(int languageId, int messageTypeId)
        {
            return _context.Messages.FirstOrDefault(x => x.LanguageId == languageId &&  x.MessageTypeId == messageTypeId);
        }
    }
}

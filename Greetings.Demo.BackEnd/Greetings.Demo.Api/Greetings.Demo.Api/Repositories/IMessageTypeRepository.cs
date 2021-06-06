using Greetings.Demo.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Greetings.Demo.Api.Repositories
{
    public interface IMessageTypeRepository
    {
        IEnumerable<MessageType> GetAll();
    }
}

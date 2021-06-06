using Greetings.Demo.Api.Models;
using Greetings.Demo.Api.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Greetings.Demo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageTypeController : ControllerBase
    {
        private readonly IMessageTypeRepository _MessageTypeRepository;
        public MessageTypeController(IMessageTypeRepository messageTypeRepository)
        {
            _MessageTypeRepository = messageTypeRepository;
        }

        [HttpGet("GetMessageTypes")]
        public IEnumerable<MessageType> Get()
        {
            return _MessageTypeRepository.GetAll();
        }
    }
}

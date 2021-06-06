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
    public class MessageController : ControllerBase
    {
        private readonly IMessageRepository _messageRepository;
        public MessageController(IMessageRepository messageRepository)
        {
            _messageRepository = messageRepository;
        }

        [HttpGet("GetMessages")]
        public IEnumerable<Message> Get()
        {
            return _messageRepository.GetAll();
        }

        [HttpGet("GetByLanguageIdAndMessageTypeId")]
        public ActionResult<Message> Get([FromQuery] int languageId, [FromQuery] int messageTypeId)
        {
            var message = _messageRepository.GetByLanguageIdAndMessageTypeId(languageId, messageTypeId);
            if (message == null)
            {
                return NotFound();
            }
            return message;
        }
    }
}

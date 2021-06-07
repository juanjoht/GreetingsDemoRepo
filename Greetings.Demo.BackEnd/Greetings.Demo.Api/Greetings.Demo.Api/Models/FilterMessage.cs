using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Greetings.Demo.Api.Models
{
    public class FilterMessage
    {
        public int languageId { get; set; }
        public int messageTypeId { get; set; }
    }
}

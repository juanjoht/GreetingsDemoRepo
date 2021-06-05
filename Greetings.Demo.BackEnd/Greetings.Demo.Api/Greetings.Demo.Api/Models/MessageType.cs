using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Greetings.Demo.Api.Models
{
    public class MessageType
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}

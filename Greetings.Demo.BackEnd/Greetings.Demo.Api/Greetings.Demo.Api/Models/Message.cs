using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Greetings.Demo.Api.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; }
        public int LanguageId { get; set; }
        public string Description { get; set; }
        public int MessageTypeId { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace Mastermind.Dtos
{
    public class ReturnGameDto
    {
        public string gameId { get; set; }
        public IEnumerable<string> availableColors { get; set; }
    }
}

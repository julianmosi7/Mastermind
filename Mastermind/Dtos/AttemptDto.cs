using System;
using System.Collections.Generic;

namespace Mastermind.Dtos
{
    public class AttemptDto
    {
        public int NumberAttempt { get; set; }
        public int NumberOfTries { get; set; }
        public List<string> GuessedColorPattern { get; set; }
    }
}

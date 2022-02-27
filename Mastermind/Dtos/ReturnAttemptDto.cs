using System;
namespace Mastermind.Dtos
{
    public class ReturnAttemptDto
    {
        public int correctColors { get; set; }
        public int correctColorsPosition { get; set; }
        public bool gameWon { get; set; }
        public bool gameLost { get; set; }
    }
}

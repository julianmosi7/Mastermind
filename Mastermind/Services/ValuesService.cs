using System;
using System.Collections.Generic;
using System.Linq;
using Mastermind.Dtos;

namespace Mastermind.Services
{
    public class ValuesService
    {

        public static List<string> guessedColorPattern;
        public static List<string> colorPattern;
        public static List<string> colorPatternTemp;
        public static List<string> availableColors = new List<string>()
        {
            "Yellow",
            "Brown",
            "Blue",
            "Green",
            "Red",
            "Orange"
        };

        Dictionary<string, List<string>> game = new Dictionary<string, List<string>>();

        private static Random random = new Random();

        public ReturnGameDto StartGame()
        {

            Console.WriteLine($"########## Starting game ##########");
            colorPattern = new List<string>();

            string gameId = GenerateId();
            colorPattern = GenerateColors();
            
            game.Add(gameId, colorPattern);

            ReturnGameDto returnGameDto = new ReturnGameDto()
            {
                gameId = gameId,
                availableColors = availableColors
            };
            Console.WriteLine("---------- end starting game ----------");
            return returnGameDto;
        }

        public ReturnAttemptDto Attempt(AttemptDto attemptDto)
        {
            int correctColors = 0;
            int correctColorsPosition = 0;
            bool gameWon = false;
            bool gameLost = false;
            Console.WriteLine($"########## Attempt ##########");

            guessedColorPattern = new List<string>();
            colorPatternTemp = new List<string>();

            guessedColorPattern = attemptDto.GuessedColorPattern;
            colorPattern.ForEach(val => colorPatternTemp.Add(val));
            Console.WriteLine($"Number Attempt: {attemptDto.NumberAttempt} Number Tries: {attemptDto.NumberOfTries}");
            if(attemptDto.NumberOfTries > 1)
            {
                //containing colors
                int i = 0;
                foreach (var guessedColor in guessedColorPattern)
                {
                    if (colorPatternTemp.Contains(guessedColor))
                    {
                        Console.WriteLine($"index: {i}");
                        Console.WriteLine($"collection: {colorPattern.Count}");
                        if (colorPattern[i] == guessedColor)
                        {
                            Console.WriteLine($"{guessedColor} complete true");
                            correctColorsPosition += 1;
                            colorPatternTemp.Remove(guessedColor);
                            i++;
                        }
                        else
                        {
                            Console.WriteLine($"{guessedColor} true");
                            correctColors += 1;
                            colorPatternTemp.Remove(guessedColor);
                            i++;
                        }
                    }
                    else
                    {
                        Console.WriteLine($"{guessedColor} false");
                        i++;
                    }
                }

                if (correctColorsPosition == 4)
                {
                    gameWon = true;
                }
            }
            else
            {
                gameLost = true;
            }
            Console.WriteLine(gameWon);
            Console.WriteLine(gameLost);
            

            ReturnAttemptDto returnAttemptDto = new ReturnAttemptDto()
            {
                correctColors = correctColors,
                correctColorsPosition = correctColorsPosition,
                gameWon = gameWon,
                gameLost = gameLost
            };

            Console.WriteLine("---------- end attempt ----------");

            return returnAttemptDto;
        }
        

        public string GenerateId()
        {
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            chars += chars.ToLower();
            return new string(Enumerable.Repeat(chars, 6)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public List<string> GenerateColors()
        {
            Console.WriteLine("generating colors...");

            colorPattern.AddRange(Enumerable.Repeat(availableColors, 4)
                    .Select(s => s[random.Next(availableColors.Count)]));
            foreach (var color in colorPattern)
            {
                Console.WriteLine(color);
            }
            return colorPattern;
        }
    }
}

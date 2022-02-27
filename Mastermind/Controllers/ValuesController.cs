using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mastermind.Dtos;
using Mastermind.Services;
using Microsoft.AspNetCore.Mvc;

namespace Mastermind.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ValuesController : Controller
    {
        private readonly ValuesService valuesService;

        public ValuesController(ValuesService valuesService)
        {
            this.valuesService = valuesService;
        }

        [HttpPost]
        public ReturnGameDto StartGame([FromBody] GameDto gameDto)
        {
            return valuesService.StartGame();
        }

        [HttpPost("Attempt")]
        public ReturnAttemptDto Attempt([FromBody] AttemptDto attemptDto)
        {
            return valuesService.Attempt(attemptDto);
        }
    }
}
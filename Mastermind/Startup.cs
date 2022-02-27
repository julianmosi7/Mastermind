using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mastermind.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Mastermind
{
  public class Startup
  {
    private readonly string myAllowSpecificOrigins = "_myAllowSpecificOrigins";

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
       services.AddScoped<ValuesService>();
      services.AddCors(options =>
      {
        options.AddPolicy(myAllowSpecificOrigins,
            x => x.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader()
          );
      });
      services.AddMvc(options => options.EnableEndpointRouting = false);
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors(myAllowSpecificOrigins);

      app.UseMvc();
    }
  }
}

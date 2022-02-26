
using contractor_web_api.Data;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Serialization;
using Azure.Identity;

var builder = WebApplication.CreateBuilder(args);

//var keyVaultEndpoint = new Uri(Environment.GetEnvironmentVariable("VaultUri"));
//builder.Configuration.AddAzureKeyVault(keyVaultEndpoint, new DefaultAzureCredential());

// Add services to the container.
ConfigurationManager Configuration = builder.Configuration;

builder.Services.AddDbContext<UserContext>(opt => opt.UseSqlServer
    (Configuration.GetConnectionString("UserConnection")));
builder.Services.AddDbContext<CommunicationContext>(opt => opt.UseSqlServer
    (Configuration.GetConnectionString("UserConnection")));

builder.Services.AddControllers().AddNewtonsoftJson(s => {
    s.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
});
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddScoped<IContractorRepo, SqlContractorRepo>(); // When using the interface give the SQL Repository


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

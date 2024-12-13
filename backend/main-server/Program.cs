using MongoDB.Driver;
using main_server.Models;
using Microsoft.OpenApi.Models;
using main_server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//security key used in creating JWT
builder.Services.Configure<AuthConfiguration>(
        builder.Configuration.GetSection("Secrets"));

//injecting database instance as a service
builder.Services.AddSingleton<IMongoDatabase>(options => {
    var client = new MongoClient("mongodb://localhost:27017");
    /*mongodb+srv://oopproj:GUBYHEeenOzZ5Nlp@cluster0.dtubnmo.mongodb.net/?retryWrites=true&w=majority\n\n*/
    var database = client.GetDatabase("fitness");
    return database;
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "policy",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        });
});


builder.Services.AddSingleton<AuthService>();
builder.Services.AddSingleton<BlogService>();
builder.Services.AddSingleton<PersonalDetailsService>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("policy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();


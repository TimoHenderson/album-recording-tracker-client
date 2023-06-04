using RecordingTrackerApi.Data;
using RecordingTrackerApi.Services;
using Microsoft.EntityFrameworkCore;
using RecordingTrackerApi.Controllers;


var builder = WebApplication.CreateBuilder(args);
var dbConnectionString = builder.Configuration["DbConnection"];

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("*")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });


});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<RecordingContext>(options =>
    options.UseSqlServer(dbConnectionString));

builder.Services.AddScoped<ArtistsService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.CreateDbIfNotExists();

//app.MapArtistsEndpoints();

app.Run();

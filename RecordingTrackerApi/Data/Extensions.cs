using Microsoft.AspNetCore.Identity;

namespace RecordingTrackerApi.Data;

public static class Extensions
{
    public static async void CreateDbIfNotExists(this IHost host)
    {
        {
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<RecordingContext>();
                var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();
                context.Database.EnsureCreated();
                DbInitializer.Initialize(context);
                await UsersDbInitializer.SeedRolesToDb(roleManager);

            }
        }
    }
}
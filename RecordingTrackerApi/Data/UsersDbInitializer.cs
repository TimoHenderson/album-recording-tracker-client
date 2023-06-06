using System;
using Microsoft.AspNetCore.Identity;
using RecordingTrackerApi.Data.Helpers;

namespace RecordingTrackerApi.Data
{
    public class UsersDbInitializer
    {
        public static async Task SeedRolesToDb(RoleManager<IdentityRole> roleManager)
        {
            if (!await roleManager.RoleExistsAsync(UserRoles.Engineer))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Engineer));

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
        }
    }
}



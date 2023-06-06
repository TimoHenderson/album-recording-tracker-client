using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using RecordingTrackerApi.Models;
using RecordingTrackerApi.Data;
using RecordingTrackerApi.Models.ViewModels;

namespace RecordingTrackerApi.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UsersDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthenticationController(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            UsersDbContext context,
             IConfiguration configuration
            )
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("register-user")]
        public async Task<IActionResult> Register([FromBody] RegisterVM registerVM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Please provide all the required fields");
            }

            Console.WriteLine(registerVM.ToString());

            var userExists = await _userManager.FindByEmailAsync(registerVM.EmailAddress);
            if (userExists != null)
            {
                return BadRequest($"User {registerVM.EmailAddress} already exists");
            }

            ApplicationUser newUser = new ApplicationUser()
            {
                FirstName = registerVM.FirstName,
                LastName = registerVM.LastName,
                Email = registerVM.EmailAddress,
                UserName = registerVM.UserName,
                Custom = "Egg",

                SecurityStamp = Guid.NewGuid().ToString()
            };
            Console.WriteLine(newUser);
            var result = await _userManager.CreateAsync(newUser, registerVM.Password);

            if (result.Succeeded) return Ok("User Created");
            return BadRequest("User could not be created");

        }
    }
}


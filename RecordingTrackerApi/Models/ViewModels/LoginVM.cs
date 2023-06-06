using System;
using System.ComponentModel.DataAnnotations;
namespace RecordingTrackerApi.Models.ViewModels
{
    public class RegisterVM
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }

        public override string ToString()
        {
            return $"name: {FirstName} {LastName} email:{EmailAddress} user:{UserName} pword: {Password}";
        }
    }
}


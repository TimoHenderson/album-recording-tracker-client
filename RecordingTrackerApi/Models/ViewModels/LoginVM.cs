using System;
using System.ComponentModel.DataAnnotations;
namespace RecordingTrackerApi.Models.ViewModels
{
    public class LoginVM
    {

        [Required]
        public string EmailAddress { get; set; }

        [Required]
        public string Password { get; set; }


    }
}


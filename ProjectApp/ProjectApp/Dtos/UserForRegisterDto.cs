using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectApp.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters!")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        //[StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters!")]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string confirmPassword { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        [Phone]
        public string TelephoneNumber { get; set; }
    }
}

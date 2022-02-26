using System.ComponentModel.DataAnnotations;

namespace contractor_web_api.Dtos
{
    public class UserUpdateDto
    {
  

        [Required]
        [MaxLength(25)]
        public string UserName { get; set; }

        [Required]
        [MaxLength(25)]
        public string Password { get; set; }

        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
        [MaxLength(10)]
        public string? PhoneNumber { get; set; }
        [Required]
        [MaxLength(50)]
        public string Email { get; set; }
        [MaxLength(50)]
        public string? Linkedin { get; set; }
        [MaxLength(4)]
        public int? SSNLastFour { get; set; }
        [MaxLength(25)]
        public string? highest_education { get; set; }
        [MaxLength(25)]
        public string? TotalExperience { get; set; }
        [Required]
        public bool isContractor { get; set; }
        [MaxLength(50)]
        public string? Company { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace contractor_web_api.Dtos
{
    public class UserCreateDto
    {
        [Required]
        [MaxLength(30)]
        public string UserName { get; set; }

        [Required]
        [MaxLength(30)]
        public string Password { get; set; }

        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
        [MaxLength(10)]

        public string PhoneNumber { get; set; }

        [Required]
        [MaxLength(50)]
        public string Email { get; set; }
        [MaxLength(50)]
        public string? Linkedin { get; set; }                  

        public int? SSNLastFour { get; set; }

        [Required]
        [MaxLength(50)]
        public string highest_education { get; set; }
        public int? GraduationYear { get; set; }
        [Required]
        public string TotalExperience { get; set; }

        public bool? Relocation { get; set; }
    }
}

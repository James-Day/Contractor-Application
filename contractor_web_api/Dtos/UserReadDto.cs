namespace contractor_web_api.Dtos
{
    public class UserReadDto
    {

        public int Id { get; set; }     
        public string FirstName { get; set; }

        public string LastName { get; set; }
     
        public string PhoneNumber { get; set; }

        public string Email { get; set; }
       
        public string? Linkedin { get; set; }

        public int? SSNLastFour { get; set; }

        public string highest_education { get; set; }
       
        public int? GraduationYear { get; set; }
    
        public string TotalExperience { get; set; }

        public bool? Relocation { get; set; }
    }
}

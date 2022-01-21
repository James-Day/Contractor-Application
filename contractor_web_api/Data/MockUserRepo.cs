using contractor_web_api.Models;

namespace contractor_web_api.Data
{
    public class MockUserRepo : IContractorRepo
    {
        public User GetUserById(int id)
        {
            return new User { Id = 0, FirstName = "James", LastName = "Day", Email = "james-day1@live.com", GraduationYear = 2019, Linkedin = "asd", PhoneNumber = "425-435-8149", Relocation = true, SSNLastFour = 4444, TotalExperience = "15 years of experience in SWE" };

        }

        public IEnumerable<User> GetAllUsers()
        {
            var users = new List<User>
            {
                new User { Id = 0, UserName="JamesDay1", Password="luckyguess123", FirstName = "James", LastName = "Day", 
                    Email = "james-day1@live.com", GraduationYear = 2019, Linkedin = "asd", PhoneNumber = "425-435-8149",
                    Relocation = true, SSNLastFour = 4444, TotalExperience = "12 years of experience in SWE" , highest_education="Bachelor"},
                new User { Id = 1, UserName="johnothan", Password="passwordsss", FirstName = "John", LastName = "Lack",  
                    Email = "John@msn.com", GraduationYear = 2011, Linkedin = "asd", PhoneNumber = "425-435-8149", 
                    Relocation = false, SSNLastFour = 1234, TotalExperience = "11 years of experience in SWE" , highest_education="PhD"},
                new User { Id = 2, UserName="jacob", Password="password123", FirstName = "Jacob", LastName = "Smith", 
                    Email = "Jacob@gmail.com", GraduationYear = 2001, Linkedin = "asd", PhoneNumber = "425-435-8149",
                    Relocation = true, SSNLastFour = 5555, TotalExperience = "13 years of experience in SWE", highest_education="dropout" }
            };
            return users;
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void CreateNewUser(User usr)
        {
            throw new NotImplementedException();
        }

        public void UpdateUser(User usr)
        {
            throw new NotImplementedException();
        }

        public void DeleteUser(User usr)
        {
            throw new NotImplementedException();
        }

        public User Login(string UserName, string Password)
        {
            throw new NotImplementedException();
        }
    }
}

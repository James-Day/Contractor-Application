using contractor_web_api.Models;

namespace contractor_web_api.Data
{
    public interface IContractorRepo
    {
        bool SaveChanges();
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        User Login(string UserName, string Password);
        void CreateNewUser(User usr);
        void UpdateUser(User usr);
        void DeleteUser(User usr);
     }
}

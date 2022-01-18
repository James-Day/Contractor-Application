using contractor_web_api.Models;

namespace contractor_web_api.Data
{
    public interface IContractorRepo
    {
        bool SaveChanges();
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        void CreateNewUser(User usr);
        void UpdateUser(User usr);
        void DeleteUser(User usr);
     }
}

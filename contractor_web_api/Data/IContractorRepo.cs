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
        void AddCommunication(Communication comm);
        void UpdateUser(User usr);
        void DeleteUser(User usr);
        public IEnumerable<Communication> RetrieveCommunications(); //will change parameters to a name
        Communication GetCommunicationById(int id);
    }
}

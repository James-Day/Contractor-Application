using contractor_web_api.Models;

namespace contractor_web_api.Data
{
    public interface IContractorRepo
    {
        bool SaveChanges();
        User GetUserById(int id);
        User? Login(string UserName, string Password);
        User? GetUsersProfilePage(string UserName); // will get information for displaying a user's profile page if their account isn't private
        void CreateNewUser(User usr);
        void AddCommunication(Communication comm);
        void UpdateUser(User usr);
        void UpdateComm(Communication comm);

        void DeleteUser(User usr);
        IEnumerable<Communication> RetrieveCommunications(); //will change parameters to a name //might be able to remove this
        Communication[] RetrieveUsersCommunications(string UserName);
        Communication GetCommunicationById(int id);
    }
}

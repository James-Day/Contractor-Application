using contractor_web_api.Models;

namespace contractor_web_api.Data
{
    public class MockUserRepo : IContractorRepo
    {

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

        public void AddCommunication(Communication comm)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Communication> RetrieveCommunications()
        {
            throw new NotImplementedException();
        }

        public Communication GetCommunicationById(int id)
        {
            throw new NotImplementedException();
        }

        User IContractorRepo.GetUserById(int id)
        {
            throw new NotImplementedException();
        }

        public Communication[] RetrieveUsersCommunications(string UserName)
        {
            throw new NotImplementedException();
        }

        public User? GetUsersProfilePage(string UserName)
        {
            throw new NotImplementedException();
        }

        public void UpdateComm(Communication comm)
        {
            throw new NotImplementedException();
        }
    }
}

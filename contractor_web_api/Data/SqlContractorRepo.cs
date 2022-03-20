using contractor_web_api.Models;

namespace contractor_web_api.Data
{
    public class SqlContractorRepo : IContractorRepo
    {
        private readonly UserContext _context;
        private readonly CommunicationContext _Com_context;

        public SqlContractorRepo(UserContext context, CommunicationContext com_context)
        {
            _context = context;
            _Com_context = com_context;
        }

        public void CreateNewUser(User usr)
        {
            if (usr == null) {
                throw new ArgumentNullException(nameof(usr));
            }
            _context.Users.Add(usr);
        }

        public void DeleteUser(User usr)
        {
            if (usr == null)
            {
                throw new ArgumentNullException(nameof(usr));
            }
            _context.Users.Remove(usr);
        }

        public User? Login(string UserName, string Password)
        {
           var result =  _context.Users.FirstOrDefault(p => p.UserName == UserName);
            if (result == null) { return result; }
            //Do simple decryption this is where future decryption would go.

            string decryptedPassword = "";
            for (int i = 0; i < Password.Length; i++)
            {
                decryptedPassword = decryptedPassword + (char)(Password[i] + 1);
            }

            if (result.Password == decryptedPassword) {
                return result;
            }
            return null;
        }

        public void AddCommunication(Communication comm) {
            if (comm == null)
            {
                throw new ArgumentNullException(nameof(comm));
            }
            _Com_context.Communications.Add(comm);
        }
       
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0 && _Com_context.SaveChanges() >=0);
        }

        public void UpdateUser(User usr)
        {
            //nothing 
        }

        public IEnumerable<Communication> RetrieveCommunications()
        {
            return _Com_context.Communications.ToList();
        }

        public Communication GetCommunicationById(int id)
        {
            return _Com_context.Communications.FirstOrDefault(p => p.Id == id);
        }

        User IContractorRepo.GetUserById(int id)
        {
            return _context.Users.FirstOrDefault(p => p.Id == id);
        }
    }
}

using contractor_web_api.Models;

namespace contractor_web_api.Data
{
    public class SqlContractorRepo : IContractorRepo
    {
        private readonly UserContext _user_context;
        private readonly CommunicationContext _com_context;

        public SqlContractorRepo(UserContext context, CommunicationContext com_context)
        {
            _user_context = context;
            _com_context = com_context;
        }

        public void CreateNewUser(User usr)
        {
            if (usr == null) {
                throw new ArgumentNullException(nameof(usr));
            }
            _user_context.Users.Add(usr);
        }

        public void DeleteUser(User usr)
        {
            if (usr == null)
            {
                throw new ArgumentNullException(nameof(usr));
            }
            _user_context.Users.Remove(usr);
        }

        public User? Login(string UserName, string Password)
        {
            //converts to SQL statement which is case insensitive,
            //once the case insensative maches are returned, communications are
            //checked for case sensativity. This is probablly not the best way,
            //but I can't find a better way without editing the database.
            var result = _user_context.Users.Where(p => p.UserName == UserName).AsEnumerable().FirstOrDefault(p => p.UserName == UserName);
            if (result == null) { return result; }

            //Do simple decryption this is where future decryption would go.
            //might change this to encrypt the passed in password and check for
            //equivellency instead of decrypting ing.
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
            _com_context.Communications.Add(comm);
        }
       
        public bool SaveChanges()
        {
            return (_user_context.SaveChanges() >= 0 && _com_context.SaveChanges() >=0);
        }

        public void UpdateUser(User usr)
        {
            //nothing 
        }

        public IEnumerable<Communication> RetrieveCommunications()
        {
            return _com_context.Communications.ToList();
        }

        public Communication GetCommunicationById(int id)
        {
            return _com_context.Communications.FirstOrDefault(p => p.Id == id);
        }

        User IContractorRepo.GetUserById(int id)
        {
            return _user_context.Users.FirstOrDefault(p => p.Id == id);
        }

        public Communication[] RetrieveUsersCommunications(string UserName)
        {
            //converts to SQL statement which is case insensitive,
            //once the case insensative maches are returned, communications are
            //checked for case sensativity. This is probablly not the best way,
            //but I can't find a better way without editing the database.
           
             return _com_context.Communications.Where(c => c.toUserName == UserName || c.fromUserName == UserName).AsEnumerable().Where(c => c.toUserName == UserName || c.fromUserName == UserName).ToArray();
            
        }
    }
}

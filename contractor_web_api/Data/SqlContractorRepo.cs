using contractor_web_api.Models;

namespace contractor_web_api.Data
{
    public class SqlContractorRepo : IContractorRepo
    {
        private readonly UserContext _context;

        public SqlContractorRepo(UserContext context)
        {
            _context = context;
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

        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }

        public User GetUserById(int id)
        {
            return _context.Users.FirstOrDefault(p => p.Id == id);
        }

        public User Login(string UserName, string Password)
        {
           var result =  _context.Users.FirstOrDefault(p => p.UserName == UserName);
            if (result == null) { return result; }
            if (result.Password == Password) {
                return result;
            }
            return null;
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateUser(User usr)
        {
            //nothing 
        }
    }
}

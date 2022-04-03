using AutoMapper;
using contractor_web_api.Data;
using contractor_web_api.Dtos;
using contractor_web_api.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace contractor_web_api.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IContractorRepo _repository;
        private readonly IMapper _mapper;

        public UsersController(IContractorRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }


        //Get request that responds to this uri: api/users/{id}
        [HttpGet("{id}", Name = "GetUserById")]
        public ActionResult<UserReadDto> GetUserById(int id) //this id comes from the uri request
        {
            var userItem = _repository.GetUserById(id);
            if (userItem != null)
            {
                return Ok(_mapper.Map<UserReadDto>(userItem));
            }
            return NotFound();
        }

        [HttpPost]
        public ActionResult<UserReadDto> CreateUser(UserCreateDto createdUser)
        {
            var userModel = _mapper.Map<User>(createdUser);
            _repository.CreateNewUser(userModel);
            _repository.SaveChanges();

            var userReadDto = _mapper.Map<UserReadDto>(userModel);
           // return Ok(userReadDto);
            return CreatedAtRoute(nameof(GetUserById), new { Id = userReadDto.Id }, userReadDto);
        }

        [HttpGet("{Username}/{Password}" , Name ="Login")]
        public ActionResult<UserReadDto> Login(string UserName, string Password) {
            var userItem = _repository.Login(UserName, Password);
            if (userItem != null)
            {//might change this to return a User instead, and the "get user's
             //profile page" would return a readDto so I could specify what info
             //to return based on the scenario
                return Ok(_mapper.Map<UserReadDto>(userItem));
            }
            return NotFound();
        }
        
        //Put api/users/{id}
        [HttpPut("{id}")]
        public ActionResult UpdateUser(int id, UserUpdateDto updatedUserDto)
        {

            var UserFromRepo = _repository.GetUserById(id);

            if (UserFromRepo == null)
            {
                return NotFound();
            }
            _mapper.Map(updatedUserDto, UserFromRepo);

            _repository.UpdateUser(UserFromRepo);
            _repository.SaveChanges();

            return NoContent();
        }
        //Patch api/users/{id}
        [HttpPatch("{id}")]
        public ActionResult PartialUserUpdate(int id, JsonPatchDocument<UserUpdateDto> patchDoc)
        {  //patch doc is recieved from the request
            var userFromRepo = _repository.GetUserById(id);
           if (userFromRepo == null)
            {
                return NotFound();
            }
            var userToPatch = _mapper.Map<UserUpdateDto>(userFromRepo);
            patchDoc.ApplyTo(userToPatch, ModelState);
            if (!TryValidateModel(userToPatch))
            {
                return ValidationProblem(ModelState);
            }
            _mapper.Map(userToPatch, userFromRepo);
            _repository.UpdateUser(userFromRepo); // doesn't do anything curently, but is good practice to call this anyway
            _repository.SaveChanges();
            return NoContent();
        }
        //Delete api/users/{id}
        [HttpDelete("delete/{Username}/{Password}")]
        public ActionResult DeleteUser(string UserName, string password)
        {
            var userFromRepo = _repository.Login(UserName, password);
            if (userFromRepo == null)
            {
                return NotFound();
            }
            _repository.DeleteUser(userFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }

        //POST request that responds to this uri: api/users/comm
        [HttpPost("comm")]
        public ActionResult<Communication> CreateCommunication(CommunicationCreateDto createdCommunication)
        {
            createdCommunication.time = DateTime.Today; //sets the time of each communication

            var CommunicationModel = _mapper.Map<Communication>(createdCommunication);
            _repository.AddCommunication(CommunicationModel);
            _repository.SaveChanges();

            var CommunicationReadDto = _mapper.Map<CommunicationReadDto>(CommunicationModel);

            return CreatedAtRoute(nameof(GetCommunicationById), new { Id = CommunicationReadDto.Id }, CommunicationReadDto);
        }
        //Get request that responds to this uri: api/users/comm //gets all comms, remove this, just for testing
        [HttpGet("comm")]
        public ActionResult<IEnumerable<Communication>> GetAllCommunications()
        {
            var userItems = _repository.RetrieveCommunications();
            return Ok(_mapper.Map<IEnumerable<CommunicationReadDto>>(userItems));
        }
        [HttpGet("comm/{id}", Name = "GetCommunicationById")]
        public ActionResult<UserReadDto> GetCommunicationById(int id) //this id comes from the uri request
        {
            var CommunicationItem = _repository.GetCommunicationById(id);
            if (CommunicationItem != null)
            {
                return Ok(_mapper.Map<CommunicationReadDto>(CommunicationItem));
            }
            return NotFound();
        }

        //Get request that responds to this uri: api/users/userComms/{UserName}
        //This request will retrieve all communications for a given user.
        [HttpGet("userComms/{UserName}", Name = "GetCommunicationsByUserName")]
        public ActionResult<UserReadDto> GetCommunicationsByUserName(string UserName) //this id comes from the uri request
        {
            var Communications = _repository.RetrieveUsersCommunications(UserName);
            if (Communications != null)
            {
                return Ok(_mapper.Map < IEnumerable<CommunicationReadDto>>(Communications));
            }
            return NotFound();
        }
        [HttpGet("profilePage/{username}", Name = "GetUsersProfilePage")]
        public ActionResult<UserReadDto> GetUsersProfilePage(string UserName) //this id comes from the uri request
        {
            var userItem = _repository.GetUsersProfilePage(UserName);
            if (userItem != null)
            {
                return Ok(_mapper.Map<RecruiterReadDto>(userItem));
            }
            return NotFound();
        }
        //Patch api/users/comms/{id}
        [HttpPatch("comm/{id}")]
        public ActionResult PartialCommunicationUpdate(int id, JsonPatchDocument<CommunicationUpdateDto> patchDoc)
        {  //patch doc is recieved from the request
            var commFromRepo = _repository.GetCommunicationById(id);
            if (commFromRepo == null)
            {
                return NotFound();
            }
            var commToPatch = _mapper.Map<CommunicationUpdateDto>(commFromRepo);
            patchDoc.ApplyTo(commToPatch, ModelState);
            if (!TryValidateModel(commToPatch))
            {
                return ValidationProblem(ModelState);
            }
            _mapper.Map(commToPatch, commFromRepo);
            _repository.UpdateComm(commFromRepo); // doesn't do anything curently, but is good practice to call this anyway
            _repository.SaveChanges();
            return NoContent();
        }

    }
}

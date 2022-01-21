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

        //Get request that responds to this uri: api/users
        [HttpGet]
        public ActionResult<IEnumerable<UserReadDto>> GetAllUsers()
        {
            var userItems = _repository.GetAllUsers();
            return Ok(_mapper.Map<IEnumerable<UserReadDto>>(userItems));
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
        [HttpGet("{Username}/{Password}")]
        public ActionResult<UserReadDto> Login(string UserName, string Password) {
            var userItem = _repository.Login(UserName, Password);
            if (userItem != null)
            {
                return Ok(_mapper.Map<UserReadDto>(userItem));
            }
            return NotFound();
        }
        //POST request that responds to this uri: api/users
        [HttpPost]
        public ActionResult<UserReadDto> CreateUser(UserCreateDto createdUser)
        {
            var userModel = _mapper.Map<User>(createdUser);
            _repository.CreateNewUser(userModel);
            _repository.SaveChanges();

            var userReadDto = _mapper.Map<UserReadDto>(userModel);

            return CreatedAtRoute(nameof(GetUserById), new { Id = userReadDto.Id }, userReadDto);

            //return Ok(userReadDto);
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
        { // patch doc is recieved from the request
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
        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
        {
            var userFromRepo = _repository.GetUserById(id);
            if (userFromRepo == null)
            {
                return NotFound();
            }
            _repository.DeleteUser(userFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}

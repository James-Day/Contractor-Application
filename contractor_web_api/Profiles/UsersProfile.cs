using AutoMapper;
using contractor_web_api.Dtos;
using contractor_web_api.Models;

namespace contractor_web_api.Profiles
{
    public class UsersProfile : Profile
    { 
        public UsersProfile()
        {
            CreateMap<User, UserReadDto>();
            CreateMap<UserCreateDto, User>();
            CreateMap<UserUpdateDto, User>();
            CreateMap<User, UserUpdateDto>();
            CreateMap<User, RecruiterReadDto>();
            CreateMap<Communication, CommunicationReadDto>();
            CreateMap<CommunicationCreateDto, Communication>();
            CreateMap<CommunicationUpdateDto, Communication>();
            CreateMap<Communication, CommunicationUpdateDto>();

        }
    }
}

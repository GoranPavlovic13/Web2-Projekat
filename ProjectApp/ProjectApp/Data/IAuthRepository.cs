using ProjectApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectApp.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<bool> UserExist(string email);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProjectApp.Data;
using ProjectApp.Dtos;
using ProjectApp.Models;

namespace ProjectApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (await _repo.UserExist(userForRegisterDto.Email))
            {
                ModelState.AddModelError("email", "Email already exists!");
                //return BadRequest(ModelState);
                return BadRequest(ModelState);
            }

            /*if (await _repo.UserExist(userForRegisterDto.Email))
            {
                ModelState.AddModelError("email", "Email already exists!");
                return BadRequest();
            }*/

            var userToCreate = new User
            {
                FirstName = userForRegisterDto.FirstName,
                LastName = userForRegisterDto.LastName,
                Email = userForRegisterDto.Email,
                City = userForRegisterDto.City,
                TelephoneNumber = userForRegisterDto.TelephoneNumber,
                Role = Role.User
            };

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);
            return StatusCode(201);
        }

    }
}
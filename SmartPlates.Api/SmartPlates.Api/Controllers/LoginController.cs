using Microsoft.AspNetCore.Mvc;
using SmartPlates.Models.Response;

namespace SmartPlates.Api.Controllers
{
    [Route("api/Login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public IActionResult Login([FromBody] Models.Request.LoginRequest request)
        {
            if (request.UserName == "admin" && request.Password == "password")
            {
                var response = new LoginResponse
                {
                    Token = "fake-jwt-token",
                    Message = "Login successful"
                };
                return Ok(response);
            }
            return Unauthorized(new LoginResponse { Message = "Invalid credentials" });
        }
    }
}

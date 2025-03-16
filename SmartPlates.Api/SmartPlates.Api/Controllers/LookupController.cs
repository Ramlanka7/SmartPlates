using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SmartPlates.Api.Controllers
{
    [Route("api/Lookup")]
    [ApiController]
    public class LookupController : ControllerBase
    {
        [HttpGet("roles")]
        public IActionResult GetRoles()
        {
            var roles = new List<string> { "Admin", "User", "Manager" };
            return Ok(roles);
        }
    }
}

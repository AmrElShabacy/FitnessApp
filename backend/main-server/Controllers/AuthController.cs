using Microsoft.AspNetCore.Mvc;
using main_server.Models;
using main_server.Services;
namespace main_server.Controllers;

[Controller]
[Route("api/[controller]")]
public class AuthController : Controller
{
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> CreateAccount([FromBody] RegisterDTO request)
    {
        int response = await _authService.RegisterAsync(request);


        if (response == 0) return BadRequest("Username Already taken! Please use another one.");
        return CreatedAtAction(nameof(CreateAccount), null);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDTO request)
    {
        string res = await _authService.LoginAsync(request);
        if (res == "0")
            return BadRequest("User does not exist!");
        else if (res == "1")
            return BadRequest("Wrong Password!");

        return CreatedAtAction(nameof(Login), new { token = res });
    }
}


using System;
using main_server.Models;
using main_server.Services;
using Microsoft.AspNetCore.Mvc;

namespace main_server.Controllers;

[Controller]
[Route("api/[controller]")]
public class PersonalDetailsController: Controller
{
    private readonly PersonalDetailsService _detailsService;

    public PersonalDetailsController(PersonalDetailsService detailsService)
    {
        _detailsService = detailsService;
    }

    [HttpPost("create")]
    public async Task<IActionResult> SaveUserDetails([FromBody] PersonalDetails request)
    {
        await _detailsService.SaveUserPref(request);

        return CreatedAtAction(nameof(SaveUserDetails), null);
    }

    [HttpGet("{username}")]
    public async Task<IActionResult> GetUserDetails(string username)
    {
        var details = await _detailsService.GetUserPrefByUsername(username);
        return Ok(details);
    }
}


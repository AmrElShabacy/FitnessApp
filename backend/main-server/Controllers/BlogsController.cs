using main_server.Services;
using main_server.Models;
using Microsoft.AspNetCore.Mvc;

namespace main_server.Controllers;

[Controller]
[Route("api/[controller]")]
public class BlogsController: Controller
{
    private readonly BlogService _blogService;

    public BlogsController(BlogService blogService)
    {
        _blogService = blogService;
    }

    [HttpPost("create")]
    public async Task<IActionResult> CreateArticle([FromBody] BlogArticleDTO request)
    {
        try
        {
            await _blogService.CreateArticle(request);
            return Ok();
        }
        catch(Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetAllArticles()
    {
        try
        {
            var res = await _blogService.GetArticles();
            return Ok(res);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GeArticleById(string id)
    {
        try
        {
            var res = await _blogService.GetArticleById(id);
            return Ok(res);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}


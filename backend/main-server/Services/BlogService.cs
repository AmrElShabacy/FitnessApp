using System;
using main_server.Models;
using MongoDB.Driver;

namespace main_server.Services;

public class BlogService
{
    private readonly IMongoCollection<BlogArticle> _blogsCollection;

    public BlogService(IMongoDatabase database)
    {
        _blogsCollection = database.GetCollection<BlogArticle>("blogs");
    }

    public async Task CreateArticle(BlogArticleDTO request)
    {
        //Get current date and add hardcoded author (admin) 
        var article = new BlogArticle(request.Title, request.ImgUrl, request.Body, "Admin", request.Subject, DateOnly.FromDateTime(DateTime.Now));
        await _blogsCollection.InsertOneAsync(article);
    }

    public async Task<List<BlogArticle>> GetArticles()
    {
        var filter = Builders<BlogArticle>.Filter.Empty;
        var res =  await _blogsCollection.FindAsync(filter);
        return res.ToList();
    }

    public async Task<BlogArticle> GetArticleById(string id)
    {

        var filter = Builders<BlogArticle>.Filter.Eq(doc => doc.Id, id);
        var res = await _blogsCollection.FindAsync(filter);
        return res.First();
    }
}


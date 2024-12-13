using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace main_server.Models;

public class BlogArticle
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("title")]
    public string Title { get; set; }

    [BsonElement("imgUrl")]
    public string ImgUrl { get; set; }

    [BsonElement("body")]
    public string Body { get; set; }

    [BsonElement("author")]
    public string Author { get; set; }

    [BsonElement("subject")]
    public string Subject { get; set; }

    [BsonElement("date")]
    public DateOnly Date { get; set; }

    public BlogArticle(string title, string imgUrl, string body, string author, string subject, DateOnly date)
    {
        Title = title;
        ImgUrl = imgUrl;
        Body = body;
        Author = author;
        Subject = subject;
        Date = date;
    }
}


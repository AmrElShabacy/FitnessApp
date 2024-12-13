using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace main_server.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("username")]
    public string Username { get; set; }

    [BsonElement("password")]
    public string Password { get; set; }

    [BsonElement("email")]
    public string Email { get; set; }

    [BsonElement("imgurl")]
    public string ImgUrl { get; set; }


    public User(string username, string pass, string email)
    {
        Username = username;
        Password = pass;
        Email = email;
    }
}


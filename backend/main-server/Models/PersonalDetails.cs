using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace main_server.Models;

public class PersonalDetails
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("username")]
    public string Username { get; set; }

    [BsonElement("age")]
    public string Age { get; set; }

    [BsonElement("weight")]
    public string Weight { get; set; }

    [BsonElement("height")]
    public string Height { get; set; }

    [BsonElement("goal")]
    public Goal Goal { get; set; }

    [BsonElement("bodyType")]
    public BodyType BodyType { get; set; }

    [BsonElement("followedDiet")]
    public Diet FollowedDiet { get; set; }

    [BsonElement("waterGlassesPerDay")]
    public string WaterGlassesPerDay { get; set; }
}


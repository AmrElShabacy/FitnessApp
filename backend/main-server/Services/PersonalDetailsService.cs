using main_server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace main_server.Services;

public class PersonalDetailsService
{
    private readonly IMongoCollection<PersonalDetails> _detailsCollection;

    public PersonalDetailsService(IMongoDatabase database)
    {
        _detailsCollection = database.GetCollection<PersonalDetails>("personalDetails");
    }

    public async Task SaveUserPref(PersonalDetails data)
    {
        await _detailsCollection.InsertOneAsync(data);
    }

    public async Task<PersonalDetails> GetUserPrefByUsername(string username)
    {
        var filter = Builders<PersonalDetails>.Filter.Eq(doc => doc.Username, username);
        var res = await _detailsCollection.FindAsync(filter);
        return res.FirstOrDefault();
    }

}


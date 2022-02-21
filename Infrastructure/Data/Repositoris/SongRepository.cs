using Core.Entites;
using Core.Interfaces;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositoris
{
    public class SongRepository : ISongRepository
    {

        //connecton
        private const string colletionName = "songs";
        private readonly IMongoCollection<Song> dbCollection;

        //filters for mongoDb
        private readonly FilterDefinitionBuilder<Song> filterBuilder = Builders<Song>.Filter;

        public SongRepository( IMongoDatabase dataBase)
        {
            dbCollection = dataBase.GetCollection<Song>(colletionName);

        }



        public async Task<Song> AddSongAsync(Song song)
        {
            if (song == null)
            {
                throw new ArgumentNullException(nameof(song));
            };

            await dbCollection.InsertOneAsync(song);

            return song;
        }

        public Task<bool> DeleteSongAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Song>> GetAllSongAsync()
        {
            return await dbCollection.Find(filterBuilder.Empty).ToListAsync();
        }

        public Task<Song> GetSongAsync(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}

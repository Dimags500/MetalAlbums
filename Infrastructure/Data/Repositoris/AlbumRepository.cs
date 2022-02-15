using Core.Entites;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;
using MongoDB.Driver;

namespace Infrastructure.Data.Repositoris
{

    //repo that connct mongoBd for getting Albums collection 
    public class AlbumRepository : IAlbumRepository
    {
        //connecton
        private const string colletionName = "albums";
        private readonly IMongoCollection<Album> dbCollection;
        
        //filters for mongoDb
        private readonly FilterDefinitionBuilder<Album> filterBuilder = Builders<Album>.Filter;


        public AlbumRepository( IMongoDatabase dataBase)
        {
          
            dbCollection = dataBase.GetCollection<Album>(colletionName);

        }
        public async Task<Album> AddAlbumAsync(Album album)
        {
            if (album == null) 
            {
                throw new ArgumentNullException(nameof(album));
            };

            await dbCollection.InsertOneAsync(album);

            return  album;

        }

        public async Task<Album> UpdateAlbumAsync(Album album)
        {
            if (album == null)
            {
                throw new ArgumentNullException(nameof(album));
            };

            FilterDefinition<Album> filter = filterBuilder.Eq(existAlnum => existAlnum.Id, album.Id);
            await dbCollection.ReplaceOneAsync(filter, album);

            return album;

        }

        public async Task DeleteAlbumAsync(Guid albumId)
        {
            FilterDefinition<Album> filter = filterBuilder.Eq(album => album.Id, albumId);

            await dbCollection.DeleteOneAsync(filter);
        }

        public async Task<Album> GetAlbumAsync(Guid albumId)
        {
            FilterDefinition<Album> filter = filterBuilder.Eq(ent => ent.Id, albumId);
            return await dbCollection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyCollection<Album>> GetAllAlbumsAsycn()
        {
            return await dbCollection.Find(filterBuilder.Empty).ToListAsync();
        }

        
    }
}

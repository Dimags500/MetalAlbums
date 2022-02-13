﻿using Core.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IAlbumRepository
    {
        Task<Album> GetAlbumAsync(string albumId);

        Task<List<Album>> GetAllAlbumsAsycn();

        Task<Album> AddAlbumAsync(Album album);
        Task<bool>DeleteAlbumAsync(string albumId)
    }
}

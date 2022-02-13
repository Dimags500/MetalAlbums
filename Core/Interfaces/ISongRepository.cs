﻿using Core.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface ISongRepository
    {
        Task<Song> GetSongAsync(string id);
        Task<List<Song>> GetAllSongAsync();
        Task<Song> AddSongAsync(Song song);
        Task<bool> DeleteSongAsync(string id);



    }
}
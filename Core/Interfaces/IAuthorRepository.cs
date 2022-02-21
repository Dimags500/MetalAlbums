using Core.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IAuthorRepository
    {

        Task<Author> GetAuthorAsync(Guid albumId);

        Task<IReadOnlyCollection<Author>> GetAllAuthorsAsync();

        Task<Album> AddAuthorAsync(Album album);
        Task DeleteAuthorAsync(Guid albumId);
        Task<Album> UpdateAuthorAsync(Album album);
    }
}

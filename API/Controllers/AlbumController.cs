using Core.Entites;
using Core.Interfaces;
using Infrastructure.Data.Repositoris;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]


    //[ApiExplorerSettings(IgnoreApi = true)]
    public class AlbumController : ControllerBase
    {
        private readonly IAlbumRepository albumRepository;

        public AlbumController(IAlbumRepository albumRepository)
        {
            this.albumRepository = albumRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyCollection<Album>>> GetAllAlbumsAsync()
        {
            var albums = await albumRepository.GetAllAlbumsAsycn();
            return Ok(albums);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Album>> GetAlbumByIdAsync(Guid id)
        {
            var album = await albumRepository.GetAlbumAsync(id);
            if (album == null)
            {
                return NotFound();
            }
            return Ok(album);
        }

        [HttpPost]
        public async Task<ActionResult<Album>> CreateAlbumAsync(Album album)
        {
            var newAlbum = new Album()
            {
                AlbumName = album.AlbumName,
                AlbumPicture = album.AlbumPicture,
                Author = album.Author,
                Year = album.Year

                //Songs = album.Songs,
            };

            await albumRepository.AddAlbumAsync(newAlbum);


            return CreatedAtAction(nameof(GetAlbumByIdAsync), new { Id = newAlbum.Id }, newAlbum);
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteAlbumAsync(Guid id)
        {
            var album = await albumRepository.GetAlbumAsync(id);

            if (album == null)
            {
                return NotFound();
            }

            await albumRepository.DeleteAlbumAsync(album.Id);

            return Ok();
        }



        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAlbumAsync(Guid id, Album newData)
        {
            var oldData = await albumRepository.GetAlbumAsync(id);

            if (oldData == null)
            {
                return NotFound();
            }

            //oldData.Songs = newData.Songs;
            //oldData.Songs.AddRange(newData.Songs);

            oldData.AlbumPicture = newData.AlbumPicture;
            oldData.Year = newData.Year;
            oldData.AlbumName = newData.AlbumName;  
            oldData.Author = newData.Author;

            await albumRepository.UpdateAlbumAsync(oldData);

            return Ok();
        }



    }
}

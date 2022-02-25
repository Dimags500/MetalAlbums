//using Core.Entites;
//using Core.Interfaces;
//using Microsoft.AspNetCore.Mvc;

//namespace API.Controllers
//{
//    [ApiController]
//    [Route("[controller]")]
//    public class SongController : ControllerBase
//    {

//        private readonly ISongRepository songRepository;

//        public SongController(ISongRepository songRepository)
//        {
//            this.songRepository = songRepository;
//        }



//        [HttpGet]
//        public async Task<ActionResult<IReadOnlyCollection<Song>>> GetAllSongsAsync()
//        {
//            var songs = await songRepository.GetAllSongAsync();
//            return Ok(songs);
//        }


//        [HttpPost]
//        public async Task<ActionResult<Album>> CreateSongAsync(Song song)
//        {
//            var newSong = new Song()
//            {
//              SongName = song.SongName ,
//              Year = song.Year ,
//              Album = song.Album ,
//              Author = song.Author ,
//              TrackNumber = song.TrackNumber 

//            };

//            await songRepository.AddSongAsync(newSong);


//            //return CreatedAtAction(nameof(GetAlbumByIdAsync), new { Id = newAlbum.Id }, newAlbum);

//            return Ok(newSong); 
//        }

//    }
//}
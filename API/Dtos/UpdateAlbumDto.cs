using Core.Entites;

namespace API.Dtos
{
    public class UpdateAlbumDto
    {
        public string Name { get; set; }

        public int Year { get; set; }

        public string AlbumPicture { get; set; }


        public int AuthorID { get; set; }

    }
}

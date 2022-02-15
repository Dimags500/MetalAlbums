using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entites
{
    public class Album : BaseEntity
    {

        public string Author { get; set; }

        public string AlbumName { get; set; }

        public int Year { get; set; }
        public string AlbumPicture { get; set; }

        public List<Song> Songs { get; set; }
    }
}

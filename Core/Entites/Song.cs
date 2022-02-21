using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entites
{
    public class Song : BaseEntity
    {
        public string SongName { get; set; }
        public string Album { get; set; }

        public string Author { get; set; }
        public int Year { get; set; }
        public int TrackNumber { get; set; }

    }
}

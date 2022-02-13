using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entites
{
    public class Song
    {
        public int Id { get; set; }
        public string SongName { get; set; }
        public int Year { get; set; }
        public Album Album { get; set; }
    }
}

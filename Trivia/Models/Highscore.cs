using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity;

namespace React.Trivia.Models
{
	public class Highscore
	{
		public int Id { get; set; }
		public int Score { get; set; }
		public int UserId { get; set; }
		//public AspNetUsers UserId { get; set; }
	}
}

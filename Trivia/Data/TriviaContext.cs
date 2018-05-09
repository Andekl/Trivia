﻿using Microsoft.EntityFrameworkCore;
using React.Trivia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace React.Trivia.Data
{
	public class TriviaContext : IdentityDbContext
	{
		public TriviaContext(DbContextOptions<TriviaContext> options)
			: base(options)
		{
		}

		public DbSet<Highscore> Highscore { get; set; }
		public DbSet<Question> Question { get; set; }
	}
}

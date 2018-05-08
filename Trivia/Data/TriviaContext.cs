using Microsoft.EntityFrameworkCore;
using React.Trivia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.Trivia.Data
{
	public class TriviaContext : DbContext
	{
		public TriviaContext(DbContextOptions<TriviaContext> options)
			: base(options)
		{
		}

		public DbSet<Highscore> Highscore { get; set; }
		public DbSet<Question> Question { get; set; }
		public DbSet<Answer> Answer { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Question>().ToTable("Question");
			modelBuilder.Entity<Answer>().ToTable("Answer");
			modelBuilder.Entity<Highscore>().ToTable("Highscore");
		}
	}
}

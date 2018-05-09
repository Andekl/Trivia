using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.Trivia.Models
{
	public class Question
	{
		public int Id { get; set; }
		public string QuestionName { get; set; }
		public string CorrectOption { get; set; }
		public string FalseOption1 { get; set; }
		public string FalseOption2 { get; set; }
	}
}

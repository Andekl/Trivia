using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Trivia.Models
{
	public class Question
	{
		public int Id { get; set; }
		public string QuestionName { get; set; }
		public string CorrectOption { get; set; }
		public string Option1 { get; set; }
		public string Option2 { get; set; }
		public string Option3 { get; set; }
    }
}

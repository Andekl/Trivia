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
        public Answer CorrectAnswerId { get; set; }
    }
}

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


questions = Question.create([
              {
                question: 'What was the first capital city of the United States?',
                answer: 'Philadelphia', published_at: DateTime.current },
              { question: 'In the movie "The Lion King", what was Simba\'s mother\'s name?',
                answer: 'Sarabi', published_at: DateTime.current },
              { question: 'Gymnophobia is the fear of what?',
                answer: 'Nudity', published_at: DateTime.current },
              { question: 'One kilobyte is equal to how many bytes?',
                answer: '1024', published_at: DateTime.current },
              { question: 'The writer Eric Blair went by what pen name?',
                answer: 'George Orwell', published_at: DateTime.current },
              { question: 'What city is the capital of Hungary?',
                answer: 'Budapest', published_at: DateTime.current }
            ])
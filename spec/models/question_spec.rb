require 'rails_helper'

RSpec.describe Question, type: :model do

  let(:question) { build(:question) }
  let(:question_1) { build(:question, answer: 'eight') }

  it 'has a valid factory' do
    expect(build(:question)).to be_valid
  end

  it 'is invalid without a question' do
    expect(build(:question, question: nil)).to_not be_valid
  end

  it 'is invalid without a answer' do
    expect(build(:question, answer: nil)).to_not be_valid
  end

  it 'returns true if equal' do
    expect(question_1.guess("eight")).to eq(true)
  end

  it 'returns true if equal' do
    expect(question_1.guess("Eight")).to eq(true)
  end

  it 'returns true if equal' do
    expect(question_1.guess("EIGHT")).to eq(true)
  end

  it 'returns false if user\'s guess is wrong' do
    expect(question_1.guess("eighth")).to eq(false)
  end

  it 'returns false if user\'s guess is wrong' do
    expect(question_1.guess("eight hundred bit")).to eq(false)
  end

  it 'returns true if equal and have additional words' do
    expect(question_1.guess("eight bit")).to eq(true)
  end

  it 'returns true if equal and have whitespace characters' do
    expect(question_1.guess("    eight bit    ")).to eq(true)
  end

  it 'returns true if equal and have valid html input' do
    user_input = '<p><br></p>'\
                 '<ul>'\
                  '<li>'\
                    '<h2>'\
                      '1 byte =<b><i> </i><u>eight</u></b><u> </u><i><u>bits</u></i>'\
                    '</h2>'\
                    '<i><u></u></i>'\
                  '</li>'\
                  '</ul>'\
                 '<p>   </p>'\
                 '<br><br><br><br><br>'
    expect(question.guess(user_input)).to eq(true)
  end

  it 'returns true if equal' do
    expect(question.guess("8")).to eq(true)
  end

  it 'returns false if user\'s guess is wrong' do
    expect(question.guess("8th")).to eq(false)
  end

  it 'returns false if user\'s guess is wrong' do
    expect(question.guess("80")).to eq(false)
  end

  it 'returns false if user\'s guess is wrong' do
    expect(question.guess("-8")).to eq(false)
  end

  it 'returns false if user\'s guess is wrong' do
    expect(question.guess("- 8")).to eq(false)
  end

  it 'returns true if equal and have whitespace characters' do
    expect(question.guess("   8")).to eq(true)
  end

  it 'returns true if equal and have additional words' do
    expect(question.guess("1 byte = 8")).to eq(true)
  end

  it 'returns true if equal and have additional words' do
    expect(question.guess("8 bits")).to eq(true)
  end

  it 'returns false if user\'s guess is wrong' do
    expect(question.guess("8.000")).to eq(false)
  end

  it 'returns false if user\'s guess is wrong' do
    expect(question.guess("8,000")).to eq(false)
  end

  it 'returns true if equal' do
    expect(question.guess("eight")).to eq(true)
  end

  it 'returns true if equal and have additional words' do
    expect(question.guess("1 Byte is equal to 8 Bit")).to eq(true)
  end

  it 'returns true if equal and have additional words' do
    expect(question.guess("eight bit")).to eq(true)
  end

  it 'returns false if user\'s guess is wrong' do
    expect(question.guess("eight hundred")).to eq(false)
  end

end

require 'rails_helper'
require 'rspec_api_documentation/dsl'


resource 'Questions' do
  before do
    FactoryGirl.create :question
    FactoryGirl.create :question, published_at: DateTime.current
    FactoryGirl.create :question, published_at: DateTime.current, deleted_at: DateTime.current + 1.days
  end

  get 'api/v1/frontend/questions' do
    example 'List of questions' do
      do_request

      expect(status).to eql 200
    end
  end
end

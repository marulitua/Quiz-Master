require 'api_helper'

RSpec.describe Api::V1::Admin::QuestionsController do
  describe 'POST create' do
    let :params do
      {
        question: "blah",
        answer: "blah",
      }
    end

    context 'success' do

      it 'create question' do
        expect {
          post :create, params
        }.to change { Question.count }.from(0).to 1

      end

    end
  end

  describe 'PATCH guess' do

    context 'success' do
      params = {
        question: "blah",
        answer: "blah"
      }


      it 'create question' do
        expect {
          post :create, params
        }.to change { Question.count }.from(0).to 1

      end

    end
  end

end
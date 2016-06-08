class Api::V1::Frontend::QuestionsController < Api::V1::BaseController
  def index
    @questions = Question.all_published
  end

  def guess
    @question = Question.find_by id: permitted_params[:id]
    if @question.nil? || @question.published_at.nil? || !@question.deleted_at.nil?
      render nothing: true, status: 404
    else
      if @question.guess permitted_params[:user_answer]
        @result = 'true'
      else
        @result = 'false'
      end
    end
  end

  private
    def permitted_params
      params.permit :user_answer, :id
    end
end
class Api::V1::Admin::QuestionsController < Api::V1::BaseController
  def index
    @questions = Question.all
  end

  def create
    @question = Question.new permitted_params
    @question.set_published_at unless params[:published_at] != "true"

    if @question.save
      render nothing: true, status: :created
    else
      render status: 200,
             json: { errors: [ @question.errors ] }
    end
  end

  def update
    @question = Question.find_by id: params[:id]
    if @question.nil?
      render nothing: true, status: 404
    else
      @question.update permitted_params
      if params[:published_at] == "true"
        @question.set_published_at
      elsif params[:published_at] == "false"
        @question.published_at = nil
      end

      if @question.save
        render nothing: true, status: 204
      else
        render status: 200,
             json: { errors: [ @question.errors ] }
      end
    end
  end

  def destroy
    @question = Question.find_by id: params[:id]
    if @question.nil?
      render nothing: true, status: 404
    else
      @question.destroy
      render nothing: true, status: 204
    end
  end

  private
    def permitted_params
      params.permit :question,
                    :answer,
                    :published_at
    end
end
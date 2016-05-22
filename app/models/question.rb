class Question < ActiveRecord::Base
  validates :question, presence: true
  validates :answer, presence: true

  scope :all_published, -> { where("published_at IS NOT NULL")}

  def destroy
    self.update_attributes(deleted_at: DateTime.current)
  end

  def delete
    destroy
  end

  def deleted?
    self.deleted_at.present?
  end

  def guess(user_input)
    @user_guess = sanitize(user_input)

    if answer.is_i?
      answer_in_words = answer.to_i.to_words(remove_hyphen: true)
      is_match? or is_match? answer_in_words
    else
      is_match?
    end
  end

  private
    def sanitize(input)
      full_sanitizer = Rails::Html::FullSanitizer.new
      full_sanitizer.sanitize(input.strip).strip.downcase
    end

    def is_match?(to_match = nil)

      if nil == to_match
        to_match = answer
      end

      @user_guess.match(/\b#{to_match}\b/i) ? true : false

    end
end

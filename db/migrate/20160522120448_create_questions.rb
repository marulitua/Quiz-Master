class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :question
      t.string :answer
      t.datetime :published_at
      t.datetime :deleted_at

      t.timestamps null: false
    end
  end
end

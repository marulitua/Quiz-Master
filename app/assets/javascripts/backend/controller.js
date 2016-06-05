QuestionManager.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._mainRegion = options.mainRegion;
    this._questions = options.questions;

    this._questions.fetch();

    // if (this._questions.isEmpty()) {
      // this._createSampleData();
    // }
  },

  showHome: function() {
    console.log("We are home");

    var homeView = new QuestionManager.Views.Home();

    console.log(homeView);

    QuestionManager.mainRegion.show(homeView);

    this._router.navigate('home');
  },

  showQuestions: function() {

    this._questions.fetch();

    console.log('Showing questions....', this._questions)

    var questionsView = new QuestionManager.Views.Questions({
      collection: this._questions
    });

    this.listenTo(questionsView, 'addQuestion:clicked', this.newQuestion);
    this.listenTo(questionsView, 'childview:delete:clicked', function(questionView, args) {
      args.model.destroy();
    });
    this.listenTo(questionsView, 'childview:edit:clicked', function(questionView) {
      this.editQuestion(questionView.model.id);
    });

    QuestionManager.mainRegion.show(questionsView);

    this._router.navigate('questions');
  },

  newQuestion: function() {
    var newQuestionForm = new QuestionManager.Views.QuestionForm({
      model: new QuestionManager.Models.Question()
    });

    this.listenTo(newQuestionForm, 'form:submitted', function(attrs) {
      this._questions.create(attrs);
      this.showQuestions();
    });

    this.listenTo(newQuestionForm, 'form:canceled', this.showQuestions);

    QuestionManager.mainRegion.show(newQuestionForm);

    this._router.navigate('questions/new');
  },

  editQuestion: function(id) {
    var question = this._questions.get(id),
        editQuestionForm;

    if (question) {
      editQuestionForm = new QuestionManager.Views.QuestionForm({
          model: question
      });

      this.listenTo(editQuestionForm, 'form:submitted', function(attrs) {
        question.save(attrs);
        this.showQuestions();
      });

      this.listenTo(editQuestionForm, 'form:canceled', this.showQuestions);

      QuestionManager.mainRegion.show(editQuestionForm);

      this._router.navigate('questions/edit/' + id);
    } else {
      this.showQuestions();
    }
  },

  _createSampleData: function() {
    _.each([
      {
        id: 1,
        question : 'What was the first capital city of the United States?',
        answer: 'Philadelphia'
      },
      {
        id: 2,
        question : 'In the movie "The Lion King", what was Simba\'s mother\'s name ?',
        answer: 'Sarabi'
      }], function(question) {
        this._questions.create(question);
      }, this);
  }
});

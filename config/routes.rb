Rails.application.routes.draw do

  namespace :api do
    namespace :v1, defaults: { format: 'json'} do
      namespace :admin do
        resources :questions
      end
      namespace :user do
        resources :questions do
          member do
            patch  :guess
          end
        end
      end
    end
  end

  root to: "application#index"

end

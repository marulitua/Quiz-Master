Rails.application.routes.draw do

  namespace :api do
    namespace :v1, defaults: { format: 'json'} do
      resources :questions do
        member do
          patch  :guess
        end
      end
    end
  end

  root to: "application#index"

end

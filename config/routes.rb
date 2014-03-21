Birdhaus::Application.routes.draw do
    root to: 'birdhaus#index'
    resources :birdhaus
    # get '/birdhaus', to: 'birdhaus#index'
end

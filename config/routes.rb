Birdhaus::Application.routes.draw do
    root to: 'birdhaus#index'
    get '/birdhaus', to: 'birdhaus#index'
end

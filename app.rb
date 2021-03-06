require 'sinatra'

get '/' do
  erb :index
end

get '/intro.html' do
  send_file 'views/intro.html'
end

get '/score.html' do
  send_file 'views/score.html'
end

get '/question.html' do
  send_file 'views/question.html'
end

get '/question/:view.html' do
  send_file "views/#{params[:view]}.html"
end

get '/scripts/*.js' do |path|
  send_file "app-front-end/#{path}.js"
end
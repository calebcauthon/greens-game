require 'sinatra'

get '/' do
  erb :index
end

get '/intro.html' do
  send_file 'views/intro.html'
end

get '/question1.html' do
  send_file 'views/question1.html'
end

get '/question2.html' do
  send_file 'views/question2.html'
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
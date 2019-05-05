require("sinatra")

Process.daemon if ARGV.any? {|i| i == '-D' }

set :public_folder, File.dirname(__FILE__) + '/public'

class App < Sinatra::Base
  get '/' do
    File.read("./index.html")
  end
end

'''
  var BASE_URL = "https://samples.openweathermap.org/data/2.5/forecast"

  city_id = "2111834"

  const params = new URLSearchParams();
  params.set("appid", token);
  params.set("id", city_id);

  return fetch(BASE_URL + "?" + params.toString(), {mode: "no-cors"})
    .then((resp) => resp.text())
    .catch((err) => console.log(err))
'''

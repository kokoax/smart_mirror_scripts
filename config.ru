require 'rubygems' unless defined? ::Gem
require File.dirname( __FILE__ ) + '/routing'

run Sinatra::Application

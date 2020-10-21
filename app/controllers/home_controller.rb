class HomeController < ApplicationController
    def home
        @algorithms = Algorithm.all
    end
end

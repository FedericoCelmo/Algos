class HomeController < ApplicationController
    def home
        Rails.application.config.assets.precompile += %w( home.css )
    end
end

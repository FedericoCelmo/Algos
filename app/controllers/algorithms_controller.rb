class AlgorithmsController < ApplicationController
  before_action :set_algorithm

  def show
    Rails.application.config.assets.precompile += %w( algorithms_controller.scss )#esta linea es para el css temporal de los algoritmos
  end

  private

  def set_algorithm
    @algorithm = Algorithm.find(params[:id])
  end
end

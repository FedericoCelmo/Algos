class AlgorithmsController < ApplicationController
  before_action :set_algorithm

  def show
  end

  private

  def set_algorithm
    @algorithm = Algorithm.find(params[:id])
  end
end

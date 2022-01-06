class Api::TagsController < ApplicationController
  def index
    @tags = Notes.where()
  end

  def show_notes
  end

  def create
  end

  def destroy
  end
end

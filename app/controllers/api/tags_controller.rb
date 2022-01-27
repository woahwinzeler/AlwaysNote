class Api::TagsController < ApplicationController
  attr_reader :note_id
  def index
    @tags = Note.find(params[:note_id])
  end

  def update
  end

  def show
  end

  def create
    @note_id = params.note_id 
    @note = Note.new(note_params)
  end

  def destroy
  end

  private 

  def note_params
    params.require(:tags).permit(:title, :color, :note_id)
  end
end

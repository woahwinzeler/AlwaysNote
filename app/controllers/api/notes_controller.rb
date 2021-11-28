class Api::NotesController < ApplicationController
  def destroy 
    @note = Note.new()
  end

  def create
  end

  def update 
  end

  private

  def note_params
    params.require(:note).permit(:title, :body)
  end

end

class Api::NotesController < ApplicationController
  def create 
    @note = Note.new(note_params)
    if @note.save
      render json: @note
    else 
      # may want to add functionality to the model that adds a title automatically 
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy 
    @note = Note.find(params[:note][:id])
    if !@note.nil?
      @note = nil 
      render json: @note 
    else
      render json: @note.errors.full_messages, status: 404
    end 
  end

  def update 
    @note = Note.find(params[:note][:id])
    if @note.update(note_params)
      render json: @note 
    else
      render json: @note.errors.full_messages, status: 422
    end 
  end

  private

  def note_params
    params.require(:note).permit(:title, :body)
  end

end

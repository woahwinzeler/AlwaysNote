class Api::NotesController < ApplicationController
  def index 
    notebook = Notebook.find(params[:notebook_id])
    @notes = notebook.notes
    render :index 
  end

  def show 
    @note = Note.find(params[:id])

    @tags = @note.tags

    if !@note.nil?
      render :show 
    else 
      render json: @note.errors.full_messages, status: 404
    end 
  end

  def create 
    @note = Note.new(note_params)
    if @note.save
      render :create 
    else 
      # may want to add functionality to the model that adds a title automatically 
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy 
    @note = Note.find(params[:note][:id])
    if !@note.nil?
      @note.destroy!
      render json: @note 
    else
      render json: @note.errors.full_messages, status: 404
    end 
  end

  def update 
    @note = Note.find(params[:note][:id])
    if @note.update(note_params)
      render :update 
    else
      render json: @note.errors.full_messages, status: 422
    end 
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end

end

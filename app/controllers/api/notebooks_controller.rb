class Api::NotebooksController < ApplicationController
  def index
    @user = current_user
    render json: @user.notebooks.all 
  end

  def show
    @notebook = Notebook.find(params[:notebook][:id])
    if !@notebook.nil?
      @notes = @notebook.notes
      render json: @notes 
    else
      render json: @notes.errors.full_messages, status: 404
    end
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id
    if @notebook.save
      render json: @notebook
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    notebook = Notebook.find(params[:notebook][:id])
    @notebook = notebook.update(notebook_params)
    if !@notebook.nil?
      render json: @notebook
    else
      render json: @notebook.errors.full_messages, status: 422
    end 
  end

  def destroy
    @notebook = Notebook.find(params[:notebook][:id])
    @notebook.destroy! 
    @notebook = nil
    render json: @notebook
  end 

  private

  def notebook_params
    params.require(:notebooks).permit(:title, :description)
  end
end

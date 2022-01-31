class Api::TagsController < ApplicationController
  #note_ids is how to pass down 
  def new
    #this should really be index
    @tags = Tag.where(user_id: params[:tag][:user_id])
    render json: @tags 
  end

  def update
    @tag = Tag.find(params.require([:tag]).permit([:id]))
    if !@tag.nil?
      if @tag.update(tag_params)
        render json: @tag
      else
        render json: @tag.errors.full_messages
      end
    else
      render json: @tag.errors.full_messages, status: 404
    end
  end

  def show
    #displays notes of a given tag
    @tag = Tag.find(params[:tag][:id].to_i) 
    if !@tag.nil?
      render json: @tag.notes
    else 
      render json: @tag.errors.full_messages, status: 404
    end 

  end

  def create
    debugger 
    @tag = Tag.new(tag_params)
    if @note.save 
      render json: @tag
    else 
      render json: @tag.errors.full_messages, status: 422; 
    end
  end

  def destroy
    @tag = Tag.find(params[:tag][:id])
    if !@tag.nil? 
      @tag.destroy!
      @tag = nil
      render json: @tag
    else
      render json: @tag.errors.full_messages, status: 404; 
    end 
  end

  private 

  def tag_params
    params.require(:tag).permit(:title, :color, :note_ids, :user_id)
  end
end

class Api::TagsController < ApplicationController
  #note_ids is how to pass down 
  def index
    #returns a users tags
    #http://localhost:3000/api/notebooks/18/notes/6/tags?tag[user_id]=1
    #working
    @tags = Tag.where(user_id: params[:tag][:user_id])
    render :index 
  end
  

  def update
    #tested and working
    # http://localhost:3000/api/notebooks/18/notes/6/tags/2?tag[id]=10&tag[title]=Another updated tag. Again.&tag[color]=green&tag[user_id]=1&tag[note_ids]=8,9,2
    @tag = Tag.find(params[:id].to_i)
    if !@tag.nil?
      note_ids = params[:note_ids].map{|str| str.to_i}
      title = params[:title]
      color = params[:color]

      @tag.color = color
      @tag.title = title
      @tag.note_ids = note_ids
      if @tag.save 
        render json: @tag
      else
        render json: @tag.errors.full_messages, status: 422
      end
    else
      render json: @tag.errors.full_messages, status: 404
    end
  end

  def show
    #displays notes of a given tag
    #working  http://localhost:3000/api/notebooks/18/notes/6/tags/2?tag[id]=10
    @tag = Tag.find(params[:id].to_i) 
    if @tag.notes.empty?
      render json: {}
    else 
      if !@tag.nil?
        render :show 
      else 
        render json: @tag.errors.full_messages, status: 404
      end 
    end 

  end

  def create 
    #is working
    #http://localhost:3000/api/notebooks/18/notes/6/tags?tag[user_id]=1&tag[color]=burgundy&tag[title]=Id is divisible by 3&tag[note_ids]=9, 3, 6
    @tag = Tag.new(tag_params)
    noteIds = params[:tag][:note_ids].map{|noteId| noteId.to_i}
    @tag.note_ids = noteIds; 
    if @tag.save 
      render json: @tag
    else 
      render json: @tag.errors.full_messages, status: 422; 
    end
  end

  def destroy
    #is working
    #http://localhost:3000/api/notebooks/24/notes/9/tags/18
    @tag = Tag.find(params[:id].to_i)
    if !@tag.nil? 
      @tag.destroy!
      @tag = nil
      render json: true 
    else
      render json: @tag.errors.full_messages, status: 404; 
    end 
  end

  private 

  def tag_params
    params.require(:tag).permit(:title, :color, :note_ids, :user_id)
  end
end

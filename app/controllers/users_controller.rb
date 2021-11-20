class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    
    if user.save
      login(user)
      redirect_to '/'
    else
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
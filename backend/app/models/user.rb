class User < ApplicationRecord
  has_many :posts

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def post_of_friends
    #later we'll create 2 methods,  recent posts vs posts by month/date..
    # cycle thru friends list, grab all their recent posts, 
    recent_posts = @current_user.friends.each do | friend | 
      friend.recent_posts
    end
    #then arrange this list by time


  end

  def friends
    friendships = Friendship.where("accepter_id = ? OR requester_id = ?", self.id, self.id )
    # extract the friend instance
    friends = Array.new
  
    friendships.each do | friendship | 
      if friendship.accepter_id == self.id 
        user = User.find(friendship.requester_id)
        friends.push(user)

      else
        user = User.find(friendship.accepter_id)
        friends.push(user)
      end
    end

    return friends
  end



end

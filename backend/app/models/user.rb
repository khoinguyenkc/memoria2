class User < ApplicationRecord
  has_many :posts
  has_many :familymemberships
  has_many :families, through: :familymemberships


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def post_of_family
    #later we'll create 2 methods,  recent posts vs posts by month/date..
    # cycle thru friends list, grab all their recent posts, 
    recent_posts = @current_user.family.each do | familymember | 
      familymember.recent_posts
    end
    #then arrange this list by time


  end

  def family
    familymembers = @current_user.families.first.users
    #this include the user himself


    #keeping here for archive
    # friendships = Friendship.where("accepter_id = ? OR requester_id = ?", self.id, self.id )
    # # extract the friend instance
    # friends = Array.new
  
    # friendships.each do | friendship | 
    #   if friendship.accepter_id == self.id 
    #     user = User.find(friendship.requester_id)
    #     friends.push(user)

    #   else
    #     user = User.find(friendship.accepter_id)
    #     friends.push(user)
    #   end
    # end

    # return friends

    return familymembers
  end



end

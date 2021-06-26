class User < ApplicationRecord
  has_many :posts
  has_many :familymemberships
  has_many :families, through: :familymemberships


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  
  #INSTANCE METHOD:
  #grabs recent posts of the user
  def recent_posts

    last = Date.parse(Time.current.to_s)
    first = Date.parse(60.days.ago.to_s)
    # posts = Post.where(created_at: first..last)
    #first last order matter! earlier date before later date!!!

    posts = Post.where("created_at >= ? AND created_at <= ? AND user_id = ?", first, last, self.id)
    return posts
  end


    #INSTANCE METHOD:
  #grabs posts of the user by date range
  def archive_posts(specs)
  end



  def family
    familymembers = self.families.first.users
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

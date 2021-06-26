class Post < ApplicationRecord
  belongs_to :user

  # scope :recent, -> { where( created_at: 60.days.ago.to_s .. Time.current.to_s)}


  def self.recent_posts_of_family(curr_user)
    #receive argument to be more Functional Programming

    #later we'll create 2 methods,  recent posts vs posts by month/date..
    # cycle thru friends list, grab all their recent posts, 
    recent_posts = Array.new
    curr_user.family.each do | familymember | 

      arr = familymember.recent_posts #instance method on User instance
      arr.each do | post | 

        recent_posts << post 
      end

    end 

    #then sort this list by time
    return recent_posts

  end


  def self.process_request(user, params)
    #<ActionController::Parameters {"q"=>"recent", "controller"=>"posts", "action"=>"index", "post"=>{}} permitted: false>
    if params["type"] == "recent"
      posts = Post.recent_posts_of_family(user)



    elsif params["type"] == "date"
      date = Date.new(params["year"], params["month"], params["date"])
      posts = Post.where(created_at:  date.beginning_of_day..date.end_of_day)
    elsif params["type"] == "month"
    end


    return posts

  end
end

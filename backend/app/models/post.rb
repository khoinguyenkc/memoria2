class Post < ApplicationRecord
  belongs_to :user

  def self.process_request(user, params)
    #<ActionController::Parameters {"q"=>"recent", "controller"=>"posts", "action"=>"index", "post"=>{}} permitted: false>
    if params["type"] == "recent"
      last = Date.parse(Time.current.to_s)
      first = Date.parse(60.days.ago.to_s)
      posts = Post.where(created_at: first..last)
      #first last order matter! earlier date before later date!!!

    elsif params["type"] == "date"
      date = Date.new(params["year"], params["month"], params["date"])
      posts = Post.where(created_at:  date.beginning_of_day..date.end_of_day)
    elsif params["type"] == "month"
    end


    return posts

  end
end

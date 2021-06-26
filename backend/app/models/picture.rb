class Picture < ApplicationRecord
  belongs_to :user
  belongs_to :photo_album
  belongs_to :post
end

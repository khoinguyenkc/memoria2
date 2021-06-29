class Picture < ApplicationRecord
  belongs_to :user
  belongs_to :picture_album
  belongs_to :post
end

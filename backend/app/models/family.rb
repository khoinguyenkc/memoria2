class Family < ApplicationRecord
    has_many :familymemberships
    has_many :users, through: :familymemberships
end

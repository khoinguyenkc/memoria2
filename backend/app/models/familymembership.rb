class Familymembership < ApplicationRecord
    belongs_to :user
    belongs_to :family
end

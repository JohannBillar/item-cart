require 'rails_helper'

RSpec.describe Api::V1::ItemsController, type: :controller do

  describe "items#index action" do
    it "should succesfully show the page" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

end

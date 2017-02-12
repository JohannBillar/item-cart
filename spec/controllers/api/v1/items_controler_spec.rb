require 'rails_helper'

RSpec.describe Api::V1::ItemsController, type: :controller do
  describe "items#index action" do
    it "should succesfully show the page" do
      get 'api/v1/items'
      # json = JSON.parse(respose.body)
      expect(response).to have_http_status(:success)
    end
  end
end

class HelloWorldController < ApplicationController
  layout "react_view"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end

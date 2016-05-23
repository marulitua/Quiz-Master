module ApiHelpers
  DEFAULT_PARAMS = { subdomain: 'api', format: :json, formats: :json }
end

RSpec.configure do |config|
  config.include ApiHelpers, type: :controller
end

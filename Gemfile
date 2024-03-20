source "https://rubygems.org"

# 1. bundle install
# 2. bundle exec jekyll serve
gem "jekyll", "~> 3.9.5"

group :jekyll_plugins do
  # https://github.com/github/pages-gem
  gem "github-pages", "~> 231"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
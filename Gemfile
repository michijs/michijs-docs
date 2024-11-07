source "https://rubygems.org"

# 1. gem install bundler
# 2. bundle install
# 3. bundle exec jekyll serve --livereload
# gem "jekyll", "~> 3.10.0"

group :jekyll_plugins do
  # https://github.com/github/pages-gem
  gem "github-pages", "~> 232"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick", "~> 1.9"

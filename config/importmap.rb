# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "bootstrap" # @5.3.3
pin "bootstrap-icons", to: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "bootstrap", to: "bootstrap.min.js"
pin "importmap" # @0.0.0
pin "fs" # @2.1.0
pin "process" # @2.1.0
pin "util" # @2.1.0

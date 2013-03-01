Package.describe({
  summary: "jquery.scrollintoview as a meteor smart package"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files("lib/jquery.scrollintoview/jquery.scrollintoview.js", "client");
});

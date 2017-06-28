var casper = require('casper').create({
  verbose : true,
  logLevel: "debug",
  pageSettings: {
        loadImages: false,
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'
    }
});


casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://1.1.103.1/reg.php?ah_goal=eula.html&ah_login=true&url=E2B8F3578D88E9A53591BB4081984694C7651C985B7B', function() {
    this.echo("\n\n\n"+this.getTitle());
});

casper.run();

jQuery(function ($, undefined) {
    var name = "";
    var encodedPwd = 'UGljdGV0X1RlY2gyMDE5IQ==';
    var trusted = false;

    function encodePassword(password) {
      return btoa(password);
    }

    function isKnownUser() {
        return name && name !== "";
    }

    function isTrustedUser() {
      return trusted;
    }

    $('#ptl-terminal').terminal(
        {
            hello: function () {
                if (isKnownUser()) {
                    this.echo("Hello " + name);
                } else {
                    this.read('Hello stranger, what is your name? ', username => {
                        name = username;
                        this.echo('Hello ' + username + ', nice to meet you.');
                        this.echo('If you need some help, please don\'t hesitate');
                    });
                }
            },

            whoami: function() {
              if (isKnownUser()) {
                this.echo(name);
              } else {
                this.echo("Good question. We haven't introduced ourselves yet.");
              }
            },

            help: function() {
                if (trusted) {
                  this.echo('Available commands: \n hello - It\'s always nice to know each other. This command allows you to input your name. \n help - To know what you can do on this terminal. \n apply - Command to apply to Pictet Technologies. Mandatory parameters: --name XXX --email YYY \n clear - You like it clean? This command is for you.');
                } else {
                  this.echo("Of course. I'm willing to help but are you worth it? Please insert the password.");
                  this.read('password: ', pwd => {
                      if (pwd === "password" || pwd === "admin" || pwd === "test") {
                          this.error("Nice try...");
                          return;
                      }

                      if (encodePassword(pwd) !== encodedPwd) {
                          this.error('Incorrect password');
                          return;
                      }

                      trusted = true;
                      this.echo('It looks like you\'re truly one of us. Welcome.');
                      this.echo('Available commands: \n hello - It\'s always nice to know each other. This command allows you to input your name. \n help - To know what you can do on this terminal. \n apply - Command to apply to Pictet Technologies. Mandatory parameters: --name XXX --email YYY \n clear - You like it clean? This command is for you.');
                  });
                }
            },

            apply: function(...args) {
                if (!isKnownUser()) {
                    this.error("Let's introduce ourselves first, shall we?");
                    return;
                }

                if (!isTrustedUser()) {
                    this.error('You must be logged in to apply.');
                    return;
                }

                var options = $.terminal.parse_options(args);
                if (!options.name) {
                    this.error("You need to specify your name.");
                    return;
                } else if (!options.email) {
                    this.error("You need to specify you email.");
                    return;
                }
                this.echo('Congratulations and thank you for taking the time to complete this challenge ' + options.name + '. We can\'t wait to hear more about you.');
                this.echo('Please send us a message to this special address ptl-website@pictet-technologies.com with your resume and we\'ll contact you soon.');
            }
        },
        {
            greetings: 'Hello, I am Pictet Technologies\' terminal.\nPlease use this interface to apply to our company.\n  ',
            name: 'ptl_terminal',
            height: 400,
            width: '100%',
            prompt: '[[;#a45457;]bash@PictetTech] > ',
            checkArity: false,
            enabled: false
        }
    );
});

console.log("Hello there. Want to know more? Have a look inside.");

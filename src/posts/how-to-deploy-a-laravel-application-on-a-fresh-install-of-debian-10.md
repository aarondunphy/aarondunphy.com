---
title: How to Deploy a Laravel Application on a Fresh Install of Debian 10
slug: "/blog/how-to-deploy-a-laravel-application-on-a-fresh-install-of-debian-10"
date: "2019-07-14"
description: A simple straight to the point instruction guide on how to Deploy a Laravel Application on a Fresh Install of Debian 10 (buster)
---

## Create a new user so we are not using root
```bash
adduser admin
usermod -aG sudo admin
su admin
```

## Install Apache

```bash
sudo apt update
sudo apt install apache2
```

## Install PHP7.3

Add PHP7.3 repository
```bash
sudo apt install lsb-release apt-transport-https ca-certificates
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
sudo echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list
```

Then install
```bash 
sudo apt update
sudo apt install php7.3
```

Verify PHP was installed correctly
```bash
php -v
```

Install common PHP extensions
```bash
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json php7.3-zip
```

If you need any other extensions, you can install with
```bash
sudo apt install php7.3-<entension-name>
```

## Install MariaDB

```bash
sudo apt install mariadb-server mariadb-client
```

Then secure the database, set a strong password, remove anonymous user, disable remote login for root and remove test database
```bash
sudo mysql_secure_installation
```

You can now connect to MariaDB
```bash
mysql -u root -p
```

## Set up Virtual Host
Create the directory of where your application will live (replace "example.com" with your domain)
```bash
sudo mkdir -p /var/www/example.com/public
```

Create a dummy holding page so we can test the virtual host configuration has worked
```bash
sudo nano /var/www/example.com/public/index.html
```

Then insert and save
```html
<html>
    <head>
        <title>Example.com!</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>
```

Create a name based virtual host configuration file to allow Apache to serve it
```bash
sudo nano /etc/apache2/sites-available/example.com.conf
```

Then insert and save (replace all refences of example.com with your own domain)
```conf
<VirtualHost *:80>

ServerAdmin example@me.com
ServerName example.com
ServerAlias www.example.com
DocumentRoot /var/www/example.com/public

<Directory /var/www/example.com>
    AllowOverride all
    Require all granted
</Directory>

ErrorLog ${APACHE_LOG_DIR}/example.com_error.log
CustomLog ${APACHE_LOG_DIR}/example.com_access.log combined

</VirtualHost>
```

Now let's enable the configuration file with Apache
```bash
sudo a2ensite example.com
```

Restart Apache for the configuration file to kick in
```bash
sudo service apache2 restart
```

As long as your domain is pointing to your server's IP address, you should now be able to see the dummy html file we added earlier by going to your domain e.g - http://example.com 


## Clone your Laravel app with Git

Install Git
```bash
sudo apt install git
```

Generate a ssh key for your server to communicate with GitHub
```bash
ssh-keygen
```

Copy your server's SSH public key and add it to your GitHub's repository deploy keys which can be found under the repository settings (I would suggest not enabling write access)
```bash
cat ~/.ssh/id_rsa.pub
```

Change directory to your domain
```bash
cd /var/www/example.com
```

Delete the public directory from one of the previous instructions above so it is completely empty
```bash
sudo rm -rf public/
```

Update the directory so it is owned by the admin user but accessible by apache
```bash
sudo chown -R server-user:www-data /var/www/example.com/
```

Clone your repository with ssh (you can get this from your repository on GitHub)
```bash
git clone git@github.com:<YourUserName>/<YourRepository>.git .
```


Update file/directory ownerships again after cloning and also ensure apache can read/write to the storage and cache.
```bash
sudo chown -R server-user:www-data /var/www/example.com/
find /var/www/example.com/ -type f -exec chmod 664 {} \;    
find /var/www/example.com/ -type d -exec chmod 775 {} \;
chgrp -R www-data storage bootstrap/cache
chmod -R ug+rwx storage bootstrap/cache
```

## Install composer
Following their [official docs](https://getcomposer.org/download/)
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

Then move it so it can be accessed [globally](https://getcomposer.org/doc/00-intro.md#globally)
```bash
sudo mv composer.phar /usr/local/bin/composer
```

Install dependencies from within your application folder
```bash
cd /var/www/example.com
composer install
```

## Install npm
```bash
sudo apt install npm
```

Install dependencies and run tasks from within your application folder
```bash
cd /var/www/example.com
npm install
npm run dev
```

## Create database

Connect to MariaDB
```bash
mysql -u root -p
```

Create database
```bash
create database my_db_name;
```


Happy Deploying!
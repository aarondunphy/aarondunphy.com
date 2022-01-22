---
title: How to Setup Quick SSH Access
slug: "/blog/how-to-setup-quick-ssh-access"
date: "2020-03-19"
description: How to Setup Quick SSH Access
---

In this article you will learn how you can set up a quick and easy way to SSH onto any server without needing to remember the user or IP address. This will work by  running a command similar to:

```bash
ssh server_name
```

---

## Machine Setup

Check if your machine already has a public SSH key generated:
```bash
cat ~/.ssh/id_rsa.pub
```

If you see “No such file or directory” then generate a SSH key otherwise skip this step (click enter at all prompts):
```bash
ssh-keygen
```

Edit the SSH config file to setup quick SSH access to a server from your local machine:
```bash
sudo nano ~/.ssh/config
```

Ensure all hosts use key chain is at the top of the file:
```bash
Host *
     UseKeyChain yes
```

Then you can insert as many host references as you would like. Insert the following (changing the server_name, ip_address and server_user):
```bash
Host server_name
     HostName ip_address
     User server_user
     IdentityFile ~/.ssh/id_rsa
     IdentitiesOnly yes
```

Copy your machine's ssh public key:
```bash
cat ~/.ssh/id_rsa.pub
```

## Server Setup

Add your machine's SSH public key to the server's authorized_keys file (you will need to SSH onto the server with `ssh user@ip` first):
```bash
sudo nano ~/.ssh/authorized_keys
```

--- 

You can then ssh on via
```bash
ssh server_name
```
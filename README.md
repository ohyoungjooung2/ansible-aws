Welcome to the ansible-aws wiki!  (**Under construction: When I have time)**

This repo is for creating ci/cd with ansible+awscodecommit+aws codedeploy+pipeline.

 To setup aws credentials for aws cli and ansible with .bashrc file.

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)

* Setup ansible(installation)

       oyj@controller:~$ mkdir ansible_aws
      

    

 **Example)**


      (node_dp) oyj@controller:~/deploy_aws$ cat ~/.bashrc  | tail -3
      export AWS_ACCESS_KEY_ID=AKIAXGQZTLE   #This is for aws cli and ansible
      export AWS_ACCESS_KEY=musomekeyAYEwnH8eORVFEZHK2hgF #This is for ansible(secret key)
      export AWS_SECRET_ACCESS_KEY=musomekeyAYEwnHORVFEZHK2hgF #this is for aws cli(secret key)


**1. Create codecommit repo.**



       test


**2. Git commit and push.**

       test


**3. Create deployment**


**4. Create pipeline.**

      Deploy node_auth nodejs app.



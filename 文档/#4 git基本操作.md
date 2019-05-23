### git的基本操作

#### 一   怎么把本地代码推到git上面

##### 1：（先进入项目文件夹）通过命令 git init 把这个目录变成git可以管理的仓库
- git init
   
##### 2：把文件添加到版本库中，使用命令 git add .添加到暂存区里面去，不要忘记后面的小数点“.”，意为添加文件夹下的所有文件
- git add .
  
##### 3：用命令 git commit告诉Git，把文件提交到仓库。
- git commit -m ' 提交的内容简介'
 
##### 4：关联到远程库
- git remote add origin 你的远程库地址

##### 5：获取远程库与本地同步合并（如果远程库不为空必须做这一步，否则后面的提交会失败）
- git pull --rebase origin master

##### 6：推代码，此过程会让输入git用户名以及密码
- git push -u origin master
* 查看本地代码是否更改
- git status
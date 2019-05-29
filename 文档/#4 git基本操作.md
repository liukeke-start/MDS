## git的基本操作

###  一   怎么把本地代码推到git上面

#### 1：（先进入项目文件夹）通过命令 git init 把这个目录变成git可以管理的仓库
``` javascript
git init
```
   
#### 2：把文件添加到版本库中，使用命令 git add .添加到暂存区里面去，.意为添加文件夹下的所有文件
``` javascript
git add .
```
  
#### 3：用命令 git commit告诉Git，把文件提交到仓库。
``` javascript
git commit -m '提交的内容简介'
```
 
#### 4：关联到远程库
``` javascript
git remote add origin 你的远程库地址
```

#### 5：获取远程库与本地同步合并（如果远程库不为空必须做这一步，否则后面的提交会失败）
``` javascript
git pull --rebase origin master
```

#### 6：推代码，此过程会让输入git用户名以及密码
``` javascript
git push -u origin master
```

### 二  推本地代码的时候怎么免密码

#### 1：首先需要检查你电脑是否已经有 SSH key 
- 运行 git Bash 客户端，输入如下代码：
``` javascript
cd ~/.ssh
ls
```
- 这说明已经有ssh了否则就没有

![enter image description here](https://i.loli.net/2019/05/24/5ce7d984e395487128.jpg)

- 这两个命令就是检查是否已经存在 id_rsa.pub 或 id_dsa.pub 文件，如果文件已经存在，那么你可以跳过步骤2，直接进入步骤3。

#### 2：创建一个 SSH key 
``` javascript
ssh-keygen -t rsa -C "your_email@example.com"
```
- 代码参数含义：
-t 指定密钥类型，默认是 rsa ，可以省略。
-C 设置注释文字，比如邮箱。
-f 指定密钥文件存储文件名。
- 以上代码省略了 -f 参数，因此，运行上面那条命令后会让你输入一个文件名，用于保存刚才生成的 SSH key 代码
- 接着又会提示你输入两次密码（该密码是你push文件的时候要输入的密码，而不是github管理者的密码），
当然，你也可以不输入密码，直接按回车。那么push的时候就不需要输入密码，直接提交到github上了
- 以下是本人的操作过程：

![enter image description here](https://i.loli.net/2019/05/24/5ce766e016a7483298.jpg)

#### 3：添加你的 SSH key 到 github上面去
- 首先你需要拷贝 id_rsa.pub 文件的内容，你可以用编辑器打开文件复制，也可以用git命令复制该文件的内容，如：
``` javascript
clip < ~/.ssh/id_rsa.pub
```

![enter image description here](https://i.loli.net/2019/05/24/5ce76762b1a9470612.jpg)

 - 登录你的github账号，从又上角的设置（ Account Settings ）进入，然后点击菜单栏的 SSH key 进入页面添加 SSH key。
 - 点击 Add SSH key 按钮添加一个 SSH key 。把你复制的 SSH key 代码粘贴到 key 所对应的输入框中，记得 SSH key 代码的前后不要留有空格或者回车。当然，上面的 Title 所对应的输入框你也可以输入一个该 SSH key 显示在 github 上的一个别名。默认的会使用你的邮件名称。
 
 ![enter image description here](https://i.loli.net/2019/05/24/5ce76865dc23522328.jpg)
 
#### 4：测试一下该SSH key
``` javascript
ssh -T git@github.com
```
- 或者提交一次试试
#### 5：由于输入密码的解决办法
- 由于我在步骤2的时候添加了密码，所以每次push的时候还需要密码，例如：

![enter image description here](https://i.loli.net/2019/05/24/5ce767a79383267136.jpg)
 
- 这个地方需要输入创建ssh时候的密码，解决办法如下：
``` javascript
eval `ssh-agent -s`
ssh-add
```

![enter image description here](https://i.loli.net/2019/05/24/5ce767f1be1e916009.jpg)

- 这样就可以push的时候不需要密码了


### 三 git的基本操作
- 查看git地址
``` javascript
git remote -v
```
- 查看远程分支
``` javascript
git branch -a  
```
- 提交之前查看本次提交修改了那些文件
``` javascript
git status
```
- 新建一个dev分支并且切换到dev分支
``` javascript
git checkout -b dev
// git checkout命令加上-b参数表示创建并切换，相当于以下两条命令：
// git branch dev
// git checkout dev
```
- 查看当前分支
``` javascript
git branch 
```
- 切换到主分支上
``` javascript
git checkout master
```
- 把dev分支的工作成果合并到master分支上：
``` javascript
git merge dev
```
- 删除新建的dev分支
``` javascript
git branch -d dev
// 删除的时候需要切换到master主分支上才可以删除新建的dev分支
```
![enter image description here](https://i.loli.net/2019/05/24/5ce789d1ab25123197.png)
``` javascript
git add .
git commit -m '提交内容说明'
git push origin master
// 把修改的都提交上去
```
- 忽略git检查

![enter image description here](https://i.loli.net/2019/05/29/5cedf8c84517435189.jpg)

``` javascript
git commit --no-verify -m '提交内容说明'
```
- 注意：所有的命令都是在git bash中完成的。
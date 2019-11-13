## window安装node版本管理器nvm

### 安装之前需要删除的文件
- 请注意： 在安装nvm for windows之前，你需要卸载任何现有版本的node.js。并且需要删除现有的nodejs安装目录（例如："C:\Program Files\nodejs’）。因为，nvm生成的symlink（符号链接/超链接)不会覆盖现有的（甚至是空的）安装目录。
你还需要删除现有的npm安装位置（例如“C:\Users\liukeke\AppData\Roaming\npm”），以便正确使用nvm安装位置。

### 安装
- 最新下载地址：https://github.com/coreybutler/nvm-windows/releases
- 会出现如下选择：
- nvm-noinstall.zip： 这个是绿色免安装版本，但是使用之前需要配置
- nvm-setup.zip：这是一个安装包，下载之后点击安装，无需配置就可以使用，方便。
- Source code(zip)：zip压缩的源码
- Sourc code(tar.gz)：tar.gz的源码，一般用于*nix系统
- 目前只是简单使用下载nvm-set.zip文件就可以。
- 下载之后点击安装即可。

### 检测是否安装成功
- 在cmd里面执行 nvm 如下图则安装成功：
![enter image description here](https://i.loli.net/2019/11/13/XTUkI2l8EeBhjDV.png)
- 否则会提示：nvm: command not found


### nvm的使用
- 查看目前安装了哪些版本 nvm ls， * 代表当前在这个node版本下：
``` javascript
 nvm ls // 查看安装了哪些node版本
```
![enter image description here](https://i.loli.net/2019/11/13/v8S3kptI5L6l7mr.png)
- 切换node版本
``` javascript
 nvm use 13.1.0 // 13.1.0(node版本号) 
```
![enter image description here](https://i.loli.net/2019/11/13/A7P5MawDHpgFCKf.png)
- 安装node版本
``` javascript
nvm install 6.10.0  // 安装指定的版本的nodejs
```
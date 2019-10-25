## npm和yarn的区别

###  一  npm
- npm是目前js最流行的包管理工具，也是node.js能够如此成功的主要原因之一。通过npm可以安装，共享，分发代码，管理项目依赖关系。
- npm由三个独立的部分组成：
网站（package），注册表（registry），命令行工具（cli）
#### npm的缺点
- npm install的时候巨慢。
- 同一个项目，安装的时候无法保持一致性。
- 安装的时候，包会在同一时间下载和安装，中途某个时候，一个包抛出了一个错误，但是npm会继续下载和安装包。因为npm会把所有的日志输出到终端，有关错误包的错误信息就会在一大堆npm打印的警告中丢失掉，并且你甚至永远不会注意到实际发生的错误。

###  二  yarn
- yarn是由Facebook,Googke,Exponent和Tilde联合推出的一个新的JS包管理工具，正如官方文档中写的，yarn是为了弥补npm的一些缺陷而出现的。yarn 定位为"快速、可靠、安全的依赖管理工具"。

#### yarn的优点
- 速度快
- 安装版本统一
- 更简洁的输出
- **多注册来源处理
- 更好的语义化

 
###  三 npm和yarn的区别
#### 1. 命令的对比
``` javascript
npm install                    yarn
npm install react --save       yarn add react
npm uninstall react --save     yarn remove react
npm install react --save-dev   yarn add react --dev
npm update --save              yarn upgrade
```
#### 2. yarn对比npm的优点
- 离线模式
yarn会有一个缓存目录，会缓存以前安装过的软件包，再次安装时就不必从网络下载了，大大加速安装速度。
- 依赖关系确定性
在每台机器上针对同一个工程安装时，生成的依赖关系顺序和版本是一致的。
- 网络性能优化
下载软件时会优化请求顺序，避免请求瀑布发生。
- 网络回弹
yarn在某个安装包请求失败时不会导致安装失败，它会自动去尝试重新安装。而npm则会毫不犹豫的失败，导致得再来一次，耗费时间。
- 多注册来源
所有的依赖包，不管他被不同的库间接关联引用多少次，安装这个包时，只会从一个注册来源去装，要么是npm要么是bower，防止出现混乱不一致。
- 偏平模式
对于多个包依赖同一个子包的情况，yarn会尽量提取为同一个包，防止出现多处副本，浪费空间。比如1.2中，yarn会为babel-generator和babel-helper-define-map创建同一个lodash子依赖，这样就节约一份的空间。


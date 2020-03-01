#  Twig学习心得
### Twig是一款灵活、快速、安全的PHP模板引擎。
### 模版导向语法
遍历一个空数组时，会显示一个默认文本：
``` twig
{% for user in users %}
    * {{ user.name }}
{% else %}
    No users have been found.
{% endfor %}
```
### 全功能
多重继承，块，自动化输出转义，以及其他许多特性
``` twig
{% extends "layout.html" %}

{% block content %}
    页面内容...
{% endblock %}
```
### 安全
说到安全，Twig拥有一些独特的特性：
- 自动输出转义：为安全考虑，你可以全局启用自动输出转义，或者只对某个块启用：
``` twig
{% autoescape true %}
    {{ var }}
    {{ var|raw }}     {# var won't be escaped #}
    {{ var|escape }}  {# var won't be doubled-escaped #}
{% endautoescape %}
```
###  沙盒
Twig可以在沙盒环境下评估任意模版，用户只能访问一组有限的标签，过滤器，以及由开发者定义的对象方法。沙盒可以全局地或者单独对某些模版启用：
``` twig
{{ include('page.html', sandboxed = true) }}
```
### 基础的API用法
- Twig的PHP API
``` php
require_once '/path/to/vendor/autoload.php';

$loader = new Twig_Loader_Array(array(
    'index' => 'Hello {{ name }}!',
));
$twig = new Twig_Environment($loader);

echo $twig->render('index', array('name' => 'Fabien'));
```
Twig使用一个加载器loader(Twig_Loader_Array)来定位模板，以及一个环境变量environment(Twig_Environment)来存储配置信息。

其中， render() 方法通过其第一个参数载入模板，并通过第二个参数中的变量来渲染模板。

由于模板通常是存放在文件系统中的，Twig还有一个文件系统加载器：
``` php
$loader = new Twig_Loader_Filesystem('/path/to/templates');
$twig = new Twig_Environment($loader, array(
    'cache' => '/path/to/compilation_cache',
));

echo $twig->render('index.html', array('name' => 'Fabien'));
```
> **注意：**如果你没有使用Composer，像下面这样使用Twig的内置自动加载器：
``` php
require_once '/path/to/lib/Twig/Autoloader.php';
Twig_Autoloader::register();
```
### 简单的模板
有两种形式的分隔符：{% ... %} 和 {{ ... }}。前者用于执行语句，例如for循环；后者将表达式的结果输出到模板中。
``` html
<body>
  <ul id="navigation">
  {% for item in navigation %}
    <li><a href="{{ item.href }}">{{ item.caption }</a></li>
  {% endfor %}
  </ul>
  <h1>My Webpage</h1>
  {{ a_variable }}
</body>
```
### 变量
应用程序将变量传入模板中进行处理。变量可以包含你能访问的属性或元素。变量的可视化表现形式很大程度上取决于提供变量的应用程序。

你可以使用.来访问变量的属性(方法或PHP对象的属性，或PHP数组单元）；也可以使用所谓的"subscript"语法[]:
``` twig
{{ foo.bar }}
{{ foo['bar'] }}
``` 
当属性包含特殊字符时（比如-，将被解析为减号操作符），使用attribute函数访问变量属性：
``` twig
{# equivalent to the non-working foo.data-foo #}
{{ attribute(foo, 'data-foo') }}
``` 
> **注意：**你务必知道花括号并不是变量的一部分，它只是一个打印声明。在访问标签内部的变量时，不要将其放在花括号中。

如果变量或属性不存在，当strict_variables被设置为false时，你将接收一个null值。另外，如果strict_variables被设置了，Twig将抛出一个错误（查看 环境选项）。
> **注意：**如果你想访问变量的动态属性，使用attribute函数替代。

### 全局变量
以下变量在模板中始终可用：
- _self: 引用当前模板；
- _context: 引用当前上下文；
- _charset: 引用当前字符集；
### 设置变量
可以通过过滤器filters来修改变量。过滤器中，用|分隔多个变量，还可以在括号中加入可选参数。可以链接多个过滤器。一个过滤器的输出结果将用于下一个过滤器中。

下面的例子会删除所有带有name和title-cases的HTML标签:
``` twig
{{ name|striptags|title }}
``` 
过滤器接收由圆括号包裹的参数。这个例子中，加入了一个由逗号分隔的参数列表：
``` twig
{{ list|join(', ') }}
``` 
要在一段代码中应用过滤器，需要将它包裹在filter标签中：
``` twig
{% filter upper %}
    This text becomes uppercase
{% endfilter %}
``` 
访问filters页面，了解更多内置过滤器。
### 函数
函数可被调用，用于生产内容。函数通过函数名被调用，其后紧跟圆括号(())，它还可以设置参数。

举个例子，range返回一个包含整数等差数列的列表：
``` twig
{% for i in range(0, 3) %}
    {{ i }},
{% endfor %}
``` 
访问functions页面，了解更多的内置函数。
### 具名实参
Twig 1.12 新加入的具名实参支持。
``` twig
{% for i in range(low=1, high=10, step=2) %}
    {{ i }},
{% endfor %}
``` 
使用具名实参，使模板中作为参数被传递的值更加清晰。
``` twig
{{ data|convert_encoding('UTF-8', 'iso-2022-jp') }}
{# versus #}
{{ data|convert_encoding(from='iso-2022-jp', to='UTF-8') }}
{% endfor %}
``` 
具名实参同样允许你跳过某些不需要改变默认值的参数：
``` twig
{% endfor %}
{# 第一个参数是日期格式，如果传递的是空值，它将是默认的全局日期格式。 #}
{{ "now"|date(null, "Europe/Paris") }}
{# 或者，通过为时区使用一个具名实参来跳过格式值。#}
{{ "now"|date(timezone="Europe/Paris") }}
{% endfor %}
``` 
你还可以在一次调用中，同时使用位置参数和具名实参，此时，位置参数必须放在具名实参前面：
``` twig
{{ "now"|date('d/m/Y H:i', timezone="Europe/Paris") }}
``` 
> **提示：**每个函数和过滤器的文档页面都有一节，列出支持的所有参数。
### 控制结构
控制结构是指控制程序流程的所有东西——条件语句（例如 if/elseif/else），for循环，以及程序块等等。控制结构出现在 {% ... %}块中。

例如，要显示一个被调用的user变量中提供的用户（users）列表，使用for标签：
``` twig
<h1>Members</h1>
<ul>
    {% for user in users %}
        <li>{{ user.username|e }}</li>
    {% endfor %}
</ul>
``` 
if 标签可以用来测试表达式：
``` twig
{% if users|length > 0 %}
    <ul>
        {% for user in users %}
            <li>{{ user.username|e }}</li>
        {% endfor %}
    </ul>
{% endif %}
``` 
前往tags页面，了解更多内置的标签。
### 注释
要在模板中注释某一行，使用注释语法{# ...#}。这常用于调试或者为自己或其他模板设计师添加信息。
```twig
{# note: disabled template because we no longer use this
    {% for user in users %}
        ...
    {% endfor %}
#}
``` 
### 其他操作符
在Twig 1.12.0版加入了对扩展的三元操作符的支持。
- ?:: 三元操作符：

``` twig
{{ foo ? 'yes' : 'no' }}

{# as of Twig 1.12.0 #}
{{ foo ?: 'no' }} 等同于 {{ foo ? foo : 'no' }}
{{ foo ? 'yes' }} 等同于 {{ foo ? 'yes' : '' }}
``` 
- if
``` twig
{% if online == false %}
    <p>Our website is in maintenance mode. Please, come back later.</p>
{% endif %}

{% if users %}
    <ul>
        {% for user in users %}
            <li>{{ user.username|e }}</li>
        {% endfor %}
    </ul>
{% endif %}

{% if kenny.sick %}
    Kenny is sick.
{% elseif kenny.dead %}
    You killed Kenny! You bastard!!!
{% else %}
    Kenny looks okay --- so far
{% endif %}
``` 
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{530:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("blockquote",[e("p",[t._v(" 传说 go 语言天生支持高并发（执行速度接近C,网络服务接近Nginx）。"),e("br"),t._v("\n Golang实现了 CSP 并发模型做为并发基础，底层使用goroutine做为并发实体，goroutine非常轻量级可以创建几十万个实体。实体间通过 channel 继续匿名消息传递使之解耦，在语言层面实现了自动调度，这样屏蔽了很多内部细节，对外提供简单的语法关键字，大大简化了并发编程的思维转换和管理线程的复杂性。"),e("br"),t._v("\n 一句话总结：go语言在设计的时候从关键字层面实现了多协程开发，好像语言天生支持高并发一样。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/big_white_py/article/details/111465167",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Docker采用的是Go语言编写的，该语言一种静态强类型、编译型、并发型，并具有垃圾回收功能的编程语言，常用于Web程序开发，并且具有成熟的Web开发框架，如Beego、Gin、Iris等等。")]),t._v(" "),e("h2",{attrs:{id:"docker-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-命令"}},[t._v("#")]),t._v(" docker 命令")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker仓库"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("docker 命令可以通过 --help 进行查看，比如"),e("code",[t._v("docker --help")]),t._v("、"),e("code",[t._v("docker run --help")]),t._v("等")])]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("docker version")]),t._v("  查看docker版本信息")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("docker info")]),t._v("  查看系统信息，包括当前系统 docker 镜像和容器的数量")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("docker images")]),t._v("  查看已下载镜像")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("docker search <镜像名>")]),t._v("  从中央仓库搜索镜像")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("docker pull 镜像名<:tags>")]),t._v(" 从仓库拉取。比如下载Tomcat 8.0 镜像："),e("code",[t._v("docker pull tomcat:8.0")])])]),t._v(" "),e("li",[e("p",[t._v("删除镜像")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("docker rmi repository<:tag>")]),t._v("  # 根据名称和版本删除，如果不指定tag，默认是lastest")]),t._v(" "),e("li",[e("code",[t._v("docker rmi IMAGE_ID")]),t._v("          # 根据镜像id删除")]),t._v(" "),e("li",[e("code",[t._v("docker rmi IMAGE_ID1 IMAGE_ID2 ...")]),t._v("  # 批量删除")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("docker run <参数> 镜像id|镜像名称")]),t._v("   运行（从镜像到容器）"),e("br"),t._v("\n参数：")]),t._v(" "),e("ul",[e("li",[t._v("--name: 为启动容器指定一个名字，注意有两个 --。")]),t._v(" "),e("li",[t._v("-d：表示以后台方式运行,并返回容器ID。")]),t._v(" "),e("li",[t._v("-i：以交互模式运行容器。")]),t._v(" "),e("li",[t._v("-t：为容器重新分配一个伪输入终端。")]),t._v(" "),e("li",[t._v("-p：主机端口:容器端口 | 容器端口 | ip:主机端口:容器端口。")]),t._v(" "),e("li",[t._v("-P：随机端口映射，容器内部端口随机映射到主机端口。")]),t._v(" "),e("li",[t._v("--link=[]：添加链接到另一个容器。")])]),t._v(" "),e("p",[t._v("比如："),e("code",[t._v("docker run -itd --name MyCentos7 centos:7")]),t._v("、"),e("code",[t._v("docker run --rm -it --cap-add SYS_ADMIN MyCentos7 sh")]),t._v("、"),e("code",[t._v("docker run -d -p 8888:8888 sqlflow/sqlflow:latest")])])]),t._v(" "),e("li",[e("p",[t._v("进入容器")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("docker run -it [镜像id|镜像名] /bin/bash")]),t._v("   使用run方式在创建时进入")]),t._v(" "),e("li",[e("code",[t._v("docker attach --sig-proxy=false 容器名称|容器ID")]),t._v("    使用 attach 命令，进入已启动的容器")])]),t._v(" "),e("blockquote",[e("p",[t._v("直接进入 容器启动命令的终端，不会启动新进程，多个attach连接共享容器屏幕，参数：--sig-proxy=false 确保CTRL-D或CTRL-C不会关闭容器")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("docker exec -it 容器名称|容器ID /bin/bash")]),t._v("   使用 exec 命令，进入已启动的容器（进入容器后开启一个新的终端，可以在里面进行操作）")])])]),t._v(" "),e("li",[e("p",[t._v("查看所有运行的容器")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("docker ps")]),t._v(" 查看正在运行的容器")]),t._v(" "),e("li",[e("code",[t._v("docker ps -q")]),t._v("  查看正在运行的容器的ID")]),t._v(" "),e("li",[e("code",[t._v("docker ps -a")]),t._v("  查看正在运行+历史运行过的容器")]),t._v(" "),e("li",[e("code",[t._v("docker ps -s")]),t._v("  显示运行容器总文件大小")])])]),t._v(" "),e("li",[e("p",[t._v("停止与删除容器")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("docker stop 容器名|容器id")]),t._v("  停止一个运行中的容器")]),t._v(" "),e("li",[e("code",[t._v("docker kill 容器名|容器id")]),t._v("  杀掉一个运行中的容器")]),t._v(" "),e("li",[e("code",[t._v("docker rm 容器名|容器id")]),t._v("  删除一个已停止的容器")]),t._v(" "),e("li",[e("code",[t._v("docker rm -f 容器名|容器id")]),t._v("  删除一个运行中的容器")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("docker logs <参数>容器名|容器id")]),t._v("  查看容器日志"),e("br"),t._v("\n参数：")]),t._v(" "),e("ul",[e("li",[t._v("-f 跟踪日志输出")]),t._v(" "),e("li",[t._v("-t：显示时间戳")]),t._v(" "),e("li",[t._v("--tail N：仅列出最后N条日志")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("docker top 容器ID|容器名")]),t._v("  查看容器内进程")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("docker inspect 容器ID|容器名")]),t._v("  查看容器信息")])]),t._v(" "),e("li",[e("p",[t._v("主机和容器之间数据复制")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("docker cp 容器名|容器ID:/[container_path] [local_path]")]),t._v("  将容器中的文件copy至本地路径")]),t._v(" "),e("li",[e("code",[t._v("docker cp [local_path] 容器名|容器ID:/[container_path]")]),t._v("  将主机文件copy至容器")]),t._v(" "),e("li",[e("code",[t._v("docker cp [local_path] rabbitmq:/[container_path]")]),t._v("  将主机文件copy至容器，目录重命名为[container_path]（注意与非重命名copy的区别）")])])]),t._v(" "),e("li",[e("p",[t._v("容器打包镜像，提交仓库")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('docker commit -a "作者" -m "简要说明" 容器ID 想要打包成的镜像名称:版本号')]),t._v("  将容器打包成镜像")]),t._v(" "),e("li",[t._v("去docker官网（https://hub.docker.com/）注册账号，并且建立仓库")]),t._v(" "),e("li",[e("code",[t._v("docker login")]),t._v(" 从Linux登录，输入用户名密码")]),t._v(" "),e("li",[e("code",[t._v("docker tag 本地的镜像名 docker用户名/远程仓库名")]),t._v("  设置镜像标签")]),t._v(" "),e("li",[e("code",[t._v("docker push docker用户名/远程仓库名")]),t._v("   推送（上传）镜像")])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/xfeiyun/p/15992126.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("ul",[e("li",[t._v("Docker-Compose 学习")]),t._v(" "),e("li",[t._v("DockerFile 学习")]),t._v(" "),e("li",[t._v("网络隔离、独立IP设置（使Docker容器拥有可被宿主机以外的机器直接访问的独立IP）、网桥命名空间、创建网桥")]),t._v(" "),e("li",[t._v("pipework 网络工具使用（打通容器间的网络）")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("点击查看")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#停止docker")]),t._v("\nsystemctl stop "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#docker0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" dev docker0 down\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除docker0网桥")]),t._v("\nbrctl delbr docker0\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新增一个docker0网桥")]),t._v("\nbrctl addbr docker0\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#增加网卡(这里ip也完全使用这个)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" addr "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".10.0/24 dev docker0\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启用网卡")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" dev docker0 up\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启docker服务")]),t._v("\nsystemctl restart "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"安装docker-阿里云"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-阿里云"}},[t._v("#")]),t._v(" 安装docker（阿里云）")]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"卸载原来安装的docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载原来安装的docker"}},[t._v("#")]),t._v(" 卸载原来安装的Docker")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("查看当前docker状态\nsystemctl status "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n\n如果是运行状态则停掉\nsystemctl stop "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n\n查看yum安装的docker文件包\nyum list installed "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n\n查看docker相关的rpm源文件\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" -qa "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n\n删除所有安装的docker文件包\nyum -y remove docker.x86_64\n\n删除docker的镜像文件，默认在/var/lib/docker目录下\n")])])]),e("h3",{attrs:{id:"安装dockerce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装dockerce"}},[t._v("#")]),t._v(" 安装DockerCE")]),t._v(" "),e("p",[t._v("Docker有两个分支版本：Docker CE和Docker EE，即社区版和企业版。本教程基于CentOS 7安装Docker CE。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("安装Docker的依赖库。\n"),e("code",[t._v("yum install -y yum-utils device-mapper-persistent-data lvm2")])])]),t._v(" "),e("li",[e("p",[t._v("添加Docker CE的软件源信息\n"),e("code",[t._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo")])])]),t._v(" "),e("li",[e("p",[t._v("安装Docker CE")])])]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("yum makecache fast\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("启动Docker服务\n"),e("code",[t._v("systemctl start docker")])])]),t._v(" "),e("h3",{attrs:{id:"配置镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置镜像"}},[t._v("#")]),t._v(" 配置镜像")]),t._v(" "),e("p",[t._v("Docker的默认官方远程仓库是hub.docker.com，由于网络原因，下载一个Docker官方镜像可能会需要很长的时间，甚至下载失败。为此，阿里云容器镜像服务ACR提供了官方的镜像站点，从而加速官方镜像的下载。下面介绍如何使用阿里云镜像仓库。")]),t._v(" "),e("p",[t._v("将下面命令中的镜像仓库地址https://kqh8****.mirror.aliyuncs.com替换为阿里云为您提供的专属镜像加速地址。")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/docker/daemon.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'EOF\'\n{\n  "registry-mirrors": ["https://kqh8****.mirror.aliyuncs.com"]\n}\nEOF')]),t._v("\n")])])]),e("p",[t._v("重新加载服务配置文件。\n"),e("code",[t._v("systemctl daemon-reload")])]),t._v(" "),e("p",[t._v("重启Docker服务\n"),e("code",[t._v("systemctl restart docker")])]),t._v(" "),e("h3",{attrs:{id:"使用docker安装nginx服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用docker安装nginx服务"}},[t._v("#")]),t._v(" 使用Docker安装Nginx服务")]),t._v(" "),e("ol",[e("li",[t._v("查看Docker镜像仓库中Nginx的可用版本。\n"),e("code",[t._v("docker search nginx")])]),t._v(" "),e("li",[t._v("拉取最新版的Nginx镜像。\n"),e("code",[t._v("docker pull nginx:latest")])]),t._v(" "),e("li",[t._v("查看本地镜像\n"),e("code",[t._v("docker images")])]),t._v(" "),e("li",[t._v("运行容器\n"),e("code",[t._v("docker run --name nginx-test -p 8080:80 -d nginx")])])]),t._v(" "),e("p",[t._v("命令参数说明：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("--name nginx-test：容器名称。\n-p 8080:80： 端口进行映射，将本地8080端口映射到容器内部的80端口。\n-d nginx： 设置容器在后台一直运行。\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("在浏览器地址栏输入http://<ECS公网地址>:8080访问Nginx服务")])]),t._v(" "),e("h3",{attrs:{id:"搭建hadoop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建hadoop"}},[t._v("#")]),t._v(" 搭建Hadoop")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("下载centos镜像\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull centos\n\n后创建一个容器准备安装jdk、hadoop作为基础版本\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -it --name hadoop101 -h hadoop 5d0da3dc9764 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n安装一下vim（好像安装了其他基础东西）\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v("\nFailed to "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" locale, defaulting to C.UTF-8\nCentOS Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" - AppStream                                                                                                               "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.6")]),t._v(" MB/s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.1")]),t._v(" MB     00:03    \nCentOS Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" - BaseOS                                                                                                                  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("115")]),t._v(" kB/s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.5")]),t._v(" MB     00:31    \nCentOS Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" - Extras\n\nyum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openssh-server\n     yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rsync")]),t._v("\n      yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" iputils-ping\n              yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" net-tools             "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@hadoop opt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir /opt/modules")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@hadoop opt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir /opt/softwares")]),t._v("\n重启已停止的容器\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@banana software"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker ps -a")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@banana software"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker start hadoop101")]),t._v("\n拷贝进容器\n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" ./env.tar.gz hadoop101:/opt/softwares\n 进入容器\n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it hadoop101 /bin/bash\n 容器内解压\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@hadoop softwares"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tar -zxvf env.tar.gz -C /opt/modules/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@hadoop modules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim /root/.bashrc")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@hadoop modules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# source /root/.bashrc")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@hadoop modules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo $JAVA_HOME")]),t._v("\n容器转为镜像\n\n复制镜像\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" hadoop_base "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hadoop_base.tar导出容器\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" hadoop_base.tar hadoop导入容器为新的hadoop镜像\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" images查看一下现在有的镜像\n\n启动三个容器作为hadoop集群\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -it -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50070")]),t._v(":50070 --name hadoop102 -h hadoop102 hadoop101 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -it -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8088")]),t._v(":8088 --name hadoop103 -h hadoop103 hadoop101 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -it --name hadoop104 -h hadoop104 hadoop101 "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/hosts\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.17")]),t._v(".0.2 hadoop102\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.17")]),t._v(".0.3 hadoop103\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.17")]),t._v(".0.4 hadoop104\n修改完主机映射 互相ping一下查看是否网络互通\n\n配置免密登录\nssh-keygen -t rsa  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成密钥公钥")]),t._v("\n公钥发送到免密登录的机器上 之前ssh没安装上？（yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openssh-clients）\n    ssh-copy-id hadoop102 \nssh-copy-id hadoop103\nssh-copy-id hadoop104\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
# Linux

## 程序安装

### 安装msfconsole（渗透测试框架）

Metasploit是一款开源的安全漏洞检测工具

官网链接：[https://metasploit.com/](https://metasploit.com/)

**1..进入到`opt`目录下**

```bash
cd /opt/
```

**2.下载安装文件 `msfupdate.erb`**

```bash
sudo wget https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb
```

**3.将文件`msfupdate.erb`重命名为`msfinstall`，并且赋予`755`权限,安装`msf`**

```bash
sudo mv msfupdate.erb msfinstall
sudo chmod 755 msfinstall
./msfinstall
```

**4.启动程序**

```bash
msfconsole
```
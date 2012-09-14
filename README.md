有段时间研究QQ的WEB登录协议，发现MD5的加密结果在PHP和JAVA中是不一样的，原因好像是编码问题（记不清楚了）

鼓捣了半天没办法解决，然后就写了这么个小东西放服务器计算输入字符串的MD5

演示地址（前端是Apache，虚拟主机转发到127.0.0.1的33921端口）
http://md5.apiz.org/

直接计算MD5
http://md5.apiz.org/query?string=admin

MD5结果前后加标记（方便获取HTTP后直接正则匹配）
http://md5.apiz.org/query?string=admin&mark=1

返回结果大写
http://md5.apiz.org/query?string=admin&case=upper

十六进制输入
http://md5.apiz.org/query?hex=2cc397c2a377
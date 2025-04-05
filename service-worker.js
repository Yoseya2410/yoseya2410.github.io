/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8d90185d5d9320ebc0f1e9a27ccac0a6"
  },
  {
    "url": "addition/json.html",
    "revision": "3edbc50b94b0e0d9ce92332b58f05647"
  },
  {
    "url": "addition/latex.html",
    "revision": "91165dc0ff9bbfe869a2bbf2ab07bbe3"
  },
  {
    "url": "addition/markdown.html",
    "revision": "615b28a36bebfd07f316ffd1e86b495d"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "5cb04f9b25bf066d475cae4a3bfb2668"
  },
  {
    "url": "addition/xml.html",
    "revision": "fdd907909b7af3c89d9850d0c9715079"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "fcead3a1f5a9a31d8796fed3bc6e3cd7"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "4091bd5afd4890c5c3da8bc97c8b0815"
  },
  {
    "url": "assets/css/0.styles.5204beb5.css",
    "revision": "fa85323eeebe3e40d2e9b211d50e7490"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eb498338.js",
    "revision": "3d3164c9cf64feb602338aeb239098b0"
  },
  {
    "url": "assets/js/11.a2f8f3a8.js",
    "revision": "1ed382b2736cf70821de44797b571e25"
  },
  {
    "url": "assets/js/12.4cde85b3.js",
    "revision": "56dab7be48b130e6d2ff67619ed188b6"
  },
  {
    "url": "assets/js/13.dc304cde.js",
    "revision": "5f09214710ff8ea56498339e98bcb88a"
  },
  {
    "url": "assets/js/14.e41ab5cf.js",
    "revision": "7838634f71a6f0d9ec86b5b436f0a30d"
  },
  {
    "url": "assets/js/15.c4655e47.js",
    "revision": "28e7aeba6c96268b3ff90ee00cc542b1"
  },
  {
    "url": "assets/js/16.96057f0e.js",
    "revision": "024f2120405b2226ca3be95107151921"
  },
  {
    "url": "assets/js/17.74eb9b7d.js",
    "revision": "7aa488608dab5a4408e061d3fabeb69d"
  },
  {
    "url": "assets/js/18.bd0e634a.js",
    "revision": "e60ea2f963cf6b435e9c0e5fc3606d9f"
  },
  {
    "url": "assets/js/19.e14016a1.js",
    "revision": "cb701b008e290395efd6bf33e25dd9f4"
  },
  {
    "url": "assets/js/20.e8054d36.js",
    "revision": "3cf016961fe27ff38b4a6073d82fb377"
  },
  {
    "url": "assets/js/21.ddb909d6.js",
    "revision": "9f263bfa2da9a66f92999e5c7c9c62cd"
  },
  {
    "url": "assets/js/22.cd744946.js",
    "revision": "6ade1d985c8c72ee50369a080ae4d566"
  },
  {
    "url": "assets/js/23.62aadd88.js",
    "revision": "dcf100973faa222e96e972d68e63befb"
  },
  {
    "url": "assets/js/24.390463ab.js",
    "revision": "9b8612e74d36e18c7ca6a10d42adac91"
  },
  {
    "url": "assets/js/25.dcadfa2e.js",
    "revision": "4ddcac48942af5c81ee2c8d02300dab0"
  },
  {
    "url": "assets/js/26.78680c72.js",
    "revision": "1fa74847b1f4d78988336a7687a5f164"
  },
  {
    "url": "assets/js/27.0b96b3f4.js",
    "revision": "7cb4ea29a62e7fd8ee21a3b7a3346ce7"
  },
  {
    "url": "assets/js/28.179fee2c.js",
    "revision": "f8a20515de3309de0b2dad42b2b17eba"
  },
  {
    "url": "assets/js/29.86c5fc0f.js",
    "revision": "1d95e9986b09903bd523809241d5c343"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.acb7150e.js",
    "revision": "e96a0ef6f5b0eb7ef58f948174b16300"
  },
  {
    "url": "assets/js/31.2acbd7ea.js",
    "revision": "7445bb099fc835c0955f7cd7c7fd0e2a"
  },
  {
    "url": "assets/js/32.6d5cd33c.js",
    "revision": "7fd4a352f22a49c6da3c527c5b9f5e3f"
  },
  {
    "url": "assets/js/33.50316174.js",
    "revision": "ff3c1ea7b5ec3aa007369c1f643b1809"
  },
  {
    "url": "assets/js/34.f7f4d84d.js",
    "revision": "1a4381b64c2d221cae8307f4c8d1de6b"
  },
  {
    "url": "assets/js/35.4ab24c70.js",
    "revision": "b70d726c0280c019b6edb75b082d8347"
  },
  {
    "url": "assets/js/36.a46dbb8e.js",
    "revision": "c6f9a0a2a68dbe31d2d4bae7946f2eed"
  },
  {
    "url": "assets/js/37.dc5a2928.js",
    "revision": "f6fda133197ccf61c7e7d2c6ccd91d7f"
  },
  {
    "url": "assets/js/38.90acabaa.js",
    "revision": "f4cb8e6d808db661bb154d2c1e021550"
  },
  {
    "url": "assets/js/39.70a7dbc0.js",
    "revision": "6f918b68677de36a44e8a6bd30019825"
  },
  {
    "url": "assets/js/4.1a23b33c.js",
    "revision": "e4435ffd98788df3245c3a225e9d5337"
  },
  {
    "url": "assets/js/40.b202afe0.js",
    "revision": "db2807536230a7d9940e98f33dc042e7"
  },
  {
    "url": "assets/js/41.a5ed2201.js",
    "revision": "7d6018286d08c628afd9ead559b71489"
  },
  {
    "url": "assets/js/42.3b0abae5.js",
    "revision": "66f8d47b34d5a6e6c34751c4fd8069da"
  },
  {
    "url": "assets/js/43.fac7b4d1.js",
    "revision": "083cb0a6a364b3d94de523845cd90461"
  },
  {
    "url": "assets/js/44.293d3f2d.js",
    "revision": "edfd802d46ca2edd374a280c63c829cc"
  },
  {
    "url": "assets/js/45.27a253b1.js",
    "revision": "2ec78cb14ea78e6c2bf02104e9d7062f"
  },
  {
    "url": "assets/js/46.b3725624.js",
    "revision": "97aca6da86fdefca65fc268bd90eafd0"
  },
  {
    "url": "assets/js/47.bbd0f0f0.js",
    "revision": "6f5d284f7ca7a853076bb94778f71997"
  },
  {
    "url": "assets/js/48.ba9d1287.js",
    "revision": "c9bdd6e8babc46eb140219102b7be4da"
  },
  {
    "url": "assets/js/49.e9a1df50.js",
    "revision": "137b4b584792dc18a1014235832534ef"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.0e76b78b.js",
    "revision": "0eec80432f5cb853486f32d16b98a7ff"
  },
  {
    "url": "assets/js/51.94ba0663.js",
    "revision": "8834654f282744ff684a7e9707a39c10"
  },
  {
    "url": "assets/js/52.856fb651.js",
    "revision": "4d3a86279691810c1417e3407ce1a36e"
  },
  {
    "url": "assets/js/53.455b9344.js",
    "revision": "8ce255a5d1b59662aca63d409ca506a3"
  },
  {
    "url": "assets/js/54.c7bf7cc9.js",
    "revision": "e8e1da852f754eb476546cdee133d7be"
  },
  {
    "url": "assets/js/55.2ae0eda7.js",
    "revision": "1dc96a11a738c498e6e30f6b3624edd3"
  },
  {
    "url": "assets/js/56.c99b418f.js",
    "revision": "198d5544815a3bcb07ef4bf3f1aa483c"
  },
  {
    "url": "assets/js/57.24961cd6.js",
    "revision": "f523effed5f986159348613fdf4fbccd"
  },
  {
    "url": "assets/js/58.36b3c8ca.js",
    "revision": "06c11a3b96b7088f4149deffe57e8a1d"
  },
  {
    "url": "assets/js/59.8c65847b.js",
    "revision": "02303badf0adab5735ed9a5ee945a406"
  },
  {
    "url": "assets/js/6.8a83cd41.js",
    "revision": "ca89292e9e1f1ffe713a4c5d25a7e19f"
  },
  {
    "url": "assets/js/60.fbc6edaf.js",
    "revision": "79eddcd85364b4c5d47ceb34d3465374"
  },
  {
    "url": "assets/js/61.a4ca7eaa.js",
    "revision": "1dc6c14994f9ee45273e2042c9f6673c"
  },
  {
    "url": "assets/js/62.136c4c34.js",
    "revision": "d859e73363382920d08166157edfbb42"
  },
  {
    "url": "assets/js/63.51b74998.js",
    "revision": "d4c0f997c54d26006516573572ca1b25"
  },
  {
    "url": "assets/js/64.6ce031e7.js",
    "revision": "e5ebcd3f420c8ea93fbce5b5ab5bb664"
  },
  {
    "url": "assets/js/65.6bc9df4c.js",
    "revision": "9871b564f7d14003c81c6d509075430f"
  },
  {
    "url": "assets/js/66.ea94adbf.js",
    "revision": "e968a9e441f839e869baa057451140e6"
  },
  {
    "url": "assets/js/67.3cb6c534.js",
    "revision": "1234a6091cabadc5d6edd19c160ddbcb"
  },
  {
    "url": "assets/js/68.4272d547.js",
    "revision": "906fd7927ede5b25d7f6d41007f7e442"
  },
  {
    "url": "assets/js/69.6c7bae02.js",
    "revision": "4d21f22d26bab41fc8f5364b154b7523"
  },
  {
    "url": "assets/js/7.7ffbb549.js",
    "revision": "697acea291624711c53b8310abb677e3"
  },
  {
    "url": "assets/js/70.1f749b17.js",
    "revision": "edc83290f62c15dad65c052c20add467"
  },
  {
    "url": "assets/js/8.6a1a59fd.js",
    "revision": "9bee9c205d73178e061ef7cb5b211d06"
  },
  {
    "url": "assets/js/9.c13a85dc.js",
    "revision": "8b2fc1d8e5263ae6b2c99363488e2ef9"
  },
  {
    "url": "assets/js/app.622f0192.js",
    "revision": "c44aad61a0ba7cbbc45b6941903e26eb"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "58f301d08813110ebb469f7751fbd7a3"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "08e55d182645d7a903e023a12eb9eb4c"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "089832ea4554f6420bd6c506c3fc34ce"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "28c6825b40204dd4fef4581d4b85c775"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "db704623bd09f97d9265fb51992c4fbf"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "ad87219672da568739b3bb24abd9b345"
  },
  {
    "url": "computer/c/c.html",
    "revision": "c03e7923b96ff22e952f21d9ae4b41d7"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "1736895398cacf5677ec2f77155e3498"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "11a6d8065a13e498bde2e39a74c840ae"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "b8e1a288afd5c8565a9ab4c96dac3fe4"
  },
  {
    "url": "computer/python/python.html",
    "revision": "9cf2b18da45bbf6016440c209b7c8011"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "36fccb5e9dab0c62d1a4016a17ed624f"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "536ddb4cda31c931c0ec606fd6aa0a4b"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "54003dd2769928ab313a9411c9429f78"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "56198f9b83d371079ba1db50aab34d5c"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "d36974c6a9563224e83531bf39ebc7ba"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "112e1cc65d3911de2c934e893160e88d"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "8863e23704b03ac1cb2004b34570f007"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "1acd2f50b46ef86afc5d9c0794c33fb4"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "a46bf91411b6a986031b7645aadc171d"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "7984998b2b37f8f0859381e191c46a8c"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "f1add888a60a63da5361e864ed943253"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "b3d6524cf4e6c49c3182337ccae33881"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "6d249680f15cf4f9854f1c5604a1c7c7"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "b5a3ea80db0f1087bce9159823659052"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "a696a0430b3d9dd7d1a5dae09c40c64d"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "180b465155aaac2da8ab67731b296d96"
  },
  {
    "url": "graph/example.html",
    "revision": "ff7812627be9aed0297518d19cba346f"
  },
  {
    "url": "graph/test1.html",
    "revision": "6d8d5fc72157385b407c42e2c9557209"
  },
  {
    "url": "html/me.html",
    "revision": "dbc352538f39c8d6726dc70776ef82e3"
  },
  {
    "url": "img/icon/BULBASAUR.png",
    "revision": "27c12869d37faad54a58c0e5489595dd"
  },
  {
    "url": "img/icon/PIKACHU.png",
    "revision": "60cc8e1e4e21bff837fb25f7427907f2"
  },
  {
    "url": "img/logo.png",
    "revision": "c89844f2aee46b3530d38e552691b75c"
  },
  {
    "url": "img/python/图表绘制示例1.svg",
    "revision": "9d50e22c8fa88a4350d14dd83abd02bf"
  },
  {
    "url": "img/单片机/8051单片机.png",
    "revision": "0b03e8386c72ed2da31313c1055b17e4"
  },
  {
    "url": "img/单片机/LCD1602工作原理配图.png",
    "revision": "15a26ce46f8e8923080c6b9884f2a2a5"
  },
  {
    "url": "img/单片机/LCD1602接线图.png",
    "revision": "c5a45ae5543e5e9ea5eb5ab1b8d09b60"
  },
  {
    "url": "img/单片机/中断程序执行过程.svg",
    "revision": "026e065d6fe8a7f96b9a47d027a94681"
  },
  {
    "url": "img/单片机/按键的使用电路示意图.png",
    "revision": "371523aa6672e00be1b04259a073cd3a"
  },
  {
    "url": "img/单片机/按键闭合波形.svg",
    "revision": "a38d5733c84edc393140ebd082b1ee9f"
  },
  {
    "url": "img/单片机/矩阵键盘原理图.png",
    "revision": "bf3ca54fdbd626d1f20829da9d796135"
  },
  {
    "url": "img/计算机组成原理/8086物理地址生成过程.svg",
    "revision": "63d569e0387a4fa81ba6b3e84f12f084"
  },
  {
    "url": "img/计算机组成原理/X86体系结构.svg",
    "revision": "b93af07c2cd84c88a0ba89671e4b0cf2"
  },
  {
    "url": "img/计算机组成原理/X86指令简介.svg",
    "revision": "2384a4adf327079658b89e0d6d7d4fce"
  },
  {
    "url": "img/计算机组成原理/冯诺依曼结构图.svg",
    "revision": "d4c0d14e88ab991aa66dd26a4f487d2b"
  },
  {
    "url": "img/计算机组成原理/指令的格式.svg",
    "revision": "91ad50c06b61b441612dbabcde6c0c91"
  },
  {
    "url": "img/计算机组成原理/标志寄存器.svg",
    "revision": "302403f1560f1591367b053ae43cb773"
  },
  {
    "url": "img/计算机组成原理/简单指令系统示例.svg",
    "revision": "574de3077d079e92200b925678fe7964"
  },
  {
    "url": "img/计算机组成原理/计算机执行指令的过程.svg",
    "revision": "1534b8a2a6e0d812035830007a53c164"
  },
  {
    "url": "img/计算机组成原理/计算机运行过程.svg",
    "revision": "5394f42c9cdef3e6dd0872f96ad7df6d"
  },
  {
    "url": "img/计算机组成原理/输入输出示意图.svg",
    "revision": "c57103fb80fc751fc7fdb997e92a59f7"
  },
  {
    "url": "img/计算机组成原理/运算任务示例.svg",
    "revision": "5a9d04f92c26c28b063ee48785daa75a"
  },
  {
    "url": "img/计算机组成原理/运算器的结构.svg",
    "revision": "a0c2b4c16ef3392b44988f17d2423c72"
  },
  {
    "url": "index.html",
    "revision": "a272da5a327fa060f63461019aedd9eb"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "565b2772b7cc8893448bdf5210f2a50e"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "e41d1791547e5448959604f9b74890e2"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "e4eb0167afe3c1b35c5a76fa0e027680"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "7b480a30a0e3d2981ce8ec6f4d9aaafd"
  },
  {
    "url": "physics/光学.html",
    "revision": "58d4e99330d7452e5b59481daa3705c0"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "516552844a3f3af503dc74cf277c68ea"
  },
  {
    "url": "physics/力学.html",
    "revision": "1e9e6d80d65d8d7c0e129bfc94009693"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "b45c24f5c3034dcedac5b7865c8bd602"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "7beb201f347030c1842b6c23bdb7df8d"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "7c5e994a0b19cd2f188c6ff0b96096a0"
  },
  {
    "url": "physics/热学.html",
    "revision": "607fccff8bd6c1a5051c3a485d91d2bd"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "9642afc34c3fa15e7fadac1a270bc852"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "68dc698596db5df16f35e761ea325aa4"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "5dfad5a66fdf434977903e049b2f3d3e"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "512a799b513425cb980cd1a5eeba32b6"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "6b3718c34324e36dc42177893f3a7850"
  },
  {
    "url": "web/html/css.html",
    "revision": "46b0f44cb690644db7151a62f1b6e83c"
  },
  {
    "url": "web/html/html.html",
    "revision": "6204038e7ffb5bf43457328ef5d39232"
  },
  {
    "url": "web/html/实例.html",
    "revision": "131434bb8a6ac7dc5e2d6d17a70138c2"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "2c77265df83bb1118f98329c3af26f67"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "69a4c5ae48e01f68e8b429b7410c146a"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "9d1799b47b37899d739970053ff47598"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "a5f9f4be4720f3abe24de1a739dd43cc"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "a936aaa92f0e668a1486f5bd5eddf14b"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "a44612b55220ba98ce508b806027f951"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "0521aa79b5c98e0330b8f0d026a85ab2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

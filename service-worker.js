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
    "revision": "4d4cb8290f398dfc6d8518fc0e018849"
  },
  {
    "url": "addition/json.html",
    "revision": "26f1eb2cef81e497b05d5fc70191a53f"
  },
  {
    "url": "addition/latex.html",
    "revision": "0a6f12470b168a0b814db5dc5fd6ea3f"
  },
  {
    "url": "addition/markdown.html",
    "revision": "92dd50be8884fc3f5c07ac3b6f139dfe"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "dc27f486be3126dd1566d1997f7f8654"
  },
  {
    "url": "addition/xml.html",
    "revision": "19efd950628515c1b308a8be9cbf8fa3"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "3f5b2df908ec07ca8892f9ba25a05035"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "7426e60119535574c9677aa6c5f4e376"
  },
  {
    "url": "assets/css/0.styles.8dd627c7.css",
    "revision": "24fbcb4be69ca8a925d95c7916eba7f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16039208.js",
    "revision": "772eb044def96e337eb4f8b080863794"
  },
  {
    "url": "assets/js/11.6a7b4b46.js",
    "revision": "99491685e4583b1692d5b704b3b8f9ad"
  },
  {
    "url": "assets/js/12.591c58fe.js",
    "revision": "12bb1bbdc007b32e198f40ed844284a8"
  },
  {
    "url": "assets/js/13.95767c99.js",
    "revision": "15039faf8fb6b520283833354a41a1bb"
  },
  {
    "url": "assets/js/14.f2ed1e08.js",
    "revision": "7c01032f40f656294127c1ae0b265526"
  },
  {
    "url": "assets/js/15.aec8d557.js",
    "revision": "7f0c9104715781d4c3167928dae554bc"
  },
  {
    "url": "assets/js/16.96057f0e.js",
    "revision": "024f2120405b2226ca3be95107151921"
  },
  {
    "url": "assets/js/17.81d161ba.js",
    "revision": "315c3d12e2d5d45c8ee5dd7af20039d7"
  },
  {
    "url": "assets/js/18.8337e2c5.js",
    "revision": "fe8eeff7e4891df9fe26cc964d88df74"
  },
  {
    "url": "assets/js/19.259eae8b.js",
    "revision": "3485c38e74432d383b9dd82cba0a5212"
  },
  {
    "url": "assets/js/20.6464230e.js",
    "revision": "82af73a3705058f55e8e399f42974441"
  },
  {
    "url": "assets/js/21.60735ae1.js",
    "revision": "ebd27784397e32b493d13ad06374775a"
  },
  {
    "url": "assets/js/22.cd744946.js",
    "revision": "6ade1d985c8c72ee50369a080ae4d566"
  },
  {
    "url": "assets/js/23.f534fef9.js",
    "revision": "e747f1df5fbb88a1fb08b5629d51d02b"
  },
  {
    "url": "assets/js/24.081cb9f5.js",
    "revision": "6fe5904e738a12da6a66f555b224744f"
  },
  {
    "url": "assets/js/25.c065761a.js",
    "revision": "80429042f4e642b3a87399edf2b4ec28"
  },
  {
    "url": "assets/js/26.bb159e7c.js",
    "revision": "50d9f930cd8dcedbbfc2c78942fced2b"
  },
  {
    "url": "assets/js/27.a7025383.js",
    "revision": "2e32a7eb123172bdbd3fc1b9aa7a2025"
  },
  {
    "url": "assets/js/28.0cb0e1f7.js",
    "revision": "cd19bbb3989cea80665a9c6f7d734415"
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
    "url": "assets/js/30.7ecaf45c.js",
    "revision": "6c81b8624787a9677b0dcb7d8d10dde3"
  },
  {
    "url": "assets/js/31.2acbd7ea.js",
    "revision": "7445bb099fc835c0955f7cd7c7fd0e2a"
  },
  {
    "url": "assets/js/32.9be1fde3.js",
    "revision": "9f8fe143df403d58de0b3b4e1a4cd4e6"
  },
  {
    "url": "assets/js/33.13bb3d67.js",
    "revision": "e88a9da407151ac6f2fe35119f6b3ae6"
  },
  {
    "url": "assets/js/34.668061e9.js",
    "revision": "530100ff10eb8bb70c3854d59b273be8"
  },
  {
    "url": "assets/js/35.2a7d7988.js",
    "revision": "a996f27ada58a84d981583c0686a03d3"
  },
  {
    "url": "assets/js/36.112b4f0d.js",
    "revision": "dde9401f8afc1c62a00a77f883b7a381"
  },
  {
    "url": "assets/js/37.eb89627c.js",
    "revision": "0773c481ce78ec1c0104af9fc8e2bcd1"
  },
  {
    "url": "assets/js/38.4197a304.js",
    "revision": "b9377a70a2fc3d27c6b9d9217e459f02"
  },
  {
    "url": "assets/js/39.d1ca5650.js",
    "revision": "33cc93d599b22f1cd4b49d2c3b06ba2f"
  },
  {
    "url": "assets/js/4.7cad207b.js",
    "revision": "a510b1d49495ab9ac364527a8660a4ea"
  },
  {
    "url": "assets/js/40.42f2e70a.js",
    "revision": "1ff1c6099e477019892bd4d4b9c808aa"
  },
  {
    "url": "assets/js/41.ae40c14f.js",
    "revision": "cfc0040225cef12d921f84191263b5ac"
  },
  {
    "url": "assets/js/42.54fe8bbe.js",
    "revision": "827c1768a32b6feea696bd06839f374d"
  },
  {
    "url": "assets/js/43.5d504723.js",
    "revision": "f294b7b210682d6c552280f10ce92106"
  },
  {
    "url": "assets/js/44.45286d20.js",
    "revision": "af691c53256a3f05825da993bc62ae23"
  },
  {
    "url": "assets/js/45.e78ba6d8.js",
    "revision": "3666c57097354a8676e2ecaf1fdea2dd"
  },
  {
    "url": "assets/js/46.4b3ecd70.js",
    "revision": "7f800aafbf330248fe81d7ab190b845c"
  },
  {
    "url": "assets/js/47.4b6a15d4.js",
    "revision": "e2470113acc27568dd8b32a420bde5ac"
  },
  {
    "url": "assets/js/48.fa4b96f8.js",
    "revision": "9e0d23888ed6f3ded4d72d8e1290a869"
  },
  {
    "url": "assets/js/49.9bb3ed49.js",
    "revision": "6dbf421b40ccf43ac79a80eac12163ef"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.12e7a445.js",
    "revision": "08d3581dc7ef66afae36059e32a6c2e1"
  },
  {
    "url": "assets/js/51.cfd04b71.js",
    "revision": "71265bb4e3b5aaee969dcf49a69d26c6"
  },
  {
    "url": "assets/js/52.69cb80af.js",
    "revision": "c89fb5e1ca9c27eec3619c2b0cb2094f"
  },
  {
    "url": "assets/js/53.30a53fd1.js",
    "revision": "d4dcbe54d8b85ced5501bc1e5a6b33df"
  },
  {
    "url": "assets/js/54.2a223a9f.js",
    "revision": "a6b6b86a2e57fa9a74da974c5ae7397f"
  },
  {
    "url": "assets/js/55.e6d9d639.js",
    "revision": "6e8b0d7afd11da2bfa4efaea698491ec"
  },
  {
    "url": "assets/js/56.d94e4501.js",
    "revision": "6b4a455741d18333cbbdcabbb566e0f4"
  },
  {
    "url": "assets/js/57.ce0c5bed.js",
    "revision": "34105927d4a1e259d84013d07e735545"
  },
  {
    "url": "assets/js/58.9257df6a.js",
    "revision": "0f61397dd7a340eca50d1e251d7d1298"
  },
  {
    "url": "assets/js/59.c24929c2.js",
    "revision": "247ef65212f29674ce871571c463b365"
  },
  {
    "url": "assets/js/6.f83523f4.js",
    "revision": "6c72859a41e87ccd50eeff179860a101"
  },
  {
    "url": "assets/js/60.b6694efe.js",
    "revision": "8f2137ae43e08b796876615bce459276"
  },
  {
    "url": "assets/js/61.8399cdaa.js",
    "revision": "518dd86a4d0b1f38abd425c37cecaab7"
  },
  {
    "url": "assets/js/62.d44949e4.js",
    "revision": "bd3e9f8785c6f2c9ae71a8a9a809aea5"
  },
  {
    "url": "assets/js/63.56b177ab.js",
    "revision": "d3cd9b0a7f24887b46dc4cb887de1ab8"
  },
  {
    "url": "assets/js/64.834d1892.js",
    "revision": "27e7b80f215ea08ae9a3a1b7e8fb5136"
  },
  {
    "url": "assets/js/65.9c098304.js",
    "revision": "50190e70200e02aa8d0bd66315a38c73"
  },
  {
    "url": "assets/js/66.57a50748.js",
    "revision": "0519262036dda687f6a53e6916219780"
  },
  {
    "url": "assets/js/67.f71320f3.js",
    "revision": "5e9db6e9a690c7196a174049393e5e51"
  },
  {
    "url": "assets/js/68.7189432b.js",
    "revision": "927e52e5eff34a104420065f6f0b444c"
  },
  {
    "url": "assets/js/69.817b7108.js",
    "revision": "51d9ec4ed2f113db6abad2e9986c9af2"
  },
  {
    "url": "assets/js/7.db9f625e.js",
    "revision": "508eedeb935d27a88ae2c5aeb25879ec"
  },
  {
    "url": "assets/js/70.8505d7e7.js",
    "revision": "d4b577d86f449549d2586dffae6b2f5d"
  },
  {
    "url": "assets/js/71.b0feea05.js",
    "revision": "4032176d39cf5274f03adf2a23cbddf5"
  },
  {
    "url": "assets/js/8.398eb1ea.js",
    "revision": "9473028b95db7c2aaafa985276a37701"
  },
  {
    "url": "assets/js/9.c13a85dc.js",
    "revision": "8b2fc1d8e5263ae6b2c99363488e2ef9"
  },
  {
    "url": "assets/js/app.36db608c.js",
    "revision": "464eb6de450b0076a907a124e3fdfc4c"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "f1bd1a04aa9c5bfa6a49dda02721a316"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "56d963894de14277637c838487f4d802"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "d5985be6c80f5c981bab5cadc6743c26"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "8cdd74bb3da643736c2e318e6843f033"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "bd8316ff79ee3ba88875ad781c58831a"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "97c8e94a01caec955a2ad7db46880a37"
  },
  {
    "url": "computer/c/c.html",
    "revision": "cc54b0a31fbdb7d1fc6bc1982e02c915"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "331b95768a821541df664ed465f4eaee"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "79bb11427871ab11a41b75404f045e9a"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "964aab832269e11b252cf5ca34002f62"
  },
  {
    "url": "computer/python/python.html",
    "revision": "dfdb3232e1a099faf6c6193f8c0533e5"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "6fc9756bb40638de5c6404229cafd621"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "45760f4a02f2e17c833e767e2a2f9dd2"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "4a37bf0a4929d2d277faf428724b252b"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "f150d0321c7eccf4c1a7641f51582004"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "23fee01d621f5ba490c490fca092824f"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "85c9e12b8181e63cd6e5e8807e8bab50"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "e4d5fb6bdebb7f94b0f17e7b1732a3fc"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "7647a137616caf74ce44a9323f532e0f"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "06a226bff454d51271c108efa6e9e71d"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "74cb509185f2fff71b2d3fd15a7cd9fd"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "5f5e0915f41021afe1c5c66c33a80e9c"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "e37d470b592e630ee9b4b3457561e16b"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "558a71cfa794a7ff0228f4f5c049a95a"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "5a59c6c7fae5e29416e168685c9165f8"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "793f675149c7e8edf81e98070b2ec2e6"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "958a9c34f0a6f0a54a7bec9a1566c948"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "f319bbe6bd0887c67b2d7a0dff742f6e"
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
    "url": "img/python/bubbleSort.gif",
    "revision": "b7d216a5b292cf3a5412bbc7fbb56a9e"
  },
  {
    "url": "img/python/任意进制转十进制.svg",
    "revision": "0e5e3ec603af43787b542c7c3e509e56"
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
    "revision": "9da15b11f6c24fe8196f5a3e760fb3e1"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "f454ab615e21df21134d2478309fe831"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "056b7c93e3731ef9a6f2f0320ab4f69f"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "47aa4e7cf98a1f01a40d86afcf389c06"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "1549bdf2e9e50c3a685a6d139079cefe"
  },
  {
    "url": "physics/光学.html",
    "revision": "6be72c361ac2f7948c2588d62a994f04"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "34e10227694dcc222559f7ff91d352d8"
  },
  {
    "url": "physics/力学.html",
    "revision": "86743a1626e6e11042095f9109383cab"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "04f5fa4c7c3c01b01a35febe52efa9a9"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "2d1bece37b626325032313530a84b039"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "a83f14ed66fc2eafbf8070b6c8dd8d16"
  },
  {
    "url": "physics/热学.html",
    "revision": "25a8643f2bd558ac15fb74c24b150763"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "c131930ff944aa610e79dd82e53d2592"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "3c0c8231520a12e8c7327f77e5121264"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "0ef2d3682be24f16bb2f5965d2102e26"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "868e6488022106565154e430a25f12af"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "08cd039f7eca6d9745a6fd58b070dd98"
  },
  {
    "url": "web/html/css.html",
    "revision": "45190159a2073828d98988dc262e484e"
  },
  {
    "url": "web/html/html.html",
    "revision": "52c668fb935dd54e9a0bf712df6dcf56"
  },
  {
    "url": "web/html/实例.html",
    "revision": "dfe5755f8d59da3987e68eac5a69d798"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "2be8eb08f4f17e9ea2c48009080569b7"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "b6fca083afc1a02e231e2087bfffac37"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "a8a4b52e55c00ac0c6531e781bee3518"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "677b051923cc5ad8b6479aa4569f6a1b"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "04c7a9dfc96652bc749bf53575a2049b"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "4b5d6e7012df381c85f8681385ad9038"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "94db28238d3f557e194296542ba178bc"
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

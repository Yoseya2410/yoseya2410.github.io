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
    "revision": "13bd478d416f9520c8cfb1d7ee3a0bed"
  },
  {
    "url": "addition/json.html",
    "revision": "9b3bd0b0b0204cc87b7cb5fcedb1b964"
  },
  {
    "url": "addition/latex.html",
    "revision": "d4583f858b56428860184705e623da96"
  },
  {
    "url": "addition/markdown.html",
    "revision": "fe25b365704409fd24883ff4c729c4d9"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "d6178c00d832e9aae8a312f1629149ad"
  },
  {
    "url": "addition/xml.html",
    "revision": "0b3a8186ad3789e44d75d351c2a93560"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "da5030c2b61d76402a74c7297a0de6cf"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "abd9513a09503e5c7cb01630baa56996"
  },
  {
    "url": "assets/css/0.styles.7324eb70.css",
    "revision": "3d1fde1177ed845ee434b85c725f3b20"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ef0211f4.js",
    "revision": "927ebab54543ec6875d44ec1ad99fa83"
  },
  {
    "url": "assets/js/11.a2f8f3a8.js",
    "revision": "1ed382b2736cf70821de44797b571e25"
  },
  {
    "url": "assets/js/12.591c58fe.js",
    "revision": "12bb1bbdc007b32e198f40ed844284a8"
  },
  {
    "url": "assets/js/13.dc304cde.js",
    "revision": "5f09214710ff8ea56498339e98bcb88a"
  },
  {
    "url": "assets/js/14.660903ab.js",
    "revision": "7ff5a90b22023d0c94301902186a3186"
  },
  {
    "url": "assets/js/15.26ea8f95.js",
    "revision": "7f63e528bca46cf2031a51a82c9b0e7f"
  },
  {
    "url": "assets/js/16.96057f0e.js",
    "revision": "024f2120405b2226ca3be95107151921"
  },
  {
    "url": "assets/js/17.1136147a.js",
    "revision": "9cf0d082c3e8a3a683d3cecd0bb38a1e"
  },
  {
    "url": "assets/js/18.92a3dbb0.js",
    "revision": "4e624ef7f861c9cbffd2da9f5ea53c11"
  },
  {
    "url": "assets/js/19.7eb850a3.js",
    "revision": "ebac510755a5187e24aba21673bb538e"
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
    "url": "assets/js/23.62aadd88.js",
    "revision": "dcf100973faa222e96e972d68e63befb"
  },
  {
    "url": "assets/js/24.d02c7ece.js",
    "revision": "43e20659af3b79b1c389f19d4fd312c6"
  },
  {
    "url": "assets/js/25.dcadfa2e.js",
    "revision": "4ddcac48942af5c81ee2c8d02300dab0"
  },
  {
    "url": "assets/js/26.408d3936.js",
    "revision": "a2afc7e00c653ed02991329cb543b3c6"
  },
  {
    "url": "assets/js/27.0b96b3f4.js",
    "revision": "7cb4ea29a62e7fd8ee21a3b7a3346ce7"
  },
  {
    "url": "assets/js/28.d560977d.js",
    "revision": "624122d58ce36fcd503927d3f26ebf1f"
  },
  {
    "url": "assets/js/29.6a65782e.js",
    "revision": "581a9f2de22a47fb485048c3274135dc"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.83c0cbdf.js",
    "revision": "ef75afa7e83243ef291bb0448cbb9e45"
  },
  {
    "url": "assets/js/31.df99ba38.js",
    "revision": "5687e66b563e763346e87244f992d586"
  },
  {
    "url": "assets/js/32.4fedadf1.js",
    "revision": "fde6a32381a6101448165c863e1309d1"
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
    "url": "assets/js/35.424651b3.js",
    "revision": "b1e836e28e86e31b7db64c9043b7efa7"
  },
  {
    "url": "assets/js/36.d5deec0c.js",
    "revision": "b7424beb8a8f712d947f0ed2ea365334"
  },
  {
    "url": "assets/js/37.ebc30ab9.js",
    "revision": "5b259329fe2e985412134495aa62b930"
  },
  {
    "url": "assets/js/38.90acabaa.js",
    "revision": "f4cb8e6d808db661bb154d2c1e021550"
  },
  {
    "url": "assets/js/39.a1e0c004.js",
    "revision": "ca77551f9f73b3fc610b376002a5ebc6"
  },
  {
    "url": "assets/js/4.1a23b33c.js",
    "revision": "e4435ffd98788df3245c3a225e9d5337"
  },
  {
    "url": "assets/js/40.0377bed5.js",
    "revision": "0a12762a6cfdf703db632ffbf775fba3"
  },
  {
    "url": "assets/js/41.a743a2d2.js",
    "revision": "4c81ad0bc718191b49382839b0b6538f"
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
    "url": "assets/js/45.132a30f6.js",
    "revision": "0bcc9b8c2263d579d728978918d6695f"
  },
  {
    "url": "assets/js/46.9c948885.js",
    "revision": "d0899ddea70ffb3c0d26b7275f4aefbe"
  },
  {
    "url": "assets/js/47.2025b6f6.js",
    "revision": "578f5ae39f1e88da8214c12fea2f4b6e"
  },
  {
    "url": "assets/js/48.7dbb6c38.js",
    "revision": "93eb7b74b53ce16155d162551ed495ed"
  },
  {
    "url": "assets/js/49.f300b0f5.js",
    "revision": "0f192563b2d7f141ee1e0e4cd4f2b637"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.b0849791.js",
    "revision": "f0d5567660e588a8d8696c13e009f9c5"
  },
  {
    "url": "assets/js/51.e77ae7e2.js",
    "revision": "0ee87cfbed485c0be517fef03a99ad6b"
  },
  {
    "url": "assets/js/52.28b49bfa.js",
    "revision": "096042749bfe7999ac91b6f581db01f4"
  },
  {
    "url": "assets/js/53.9162f766.js",
    "revision": "640a99ff5e2b2bda65b077b743e92d4e"
  },
  {
    "url": "assets/js/54.1863c220.js",
    "revision": "39f7b68c3e0d39f62ba4b8a9fbcf650b"
  },
  {
    "url": "assets/js/55.77fdfac0.js",
    "revision": "aff16c471931daf1041da8d590b2946d"
  },
  {
    "url": "assets/js/56.dddf88de.js",
    "revision": "c99d14513f7f625746a25824854448da"
  },
  {
    "url": "assets/js/57.1b23f296.js",
    "revision": "f867671908f5bfe64e22a3ee31bad035"
  },
  {
    "url": "assets/js/58.938b2226.js",
    "revision": "3f32bab6e16a88fc67a0c5bb6884bf08"
  },
  {
    "url": "assets/js/59.2f68cf22.js",
    "revision": "f6ecf390f116df30153a7cf04b72a082"
  },
  {
    "url": "assets/js/6.c69d5f2b.js",
    "revision": "57cbea85517dc7e17cbf4b04437d3fab"
  },
  {
    "url": "assets/js/60.fbc6edaf.js",
    "revision": "79eddcd85364b4c5d47ceb34d3465374"
  },
  {
    "url": "assets/js/61.e7835c6f.js",
    "revision": "bbd8ffa7f9d2a37dba3d204991cca7bf"
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
    "url": "assets/js/64.d0d2d79f.js",
    "revision": "08ce5a0dc70a929ca015b4e1d3f5d8fe"
  },
  {
    "url": "assets/js/65.fa5e2c72.js",
    "revision": "e93113c9572675e416fdee667336e7d0"
  },
  {
    "url": "assets/js/66.ea94adbf.js",
    "revision": "e968a9e441f839e869baa057451140e6"
  },
  {
    "url": "assets/js/67.562e2d7f.js",
    "revision": "2def370a14504537a8064961d3d965bb"
  },
  {
    "url": "assets/js/68.649fc863.js",
    "revision": "82ccaefc5118f14639ce72b73eda7632"
  },
  {
    "url": "assets/js/69.6c7bae02.js",
    "revision": "4d21f22d26bab41fc8f5364b154b7523"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/70.1f749b17.js",
    "revision": "edc83290f62c15dad65c052c20add467"
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
    "url": "assets/js/app.62debdbf.js",
    "revision": "a4c77221859349e17168b1f944805b7f"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "b218ed10b3aba7ae0ec98bdcf009c5ae"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "79f31f74d8ea96f367717b821494f186"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "bd65300d95d3386ae377eb91b7ae16aa"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "d1ee4cd3a05b65740d396380104ebbf5"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "fa1608e0385e0e4f5c36a276f201641c"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "e5d1a714c8ff374954d8c5e9d87cb729"
  },
  {
    "url": "computer/c/c.html",
    "revision": "266876c390c67309ea1fe9cef803a2f6"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "a02c4bc92edee7ac348797508c5048bf"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "796b412094b35b445972c05d58faf8ef"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "60c0ea848a57370442f399ec9a0fdf3e"
  },
  {
    "url": "computer/python/python.html",
    "revision": "759e4b7add0fbfe3379c5e1c14785429"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "a8b3e134829fd9b15ae458a1f43abd00"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "59686a329a033b606256e67b42679c35"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "8be0c2d7a078658dc8432542bf63816a"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "70d7e6eceab7cc23a048af3288f4f50f"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "df4d80a1c686b6b5c4505e9e9b71416d"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "e9885a2fdd419fde102bf00f4f2da964"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "f97f15d3238e4bffcf9dffe5c22f0345"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "05f75fb46099b5931d4f672a6a313f51"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "528790b001dcd90946f69ace5bba184b"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "5ff818cd708d2ec68afb67f44c85c9b5"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "723444cdd2d0f1668eaeb41456210c3e"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "8332746e999850eb5eb3b9c0c1c7ed76"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "1ae215bc8ded56755054daa0c83262de"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "189fb6ba3b8011b3c6cb0d8b71279310"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "2ca8dca0cd77227b97698f57d76918e8"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "3a18f5d3cf5a9fc901ae879a914b9fd8"
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
    "revision": "29790f25f1e4512904a60f8f57aa1f1d"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "42865718da624b3a66479ce85b50807a"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "54d5e7182b9fa43c22f93003acbdbe93"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "39646c889eb8e990abf2f0f259917154"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "e964d243d75ebf30e403905013d69c4d"
  },
  {
    "url": "physics/光学.html",
    "revision": "4424963802c38965ff46e2cd1f46cc3f"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "03d5a42cff093fb3d3932a64e5e632ae"
  },
  {
    "url": "physics/力学.html",
    "revision": "073f5b59ee5b488793c9a013e8e966a1"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "365126a45c24e19af56aa83139ab6c97"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "34aed33ca1c61063bec9a9b1483e5b54"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "7fffa392bf5d3b8cfcb47a5efbe5e156"
  },
  {
    "url": "physics/热学.html",
    "revision": "fff591b935c4d69d6a6bed00c73d327c"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "541ef6dc2fe1418c8e0e16b9df1850ef"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "1a5f6b27d2de5cb4aa3c3129df6e20b7"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "7a39f7563025b73fda30160d7b04c054"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "811e0021fd142c908a8f213feccb50f7"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "673de0ee2c5f8da424dd24b5c214bfcd"
  },
  {
    "url": "web/html/css.html",
    "revision": "23588c613375bf647ca8a22b860385b7"
  },
  {
    "url": "web/html/html.html",
    "revision": "e38947bbb38aa2dbe0c73cb9dd8805a6"
  },
  {
    "url": "web/html/实例.html",
    "revision": "5fac463d674e10e09d8ce991aa81b6f7"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "d4b29d54f29336ca0797d2427f568fc4"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "c946432e4145316b594aa73b95e864b0"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "f8605d0f67a9495b5990a8922399b5c7"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "ce1c2159d5272883dd21628921427be9"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "8d96177f8d81ef36b0750a9b68cc48fc"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "f1ece57ef8d584f43bec3c930ec7bd69"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "7e232df560bc5523cfcb98f760345182"
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

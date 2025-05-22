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
    "revision": "936a6f53bbd820df27adee1dc1ec4ba9"
  },
  {
    "url": "addition/json.html",
    "revision": "4c98bb716d03e20c2582571e82b1d4a9"
  },
  {
    "url": "addition/latex.html",
    "revision": "38da805cc9a0b4b91cba0d94dfc3433e"
  },
  {
    "url": "addition/markdown.html",
    "revision": "4359699618a6c606800933e125fe21b9"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "7e2cd108d140749fe8611f02de2bee30"
  },
  {
    "url": "addition/xml.html",
    "revision": "baa32d038d711ce3889a2943d29ed667"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "15b03c6710319c09de099f6e9effb025"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "c9e2ff30a817f49f5a8bd5c4f0a99659"
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
    "url": "assets/js/10.16039208.js",
    "revision": "772eb044def96e337eb4f8b080863794"
  },
  {
    "url": "assets/js/11.b41a9bd3.js",
    "revision": "1b6440da3b738ca297c8347c4ecee452"
  },
  {
    "url": "assets/js/12.37a338f9.js",
    "revision": "1fc2ae67b83508f9cec03b194503dca4"
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
    "url": "assets/js/15.9897ce25.js",
    "revision": "e7996faf81d9905ae9b55655eca46929"
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
    "url": "assets/js/21.2d520738.js",
    "revision": "eaf3e46d11c5a4a68ce247d29850f1bc"
  },
  {
    "url": "assets/js/22.242bda91.js",
    "revision": "e831d4f3837a7787ecefb105df9f8fb4"
  },
  {
    "url": "assets/js/23.62aadd88.js",
    "revision": "dcf100973faa222e96e972d68e63befb"
  },
  {
    "url": "assets/js/24.38b61896.js",
    "revision": "e270bcd13abd30f7148f057740943faa"
  },
  {
    "url": "assets/js/25.dcadfa2e.js",
    "revision": "4ddcac48942af5c81ee2c8d02300dab0"
  },
  {
    "url": "assets/js/26.7519e768.js",
    "revision": "3ca752c9e0242563f2c7cb03e8a5f1e9"
  },
  {
    "url": "assets/js/27.a7025383.js",
    "revision": "2e32a7eb123172bdbd3fc1b9aa7a2025"
  },
  {
    "url": "assets/js/28.1279e05b.js",
    "revision": "ce206f2b46152c7d4e397d7c967a8bb2"
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
    "url": "assets/js/30.7b8ea428.js",
    "revision": "b188bf7552012bcf4d0ac9431ca61c42"
  },
  {
    "url": "assets/js/31.1f079bf8.js",
    "revision": "6107140995e1bbff21d6de012459ada5"
  },
  {
    "url": "assets/js/32.6d5cd33c.js",
    "revision": "7fd4a352f22a49c6da3c527c5b9f5e3f"
  },
  {
    "url": "assets/js/33.997c5a96.js",
    "revision": "b40d36b103da956b7835cdc4173ea662"
  },
  {
    "url": "assets/js/34.f7f4d84d.js",
    "revision": "1a4381b64c2d221cae8307f4c8d1de6b"
  },
  {
    "url": "assets/js/35.6f2fcbce.js",
    "revision": "a09a5bf9893e7f05758044fefb5cd7de"
  },
  {
    "url": "assets/js/36.999c2158.js",
    "revision": "00c53ea4bd23e6a250bcdee9380a5e2d"
  },
  {
    "url": "assets/js/37.a8f319d0.js",
    "revision": "5804b7e58a71f0f51c942e8c352ba8d6"
  },
  {
    "url": "assets/js/38.518cc02c.js",
    "revision": "cdf42e6d962bd16e753c59028a07b42f"
  },
  {
    "url": "assets/js/39.82c97f00.js",
    "revision": "ecc397e4791789c8bf3069c2c41e95e5"
  },
  {
    "url": "assets/js/4.1a23b33c.js",
    "revision": "e4435ffd98788df3245c3a225e9d5337"
  },
  {
    "url": "assets/js/40.9ffb9bde.js",
    "revision": "0e7d6b7072b296c74907feb83435c136"
  },
  {
    "url": "assets/js/41.fd7a6c5b.js",
    "revision": "9c06de3679b34afbce8588fa30eec1a3"
  },
  {
    "url": "assets/js/42.d38384f8.js",
    "revision": "aa6262d4ae7bbe2eaa6cd17e7688c303"
  },
  {
    "url": "assets/js/43.a0b1f258.js",
    "revision": "e7ea5388c5c7c8e0652b5883dc6e3edc"
  },
  {
    "url": "assets/js/44.7ef41024.js",
    "revision": "72d42e7436445c441de93610977cc92d"
  },
  {
    "url": "assets/js/45.10d5b2bf.js",
    "revision": "94bd14dbf4b1f6fc9e522c94e777fb1e"
  },
  {
    "url": "assets/js/46.bee54afa.js",
    "revision": "bce6423e4f33268e3edc0744da518332"
  },
  {
    "url": "assets/js/47.bbd0f0f0.js",
    "revision": "6f5d284f7ca7a853076bb94778f71997"
  },
  {
    "url": "assets/js/48.4b32c96c.js",
    "revision": "58bbaa1ae3279e550bd2675266f7be2e"
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
    "url": "assets/js/54.cc2889e2.js",
    "revision": "dd9bbd745022d6fd2a3b735b637328d9"
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
    "url": "assets/js/67.e90443b8.js",
    "revision": "8b8933c6a3e6f0cad8bf7933f3d29c13"
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
    "url": "assets/js/app.505e3325.js",
    "revision": "66a152de507d2105345bceb59e82bad6"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "61e2603dfc8a37392a79587014553537"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "48651611b335ca00ff62177d7be68e6f"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "adcc93c7b47a071e97bffe04f3e730e2"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "b697c11f9087e641ffddcf49c63623b7"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "062eebdf441e387a5f97144a1ce57f6c"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "5120a18298fa99fdfccc21300274280a"
  },
  {
    "url": "computer/c/c.html",
    "revision": "01458abb4d9346935992d50392fdb80e"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "c3e020d892a438fb83a87c9b32349f2a"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "8d3af8313714f7c3b7cc7d721e0af5bd"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "2de65057de861de5d15185472d6d8359"
  },
  {
    "url": "computer/python/python.html",
    "revision": "79368fc82f04cbea21d5a2bbf5231cc8"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "40d12de236956d365930ec28ca7694b3"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "460c2649f072c3e578cfca1eda70771e"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "a67970499181996cf50900174cf0e651"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "16860b60feb3d039e8dd7413eb080f16"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "c174eef9dc9b9c40c26ffc73ec403636"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "4a52a1ada55feebb0472340e97b0d292"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "f57acca4e4b06e15df4ac4b570b46f2e"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "c92d13b4f9739b92b1fdd208540e59d1"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "d5793f40787fd116d6277e42f5fd88ff"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "ec9eb4122f87650372a4abb57bc28c87"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "90a4c19a8911c8ac9b2eb84bb0a5d42c"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "1da76cbc950b3ecd78899523733978c8"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "b3a291f26fc44fa63fac2950e02989ad"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "39da58ea6cb2a491223456eca46fd518"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "21fe3d131a55a0c51563c735e6ea4812"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "7ba0a38a31fb8b87860b072514a086a6"
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
    "revision": "da087da32103b5ab495f9c243b912654"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "c4ce3e643cc578fe653b8ac7756b299d"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "67acd729f6741f2ca91df5b527f57689"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "6995d3ad8122bb6fcad3eca8ae50e32b"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "1815fc50ab4b56792048945dc55f95da"
  },
  {
    "url": "physics/光学.html",
    "revision": "d9b9a02e920bcb554cd057825c635971"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "bf01a0b73c662c5494fbc34c0e302939"
  },
  {
    "url": "physics/力学.html",
    "revision": "804f1d5b483b1cc136b752dd431dbd7f"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "db08cbd9151792f0d932f266244b6278"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "690626cf1541325eafcbeeebfb6cedd4"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "a7833be810f4e9731a8136ff80aed228"
  },
  {
    "url": "physics/热学.html",
    "revision": "fd24b28825752b290d82a63aebd246fb"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "e6dc988522b9925850eca16e14d160eb"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "30a595188be3aaa3bc0076292743b228"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "46999c35dc3f90bb6ab9f43624a02b58"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "d7a200612e54ef32b924673d81329089"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "d3e253051aa8fc79b2bc87f828e8ec74"
  },
  {
    "url": "web/html/css.html",
    "revision": "3ef55ae9f1ba0f9eb815aa88ae1d2dd1"
  },
  {
    "url": "web/html/html.html",
    "revision": "d0ff24a1435b6cbd6e517851669eee4e"
  },
  {
    "url": "web/html/实例.html",
    "revision": "def3656abddced1dabe8ec7aa4b59847"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "5eb8820e3a290a0b3e323d1f8414ffda"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "2f36e868ed51f7fb8020a8e8b0a7468d"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "39dea9f29219cc11e8b46bb060d6356b"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "ca9bd4cc4f39c0c60b2c7f3c68a17c73"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "15e90d828561b8f772a0b751ff281a1f"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "32141e21d9a1f1db024ca6bc0ba004d9"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "eb9654cb38211da6fe49ce9faef8d438"
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

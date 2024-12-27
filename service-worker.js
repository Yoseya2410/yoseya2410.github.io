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
    "revision": "c99b541b2d33a72bf44c3676c950ecb6"
  },
  {
    "url": "addition/json.html",
    "revision": "0735019827e2a34b5f6c8e6f8716e46d"
  },
  {
    "url": "addition/latex.html",
    "revision": "423f759fd89e8552435ddfdd50f85eeb"
  },
  {
    "url": "addition/markdown.html",
    "revision": "4e2e0dab82804e5e346efa6d9e2262ed"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "5227406d05149cb6cb61d23a82271edd"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "21579c0f2901d482ccaa31ba6f8c49bf"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "7f031b16b757c3b146082881b352fc94"
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
    "url": "assets/js/11.6a7b4b46.js",
    "revision": "99491685e4583b1692d5b704b3b8f9ad"
  },
  {
    "url": "assets/js/12.37a338f9.js",
    "revision": "1fc2ae67b83508f9cec03b194503dca4"
  },
  {
    "url": "assets/js/13.95767c99.js",
    "revision": "15039faf8fb6b520283833354a41a1bb"
  },
  {
    "url": "assets/js/14.660903ab.js",
    "revision": "7ff5a90b22023d0c94301902186a3186"
  },
  {
    "url": "assets/js/15.e3ae5000.js",
    "revision": "c26d97e6e68a1753e4fd3a8ddc9f5505"
  },
  {
    "url": "assets/js/16.a3b440a9.js",
    "revision": "f968116a591978abc8e3e6b67ba2933f"
  },
  {
    "url": "assets/js/17.5a723be4.js",
    "revision": "180122992276a9e45c8973ddcd87a10b"
  },
  {
    "url": "assets/js/18.6606e356.js",
    "revision": "a4377aa3d486d176e566cc98b5177541"
  },
  {
    "url": "assets/js/19.96a1f6cb.js",
    "revision": "38e34ddca127787057a380d2d4c78e49"
  },
  {
    "url": "assets/js/20.8dc75bb6.js",
    "revision": "32684e3de08433ad4e6ee0f154044d6a"
  },
  {
    "url": "assets/js/21.961e341d.js",
    "revision": "27538a69b6afc403c91fb6331e768d25"
  },
  {
    "url": "assets/js/22.4883c6ae.js",
    "revision": "3bdf3c0588ffd140d6deaf49587276f1"
  },
  {
    "url": "assets/js/23.fe7b48b8.js",
    "revision": "17d369c87a242dddc8da2f652853d78e"
  },
  {
    "url": "assets/js/24.cde65fc6.js",
    "revision": "0aa75775c9c03b681af2f2e2f5c312d4"
  },
  {
    "url": "assets/js/25.9490c7c1.js",
    "revision": "9ae64224f904f30cb613174dd42a5764"
  },
  {
    "url": "assets/js/26.d49d8044.js",
    "revision": "2295cbe418bd8b80fb00ca173eb7c794"
  },
  {
    "url": "assets/js/27.653056e1.js",
    "revision": "0a2b31047c8a41013f47a471a0082621"
  },
  {
    "url": "assets/js/28.6ddbdbca.js",
    "revision": "849e2f3ed2c3f8db6ae0e2d5fbbb33af"
  },
  {
    "url": "assets/js/29.ac73b9e5.js",
    "revision": "b1c166f912166aee74ab641865df2d95"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.93948ba8.js",
    "revision": "906bba59fd379d7dc3ba47e87934cc11"
  },
  {
    "url": "assets/js/31.3d42683b.js",
    "revision": "19a2a80545f0761bc91ee6bc6c5a1f80"
  },
  {
    "url": "assets/js/32.9e442e58.js",
    "revision": "1beabf288dc2f58eb1a1868a8efc4dd5"
  },
  {
    "url": "assets/js/33.7f6dadb3.js",
    "revision": "cc98d2129d5e6057117e405d992db4d4"
  },
  {
    "url": "assets/js/34.7b9b8c46.js",
    "revision": "26f15dbd4f3760d3a3fc31e8a762c58e"
  },
  {
    "url": "assets/js/35.220b0553.js",
    "revision": "8c869995ac770d6aae56018996a522ad"
  },
  {
    "url": "assets/js/36.dd8231a2.js",
    "revision": "fdff964fb2d6358c35b4878b100adc3e"
  },
  {
    "url": "assets/js/37.511b7916.js",
    "revision": "d5fc4c0993a9c47ee86022ac0e0ce78b"
  },
  {
    "url": "assets/js/38.f8f424fd.js",
    "revision": "e91d5db4e6db0b139f9550710a11a3cc"
  },
  {
    "url": "assets/js/39.ac488812.js",
    "revision": "737923962b0dcfaf48bb939693b9360c"
  },
  {
    "url": "assets/js/4.1a23b33c.js",
    "revision": "e4435ffd98788df3245c3a225e9d5337"
  },
  {
    "url": "assets/js/40.0556856b.js",
    "revision": "59f249490d6982eba926d28f80802850"
  },
  {
    "url": "assets/js/41.52b4a1ec.js",
    "revision": "f4fd41299823bcaf735207828718e0ba"
  },
  {
    "url": "assets/js/42.1db36849.js",
    "revision": "0a8811e270e04f78357d684c9568f60f"
  },
  {
    "url": "assets/js/43.61e8d798.js",
    "revision": "bf9760a3ec6b3f479430594e6cd7bf32"
  },
  {
    "url": "assets/js/44.370ca350.js",
    "revision": "f643cbf90e5bbf8534558785137001cc"
  },
  {
    "url": "assets/js/45.65a9f838.js",
    "revision": "c40529cf6691def62fdafe06a1fce532"
  },
  {
    "url": "assets/js/46.583eedcb.js",
    "revision": "7ebbbe3d118f0bb29dd1011421326240"
  },
  {
    "url": "assets/js/47.1cd959b3.js",
    "revision": "bf23007a785fc105764ea2e8b51d5685"
  },
  {
    "url": "assets/js/48.e0207460.js",
    "revision": "de3f432b86bc03d3fc8919cafeec6bde"
  },
  {
    "url": "assets/js/49.066a046d.js",
    "revision": "038dd8ef05fb705a3b8e728542c43b88"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.114bdbe3.js",
    "revision": "a09ed15d804002bb6e0cd87bfb829d99"
  },
  {
    "url": "assets/js/51.fbd7aab9.js",
    "revision": "df4c9ee7381a033e65f4be2051dcb904"
  },
  {
    "url": "assets/js/52.6d75f7d3.js",
    "revision": "7a50995de3fb3ea7126e4ad7e5b80169"
  },
  {
    "url": "assets/js/53.24d864fc.js",
    "revision": "9ff3bb86a352e0696033ddda78f7453a"
  },
  {
    "url": "assets/js/54.6adda14e.js",
    "revision": "dfe6b1299d14e87ef3fb945db48183d0"
  },
  {
    "url": "assets/js/55.4c7bc5ef.js",
    "revision": "b8c90035da743117e2c537fd7f3f9b94"
  },
  {
    "url": "assets/js/56.18fa819b.js",
    "revision": "65c10ad1e46f1cf08ab2f0555faccc1e"
  },
  {
    "url": "assets/js/57.0bfbec27.js",
    "revision": "cf4eb241125d855cf7eeef36385d4e1a"
  },
  {
    "url": "assets/js/58.79e401aa.js",
    "revision": "db877a4a9e70bec986f188ea68bd1e20"
  },
  {
    "url": "assets/js/59.d4b1b9e9.js",
    "revision": "f9a2db25c18e540f2e297c4246595035"
  },
  {
    "url": "assets/js/6.292e69e9.js",
    "revision": "62cfb178e34916b51557b19c3f1e83ec"
  },
  {
    "url": "assets/js/60.547c4b52.js",
    "revision": "ac1a7c7abb41564822604658b7f73ee6"
  },
  {
    "url": "assets/js/61.24e88608.js",
    "revision": "04640c578337558fad76bc47d1f3b4bb"
  },
  {
    "url": "assets/js/62.a622ff49.js",
    "revision": "b16889cf8dd38e2b35762c9528dae8fa"
  },
  {
    "url": "assets/js/63.708999a1.js",
    "revision": "65208ca627bb959da8617741c04489f0"
  },
  {
    "url": "assets/js/64.fff84a3e.js",
    "revision": "25593aacb7ad0e7a2e43fcb6684a54ad"
  },
  {
    "url": "assets/js/65.d7211afb.js",
    "revision": "c9e4a8a7193a7803e5c87edb6449efc1"
  },
  {
    "url": "assets/js/66.4b5e4b1f.js",
    "revision": "8f1aadf8af86cd691cd0271d2a0ee25f"
  },
  {
    "url": "assets/js/67.7d0cd55d.js",
    "revision": "d36f36a3ec95aa0f6b5c4da87c247289"
  },
  {
    "url": "assets/js/68.139db4cc.js",
    "revision": "30257c5fcae03f8eff87a6f7097d756a"
  },
  {
    "url": "assets/js/69.84085f97.js",
    "revision": "468895245fa69a9bcb94bad79b2a0203"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
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
    "url": "assets/js/app.a234a92b.js",
    "revision": "4613716979b99c85bc214977cba1ed58"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "dce73e77b201750be82fddb0a876ba92"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "aac9745a7898d74172241bfbd146e901"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "026f598f070584fa7062ad76cdcdab09"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "7d340c7dc9b2a8f6c1592289d146d84f"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "ed4ae337f473d3a1a23283c1424976d6"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "d1b30c577f4e19c04e5076f9405180cf"
  },
  {
    "url": "computer/c/c.html",
    "revision": "7e2e5903fd42ae497a75eca399366bf7"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "35a44c59740ca63f81689582f9facdda"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "a596912c26abd5c20edd9831364e7db1"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "8a0ba0c4122db2f69f75ab84baffcf4c"
  },
  {
    "url": "computer/python/python.html",
    "revision": "fa2c81dda2615066799f32c8c3680a08"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "f51db6a44eed9457c40fb5c8d817cbdb"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "61dac7d80b821e4cc204bd07e0e25fe3"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "d530239e4deaef96a38e1111de5acf2e"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "5760b4176905379029db7b752894adf5"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "195d8d0870b73404e742743c37818910"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "2da2b726a11c1685948ea28c0c2c2a0a"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "3e6b75ef1122c2b00d2c9fcdf3adbe3d"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "a3a0870cc79de95efbad9269bcbb904d"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "f236a394f3bbd1ca9942ef065cb52188"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "e44ca1aee363b9f2125e02c8b492008c"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "7b15f26be6436d6aaf37e4a1f945847b"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "c872810ca99588f65f33a2eb2ef19f65"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "36d1379a3d40e74199165316e81535c9"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "8a31b51cdcfa5ff6a760914470a7e5b4"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "61f10ad0e650126abfed35762b0c23fa"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "637de734b2e919e02a4477c2aa1f621d"
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
    "revision": "d8bce6db86c1417477e0f1d257ac1a31"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/微积分.html",
    "revision": "85e1f8e9edb741c020b2574a2edfcab8"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "37b60a5e9fca3f47e6b4b923b1d4d5ea"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "7640ba3a59aeb16b4805467838f639f2"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "e59cdf255dbe573c54b9152d1ad5d8e5"
  },
  {
    "url": "physics/光学.html",
    "revision": "6564e0c7e9d172bbb06a9dddc038c321"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "1f9d1eb52f7a4cad48b3500f1a81187f"
  },
  {
    "url": "physics/力学.html",
    "revision": "2f43d4eb27c6c4d175b81b8d11753ec7"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "360bd7c9bd6da81440854b9fe859cb67"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "26fb792a7e5e42efe177cf1bccf48941"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "bfad1e1999b2d211328ec08725b57bdb"
  },
  {
    "url": "physics/热学.html",
    "revision": "b04d22865472e9144feed8577a91d0fd"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "4c770536e644db22174b1708a8bc766a"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "61be3976daf42150a5f77c124e7f1ba6"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "276cc5aa45162d8ac29073a5a228f032"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "4734bf8c8deeea59e56e92a55e8b4363"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "6e9a4a995c2e1e1a71212361ac6811ad"
  },
  {
    "url": "web/html/css.html",
    "revision": "e25e7a7ac750cc43232f83052d9749dc"
  },
  {
    "url": "web/html/html.html",
    "revision": "0c60ce7e36e0a4fb7f435b35c80ac10b"
  },
  {
    "url": "web/html/实例.html",
    "revision": "58877f79bcc02b5fda837da4bd53e6bc"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "85c17dfee141a870698e5b3576db56f0"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "0a90533dc9e6bf259387f9214e4458c2"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "8ba790409630e4e949900dfa734b74c9"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "f81ab9ccba073941f3666d76145f2b00"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "a579674fff3e9f122353a471d471dec1"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "678e1360a38c2b5156d230e825b93379"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "1ddc42a336096f9d9a0e7d2c632c46dc"
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

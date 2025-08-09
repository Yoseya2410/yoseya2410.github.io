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
    "revision": "35db3796ee19ebfb5b359d8ac2b77743"
  },
  {
    "url": "addition/git.html",
    "revision": "c787a1a8c254f51d83361af854f87274"
  },
  {
    "url": "addition/json.html",
    "revision": "2d2b91777cc4abc448e1365c5c0b28b3"
  },
  {
    "url": "addition/latex.html",
    "revision": "2ca33231c250ef6ad1823df4196c664c"
  },
  {
    "url": "addition/markdown.html",
    "revision": "7ef6e8e104d54c630c020ebb9fdda5d2"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "941eddb3f64f2162f68075f5d2f77b9e"
  },
  {
    "url": "addition/xml.html",
    "revision": "d86fe8f0bcbc296d35928e5ead0cfb72"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "ec7c5dfd6a20cea8c2fae87819017042"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "c1ecfe747824a69169dd786ac40c889b"
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
    "url": "assets/js/11.e6876fe2.js",
    "revision": "a7b231fd4cfd6f5fdba5789b0dea92ce"
  },
  {
    "url": "assets/js/12.7f27b2b9.js",
    "revision": "02a731adb80982264804baaa8c7212d5"
  },
  {
    "url": "assets/js/13.99086e97.js",
    "revision": "731f0bddc3bb7cbdf0cd720d706691d9"
  },
  {
    "url": "assets/js/14.4d9c3fd1.js",
    "revision": "8b36fe2226f18c7a913893584b728525"
  },
  {
    "url": "assets/js/15.68d8aff1.js",
    "revision": "f4171d1adadb0cb4e90fd3eb3d80b5ed"
  },
  {
    "url": "assets/js/16.ea59e35d.js",
    "revision": "5d97f9d43a799788745a0d227a9dc260"
  },
  {
    "url": "assets/js/17.59b5a50d.js",
    "revision": "a0a98b43d5b4dd0d4a311e70e865cd88"
  },
  {
    "url": "assets/js/18.58dc0191.js",
    "revision": "309bccb23b880aac7ea7b232ed6a0489"
  },
  {
    "url": "assets/js/19.14045d84.js",
    "revision": "d1d58ba31166b483561b81f9e9d9b080"
  },
  {
    "url": "assets/js/20.c206b90e.js",
    "revision": "be6933e8d1dae2a8b4221f252dd162c4"
  },
  {
    "url": "assets/js/21.4cafa004.js",
    "revision": "1e23530b98e4eee067b6beab2d5c2833"
  },
  {
    "url": "assets/js/22.0474bcc2.js",
    "revision": "8353cda3d9fbe1d6b3af74fe034e66c1"
  },
  {
    "url": "assets/js/23.0cc413a4.js",
    "revision": "c291e53621519a3d1a76cc2d80f33413"
  },
  {
    "url": "assets/js/24.e9ad7565.js",
    "revision": "70b5809c3c713ba914814a51e8635fba"
  },
  {
    "url": "assets/js/25.db05add0.js",
    "revision": "6b8b087cc392236c52f70cbe64b713e5"
  },
  {
    "url": "assets/js/26.4bea1345.js",
    "revision": "51b378fedb7f84c6628e9aac0ee10327"
  },
  {
    "url": "assets/js/27.777b58f3.js",
    "revision": "ccd551d9afc97bb9b76e9671cba47958"
  },
  {
    "url": "assets/js/28.36f600be.js",
    "revision": "1aefb0ecb1a41d901337a188096d2ffa"
  },
  {
    "url": "assets/js/29.317cbe4a.js",
    "revision": "f58dc160ff955756d9310cd2eaf32187"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.66038076.js",
    "revision": "5a3d577bf21c8762bb7c24ef0b27bf03"
  },
  {
    "url": "assets/js/31.74bd103f.js",
    "revision": "1bdbe1db2398c7bbadaef02239a59125"
  },
  {
    "url": "assets/js/32.32582265.js",
    "revision": "a32096ec012f7dfec85bec3f5f4e8e4d"
  },
  {
    "url": "assets/js/33.6a377681.js",
    "revision": "0a1af5fa080a4415764f147ef366ed77"
  },
  {
    "url": "assets/js/34.c5436438.js",
    "revision": "81a23e3b063485cae92d280f9a905c3d"
  },
  {
    "url": "assets/js/35.0e5313e4.js",
    "revision": "212f424f27ee22e8368cc4e3534c5301"
  },
  {
    "url": "assets/js/36.25a9e8d8.js",
    "revision": "221346ca922e8a0d00e3a8e27e7ce794"
  },
  {
    "url": "assets/js/37.5abcaa9e.js",
    "revision": "5837dcfd0b8130a2475f4103d5d9f321"
  },
  {
    "url": "assets/js/38.26f90a98.js",
    "revision": "384dbd663ff11ab423c910ff17bf0df7"
  },
  {
    "url": "assets/js/39.584c045c.js",
    "revision": "24252c9bb700ab0f4cec9822da5a4444"
  },
  {
    "url": "assets/js/4.8589c05e.js",
    "revision": "6f060e086f50027dab183f9742e79731"
  },
  {
    "url": "assets/js/40.8ada414d.js",
    "revision": "cea8a6c3a5d2a7a7f007643191bd9cb6"
  },
  {
    "url": "assets/js/41.6e6eb8e3.js",
    "revision": "8fa184fd3d4c3e9ae3e603685dc036b0"
  },
  {
    "url": "assets/js/42.28961d77.js",
    "revision": "f1072999e8736237dd0518e3a9671b3d"
  },
  {
    "url": "assets/js/43.1ecf439c.js",
    "revision": "3d10b5dbce8cabd4e9017ad41ccbea35"
  },
  {
    "url": "assets/js/44.aeeef8f2.js",
    "revision": "aa5f51163be29fe8ccfb9baa29d7866c"
  },
  {
    "url": "assets/js/45.35796d34.js",
    "revision": "c37bd8ed264b41724f81fe62a5ecb773"
  },
  {
    "url": "assets/js/46.c5b4dccf.js",
    "revision": "6da7e87bee8a4bf8c45d793e95a9d40f"
  },
  {
    "url": "assets/js/47.998ca698.js",
    "revision": "22301f3f04d5df1414922fe70f07cc8f"
  },
  {
    "url": "assets/js/48.3fefc3da.js",
    "revision": "5ebb4e8dd3a8bf937745bd29d5651da9"
  },
  {
    "url": "assets/js/49.b4e0555a.js",
    "revision": "a535aeb6dcbb25f2dd08966290b5a29e"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.98c84dd4.js",
    "revision": "aaa01deec91f64dd8dbeb4d256b9ba24"
  },
  {
    "url": "assets/js/51.eb330545.js",
    "revision": "fef9ffff975d4aa400696f186e04b07b"
  },
  {
    "url": "assets/js/52.54bf24c7.js",
    "revision": "e65d138d48f301eeebd28ed4ecc48a75"
  },
  {
    "url": "assets/js/53.621ecbf3.js",
    "revision": "e2eea6bb01194e6e9bc006d65ca0b9c7"
  },
  {
    "url": "assets/js/54.111edec6.js",
    "revision": "c230a48e0a4363452a7053291b3216ea"
  },
  {
    "url": "assets/js/55.6db89f0c.js",
    "revision": "b56e627d927db54321fa427bf50aa439"
  },
  {
    "url": "assets/js/56.bc34081a.js",
    "revision": "fd596aaaa4fb32513a71af35ea93cea9"
  },
  {
    "url": "assets/js/57.dd784b1a.js",
    "revision": "bff02c0637f2f20f416aeeaec2ba2025"
  },
  {
    "url": "assets/js/58.216209c6.js",
    "revision": "596644405ade063f48885b2572671774"
  },
  {
    "url": "assets/js/59.67b4658e.js",
    "revision": "1eb5c27974a59086c1cfe2b4258c41a1"
  },
  {
    "url": "assets/js/6.ad2b2714.js",
    "revision": "8374c9ad0b949e0053e4bd0fb0d8bd08"
  },
  {
    "url": "assets/js/60.66d1a895.js",
    "revision": "e3f7c8c2700e0776cfd75450b43b6c93"
  },
  {
    "url": "assets/js/61.fe248df2.js",
    "revision": "fe1a3f08a0efafa1bdd5ea6071ab9990"
  },
  {
    "url": "assets/js/62.5b6e97ca.js",
    "revision": "3d4247223127abfb3b4f25ec0c7482c7"
  },
  {
    "url": "assets/js/63.76cd7690.js",
    "revision": "d83022129415f38bc05b0b94a0ec5500"
  },
  {
    "url": "assets/js/64.1a6ca503.js",
    "revision": "7932ea888d850671019ad3c40e1f3191"
  },
  {
    "url": "assets/js/65.dbea4ed7.js",
    "revision": "635ddd31f8d0cb9f92f1629131218e39"
  },
  {
    "url": "assets/js/66.01a632d1.js",
    "revision": "318bdab1d5a5049f6e5778078df7069d"
  },
  {
    "url": "assets/js/67.6be0145e.js",
    "revision": "616940aa81ed47aab4b1907220bbcf87"
  },
  {
    "url": "assets/js/68.f68d38bb.js",
    "revision": "d791358eb00e624baff944a6f20feff3"
  },
  {
    "url": "assets/js/69.1d66a945.js",
    "revision": "13b7e9d63e52d52e50c69dd9738bd4bc"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/70.1f56ed7f.js",
    "revision": "06b886065d2bf6a9caca031cc8ad15d1"
  },
  {
    "url": "assets/js/71.441caf15.js",
    "revision": "ad8fba8c2ffc11b8b721ab412f550132"
  },
  {
    "url": "assets/js/72.d61abcab.js",
    "revision": "87ea52fa5e605894aeb83ca03323ca28"
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
    "url": "assets/js/app.799b18f6.js",
    "revision": "53cf54ce4f0cee707d1ebe9ab5e66c62"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "cd494a8564b5160177158ac7c7933145"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "230ecedddacdded553e6d2b42a1feb8a"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "87050d8235e5974ddf1ab8fa3f430f7d"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "28b41fa0f028f00804b838530958f694"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "dec21835d2e6753991fd57fff7541b15"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "1276e96cd1896ab4f9cd7fa3d7a09cc2"
  },
  {
    "url": "computer/c/c.html",
    "revision": "e8b96af0f7edf9dcb284f54a6b9dc8e8"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "dbf1e75a91e54616584f2e620e6d7e53"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "1e994019e27038c8d76a87091f418cba"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "fbe8fa285deec478e9f282b535570dc9"
  },
  {
    "url": "computer/python/python.html",
    "revision": "89dbd347bcf7365a20242d87a64bc7f2"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "91264f5527e2f746ac21d9e2d96a82d9"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "467e55a6be2c26382d63f50c2f01f2d4"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "07ad6a294a6f230129436da77cabcbca"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "6de6d2cec0f9eda39029a0070f2f61f6"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "16f72b067942e89a89c06549b5a1849d"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "65fb1a3e69f632c5b73b3fb7c8788878"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "f3a3038b05ef8490c3970f522dfa4b3c"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "7b1b1eee5c1d8aa9f1989bc937b893ff"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "078098f888b16c4a488e4c4b841d9782"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "be4d35f226b02a8fd1eb2be51bd0eef9"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "e43002a8936dd992f1a1c0b8fd3fb79a"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "aff88b258add51838bbdd8c1ced17e61"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "566e7c138f4a2c04c2a94cf576f31837"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "ed0152123f51d52f5e0a09e54e2cdbc6"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "1fe377b19a43635247ba80a2d172983c"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "b34e1396e2aa9ce047069d08b4df5294"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "9de54f6e278de1c343af626824744abd"
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
    "revision": "74e5496bcb293f580d5f2dc39b0e67ca"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "9410aa3b27cabbc63eba2c74a145538d"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "761beb1d281f3e740a2bd6b33c101ccf"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "cb7182f91b16395576dd7aac17543422"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "2292d5712389d88db83985cc2a8371d8"
  },
  {
    "url": "physics/光学.html",
    "revision": "56f276d4e5d833a6718920b444a1d60a"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "6847364d8fd59bdcf0eea913edee052f"
  },
  {
    "url": "physics/力学.html",
    "revision": "ea01ffc8bee953345105827693416289"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "68c278134ec14fa58350a0029f7f7d04"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "d77f43955c96b5df4bf40873f908bb75"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "15fd15efedf5a097584a8d7f375bad0c"
  },
  {
    "url": "physics/热学.html",
    "revision": "bb90511e6d450a6037f501fdbe65b5c5"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "b7b8b145a8c61337017752479dd96252"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "d25d816b7f7b182a894f881d601043a1"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "0c123162d2067fec1f38970e72809712"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "153a279d0927a37dbd95010bc72165aa"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "42a1ff366672ecfaa768e198874e3746"
  },
  {
    "url": "web/html/css.html",
    "revision": "56b49bb3b3f401f8fecdea1b4a64181c"
  },
  {
    "url": "web/html/html.html",
    "revision": "c7ea713f009abe99c248abc9aa0e4822"
  },
  {
    "url": "web/html/实例.html",
    "revision": "52a04982dedc85a40bca5e4d7df189a3"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "7e807e10f6fcf58ff36251d40a532c4b"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "908839d86ad309087a5931870f7ff2df"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "3c6f27373bb857aea5764f46ab4ef9f1"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "6e5fd8005066371d3fd5ee8ae79fb8a4"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "cd928a0cb5d32ea123a16dcebd01b7f6"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "b39d9f6a47d133e2df0b2bfaecc56df9"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "4bd439575e96ca1390ca4cdd9041155f"
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

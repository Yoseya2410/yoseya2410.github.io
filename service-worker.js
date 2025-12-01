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
    "revision": "86e58aa2bf465e84bf55c6bdeea0a6c2"
  },
  {
    "url": "addition/git.html",
    "revision": "3a0043730fc4f3bcc38cd907faf01737"
  },
  {
    "url": "addition/json.html",
    "revision": "7897c0acec4f532941a4103bd598e70c"
  },
  {
    "url": "addition/latex.html",
    "revision": "772bb835e059ffb4ae7140373cf18163"
  },
  {
    "url": "addition/markdown.html",
    "revision": "d3d5c7c308889e3ea4d5cdfc39e600bd"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "7da5bc13a09bd310f409588a79321b79"
  },
  {
    "url": "addition/xml.html",
    "revision": "d6668d6afb6b9467d70b323f250086c1"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "7e79f2eec6567efbf550b1b00d804faf"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "a59173ff340e9fdea5f03d0b20774c0c"
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
    "url": "assets/js/10.2b3e4369.js",
    "revision": "549f00ccf747bdcd7095e3fdaa0b12d3"
  },
  {
    "url": "assets/js/11.c05c1ae2.js",
    "revision": "a019e403e376a713366f002acb5e2695"
  },
  {
    "url": "assets/js/12.40e6a7b8.js",
    "revision": "abe2f699f953de37228dae61683c655e"
  },
  {
    "url": "assets/js/13.f413abb3.js",
    "revision": "036903da80552bf95882e4807cb84f11"
  },
  {
    "url": "assets/js/14.c6111d4b.js",
    "revision": "283668b3b1e51331d6d68f8118157428"
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
    "url": "assets/js/18.3c65c578.js",
    "revision": "1e888ed867821210103a776df7d974bb"
  },
  {
    "url": "assets/js/19.2438d003.js",
    "revision": "b1c9334b9d02d1ce556c602395ed4b40"
  },
  {
    "url": "assets/js/20.db4081be.js",
    "revision": "e19a3fdeb67d571228109847533f8add"
  },
  {
    "url": "assets/js/21.4cafa004.js",
    "revision": "1e23530b98e4eee067b6beab2d5c2833"
  },
  {
    "url": "assets/js/22.b826a2dd.js",
    "revision": "2732f35c61bc6bd367c97557dcff99ac"
  },
  {
    "url": "assets/js/23.08d4b066.js",
    "revision": "5e299292c6072b2f619f93a87a78999e"
  },
  {
    "url": "assets/js/24.7f3357f8.js",
    "revision": "cd466822796cc40272b588085eb9358c"
  },
  {
    "url": "assets/js/25.ee322744.js",
    "revision": "c163c5f27ebe6cb4185c7a6c0a82df12"
  },
  {
    "url": "assets/js/26.54b969b5.js",
    "revision": "7d5b1242da836c7caa23bb8dd4a66626"
  },
  {
    "url": "assets/js/27.78cdf6ca.js",
    "revision": "239e6aa3f6972bf1ef88516febce398b"
  },
  {
    "url": "assets/js/28.7d052513.js",
    "revision": "3bbd0c8c6ba379d4d8beac608436b76b"
  },
  {
    "url": "assets/js/29.882510d2.js",
    "revision": "2b561171c61eca0668e97f22253db6a9"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.d200cedb.js",
    "revision": "20ae41c96607a1ab6b5e05fc550986f1"
  },
  {
    "url": "assets/js/31.62023fc0.js",
    "revision": "3cee760eacfaa9498157102fcfdaadb8"
  },
  {
    "url": "assets/js/32.0b9d0b1c.js",
    "revision": "2bb44b9eb94058506b25c2295892a59c"
  },
  {
    "url": "assets/js/33.dae75e2c.js",
    "revision": "748522d77f4d37a1d14cb1afb6c3a9c0"
  },
  {
    "url": "assets/js/34.3cdc7c00.js",
    "revision": "d569394fe95abf7ae34ce46359d2be93"
  },
  {
    "url": "assets/js/35.d6c54db9.js",
    "revision": "570af91d4db7d1778bb9e2d3c180b880"
  },
  {
    "url": "assets/js/36.48bd47d8.js",
    "revision": "e271551e156adbfd4b9ca8a2bbd23783"
  },
  {
    "url": "assets/js/37.1472c02c.js",
    "revision": "847d86ea2df01d2d4cc89471bcfb249a"
  },
  {
    "url": "assets/js/38.598f12a9.js",
    "revision": "651a1bb36fcd29219b37a5b2c13b820a"
  },
  {
    "url": "assets/js/39.7f3be8cb.js",
    "revision": "4908a9194bb2d8c9c0c74a79d990deb9"
  },
  {
    "url": "assets/js/4.3175c058.js",
    "revision": "734f736c5460cea66307e12f6391b8d8"
  },
  {
    "url": "assets/js/40.a6457d7c.js",
    "revision": "a109af966d39616835ca27211c2a8203"
  },
  {
    "url": "assets/js/41.e03182fe.js",
    "revision": "faccefe14a596079c73d4d21c2e5c0b6"
  },
  {
    "url": "assets/js/42.edc35f60.js",
    "revision": "881a13fb9d0929a0330222131f4c0824"
  },
  {
    "url": "assets/js/43.3f48f145.js",
    "revision": "a8a5d6f6352ab0a4185ace8415a77c58"
  },
  {
    "url": "assets/js/44.c1a70845.js",
    "revision": "d69572fd7f7b13286d5259e0941821fb"
  },
  {
    "url": "assets/js/45.fa4e9752.js",
    "revision": "61b1896970328b299ce6ea753433a65e"
  },
  {
    "url": "assets/js/46.2491f52c.js",
    "revision": "35203a9e8e56d73d804d6c026d6d3c12"
  },
  {
    "url": "assets/js/47.2e791849.js",
    "revision": "07a2ce25e2f7afd8fc59b0e14a485bfb"
  },
  {
    "url": "assets/js/48.a8cc8b70.js",
    "revision": "e44f9958baff53a2ddd066a5d7e9854e"
  },
  {
    "url": "assets/js/49.cee5861e.js",
    "revision": "5ec7c27aa957b14d05346a39ac8612a1"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.3a1acf08.js",
    "revision": "88e37e13272bd9d0aaa4b2560e424865"
  },
  {
    "url": "assets/js/51.bd11c7aa.js",
    "revision": "5b7a64d8cf9ba78bfc8657222b0aaccf"
  },
  {
    "url": "assets/js/52.5f3bb057.js",
    "revision": "a85e6d211b10804149c2c60e533ab931"
  },
  {
    "url": "assets/js/53.7a029e2f.js",
    "revision": "dddfcc6f6bdb0873afcb815ca56977c8"
  },
  {
    "url": "assets/js/54.956659f9.js",
    "revision": "7ca307170f5c83e3352692866fda8fff"
  },
  {
    "url": "assets/js/55.692f41d6.js",
    "revision": "a3e46fa6fddce28d27c9db2f03a5175e"
  },
  {
    "url": "assets/js/56.cd825588.js",
    "revision": "22efe73adf6a34970253e65c1dcf8682"
  },
  {
    "url": "assets/js/57.e68fb7c4.js",
    "revision": "0788faa66d26b2836151df28d2c98863"
  },
  {
    "url": "assets/js/58.29f69425.js",
    "revision": "03d696df0de5b09a18e80a975c3a7935"
  },
  {
    "url": "assets/js/59.09773648.js",
    "revision": "759e3e2a5a7d734f12edb3ebd22f3aef"
  },
  {
    "url": "assets/js/6.3712678b.js",
    "revision": "c8dac902c667c83941b8647430208808"
  },
  {
    "url": "assets/js/60.d4652a84.js",
    "revision": "8e34ad22a83361a99e698fed61b268a0"
  },
  {
    "url": "assets/js/61.13b665f3.js",
    "revision": "16ac5cf91412820a36131e0290cee334"
  },
  {
    "url": "assets/js/62.1ab83596.js",
    "revision": "393ab6bec6789e0e2450089b8a518c06"
  },
  {
    "url": "assets/js/63.4a176233.js",
    "revision": "6e692d56512433a982a2c25f48863e32"
  },
  {
    "url": "assets/js/64.3a323ed0.js",
    "revision": "bd0e4e222497010e891fd6a987191bb6"
  },
  {
    "url": "assets/js/65.d1fee93f.js",
    "revision": "5477be05b81b00ca9675e4ac53768bab"
  },
  {
    "url": "assets/js/66.857aab11.js",
    "revision": "c486711121c5daf6694b63463863a69e"
  },
  {
    "url": "assets/js/67.6170935d.js",
    "revision": "de826f43520f8949849f306b5c10b9b0"
  },
  {
    "url": "assets/js/68.8ba99be3.js",
    "revision": "8959c11602d355518e876bae00776c94"
  },
  {
    "url": "assets/js/69.0c970f84.js",
    "revision": "e0837b1c1ab7300d74e7e36376608b7c"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/70.2a69396d.js",
    "revision": "e83e02b45e97b71ee9c6a5aaf49d1510"
  },
  {
    "url": "assets/js/71.635e1c6e.js",
    "revision": "af3c588e6d89c0de6742ddbabf70c1b1"
  },
  {
    "url": "assets/js/72.f372e85d.js",
    "revision": "2f443b52cfabe0d2741b343ac4a3cb8e"
  },
  {
    "url": "assets/js/73.cccd04e1.js",
    "revision": "ffd30ef118c86711cccdb16fc022dfd4"
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
    "url": "assets/js/app.1cc258cf.js",
    "revision": "576f1783a6811364e3cd72debd353882"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "46c64f9dbf8c6e493e83d5c549cedd15"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "da55bb6e2bc4b6597d0d383a0740d549"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "95cde103c4102cc237d18ac6363f13b7"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "64854664a1fdbea5f68d0bf2ff5e98a1"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "9e3a13e30f90385a05c9a21e41219243"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "3c8f9cc4ce987ee3a6aa5a2848d23375"
  },
  {
    "url": "computer/c/c.html",
    "revision": "0f99c3d25af5d21d8592588c7c507e14"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "a82e3f8cc80d40b61c84fdab4f38d383"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "64fa71d76e292d34562b77aa46a37ee9"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "684178c4e83997edbbdef8005b343ffd"
  },
  {
    "url": "computer/Java/java.html",
    "revision": "dd056c06b24e34dd647b8568d6bc8ca5"
  },
  {
    "url": "computer/python/python.html",
    "revision": "2ee7e71137807313a3d58d07cfb0d86b"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "6b8dc23180280851950d90bdc05c93ad"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "04417124bd4c6c70ba8dff52b84a56ff"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "209ffc843205dccf0a07cb5d4cfbd40d"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "5b77362b3bde4c2cac40250197cb6ce7"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "34c86a4e71ab7d4ef632240ce12fd70d"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "b04efd3deb52a26adc75caa65fda6a2b"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "1d8f5f112753e12eb43daedfeb0990e0"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "8c995582f57f73c8739691859ccbe9cf"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "b18b51b508cbd232d362ff517b40e0d8"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "a9fa535d654f17eaed1c66eb9c19055c"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "d755f1dbee8ed152d3fd3820b1bea7e7"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "db6f471600eec9a075ae1be23507032b"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "1a9d242d8581d6e340153b88fae0dd28"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "4d700f4b39f52cdbb83c6a5a990158c7"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "e4c5b5d92abb61c403cc8fc4ac5275de"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "93338fb64c4f5934e9ad59db16d0685b"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "b5ffe06c73c1df433b65ddadcb56a6ce"
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
    "url": "img/STM32/GPIO位结构.png",
    "revision": "f63943c3bf038dc70caaaa9276e78323"
  },
  {
    "url": "img/STM32/GPIO基本结构.svg",
    "revision": "b410e97b1dba714559ab90fc866f0f4f"
  },
  {
    "url": "img/STM32/STM32工程架构.svg",
    "revision": "3bb00393e4fcefd02e0fe2ed374a5fbc"
  },
  {
    "url": "img/STM32/外设时钟使能寄存器.svg",
    "revision": "92d896b8596e2129481775081b000eed"
  },
  {
    "url": "img/STM32/端口位清除寄存器.png",
    "revision": "62b8b302d5bac5f8138b8bc1fde098b6"
  },
  {
    "url": "img/STM32/端口位设置清除寄存器.png",
    "revision": "024211490423009c326518c5263b410d"
  },
  {
    "url": "img/STM32/端口输入寄存器.png",
    "revision": "34eff6ede39972826b05840f9ae9264e"
  },
  {
    "url": "img/STM32/端口输出寄存器.png",
    "revision": "bbd06558d9cb26211ad87f49ddec0adc"
  },
  {
    "url": "img/STM32/端口配置低寄存器.png",
    "revision": "76ce964e459d070943da7241ef76ab8b"
  },
  {
    "url": "img/STM32/端口配置高寄存器.png",
    "revision": "c0b3cc6424c2ee8bf11330fe2a4e0621"
  },
  {
    "url": "img/STM32/系统结构.png",
    "revision": "18c7bd16f3617c6da485034506c23c96"
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
    "revision": "4eef946a1c470706ec190062d7306679"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "1b12384334471b8249c6e77e6428af44"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "952beda6419c89067b4fbbde19797e90"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "496a94207648fdf3b441767ffcda8ef3"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "621262cec688b4e9e4773dc970b9fd07"
  },
  {
    "url": "physics/光学.html",
    "revision": "2fc91d50ac3b8f45837a9c2064e17a26"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "5a55d1d6ae8e96041432b9f61ee90b4b"
  },
  {
    "url": "physics/力学.html",
    "revision": "6c07ae3f3051b5e436eece3e8f215acd"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "ebb04fdbcc7c7d89286b802dd7cfccbd"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "b7639ee8a878a59527bd79b62495d6eb"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "eeed4b30b3ac919b5e0d58683911e87a"
  },
  {
    "url": "physics/热学.html",
    "revision": "686d6131977b30a379b3edaa0ad4be34"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "a9eb9f436a52283dcfe7b03008e047c2"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "bb9d07739eec6614826c38b1f7fb5495"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "9aa994f97e3d2d7d862cd3add8939bbc"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "38680e7c3db6e14ad8ff5db643b8edd0"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "5d33966b3df4b132a0350a1889e5cb63"
  },
  {
    "url": "web/html/css.html",
    "revision": "e63f736f917469acd6e280fa86ff6dc7"
  },
  {
    "url": "web/html/html.html",
    "revision": "c3657a07d12f4a8a1a6feecdbef243dd"
  },
  {
    "url": "web/html/实例.html",
    "revision": "2dcea1a7fb94d60def88dd2437c52682"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "5cf0261ba19b8496026697cf602ef63a"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "c5c6e03f9a52d70df8b891a415d15e8b"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "13bc1101dd9a03d8d4cc3e5b42ce1002"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "91681293153becae5bcfba365e088b63"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "3bb9865a6e5d736574d108c3a448e36a"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "c07c8b913c04f5d08ef43366668cedf7"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "8e4084fac7c6288d09bf9562852f004a"
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

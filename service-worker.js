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
    "revision": "e9f96762b4761b0fa202c14a91352cc6"
  },
  {
    "url": "addition/json.html",
    "revision": "42e468fa0f9e7ea2ea5fe35e93639d54"
  },
  {
    "url": "addition/latex.html",
    "revision": "7af711c4faafc665aa6df320e004427e"
  },
  {
    "url": "addition/markdown.html",
    "revision": "91b0fb72267abb01e0ae4772ea8b563e"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "c5c254e0232f26d0e40b2a34fe0ff8e7"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "3942a1d40fc3d4157cbde9e1c521a6da"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "66ce51e511470118886ed1ad35596e6e"
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
    "url": "assets/js/11.30ca3f03.js",
    "revision": "df00ae0bb977ea25de40b2a7032bed46"
  },
  {
    "url": "assets/js/12.a6cb48d5.js",
    "revision": "7aeadfa181d18b6bdd7deee6ab74218f"
  },
  {
    "url": "assets/js/13.dc304cde.js",
    "revision": "5f09214710ff8ea56498339e98bcb88a"
  },
  {
    "url": "assets/js/14.f2ed1e08.js",
    "revision": "7c01032f40f656294127c1ae0b265526"
  },
  {
    "url": "assets/js/15.4fbb0e6e.js",
    "revision": "dc9bf190e4f2343d3f9f9197865b97bf"
  },
  {
    "url": "assets/js/16.8afa1a2a.js",
    "revision": "88fd26d3672607478947b3a3ec3a16f4"
  },
  {
    "url": "assets/js/17.065ff107.js",
    "revision": "dcd1ef4ec0d106c9be9736ebaec2804f"
  },
  {
    "url": "assets/js/18.875b82ec.js",
    "revision": "d09758c43d0b04e436d6816215494ad2"
  },
  {
    "url": "assets/js/19.ffd1dd38.js",
    "revision": "1851b0f2cb4046fe460d051b1a1f8cd6"
  },
  {
    "url": "assets/js/20.1edce5ea.js",
    "revision": "2fdf3d253f5d3b604c3f8690a8593797"
  },
  {
    "url": "assets/js/21.961e341d.js",
    "revision": "27538a69b6afc403c91fb6331e768d25"
  },
  {
    "url": "assets/js/22.0090f926.js",
    "revision": "544a41f97fe64de8cdc90757e8807ba5"
  },
  {
    "url": "assets/js/23.6de2ae5f.js",
    "revision": "94501c2d5463462e45184267723078e5"
  },
  {
    "url": "assets/js/24.3ffcf93c.js",
    "revision": "9726afe352d18670456161ac13ed0d80"
  },
  {
    "url": "assets/js/25.d3dc7ac8.js",
    "revision": "828e7d71d959e1b196fa6c4fdcf07439"
  },
  {
    "url": "assets/js/26.d49d8044.js",
    "revision": "2295cbe418bd8b80fb00ca173eb7c794"
  },
  {
    "url": "assets/js/27.0c7fefe5.js",
    "revision": "7eec3ee11655a9b09bfe20d90c8a7ea2"
  },
  {
    "url": "assets/js/28.6ddbdbca.js",
    "revision": "849e2f3ed2c3f8db6ae0e2d5fbbb33af"
  },
  {
    "url": "assets/js/29.70e028d0.js",
    "revision": "0c0f9828ac0c39677ea35e3ed5dc2b2d"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.00a30db6.js",
    "revision": "b6c3ad73477c95f92e53517e538429f5"
  },
  {
    "url": "assets/js/31.526ed6d3.js",
    "revision": "46e57ae34c5d1b192e265708c0f52875"
  },
  {
    "url": "assets/js/32.9e442e58.js",
    "revision": "1beabf288dc2f58eb1a1868a8efc4dd5"
  },
  {
    "url": "assets/js/33.31763d4f.js",
    "revision": "37ca7f60a265a637d8ab974a7e849dfd"
  },
  {
    "url": "assets/js/34.2aae7325.js",
    "revision": "0e5a02d712b697033cdb8a69e5905076"
  },
  {
    "url": "assets/js/35.17fa7003.js",
    "revision": "361b31d0f16174cce4704d39f0c0e245"
  },
  {
    "url": "assets/js/36.dd8231a2.js",
    "revision": "fdff964fb2d6358c35b4878b100adc3e"
  },
  {
    "url": "assets/js/37.f94dd629.js",
    "revision": "7376273046fa681bcf5fbde0db69a33c"
  },
  {
    "url": "assets/js/38.7942e6d9.js",
    "revision": "3e2311395c0066faad26800383dac9fa"
  },
  {
    "url": "assets/js/39.f94d2f94.js",
    "revision": "a9a4699dcefa48e9f4a950f3b8deeed3"
  },
  {
    "url": "assets/js/4.7cad207b.js",
    "revision": "a510b1d49495ab9ac364527a8660a4ea"
  },
  {
    "url": "assets/js/40.0ecafc90.js",
    "revision": "708481ab66c8dec9ed5ecd724658051d"
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
    "url": "assets/js/45.d89ebd82.js",
    "revision": "0f9ccc96bfcf6dc91330694e55df0e68"
  },
  {
    "url": "assets/js/46.b3396068.js",
    "revision": "a63053640002a4ac01c8e9ecbe923a13"
  },
  {
    "url": "assets/js/47.264c8529.js",
    "revision": "8e17346ca33338173bf447943cfecd4e"
  },
  {
    "url": "assets/js/48.22c007d2.js",
    "revision": "0b4d7fab2f0f29c6b80030f645071255"
  },
  {
    "url": "assets/js/49.50518a0c.js",
    "revision": "33c0ff7dfe2f129740ce55acc2bf3b96"
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
    "url": "assets/js/55.d4e15abf.js",
    "revision": "fb8e4439f86ac1a1ebee0509cc3f3b6d"
  },
  {
    "url": "assets/js/56.e503f836.js",
    "revision": "1d1572b614dd29c59ff4d78707cd1745"
  },
  {
    "url": "assets/js/57.5a0ac73e.js",
    "revision": "6e38265d948192b6d833be431136a8e8"
  },
  {
    "url": "assets/js/58.1df11306.js",
    "revision": "871093284081470b4dd367c6e3d39839"
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
    "url": "assets/js/60.9d27e9b1.js",
    "revision": "8d8366d12f38a0b017f11301d3ad1e32"
  },
  {
    "url": "assets/js/61.24e88608.js",
    "revision": "04640c578337558fad76bc47d1f3b4bb"
  },
  {
    "url": "assets/js/62.2f8007fd.js",
    "revision": "2e2c58ca717f7f48bd84855429a2914c"
  },
  {
    "url": "assets/js/63.5c379225.js",
    "revision": "99f6b856ed95926fb62249f108c1fbe1"
  },
  {
    "url": "assets/js/64.c2255789.js",
    "revision": "46d7cdd9a0dfacb0ff2151f3de27a6f1"
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
    "url": "assets/js/67.f420b15a.js",
    "revision": "ee1e82008cd890ae31880a800bd74327"
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
    "url": "assets/js/app.e3df459e.js",
    "revision": "257fbb2bfdcf6c1c3c29076d30559851"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "471ab06d6a5d7159f6a15438946189a9"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "377ee2660aca22a9da0b4965a9205349"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "5b0f5e175605948febba451c26bcd315"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "511ee42c6a99be5e5a831ad627aa9a84"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "bc3c629f35f9568b74d4121e3f168c3c"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "8a58126dbf621443274043d1c96aed8b"
  },
  {
    "url": "computer/c/c.html",
    "revision": "82be2ddd9734e66e7776a32c79e575ad"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "0e38c2a046de7e7328ccdcd8d94576cd"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "525104586c4a41176797caf045c4c676"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "93cd1471a550d2a2a2ce10d2fbef2859"
  },
  {
    "url": "computer/python/python.html",
    "revision": "9e4165f2136293a6ee577292b0d2e49d"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "37c506fb8a02967db5821c9f5d172389"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "07ce321ddbc517c971589eaec5142456"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "6e5bb9d07fe2ea28ab22d11208da2020"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "83135a5736ca170c3def337245e0457b"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "5fe93400c68f85ecd33d850e92a0874f"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "3aab0bc7f1d1efef87e27c6b019635c4"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "c6d5b96ad941cb483bd1a81947ff241a"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "10ec87a250c76f419e01c1494c42e1a7"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "f532a37e67b949df8a3ced2e2751db12"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "51b1142282f1e3a74b9e62b18f4c8b10"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "0eb2c490f8e21aa23f922a36a035bb5a"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "513ba56a7e12840e957017b37e36efc4"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "666e08b332803eda825314df699fcfd4"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "6b0ba08dfebf52e223394a6260c01871"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "c15ae3fd6db7e7980efc484b1ac7dacd"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "f45c996bd5398717ccc616e7237e3a9b"
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
    "revision": "55c86a5ae9e5b1adc2d012a4b08258ca"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/微积分.html",
    "revision": "9ff865288e48e661fc7e1408da09c500"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "769219422a129f33054217f25c733604"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "f2d91de72cf2b92fbbabe821cda6f043"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "8f1cf283915639d50207f130334ff986"
  },
  {
    "url": "physics/光学.html",
    "revision": "ffc18892d7febdd65da5ad82e4906062"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "270a53a162da1d4c96099bd71151c2a6"
  },
  {
    "url": "physics/力学.html",
    "revision": "75abeabfc48a4ec5565601144935b189"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "f497dd2e47ede91715e8f5ab13314e80"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "57757bdc4f71ada94378183e93231422"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "a3e8da000c24af38f9ab7a42256f1cca"
  },
  {
    "url": "physics/热学.html",
    "revision": "f93492834f9699804cc779326a723b59"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "4f427228ffba0c98ad543ed16460e1d4"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "eadcce96a5ca610d124c7090d260210a"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "dc416ab1afef4f95ccccaa4065636f73"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "45e0061ea043525f906e2c23f73c2afb"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "9569a59d5dd48cb37bde7b95041cdad4"
  },
  {
    "url": "web/html/css.html",
    "revision": "961921c71280fdb9a0bb5f8b8bb744a0"
  },
  {
    "url": "web/html/html.html",
    "revision": "8018963b9a28cfd5fd82c3a7c1bf8401"
  },
  {
    "url": "web/html/实例.html",
    "revision": "d26d5fa763e31b8e055e3ef14ab7d7ae"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "abded124ba75a0c8230e1a3c7c9ab5a6"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "6c11968753c2e32b808a0bcdc4c8fe21"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "559bbb8067407d5803bce6ac42ba3c42"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "eccc95e6bfaee6e145a3a7ac11f2d198"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "1e5876b2bca5ba543eb07cbc62df9039"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "74e48ef85be7837a6daa760193f561b0"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "ad3d1cad6a378b177cfcba820c10e2a2"
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

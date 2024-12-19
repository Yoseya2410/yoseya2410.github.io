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
    "revision": "ca0bc242f944738042c73d4e05ed7f1d"
  },
  {
    "url": "addition/json.html",
    "revision": "cb924ba28dd69e577017f076b1cd82e6"
  },
  {
    "url": "addition/latex.html",
    "revision": "c5704b524a084327e148d7f84fce2ff2"
  },
  {
    "url": "addition/markdown.html",
    "revision": "571785089db3008cfc0a720fd2094a3a"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "b0fcedf37a9e2e23b69703d4fe050d61"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "c81bb377ff2c729d88cd624df7f0d99c"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "fd7bc4ced1981054a0fe30f57240dc46"
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
    "url": "assets/js/10.16039208.js",
    "revision": "772eb044def96e337eb4f8b080863794"
  },
  {
    "url": "assets/js/11.c1c4ca43.js",
    "revision": "dfff6efcee7a06af18ba721b72f4a01e"
  },
  {
    "url": "assets/js/12.c0935382.js",
    "revision": "0b28f20e8b8574324250fa766bfb3215"
  },
  {
    "url": "assets/js/13.4d97afa0.js",
    "revision": "dc599e179d89187babc8525c3b23d5c4"
  },
  {
    "url": "assets/js/14.494453fc.js",
    "revision": "df4d36e2e2add4016c153fca7a25a02f"
  },
  {
    "url": "assets/js/15.e3ae5000.js",
    "revision": "c26d97e6e68a1753e4fd3a8ddc9f5505"
  },
  {
    "url": "assets/js/16.346d42ff.js",
    "revision": "4898a4d131603c1de97d90753bb51bbc"
  },
  {
    "url": "assets/js/17.8540cda4.js",
    "revision": "7ace1faf34f615a61d614218eaa0d892"
  },
  {
    "url": "assets/js/18.7abd3dd5.js",
    "revision": "ebc99e61256c91e6087bbb33c09719f1"
  },
  {
    "url": "assets/js/19.ee00f349.js",
    "revision": "d823ffeba1d5c795a26f16cd50b9b359"
  },
  {
    "url": "assets/js/20.8939814c.js",
    "revision": "48fd1087eafe94c344d8696417f098d6"
  },
  {
    "url": "assets/js/21.a10b97d3.js",
    "revision": "ac2e19bac9f45b01f053678ec90857fe"
  },
  {
    "url": "assets/js/22.543df705.js",
    "revision": "f0d73c94d50a262a5993d3653e6c659b"
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
    "url": "assets/js/25.2884e6e6.js",
    "revision": "e84629aa863c7f9172cfea18b1ecd0b0"
  },
  {
    "url": "assets/js/26.5df7d521.js",
    "revision": "fdd9d22a718efaf42ca6e99820395036"
  },
  {
    "url": "assets/js/27.c4105837.js",
    "revision": "4d2ada17c11cac5c0a5aa908000bb4f7"
  },
  {
    "url": "assets/js/28.cc15ac27.js",
    "revision": "8d4b4522f2e311b80bb86deacaff51a6"
  },
  {
    "url": "assets/js/29.2f0394cc.js",
    "revision": "7d7b29ce7e4e6caf6f8b0c408495ad25"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.18249510.js",
    "revision": "01b9196a0131b4d32727a6021bf86ad3"
  },
  {
    "url": "assets/js/31.f6d665f0.js",
    "revision": "101a2469553513a54764267521ef170e"
  },
  {
    "url": "assets/js/32.f1ace8e3.js",
    "revision": "43027a93c444da380e07417e29f85e99"
  },
  {
    "url": "assets/js/33.a42114ed.js",
    "revision": "5b91c607d043f4a1bd64466bd450d817"
  },
  {
    "url": "assets/js/34.2aae7325.js",
    "revision": "0e5a02d712b697033cdb8a69e5905076"
  },
  {
    "url": "assets/js/35.4628b06d.js",
    "revision": "5e3f5efa7dc1673cbd7ec38d92cc7ef6"
  },
  {
    "url": "assets/js/36.ff72a8a0.js",
    "revision": "e2a241dd3a7f9e1ac13b26eca29df881"
  },
  {
    "url": "assets/js/37.6b758094.js",
    "revision": "407bbaa24301062035c9aeaf2bbcd625"
  },
  {
    "url": "assets/js/38.8c30719b.js",
    "revision": "629d367ce3f861657cafe68644227b96"
  },
  {
    "url": "assets/js/39.ba768534.js",
    "revision": "26c63d98dab3b0669b615773db6e6995"
  },
  {
    "url": "assets/js/4.0f006cbd.js",
    "revision": "9771d4f7844bcd6a1028eec666b6efb3"
  },
  {
    "url": "assets/js/40.069a1f93.js",
    "revision": "4fbe3269f79f50514c65adc2b40b00ab"
  },
  {
    "url": "assets/js/41.c6e5c512.js",
    "revision": "cf81ff075e081d233794b1c96fff7e37"
  },
  {
    "url": "assets/js/42.b1f979f5.js",
    "revision": "9efe9748b5c0ee8a56d370d0cdb9919c"
  },
  {
    "url": "assets/js/43.8ce30eaf.js",
    "revision": "9e3d4f59e5815c4d6f49b86441203609"
  },
  {
    "url": "assets/js/44.80771635.js",
    "revision": "cdb8bb7efc56e2fcf9361c9af4148b98"
  },
  {
    "url": "assets/js/45.404373a7.js",
    "revision": "27141328850cfe5db32dc4ac6f19d452"
  },
  {
    "url": "assets/js/46.54f20de9.js",
    "revision": "41a50996c847376358852019e569226e"
  },
  {
    "url": "assets/js/47.da3bcb77.js",
    "revision": "966d9a2f576d2cf666dfc9e1ffcb884d"
  },
  {
    "url": "assets/js/48.9f1d2706.js",
    "revision": "315e53f90f9f6518ccf5194752272945"
  },
  {
    "url": "assets/js/49.8d84bcaa.js",
    "revision": "45cbf2141f555e929c27929c5a24db61"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.29eff753.js",
    "revision": "4784556c3acc368994c52a408e30b038"
  },
  {
    "url": "assets/js/51.9e47a671.js",
    "revision": "8808631084fcad2fb00865b0609718e1"
  },
  {
    "url": "assets/js/52.bc33ffe9.js",
    "revision": "bb07261d3c884da300a94c3e6aab873f"
  },
  {
    "url": "assets/js/53.a16a4b2f.js",
    "revision": "c6fe16a9d54daab15384b66350ff2051"
  },
  {
    "url": "assets/js/54.d304c370.js",
    "revision": "aa3717a9d1664efe945a9a485256fd63"
  },
  {
    "url": "assets/js/55.7a6a8f53.js",
    "revision": "a7e9460a7954bb323210ca3bfd390a5c"
  },
  {
    "url": "assets/js/56.26f72940.js",
    "revision": "41180d7cc23f5d8644889b58de7f62e0"
  },
  {
    "url": "assets/js/57.4547cecc.js",
    "revision": "fbf9a079c60c17502490c50619b3bdcf"
  },
  {
    "url": "assets/js/58.a444da5b.js",
    "revision": "f646110a2becc44cec99154d78498954"
  },
  {
    "url": "assets/js/59.01cdc70f.js",
    "revision": "d4984c5731484ce43464ce2b6ccdd9c3"
  },
  {
    "url": "assets/js/6.958a8ce1.js",
    "revision": "6a060a8544ad445c101408719b185dc9"
  },
  {
    "url": "assets/js/60.8066b9c9.js",
    "revision": "b8b46c8825727184c7b461ce15e16fa3"
  },
  {
    "url": "assets/js/61.808d74a1.js",
    "revision": "1465aff8eb85a131c1173e98d5c47442"
  },
  {
    "url": "assets/js/62.3a002f50.js",
    "revision": "542dcf1cc8d7dca0e4ae886a1df52853"
  },
  {
    "url": "assets/js/63.e4b6d10f.js",
    "revision": "473d0da0648cc8b1b54ff1b21800c9cd"
  },
  {
    "url": "assets/js/64.85913372.js",
    "revision": "c036a23d70b60480da7895afbd02cac4"
  },
  {
    "url": "assets/js/65.8a6666d0.js",
    "revision": "1ffa9c50d6f3094e01b0790ac4029c22"
  },
  {
    "url": "assets/js/66.5c72eda1.js",
    "revision": "c53fd7620d7944a5d964907bb6d8a5e7"
  },
  {
    "url": "assets/js/67.a7aa4604.js",
    "revision": "a73e2430a78e56a91e4903b7f34d8e45"
  },
  {
    "url": "assets/js/7.7ffbb549.js",
    "revision": "697acea291624711c53b8310abb677e3"
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
    "url": "assets/js/app.f2e8d408.js",
    "revision": "ae3d62222f7e5cb1c75959cd9b853f20"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "f3e7f2ebbf19eba2d9cae8681eb4ba48"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "c9eb6c38f9a730df26887c9740f7bcdb"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "5a198ec3317ece0fac720f20247fa9f9"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "ed4392fbce78f92bb09576d38983f410"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "a2d4bdee6f7c03ad90c2c4dd6ef4ddc0"
  },
  {
    "url": "computer/AI/人工智能概论.html",
    "revision": "83d02c8d6c7ed83238b18215f7a5ab1f"
  },
  {
    "url": "computer/c/c.html",
    "revision": "611346865e35d43181eee787a70debd4"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "4ed403c83c132505e0e6081bb9b42fc7"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "94a8478f8dcb3ac6e3789c2fdb712743"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "6c706883235340551339860aaf30e5b4"
  },
  {
    "url": "computer/python/python.html",
    "revision": "2123b7e2d06089fa5317b8a5abaad489"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "e8c1f74e74bd1ad470d2439a2b2b1065"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "71ba01fa6aa97fd7042679b4f77fce27"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "3d8069e537d29f6b6962f98c01c34e37"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "4dbc0f5c558924bc5fbdba4234a93b3d"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "788f061487a463d9eefa372b73e1e626"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "ca81143989024641b6c6eee9eafd1885"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "fe5686e2ef1139f952261ed7e2fc7f12"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "7f8271653c962207db7131ca789b949d"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "faf5388acb6ffae4d2cb48e6d10fd65d"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "a6be071bedc86f22fcc9856ec15309c9"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "1662110db87883df7866601c1eb23749"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "89e3fb4799c346b8f62c839f5c0d1498"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "f500140e945417181a69d36c682904e4"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "fac3540dd4936481e6637c2068ee29ea"
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
    "revision": "1edc6c8a4cca1639c1721c44827de0f0"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/微积分.html",
    "revision": "d14ef36e94927fac521a6bfe94f5f18f"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "61f6ea7593cfff11a5b3868ae76089fd"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "0befa648997635610df88a1b7330c4ef"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "8289fc9f4d2fb49f3fe2cb7dd58cc6ca"
  },
  {
    "url": "physics/光学.html",
    "revision": "4f1187bdb1199f0ba33a9beb48d8f769"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "c5c37cf1c620923ecfdb101b7a6ceffe"
  },
  {
    "url": "physics/力学.html",
    "revision": "56b698e5ea50e6867ab5fd2512c142d7"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "3babaac6ece9388bbf76dc41f86490e8"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "2472af06ed288e31449e40a972dde653"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "04f1d3155c9b8df31ac55229238cc17a"
  },
  {
    "url": "physics/热学.html",
    "revision": "31e9977eae69a5551d36fd03557d6526"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "c5a1257b4a1ff72810d7ca53cc7418fa"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "5f12e7a9d639264713a8393d259f2246"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "ff022d530c88e5fd875787d1b17c6bac"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "540623653338ed09f5adce16bfc76b83"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "acaddc94b002461293331285ededac2e"
  },
  {
    "url": "web/html/css.html",
    "revision": "a72f2ff5f1434535602aa2bac2d0a508"
  },
  {
    "url": "web/html/html.html",
    "revision": "07aa0a620c85496b9b8177c9afdcbbb7"
  },
  {
    "url": "web/html/实例.html",
    "revision": "9018737182524cc50e01c25243fd9155"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "32ae6848417a8193e98e4b986e46286e"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "c1e1b09b98b27037af84203648e8cd43"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "3bc00f5f81644670214b6e5c8c902cff"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "cf40d19ccce9bb7900ce19b2ff63e62c"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "1ec044b4ba2be2d1a5cfe55ea126e746"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "08c914242688ad14176f3d49cc3c77bd"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "afd7150a7089f8d5969ed1d3411daecc"
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

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
    "revision": "201e44332283dcd6579f1e78400c713a"
  },
  {
    "url": "addition/json.html",
    "revision": "850d87b66acbcb2340cb3de86523dfb8"
  },
  {
    "url": "addition/latex.html",
    "revision": "0c20fe376a7dc4847c86e44aea4b5812"
  },
  {
    "url": "addition/markdown.html",
    "revision": "1e69afddb17a49a7192e08021394ad12"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "86e7136bc342c62f8c218fd299b99811"
  },
  {
    "url": "addition/xml.html",
    "revision": "9923aedcf0d3d43c9a09ee61710b587d"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "78da75fb812244fa3b701bf805a71a65"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "cde9d25eab74058e06751ee2041e284d"
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
    "url": "assets/js/12.a356cb74.js",
    "revision": "0c64d59381fce70ccd9a147ef2b8bcd0"
  },
  {
    "url": "assets/js/13.42187ce4.js",
    "revision": "be6810c5b76f2e99f306c404f4f06e62"
  },
  {
    "url": "assets/js/14.3c463ef7.js",
    "revision": "a2f15608eb082d122a810bc7c34ff9a0"
  },
  {
    "url": "assets/js/15.c4655e47.js",
    "revision": "28e7aeba6c96268b3ff90ee00cc542b1"
  },
  {
    "url": "assets/js/16.21c15eaf.js",
    "revision": "e7c467811908a1334f2bd187664e9701"
  },
  {
    "url": "assets/js/17.8340cd99.js",
    "revision": "3b5d8bb4bf21fc7de8c77b2b1f3e7ead"
  },
  {
    "url": "assets/js/18.15eb91b9.js",
    "revision": "1060ecc6c564271ade0a2e86cebc2a56"
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
    "url": "assets/js/23.62aadd88.js",
    "revision": "dcf100973faa222e96e972d68e63befb"
  },
  {
    "url": "assets/js/24.16b369b6.js",
    "revision": "656028713700767a6b2536397369a2bf"
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
    "url": "assets/js/28.d6c29117.js",
    "revision": "426bb657659d5f4457979291b1c0f801"
  },
  {
    "url": "assets/js/29.f977876b.js",
    "revision": "2c6c50b6f30cf67182743b9f3fdf610f"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.486d2b81.js",
    "revision": "dbcc049d6520689b9ce62493492d3537"
  },
  {
    "url": "assets/js/31.3c7cee16.js",
    "revision": "cc355f55ac355777c5dcd07dfe70d1df"
  },
  {
    "url": "assets/js/32.0a71e674.js",
    "revision": "6aa6f367dccd32e2f80499a0e16b2aa9"
  },
  {
    "url": "assets/js/33.5304de19.js",
    "revision": "fdd4491bd7608794ebb2a97bc5372c20"
  },
  {
    "url": "assets/js/34.7e27c091.js",
    "revision": "8a6b90eb1c4d32fda4a8aa208fa78060"
  },
  {
    "url": "assets/js/35.98425e58.js",
    "revision": "de7e72fcc8c32356005a56df862a568b"
  },
  {
    "url": "assets/js/36.11ae519a.js",
    "revision": "e25345baaa6deffe6d0fa75731c0c195"
  },
  {
    "url": "assets/js/37.ebc30ab9.js",
    "revision": "5b259329fe2e985412134495aa62b930"
  },
  {
    "url": "assets/js/38.6b179f47.js",
    "revision": "f01b170c2e46d5d4c2bcda33abc4e8c6"
  },
  {
    "url": "assets/js/39.82c97f00.js",
    "revision": "ecc397e4791789c8bf3069c2c41e95e5"
  },
  {
    "url": "assets/js/4.7cad207b.js",
    "revision": "a510b1d49495ab9ac364527a8660a4ea"
  },
  {
    "url": "assets/js/40.0377bed5.js",
    "revision": "0a12762a6cfdf703db632ffbf775fba3"
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
    "url": "assets/js/45.132a30f6.js",
    "revision": "0bcc9b8c2263d579d728978918d6695f"
  },
  {
    "url": "assets/js/46.9c948885.js",
    "revision": "d0899ddea70ffb3c0d26b7275f4aefbe"
  },
  {
    "url": "assets/js/47.c11a0972.js",
    "revision": "3d88bd458495d1fa5fd9051aa3f70861"
  },
  {
    "url": "assets/js/48.4b32c96c.js",
    "revision": "58bbaa1ae3279e550bd2675266f7be2e"
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
    "url": "assets/js/51.a644ef37.js",
    "revision": "f00e5d729ef222977c7a65872f9281a3"
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
    "url": "assets/js/61.d271f8cf.js",
    "revision": "b7bcb77fd6226939fce52304e776255b"
  },
  {
    "url": "assets/js/62.4075d2ee.js",
    "revision": "8da59e1d5f75f94b5c59ef75d24f2794"
  },
  {
    "url": "assets/js/63.15fe30b2.js",
    "revision": "f0e42bb8be7e6e5e04ef72335e4d7d5b"
  },
  {
    "url": "assets/js/64.16171eee.js",
    "revision": "ca7729e08de97b5a225cd0133c4a03b8"
  },
  {
    "url": "assets/js/65.6bc9df4c.js",
    "revision": "9871b564f7d14003c81c6d509075430f"
  },
  {
    "url": "assets/js/66.a70da5cb.js",
    "revision": "6bc70dfe77af4758654a9222b6a813b7"
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
    "url": "assets/js/app.8fb6d5fa.js",
    "revision": "0391b2d0c78a84e286699a3a702e06de"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "6767d7f959238849f150af80454745c7"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "e4d1e5639aed03903ed74ebe970e4594"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "eb224805e210cfd565c4641f0bf8add4"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "dc7074657875cd2d5c5b93fd517c5edc"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "9d9758eb5c6b9b44874ea1703c45bdce"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "246134f6583d33d77736bbe457f41dac"
  },
  {
    "url": "computer/c/c.html",
    "revision": "44ca4cfae329539820c7ca0115c30f3a"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "0d5ab3d50c083fd2e26dcb4b3771c8bb"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "46eb347d14fa41af54fa6db092e1f7fc"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "64b33c1edd5c1fd1d53a466724688fb0"
  },
  {
    "url": "computer/python/python.html",
    "revision": "cc5a6beb23d51f99d018cd29938faf39"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "9e7b901c10ba7478c7ea8b24bc8aeabb"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "d188c9bebc151e5974dfa057e45fa987"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "6400cd8d1c62024e21b9625b0193744e"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "fb2afd554509803e13aaaa8305bd7501"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "75211de92378683cf06809ff23896a3d"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "b48bbec2a09e8c85a9fbbe87880b0f0c"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "00ad41605ea8b96c42e9ad3f677dfab1"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "e96c674b4c11db391135caa473fad31b"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "8dbdb3325ba59ea9516aab5d33c1d373"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "c900dab011e69c1a9be470d6544046eb"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "052890629159444deb81572869c6f0d2"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "68eb815118b3aef1d846a5b7b28cd37d"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "9aa40bf4ce39bebc690497c99beea9b6"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "08249b8674bdf24400f6bd5df71fbd88"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "8672371342392978736ae62e6a86f309"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "09eb4373245dbeea42e456e2c42c4f4c"
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
    "revision": "2802021dcc4abee2800dfadea1772d18"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "b4a3b6b8335c68a666558c5ddd295d02"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "175356270a62937967f592e3acea843d"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "38980a0aef3b49b6bc9663307f5cc101"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "5d6ec2dfc6fe2744865b76e5bdd9578d"
  },
  {
    "url": "physics/光学.html",
    "revision": "e7057ccb745d2720084619ded2e41b93"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "77053d5345a9fe5ace5474d7ac533ff8"
  },
  {
    "url": "physics/力学.html",
    "revision": "b9207777b98d77967f93e2ea432c11c2"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "c69d3b9520fe0aa7fee976f01b53cca1"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "24b2e63feeb19640b1de19e23ca8cbd7"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "c99ace9aa084074117c7e66b8f218e20"
  },
  {
    "url": "physics/热学.html",
    "revision": "f7d0e4af36c30ff4a24b2668a7dd6437"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "19ff6d8927aa65f31296867b290bdb27"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "d0befd382ae7c85cc0dbe2ffe1954c74"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "4cf64014bb41dd30eb7e7b3b006dce58"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "2fc9baaceac3a24e002ffc8d66f2a8b1"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "8984c104ff9cb1a64f2dae724d4a17c0"
  },
  {
    "url": "web/html/css.html",
    "revision": "e68fc6c3883b3489d2a37e54709ca2cf"
  },
  {
    "url": "web/html/html.html",
    "revision": "8378d55e3db37a0f752cddc7f1856148"
  },
  {
    "url": "web/html/实例.html",
    "revision": "493de828721d2eb698ea9036d96d6c5d"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "8f7deab99537bcceaca51cbef0921832"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "e7a100e3a986292960017fbe18807da8"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "cb310a8b69c307c839db48e9ee1cb2f8"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "e36ca9930f87fb78bd4be0e7de34e23e"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "e8855a0df52b318f4e4e4fe8fccce5bf"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "644d8b9644e4f656b59b85d64ddb182a"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "70bbff1ed1b204732391a70cdc4ee40b"
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

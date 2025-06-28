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
    "revision": "21d9b7c36300df4be8b6cb93ece31167"
  },
  {
    "url": "addition/json.html",
    "revision": "4c0610e280c762b677941fce8f8db36a"
  },
  {
    "url": "addition/latex.html",
    "revision": "8a4e77c409fa5d4e08f6095162431e88"
  },
  {
    "url": "addition/markdown.html",
    "revision": "23a93f9f503cbad94d138a947c60f2cf"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "8ad5313db3094532eca934977c6a5a84"
  },
  {
    "url": "addition/xml.html",
    "revision": "9fb2ba8945e9d21e9abad1ba767b51e0"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "ab0d4796de2b3be6c76a9218245c8929"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "7089f6df0e6b73106177f3df0565c30b"
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
    "url": "assets/js/11.a2f8f3a8.js",
    "revision": "1ed382b2736cf70821de44797b571e25"
  },
  {
    "url": "assets/js/12.4c0b67c5.js",
    "revision": "5a62303d73cab322b8717eb2adf61fb9"
  },
  {
    "url": "assets/js/13.95767c99.js",
    "revision": "15039faf8fb6b520283833354a41a1bb"
  },
  {
    "url": "assets/js/14.df67a50c.js",
    "revision": "c3f9691aa5dc9bdfb5089bae1ee16c23"
  },
  {
    "url": "assets/js/15.9897ce25.js",
    "revision": "e7996faf81d9905ae9b55655eca46929"
  },
  {
    "url": "assets/js/16.b3590fdc.js",
    "revision": "567b9089a295821f00bac201bddaa4ca"
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
    "url": "assets/js/24.f7d8c4c0.js",
    "revision": "847d2f798fac3a85bced1d0347a5e396"
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
    "url": "assets/js/28.0abf20f6.js",
    "revision": "419cdf5c5908cb70958fec0e0021fbf3"
  },
  {
    "url": "assets/js/29.696d573a.js",
    "revision": "b4f63c8c5e4dd941b73075b93c914d9f"
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
    "url": "assets/js/31.37780856.js",
    "revision": "afe483cb2070d032af82eeb757f53042"
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
    "url": "assets/js/34.7e27c091.js",
    "revision": "8a6b90eb1c4d32fda4a8aa208fa78060"
  },
  {
    "url": "assets/js/35.e0c6c7eb.js",
    "revision": "1b7d08c021786d4c9d85efec8de293a5"
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
    "url": "assets/js/4.1a23b33c.js",
    "revision": "e4435ffd98788df3245c3a225e9d5337"
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
    "url": "assets/js/43.6a381600.js",
    "revision": "60ac8c54c92a320d7a7d153832dcacbe"
  },
  {
    "url": "assets/js/44.69bb9e74.js",
    "revision": "6af4c45cc5ca33accc0a0ea00ed8aefe"
  },
  {
    "url": "assets/js/45.2d817b5a.js",
    "revision": "d67f88d3ba24b767793bfc029655f1d6"
  },
  {
    "url": "assets/js/46.47b54a20.js",
    "revision": "7ed3595a20a095f24cad39c8564b3823"
  },
  {
    "url": "assets/js/47.2025b6f6.js",
    "revision": "578f5ae39f1e88da8214c12fea2f4b6e"
  },
  {
    "url": "assets/js/48.341ea279.js",
    "revision": "8a1d42cab693bac077edc5a68897afaa"
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
    "url": "assets/js/61.4d355bec.js",
    "revision": "7989076b984618de6285f508731cc41b"
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
    "url": "assets/js/65.288247c8.js",
    "revision": "97ad86e24dc90eae0fce1b0615332c91"
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
    "url": "assets/js/app.eb78d5c0.js",
    "revision": "24fecd0161592b36f735de585db768db"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "080e26474cd751ff66579d61dd271fd1"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "d4618d057f505881294ce54cde99ed54"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "683b2c901f30569345c7ce94adbcf378"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "3518b64a6c1683ee82f2045a405d62df"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "99d11e716607a6bddec3cb2c4371c415"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "9dddb14e6b8147073db828cfa9558258"
  },
  {
    "url": "computer/c/c.html",
    "revision": "7384c91477de60a64d11d9210022720a"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "b971432149315b1b1565fc2cdec60351"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "61c907e6bf94805e8c58cfb427bb091a"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "5c02cd0217542d35b344ff30a5a9bc4a"
  },
  {
    "url": "computer/python/python.html",
    "revision": "44e34fc136ece9abba1333e6678eaaab"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "d901fc98c684632cebc56c95c26180fb"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "513aaebcbd4102aceb397b5841d29517"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "b353fda4996b2790b17dfd8dd035608a"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "47a3b92d24a29bf9f75af7af197b664b"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "d75ee835e38807f5505d2ffc4d5c9473"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "91e47b2a36d757263e97932462f38432"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "93b88e697ef56a225977ad209175c13d"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "5fed84793bafc5096f3d63fdee9023e0"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "4a029353a9f4e839bb0a477705219f64"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "e3bfaab85e59b68aa0c0dea929dae64d"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "b1739a525e1846f52cfef07d5cb7274f"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "27ae56c741e89e60e7ef96e1c21628e5"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "ccc9dca93a4e1d1921c6b22349345200"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "0387ad7e3fab8dc9d0a966c8b21856ca"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "5dc05ba9b2ae958cef5400ed5ab597f0"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "4485457f749a918fbc2d2a6199cc2405"
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
    "revision": "31b1e094c634a63f7ab32a605781e308"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "5733e731f720059c4246a3412b823746"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "8b2102acb0bc879dcad1ec8fedff4fdf"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "13cf2a38fd022191b81eee1f4f27e9b9"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "5eb03c21f87e005eea873f1891522f90"
  },
  {
    "url": "physics/光学.html",
    "revision": "f461c34cd7849f35fe4b72c5d993af7a"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "91891131401a84b40e7ee2cc4fb83cbf"
  },
  {
    "url": "physics/力学.html",
    "revision": "a93bedd2451422a329590541b8b1f537"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "0340a93d456479319a9b3f848aa7b514"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "d3260f0839a888ff5f88d855f0158dac"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "f0575e2fd636e4a9d7ab6854c45601b0"
  },
  {
    "url": "physics/热学.html",
    "revision": "89f2a9c25af0bc272649088098d03a7a"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "6f04068caa569b4ec0cc2be747599c00"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "a489a9bfc0915e528f0f756eb99e07eb"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "227ef60b2885bae098561eea3b6f8aea"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "42401f0bf8610e3d6f99600b5d439d17"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "4a54795b69aefdd8d03979f0919d8690"
  },
  {
    "url": "web/html/css.html",
    "revision": "0cb7ed10b6c619a07c54000d8c1f7907"
  },
  {
    "url": "web/html/html.html",
    "revision": "d0833463528ac589c40927cae05f7306"
  },
  {
    "url": "web/html/实例.html",
    "revision": "6d7b5ba00005e412a04e190f6c31679b"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "a3aae97aed2cfede0a359f9b70aa3c5b"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "c0428c451bc30991632db7791b9dc5df"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "887b9549b9f5c11a3b3a43f5a96c0c36"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "ceb0e17f080c1dfb36b580215521deb8"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "fca59b3481a3ffa05c10a24d8b82ec9c"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "bd1372ac93060397d997078215a93f7d"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "889bf38d1543575915892d7c2a60e6eb"
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

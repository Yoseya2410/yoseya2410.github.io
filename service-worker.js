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
    "revision": "92e5d5b153f1ef028cd2be05eb85c568"
  },
  {
    "url": "addition/json.html",
    "revision": "b15c7688206fd3dc89dc4de59118f351"
  },
  {
    "url": "addition/latex.html",
    "revision": "1b92d288ec6131b561385747e0eb572b"
  },
  {
    "url": "addition/markdown.html",
    "revision": "a1a4821a2d72dfc494c96420c84e01e6"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "2af4c24b0c803ffe54c44e66f9c73f2e"
  },
  {
    "url": "addition/xml.html",
    "revision": "0303b47f08aa1de2b73a2d6027e79e8c"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "63a91be4c0e0858885319f9c3b3f109d"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "9611f23c241c96b7ffd512096c121c7c"
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
    "url": "assets/js/15.b2c643df.js",
    "revision": "5d5068e6dde838ecf8c64a5e3d2897d1"
  },
  {
    "url": "assets/js/16.09adf9d1.js",
    "revision": "07a6d8cc9908e8444d62664b15a7c2d9"
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
    "url": "assets/js/28.d560977d.js",
    "revision": "624122d58ce36fcd503927d3f26ebf1f"
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
    "url": "assets/js/30.6a6db8d4.js",
    "revision": "aec661a75d604f04d5bbf6b460379e76"
  },
  {
    "url": "assets/js/31.d8f734a4.js",
    "revision": "5eacfba6c2f8f946670d909c71b0cce0"
  },
  {
    "url": "assets/js/32.4fedadf1.js",
    "revision": "fde6a32381a6101448165c863e1309d1"
  },
  {
    "url": "assets/js/33.f7183249.js",
    "revision": "53888842ca7ea2325bdc78e4ae1e65a3"
  },
  {
    "url": "assets/js/34.f7f4d84d.js",
    "revision": "1a4381b64c2d221cae8307f4c8d1de6b"
  },
  {
    "url": "assets/js/35.98425e58.js",
    "revision": "de7e72fcc8c32356005a56df862a568b"
  },
  {
    "url": "assets/js/36.98b5b48a.js",
    "revision": "2054c0a310050da4422b9ab8ca6f8724"
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
    "url": "assets/js/39.70a7dbc0.js",
    "revision": "6f918b68677de36a44e8a6bd30019825"
  },
  {
    "url": "assets/js/4.1a23b33c.js",
    "revision": "e4435ffd98788df3245c3a225e9d5337"
  },
  {
    "url": "assets/js/40.b202afe0.js",
    "revision": "db2807536230a7d9940e98f33dc042e7"
  },
  {
    "url": "assets/js/41.a5ed2201.js",
    "revision": "7d6018286d08c628afd9ead559b71489"
  },
  {
    "url": "assets/js/42.71e75842.js",
    "revision": "5f3929d6b7869e1ca0b0dd6cd152d9b9"
  },
  {
    "url": "assets/js/43.a0b1f258.js",
    "revision": "e7ea5388c5c7c8e0652b5883dc6e3edc"
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
    "url": "assets/js/48.ba9d1287.js",
    "revision": "c9bdd6e8babc46eb140219102b7be4da"
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
    "url": "assets/js/61.d271f8cf.js",
    "revision": "b7bcb77fd6226939fce52304e776255b"
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
    "url": "assets/js/app.9324617e.js",
    "revision": "b4c19e39383196be01d7ce7492ff70a9"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "dc421f2348c87dbdf7e2d29378dbfec8"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "9f13de3a04cb37f2d9bbd68fd72e9df3"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "0632504ada660225701c98cd6ab50896"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "2113f6cb04949d5edcd4509c71f9ca43"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "5efae7aef81a587e80e22581a71b18c7"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "da41bea54d90fa240c0791e3519ee5fe"
  },
  {
    "url": "computer/c/c.html",
    "revision": "9bf2d5f8865eeec15a018f0e74eedb8d"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "42eb1b08f62cc7ccc8bc6701b5d79266"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "0f7eb003f25885fbc0643358a81d70d9"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "33f21bdf032a6b848ef7a895405446e2"
  },
  {
    "url": "computer/python/python.html",
    "revision": "290cd944eef954f8d637bd13270e1643"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "a6aac39a3ab15d0505c3fa7f3bf4ead9"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "ac94b27d9e04697e62ee7add78e830e9"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "1526fe2444fb4bfbe7d7a291385d74b8"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "af3b132d89d556821a8b31552fc05342"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "ea1e6a25e51f7e753948f0fcb1b2931b"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "efbf6475476d933e77d14d6b1bb0533b"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "ec4388a8e635b688d2bec23320a15c79"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "92888e7d360568db232960fdd3def179"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "247426a7c2f670dbefc3631a892068a6"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "88e011692625f5d37a75b64e6700f69f"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "12faa830bfcef9446b6fe3960cf7dd25"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "77fa1360f92d3b6fa24ee0f09cfadf6f"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "d485879211e492a7e238bd85b81b1431"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "1e8c0e3ceb6cd07755927f35bfd5a9aa"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "06b2b7808276f5cace1ca9a458621a6b"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "f58f59916182f456eb5fd717578171a4"
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
    "revision": "430efc98eee96f6342c7ee01d236d3da"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "45956a57d91f6421400c660a61719a8d"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "dfbd74e09366f88289e3792503fb33b4"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "df317b0411787311bd7e87259a70af7b"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "e3c5106ff1bc46ac57d32b1f3b2ea1de"
  },
  {
    "url": "physics/光学.html",
    "revision": "cb4082e0347baa6e53f18124acea421e"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "a9bd49cc77105d6c318198dffdba6ce9"
  },
  {
    "url": "physics/力学.html",
    "revision": "7283525001e390f95975e5ea3cd24f0c"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "07950c7710f8a4624034c495e1726e71"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "9acc17c03c7a747b85a8adc39ea54046"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "3d84fdc4d93749247dc15c47d8356d2b"
  },
  {
    "url": "physics/热学.html",
    "revision": "58019e1f89f0aa6dfd4ebc153b57fead"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "5bf3d2f8bff2ac311124727b63a32914"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "4ad795c998758c7a8fed51f399f975cd"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "56be5d578cb74c5b9b8868a99988dbfa"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "542c1520f6a0b9e715bec7db1a5e44c9"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "efda76062e4bba5cc7099c27cda10893"
  },
  {
    "url": "web/html/css.html",
    "revision": "d1cd2a832e7603ac400fce57e5a0ca41"
  },
  {
    "url": "web/html/html.html",
    "revision": "6addd0c6a17cc3e2679e11c3a742f913"
  },
  {
    "url": "web/html/实例.html",
    "revision": "1b38b61de55a3f17a0ffabaaca80908c"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "35bade2db34a93250af89b2db464dbe6"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "0d5b5b384d90444a6f8041e0977089ac"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "1e7037e1bf6f159d4e81ab1707bbca9d"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "6ba3126c58fdc071f4ffa9d715fbebe7"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "02c380a52f51d092fdc51f208b3c7825"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "c7409e2fdcd385a3011d8bb9fa531ef0"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "89c42000c6ade02059b4c69f347074cc"
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

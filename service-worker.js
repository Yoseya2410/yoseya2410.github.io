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
    "revision": "5b1d11016c0074bfe809f3822a990efc"
  },
  {
    "url": "addition/json.html",
    "revision": "eec70713dd7efc3412005683e96fa591"
  },
  {
    "url": "addition/latex.html",
    "revision": "970b85275959fdd131a589d43e4941e3"
  },
  {
    "url": "addition/markdown.html",
    "revision": "9f888e84e34fcf9e2fb3a1a3acf922e9"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "c2013c0b125efc15505b9c047d9ad046"
  },
  {
    "url": "addition/xml.html",
    "revision": "194e5b26bc72d79bd24a0a2cd1262512"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "dd14d09babfdc200f61ea6747049be06"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "a57b23990ff6e6a97dc5b6ae74f6ccb4"
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
    "url": "assets/js/15.aec8d557.js",
    "revision": "7f0c9104715781d4c3167928dae554bc"
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
    "url": "assets/js/18.c0a03d5b.js",
    "revision": "78356a2493672eda3ae8c1bc987679ef"
  },
  {
    "url": "assets/js/19.7eb850a3.js",
    "revision": "ebac510755a5187e24aba21673bb538e"
  },
  {
    "url": "assets/js/20.432e1a9d.js",
    "revision": "1c7a1c8ad8d3928b64d9144a8393f9a7"
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
    "url": "assets/js/23.0b5009cb.js",
    "revision": "efd431ae92a730fabb38ebd6ca8bb1cd"
  },
  {
    "url": "assets/js/24.b9523a57.js",
    "revision": "33fb271bfc07296b7208a53079c24990"
  },
  {
    "url": "assets/js/25.eb26471e.js",
    "revision": "466b24f128afac609043fbc868add354"
  },
  {
    "url": "assets/js/26.93c2a003.js",
    "revision": "f8d14ad00a5cf84df9d0bd74a6a1d07a"
  },
  {
    "url": "assets/js/27.96f041e1.js",
    "revision": "e3638544acc45a8bcb002557e2bc24ec"
  },
  {
    "url": "assets/js/28.61be0aae.js",
    "revision": "a12eea2111a0f8c5d9e4f9c63adf3a7a"
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
    "url": "assets/js/31.2acbd7ea.js",
    "revision": "7445bb099fc835c0955f7cd7c7fd0e2a"
  },
  {
    "url": "assets/js/32.951a4ea2.js",
    "revision": "bb63903d23ec3ef0c66e0c09ed33b111"
  },
  {
    "url": "assets/js/33.c3f01a21.js",
    "revision": "9d60f483ca210940c0b0f3bb13067f09"
  },
  {
    "url": "assets/js/34.7e27c091.js",
    "revision": "8a6b90eb1c4d32fda4a8aa208fa78060"
  },
  {
    "url": "assets/js/35.424651b3.js",
    "revision": "b1e836e28e86e31b7db64c9043b7efa7"
  },
  {
    "url": "assets/js/36.1f536243.js",
    "revision": "105de361aceea1c60ec06e45f9b1612f"
  },
  {
    "url": "assets/js/37.dc5a2928.js",
    "revision": "f6fda133197ccf61c7e7d2c6ccd91d7f"
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
    "url": "assets/js/4.16334225.js",
    "revision": "b3aaae08dfe01defdeb3c30bf0075add"
  },
  {
    "url": "assets/js/40.b202afe0.js",
    "revision": "db2807536230a7d9940e98f33dc042e7"
  },
  {
    "url": "assets/js/41.2147059c.js",
    "revision": "79f6db10c57f0d5d8c963a8a6d034c8f"
  },
  {
    "url": "assets/js/42.d38384f8.js",
    "revision": "aa6262d4ae7bbe2eaa6cd17e7688c303"
  },
  {
    "url": "assets/js/43.62391ff9.js",
    "revision": "a07c28c7ecffd91db6994c33b48023a8"
  },
  {
    "url": "assets/js/44.da54080d.js",
    "revision": "8700c49d65a567d5d8e7d5ff3afc80ca"
  },
  {
    "url": "assets/js/45.10d5b2bf.js",
    "revision": "94bd14dbf4b1f6fc9e522c94e777fb1e"
  },
  {
    "url": "assets/js/46.9c948885.js",
    "revision": "d0899ddea70ffb3c0d26b7275f4aefbe"
  },
  {
    "url": "assets/js/47.f3f0d853.js",
    "revision": "16c4a2ab99381243550feb542abbb0e7"
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
    "url": "assets/js/61.7534616f.js",
    "revision": "064265057be53f24211e9e46c0904e81"
  },
  {
    "url": "assets/js/62.488b9088.js",
    "revision": "6c63e0863c4eb0a89704ea531d7a5695"
  },
  {
    "url": "assets/js/63.265355c5.js",
    "revision": "6dcd9da52e8c4e5af59d587d633803ea"
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
    "url": "assets/js/68.248c0929.js",
    "revision": "d836e19bbb8761344cc418060042438f"
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
    "url": "assets/js/app.2ee2b6da.js",
    "revision": "c15bbc7763e0b070ecd3eabf7fbdf100"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "dc0bda639bf46851fddcc326460f3c86"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "ed15173b306e90174120319e9efe3daa"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "dac0438c7bb1a8df0d87b8a656e0fef4"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "b800307523d1b759d373a32b93b890c0"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "21b69f909d99308c9e34ae2dd9dbd842"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "72f590a7084ee65a1af8f09b6d4d9285"
  },
  {
    "url": "computer/c/c.html",
    "revision": "39cdfcaeaf6ead1e492af93fcd0bcddc"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "03c374218b0216fc2f9ef2d238be8947"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "19ddfb5852dcee01d1ec25fa3706ef36"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "cd3bcb197bafffca89be6b35ccb1c72b"
  },
  {
    "url": "computer/python/python.html",
    "revision": "8aca92b967e669d446f60e2fea9ad684"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "c648a350995434ffdc3e07e3e2f93e50"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "1e8bef26f9b71665ea8cf28907882395"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "0c58e81696649d22b0158d845ab6c686"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "c2da2ed08d5e28992365755d4ffd48f1"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "eeb28bfe90631396a0b5ca315ad0bb36"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "7145d2c6c5fb95b99f2d3a81a97327d9"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "ed2b7816e14dcc6378929933177193fb"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "43ee5479421654739229869c02d033fa"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "f95474d404592a1462d8cf0fd8750fd0"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "a36fd935606ca121d719b441acc7b894"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "487d3821a8e87470b6e50e1397f6610a"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "16d437e37933d3dc4e0578d645eee20d"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "cb05982ca72fa2efcf2bd21d6a2d8c3b"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "be3711685bcaa7a66872abf3409c0154"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "7e1e97e9a34d95d69bc6313d436cfa83"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "b284ae5df1e06e2b491b5dcf57a03399"
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
    "revision": "0847574335bef9774ed698f708266366"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "99610b34b5a1c886fc913c54b9c3447b"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "8ca1de544447e55ef194c7e92a29756d"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "4df74e27131042ec2d695511f94d2e45"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "3e3bc8f3416e986610d02d68c2676915"
  },
  {
    "url": "physics/光学.html",
    "revision": "eacbb606b75ca7647a4bb9fd2aa03234"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "c7e6f4176b5f18094be4ff8490a6e430"
  },
  {
    "url": "physics/力学.html",
    "revision": "7c1322cea580bc85f661ea30b810a719"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "dd6ee846289950f3780409799f90c827"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "2dc2ef5b8c8c5c64a4c86cf2c261f95a"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "deabfe4c171f31081787876f309e125a"
  },
  {
    "url": "physics/热学.html",
    "revision": "9ffde55c1a726a2ae5ee0b0b89fb79c8"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "8ade480ba0cd28680b0018039da60cdb"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "a489f5e4795b67b45560e78a31200289"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "5a7de5459d666f839550a1c4626ad6bd"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "7b8c80e1c9cf3b2a017a09ec19d1c9f7"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "90ac50f835786dde9d4e90b825b39477"
  },
  {
    "url": "web/html/css.html",
    "revision": "9757fef34cd3bc3c4d4c54bcae0ae167"
  },
  {
    "url": "web/html/html.html",
    "revision": "06609a8307014dd1a4c5965b88996d9f"
  },
  {
    "url": "web/html/实例.html",
    "revision": "c375eaf18bd6d676b5e432f1e2f990db"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "7ae7129a779635ad9fb912fae748b30c"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "b99fec1e39a52bd2dd92a4e89d0a764e"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "8ada1ff5aed7e9a9f96148b3782f0b3e"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "b6c36bfa72085c2e3ff82a2855522c5d"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "19e53033c322efafbb42525a2cd83ad7"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "174014a6b40d5fd32b4bc767cda63a8b"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "8754a0187791520940a7261932e8331e"
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

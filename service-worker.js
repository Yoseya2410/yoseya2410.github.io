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
    "revision": "08646a5af9474da5c8ef5b5e77708bc1"
  },
  {
    "url": "addition/json.html",
    "revision": "1af464f71f383b8c8c911202783f5b97"
  },
  {
    "url": "addition/latex.html",
    "revision": "c02b4a00e1538643f7736f49dfd322ad"
  },
  {
    "url": "addition/markdown.html",
    "revision": "537fb0b67e812b2a77952a5a6a629181"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "05d1c01273dc71294e8aa311eef7463d"
  },
  {
    "url": "addition/xml.html",
    "revision": "2e7d2cd5e5d35737b0aae041dd375d2a"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "9e578ac668cf4639e0ae48f88a61b8ea"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "2df16a5009e7c4e4697f015ffe109723"
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
    "url": "assets/js/12.a6cb48d5.js",
    "revision": "7aeadfa181d18b6bdd7deee6ab74218f"
  },
  {
    "url": "assets/js/13.42187ce4.js",
    "revision": "be6810c5b76f2e99f306c404f4f06e62"
  },
  {
    "url": "assets/js/14.49221a8b.js",
    "revision": "5db55ab5a39b89a717cc6c53bcdfc376"
  },
  {
    "url": "assets/js/15.909372c2.js",
    "revision": "4ad850fd37b14bae5e095d7d998199ee"
  },
  {
    "url": "assets/js/16.21c15eaf.js",
    "revision": "e7c467811908a1334f2bd187664e9701"
  },
  {
    "url": "assets/js/17.74eb9b7d.js",
    "revision": "7aa488608dab5a4408e061d3fabeb69d"
  },
  {
    "url": "assets/js/18.a7fceaec.js",
    "revision": "f5c21e514d5e700e9a028e2ef267576d"
  },
  {
    "url": "assets/js/19.e14016a1.js",
    "revision": "cb701b008e290395efd6bf33e25dd9f4"
  },
  {
    "url": "assets/js/20.432e1a9d.js",
    "revision": "1c7a1c8ad8d3928b64d9144a8393f9a7"
  },
  {
    "url": "assets/js/21.97889393.js",
    "revision": "7cebc63cde570242e8442a150cbc66c0"
  },
  {
    "url": "assets/js/22.a490e92a.js",
    "revision": "7558d4658374cfed179b649a036a6305"
  },
  {
    "url": "assets/js/23.1abec04b.js",
    "revision": "cd19dde259670b85bc47600eb707479f"
  },
  {
    "url": "assets/js/24.081cb9f5.js",
    "revision": "6fe5904e738a12da6a66f555b224744f"
  },
  {
    "url": "assets/js/25.dcadfa2e.js",
    "revision": "4ddcac48942af5c81ee2c8d02300dab0"
  },
  {
    "url": "assets/js/26.93c2a003.js",
    "revision": "f8d14ad00a5cf84df9d0bd74a6a1d07a"
  },
  {
    "url": "assets/js/27.a7025383.js",
    "revision": "2e32a7eb123172bdbd3fc1b9aa7a2025"
  },
  {
    "url": "assets/js/28.698cfb39.js",
    "revision": "79ae6d7f07fc865bacdb9cbbbcf89963"
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
    "url": "assets/js/30.0d34c15d.js",
    "revision": "b585740876ed7d0a57a300a271583e7d"
  },
  {
    "url": "assets/js/31.1f079bf8.js",
    "revision": "6107140995e1bbff21d6de012459ada5"
  },
  {
    "url": "assets/js/32.21f41e5c.js",
    "revision": "9ad4c2a30d0134fdaa6f41c5fae00ea1"
  },
  {
    "url": "assets/js/33.0f3b2806.js",
    "revision": "a52cea55b1854cc33b0e1d97dd1adebe"
  },
  {
    "url": "assets/js/34.668061e9.js",
    "revision": "530100ff10eb8bb70c3854d59b273be8"
  },
  {
    "url": "assets/js/35.9ad9f211.js",
    "revision": "c5516730f71296096c6bb57e8e1e6aa7"
  },
  {
    "url": "assets/js/36.d05f2fe9.js",
    "revision": "e1a06480485645e6728d41edb042deaa"
  },
  {
    "url": "assets/js/37.eb89627c.js",
    "revision": "0773c481ce78ec1c0104af9fc8e2bcd1"
  },
  {
    "url": "assets/js/38.90f257a3.js",
    "revision": "3a7fd4aa36a3211974e5ac0bc33e21fa"
  },
  {
    "url": "assets/js/39.559012b4.js",
    "revision": "21bb01f1b49bfadde073479056076eab"
  },
  {
    "url": "assets/js/4.7cad207b.js",
    "revision": "a510b1d49495ab9ac364527a8660a4ea"
  },
  {
    "url": "assets/js/40.3517f95c.js",
    "revision": "26924ef424541c209934df11900e2f65"
  },
  {
    "url": "assets/js/41.f8c35847.js",
    "revision": "b653ccab06b0a79fa9f19660a70049b3"
  },
  {
    "url": "assets/js/42.b119f568.js",
    "revision": "a1f3e527b058e80ee731620798c335b2"
  },
  {
    "url": "assets/js/43.5d504723.js",
    "revision": "f294b7b210682d6c552280f10ce92106"
  },
  {
    "url": "assets/js/44.25fe1a3a.js",
    "revision": "a60c154616648cef7b86eebb9e606641"
  },
  {
    "url": "assets/js/45.7e782341.js",
    "revision": "11040473e193093ec9f5dc51ee34b7d6"
  },
  {
    "url": "assets/js/46.3bb0bb2d.js",
    "revision": "b74435edbc53c801bd68fc0bfbd617d2"
  },
  {
    "url": "assets/js/47.4b6a15d4.js",
    "revision": "e2470113acc27568dd8b32a420bde5ac"
  },
  {
    "url": "assets/js/48.fa4b96f8.js",
    "revision": "9e0d23888ed6f3ded4d72d8e1290a869"
  },
  {
    "url": "assets/js/49.9bb3ed49.js",
    "revision": "6dbf421b40ccf43ac79a80eac12163ef"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.12e7a445.js",
    "revision": "08d3581dc7ef66afae36059e32a6c2e1"
  },
  {
    "url": "assets/js/51.cfd04b71.js",
    "revision": "71265bb4e3b5aaee969dcf49a69d26c6"
  },
  {
    "url": "assets/js/52.69cb80af.js",
    "revision": "c89fb5e1ca9c27eec3619c2b0cb2094f"
  },
  {
    "url": "assets/js/53.30a53fd1.js",
    "revision": "d4dcbe54d8b85ced5501bc1e5a6b33df"
  },
  {
    "url": "assets/js/54.2a223a9f.js",
    "revision": "a6b6b86a2e57fa9a74da974c5ae7397f"
  },
  {
    "url": "assets/js/55.e6d9d639.js",
    "revision": "6e8b0d7afd11da2bfa4efaea698491ec"
  },
  {
    "url": "assets/js/56.d94e4501.js",
    "revision": "6b4a455741d18333cbbdcabbb566e0f4"
  },
  {
    "url": "assets/js/57.ce0c5bed.js",
    "revision": "34105927d4a1e259d84013d07e735545"
  },
  {
    "url": "assets/js/58.9257df6a.js",
    "revision": "0f61397dd7a340eca50d1e251d7d1298"
  },
  {
    "url": "assets/js/59.c24929c2.js",
    "revision": "247ef65212f29674ce871571c463b365"
  },
  {
    "url": "assets/js/6.4a197821.js",
    "revision": "7c9be993a42eb3012fba86e730d00f6d"
  },
  {
    "url": "assets/js/60.b6694efe.js",
    "revision": "8f2137ae43e08b796876615bce459276"
  },
  {
    "url": "assets/js/61.8399cdaa.js",
    "revision": "518dd86a4d0b1f38abd425c37cecaab7"
  },
  {
    "url": "assets/js/62.98bfad91.js",
    "revision": "1310ae8e23d1db3f7177365c228801a9"
  },
  {
    "url": "assets/js/63.56b177ab.js",
    "revision": "d3cd9b0a7f24887b46dc4cb887de1ab8"
  },
  {
    "url": "assets/js/64.834d1892.js",
    "revision": "27e7b80f215ea08ae9a3a1b7e8fb5136"
  },
  {
    "url": "assets/js/65.c36104d5.js",
    "revision": "191c01aff60233d0c9b6c448674abfbd"
  },
  {
    "url": "assets/js/66.cd32a780.js",
    "revision": "56685aa03a2f6c857540c5e9f1a191e5"
  },
  {
    "url": "assets/js/67.65865d03.js",
    "revision": "bab45d591a65fe9523a588f443ef5c4d"
  },
  {
    "url": "assets/js/68.6a900745.js",
    "revision": "f0466a038b2030acac1ce96f428b8cd1"
  },
  {
    "url": "assets/js/69.817b7108.js",
    "revision": "51d9ec4ed2f113db6abad2e9986c9af2"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/70.8505d7e7.js",
    "revision": "d4b577d86f449549d2586dffae6b2f5d"
  },
  {
    "url": "assets/js/71.b0feea05.js",
    "revision": "4032176d39cf5274f03adf2a23cbddf5"
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
    "url": "assets/js/app.4e21eea8.js",
    "revision": "8345b19cf80fcbe5e7165c7f071704d9"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "222dd340f0131738deb9f99569fdd136"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "70e097a0c672cba40e1fe5c955a63d61"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "fa47a9410652733af3555f2ab573be1b"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "0e7026ac90e50bd5abd210beeb054d5f"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "3284ea900bb6a3be8b8956663c46b136"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "7686386a56ac68079cec0af68f214314"
  },
  {
    "url": "computer/c/c.html",
    "revision": "594de38730e7dc166485302c186bed8a"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "f66a163ef6f23ea52355c640a2823ac1"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "515f02ce606017014f118903eba62713"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "3533840bba401a7585c9532ec5f9fece"
  },
  {
    "url": "computer/python/python.html",
    "revision": "39997e785c8b50b92efb47d881971e17"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "154f0d3840b96d9bd9ae515e7e087eac"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "7debc43454f8d7c3f9c1df1ac6988ec9"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "9c2a4d00baf2da5916207dcd2132ec96"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "9994756d24c5cfe81574d328611b6f38"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "ac819e7c52bfda814f0b3c2ca84bf0a1"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "70e9418505ff585ca2e94ddae5499ca7"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "64bbb3dbd34dc1a445b34459f5fea440"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "467eb2fa03c0f136d8e8c901d371ac20"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "1d9ca739f76c5162ad1798bc5956ed9c"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "287f67359f46d948e27da1b22cdd25da"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "838236acbdffaef55eaf496b3b6295a9"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "827879a3fce550e7924268b206c80176"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "3439a041e172363accdd3567406d1b4e"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "3ee5298f7a9f1cc60d37a92a7eef182b"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "2abe7359f6cbd53146f8ce175a6b0394"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "ecdee2ede9b846f7581ba77f1738b30c"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "2adfcb0cc3adab6d79a8eb02a523b739"
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
    "revision": "2ce6fdff96f5f545a7553c75cf0d0a9f"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "2075d832652279c729d9b6f7a09a499e"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "610ad96b783d3dd8ad176f3f579afe77"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "38fe4b46228db5ff5845fd565f7817f4"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "3318a2bb9ed4f522babca404b6cf0d97"
  },
  {
    "url": "physics/光学.html",
    "revision": "ae65f2975f4a8d5367b9b01d7e31552d"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "b271fff5f155ab63baa22277e3b036d5"
  },
  {
    "url": "physics/力学.html",
    "revision": "56dcea123fb3f1a343c395e411080198"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "1c3c341ceae63f96e9a69f121320c513"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "d9cb7e2e90a6cafa8501f4a39ff52429"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "f9a661518104cfc57fc5c950adca892b"
  },
  {
    "url": "physics/热学.html",
    "revision": "1d18dfa0d6ee3e180ce43e9d87f1b57e"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "6461ca197b2991e27a77641d67bac23c"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "d6a17e167b1046e921d768f171c4e5e1"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "65bc24848a4ada352631fb5d9a30ec31"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "b0ee90ee64164f33fd6d030d51332ad9"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "96f819bba38a753cce91fc6cab1ff6c7"
  },
  {
    "url": "web/html/css.html",
    "revision": "bf6d474c1b3489a5898c3bad6eac2a30"
  },
  {
    "url": "web/html/html.html",
    "revision": "ea686272d6d97264b80a536a97816e3b"
  },
  {
    "url": "web/html/实例.html",
    "revision": "87d46b94422ec78072593d33a384c5b6"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "31b7ce30abe041156ac7486ee31db60d"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "bc2099471d3bf4d67233dac550168547"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "50f082c917ddede31a683e1be0474497"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "fecd77e8efeadbc39e189b492bd5dc99"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "ae285764924221ec5612771361a49cdd"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "e29d0deda76206cd7bd1b0e674732e9e"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "6f0307fae633dffdc45e8995b46dab2a"
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

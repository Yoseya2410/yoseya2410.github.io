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
    "revision": "968ab1e533b700510ec7939122064017"
  },
  {
    "url": "addition/json.html",
    "revision": "524b18369c9e258a537f92388ec5704d"
  },
  {
    "url": "addition/latex.html",
    "revision": "9c66149c7faf361967a488ce31ac77af"
  },
  {
    "url": "addition/markdown.html",
    "revision": "8261e6ced8362e63b3a43f0aa99c9038"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "b78b58418997f83e9a83e8872b2d8dad"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "eb418f539009858c352a729fb4f3b93f"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "0ecce70d7da444b58267498896a14f40"
  },
  {
    "url": "assets/css/0.styles.6d29af08.css",
    "revision": "ce87f460c56c4af4a65e502a9cd36551"
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
    "url": "assets/js/15.e3ae5000.js",
    "revision": "c26d97e6e68a1753e4fd3a8ddc9f5505"
  },
  {
    "url": "assets/js/16.346d42ff.js",
    "revision": "4898a4d131603c1de97d90753bb51bbc"
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
    "url": "assets/js/21.9fbe8c53.js",
    "revision": "1f47c7c7b2a98e8b8397011302f073bf"
  },
  {
    "url": "assets/js/22.2c511bdf.js",
    "revision": "d917dc70dd2c1d31891f26fe39ccd338"
  },
  {
    "url": "assets/js/23.88f5e383.js",
    "revision": "f983d62a1838195b84363bebdd800fa9"
  },
  {
    "url": "assets/js/24.b06ad3b7.js",
    "revision": "514fee52154a128f38b7268a020b11c0"
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
    "url": "assets/js/27.0c7fefe5.js",
    "revision": "7eec3ee11655a9b09bfe20d90c8a7ea2"
  },
  {
    "url": "assets/js/28.963b797c.js",
    "revision": "1b3dc97900306649283ab88de72f247c"
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
    "url": "assets/js/30.8682f810.js",
    "revision": "10eca467daeab38ed5e6e51cf55a7d49"
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
    "url": "assets/js/33.743597ed.js",
    "revision": "9f695a2066f4e81879463d1d464d02e0"
  },
  {
    "url": "assets/js/34.6e4c5b1b.js",
    "revision": "49ddd2ebf713148bc52e6812bf1bdc20"
  },
  {
    "url": "assets/js/35.d9326490.js",
    "revision": "77a72893341fd5a6d73cefed5f5d9f35"
  },
  {
    "url": "assets/js/36.f3e5cf65.js",
    "revision": "26967cffd95b1c07d858da45f4415093"
  },
  {
    "url": "assets/js/37.f94dd629.js",
    "revision": "7376273046fa681bcf5fbde0db69a33c"
  },
  {
    "url": "assets/js/38.677d96a3.js",
    "revision": "50d9a630af52dad18b7f0841c9110f26"
  },
  {
    "url": "assets/js/39.f94d2f94.js",
    "revision": "a9a4699dcefa48e9f4a950f3b8deeed3"
  },
  {
    "url": "assets/js/4.3175c058.js",
    "revision": "734f736c5460cea66307e12f6391b8d8"
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
    "url": "assets/js/44.2b152440.js",
    "revision": "6421f4e790e2e08478a934604329e86c"
  },
  {
    "url": "assets/js/45.3948d2e3.js",
    "revision": "76defb590d1bd24a3fc4a2ac9b56b823"
  },
  {
    "url": "assets/js/46.98c1bfbb.js",
    "revision": "6aeb3ee6d427460507b3c3e17d20fba6"
  },
  {
    "url": "assets/js/47.8e8583bd.js",
    "revision": "08ce6cdfbf98d031594bfe5390638020"
  },
  {
    "url": "assets/js/48.060281da.js",
    "revision": "f9e0be698aa8912ac13b6690bc485126"
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
    "url": "assets/js/50.1cc9babe.js",
    "revision": "ee436e48cc60b21ff6936cc36c3e44e5"
  },
  {
    "url": "assets/js/51.75fb44ec.js",
    "revision": "f370a5c65231ee18aaba50397d6db934"
  },
  {
    "url": "assets/js/52.80f5e505.js",
    "revision": "1f517a25cb541fedf6063c80772794dd"
  },
  {
    "url": "assets/js/53.2d3a3d0d.js",
    "revision": "71a0ce82409450199ca276c5ed597cb4"
  },
  {
    "url": "assets/js/54.1d0ad503.js",
    "revision": "1a54a285b10f292724967f88b868b355"
  },
  {
    "url": "assets/js/55.cff726c2.js",
    "revision": "c9d714d92fe2f707dd76da15f0482b45"
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
    "url": "assets/js/6.7d20de67.js",
    "revision": "39ee97d08cf6bcdb0f60dca9208da019"
  },
  {
    "url": "assets/js/60.5eef5e37.js",
    "revision": "05c395e2eb18d81d376e19410fdc40ac"
  },
  {
    "url": "assets/js/61.2915b04c.js",
    "revision": "defdfac7f07290c68338f289ddabe798"
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
    "url": "assets/js/65.a84f5525.js",
    "revision": "25a3bf9a9d512934962aa3fc76c37791"
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
    "url": "assets/js/7.db9f625e.js",
    "revision": "508eedeb935d27a88ae2c5aeb25879ec"
  },
  {
    "url": "assets/js/8.78f483a5.js",
    "revision": "c614b8c3739efed9714ecac189546c0d"
  },
  {
    "url": "assets/js/9.c13a85dc.js",
    "revision": "8b2fc1d8e5263ae6b2c99363488e2ef9"
  },
  {
    "url": "assets/js/app.e9821a65.js",
    "revision": "81edb51d22c2822b0f5b7de417b3e255"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "a326b74323b58b7a150d15c71b238a2b"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "6d1367f21e2c3f8a1401a6f3fd982c5e"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "59650b2fcdf50cc7dd917c677c82c474"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "07593037575c048796d67790f135af5e"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "28f0c11b4eabab525ce5286644e9395c"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "0cd9e8a0bad1c0f2a109d4bc8839e3aa"
  },
  {
    "url": "computer/c/c.html",
    "revision": "6f9dc8b1a8dc45691172d01dac5474cc"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "9af78d5e0987915a7484aae854839f94"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "ab2f8d6deda95465de7c1bda45c416c4"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "f8a92049322cf61a949da847a92b0be4"
  },
  {
    "url": "computer/python/python.html",
    "revision": "b9ae8283455a3f0fe9b132833c297718"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "5ed9b711033244e69f2f23e5c406cf46"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "8c85b7ad9deca73f058b04dc3f30853b"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "cd16aed66aecab037f79c72f43030afe"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "c2024444b72a8ac285b6ae7f3775a990"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "a9181fdc6a23f7bcd24912d991e6db26"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "23845834a90b3b8a605559296148b721"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "6b7052fc5b7d4ba8d1f3d2a0bffab936"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "b2de9777384bc95b98604baaaf495c74"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "3adbf622995a5ac57bea4b33021becf4"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "ddefd57181f6e4803a63b324d05cd0de"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "536952c43474c921f9d23e009b385463"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "71b74dbb127e523dfb376f538da3d608"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "b4a435e45b1999647ad7ac4680e41eb7"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "791081ec4bdad0529334dd2bb4dd8f49"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "f921cb0fb06ff9a5b7de913fb353d491"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "a56218248beb6d5c57e306d039bab657"
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
    "revision": "75d42dbe1d3ba43c1389e808217dbb42"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/微积分.html",
    "revision": "a0eef101bd2fa2df5fb320765018a753"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "e5df8aad8743121e26155e37edeed2b0"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "b41446209fba91d06f0781f90fe9a0bc"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "b90c4456e2f688944ec3b17d51520ad9"
  },
  {
    "url": "physics/光学.html",
    "revision": "1aa488a6e11a867ad24a4384dbc9d4e5"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "e337f5431509392ac38d1565913d61a7"
  },
  {
    "url": "physics/力学.html",
    "revision": "617d1918db4407ac05d6deb65893aa52"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "0262a02d174651cff9aa03bf8587d5dc"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "c8da7912fe2b8c12ce8d08ec6e90bf6a"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "8c669084047484e61ecea1d4fb565a8a"
  },
  {
    "url": "physics/热学.html",
    "revision": "fc0bca3eb6c390458343e639dc8b13f5"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "33e8770ddc1683e68ac91d3bb503797a"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "900d6dac51a01ff91b71a92d93b14ff7"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "b5d70701f8131afe794e537fc3898c6e"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "19ba13c09cc59bdcc43ca5604206e282"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "4ab5a9bef48813224d1037bb57cb401b"
  },
  {
    "url": "web/html/css.html",
    "revision": "b9836927ccdda7415ef2c5850348be35"
  },
  {
    "url": "web/html/html.html",
    "revision": "34e929feb53295b06d3f6d8e6212ba7b"
  },
  {
    "url": "web/html/实例.html",
    "revision": "4c81699f5ce3fb3c11c31a2f449c7c20"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "80a2508db8d5819893cee3155f128df9"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "d7c51b38afa888e8acff655035c676bc"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "5aecf4c4bdbb02d01ea8ad1315d67aea"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "fc6fd4eb1af4479b09862039f0c3a791"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "f6c92065eff9baeb4d4fc5f838c66058"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "d4a740de1d149cd7a5b7ef3b464c9a74"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "a289bfb24917469178d85b789f988333"
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

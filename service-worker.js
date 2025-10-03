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
    "revision": "a35771cf4bc6600785d09db38d5cafe1"
  },
  {
    "url": "addition/git.html",
    "revision": "054c0a3cfb09dc5994a0fcaca22e9ec2"
  },
  {
    "url": "addition/json.html",
    "revision": "72cb0e91e4a2736490f0bd1a08fe18d8"
  },
  {
    "url": "addition/latex.html",
    "revision": "c7b459498f52ed9db57ef6c0757d2726"
  },
  {
    "url": "addition/markdown.html",
    "revision": "69c85c00bed4b961dba0e03f00f06045"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "ba36bf156dfa13cf74c5ee86c5b75b69"
  },
  {
    "url": "addition/xml.html",
    "revision": "a36401726c74344d866d8ed3ac8d9fa6"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "466eb4f5dc3f8e438fe157e113895988"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "a3399061eb813d79890c99fce80ea6e8"
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
    "url": "assets/js/10.ef0211f4.js",
    "revision": "927ebab54543ec6875d44ec1ad99fa83"
  },
  {
    "url": "assets/js/11.c05c1ae2.js",
    "revision": "a019e403e376a713366f002acb5e2695"
  },
  {
    "url": "assets/js/12.7f27b2b9.js",
    "revision": "02a731adb80982264804baaa8c7212d5"
  },
  {
    "url": "assets/js/13.87618d69.js",
    "revision": "a2a9056c2a7b12f21a8c6054ba78685e"
  },
  {
    "url": "assets/js/14.db720232.js",
    "revision": "274f2ed99acdb8a45b778d79af1d8d73"
  },
  {
    "url": "assets/js/15.fe5068ad.js",
    "revision": "557932094ab2f8dbe6bb44efbb2b47d0"
  },
  {
    "url": "assets/js/16.232e04b4.js",
    "revision": "5599e72cd36262477dd816d568484260"
  },
  {
    "url": "assets/js/17.cbe82154.js",
    "revision": "6371f3e63a34a59ba4cb7f36ee550309"
  },
  {
    "url": "assets/js/18.17120c1b.js",
    "revision": "fbf999f2405535af9002541bc75e4c97"
  },
  {
    "url": "assets/js/19.429c1ea6.js",
    "revision": "fd535e752a303ed2801c204990b7a09c"
  },
  {
    "url": "assets/js/20.c206b90e.js",
    "revision": "be6933e8d1dae2a8b4221f252dd162c4"
  },
  {
    "url": "assets/js/21.d347c1ba.js",
    "revision": "1b215160c576b49ab31fda46157950ed"
  },
  {
    "url": "assets/js/22.0474bcc2.js",
    "revision": "8353cda3d9fbe1d6b3af74fe034e66c1"
  },
  {
    "url": "assets/js/23.216cbaae.js",
    "revision": "3ad08b0f5ad91b0d69336e6f7862c5cb"
  },
  {
    "url": "assets/js/24.e9ad7565.js",
    "revision": "70b5809c3c713ba914814a51e8635fba"
  },
  {
    "url": "assets/js/25.81b45f08.js",
    "revision": "b7763974aaa0b630cb128b5d6f0ba443"
  },
  {
    "url": "assets/js/26.6becc78f.js",
    "revision": "65b242467224075013001f2431849603"
  },
  {
    "url": "assets/js/27.14f16d76.js",
    "revision": "7aab41c7b759e8be26242b220a59abc4"
  },
  {
    "url": "assets/js/28.20607519.js",
    "revision": "75c684b97f9ec69b1a8fff8df16057b0"
  },
  {
    "url": "assets/js/29.473be1f7.js",
    "revision": "c4563be11487bccef6c4756b3d1180a6"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.32df6ab4.js",
    "revision": "31637e753a28eb1d5520ca5a51d14395"
  },
  {
    "url": "assets/js/31.1a2a81f4.js",
    "revision": "193228d7aa56a7ad58db8daa136825f7"
  },
  {
    "url": "assets/js/32.62b086d4.js",
    "revision": "c619f3e1ae57de59116913870110a8dc"
  },
  {
    "url": "assets/js/33.c5084f0b.js",
    "revision": "1859cb7457cfdb66d3655e7352bcb71d"
  },
  {
    "url": "assets/js/34.96c9067b.js",
    "revision": "7cbb37a7212b76444bec3a2d543050e4"
  },
  {
    "url": "assets/js/35.26955b35.js",
    "revision": "ea49c944a7876edee474161cbf2088cb"
  },
  {
    "url": "assets/js/36.c1ffbfa3.js",
    "revision": "1cf1f9d823d9a38edf12eea8be41ee50"
  },
  {
    "url": "assets/js/37.9711b229.js",
    "revision": "db22716081d4b78ff3e91ed7033fb0dc"
  },
  {
    "url": "assets/js/38.d9fac439.js",
    "revision": "af798a12ed092924251820a6fc16c389"
  },
  {
    "url": "assets/js/39.7f3be8cb.js",
    "revision": "4908a9194bb2d8c9c0c74a79d990deb9"
  },
  {
    "url": "assets/js/4.f40e2c58.js",
    "revision": "fa3e2f7a8dca7cfbe77b32ccf7ef3327"
  },
  {
    "url": "assets/js/40.a6457d7c.js",
    "revision": "a109af966d39616835ca27211c2a8203"
  },
  {
    "url": "assets/js/41.36533e57.js",
    "revision": "b92d34c01bcf8c3a957bb6d9654bce49"
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
    "url": "assets/js/44.ae53a91c.js",
    "revision": "f39e3540232aff36de2192a0040d1f6c"
  },
  {
    "url": "assets/js/45.b42186ce.js",
    "revision": "bbaf09b2fe9ca8018b3c80f6aaacae3e"
  },
  {
    "url": "assets/js/46.9a4183d6.js",
    "revision": "4d8224419d0b6b43064bdb6a5dba20f8"
  },
  {
    "url": "assets/js/47.846e34b0.js",
    "revision": "52ee4366edd97b95ac2cd94f670c8c81"
  },
  {
    "url": "assets/js/48.2ce080eb.js",
    "revision": "0d726071fcad4ba7427861881c8d033c"
  },
  {
    "url": "assets/js/49.c3fe4ba3.js",
    "revision": "4fb744d3913825f3475b5fcab4a6133f"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.604c74fb.js",
    "revision": "79bc249e7edfcbe747d8767544b77969"
  },
  {
    "url": "assets/js/51.41e45443.js",
    "revision": "61a41089a5ca3cc581ada5a34dd20c67"
  },
  {
    "url": "assets/js/52.f692b2c4.js",
    "revision": "e82b2c5b9d4807e3c5b04e24d9df552b"
  },
  {
    "url": "assets/js/53.bb324bf8.js",
    "revision": "b1c622c585ffd7010d5065c6e252895b"
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
    "url": "assets/js/56.524786c3.js",
    "revision": "bec76a8c3c648dca07be6a546a13bd48"
  },
  {
    "url": "assets/js/57.9fca32d9.js",
    "revision": "fa8779a3c14ab464fdf1c4000a4e7347"
  },
  {
    "url": "assets/js/58.cee98755.js",
    "revision": "947ce4f0cdc3c79774ceec68fb6541be"
  },
  {
    "url": "assets/js/59.c8640780.js",
    "revision": "76e1663810c6e787526bdd4657024194"
  },
  {
    "url": "assets/js/6.3712678b.js",
    "revision": "c8dac902c667c83941b8647430208808"
  },
  {
    "url": "assets/js/60.08dbd5e8.js",
    "revision": "126d3b214a8bfcfd7c593218a37e6faf"
  },
  {
    "url": "assets/js/61.ce820caa.js",
    "revision": "2a2d898077b52395bc7f77b99361f171"
  },
  {
    "url": "assets/js/62.1f918558.js",
    "revision": "a3f33b42d6e4063330e106d80a54518b"
  },
  {
    "url": "assets/js/63.73613b0a.js",
    "revision": "f979ee09f46df5df8c91f3f787e1e57b"
  },
  {
    "url": "assets/js/64.4138775c.js",
    "revision": "cc9f782f047fdafe1866c12746e38827"
  },
  {
    "url": "assets/js/65.008da1ee.js",
    "revision": "a5d9e7a06334e5b8fc5c9ba37c60550e"
  },
  {
    "url": "assets/js/66.77621ed7.js",
    "revision": "02a9c22c50923e2a048182946316ebb8"
  },
  {
    "url": "assets/js/67.71bf4f19.js",
    "revision": "98de7691b93e4d2b99d1cdc92587f16f"
  },
  {
    "url": "assets/js/68.1af5f7d2.js",
    "revision": "70a9ab4758710dbc47c97166a70311e2"
  },
  {
    "url": "assets/js/69.ba52739c.js",
    "revision": "efa8da0ab9c8840ed66f53e7daef6be7"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/70.f5722e9d.js",
    "revision": "9d44c14d7d8825efc113c2dc063c86ab"
  },
  {
    "url": "assets/js/71.20ab09c9.js",
    "revision": "88c958a2101f7414567def7795500938"
  },
  {
    "url": "assets/js/72.eba533d8.js",
    "revision": "856952c14c32c39b30fc9c7aa3b450b6"
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
    "url": "assets/js/app.1cc6daaa.js",
    "revision": "aa5d0ab3fb2fdcdb9e587ea7db17257a"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "e52cda7f9ef9de95ccc0aab9cb3dd80c"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "cdb28da4989a7a5f093db4591d2e8949"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "b2a43752d2c1b52c134dcf27843cd919"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "b57b00f950db33cea35c941e17cb09d7"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "d5826854f9023bd51ad62e805b88099b"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "9196babf1cc6e36ff3775ba59d4a63ee"
  },
  {
    "url": "computer/c/c.html",
    "revision": "16e5abf66f4a91ed7af9b130f4d37478"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "d6cba991315402720443b1233fbdccbb"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "50126979f5c7c456fbc13619b75027eb"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "136028c1192377afc2917bdf6d29395d"
  },
  {
    "url": "computer/Java/java.html",
    "revision": "8b9bf655f9cfbc8cecb16102a4a92ed2"
  },
  {
    "url": "computer/python/python.html",
    "revision": "8c57a1c97a5d5a1b988d006fae8d431c"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "1b14b086724e8ee89ca17183147696a1"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "7ec7af164324e9b90ccc6cc5e5f066ae"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "f112995a8e18f935f9643fce0085e7e8"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "03d1649ac52aba6404c807998a4b7c55"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "08c6bed90d7a8803471a599c74cda478"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "4ecc95f194a963ede17af7876996ff15"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "d73f4fcfb05b5fc77e39cb59b9d9560d"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "273b380499487e6a092393a27a739b88"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "786d6fbdfb329ffe797e08bc42491831"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "c67d08fee13e545d7cd6326cbb231b13"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "ace5cc25ede1d87f9998036ab63e0f73"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "72c689164cf3de99acc924e19cc75cc2"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "ded416d9890e3bcecfad49fc0f2a5a78"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "82073934b2e17466b9652b03a2453a57"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "b06454b2bb6cecc5f583b6c608095543"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "bf989e5f2c67edcf994854b566440944"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "6e926440afb526bd82c6a20bcd2c1a10"
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
    "revision": "4a295a98e746a8df888ec1a1d8fead3e"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "c1c4d01dad44c55dc0215c1a6f96313c"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "9f1ea4ba69db01e220b54bee435ad62b"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "241fac0575891000b20d2945204cb26e"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "46197baa940f2b0468fc5033f8aa8898"
  },
  {
    "url": "physics/光学.html",
    "revision": "5cf5b80c4cee3c6a24e19e96fb19a27f"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "1a5aeebe8d19065168904968f59a9372"
  },
  {
    "url": "physics/力学.html",
    "revision": "8e4b0eba7e224ebdb797c578a6d63ee0"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "cddef6d2f31ead446ab5fd2481e47ee7"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "563ea3d10bda36fa13dced34e0fe6992"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "4f70e0d80b8963c088a2dc8495d86961"
  },
  {
    "url": "physics/热学.html",
    "revision": "51195ee41b3a20e3890a6bea8c411272"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "44851feea2e6445fb7b6d2931df090e0"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "16d7f73feb3b7cbc945c7c7022787a69"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "14e319ed465a3bf6f6f22aa7b09f9f5d"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "7052702ce72591c0e8e4478917f28244"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "2008794d9741c643dc39fe8f41dbe538"
  },
  {
    "url": "web/html/css.html",
    "revision": "f5110d4729096f4de4fb0f70a01ce866"
  },
  {
    "url": "web/html/html.html",
    "revision": "55bb9a4081bd25e247c92a893414a447"
  },
  {
    "url": "web/html/实例.html",
    "revision": "f83342775a94086a2f6ade42b84e09f7"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "4aeccfbdfa87dd9b3c7331d43dc64d23"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "3cfe1002a77eda522f2d60dd9d152529"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "31bb06f6157725406bb3dd1d046ab06f"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "a780b813682c50f1676f227adbb0d4cb"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "57bd78d9d16f39a0bdd1c4027b4b9cab"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "ddf7facc8f4cdbab912e4473fb67735a"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "e2207f455bae7a681873ae3cb1ec5687"
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

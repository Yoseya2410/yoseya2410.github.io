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
    "revision": "b1474ce0abc25b353928daba83766931"
  },
  {
    "url": "addition/git.html",
    "revision": "1d99e3620058348daf6f6a763d8b16f4"
  },
  {
    "url": "addition/json.html",
    "revision": "0e036fc90923a740043464ad7f12fb2a"
  },
  {
    "url": "addition/latex.html",
    "revision": "043e6ede7cf625a0b42eec227c6d5673"
  },
  {
    "url": "addition/markdown.html",
    "revision": "278749e198e5d68c16dad20e4685976d"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "0f9c930f920227883d9bef717cf1c58d"
  },
  {
    "url": "addition/xml.html",
    "revision": "14729d68c2324f78fd79372dd7b22b62"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "f4168a0c58d926ede2c8999842c1cc65"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "48516d8663664d79f945bb04a556465d"
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
    "url": "assets/js/11.e6876fe2.js",
    "revision": "a7b231fd4cfd6f5fdba5789b0dea92ce"
  },
  {
    "url": "assets/js/12.399ffa1c.js",
    "revision": "6ba84d65fb910bd78c98fbd2dc148113"
  },
  {
    "url": "assets/js/13.99086e97.js",
    "revision": "731f0bddc3bb7cbdf0cd720d706691d9"
  },
  {
    "url": "assets/js/14.4d9c3fd1.js",
    "revision": "8b36fe2226f18c7a913893584b728525"
  },
  {
    "url": "assets/js/15.7ec274dc.js",
    "revision": "c36468fa38eec53ade464767a7c8248e"
  },
  {
    "url": "assets/js/16.118c799d.js",
    "revision": "678fa574b61b7d02a939d067ef6ee474"
  },
  {
    "url": "assets/js/17.a4ee2dcc.js",
    "revision": "90031f5273046d6a7cadd6f681ddccc2"
  },
  {
    "url": "assets/js/18.ba401d82.js",
    "revision": "cadc3d6cfa927ad748fb15d2b8122f76"
  },
  {
    "url": "assets/js/19.02230bb1.js",
    "revision": "a94d50a9dfc0156b35a55d5636672615"
  },
  {
    "url": "assets/js/20.db4081be.js",
    "revision": "e19a3fdeb67d571228109847533f8add"
  },
  {
    "url": "assets/js/21.cdd351cb.js",
    "revision": "33330b78b234b8f9aead025090f3c82d"
  },
  {
    "url": "assets/js/22.10c6b751.js",
    "revision": "c30af170c3486c1371a9e6fef342396b"
  },
  {
    "url": "assets/js/23.0cc413a4.js",
    "revision": "c291e53621519a3d1a76cc2d80f33413"
  },
  {
    "url": "assets/js/24.2bd41ffb.js",
    "revision": "902e6506b312bd5c564d3d868630f109"
  },
  {
    "url": "assets/js/25.26819d62.js",
    "revision": "d4b849c2940afa057c35003bcdbf6fbe"
  },
  {
    "url": "assets/js/26.80619e9d.js",
    "revision": "c8517c857b1b4ba441ef77b3331cd04c"
  },
  {
    "url": "assets/js/27.e577bf4a.js",
    "revision": "00a3a5893567f98e1f8aceb991ee53d8"
  },
  {
    "url": "assets/js/28.8a43fd2c.js",
    "revision": "ddb14361f94f61aac4784389e3daf030"
  },
  {
    "url": "assets/js/29.ec951dd8.js",
    "revision": "e69ad5257a0858fe32559f849c705669"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.3476163c.js",
    "revision": "d0f4f607c072990fd7c0c543462c7115"
  },
  {
    "url": "assets/js/31.077e3f26.js",
    "revision": "e8c345566594a6b2f08877ec8e1282a6"
  },
  {
    "url": "assets/js/32.79b7cfb8.js",
    "revision": "4b48cb90ce41952e24cf9294130b1c33"
  },
  {
    "url": "assets/js/33.b2ed9154.js",
    "revision": "5d794d7034466435dc4904a828140f13"
  },
  {
    "url": "assets/js/34.749db111.js",
    "revision": "43946525e4edfb97a60e346e6af54415"
  },
  {
    "url": "assets/js/35.70b34673.js",
    "revision": "95e24b51312c917ebe67daf3eef79871"
  },
  {
    "url": "assets/js/36.b042141d.js",
    "revision": "acb2e63a067ec64334878e3baa22b14e"
  },
  {
    "url": "assets/js/37.ce559e98.js",
    "revision": "8b39f321f8490c3796d35f9b58cc7547"
  },
  {
    "url": "assets/js/38.bc3eb768.js",
    "revision": "577608a439b6e93f61697c8acefffbad"
  },
  {
    "url": "assets/js/39.c65f30ed.js",
    "revision": "e922bc04576fd82ddf866a905d6d5d7c"
  },
  {
    "url": "assets/js/4.16334225.js",
    "revision": "b3aaae08dfe01defdeb3c30bf0075add"
  },
  {
    "url": "assets/js/40.8ada414d.js",
    "revision": "cea8a6c3a5d2a7a7f007643191bd9cb6"
  },
  {
    "url": "assets/js/41.6e6eb8e3.js",
    "revision": "8fa184fd3d4c3e9ae3e603685dc036b0"
  },
  {
    "url": "assets/js/42.276c3333.js",
    "revision": "b0e33c25c268ba03eefe2aeb4bd64765"
  },
  {
    "url": "assets/js/43.2ec905af.js",
    "revision": "066eac1e2e175c8570b01db36ec6d6b4"
  },
  {
    "url": "assets/js/44.04f75fee.js",
    "revision": "2ff61668a25d6d843de4decfe319c9d7"
  },
  {
    "url": "assets/js/45.ea623648.js",
    "revision": "2da61b0857822b554f39a2efd05fb37c"
  },
  {
    "url": "assets/js/46.19455553.js",
    "revision": "72df8c946705756c211318c77e91ebe4"
  },
  {
    "url": "assets/js/47.f89fa3c5.js",
    "revision": "5fcc9f9b6f6091479b94617fc6ba11da"
  },
  {
    "url": "assets/js/48.efcb04a0.js",
    "revision": "7588edfd3c95d3e706c8f0f0f6530981"
  },
  {
    "url": "assets/js/49.1f3048df.js",
    "revision": "ef628e59fce0f736e64cc8aa8a13e2ec"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.58fe7453.js",
    "revision": "35225ba12e4e5f06b77b867dadcfdd94"
  },
  {
    "url": "assets/js/51.5acf3b82.js",
    "revision": "83f924fd95bbc0db1de46d192e17c88b"
  },
  {
    "url": "assets/js/52.0908637a.js",
    "revision": "26701a1066979d504968a9ea5db24ce4"
  },
  {
    "url": "assets/js/53.75fd0cf0.js",
    "revision": "fa3e5e592c4460a43c63ee3973f65065"
  },
  {
    "url": "assets/js/54.3d3c8b73.js",
    "revision": "4bb003350a602f5ef3532f3831908abb"
  },
  {
    "url": "assets/js/55.f1e55a93.js",
    "revision": "81ab59dc85923d9b481df4509d5cbca4"
  },
  {
    "url": "assets/js/56.9afa957d.js",
    "revision": "bad3a3365ded353ff23828a96c17ca29"
  },
  {
    "url": "assets/js/57.2f80e2d0.js",
    "revision": "67fa13737c505060a6829c17a7b5bae9"
  },
  {
    "url": "assets/js/58.55c04377.js",
    "revision": "542cb0e84d8b7bb2a16c396b5f97e2d3"
  },
  {
    "url": "assets/js/59.351c8a2a.js",
    "revision": "433aa051b1e29077bfe8a4ae1bffc6f2"
  },
  {
    "url": "assets/js/6.ad2b2714.js",
    "revision": "8374c9ad0b949e0053e4bd0fb0d8bd08"
  },
  {
    "url": "assets/js/60.66d1a895.js",
    "revision": "e3f7c8c2700e0776cfd75450b43b6c93"
  },
  {
    "url": "assets/js/61.d45ecb3a.js",
    "revision": "cba1e0042c67bb85d8509191ecc3a990"
  },
  {
    "url": "assets/js/62.5409ea7b.js",
    "revision": "655838feab3169477d0e0f1c9f78ea84"
  },
  {
    "url": "assets/js/63.aedb1635.js",
    "revision": "004278de4db6cd6f0bf7efda0ffd8007"
  },
  {
    "url": "assets/js/64.31fc0c33.js",
    "revision": "20dfc7d517a1e2d80087291cf2c98790"
  },
  {
    "url": "assets/js/65.37687a8b.js",
    "revision": "72e30fab82a86d1101270ee88536f336"
  },
  {
    "url": "assets/js/66.30a83ad2.js",
    "revision": "c61191c20149b021d003dd26518a9a93"
  },
  {
    "url": "assets/js/67.b4051fab.js",
    "revision": "7e86d189b1d6f524bec0440960648a05"
  },
  {
    "url": "assets/js/68.56c5447f.js",
    "revision": "46c807d263391e9146d597c32c7e7a9d"
  },
  {
    "url": "assets/js/69.23e10ebe.js",
    "revision": "6964783ebaea42cce86c5d1769b0517c"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/70.8c7c73fa.js",
    "revision": "56485743c51a974b8261752c76c812b2"
  },
  {
    "url": "assets/js/71.4795de53.js",
    "revision": "4062cce7ba6c93bf583f9b73d292d0ec"
  },
  {
    "url": "assets/js/72.d61abcab.js",
    "revision": "87ea52fa5e605894aeb83ca03323ca28"
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
    "url": "assets/js/app.01aae0f2.js",
    "revision": "0de843321a3bdc68e63d1769ea6bf839"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "4f094029ba436f1428e65720a0e5890e"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "c0fb124bebd4b3e52234f48a6fbb0886"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "584b74f02025af03e6c295718d72a6db"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "95500cc62fd01ea19d6d7726862b2f17"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "a479ea8c992d338ea19feae796f93ce8"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "47ef08e11ff143c62f616e8e99b97c40"
  },
  {
    "url": "computer/c/c.html",
    "revision": "0e1501ca8608e37ce2361d4383ff23fa"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "f84723cf1f009f4cfeefe6cfbe9d3da9"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "1a70993af331c640b707676d8bfa87ec"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "a2093616f78fc8e80da921275b01c63b"
  },
  {
    "url": "computer/python/python.html",
    "revision": "03f526ffc74acb277f50698ebef46925"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "adfb16b3e7723f295ee2c4510f1ae9e5"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "120d8ef8f8dba4e7701ca74ca6db6046"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "ccbf6b6e89a3f7070c51fe1c485b5aa9"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "22468d964dd86c3282ad4f7b7428e592"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "c416bcf260b4bc06e93437ae4ec4d29a"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "9b137ab9a405ca1930a5444aae862f76"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "11abe2ac10044143317c34227d2851c6"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "edd6b02f853436860513390c42ea7e61"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "a90914e1102e0f77f020897ab0f67dbf"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "f49eb907a908099552981792600dce04"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "8c9c607ade298e1b7f294a2a3d84621e"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "77a6569754f8b99ab2b3ee1a3ceb42f0"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "42b8f8e574dbddc26c3f64e3015f41d2"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "2f7167f4580c85fcb403eb4c6ce75e6d"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "cf2cb718cf7b4633252ac33c50b1eaf3"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "a6c11ea27e16c4de14996e98f82cdfac"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "a582cf6268bce9dbbac25796c08ae225"
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
    "revision": "e9114fdbcafaacd711b2ccfccf2da275"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "b7ec9632a16967dd8d502476f14d307c"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "a711c557a8428765ec4a7731abccb7ad"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "41b49de56f3b92ccf750278f610e4e3f"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "ec4f3958e82cfef95e42c855c573c487"
  },
  {
    "url": "physics/光学.html",
    "revision": "2e6df751b95fdab19c8e0bc85eb69749"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "b2df976367625916866be381915d9e76"
  },
  {
    "url": "physics/力学.html",
    "revision": "a7630d9cd19f92e8d98377eec12fb734"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "b8856b3c9ae25921b8442dc9424ff8d0"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "5664ac18b504497ad5f4e851ae73bf05"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "0871aa2bbc2da2d11ec050b9b83b5d48"
  },
  {
    "url": "physics/热学.html",
    "revision": "58d97bf2397ee4a1006ddf3a927fb367"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "c2cf43ac0e2c05a816af18c4a6726e7c"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "719851c8970e274cfb406a08b1336985"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "7f658b3c7ed30a3ae3c585142fad8294"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "b9fe3a35d2c1e4585a598240249b2b44"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "8a923ff0a57f074be71ac1632512d2e0"
  },
  {
    "url": "web/html/css.html",
    "revision": "d154fc61de69a54ac457b5497fe22724"
  },
  {
    "url": "web/html/html.html",
    "revision": "af087ad238718c3e44ece7f1d051fd29"
  },
  {
    "url": "web/html/实例.html",
    "revision": "2f519c2bba89b9718e10ab81bea032c8"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "03d5b6d524a031d6a6a2fb2b72d5b1d6"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "f1fe5d17d4868d6fa4f6a9699f8fb741"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "f53dcc03bc348f7d87ab5440016b056f"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "a71200ce6f2bfeeb102597cfe6357ffd"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "b960b7ad224a3feb73db7dad7bb8a6f5"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "c3794b9c59c0146b40bc078be9289772"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "b26b5127d20870a8152029b4f144b3c8"
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

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
    "revision": "54e27344101bbad79fd3b18ae3304e19"
  },
  {
    "url": "addition/git.html",
    "revision": "4a1c0ba063e8d9ff4267269f1befdca5"
  },
  {
    "url": "addition/json.html",
    "revision": "d6c530b492bff660f19ee39c8e7fa463"
  },
  {
    "url": "addition/latex.html",
    "revision": "366f57b59551967200b3bd88dc830acb"
  },
  {
    "url": "addition/markdown.html",
    "revision": "7742a4a42af827b02150f5ce2761d6b0"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "c998fc2c7f0aee759ebf867d81c91929"
  },
  {
    "url": "addition/xml.html",
    "revision": "86457547e96bb282dfaa996ef27dbb0f"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "402c9e468a9bf9dfa76b132af1b0728e"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "83807c24235893d68c30484562f23c05"
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
    "url": "assets/js/11.5a7a0d83.js",
    "revision": "bed7a91c15c6495fe8ce32b00149919d"
  },
  {
    "url": "assets/js/12.40e6a7b8.js",
    "revision": "abe2f699f953de37228dae61683c655e"
  },
  {
    "url": "assets/js/13.033e1aab.js",
    "revision": "73e471b53fe1428c5ca07ed788f1e90f"
  },
  {
    "url": "assets/js/14.2295b6a4.js",
    "revision": "f485257c761e6589cd72b3072473dc39"
  },
  {
    "url": "assets/js/15.c7661ec9.js",
    "revision": "2ebe58a1b65076c9debf2a9617a096b0"
  },
  {
    "url": "assets/js/16.ea59e35d.js",
    "revision": "5d97f9d43a799788745a0d227a9dc260"
  },
  {
    "url": "assets/js/17.0d0b904e.js",
    "revision": "f3e8c6d28d87e01e8dc130e09e1348a7"
  },
  {
    "url": "assets/js/18.3812b91e.js",
    "revision": "b057a6c3fd6b31af89f18f0c57bc2cd1"
  },
  {
    "url": "assets/js/19.51294987.js",
    "revision": "ced3a4a7bc9a729b7c938ab4e595c09a"
  },
  {
    "url": "assets/js/20.c206b90e.js",
    "revision": "be6933e8d1dae2a8b4221f252dd162c4"
  },
  {
    "url": "assets/js/21.4cafa004.js",
    "revision": "1e23530b98e4eee067b6beab2d5c2833"
  },
  {
    "url": "assets/js/22.0474bcc2.js",
    "revision": "8353cda3d9fbe1d6b3af74fe034e66c1"
  },
  {
    "url": "assets/js/23.0cc413a4.js",
    "revision": "c291e53621519a3d1a76cc2d80f33413"
  },
  {
    "url": "assets/js/24.c48b83ce.js",
    "revision": "4812b25a38b31e080b56791518651ad7"
  },
  {
    "url": "assets/js/25.5d2fa095.js",
    "revision": "f46087597a896cd1cafab686d197502c"
  },
  {
    "url": "assets/js/26.322a6c09.js",
    "revision": "c109e5435abc7c1fa8490d406171cf8c"
  },
  {
    "url": "assets/js/27.5c3a9ab8.js",
    "revision": "66c9a892db89c6a901a6335c4dd0fa9d"
  },
  {
    "url": "assets/js/28.d4b1ac41.js",
    "revision": "564174e73e82f10236f1f96245fbf907"
  },
  {
    "url": "assets/js/29.e8567a1b.js",
    "revision": "b4715fb2455f0d5e392263a49f01ed8f"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.41b14d68.js",
    "revision": "5dfff22c22092c6c0a9b517d7fe68be9"
  },
  {
    "url": "assets/js/31.077e3f26.js",
    "revision": "e8c345566594a6b2f08877ec8e1282a6"
  },
  {
    "url": "assets/js/32.ac7a95e9.js",
    "revision": "c0e0ad9d325baa0df1a2adf1bf0df137"
  },
  {
    "url": "assets/js/33.ce164613.js",
    "revision": "c964159406ec3ee6c144e979a75e01bb"
  },
  {
    "url": "assets/js/34.702510d7.js",
    "revision": "0189a5d0335e49fe97bccc2ba9c05273"
  },
  {
    "url": "assets/js/35.b158c0ef.js",
    "revision": "38c6b748fd47fbb4a89cfc908d3544dc"
  },
  {
    "url": "assets/js/36.937964b7.js",
    "revision": "8042c7c852f4838e1c72eb7ea6c5718b"
  },
  {
    "url": "assets/js/37.5688f4a8.js",
    "revision": "08484fe5a14225186727d8ef91edcca6"
  },
  {
    "url": "assets/js/38.4fca378e.js",
    "revision": "d626de65f70b4e54b7b1206c87476f12"
  },
  {
    "url": "assets/js/39.0cead029.js",
    "revision": "084585656484811fe0c52533803878fc"
  },
  {
    "url": "assets/js/4.7cad207b.js",
    "revision": "a510b1d49495ab9ac364527a8660a4ea"
  },
  {
    "url": "assets/js/40.fe4d2f8d.js",
    "revision": "bf80051d3310330c2e5ba2b87fa6362e"
  },
  {
    "url": "assets/js/41.f4714d38.js",
    "revision": "2b77d1faefdb858970483be39e5452a3"
  },
  {
    "url": "assets/js/42.7c5beb4b.js",
    "revision": "f4a6c6d7867b233022d8dbc8c7983a42"
  },
  {
    "url": "assets/js/43.298fd147.js",
    "revision": "71cef02b1e9fe36ecbda70f7df20c765"
  },
  {
    "url": "assets/js/44.14d16a7d.js",
    "revision": "337c54229b3aaebfe73485b9d1caeaca"
  },
  {
    "url": "assets/js/45.75c5d4ff.js",
    "revision": "f013b09b0b05d2e5b910ac26ca2a5103"
  },
  {
    "url": "assets/js/46.5338ef89.js",
    "revision": "cabce12c0e6d090e9fb3f9269ebb08ec"
  },
  {
    "url": "assets/js/47.f89fa3c5.js",
    "revision": "5fcc9f9b6f6091479b94617fc6ba11da"
  },
  {
    "url": "assets/js/48.c09fea40.js",
    "revision": "62e123df53fb270ab2af13628a993e0f"
  },
  {
    "url": "assets/js/49.0db9831e.js",
    "revision": "51d5e3f6318a5866441f834e623acaf8"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.98c84dd4.js",
    "revision": "aaa01deec91f64dd8dbeb4d256b9ba24"
  },
  {
    "url": "assets/js/51.961c3de4.js",
    "revision": "dffd2135baad813b9ca3e03783efc7b3"
  },
  {
    "url": "assets/js/52.776b70af.js",
    "revision": "0364ea507dedc0960bb22efe4b95d7d8"
  },
  {
    "url": "assets/js/53.02281cce.js",
    "revision": "caaf33fded6f7c8f543ec8c48a24a2a3"
  },
  {
    "url": "assets/js/54.3d3c8b73.js",
    "revision": "4bb003350a602f5ef3532f3831908abb"
  },
  {
    "url": "assets/js/55.99a09840.js",
    "revision": "0b9519402528e4c637d03f19b6857f4c"
  },
  {
    "url": "assets/js/56.23f975ed.js",
    "revision": "6bcccb84cd648e44e2235a3ef001f890"
  },
  {
    "url": "assets/js/57.2f949460.js",
    "revision": "1648484c951347b76531e9936d4b9069"
  },
  {
    "url": "assets/js/58.8480d9da.js",
    "revision": "87ff05af0d9cbf282263ade23c1eafa7"
  },
  {
    "url": "assets/js/59.67b4658e.js",
    "revision": "1eb5c27974a59086c1cfe2b4258c41a1"
  },
  {
    "url": "assets/js/6.ad2b2714.js",
    "revision": "8374c9ad0b949e0053e4bd0fb0d8bd08"
  },
  {
    "url": "assets/js/60.8234eac2.js",
    "revision": "45e98dc0c2ee0395450fe074d7be3dca"
  },
  {
    "url": "assets/js/61.fe248df2.js",
    "revision": "fe1a3f08a0efafa1bdd5ea6071ab9990"
  },
  {
    "url": "assets/js/62.b6a90cc5.js",
    "revision": "8161e3fe359f1a9bfc5755df596bf8bf"
  },
  {
    "url": "assets/js/63.33fd1b39.js",
    "revision": "edec5d3c88b82c483ef2c15f39c63ae7"
  },
  {
    "url": "assets/js/64.cf3d4848.js",
    "revision": "104c6708b08dfa2cc2ee663df1075efa"
  },
  {
    "url": "assets/js/65.a88eaf21.js",
    "revision": "44d6b4e3d71594162748ee4b67692fed"
  },
  {
    "url": "assets/js/66.9b91e02a.js",
    "revision": "ae6504ad5cb38935254e48190a3dbca0"
  },
  {
    "url": "assets/js/67.bd09e224.js",
    "revision": "bb0bc0b68e895a20d5d00f7b2f6e33bf"
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
    "url": "assets/js/70.1afaaa58.js",
    "revision": "c8cf4c61c57e06d58d7be49c26555f55"
  },
  {
    "url": "assets/js/71.441caf15.js",
    "revision": "ad8fba8c2ffc11b8b721ab412f550132"
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
    "url": "assets/js/app.024eeffc.js",
    "revision": "2129f7875e09bf3d46d9717914116b28"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "22dc52ae699b19ffdc9ff373b5790a83"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "b6fa1474fcb224ae056f891aae162363"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "a7d15979b4f8bac756074b3dc444b9ca"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "9f85f959a0a76641955397a297839427"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "d2f11816862616029b723de3c8d0dc79"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "30fd7d9bc783bdb075d7dedf7836ee44"
  },
  {
    "url": "computer/c/c.html",
    "revision": "fc84fc90ecd63b13ba951aba28aa6c6b"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "cbf1f830b79170b40d0779039006e54f"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "d8e96e606bdc1ae17d93a03d9bd6eccb"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "f85591c90e6ad54151948ad6f5f8f955"
  },
  {
    "url": "computer/python/python.html",
    "revision": "88088ab940b3efe4b0419277feef5e86"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "28ffe053cbd33a886a8e16bfeb57a759"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "3d9d5398bf5789129dd195797fb277e6"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "f1ba8fb6cd6ddb4325b8f2a455644766"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "f452445ea4f931cee1f2a3fd0968d5aa"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "d53b3b684c536d7b018276dcf3bb29d5"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "db047e9567d7575300b04e255287ed65"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "b51c272d8bc8498e13db7c1c56712867"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "4e63c71255ed2274353e65731250a92b"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "c163e77d224db97cc2977d81ad75aab1"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "fa2b31923a9dfe036aab88de26882e08"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "a74b16e94063eafaa28c0c7457a91e22"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "a514b51730f3b8358de28716ca25e998"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "140c5786099b336d15281679482e4ba2"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "7f50b7977d1f519623f8ecfae5a9a5c3"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "57fa40b7064ea02e0a0d8ad94f0e4f6e"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "9973b32a750b41878469a7d7ff6429df"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "9e0287665c64871c3fa4e83020ef17d7"
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
    "url": "img/STM32/STM32工程架构.svg",
    "revision": "3bb00393e4fcefd02e0fe2ed374a5fbc"
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
    "revision": "19132f48e0db376e08d74d05265ed97f"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "cc7054f390b282f1af56e6bb251303e1"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "1c4fe1735113f8689303db58218c2eeb"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "fee5321e050c3d75e4b482737d81a64d"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "862c7f6dc2b9d9acf615b9a91ffeaeb0"
  },
  {
    "url": "physics/光学.html",
    "revision": "1fe945c7c653e7cec63a77196c74ae0a"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "a0caedff0a8a1adfdf6b008031027cbd"
  },
  {
    "url": "physics/力学.html",
    "revision": "494ca9b3bce39a2c29156fef7db8a105"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "c8d6329ee436fccca7ba9f89b91c7e25"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "c007cced3d313c2c83fab9557277b082"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "81f47cdf1642c2b0fae76b90aee3e372"
  },
  {
    "url": "physics/热学.html",
    "revision": "47b3f6e85c910b62483c7bb11fe36dd3"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "dc1ec3e51edba2635adbfe2789377411"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "3d419e817988ab283c8dd7c5f11d8630"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "4fcaacc0af9e7831d58e190e30bd7f8b"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "2a70a38ceb06dabe68b7ded94bf20f7a"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "89c0e51159838cd93a6609f8713a6476"
  },
  {
    "url": "web/html/css.html",
    "revision": "8e0fc6b0f3fba5db24e6d55525fda0a1"
  },
  {
    "url": "web/html/html.html",
    "revision": "d12440693306f6fd5d17aea49c5e3fad"
  },
  {
    "url": "web/html/实例.html",
    "revision": "c6fc6d21549ca421ddd5310eae167144"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "a93e7d66b5ff60a162d4eee385d67b23"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "0900350458c5f3554e0f19fb0cea52dc"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "c435af06ed5d8890a720e4c97a956e87"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "cc79c7a8d1293a3a7505f8b10049367f"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "d2797e7727d5991cfc5eec02b3659de6"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "4821a4620aa133cf509a5ce7449e2d9e"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "8ad7f93a40c2068d9be5c28f272fef1b"
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

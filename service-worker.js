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
    "revision": "2be74e49c44fb8314b4a199a6637410b"
  },
  {
    "url": "addition/git.html",
    "revision": "63e91fd833e2280c0bb216b66aa31149"
  },
  {
    "url": "addition/json.html",
    "revision": "2ff6deaa9554d958a9efbe7366cbc09b"
  },
  {
    "url": "addition/latex.html",
    "revision": "72a65c1cca4b6aface30c6c6d2e2ffb2"
  },
  {
    "url": "addition/markdown.html",
    "revision": "448f3bd88f405ca728d79207928b1465"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "a2f2bd79ca3d1d443cfe6bbe3d248d16"
  },
  {
    "url": "addition/xml.html",
    "revision": "8b2293a702b6ba082d43270c85859180"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "5aac4ec63105ff00e1bafc3a1a27b6eb"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "e59784a0aff9a1d8b9ca852948d5cc4e"
  },
  {
    "url": "assets/css/0.styles.8dd627c7.css",
    "revision": "24fbcb4be69ca8a925d95c7916eba7f9"
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
    "url": "assets/js/11.c06c3cc5.js",
    "revision": "c9b1ca6fabd4c91e5526c3f68099e961"
  },
  {
    "url": "assets/js/12.40e6a7b8.js",
    "revision": "abe2f699f953de37228dae61683c655e"
  },
  {
    "url": "assets/js/13.187928bb.js",
    "revision": "37c198f452e6903e7c91af56886b3077"
  },
  {
    "url": "assets/js/14.c6111d4b.js",
    "revision": "283668b3b1e51331d6d68f8118157428"
  },
  {
    "url": "assets/js/15.c7661ec9.js",
    "revision": "2ebe58a1b65076c9debf2a9617a096b0"
  },
  {
    "url": "assets/js/16.232e04b4.js",
    "revision": "5599e72cd36262477dd816d568484260"
  },
  {
    "url": "assets/js/17.cc91987f.js",
    "revision": "8925055c4f93c73f28449f2142cf93b3"
  },
  {
    "url": "assets/js/18.2f96de58.js",
    "revision": "671f1c24861b7250215bccf96574fc6f"
  },
  {
    "url": "assets/js/19.02230bb1.js",
    "revision": "a94d50a9dfc0156b35a55d5636672615"
  },
  {
    "url": "assets/js/20.18ffbb2a.js",
    "revision": "f10a65b7ad5b3550ef0b8b0c16438383"
  },
  {
    "url": "assets/js/21.cdd351cb.js",
    "revision": "33330b78b234b8f9aead025090f3c82d"
  },
  {
    "url": "assets/js/22.0474bcc2.js",
    "revision": "8353cda3d9fbe1d6b3af74fe034e66c1"
  },
  {
    "url": "assets/js/23.48edfe94.js",
    "revision": "8b424f83fb1159586f64107e8df68c5e"
  },
  {
    "url": "assets/js/24.7f3357f8.js",
    "revision": "cd466822796cc40272b588085eb9358c"
  },
  {
    "url": "assets/js/25.9b5a4106.js",
    "revision": "1cc78fe2ccabf5ea1f72f34a2043708f"
  },
  {
    "url": "assets/js/26.b9d02544.js",
    "revision": "69928a03383dc4db8dfecbad4ea2e705"
  },
  {
    "url": "assets/js/27.777b58f3.js",
    "revision": "ccd551d9afc97bb9b76e9671cba47958"
  },
  {
    "url": "assets/js/28.8b51a747.js",
    "revision": "06071a6832fa0452c11203bd7d611061"
  },
  {
    "url": "assets/js/29.802b0c48.js",
    "revision": "3dd297ce5cd268957a402f5f08813543"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.d5c24ac5.js",
    "revision": "002a5a45822f0ac557ec4062e1e6346d"
  },
  {
    "url": "assets/js/31.077e3f26.js",
    "revision": "e8c345566594a6b2f08877ec8e1282a6"
  },
  {
    "url": "assets/js/32.5f401ee8.js",
    "revision": "db1d43d88c7f14f09266bea226b8715f"
  },
  {
    "url": "assets/js/33.1111ca43.js",
    "revision": "8ff88fada24d8aa9f22a36047574faa4"
  },
  {
    "url": "assets/js/34.702510d7.js",
    "revision": "0189a5d0335e49fe97bccc2ba9c05273"
  },
  {
    "url": "assets/js/35.44725143.js",
    "revision": "41c4f113b155fa94b0e4ec49fae1a86c"
  },
  {
    "url": "assets/js/36.35bb03e9.js",
    "revision": "147ccfba416af23b047e9237940009f0"
  },
  {
    "url": "assets/js/37.ce559e98.js",
    "revision": "8b39f321f8490c3796d35f9b58cc7547"
  },
  {
    "url": "assets/js/38.26f90a98.js",
    "revision": "384dbd663ff11ab423c910ff17bf0df7"
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
    "url": "assets/js/41.1ad009d0.js",
    "revision": "699e2a89afeef137e6505bb87e142c8c"
  },
  {
    "url": "assets/js/42.05464703.js",
    "revision": "c74e0a4bc3a55bc82857cf13d0b040ad"
  },
  {
    "url": "assets/js/43.9cdaca23.js",
    "revision": "a1ab7d007934084cec093d0d733a4baa"
  },
  {
    "url": "assets/js/44.6109d9de.js",
    "revision": "4e0cd1b0807b920404acf6d2d87fcb9e"
  },
  {
    "url": "assets/js/45.75c5d4ff.js",
    "revision": "f013b09b0b05d2e5b910ac26ca2a5103"
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
    "url": "assets/js/48.b0381548.js",
    "revision": "27b94f3759553cdab3ad72b9fdbddaf1"
  },
  {
    "url": "assets/js/49.7a692103.js",
    "revision": "b0dbf31344060a64aceac8e75e83067a"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.c0d037dd.js",
    "revision": "93283bcbfc9665506f49d5c7b52a47a2"
  },
  {
    "url": "assets/js/51.5acf3b82.js",
    "revision": "83f924fd95bbc0db1de46d192e17c88b"
  },
  {
    "url": "assets/js/52.776b70af.js",
    "revision": "0364ea507dedc0960bb22efe4b95d7d8"
  },
  {
    "url": "assets/js/53.621ecbf3.js",
    "revision": "e2eea6bb01194e6e9bc006d65ca0b9c7"
  },
  {
    "url": "assets/js/54.111edec6.js",
    "revision": "c230a48e0a4363452a7053291b3216ea"
  },
  {
    "url": "assets/js/55.6db89f0c.js",
    "revision": "b56e627d927db54321fa427bf50aa439"
  },
  {
    "url": "assets/js/56.bc34081a.js",
    "revision": "fd596aaaa4fb32513a71af35ea93cea9"
  },
  {
    "url": "assets/js/57.dd784b1a.js",
    "revision": "bff02c0637f2f20f416aeeaec2ba2025"
  },
  {
    "url": "assets/js/58.4fe72bc6.js",
    "revision": "085cffea46bf6ad9e94df658a6d9d6f2"
  },
  {
    "url": "assets/js/59.c0acde14.js",
    "revision": "a4a23feb98236c195acc22eb75d44abf"
  },
  {
    "url": "assets/js/6.fc81bfe8.js",
    "revision": "71a87bbc1360d18adde664a2fd4b7632"
  },
  {
    "url": "assets/js/60.8234eac2.js",
    "revision": "45e98dc0c2ee0395450fe074d7be3dca"
  },
  {
    "url": "assets/js/61.d45ecb3a.js",
    "revision": "cba1e0042c67bb85d8509191ecc3a990"
  },
  {
    "url": "assets/js/62.6d44c8b5.js",
    "revision": "0b449e61d9feb95f9371e48f13408ef5"
  },
  {
    "url": "assets/js/63.76cd7690.js",
    "revision": "d83022129415f38bc05b0b94a0ec5500"
  },
  {
    "url": "assets/js/64.cf3d4848.js",
    "revision": "104c6708b08dfa2cc2ee663df1075efa"
  },
  {
    "url": "assets/js/65.1b64fcba.js",
    "revision": "ba701d1b84de775d0723d2cb220be812"
  },
  {
    "url": "assets/js/66.01a632d1.js",
    "revision": "318bdab1d5a5049f6e5778078df7069d"
  },
  {
    "url": "assets/js/67.6be0145e.js",
    "revision": "616940aa81ed47aab4b1907220bbcf87"
  },
  {
    "url": "assets/js/68.f68d38bb.js",
    "revision": "d791358eb00e624baff944a6f20feff3"
  },
  {
    "url": "assets/js/69.1d66a945.js",
    "revision": "13b7e9d63e52d52e50c69dd9738bd4bc"
  },
  {
    "url": "assets/js/7.db9f625e.js",
    "revision": "508eedeb935d27a88ae2c5aeb25879ec"
  },
  {
    "url": "assets/js/70.b70c3d4b.js",
    "revision": "f79c1a4e6ac922e2eb84a204b42cef8c"
  },
  {
    "url": "assets/js/71.e862a4f7.js",
    "revision": "3cd5bb24c36ebbfd5c84fa25fa666751"
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
    "url": "assets/js/app.4088895f.js",
    "revision": "a7191855e7abcb8bac69e2ded88356c0"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "50ff04f1e2a8eb651a2a0d0731eccdd5"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "fda32e98822a93e06244c7aaf276d8f8"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "fe1dba0a9fcda651443b7733fd3ce73a"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "a32bec0ceb026c4c4596e2b9feca78de"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "d794f03339839cb91b95fb44a2b0e26c"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "497bea946009bc42c65f2b174904bca6"
  },
  {
    "url": "computer/c/c.html",
    "revision": "447a16a4d0036b939e9661c76cc7f7f1"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "ab3dde5a7a4fa6cafb1efa17f0fcae0c"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "26daee211c082ad25b0105b1baaa6b76"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "174b6c2fc8409d749e147cec7a7de185"
  },
  {
    "url": "computer/python/python.html",
    "revision": "11e42dc9dd73e5df4bc146204a749b9a"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "f335ebde1e3d8debe0f577f1ac45fed5"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "cb0154e02828e73c2eb0bc7b550b4dd9"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "947c8c2a16eee7667eebacd1ba61ec5a"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "b5df42a48d0eda421afc73da4c885e5d"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "16f84948d2db44548cbeb46b3b2c76b2"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "687c67025651db637588ce9208c06fcd"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "360e930f754878dba5e004b78caf742c"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "f9671a26f51d5ac40e041e38cfc1da24"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "19f36e4046f24594f86b9157da2a237f"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "90a92b096ae9989b85b196e843103215"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "7c7a7fe9242b7277c54a8530215be3b4"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "35dffdf007459d34106e21160f05e11a"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "3cf9b486e9150eaf7dafbf38832cf7c7"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "dc509f4d795a469c46cb193b8186b824"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "d584e9e61faa69e11ee815d365609e8d"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "171a7e395f1ecf162dfceb55d23099ae"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "481c6536ac099c2b48e4ebed54e5e672"
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
    "revision": "fabadf70cd7ba627417b46bfc0821a66"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "37419aefc109c4c28c153bd87410b3cb"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "92c920339239d205b08a62215151c87e"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "afdf0d3c30e3d598e7da9286fcdafd91"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "18ee2a9d667cb1f332debdcc768fc207"
  },
  {
    "url": "physics/光学.html",
    "revision": "1c28cefcdcf4d198a24b575511b47b95"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "113eecc12e2bf40c5e59f406313ab266"
  },
  {
    "url": "physics/力学.html",
    "revision": "5943de313d99b33db779d55009e2234a"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "9043d21cbea927abca1b3c03f5464db3"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "5298d92e4d1839a0a5f2d350fcc901df"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "92668b70abfd820ce22a36e7ec9a1eda"
  },
  {
    "url": "physics/热学.html",
    "revision": "cb7044c39863f3960c920c3a915738d6"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "840fa7489ff9980ca7abde229f9f368b"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "cbe71d3bb30124de599af10b3e317343"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "8523201c42550fdbfa25db412b325d91"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "58de66a087c8afb577c1b56f822df97f"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "beb1bbdb2ad295f1de7d50064bc9ca48"
  },
  {
    "url": "web/html/css.html",
    "revision": "ac0ae5846a49d5a7479e829eddc1e7fe"
  },
  {
    "url": "web/html/html.html",
    "revision": "036c5d07c9d7984676f91798463ff490"
  },
  {
    "url": "web/html/实例.html",
    "revision": "cad6c829829d09134afafd99194bb1a3"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "790ed6fddb4b287faabe6c34aeec7527"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "df4c6f75fd96eef0e0abfb6105b8af13"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "69857e913a0749a7b0ee4fe6d4c4a6f1"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "77d437190bb37e4b40759a50e3713c5d"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "dfc85888dbb96e909d5e3b4a3a86a25e"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "07bb75858e3057e967049b41bb18bee7"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "8726e2a952c0ad67b839ca12e6d97ba4"
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

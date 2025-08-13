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
    "revision": "31f54305c7453190a15b2310830eee9d"
  },
  {
    "url": "addition/git.html",
    "revision": "3c96ad049c23ebdd8e0403ef6a425a3c"
  },
  {
    "url": "addition/json.html",
    "revision": "aa6de5eebe461f4dbb0b6272e51fb35f"
  },
  {
    "url": "addition/latex.html",
    "revision": "575e3bcb005bce2645d17704be472008"
  },
  {
    "url": "addition/markdown.html",
    "revision": "a9f12e9c084e5cfe51d4b7fd1b90cd3a"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "8bdbe3f9c26413b6f8f6103d8c0f8bee"
  },
  {
    "url": "addition/xml.html",
    "revision": "b51ab43f05fc1c6126e0fb995b3d066a"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "0db74c997da23c644be7533bb9c38031"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "bd8fb5b988ee369c71d950a6b09f4d57"
  },
  {
    "url": "assets/css/0.styles.3b1e8c59.css",
    "revision": "45062dcbcec62094d09f1fa2e07ad386"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35f1bd97.js",
    "revision": "7f15d0b8131f36ab9c61519f8997cf91"
  },
  {
    "url": "assets/js/11.b7a27b21.js",
    "revision": "16b1dd8d6ec777f82fe6a34ecb36d8f4"
  },
  {
    "url": "assets/js/12.399ffa1c.js",
    "revision": "6ba84d65fb910bd78c98fbd2dc148113"
  },
  {
    "url": "assets/js/13.f07bbbc8.js",
    "revision": "4686b5e26d722cadc52577983363c6e9"
  },
  {
    "url": "assets/js/14.af8fa389.js",
    "revision": "3f9f8479ebc4da31086136c7f47c444c"
  },
  {
    "url": "assets/js/15.68d8aff1.js",
    "revision": "f4171d1adadb0cb4e90fd3eb3d80b5ed"
  },
  {
    "url": "assets/js/16.211614af.js",
    "revision": "0c2181fcbb6d0c35e11d3ec5ab5b3096"
  },
  {
    "url": "assets/js/17.59b5a50d.js",
    "revision": "a0a98b43d5b4dd0d4a311e70e865cd88"
  },
  {
    "url": "assets/js/18.3c65c578.js",
    "revision": "1e888ed867821210103a776df7d974bb"
  },
  {
    "url": "assets/js/19.2438d003.js",
    "revision": "b1c9334b9d02d1ce556c602395ed4b40"
  },
  {
    "url": "assets/js/20.db4081be.js",
    "revision": "e19a3fdeb67d571228109847533f8add"
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
    "url": "assets/js/24.6c132bcc.js",
    "revision": "13db5ca74fc21d6b78b2e95ab8392cfb"
  },
  {
    "url": "assets/js/25.3e619397.js",
    "revision": "58a06e85954c806c72f4e1adbce3e5aa"
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
    "url": "assets/js/29.55d4651a.js",
    "revision": "da4e097e1fb3480f5d034714d8966a8f"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.66038076.js",
    "revision": "5a3d577bf21c8762bb7c24ef0b27bf03"
  },
  {
    "url": "assets/js/31.74bd103f.js",
    "revision": "1bdbe1db2398c7bbadaef02239a59125"
  },
  {
    "url": "assets/js/32.32582265.js",
    "revision": "a32096ec012f7dfec85bec3f5f4e8e4d"
  },
  {
    "url": "assets/js/33.2124deaf.js",
    "revision": "012e46c257d6a0abd0260bd80a5b05a9"
  },
  {
    "url": "assets/js/34.c5436438.js",
    "revision": "81a23e3b063485cae92d280f9a905c3d"
  },
  {
    "url": "assets/js/35.0e5313e4.js",
    "revision": "212f424f27ee22e8368cc4e3534c5301"
  },
  {
    "url": "assets/js/36.25a9e8d8.js",
    "revision": "221346ca922e8a0d00e3a8e27e7ce794"
  },
  {
    "url": "assets/js/37.d709c942.js",
    "revision": "48d840ab1b4723d732fb56beeedb46bc"
  },
  {
    "url": "assets/js/38.26f90a98.js",
    "revision": "384dbd663ff11ab423c910ff17bf0df7"
  },
  {
    "url": "assets/js/39.0cead029.js",
    "revision": "084585656484811fe0c52533803878fc"
  },
  {
    "url": "assets/js/4.16334225.js",
    "revision": "b3aaae08dfe01defdeb3c30bf0075add"
  },
  {
    "url": "assets/js/40.fe4d2f8d.js",
    "revision": "bf80051d3310330c2e5ba2b87fa6362e"
  },
  {
    "url": "assets/js/41.36d84ca5.js",
    "revision": "cb4c53b8b391f7e619f30cb77bbaf4e9"
  },
  {
    "url": "assets/js/42.05464703.js",
    "revision": "c74e0a4bc3a55bc82857cf13d0b040ad"
  },
  {
    "url": "assets/js/43.0ddd7a9b.js",
    "revision": "98c1265d4b7904e6ed2ea550eccc106d"
  },
  {
    "url": "assets/js/44.b9f9d069.js",
    "revision": "cf4423e3aba159424a647b50b1917544"
  },
  {
    "url": "assets/js/45.47eb99e7.js",
    "revision": "a41523b7ca87542b01850c3d245b31e0"
  },
  {
    "url": "assets/js/46.a515d73a.js",
    "revision": "393894c6783bd70920f75747a143c5f7"
  },
  {
    "url": "assets/js/47.f89fa3c5.js",
    "revision": "5fcc9f9b6f6091479b94617fc6ba11da"
  },
  {
    "url": "assets/js/48.3fefc3da.js",
    "revision": "5ebb4e8dd3a8bf937745bd29d5651da9"
  },
  {
    "url": "assets/js/49.23deb2b9.js",
    "revision": "cd4791f2b77ecee14158000e6770413c"
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
    "url": "assets/js/51.eb330545.js",
    "revision": "fef9ffff975d4aa400696f186e04b07b"
  },
  {
    "url": "assets/js/52.54bf24c7.js",
    "revision": "e65d138d48f301eeebd28ed4ecc48a75"
  },
  {
    "url": "assets/js/53.319357f2.js",
    "revision": "82cd3a3235b0a172d7293e28ad947116"
  },
  {
    "url": "assets/js/54.e0deeb62.js",
    "revision": "b7abf0889e733f1ecf8e3d0e7b721ae6"
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
    "url": "assets/js/59.351c8a2a.js",
    "revision": "433aa051b1e29077bfe8a4ae1bffc6f2"
  },
  {
    "url": "assets/js/6.fc81bfe8.js",
    "revision": "71a87bbc1360d18adde664a2fd4b7632"
  },
  {
    "url": "assets/js/60.d58de428.js",
    "revision": "09ecbab1a82b78553c0e794e48e294cd"
  },
  {
    "url": "assets/js/61.048d97cc.js",
    "revision": "52658fca5536753eb2fe84bc5274ed9b"
  },
  {
    "url": "assets/js/62.5409ea7b.js",
    "revision": "655838feab3169477d0e0f1c9f78ea84"
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
    "url": "assets/js/66.02706e9f.js",
    "revision": "428eb7aa799f67f3fec60c47fbd648a4"
  },
  {
    "url": "assets/js/67.b4051fab.js",
    "revision": "7e86d189b1d6f524bec0440960648a05"
  },
  {
    "url": "assets/js/68.f68d38bb.js",
    "revision": "d791358eb00e624baff944a6f20feff3"
  },
  {
    "url": "assets/js/69.23e10ebe.js",
    "revision": "6964783ebaea42cce86c5d1769b0517c"
  },
  {
    "url": "assets/js/7.86f37046.js",
    "revision": "15518e66a31bbd4bc2f3567409ee4888"
  },
  {
    "url": "assets/js/70.b70c3d4b.js",
    "revision": "f79c1a4e6ac922e2eb84a204b42cef8c"
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
    "url": "assets/js/8.6a1a59fd.js",
    "revision": "9bee9c205d73178e061ef7cb5b211d06"
  },
  {
    "url": "assets/js/9.c13a85dc.js",
    "revision": "8b2fc1d8e5263ae6b2c99363488e2ef9"
  },
  {
    "url": "assets/js/app.8381300e.js",
    "revision": "8810e487546bcd8988287c449fc0d71e"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "f282c665a86e3bc2bc408acfdddfa9b8"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "9655ad9b8c5f97bf234c396df25a9557"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "28ea816d4cb5c99cdadbea2f0c851fae"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "d340ce0b634a603e616cbda74d32d5c6"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "654ee2f50bad21e476c6d9da47b2be86"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "bac6a9a8687249741c4acee44dacff5e"
  },
  {
    "url": "computer/c/c.html",
    "revision": "64a654d5756cc9df511f12eb6087ce5b"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "726f7e59062b8b1dd3edd420f2eccb58"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "d602815806614f1c66beac98a1a0b3a6"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "9acbeda1573df6687c453371d6663d02"
  },
  {
    "url": "computer/python/python.html",
    "revision": "b296cbe9d0a079494944762feb9928fe"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "9c88d47b841a92bff57074e1a1bb2d9c"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "9303f7d47c1df55d28fd9facc47f2284"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "745e6f5add396fbf5d06b21e564c4843"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "e75b25f470038bbacc0547bbc1f36802"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "41cc4f718d08244a0f679e9636813bc8"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "b3d05c2d5a7bc1aebd0b85295a225dc8"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "d949d10b4b23ddb6d6ddfae4f3b1d65c"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "9ed8c589ef8f8ca5debb9369748500f7"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "643a814430da0a840eb96fd509e09b40"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "5b4001e0518832578626b39c5c166997"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "c8e45d73b9ea828222fb56dd068fc2f3"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "644ec390f058b860e8ff58d5d791efec"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "d58572923f469185774086d5aebbc981"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "d3fec744f9b320b9472c40fdde7d2c5b"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "4008b440a5288523903050d01f9e5af7"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "809af61aa89abce12b9593efca5d65d3"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "1824cd954639a735b9827701bb330642"
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
    "revision": "1041534184efcd873748b05c56cdb43a"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "cc743bcbb9c632508f8d23e5635483ef"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "6cfebadd16030478ecf1d454835b8828"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "e55fe9c10f4c4a22b06c4baddb5f8133"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "8d28ee4861f8cf67bf3a306fab9d25c2"
  },
  {
    "url": "physics/光学.html",
    "revision": "fdb44833fb80cb2b4a4ff91b66236a13"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "8a7ed135ca36775e368464c05d9c7c91"
  },
  {
    "url": "physics/力学.html",
    "revision": "962717452e4b2081759b375710b747c5"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "f3863d8872aafd8f3973c7fb74e731df"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "c662730a598bea5f439e5cd39f282e7c"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "8f23bc23cfb021bedced810bd6f6c747"
  },
  {
    "url": "physics/热学.html",
    "revision": "a642378c4742f4135839b0365a3f0485"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "6df8c263a0003d6ea3ab3dd7df357373"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "fadf3349ba2c7d631378dd1ec51e488b"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "a24088923502a8364a0b05add4c55c96"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "84418edb0bb59457bcd5afe4778d49b8"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "ed77a7021f177028cc35ae118e76355a"
  },
  {
    "url": "web/html/css.html",
    "revision": "7aa2adc5f2c08bc3661f85b07c1993d7"
  },
  {
    "url": "web/html/html.html",
    "revision": "49358b53012e763258a3fdd4dc9f5e84"
  },
  {
    "url": "web/html/实例.html",
    "revision": "01e84641357bbd784cc6bde94d0475eb"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "eb524788d4cd8d39bd9a3885fa7adb00"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "aa64dc96ab0b67741932ca13108b5094"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "dfa20ef9aaccf7104128a3944a813bd5"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "3513ad733a9029ecaba5f875b99c7c18"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "33e7c34fdacee84464b54fc5ac99d8ef"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "d9e7dc7644a11588aedfff8b1738404d"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "e1b129423289ebb5c8de0c0f43d9a146"
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

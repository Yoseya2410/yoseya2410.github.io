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
    "revision": "2304601cce6ef488cc86397940ed0923"
  },
  {
    "url": "addition/git.html",
    "revision": "eb7abe7e7fcb5f65c648d1a6d68c0c75"
  },
  {
    "url": "addition/json.html",
    "revision": "e6b9885bbcab0381e5c2f28a63e8226a"
  },
  {
    "url": "addition/latex.html",
    "revision": "636db2f41a59ea6883b58fa66ed7fd62"
  },
  {
    "url": "addition/markdown.html",
    "revision": "0419dc79d134e55e0e0e03d970864627"
  },
  {
    "url": "addition/vuepress.html",
    "revision": "c3d746d26492ec4c5e8f9dc1c0d6967f"
  },
  {
    "url": "addition/xml.html",
    "revision": "1696c25e55c185949bc741f31b15dd5c"
  },
  {
    "url": "addition/公式推导.html",
    "revision": "cdf311a83f25da8f527a44ca504890d9"
  },
  {
    "url": "addition/浏览器扩展开发.html",
    "revision": "6692fe3f9e9e9660e29957d58de48619"
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
    "url": "assets/js/11.e6876fe2.js",
    "revision": "a7b231fd4cfd6f5fdba5789b0dea92ce"
  },
  {
    "url": "assets/js/12.7f27b2b9.js",
    "revision": "02a731adb80982264804baaa8c7212d5"
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
    "url": "assets/js/15.68d8aff1.js",
    "revision": "f4171d1adadb0cb4e90fd3eb3d80b5ed"
  },
  {
    "url": "assets/js/16.ea59e35d.js",
    "revision": "5d97f9d43a799788745a0d227a9dc260"
  },
  {
    "url": "assets/js/17.59b5a50d.js",
    "revision": "a0a98b43d5b4dd0d4a311e70e865cd88"
  },
  {
    "url": "assets/js/18.58dc0191.js",
    "revision": "309bccb23b880aac7ea7b232ed6a0489"
  },
  {
    "url": "assets/js/19.2438d003.js",
    "revision": "b1c9334b9d02d1ce556c602395ed4b40"
  },
  {
    "url": "assets/js/20.25bbf346.js",
    "revision": "16d01a360044189d5cb0c1508e46121a"
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
    "url": "assets/js/25.9f0f5096.js",
    "revision": "f7e1630cfd2506c618006d09c47c1a2e"
  },
  {
    "url": "assets/js/26.6762ed90.js",
    "revision": "e435da93a024a34e756e80297864c86a"
  },
  {
    "url": "assets/js/27.78cdf6ca.js",
    "revision": "239e6aa3f6972bf1ef88516febce398b"
  },
  {
    "url": "assets/js/28.44dc3d26.js",
    "revision": "8ea550554addccf22fb52753dbc37ed8"
  },
  {
    "url": "assets/js/29.33b19c14.js",
    "revision": "bf6e55fdfc5a4ea0ecc164b7ccde4542"
  },
  {
    "url": "assets/js/3.107e051b.js",
    "revision": "b0198408ea99fe4a38749e3bd363df34"
  },
  {
    "url": "assets/js/30.12103411.js",
    "revision": "3509541e74e0c0a10b02838c762d90fc"
  },
  {
    "url": "assets/js/31.ed938d35.js",
    "revision": "20c82dbe84c27c1af52c32c7e73236b8"
  },
  {
    "url": "assets/js/32.62b086d4.js",
    "revision": "c619f3e1ae57de59116913870110a8dc"
  },
  {
    "url": "assets/js/33.d0e77a2a.js",
    "revision": "a8b76ad47f5403354951ccf3d391e7b9"
  },
  {
    "url": "assets/js/34.18e92e3a.js",
    "revision": "e411e79b75e92e26db6bb4b0d0613408"
  },
  {
    "url": "assets/js/35.d6c54db9.js",
    "revision": "570af91d4db7d1778bb9e2d3c180b880"
  },
  {
    "url": "assets/js/36.a776fa19.js",
    "revision": "ed5232025b877b295d7cbff05206a932"
  },
  {
    "url": "assets/js/37.1472c02c.js",
    "revision": "847d86ea2df01d2d4cc89471bcfb249a"
  },
  {
    "url": "assets/js/38.598f12a9.js",
    "revision": "651a1bb36fcd29219b37a5b2c13b820a"
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
    "url": "assets/js/41.e03182fe.js",
    "revision": "faccefe14a596079c73d4d21c2e5c0b6"
  },
  {
    "url": "assets/js/42.a24eaacd.js",
    "revision": "fde0a37080c275605a8777ac64e3d445"
  },
  {
    "url": "assets/js/43.3bd304bb.js",
    "revision": "5f6dba6c0e35386116ac877a60eac796"
  },
  {
    "url": "assets/js/44.35015af8.js",
    "revision": "d6b552d829e0f76c45199a7efcca3f07"
  },
  {
    "url": "assets/js/45.b42186ce.js",
    "revision": "bbaf09b2fe9ca8018b3c80f6aaacae3e"
  },
  {
    "url": "assets/js/46.7d212149.js",
    "revision": "b80db097b03fbd34b975dcbfe6fa85e9"
  },
  {
    "url": "assets/js/47.27161a27.js",
    "revision": "94e0e40b8312b15143d496484982a8ad"
  },
  {
    "url": "assets/js/48.2e0090b8.js",
    "revision": "33b69dfd6322905583db6dda737f8fc4"
  },
  {
    "url": "assets/js/49.1a7147a9.js",
    "revision": "0f4106c5382f4909ba491f2c2231b88f"
  },
  {
    "url": "assets/js/5.56dd59ee.js",
    "revision": "dc5f21833f9e5f89306f5b08ad2c9424"
  },
  {
    "url": "assets/js/50.bc2e351e.js",
    "revision": "32b76f8c65dbd7ba41a42cc07021d004"
  },
  {
    "url": "assets/js/51.6abdf538.js",
    "revision": "c10d2bec47fc981ca20bf7639daf476a"
  },
  {
    "url": "assets/js/52.5f3bb057.js",
    "revision": "a85e6d211b10804149c2c60e533ab931"
  },
  {
    "url": "assets/js/53.7a029e2f.js",
    "revision": "dddfcc6f6bdb0873afcb815ca56977c8"
  },
  {
    "url": "assets/js/54.108bded5.js",
    "revision": "00d5352fe57bbd90b2acc8ca200ba266"
  },
  {
    "url": "assets/js/55.527b0cde.js",
    "revision": "e1240bf729be79e3302deeb760211a03"
  },
  {
    "url": "assets/js/56.cd825588.js",
    "revision": "22efe73adf6a34970253e65c1dcf8682"
  },
  {
    "url": "assets/js/57.c348a44f.js",
    "revision": "3d905e70cef63194fcbeaedc9850c38e"
  },
  {
    "url": "assets/js/58.27bab74a.js",
    "revision": "08c975471aa1a07cbb722a39f351a0cf"
  },
  {
    "url": "assets/js/59.09773648.js",
    "revision": "759e3e2a5a7d734f12edb3ebd22f3aef"
  },
  {
    "url": "assets/js/6.3712678b.js",
    "revision": "c8dac902c667c83941b8647430208808"
  },
  {
    "url": "assets/js/60.c86435c6.js",
    "revision": "fd894ce5287da50447b531dd04c55892"
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
    "url": "assets/js/64.36bdf83b.js",
    "revision": "a053dd1bc6d22089bf850ec3a77c34e9"
  },
  {
    "url": "assets/js/65.e76b0bdb.js",
    "revision": "4c84b4c53dd72055638d0666ffc814d6"
  },
  {
    "url": "assets/js/66.25d5c24a.js",
    "revision": "f18babdd5414659d754745d350e4ad60"
  },
  {
    "url": "assets/js/67.98a05b90.js",
    "revision": "92cf9fec39f559340e001c7272ada78d"
  },
  {
    "url": "assets/js/68.6797575a.js",
    "revision": "2e474ede6ca138018c103ecfa393cf3c"
  },
  {
    "url": "assets/js/69.3c48aaa4.js",
    "revision": "bbc6d50125dcd16edde80caa4e3ff7ad"
  },
  {
    "url": "assets/js/7.72cd435d.js",
    "revision": "f3455dfc88281262c49b92030b3b5b34"
  },
  {
    "url": "assets/js/70.c9204003.js",
    "revision": "ca53ed44806ad37614f857a7027b1901"
  },
  {
    "url": "assets/js/71.c64f2851.js",
    "revision": "f20d5428a91a8e052949385bb3caba2b"
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
    "url": "assets/js/app.3c2f8f21.js",
    "revision": "a89442178887384db55d109ab12d4dd9"
  },
  {
    "url": "assets/js/vendors~docsearch.b132aabe.js",
    "revision": "397aede64b8da7855b9dc4b0c918bc44"
  },
  {
    "url": "communication/信号与系统.html",
    "revision": "e138c86e04bed0156ea3161c20cb1fb9"
  },
  {
    "url": "communication/信息论与编码.html",
    "revision": "03e379999ac2a54666edaf46db06c7c9"
  },
  {
    "url": "communication/微波技术与天线.html",
    "revision": "ddb0e5b270d3f75512703be2f72f420c"
  },
  {
    "url": "communication/电磁波与电磁场.html",
    "revision": "eccac6b83b89feee9142bfc0bfeda69a"
  },
  {
    "url": "communication/通信原理.html",
    "revision": "89f492d56282e3643ddd1ff16a8cd67c"
  },
  {
    "url": "computer/AI/机器学习.html",
    "revision": "8a7a178c1d0b6ec71e51a326e59d8bcb"
  },
  {
    "url": "computer/c/c.html",
    "revision": "cc489dda614ec526e3aa86e0c07b7c26"
  },
  {
    "url": "computer/c/参考.html",
    "revision": "573e138f7c04c47e5e8578065b7d3390"
  },
  {
    "url": "computer/c/实例.html",
    "revision": "9db3b0eeeddfed288dbac4c21355b646"
  },
  {
    "url": "computer/cpp/cpp.html",
    "revision": "269f5d2660d15148e016e7b8acb6fbad"
  },
  {
    "url": "computer/Java/java.html",
    "revision": "665941ab4605277351c639724fe5dc23"
  },
  {
    "url": "computer/python/python.html",
    "revision": "c623bc04af4b80ff17e54d068e2260b3"
  },
  {
    "url": "computer/python/参考.html",
    "revision": "f59724068f8517128534abeaf47a92e5"
  },
  {
    "url": "computer/python/实例.html",
    "revision": "8bbc125a73cf98b36269922fb1b512cc"
  },
  {
    "url": "computer/嵌入式/8051.html",
    "revision": "c069ab784a5cf9d7d7e55a1e1d5a2873"
  },
  {
    "url": "computer/嵌入式/esp32.html",
    "revision": "33551a45acdc0f839f28b11d0ba8d988"
  },
  {
    "url": "computer/嵌入式/STM32.html",
    "revision": "40a924033fb69ecd2dfc19311d1efdaa"
  },
  {
    "url": "computer/操作系统/HarmonyOS.html",
    "revision": "439677e4c3b99925dd9fb898821a4510"
  },
  {
    "url": "computer/操作系统/Linux.html",
    "revision": "f7b926ac80c0a6882bb2d6d02cdd6246"
  },
  {
    "url": "computer/操作系统/操作系统.html",
    "revision": "c9aa9e059932eeec9c3639e45f993a3f"
  },
  {
    "url": "computer/数据库/数据库应用.html",
    "revision": "6c79a15d4f3ad617e9351cdf0a4a8cad"
  },
  {
    "url": "computer/数据结构与算法.html",
    "revision": "46275f27bc8f022d1cf6a67a4cb73e0a"
  },
  {
    "url": "computer/离散数学.html",
    "revision": "98886ab2df354b4ca665a92d558e20a0"
  },
  {
    "url": "computer/计算机组成原理.html",
    "revision": "6cef88b3d11b8aff829942af648603a3"
  },
  {
    "url": "computer/计算机网络.html",
    "revision": "b8796089fd1eef8970a81c740177e1f1"
  },
  {
    "url": "electronics/数字信号处理.html",
    "revision": "87a0c0397f85f7c9e20a56b2912dc87d"
  },
  {
    "url": "electronics/数字电子技术.html",
    "revision": "ed467273ecc88fda81099774b99b9874"
  },
  {
    "url": "electronics/模拟电子技术.html",
    "revision": "906da72135db375539c303b0b01703ca"
  },
  {
    "url": "electronics/电路分析.html",
    "revision": "0b2545f686d6519cb17b4ebb7620449f"
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
    "revision": "200ada7cbc74e92c356a011cc5526d96"
  },
  {
    "url": "js/MicrosoftClarity.js",
    "revision": "7c0f91e4cb1e9d387f1bfa6c7d2818af"
  },
  {
    "url": "physics/math/数学分析.html",
    "revision": "fb81025c51fe2e7cf7ad982c76a18848"
  },
  {
    "url": "physics/math/数学物理方法.html",
    "revision": "d41d3e87bc6528361b9b6e0bbb0cce47"
  },
  {
    "url": "physics/math/概率论与数理统计.html",
    "revision": "dfc7e15278d48ea316dc978112cf015f"
  },
  {
    "url": "physics/math/线性代数.html",
    "revision": "a48fd92addfb9ecef3a867c867bd17d6"
  },
  {
    "url": "physics/光学.html",
    "revision": "1c75df26d56f969981f37730d8290583"
  },
  {
    "url": "physics/分析力学.html",
    "revision": "368ee8dbb5b5d9cabc8be767635b39a3"
  },
  {
    "url": "physics/力学.html",
    "revision": "30bb5023f0f183f9084faf772374db89"
  },
  {
    "url": "physics/原子物理.html",
    "revision": "4de35785fe7265a4f9199e968fc12c6e"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理1.html",
    "revision": "a4be8ac2aaa54d1e135361335f989fc1"
  },
  {
    "url": "physics/热力学与统计物理/热力学与统计物理2.html",
    "revision": "e7c107a0e432c317232bca76518d161a"
  },
  {
    "url": "physics/热学.html",
    "revision": "5501401178a98ff7fbf225eff0ac0e3b"
  },
  {
    "url": "physics/电动力学.html",
    "revision": "0dccad9bd391ba3b005e201db7cfd89a"
  },
  {
    "url": "physics/电磁学.html",
    "revision": "1d0be3b07053b17622a06992f0fa482e"
  },
  {
    "url": "physics/量子力学/量子力学1.html",
    "revision": "63196a47d8616b6b5f2ab2894c2ff780"
  },
  {
    "url": "physics/量子力学/量子力学2.html",
    "revision": "6b276e836626e859e1063539f7673994"
  },
  {
    "url": "physics/量子力学/量子力学3.html",
    "revision": "8ff90abea11b0e55b29d8b6467828687"
  },
  {
    "url": "web/html/css.html",
    "revision": "aaf44ac9cb143a262ca545efe2c74fac"
  },
  {
    "url": "web/html/html.html",
    "revision": "e176c59e03ba36813a33a5ec580b8aac"
  },
  {
    "url": "web/html/实例.html",
    "revision": "27463b03faba81773e18154aa79a4f36"
  },
  {
    "url": "web/javascript/JavaScript.html",
    "revision": "a3992843ffb7d74b34fad26b9c47fdc0"
  },
  {
    "url": "web/javascript/nodejs.html",
    "revision": "14be2f3a21874b68d899b2b81bb6121b"
  },
  {
    "url": "web/javascript/typescript.html",
    "revision": "e4bbae35f3aac763b7da06fc017e179c"
  },
  {
    "url": "web/javascript/Vue.html",
    "revision": "7f3f0691376c325f2958d8c9573bc265"
  },
  {
    "url": "web/javascript/WebAssembly.html",
    "revision": "691a6805ca24589fe80976289ec1f3a1"
  },
  {
    "url": "web/javascript/参考.html",
    "revision": "5bceef5e19f4e050c1f147848fb31315"
  },
  {
    "url": "web/javascript/实例.html",
    "revision": "782a4423df7b24eb6bb96d52bdce8312"
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

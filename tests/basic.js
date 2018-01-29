(function (global) {

  var nodejs = false;
  if (!global._ && typeof module !== 'undefined' && module.exports) {
    chai = require('chai');
    expect = chai.expect;
    SUA = require("../sua.js");
    nodejs = true;
    console.log("mode: node.js");
  }

  var iosVersionCheck = function (sua, target) {
    var min = 3;
    var max = 11;
    for (var i = min; i <= max; i++) { // IOS 3->9
      if (i == target) {
        expect(sua['ios' + target]).be.ok;
      } else {
        expect(sua['ios' + i]).be.not.ok;
      }
    }
  }


  var useragents = {
    "Android2.1": [
      'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonSO-01B Build/2.0.2.B.0.29) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
    ],
    "Android2.2": [
      'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Full Android Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
    ],
    "Android2.3": [
      'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SC-02C Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; INFOBAR A01 Build/S9081) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; 001HT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonX10i Build/3.0.1.G.0.75) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; INFOBAR A01 Build/S9081) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1', // INFOBAR A01
      'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SBM005SH Build/S4080) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1', // GALAPAGOS 005SH
      'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; IS05 Build/S9290) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      'Mozilla/5.0 (Linux; U; Android 2.3.5; ja-jp; F-05D Build/F0001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
      'Mozilla/5.0 (Linux; U; Android 2.3.5; ja-jp; T-01D Build/F0001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
    ],
    "Android3.x": [
      'Mozilla/5.0 (Linux; U; Android 3.0.1; ja-jp; MZ604 Build/H.6.2-20) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
      'Mozilla/5.0 (Linux; U; Android 3.1; en-us; K1 Build/HMJ37) AppleWebKit/534.13(KHTML, like Gecko) Version/4.0 Safari/534.13',
      'Mozilla/5.0 (Linux; U; Android 3.1; ja-jp; AT100 Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
      'Mozilla/5.0 (Linux; U; Android 3.1; ja-jp; Sony Tablet S Build/THMAS10000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
      'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; SC-01D Build/MASTER) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
      'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; AT1S0 Build/HTJ85B) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
      'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; F-01D Build/F0001) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
      'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
      'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; A01SH Build/HTJ85B) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1',
      'Mozilla/5.0 (Linux; U; Android 3.2.1; ja-jp; Transformer TF101 Build/HTK75) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
      "Mozilla/5.0 (Linux; U; Android 4.1.1; ja-jp; SC-03E Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
      "Mozilla/5.0 (Linux; Android 4.1.1; SC-03E Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
    ],
    "Android4.x": [
      'Mozilla/5.0 (Linux; U; Android 4.0.1; ja-jp; Galaxy Nexus Build/ITL41D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      'Mozilla/5.0 (Linux; U; Android 4.0.3; ja-jp; URBANO PROGRESSO Build/010.0.3000) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      'Mozilla/5.0 (Linux; U; Android 4.0.3; ja-jp; Sony Tablet S Build/TISU0R0110) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
      'Mozilla/5.0 (Linux; U; Android 4.0.4; ja-jp; SC-06D Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      'Mozilla/5.0 (Linux; U; Android 4.1.1; ja-jp; Galaxy Nexus Build/JRO03H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03S) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
    ],
    "Android5.0": [
      'Mozilla/5.0 (Linux; Android 5.0.2; D5833 Build/23.2.A.1.62) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.92 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.2; D6633 Build/23.1.1.E.0.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.92 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.2; Nexus 7 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.2; Nexus 10 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.89 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.2; SC-04G Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.2; SGP621 Build/23.1.A.0.726) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.2; SH-03G Build/S5150) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.92 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.1; Nexus 4 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.1; Nexus 5 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.108 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.1; Nexus 6 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.89 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.1; Nexus 7 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0.1; Nexus 9 Build/LRX22C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0; ASUS_Z00AD Build/LRX21V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0; Nexus 5 Build/LRX21O) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0; Nexus 7 Build/LRX21P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0; Nexus 10 Build/LRX21P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.0; SC-04F Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.92 Mobile Safari/537.36',
    ],
    "Android5.1": [
      'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.92 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 7 Build/LMY47V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.92 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 9 Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.1; Nexus 4 Build/LMY47O) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.1; Nexus 5 Build/LMY47I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.92 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.1; Nexus 6 Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.1; Nexus 7 Build/LMY47D) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 5.1; Nexus 7 Build/LMY47O) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.111 Safari/537.36',
    ],
    "Android6.0": [
      'Mozilla/5.0 (Linux; Android 6.0.1; 404SC Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; F-02H Build/V15R049A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; HTV32 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/MMB29Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5 Build/MOB30M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MHC19Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MTC19V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6 Build/MMB29X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6 Build/MOB30I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6 Build/MOB30M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MTC19V) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MMB29O) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 9 Build/MMB29S) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 9 Build/MOB30P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; SC-02H Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; SC-05G Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; SCV33 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; SGP612 Build/23.5.A.0.570) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; SOV33 Build/35.0.D.0.326) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 6.0.1; STV100-3 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.81 Mobile Safari/537.36',
    ],
    "Android7.0": [
      "Mozilla/5.0 (Linux; Android 7.0; KYV40 Build/XXXX) AppleWebkit/537.36 (KHTML,like Gecko) Chrome/54.0.2840.85 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.0; KYV40 Build/XXXX.; wv) AppleWebkit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/54.0.2840.85 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.0; 507SH Build/S1005) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.0; Nexus 5X Build/N5D91L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.0; Nexus 5X Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.0; Nexus 6 Build/NBD90Z) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.0; Nexus 6P Build/NBD91K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.0; Nexus 9 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Safari/537.36",
    ],
    "Android7.1": [
      "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 5X Build/N4F26I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6P Build/N4F26I) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6P Build/N4F26J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 7.1.1; Nexus 9 Build/N4F26M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Safari/537.36",
    ],
    "Android8.0": [
      'Mozilla/5.0 (Linux; Android 8.0.0; Pixel XL Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36',
      'Mozilla/5.0 (Linux; Android 8.0.0; Pixel Build/OPR3.170623.007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.98 Mobile Safari/537.36',
    ],
    "IOS4": [
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0_1 like Mac OS X; ja-jp) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A306 Safari/6531.22.7',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0_2 like Mac OS X; ja-jp) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; ja-jp) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8G4 Safari/6533.18.5',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_4 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8K2 Safari/6533.18.5',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_5 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8L1',
    ],
    "IOS5": [
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9A334 Safari/7534.48.3',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9A405 Safari/7534.48.3',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3',
    ],
    "IOS6": [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25',
    ],
    "IOS7": [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OSX) AppleWebKit/546.10 (KHTML, like Gecko) Version/6.0 Mobile/7E18WD',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.40 (KHTML, like Gecko) Version/6.0 Mobile/11A4372q Safari/8536.25'
    ],
    "IOS8": [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H143 Safari/600.1.4',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4',
    ],
    "IOS9": [
      'Mozilla /5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A344 Safari/601.1',
    ],
    "IOS10": [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1'
    ],
    "IOS11": [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
    ],
    "IOS4-ipad": [
      'Mozilla/5.0 (iPad; U; CPU OS 4_2 like Mac OS X; zh-cn) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8C134',
      'Mozilla/5.0 (iPad; U; CPU OS 4_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',
      'Mozilla/5.0 (iPad; U; CPU OS 4_3_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8G4 Safari/6533.18.5',
      'Mozilla/5.0 (iPad; U; CPU OS 4_3_2 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5',
      'Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
      'Mozilla/5.0 (iPad; U; CPU OS 4_3_4 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8K2 Safari/6533.18.5',
      'Mozilla/5.0 (iPad; U; CPU OS 4_3_5 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8L1 Safari/6533.18.5',
    ],
    "IOS5-ipad": [
      'Mozilla/5.0 (iPad; CPU OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3',
      'Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3',
    ],
    "IOS6-ipad": [
      'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25',
    ],
    "IOS7-ipad": [
      'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53',
      'Mozilla/5.0 (iPad; CPU OS 7_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D167 Safari/9537.53',
      'Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D257 Safari/9537.53',
    ],
    "IOS8-ipad": [
      'Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4',
      'Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B410 Safari/600.1.4',
      'Mozilla/5.0 (iPad; CPU OS 8_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12D508 Safari/600.1.4',
      'Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F69 Safari/600.1.4',
      'Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H143 Safari/600.1.4',
      'Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4',
    ],
    "IOS9-ipad": [
      'Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A344 Safari/601.1',
    ],
    "IOS10-ipad": [
      'Mozilla/5.0 (iPad; CPU OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1'
    ],
    "IOS11-ipad": [
      'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.25 (KHTML, like Gecko) Version/11.0 Mobile/15A5304j Safari/604.1',
    ],
    "BlackBerry": [
      'BlackBerry9000/4.6.0.224 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/220',
      'BlackBerry9300/5.0.0.1007 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/220',
      'BlackBerry9700/5.0.0.1014 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/220',
      'Mozilla/5.0 (BlackBerry; U; BlackBerry 9700; ja) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.570 Mobile Safari/534.8+',
      'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; ja) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.587 Mobile Safari/534.8+',
      'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; ja) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.74 Mobile Safari/534.11+',
    ],
    "WebOS": [
      'Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0',
      'Mozilla/5.0 (webOS/1.4.1.1; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0',
      'Mozilla/5.0 (Linux; webOS/2.1.2; U; xx-xx) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.11 Safari/534.6 Pre/3.0',
      'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0',
      'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0',
    ],
    "TouchPad": [
      'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0',
      'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0',
    ],
    "Kindle": [
      'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600×800; rotate',
      'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Kindle Fire Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
    ],
    "Silk": [
      'Mozilla/5.0 (Linux; U; locale; product-model Build/product-build) AppleWebKit/webkit-version (KHTML, like Gecko) Silk/browser-version Safari/webkit-version Silk-Accelerated=cloud-browsing-state',
      'Mozilla/5.0 (Linux; U; Android android-version; locale; product-model Build/product-build) AppleWebKit/webkit-version (KHTML, like Gecko) Silk/browser-version Mobile Safari/webkit-version Silk-AcEcelerated=cloud-browsing-state',
    ],
    "BB10": [
      'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1 (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1',
      'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10 (KHTML, like Gecko) Version/10.0.10.648 Mobile Safari/537.10',
    ],
    "rimtabletos": [
      'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.0.1; en-US) AppleWebKit/535.8+ (KHTML, like Gecko) Version/7.2.0.1 Safari/535.8+',
    ],
    "DS": [
      'Mozilla/5.0 (Nintendo 3DS; U; ; ja) Version/1.7412.JP',
      'Opera/9.50 (Nintendo DSi; Opera/483; U; en-GB)',
    ],
    "PSP": [
      'Mozilla/4.0 (PSP PlayStation Portable); 2.00)',
    ],
    "PSVita": [
      'Mozilla/5.0 (PlayStation Vita 1.50) AppleWebKit/531.22.8 (KHTML, like Gecko) Silk/3.2',
    ],
    "WindowsPhone7": [
      "Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)"
    ],
    "WindowsPhone7.5": [
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)"
    ],
    "WindowsPhone8": [
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)"
    ],
    "Safari": [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.71 (KHTML, like Gecko) Version/6.1 Safari/537.71",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.71 (KHTML, like Gecko) Version/6.1 Safari/537.71"
    ],
    "Xbox": [
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; Xbox)",
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)"
    ],
    "ie12edge": [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240", // 64bit
      "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240", // 32bit
    ],
    "ie11": [
      "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; Tablet PC 2.0; rv:11.0) like Gecko",
      "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko",
      "Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
    ],
    "ie10": [
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.3; WOW64; Trident/7.0; Touch; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; Tablet PC 2.0)",
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)",
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)",
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)",
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)",
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Win64; x64; Trident/6.0)",
      "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0)",
    ],
    "ie9": [
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.3; WOW64; Trident/7.0; Touch; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; Tablet PC 2.0)",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; Sleipnir/2.9.8)",
      "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)",
    ],
    "AndroidFirefox": [
      "Mozilla/5.0 (Android; Mobile; rv:14.0) Gecko/14.0 Firefox/14.0",
      "Mozilla/5.0 (Android; Mobile; rv:38.0) Gecko/38.0 Firefox/38.0",
      "Mozilla/5.0 (Android; Tablet; rv:38.0) Gecko/38.0 Firefox/38.0",
    ],
    "TwitterWebView": [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 7_1 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11D167 Twitter for iPhone",
      "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B466 Twitter for iPhone",
      "Mozilla/5.0 (iPad; CPU OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H143 Twitter for iPhone",
      "Mozilla/5.0 (Linux; Android 4.4.4; SOL26 Build/23.0.C.0.350) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36 TwitterAndroid",
      "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 TwitterAndroid"
    ],
    "PCChrome": [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36",
    ],
    "PCFirefox": [
      "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:40.0) Gecko/20100101 Firefox/40.0",
    ],
    "PCSafari": [
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12",
    ],
    "Vivaldi1.6": [
      "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.40",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.40",
      "Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.40",
      "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.40",
      "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.40",
      "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.40",
      "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.40",
      "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.40",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.40",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.46",
      "Mozilla/5.0 (X11; Fedora; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.98 Safari/537.36 Vivaldi/1.6.689.46",
    ],
    "WiiU": [
      "Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.4.2.11 NintendoBrowser/4.3.0.11224.US",
      "Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.28 (KHTML, like Gecko) NX/3.0.3.12.15 NintendoBrowser/4.1.1.9601.JP",
    ],
    "NintendoSwitch": [
      "Mozilla/5.0 (Nintendo Switch; ShareApplet) AppleWebKit/601.6 (KHTML, like Gecko) NF/4.0.0.5.9 NintendoBrowser/5.1.0.13341",
      "Mozilla/5.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/601.6 (KHTML, like Gecko) NF/4.0.0.5.9 NintendoBrowser/5.1.0.13341",
    ],
  };


  describe('basic test', function () {

    it('Exist window.SUA', function () {
      expect(SUA).to.be.an('function');
    });

    it('setup', function () {
      if (!nodejs) {
        var sua = new SUA();
        expect(sua.browser.version).to.be.an('string');
      }
    });

    it('setup parameter', function () {
      var sua = new SUA('Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25');
      expect(sua.iphone[0]).to.be.an("string");
      expect(sua.iphone[0]).to.equal("iPhone OS 6_0");
      console.log(sua);
    });

    it('ua.Android 2.1', function () {
      useragents["Android2.1"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.browser.locale).equal('ja-jp').be.ok

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 2.2', function () {
      useragents["Android2.2"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.browser.locale).equal('ja-jp').be.ok

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 2.3', function () {
      useragents["Android2.3"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.android23).be.ok;
        expect(sua.android4).not.be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.browser.locale).equal('ja-jp').be.ok

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 3.x', function () {
      useragents["Android3.x"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        if (!sua.chrome) {
          expect(sua.browser.locale.length).equal(5).be.ok
        }

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 4.x', function () {
      useragents["Android4.x"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.android23).not.be.ok;
        expect(sua.android4).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        if (!sua.chrome) {
          expect(sua.browser.locale.length).equal(5).be.ok
        }

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 5.0', function () {
      useragents["Android5.0"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.android23).not.be.ok;
        expect(sua.android4).not.be.ok;
        expect(sua.android5).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        if (!sua.chrome) {
          expect(sua.browser.locale.length).equal(5).be.ok
        }

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 5.1', function () {
      useragents["Android5.1"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.android23).not.be.ok;
        expect(sua.android4).not.be.ok;
        expect(sua.android5).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        if (!sua.chrome) {
          expect(sua.browser.locale.length).equal(5).be.ok
        }

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 6.0', function () {
      useragents["Android6.0"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.android23).not.be.ok;
        expect(sua.android4).not.be.ok;
        expect(sua.android5).not.be.ok;
        expect(sua.android6).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        if (!sua.chrome) {
          expect(sua.browser.locale.length).equal(6).be.ok
        }

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 7.0', function () {
      useragents["Android7.0"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.android23).not.be.ok;
        expect(sua.android4).not.be.ok;
        expect(sua.android5).not.be.ok;
        expect(sua.android6).not.be.ok;
        expect(sua.android7).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        if (!sua.chrome) {
          expect(sua.browser.locale.length).equal(7).be.ok
        }

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 7.1', function () {
      useragents["Android7.1"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.android23).not.be.ok;
        expect(sua.android4).not.be.ok;
        expect(sua.android5).not.be.ok;
        expect(sua.android6).not.be.ok;
        expect(sua.android7).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        if (!sua.chrome) {
          expect(sua.browser.locale.length).equal(7).be.ok
        }

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.Android 8.0', function () {
      useragents["Android8.0"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.android23).not.be.ok;
        expect(sua.android4).not.be.ok;
        expect(sua.android5).not.be.ok;
        expect(sua.android6).not.be.ok;
        expect(sua.android7).not.be.ok;
        expect(sua.android8).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        if (!sua.chrome) {
          expect(sua.browser.locale.length).equal(7).be.ok
        }

        expect(sua.os.android).be.ok;
        expect(sua.os.version).be.ok;
      });
    });
    it('ua.iphone (IOS4)', function () {
      useragents["IOS4"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.iphone).be.ok;
        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.iphone).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.table).not.be.ok;
        expect(sua.os.phone).be.ok;
        iosVersionCheck(sua, 4)
      });
    });
    it('ua.iphone (IOS5)', function () {
      useragents["IOS5"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.iphone).be.ok;
        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.iphone).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.table).not.be.ok;
        expect(sua.os.phone).be.ok;
        iosVersionCheck(sua, 5)
      });
    });
    it('ua.iphone (IOS6)', function () {
      useragents["IOS6"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.iphone).be.ok;
        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.iphone).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.table).not.be.ok;
        expect(sua.os.phone).be.ok;
        iosVersionCheck(sua, 6)
      });
    });
    it('ua.iphone (IOS7)', function () {
      useragents["IOS7"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.iphone).be.ok;
        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.iphone).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.table).not.be.ok;
        expect(sua.os.phone).be.ok;
        iosVersionCheck(sua, 7)
      });
    });
    it('ua.iphone (IOS8)', function () {
      useragents["IOS8"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.iphone).be.ok;
        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.iphone).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.table).not.be.ok;
        expect(sua.os.phone).be.ok;
        iosVersionCheck(sua, 8)
      });
    });
    it('ua.iphone (IOS9)', function () {
      useragents["IOS9"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.iphone).be.ok;
        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.iphone).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.table).not.be.ok;
        expect(sua.os.phone).be.ok;
        iosVersionCheck(sua, 9)
      });
    });
    it('ua.iphone (IOS10)', function () {
      useragents["IOS10"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.iphone).be.ok;
        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.iphone).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.table).not.be.ok;
        expect(sua.os.phone).be.ok;
        iosVersionCheck(sua, 10)
      });
    });
    it('ua.iphone (IOS11)', function () {
      useragents["IOS11"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.iphone).be.ok;
        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.iphone).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.table).not.be.ok;
        expect(sua.os.phone).be.ok;
        iosVersionCheck(sua, 11)
      });
    });
    it('ua.iphone (IOS4-ipad)', function () {
      useragents["IOS4-ipad"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ipad).be.ok;
        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.ipad).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
        iosVersionCheck(sua, 4)
      });
    });
    it('ua.iphone (IOS5-ipad)', function () {
      useragents["IOS5-ipad"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ipad).be.ok;
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.ipad).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
        iosVersionCheck(sua, 5)
      });
    });
    it('ua.iphone (IOS6-ipad)', function () {
      useragents["IOS6-ipad"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ipad).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.ipad).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
        iosVersionCheck(sua, 6)
      });
    });
    it('ua.iphone (IOS7-ipad)', function () {
      useragents["IOS7-ipad"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ipad).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.ipad).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
        iosVersionCheck(sua, 7)
      });
    });
    it('ua.iphone (IOS8-ipad)', function () {
      useragents["IOS8-ipad"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ipad).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.ipad).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
        iosVersionCheck(sua, 8)
      });
    });
    it('ua.iphone (IOS9-ipad)', function () {
      useragents["IOS9-ipad"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ipad).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.ipad).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
        iosVersionCheck(sua, 9)
      });
    });
    it('ua.iphone (IOS10-ipad)', function () {
      useragents["IOS10-ipad"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ipad).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.ipad).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
        iosVersionCheck(sua, 10)
      });
    });
    it('ua.iphone (IOS11-ipad)', function () {
      useragents["IOS11-ipad"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ipad).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.ipad).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
        iosVersionCheck(sua, 11)
      });
    });
    it('ua.iphone5 (hardware)', function () {
      useragents["IOS6"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.iphone).be.ok;
        expect(sua.iphone5).be.a('boolean');

        expect(sua.webkit).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.iphone).be.ok;
        expect(sua.os.ios).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.table).not.be.ok;
        expect(sua.os.phone).be.ok;
      });
    });
    it('ua.blackberry', function () {
      useragents["BlackBerry"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.os.blackberry).be.ok;
        expect(sua.os.tablet).not.be.ok;
        expect(sua.os.phone).be.ok;
        expect(sua.blackberry).be.ok;
      });
    });
    it('ua.webos', function () {
      useragents["WebOS"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);

        expect(sua.webos).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.webos).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).not.be.ok;
        expect(sua.os.phone).be.ok;
      });
    });

    it('ua.touchpad', function () {
      useragents["TouchPad"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);

        expect(sua.touchpad).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.webos).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.touchpad).be.ok;
        expect(sua.os.tablet).not.be.ok;
        expect(sua.os.phone).be.ok;
      });
    });

    it('ua.kindle', function () {
      useragents["Kindle"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.kindle).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.kindle).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
      });
    });

    it('ua.silk', function () {
      useragents["Silk"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.silk).be.ok;

        expect(sua.browser.webkit).not.be.ok;
        expect(sua.browser.silk).be.ok;
        expect(sua.os.tablet).not.be.ok;
        expect(sua.os.phone).not.be.ok;
      });
    });

    it('ua.bb10', function () {
      useragents["BB10"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.bb10).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.os.bb10).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).not.be.ok;
        expect(sua.os.phone).be.ok;
      });
    });

    it('ua.rimtabletos', function () {
      useragents["rimtabletos"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.rimtabletos).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.browser.playbook).be.ok;
        expect(sua.os.rimtabletos).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
      });
    });

    it('ua.playbook', function () {
      useragents["rimtabletos"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.playbook).be.ok;

        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
        expect(sua.browser.playbook).be.ok;
        expect(sua.os.rimtabletos).be.ok;
        expect(sua.os.version).be.ok;
        expect(sua.os.tablet).be.ok;
        expect(sua.os.phone).not.be.ok;
      });
    });

    it('ua.ds', function () {
      useragents["DS"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ds).be.ok;

        expect(sua.browser.webkit).not.be.ok
        expect(sua.os.tablet).not.be.ok
        expect(sua.os.phone).not.be.ok
        expect(sua.os.nintendo).be.ok
      });
    });

    it('ua.psp', function () {
      useragents["PSP"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.psp).be.ok;

        expect(sua.browser.webkit).not.be.ok
        expect(sua.os.tablet).not.be.ok
        expect(sua.os.phone).not.be.ok
      });
    });

    it('ua.psvita', function () {
      useragents["PSVita"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.psvita).be.ok;

        expect(sua.browser.webkit).be.ok
        expect(sua.browser.version).be.ok
        expect(sua.browser.silk).be.ok
        expect(sua.os.tablet).not.be.ok
        expect(sua.os.phone).not.be.ok
      });
    });

    it('ua.windowsphone', function () {
      useragents["WindowsPhone7"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.windowsphone).be.ok;
        expect(sua.browser.windowsphone).be.ok
        expect(sua.browser.version).equal('7.0').be.ok
        expect(sua.os.tablet).not.be.ok
        expect(sua.os.phone).be.ok
        expect(sua.browser.majorversion).equal('7').be.ok
      });
      useragents["WindowsPhone7.5"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.windowsphone).be.ok;
        expect(sua.browser.windowsphone).be.ok
        expect(sua.browser.version).equal('7.5').be.ok
        expect(sua.os.tablet).not.be.ok
        expect(sua.os.phone).be.ok
        expect(sua.browser.majorversion).equal('7').be.ok
      });
      useragents["WindowsPhone8"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.windowsphone).be.ok;
        expect(sua.browser.windowsphone).be.ok
        expect(sua.browser.version).equal('8.0').be.ok
        expect(sua.os.tablet).not.be.ok
        expect(sua.os.phone).be.ok
        expect(sua.browser.majorversion).equal('8').be.ok
      });
    });

    it('ua.safari', function () {
      useragents["Safari"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.safari).be.ok;
        expect(sua.browser.safari).be.ok
        expect(sua.browser.version).be.ok
        expect(sua.os.tablet).not.be.ok
        expect(sua.os.phone).not.be.ok
      });
    });

    it('ua.xbox', function () {
      useragents["Xbox"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.xbox).be.ok;
        expect(sua.browser.trident).be.ok;
        expect(sua.browser.version).be.ok;
      });
    });

    it('ua.android.firefox', function () {
      useragents["AndroidFirefox"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.android).be.ok;
        expect(sua.browser.firefox).be.ok;
        expect(sua.firefox).be.ok;
      });
    });

    it('ua.webview.twitter', function () {
      useragents["TwitterWebView"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.webview.twitter).be.ok;
      });
    });

    it('ua.ie11', function () {
      useragents["ie11"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ie).be.ok;
        expect(sua.browser.version.substring(0, 2)).to.eq("11").be.ok;
        expect(sua.browser.majorversion).to.eq("11").be.ok;
      });
    });
    it('ua.ie10', function () {
      useragents["ie10"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ie).be.ok;
        expect(sua.browser.version).to.eq("10.0").be.ok;
        expect(sua.browser.majorversion).to.eq("10").be.ok;
      });
    });
    it('ua.ie9', function () {
      useragents["ie9"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ie).be.ok;
        expect(sua.browser.version).to.eq("9.0").be.ok;
        expect(sua.browser.majorversion).to.eq("9").be.ok;
      });
    });

    it('ua.ie12edge', function () {
      useragents["ie12edge"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.ie).be.ok;
        expect(sua.edge).be.ok;
        expect(sua.browser.version).to.eq("12.10240").be.ok;
        expect(sua.browser.majorversion).to.eq("12").be.ok;
      });
    });

    it('ua.pc.chrome', function () {
      useragents["PCChrome"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.webkit).be.ok;
        expect(sua.browser.webkit).be.ok;
        expect(sua.browser.version).be.ok;
      });
    });

    it('ua.pc.firefox', function () {
      useragents["PCFirefox"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.firefox).be.ok;
        expect(sua.browser.firefox).be.ok;
        expect(sua.browser.version).to.eq("40.0").be.ok;
      });
    });

    it('ua.pc.safari', function () {
      useragents["PCSafari"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.safari).be.ok;
        expect(sua.browser.safari).be.ok;
        expect(sua.browser.version).to.eq("8.0.7").be.ok;
      });

    });

    it('ua.vivaldi 1.6', function () {
      useragents["Vivaldi1.6"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.vivaldi).be.ok;
        expect(sua.browser.vivaldi).be.ok;
        expect(sua.browser.version.substring(0, 3)).to.eq("1.6").be.ok;
      });

    });

    it('ua.wiiu', function () {
      useragents["WiiU"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.wiiu).be.ok;
        expect(sua.browser.nintendo).be.ok
        expect(sua.browser.version.substring(0, 1)).to.eq("4").be.ok;
        expect(sua.os.tablet).not.be.ok
        expect(sua.os.phone).not.be.ok
        expect(sua.os.nintendo).be.ok
      });

    });

    it('ua.nintendoswitch', function () {
      useragents["NintendoSwitch"].forEach(function (useragent, idx) {
        var sua = new SUA(useragent);
        expect(sua.nintendo_switch).be.ok;
        expect(sua.browser.nintendo).be.ok
        expect(sua.browser.version.substring(0, 1)).to.eq("5").be.ok;
        expect(sua.os.tablet).not.be.ok
        expect(sua.os.phone).not.be.ok
        expect(sua.os.nintendo).be.ok

      });

    });


  });

})(this);

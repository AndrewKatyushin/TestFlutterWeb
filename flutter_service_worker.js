'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "77847996a2b1d4671fcd3c43e767158e",
"index.html": "7951c7d64ce97447701eb09c65ddafa1",
"/": "7951c7d64ce97447701eb09c65ddafa1",
"main.dart.js": "1a703bd81164c53a3f1cec43fd41f070",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6064da53280641df026e7db14c6406c3",
"assets/AssetManifest.json": "ecb24d57862cb55e10ba4570a0026de9",
"assets/NOTICES": "019320cd4f0a6809c1d4a89110e9400b",
"assets/FontManifest.json": "972a9464cbb7929aceee81a59b2e1df3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/assets/images/ic_phone.svg": "df6e1f42b6358196b9f643189d57060b",
"assets/packages/assets/images/ic_success_cash_in.svg": "513eac5d99b1e172543b43c9a4e6a05b",
"assets/packages/assets/images/ic_camera_permission.svg": "927113f746c70b000bf892995292f7cb",
"assets/packages/assets/images/ic_onboarding_bank_account.webp": "3207a0007f223df8c5787ccfed753816",
"assets/packages/assets/images/agent_portal/cash_out.svg": "65a8487ba2916e364948867d5db6a76e",
"assets/packages/assets/images/agent_portal/in_cash_via_agent.svg": "a78780f1540e18a3a78616ded0291f1b",
"assets/packages/assets/images/agent_portal/cash_in.svg": "301381d28eedd7bcfe40836f41362eec",
"assets/packages/assets/images/agent_portal/add_client.svg": "f68f2a0bff5d2e3928697852215d2fea",
"assets/packages/assets/images/agent_portal/agent.svg": "a0587fcd283fc3976f7b85020fe947ae",
"assets/packages/assets/images/agent_portal/send_referral_link.svg": "50c9eed2f0169580a8db146d018f6b4f",
"assets/packages/assets/images/agent_portal/issue_card.svg": "0ec6973e8b5fd9e1622fbfc9b6bcb6ca",
"assets/packages/assets/images/ic_share.svg": "f3432d407440dbb1c322bfd19758e475",
"assets/packages/assets/images/ic_transaction_done.svg": "0e7f26faed360415d306416e417b8ac2",
"assets/packages/assets/images/ic_documents_filled.svg": "b09c558dc4f9ac203c260bb6f0af6645",
"assets/packages/assets/images/ic_onboarding_tax.webp": "dd4130fb5e6afbe5791469f42e99df1b",
"assets/packages/assets/images/ic_success_dialog.svg": "1c78fa5ca802ca5207a1245a09da3904",
"assets/packages/assets/images/ic_lock.svg": "eceb459cd8689cf84b04a86dbc064280",
"assets/packages/assets/images/ic_success.svg": "afe778542464c1dcc964270f8986a1e2",
"assets/packages/assets/images/ic_onboarding_id_card_icon.webp": "d658b21bc173e467d88c9376a0000788",
"assets/packages/assets/images/ic_messages.svg": "0d1091f1f9db399eedc6ecdc03ccb94e",
"assets/packages/assets/images/1.5x/landing_card_logo.webp": "4e54cf26aee96b262c4c65f6e49221d3",
"assets/packages/assets/images/ic_contacts.svg": "6ac19d50744dff7730da91a6d06fb5b7",
"assets/packages/assets/images/flags/flag_CAF.svg": "b5dc56343e1a3a8b3d4fbc413c0643ef",
"assets/packages/assets/images/flags/flag_KH.svg": "d4a7ef2a269d959fe125cb0c1c314ab4",
"assets/packages/assets/images/flags/flag_ET.svg": "e392708e72f4a1080b3907e0f3051b3a",
"assets/packages/assets/images/flags/flag_EC.svg": "0fdaecadb3993c0c71d4203a8cc51abe",
"assets/packages/assets/images/flags/flag_SN.svg": "85e34f3b286d798c1d1e19bc54780990",
"assets/packages/assets/images/flags/flag_SY.svg": "48dd82c051f469fae3671f0f76a957d7",
"assets/packages/assets/images/flags/flag_SO.svg": "bb82472a53c26f6f79d16e9574c78d6c",
"assets/packages/assets/images/flags/flag_PT.svg": "a52486c63086f3a342258506b75331fc",
"assets/packages/assets/images/flags/flag_EU.svg": "64c33c5a47fbd85ffcd09d803fe3365e",
"assets/packages/assets/images/flags/flag_JM.svg": "f51c43a60e65bade4425474824c6e1b5",
"assets/packages/assets/images/flags/flag_HR.svg": "8f6ad18971aee3902b1e3f2af35fa9e6",
"assets/packages/assets/images/flags/flag_IT.svg": "a4c97929436e692e60ba021c3757c756",
"assets/packages/assets/images/flags/flag_JO.svg": "4fc047a7f4ae34d8631bfd49b463c331",
"assets/packages/assets/images/flags/flag_GH.svg": "e8198e3089ce0b4cfd380927c34a8296",
"assets/packages/assets/images/flags/flag_SM.svg": "9a78ef720e7c4b0c9c5bb1891de2559a",
"assets/packages/assets/images/flags/flag_SZ.svg": "128bf09869e03fd173ce8ebd10326127",
"assets/packages/assets/images/flags/flag_PA.svg": "8cb79c999d791bf09abcefe77f2de03f",
"assets/packages/assets/images/flags/flag_SL.svg": "a9f440da9e187cd153928d407b263a51",
"assets/packages/assets/images/flags/flag_PW.svg": "83f9b03e08554aa236bbc46a8859e6a0",
"assets/packages/assets/images/flags/flag_DE.svg": "2e9eca494b5ee36881d43b1f9853906d",
"assets/packages/assets/images/flags/flag_GI.svg": "298ee55a004b35e754ac09674653c6a3",
"assets/packages/assets/images/flags/flag_FM.svg": "ea89f9cba1ca6879ef66d0d211d1ed11",
"assets/packages/assets/images/flags/flag_CAS.svg": "c34401330a735f2f4a94c4817c628a51",
"assets/packages/assets/images/flags/flag_KY.svg": "cc0374da1c82a3938118f8a562a917c3",
"assets/packages/assets/images/flags/flag_IQ.svg": "b8065c92ef5282e69ca2f5a1209f6dd8",
"assets/packages/assets/images/flags/flag_HU.svg": "83ae7d8e49e8666a33bd53c8f5a83900",
"assets/packages/assets/images/flags/flag_KN.svg": "1ec0cd0fbbccc13eb9ded4b12860f3d8",
"assets/packages/assets/images/flags/flag_EE.svg": "bdeab775dc3832dd0bd292f4b5093f16",
"assets/packages/assets/images/flags/flag_FI.svg": "1bad5f663cdd5bf94f98f4d663eaabc5",
"assets/packages/assets/images/flags/flag_ER.svg": "e29e2ba3eb92eb85c9cd57c502a84e23",
"assets/packages/assets/images/flags/flag_GM.svg": "afe8e04a8b7e26fea6a20e31df1dbba5",
"assets/packages/assets/images/flags/flag_SH.svg": "dad084401b145f70f73348ff081fdfd0",
"assets/packages/assets/images/flags/flag_SI.svg": "8b6ae72f161c922afe7f1f14a362aa09",
"assets/packages/assets/images/flags/flag_PR.svg": "1edff01fca30cb5019dedf9b68bebf24",
"assets/packages/assets/images/flags/flag_PE.svg": "d52a38a7a932bc918166bfa788563de8",
"assets/packages/assets/images/flags/flag_QA.svg": "88d9b1283b72002feb705944c084b692",
"assets/packages/assets/images/flags/flag_ES.svg": "25aec67cc5244d3591386620d7dceca7",
"assets/packages/assets/images/flags/flag_HT.svg": "584a1d4eadf4865f0be2e6b55765671f",
"assets/packages/assets/images/flags/flag_KZ.svg": "8163983ff64f5b6bf26e3e3c95595776",
"assets/packages/assets/images/flags/flag_IE.svg": "be02c5e8821df86cbd7bdf2fbe82feec",
"assets/packages/assets/images/flags/flag_KM.svg": "c0b146fb54420006353068ca71a0702f",
"assets/packages/assets/images/flags/flag_IR.svg": "4dfa1736e4e6f1921c66bb33d00d0028",
"assets/packages/assets/images/flags/flag_GY.svg": "74732c18edf89b4b649a6cedc2297136",
"assets/packages/assets/images/flags/flag_GN.svg": "9024f452a1f5c365f4f2e992d10a757b",
"assets/packages/assets/images/flags/flag_FJ.svg": "15e1669d53178669a00c0bf9fb360ec5",
"assets/packages/assets/images/flags/flag_PG.svg": "5457fa9f3da5edbf02ecfd7c48a2cb51",
"assets/packages/assets/images/flags/flag_SK.svg": "a9ff3fc6d63e04ef9f75d11ce8277566",
"assets/packages/assets/images/flags/flag_RO.svg": "b07427cecb0bef68f24d3cd3621f664e",
"assets/packages/assets/images/flags/flag_PF.svg": "d81deedbf2ad26ea05424511ecbb87b7",
"assets/packages/assets/images/flags/flag_FK.svg": "8f20e50b3eb4bdfeeb0b35118f6c373f",
"assets/packages/assets/images/flags/flag_EG.svg": "66d609a94026a3a3e3465c7d92c4f272",
"assets/packages/assets/images/flags/flag_IS.svg": "0250fd9e52b746933caefabb106f6c38",
"assets/packages/assets/images/flags/flag_ID.svg": "d5d5582f3d7f698e80de9ca7432da87c",
"assets/packages/assets/images/flags/flag_NP.svg": "98b933520a328ad57c3d10639c3f4072",
"assets/packages/assets/images/flags/flag_MK.svg": "eed0a4c6c51638a1ff5959f6673a459d",
"assets/packages/assets/images/flags/flag_NG.svg": "19efb5d0c4c109b0eeff1002024942cc",
"assets/packages/assets/images/flags/flag_BS.svg": "9158b08b600bb9de9402a1fb2c733856",
"assets/packages/assets/images/flags/flag_BD.svg": "cc42ffc6d69503f17dff20ce25a3d313",
"assets/packages/assets/images/flags/flag_UZ.svg": "01b668b3bc5717e5c8a91c9b9f4c11ac",
"assets/packages/assets/images/flags/flag_TH.svg": "2a0854683e889c574955f3acab9f9c66",
"assets/packages/assets/images/flags/flag_WS.svg": "37ae0696b331395b752f6db8323a73b4",
"assets/packages/assets/images/flags/flag_CA.svg": "2819123ee07b8493eaf48da966daf50e",
"assets/packages/assets/images/flags/flag_BE.svg": "4bbf4906c0b520d71296c5dd8172ee5c",
"assets/packages/assets/images/flags/flag_CV.svg": "775b8c3a2828089c02122d889054af37",
"assets/packages/assets/images/flags/flag_BR.svg": "9256f6b948319cf701035bd72d314717",
"assets/packages/assets/images/flags/flag_AI.svg": "9cd52f33b96aaff0c42ae3fabb7a4532",
"assets/packages/assets/images/flags/flag_LY.svg": "87bbaf9cf0d217a92f8256fcc5e92044",
"assets/packages/assets/images/flags/flag_CSA.svg": "134536d5c7f109e8cc819e61c1593b67",
"assets/packages/assets/images/flags/flag_BG.svg": "168aeef968f9d0366ead03756686eb33",
"assets/packages/assets/images/flags/flag_TJ.svg": "7330acc4ae6c26f6067d36ab461d28df",
"assets/packages/assets/images/flags/flag_VU.svg": "c8700bd9ea992c438fb334bded4c4378",
"assets/packages/assets/images/flags/flag_UY.svg": "c6f11c95a2040dc2783df6ea15aea91e",
"assets/packages/assets/images/flags/flag_ZA.svg": "a1b9350bf8545bb3e91b9e7a0e94d4c6",
"assets/packages/assets/images/flags/flag_ZW.svg": "cbdd071f26684e2bc64311d74643f978",
"assets/packages/assets/images/flags/flag_VC.svg": "3cd62ccd7e00767ddeb3d3a2d08c81a7",
"assets/packages/assets/images/flags/flag_BF.svg": "50cb0903558e899c5fa575068197c0b9",
"assets/packages/assets/images/flags/flag_CU.svg": "c3e46622da58df7cc86f29f884b68414",
"assets/packages/assets/images/flags/flag_NE.svg": "8266fc14204df5b7b745f56f0049a562",
"assets/packages/assets/images/flags/flag_MZ.svg": "cc601cc46a91e8a692676fdfab1d74ad",
"assets/packages/assets/images/flags/flag_NA.svg": "effeb264cbf5d10f594b7ef217af8171",
"assets/packages/assets/images/flags/flag_LI.svg": "cb68088bb4ed1f424cd137e4825f897a",
"assets/packages/assets/images/flags/flag_MM.svg": "dffdfe9ff0b9373941015af78814d701",
"assets/packages/assets/images/flags/flag_CF.svg": "dc62816fcc2757068e04a2bf92fd4c4d",
"assets/packages/assets/images/flags/flag_BB.svg": "2793b1400e1c187be9a40a87e56568d0",
"assets/packages/assets/images/flags/flag_AN.svg": "53a8700651163b7b8da3ef6b16779ca6",
"assets/packages/assets/images/flags/flag_VG.svg": "6d73c6e72e117a7b48658aec1d86574a",
"assets/packages/assets/images/flags/flag_TO.svg": "52e59172e7343643b29186b17ef0f3a4",
"assets/packages/assets/images/flags/flag_TN.svg": "0294b91d08c9055188ed9da19641c7b2",
"assets/packages/assets/images/flags/flag_BT.svg": "a1584f8d7a8ba214a945548c5559205a",
"assets/packages/assets/images/flags/flag_AO.svg": "434669a652eee61358b88ee3e9e4049b",
"assets/packages/assets/images/flags/flag_AX.svg": "4f9dd585761369bab344834c66ac1ac6",
"assets/packages/assets/images/flags/flag_CG.svg": "352dacf426c6bdb4acc381bd46fcfe3b",
"assets/packages/assets/images/flags/flag_ML.svg": "2a6e9f157be1442c6748308526389491",
"assets/packages/assets/images/flags/flag_MY.svg": "aa0bed4498f8c25a68a14d1894c9481c",
"assets/packages/assets/images/flags/flag_MN.svg": "181eeb2d21b7ff1d733220e3d847db95",
"assets/packages/assets/images/flags/flag_BA.svg": "f1b9a52b286c462bf7dcc0347bd7832c",
"assets/packages/assets/images/flags/flag_AZ.svg": "707fd878ae88bd1606ed20d853fac837",
"assets/packages/assets/images/flags/flag_AM.svg": "52ac635b649ce9b65c8b1f933975f6df",
"assets/packages/assets/images/flags/flag_CR.svg": "183650fd85d1ab7f7974af6e65b988dd",
"assets/packages/assets/images/flags/flag_WW.svg": "b609338bdb4c98e2711fc386ee3a6135",
"assets/packages/assets/images/flags/flag_TL.svg": "5fd8f2980a5969e5a364d24b66dee29a",
"assets/packages/assets/images/flags/flag_TM.svg": "02847c4b8fe05b7623845bd1c025a021",
"assets/packages/assets/images/flags/flag_TZ.svg": "fad7c8114e72e7dd0eb6fd31b6925eaa",
"assets/packages/assets/images/flags/flag_VE.svg": "c95da4a7651f88e5c792f2e1165eec4f",
"assets/packages/assets/images/flags/flag_BW.svg": "7ec0aea5be232a0c364a14e6d70bdeeb",
"assets/packages/assets/images/flags/flag_AL.svg": "ee2d15062c3175e95e6f58b1f71b1d04",
"assets/packages/assets/images/flags/flag_CD.svg": "a44bf6e43d200e24b75c3d6382bcd8b0",
"assets/packages/assets/images/flags/flag_LK.svg": "030d90808e9f3b36844f1847aee6b360",
"assets/packages/assets/images/flags/flag_MO.svg": "3e9f5195f1e0c0163fdb2e15003d708b",
"assets/packages/assets/images/flags/flag_MX.svg": "374a93f03002bfa5cca771b990e9d3be",
"assets/packages/assets/images/flags/flag_MU.svg": "1767716322ae593b63b8d53cd7d06d37",
"assets/packages/assets/images/flags/flag_CI.svg": "850c14dfcb814868e6f06005a49fd07a",
"assets/packages/assets/images/flags/flag_BM.svg": "d06175ef163e8fe54e5e6a431a1575f7",
"assets/packages/assets/images/flags/flag_BZ.svg": "90b620096180b6d15c3c16593239ec14",
"assets/packages/assets/images/flags/flag_TW.svg": "5db54999489fc9e9b5d584a5591ff6e3",
"assets/packages/assets/images/flags/flag_US.svg": "55cd3c6f8ee0c5f194031e703cf1e93f",
"assets/packages/assets/images/flags/flag_AW.svg": "8b7d18a0af722a42b021ecbfe88f3dc2",
"assets/packages/assets/images/flags/flag_CH.svg": "7fa350973a94a093fcc7795a34590c38",
"assets/packages/assets/images/flags/flag_MC.svg": "0888fb5ad6fb7dcf02d42fd5ecbb2b6e",
"assets/packages/assets/images/flags/flag_NO.svg": "120a839e292424e97250626036dcebd5",
"assets/packages/assets/images/flags/flag_MT.svg": "dc0856542af47afc3a6935b003b07a46",
"assets/packages/assets/images/flags/flag_MV.svg": "7e4c8975d78efd9b26522feb69fb4966",
"assets/packages/assets/images/flags/flag_LR.svg": "50261b70dde83933425241108231b253",
"assets/packages/assets/images/flags/flag_NZ.svg": "fe24dcba6618df1dbb35040ee4686e66",
"assets/packages/assets/images/flags/flag_MA.svg": "96d4a5ec5eda9f90c36d2b6a842c6a28",
"assets/packages/assets/images/flags/flag_BN.svg": "7ed6db92fc77c259393c93aece8401ce",
"assets/packages/assets/images/flags/flag_AU.svg": "d500908b16e62a00dfc026ba3790b90f",
"assets/packages/assets/images/flags/flag_BY.svg": "b0b9c7161a3231824924650ec8265fd2",
"assets/packages/assets/images/flags/flag_TT.svg": "948e717d458e25b793a342327ef14881",
"assets/packages/assets/images/flags/flag_UG.svg": "6d24e115c7fa56aa93759ce2479349ba",
"assets/packages/assets/images/flags/flag_TC.svg": "f6d6e33920a6508e43df5f28f99db676",
"assets/packages/assets/images/flags/flag_YE.svg": "5392a6930ac65198e2e49c65f32c6ee0",
"assets/packages/assets/images/flags/flag_AT.svg": "ee375794b0c59272f17d3a984b0b799c",
"assets/packages/assets/images/flags/flag_BO.svg": "e4c2be11b51fbb724c1282707ea813bc",
"assets/packages/assets/images/flags/flag_LS.svg": "1a8e2117da2b382160a04ef412f6366d",
"assets/packages/assets/images/flags/flag_NL.svg": "036fe6c2aebf311b0aeeeb01ec0930f5",
"assets/packages/assets/images/flags/flag_MW.svg": "e90318919434c7eb8313ee659a4e32e6",
"assets/packages/assets/images/flags/flag_CEU.svg": "3d8fbdd1a57fe867b93d292c3481008f",
"assets/packages/assets/images/flags/flag_MD.svg": "36b4116ed27d602174e7a714ed6620cc",
"assets/packages/assets/images/flags/flag_MS.svg": "b276b1cfd8da8172e6cb7281edf0b0dc",
"assets/packages/assets/images/flags/flag_AG.svg": "5670e032976c44692b540abbb459b5d5",
"assets/packages/assets/images/flags/flag_CO.svg": "499bced94b5dbc69ee2fd88d9019131f",
"assets/packages/assets/images/flags/flag_VN.svg": "03b9b9899fc45ad06cf2ccbc70c13cb0",
"assets/packages/assets/images/flags/flag_ZM.svg": "86589e7b538188a5b37541992cedaab7",
"assets/packages/assets/images/flags/flag_TG.svg": "9acd5f7a97e223f596f348756762af23",
"assets/packages/assets/images/flags/flag_CN.svg": "ee3f032e394bac52c95d6eddd5716473",
"assets/packages/assets/images/flags/flag_BJ.svg": "59d25f51c187dd8cebd7c79c8e07924b",
"assets/packages/assets/images/flags/flag_CY.svg": "c3f95b558afcb5e49d2aaff9ae4fd31d",
"assets/packages/assets/images/flags/flag_AF.svg": "bd92cb79371a9e26a742d014217820ce",
"assets/packages/assets/images/flags/flag_OM.svg": "f179cbe6ffb69edeca5abfee02150026",
"assets/packages/assets/images/flags/flag_LV.svg": "823c0be8517b3938dcff2f6bb5fe6223",
"assets/packages/assets/images/flags/flag_NI.svg": "b8c3e63b219ef8b7f178e1af8e8b3b0e",
"assets/packages/assets/images/flags/flag_MR.svg": "6883c090f40d7db8a1fac6193f4c6c33",
"assets/packages/assets/images/flags/flag_LA.svg": "028f108f4e1f79d92447c1651789521d",
"assets/packages/assets/images/flags/flag_ME.svg": "94dce6fe2e927bc729ec39c43a301feb",
"assets/packages/assets/images/flags/flag_LC.svg": "b464eface1d15a25ef0918e66de65c7a",
"assets/packages/assets/images/flags/flag_MG.svg": "9447ac38bea702d20836f4c311a035a7",
"assets/packages/assets/images/flags/flag_LT.svg": "49a58b7d2a933fb7a01e3c4f617044e0",
"assets/packages/assets/images/flags/flag_AD.svg": "e47e53f4705a8d6e7c13aea266e454e1",
"assets/packages/assets/images/flags/flag_CL.svg": "6e1600ee171387a08e70fdc20c4e0340",
"assets/packages/assets/images/flags/flag_BH.svg": "9978d0a32febe44a7b70b70e546153bf",
"assets/packages/assets/images/flags/flag_UA.svg": "50b6184ab36a6abd560f7a83016ff596",
"assets/packages/assets/images/flags/flag_TR.svg": "9c81ad432759abea4516c7814f277aed",
"assets/packages/assets/images/flags/flag_TD.svg": "b01d835f6b31c60fb9426ec8adc07d26",
"assets/packages/assets/images/flags/flag_AR.svg": "17e8b94d677b66c633339691fbe1de9e",
"assets/packages/assets/images/flags/flag_BI.svg": "6b88a6d32fd5a624e6b6caac2dd81228",
"assets/packages/assets/images/flags/flag_CM.svg": "6357a35a1b5ee39a5c87b9998ef024cb",
"assets/packages/assets/images/flags/flag_AE.svg": "7d28a29792184c0390c77d52635c5d32",
"assets/packages/assets/images/flags/flag_CZ.svg": "09d8145c63808792ce17d39484abd282",
"assets/packages/assets/images/flags/flag_LU.svg": "7e6d2847188050b5150868c2886ecb37",
"assets/packages/assets/images/flags/flag_LB.svg": "c32dc1dd29b0978af5423ce4af8e8248",
"assets/packages/assets/images/flags/flag_JE.svg": "45839a51e2927aca6021c2bdf197fcdb",
"assets/packages/assets/images/flags/flag_GB.svg": "361fb698030f331970a02ab3b6fd19ba",
"assets/packages/assets/images/flags/flag_PK.svg": "ca99c6b146b6dbcf27b0c3a704252069",
"assets/packages/assets/images/flags/flag_SG.svg": "6a5bf7cac8c6829792353db64e8dc045",
"assets/packages/assets/images/flags/flag_RU.svg": "11ba350cf377c35fa334c4b4aeb78080",
"assets/packages/assets/images/flags/flag_GT.svg": "302d554e5f5fd66e1d733de88e72a84d",
"assets/packages/assets/images/flags/flag_DO.svg": "3922198bcd8915e084a68e298f1dc16b",
"assets/packages/assets/images/flags/flag_KW.svg": "af72112ad598cf81977bf567cc73e81e",
"assets/packages/assets/images/flags/flag_CNA.svg": "a516baba7e64eff7fd67afb795bada67",
"assets/packages/assets/images/flags/flag_HN.svg": "0013adb9cf8a4e9c1fb8e42eee1e1328",
"assets/packages/assets/images/flags/flag_DM.svg": "4029d1526591b4d0376e10b60968e647",
"assets/packages/assets/images/flags/flag_FR.svg": "0ad33e3fe5437a7d0b0c7163070451aa",
"assets/packages/assets/images/flags/flag_GA.svg": "e16b1da57c7d34bb387dcd7a715e056c",
"assets/packages/assets/images/flags/flag_DZ.svg": "782189342f842641b6ef3bfd62c27f1e",
"assets/packages/assets/images/flags/flag_PH.svg": "d84f662096571ae219e3f0c3d25f0dcb",
"assets/packages/assets/images/flags/flag_RW.svg": "ba64d8aa2746dc6e8d1802efa472c677",
"assets/packages/assets/images/flags/flag_SD.svg": "37bdffb1bcbe3acfdd00d7a0431caf19",
"assets/packages/assets/images/flags/flag_SE.svg": "5c24b5893b7bc24e47dfe019d6f81c32",
"assets/packages/assets/images/flags/flag_SR.svg": "49db39a660db3e7f41f8bd5150440b1c",
"assets/packages/assets/images/flags/flag_GW.svg": "dde81cd2f13a63449bf2432bd195d4c4",
"assets/packages/assets/images/flags/flag_JP.svg": "739fdb4bf748ef99baa560384eaa0869",
"assets/packages/assets/images/flags/flag_KG.svg": "5f01520825850c6a3d4e97cf88e4ac48",
"assets/packages/assets/images/flags/flag_KP.svg": "a588d481c00213e56fcd8aa472463088",
"assets/packages/assets/images/flags/flag_HK.svg": "7f173898bba8789a6e4d20bff2e88eef",
"assets/packages/assets/images/flags/flag_GD.svg": "5df6eeca8cdfad00c3762ba1ed69304a",
"assets/packages/assets/images/flags/flag_SA.svg": "b61652e180199f5c0717c9ac71f9d512",
"assets/packages/assets/images/flags/flag_SV.svg": "13889ac8688ef4c73a99f4b5b9ea0ffb",
"assets/packages/assets/images/flags/flag_RS.svg": "388eb953476468bd94614040a3bdcc2d",
"assets/packages/assets/images/flags/flag_PL.svg": "e8a17c6fc594b9bdb0a5142ac0dfa3fe",
"assets/packages/assets/images/flags/flag_GR.svg": "aba7b18ac84d2e46078dae7aa8d09165",
"assets/packages/assets/images/flags/flag_GE.svg": "2d3821905e5b0d26cdfc27a577dbfe1d",
"assets/packages/assets/images/flags/flag_IN.svg": "6d8de820a2ac200596b05e9453403447",
"assets/packages/assets/images/flags/flag_COC.svg": "49c5840687f83f6fac73c84bdd8fd9a5",
"assets/packages/assets/images/flags/flag_IL.svg": "3b2c89a8868f7b1a346a175fa0b886a8",
"assets/packages/assets/images/flags/flag_GG.svg": "0fe4e2822dc47d82e3c267d69f42d0d4",
"assets/packages/assets/images/flags/flag_DK.svg": "847eef83a70876ad43a1ab908663c798",
"assets/packages/assets/images/flags/flag_PY.svg": "637c2dfbdbb200a4417eb69b074e896e",
"assets/packages/assets/images/flags/flag_SB.svg": "8cdf543424e6b29b14b2066090c525b5",
"assets/packages/assets/images/flags/flag_ST.svg": "44901ee8b993b120fd6031b9ccbd00fd",
"assets/packages/assets/images/flags/flag_SC.svg": "547c68813b3ddff7ede0770df9f9d9d8",
"assets/packages/assets/images/flags/flag_GQ.svg": "4607eed571e8988d1290c7d4760cf95b",
"assets/packages/assets/images/flags/flag_DJ.svg": "556c55e4d91e38b614ebbc355ee2ff85",
"assets/packages/assets/images/flags/flag_KR.svg": "8bd5c4a51fd1604d1a91de2981ac159c",
"assets/packages/assets/images/flags/flag_IM.svg": "c65d803ca3d81170dd98630c9587d07a",
"assets/packages/assets/images/flags/flag_KE.svg": "65210f2f5bd3ee9b4841d5bdffdcbc0e",
"assets/packages/assets/images/ic_camera_switch.svg": "4685fb5f6c884f3400b6e4bb8057dd29",
"assets/packages/assets/images/ic_onboarding_face_only.webp": "a2973fd5bd56a49ca911eac7917bb62e",
"assets/packages/assets/images/big_icons/ic_rand_add.svg": "a2409954186eca3cbe30f675eae1283e",
"assets/packages/assets/images/2.0x/landing_card_logo.webp": "84555c0770523b3b2db3c68ade3c6894",
"assets/packages/assets/images/earth_globe.png": "9f7a2cc9f395f6a6a58e6bd01025b4f6",
"assets/packages/assets/images/ic_reward.svg": "74dec36ba25bb4e0f87d91f683d0615b",
"assets/packages/assets/images/ic_close.svg": "99f955908367e133227f08beb3ab8e68",
"assets/packages/assets/images/ic_customer_activation_fee.svg": "5702e3b01534fe1f16c54efcb2319741",
"assets/packages/assets/images/delivery_type/agent.svg": "1b8a14ef8f97aa80b01e973b2d8f1a4e",
"assets/packages/assets/images/delivery_type/courier.svg": "0109d3096fe14e3c3c8fd2d5f22e5a79",
"assets/packages/assets/images/cards/olympus_card_small.png": "4590d1d5fe5eb1534b3075e3778fca98",
"assets/packages/assets/images/ic_onboarding_address.webp": "11258936d08c02a8709fa58d51c7441e",
"assets/packages/assets/images/ic_notification.svg": "870a7fee0a5afcf0b796eaf4320c2509",
"assets/packages/assets/images/ic_document_blank.svg": "f82fe97acfb4f2897980dfb9bc4c33bd",
"assets/packages/assets/images/ic_document_exlamation.svg": "d0223e3c2c5c479a61778637c8baf41a",
"assets/packages/assets/images/3.0x/landing_card_logo.webp": "35413aa79241bf66167e4bc4886d78e9",
"assets/packages/assets/images/ic_onboarding_passport.webp": "67dbeddb92df7d30891e24c5d8858dc3",
"assets/packages/assets/images/4.0x/landing_card_logo.webp": "9778a9342a45e78b8f3c814cecc8ee6f",
"assets/packages/assets/images/social/facebook.svg": "d5ceb4284744439d4af12f31ead39a42",
"assets/packages/assets/images/social/whatsup.svg": "d2dcb77117dc4a53d91eac23c3527a00",
"assets/packages/assets/images/airtime_providers/ic_sms.svg": "c815f898a0ddd33830950816ef814d04",
"assets/packages/assets/images/airtime_providers/ic_airtime.svg": "aacfc79463f4a87713c3ffc5ccc5f98a",
"assets/packages/assets/images/airtime_providers/vodacom.png": "095fb263fdb20242da1537e51bf7ecba",
"assets/packages/assets/images/airtime_providers/mtn.png": "653c165a899df8521a0565fe1dce9657",
"assets/packages/assets/images/airtime_providers/ic_data.svg": "ebd8b693fa530a06502c80440413a39c",
"assets/packages/assets/images/airtime_providers/telkom.png": "ea10621c760a132db76cff2a292fdb00",
"assets/packages/assets/images/airtime_providers/cell_c.png": "89b680b177d9945c75ffeba0bf63e351",
"assets/packages/assets/images/ic_cash_in.svg": "fafa0fbdc9627c2941ed171f2e8855c9",
"assets/packages/assets/images/ic_onboarding_another_document.webp": "1fe762a7ed0617b68c54b810c99c29e0",
"assets/packages/assets/images/ic_arror_right.svg": "6e52e59fd0f499ea9c127ea66d92f0d4",
"assets/packages/assets/images/biometric/face_id.svg": "3d384689812cc3d856cff2707e65f644",
"assets/packages/assets/images/accounts/trt.svg": "0b39f423f2a09d4a44c3b1bdebb3e3e8",
"assets/packages/assets/images/accounts/sol_account.png": "8701445ecdfcb481868fcc50cf5ec291",
"assets/packages/assets/images/accounts/physical_card.png": "79fbc6288555d39001903b61a086d0ff",
"assets/packages/assets/images/accounts/virtual_card.png": "16dcaab885693ed76404b4beaf9c0462",
"assets/packages/assets/images/accounts/olympus_account.png": "c0cea394fe43dc570e1d972c6866561f",
"assets/packages/assets/images/ic_failed.svg": "0dd55c2269fcb75a43675a0e06f3aee8",
"assets/packages/assets/images/south_africa.png": "1e3086f9861dfff584d8e9b9c3787668",
"assets/packages/assets/images/1.0x/landing_card_logo.webp": "9660939b2924beb1bb71ce8de3fccfd1",
"assets/packages/assets/images/tabbar_icons/services.svg": "2c764454e1dadb14e64a195d475e84ee",
"assets/packages/assets/images/tabbar_icons/settings.svg": "b69e25dabb528f3bc9473ca0849f0d1e",
"assets/packages/assets/images/tabbar_icons/agent.svg": "a0587fcd283fc3976f7b85020fe947ae",
"assets/packages/assets/images/tabbar_icons/wallet.svg": "438f3311a1f75b09783554817345e12b",
"assets/packages/assets/images/tabbar_icons/messages.svg": "82f323c88cca009ed41c0b4176dafe26",
"assets/packages/assets/images/tabbar_icons/payments.svg": "d7996130db945f0966b8049467140e65",
"assets/packages/assets/images/list/opened_row_arrow.svg": "18d9f90792cb1dddbdea26c03344293a",
"assets/packages/assets/images/list/opening_row_arrow.svg": "ef048662d001581c381e1cfc0572d631",
"assets/packages/assets/images/ic_about_app.svg": "8d662312f3e1b9f833cb43a350c02e52",
"assets/packages/assets/images/landing_card_logo.webp": "9660939b2924beb1bb71ce8de3fccfd1",
"assets/packages/assets/images/funeral/funeral_offer.svg": "1d1ca5fe7a9969ca9a07fd6a60699d68",
"assets/packages/assets/images/ic_help.svg": "462f55c2a86180b51235e558eb9c1c75",
"assets/packages/assets/images/payment_services/ic_water.svg": "6f22f405e41e294c76ba1d09d22213fc",
"assets/packages/assets/images/payment_services/ic_dstv.svg": "bbf020b8e355941e68c06441959c31e3",
"assets/packages/assets/images/payment_services/ic_airtime.svg": "758d295dcc18515d3b9573daa179e871",
"assets/packages/assets/images/payment_services/ic_referral.svg": "343d8495d053dc25cd221b26b26ddf7d",
"assets/packages/assets/images/payment_services/ic_by_phone.svg": "62553b878b16c7bbf32557d467574956",
"assets/packages/assets/images/payment_services/ic_electricity.svg": "7651c13f40924051a26b89ebeb26a0fb",
"assets/packages/assets/images/payment_services/ic_ewallet.svg": "914890ae41f00a51404d0914d9a1da4d",
"assets/packages/assets/images/payment_services/ic_eft.svg": "d46219c546238b81829166b54f81ce1a",
"assets/packages/assets/images/payment_services/ic_order_virtual_card.svg": "dc48725ffe1a1c4f4bf03c9b2b5b37fe",
"assets/packages/assets/images/payment_services/ic_unknown.svg": "e4bc9c896d673102c8b5e34ca1e7441b",
"assets/packages/assets/images/payment_services/ic_topup.svg": "e638901c6aee151e0ab2813ab2b91af9",
"assets/packages/assets/images/ic_selector.svg": "051989568192ac19cd19af0e4ced8879",
"assets/packages/assets/images/ic_face_id.svg": "854a6e8b1a3ee35f51b239d7aeab0eec",
"assets/packages/assets/images/dropdown_icon.png": "7cd7edf832804855470d331f229f5a0b",
"assets/packages/assets/images/notificationScreenLogo.svg": "3c5408049dc8a0a92b42c0cf5bbbc98d",
"assets/packages/assets/images/ic_copy.svg": "0d606775178109ff1179195a72a56db7",
"assets/packages/assets/images/ic_search.svg": "a0890a91887af199e3b2e6b528ceb0a3",
"assets/packages/assets/images/ic_onboarding_done.svg": "5d35285832b15b1f59ab3cf47e49103c",
"assets/packages/assets/images/ic_fingerprint.svg": "d8fb2b0fe119a2067b4516e28ffee53a",
"assets/packages/assets/images/ic_onboarding_selfie.webp": "358f171ba606ca9b996968c4200ed2c4",
"assets/packages/assets/images/ic_logout.svg": "c25153e5f69c4b7bd0026ccea521e835",
"assets/packages/assets/fonts/SFProRounded-Bold.ttf": "e64fc9d01f0600a9faf13ce71c15d0ed",
"assets/packages/assets/fonts/SFProRounded-Regular.ttf": "400bd9f855cefe6a13b02eb55a31d511",
"assets/packages/assets/fonts/SFProRounded-Semibold.ttf": "907212050e2a59fbb0aa4cb95b7ca4c0",
"assets/packages/assets/translations/en.json": "f973fcf0d77a173723c458029b2260bc",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

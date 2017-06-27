(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let request = require("superagent");
let companiesSandP = "MMM ACE ABT ANF ACN ADBE AMD AES AET AFL A GAS APD ARG AKAM AA ALXN ATI AGN ALL ANR ALTR MO AMZN AEE AEP AXP AIG AMT AMP ABC AMGN APH APC ADI AON APA AIV APOL AAPL AMAT ADM AIZ T ADSK ADP AN AZO AVB AVY AVP BHI BLL BAC BK BCR BAX BBT BEAM BDX BBBY BMS BRK.B BBY BIG BIIB BLK HRB BMC BA BWA BXP BSX BMY BRCM BF.B CHRW CA CVC COG CAM CPB COF CAH CFN KMX CCL CAT CBG CBS CELG CNP CTL CERN CF SCHW CHK CVX CMG CB CI CINF CTAS CSCO C CTXS CLF CLX CME CMS COH KO CCE CTSH CL CMCSA CMA CSC CAG COP CNX ED STZ CBE GLW COST CVH COV CCI CSX CMI CVS DHI DHR DRI DVA DF DE DELL DNR XRAY DVN DV DO DTV DFS DISCA DLTR D RRD DOV DOW DPS DTE DD DUK DNB ETFC EMN ETN EBAY ECL EIX EW EA EMC EMR ESV ETR EOG EQT EFX EQR EL EXC EXPE EXPD ESRX XOM FFIV FDO FAST FII FDX FIS FITB FHN FSLR FE FISV FLIR FLS FLR FMC FTI F FRX FOSL BEN FCX FTR GME GCI GPS GD GE GIS GPC GNW GILD GS GT GOOG GWW HAL HOG HAR HRS HIG HAS HCP HCN HNZ HP HES HPQ HD HON HRL HSP HST HCBK HUM HBAN ITW IR TEG INTC ICE IBM IFF IGT IP IPG INTU ISRG IVZ IRM JBL JEC JDSU JNJ JCI JOY JPM JNPR K KEY KMB KIM KMI KLAC KSS KFT KR LLL LH LRCX LM LEG LEN LUK LXK LIFE LLY LTD LNC LLTC LMT L LO LOW LSI MTB M MRO MPC MAR MMC MAS MA MAT MKC MCD MHP MCK MJN MWV MDT MRK MET PCS MCHP MU MSFT MOLX TAP MON MNST MCO MS MOS MSI MUR MYL NBR NDAQ NOV NTAP NFLX NWL NFX NEM NWSA NEE NKE NI NE NBL JWN NSC NTRS NOC NU NRG NUE NVDA NYX ORLY OXY OMC OKE ORCL OI PCAR PLL PH PDCO PAYX BTU JCP PBCT POM PEP PKI PRGO PFE PCG PM PSX PNW PXD PBI PCL PNC RL PPG PPL PX PCP PCLN PFG PG PGR PLD PRU PEG PSA PHM QEP PWR QCOM DGX RRC RTN RHT RF RSG RAI RHI ROK COL ROP ROST RDC R SWY SAI CRM SNDK SCG SLB SNI STX SEE SHLD SRE SHW SIAL SPG SLM SJM SNA SO LUV SWN SE S STJ SWK SPLS SBUX HOT STT SRCL SYK SUN STI SYMC SYY TROW TGT TEL TE THC TDC TER TSO TXN TXT HSY TRV TMO TIF TWX TWC TIE TJX TMK TSS TRIP TSN TYC USB UNP UNH UPS X UTX UNM URBN VFC VLO VAR VTR VRSN VZ VIAB V VNO VMC WMT WAG DIS WPO WM WAT WPI WLP WFC WDC WU WY WHR WFM WMB WIN WEC WPX WYN WYNN XEL XRX XLNX XL XYL YHOO YUM ZMH ZION";
let NYSE = "PIH TURN FLWS FCCY SRCE VNET TWOU JOBS CAFD EGHT AVHI SHLM AAON ABAX ABEO ABEOW ABIL ABMD AXAS ACIU ACIA ACTG ACHC ACAD ACST AXDX XLRN ANCX ARAY ACRX ACET AKAO ACHN ACIW ACRS ACNB ACOR SQZZ ATVI ACTA ACXM ADMS ADMP ADAP ADUS AEY IOTS ADMA ADBE ADOM ADTN ADRO AAAP ADES AEIS AMD ADXS ADXSW ADVM MAUI AEGN AGLE AEHR AMTX AERI AVAV AEZS AEMD GNMX AFMD AGEN AGRX AGYS AGIO AGNC AGNCB AGNCP AGFS AGFSW AIMT AIRT ATSG AIRG AMCN AKAM AKTX AKBA AKER AKRX AKTS ALRM ALSK AMRI ALBO ABDC ADHD ALDR ALDX ALXN ALCO ALGN ALIM ALJJ ALKS ABTX ALGT AIQ AHGP AMMA ARLP AHPI AMOT ALQA ALLT MDRX AFAM ALNY AOSL GOOG GOOGL SMCP ATEC SWIN AABA ALT ASPS AIMC AMAG AMRN AMRK AYA AMZN AMBC AMBCW AMBA AMCX DOX AMDA AMED UHAL ATAX AMOV AAL ACSF AETI AMNB ANAT AOBC APEI ARII AMRB AMSWA AMSC AMWD CRMT ABCB AMSF ASRV ASRVP ATLO AMGN FOLD AMKR AMPH IBUY ASYS AFSI AMRS ADI ALOG ANAB AVXL ANCB ANDA ANDAR ANDAU ANDAW ANGI ANGO ANIP ANIK ANSS ATRS ANTH ABAC APOG APEN AINV APPF APPN AAPL ARCI APDN APDNW AGTC AMAT AAOI AREX APTI APRI APVO APTO AQMS AQB AQXP ARDM ARLZ PETX ABUS ARCW ABIO RKDA ARCB ACGL ACGLP APLP ARDX ARNA ARCC ARGX AGII AGIIL ARGS ARIS ARKR ARTX ARQL ARRY ARRS DWAT AROW ARWR ARTNA ARTW ASBB ASNA ASND ASCMA APWC ASML AZPN ASMB ASFI ASTE ATRO ALOT ASTC ASUR ASV ATAI ATRA ATHN ATNX ATHX AAPC AAME ACBI ACFC ABY ATLC AAWW AFH AFHBL TEAM ATNI ATOM ATOS ATRC ATRI ATTU LIFE AUBN BOLD AUDC AUPH EARS ABTL ADSK ADP AVDL ATXI AVEO AVXS AVNW AVID AVGR AVIR CAR AHPA AHPAU AHPAW AWRE AXAR AXARU AXARW ACLS AXGN AAXN AXSM AXTI AZRX BCOM RILY RILYL RILYZ BOSC BIDU BCPC BWINA BWINB BLDP BANF BANFP BCTF BKMU BOCH BMRC BMLP BKSC BOTJ OZRK BFIN BWFG BANR BZUN TAPR BHAC BHACR BHACU BHACW BBSI BSET BYBK BV BCBP BECN BSF BBGI BEBE BBBY BGNE BELFA BELFB BLPH BLCM BNCL BNFT BNTC BNTCW BYSI BGCP BGFV BASI ORPN BIOC BCRX BDSI BIIB BIOL BLFS BLRX BMRN BMRA BVXV BVXVW BPTH BIOP BIOS BBC BBP BSTC BSTG BSPM TECH BEAT BIVV BCACU BJRI BBOX BDE BLKB BBRY HAWK BL BKCC ADRA ADRD ADRE ADRU BLMN BCOR BLBD BUFF BHBK BLUE BKEP BKEPP BPMC ITEQ BMCH BOBE BOFI BOFIL WIFI BOJA BOKF BOKFL BNSO BOMN BPFH BPFHP BPFHW EPAY BLVD BLVDU BLVDW BCLI BBRG BDGE BLIN BRID BCOV AVGO BSFT BVSN BYFC BWEN BRCD BRKL BRKS BRKR BMTC BLMT BSQR BWLD BLDR BMLA BUR CFFI CHRW CA CCMP CDNS CDZI CACQ CZR CSTE PRSS CLBS CHY CHI CCD CHW CGO CSQ CAMP CVGW CFNB CALA CALD CALM CLMT ABCD CAC CAMT CSIQ CGIX CPHC CPLA CBF CCBG CPLP CSWC CPTA CPTAG CPTAL CLAC CLACU CLACW CFFN CAPR CSTR CPST CARA CARB CCN CRME CSII CATM CDNA CECO CTRE CARO CART CRZO TAST CRTN CARV CASM CASC CWST CASY CASI CASS CATB CBIO CPRX CATS CATY CATYW CVCO CAVM CBFV CBAK CBOE CDK CDW CECE CELG CELGZ CLDX APOP APOPW CLRB CLRBW CLRBZ CLLS CBMG CLSN CELH CYAD CEMP CETX CETXP CETXW CDEV CSFL CETV CFBK CENT CENTA CVCY CENX CNBKA CNTY CRNT CERC CERCW CERN CERU CERS KOOL CEVA CFCO CFCOU CFCOW CSBR CYOU HOTR CTHR GTLS CHTR CHFN CHKP CHEK CHEKW CEMI CHFC CCXI CHMG CHKE CHFS CHMA PLCE CMRX CADC CALI CAAS CBPO CCCL CCCR CCRC JRJC HGSH CNIT CJJD CLDC HTHT CHNR CREG CNTF CXDC CCIH CNET IMOS CDXC CHSCL CHSCM CHSCN CHSCO CHSCP CHDN CHUY CDTX CMCT CMPR CINF CIDM CTAS CRUS CSCO CTRN CZNC CZWI CZFC CIZN CTXS CHCO CIVB CIVBP CDTI CLNE CLNT CACG YLDE LRGE CLFD CLRO CLSD CLIR CLIRW CBLI CSBK CLVS CMFN CME CCNE CWAY COBZ COKE CDXS CVLY JVA CCOI CGNT COGT CGNX CTSH COHR CHRS COHU CLCT COLL CIGI CBAN COLB COLM CMCO CBMX CBMXW CMCSA CBSH CBSHP CUBN CHUBA CHUBK CVGI COMM JCS ESXB CFBI CYHHZ CTBI CWBC CVLT CGEN CPSI CTG CHCI CMTL CNAT CNCE CXRX CCUR CDOR CFMS CNFR CNMD CTWS CNOB CNXR CONN CNSL CWCO CNACU CPSS CFRX CTRV CTRL CPAA CPAAU CPAAW CPRT CRBP CORT CORE CORI CSOD CRVL CRVS CSGP COST CPAH ICBK COUP CVTI COVS COWN COWNL PMTS CPSH CRAI CBRL BREW CRAY CACC USOI CREE CRESY CRSP CRTO CROX CCRN CRDS CRWS CYRX CYRXW CSGS CCLP CSPI CSWI CSX CTIC CTIB CTRP CUNB CUI CPIX CMLS CRIS CUTR CVBF CVV CYAN CYBR CYBE CYCC CYCCP CBAY CY CYRN CONE CYTK CTMX CYTX CYTXW CTSO CYTR DJCO DAKT DRIO DRIOW DZSI DSKE DSKEW DAIO DRAM DWCH PLAY DTEA DFNL DUSA DWLD DWSN DBVT DFRG TACO TACOW DCTH DMPI DGAS DELT DELTW DENN XRAY DEPO DERM DEST DXLG DSWL DTRM DXCM DXTR DHXM DHIL FANG DCIX DRNA DFBG DFFN DGII DGLT DMRC DRAD DGLY APPS DCOM DMTX DIOD DISCA DISCB DISCK DISH DVCR SAUC DLHC BOOM DNBF DLTR DGICA DGICB DMLP DORM EAGL EAGLU EAGLW DRWI DRYS DSPG DLTH DNKN DRRX DXPE DYSL DYNT DVAX ETFC EBMT EGBN EGLE EGRX EWBC EACQ EACQU EACQW EML EVBS EVGBC EVSTC EVLMC EBAY EBAYL EBIX ELON ECHO SATS EEI ESES EDAP EDGE EDGW EDIT EDUC EGAN EGLT EHTH EIGR EKSO LOCO EMITF ESLT ERI ESIO EA EFII ELSE ELEC ELECU ELECW EBIO DWAC ESBK ELTK EMCI EMCF EMKR EMMS NYNY ENTA ECPG WIRE ENDP ECYT ELGX NDRA NDRAU NDRAW EIGI WATT EFOI ERII EXXI ENOC ENG ENPH ESGR ENFC ENTG ENTL ETRM EBTC EFSC ENZY EPZM PLUS EQIX EQFN EQBK ERIC ERIE ESCA ESPR ESSA EPIX ESND ETSY CLWT EEFT ESEA EVEP EVBG EVK MRAM EVLV EVGN EVOK EVOL EXA EXAS EXAC EXEL EXFO EXLS EXPE EXPD EXPO ESRX XOG EXTR EYEG EYEGW EZPW FFIV FB FRP FALC DAVE FANH FARM FMAO FFKT FMNB FARO FAST FATE FBSS FNHC FHCO FENX GSM FCSC FGEN ONEQ LION FDUS FRGI FSAM FSC FSCFL FSFR FITB FITBI FNGN FISI FNSR FNJN FNTE FNTEU FNTEW FEYE FBNC FNLC FRBA BUSE FBIZ FCAP FCFS FCNCA FCBC FCCO FCFP FBNK FDEF FFBC FFBCW FFIN THFF FFNW FFWM FGBI FHB INBK INBKL FIBK FRME FMBH FMBI FNWB FSFG FSLR FSBK FAAR FPA BICK FBZ FCAL FCAN FTCS FCEF FCA SKYY RNDM FDT FDTS FVC FV IFV FEM RNEM FEMB FEMS FTSM FEP FEUZ FGM FTGC FTHI HYLS FHK FTAG FTRI FPXI YDIV FJP FEX FTC RNLC FTA FLN FTLB LMBS FMB FMK FNX FNY RNMC FNK FAD FAB MDIV MCEF QABA FTXO QCLN GRID CIBR FTXG CARZ FTXN FTXH FTXD FTXL FONE TDIV FTXR QQEW QQXT QTEC AIRR QINC RDVY RFAP RFDI RFEM RFEU FTSL FYX FYC RNSC FYT FKO FCVT FDIV FSZ FTW FIXD TUSA FKU RNDV FUNC FUSB SVVC FSV FISV FIVE FPRX FVE FIVN FLEX FLKS FLXN SKOR LKOR MBSD ASET ESGG ESG QLC FPAY FLXS FLIR FLDM FFIC FNBG FOMX FOGO FONR FRSX FH FORM FORTY FORR FRTA FTNT FBIO FMCI FMCIR FMCIU FMCIW FWRD FORD FWP FOSL FMI FOXF FRAN FELE FKLYU FRED RAIL FEIM FRPT FTEO FTR FTRPR FRPH FSBW FSBC FTD FTEK FCEL FLGT FORK FLL FULT FSNN FTFT FFHL WILC GTHX FOANC MOGLC GAIA GLPG GALT GALE GLMD GLPI GPIC GRMN GARS GDS GEMP GENC GNCMA GFN GFNCP GFNSL GENE GNUS GNMK GNCA GHDX GNTX THRM GEOS GABC GERN GEVO ROCK GIGM GIGA GIII GILT GILD GBCI GLAD GLADO GOOD GOODM GOODO GOODP GAIN GAINM GAINN GAINO LAND LANDP GLBZ GBT GLBR ENT GBLI GBLIL GBLIZ GPAC GPACU GPACW SELF GSOL GWRS KRMA FINX ACTX BFIT SNSR LNGR MILN EFAS QQQC BOTZ CATH SOCL ALTY SRET YLCO GLBS GLUU GLYC GOGO GLNG GMLP GDEN GOGL GBDC GTIM GPRO GSHT GSHTU GSHTW GOV GOVNI GPIA GPIAU GPIAW LOPE GRVY FULLL GECC GEC GLDD GSBC GNBC GRBK GPP GPRE GCBC GLRE GSUM GRIF GRFS GRPN OMAB GGAL GSIT GSVC GTXI GTYH GTYHU GTYHW GBNK GNTY GFED GUID GIFI GURE GPOR GWPH GWGH GYRO HEES HLG HNRG HALL HALO HBK HLNE HBHC HBHCL HNH HAFC HQCL HONE HDNG HLIT HRMN HRMNU HRMNW HBIO HCAP HCAPL HAS HA HCOM HWKN HWBK HAYN HDS HIIQ HCSG HQY HSTM HTLD HTLF HTBX HEBT HSII HELE HMNY HMTV HNNA HSIC HTBK HFWA HCCI MLHR HRTX HSKA HIBB SNLN HPJ HIHO HIMX HIFS HSGX HMNF HMSY HOLI HOLX HBCP HOMB HFBL HMST HMTA HTBI HOFT HOPE HFBC HBNC HZNP HRZN DAX QYLD HDP HPT TWNK TWNKW HMHC HWCC HOVNP HBMD HSNI HTGM HUBG HSON HDSN HUNT HUNTU HUNTW HBAN HBANN HBANO HBANP HURC HURN HCM HBP HVBC HYGS IDSY IAC IBKC IBKCO IBKCP ICAD IEP ICCH ICFI ICHR ICLR ICON ICUI IPWR INVE IDRA IDXX IESC IROQ IFMK RXDX INFO IIVI KANG IKNX ILG ILMN ISNS IMMR ICCC IMDZ IMNP IMGN IMMU IMRN IMRNW IPXL IMPV PI IMMY INCR INCY INDB IBCP IBTX IDSA INFN INFI IPCC III IFON IMKTA INWK INNL INOD IPHS IOSP ISSC INVA INGN ITEK INOV INO INPX INSG NSIT ISIG INSM INSE IIIN PODD INSY NTEC IART IDTI INTC NTLA IPCI IPAR IBKR ICPT IDCC TILE LINK IMI INAP IBOC ISCA IGLD IIJI IDXG XENT INTX IVAC INTL ITCI IIN INTU ISRG SNAK ISTR ISBC ITIC NVIV IVTY IONS IPAS DTYS DTYL DTUS DTUL DFVS DFVL FLAT DLBS DLBL STPP IPGP CSML IRMD IRTC IRIX IRDM IRDMB IRBT IRWD IRCP PMPT SLQD TLT AIA COMT IXUS FALN IFEU IFGL IGF GNMA HYXE JKI ACWX ACWI AAXJ EWZS MCHI ESGD SCZ ESGE EEMA EUFN IEUS MPCT ENZL QAT UAE ESGU IBB SOXX EMIF ICLN WOOD INDY ISHG IGOV ISRL ITI ITRI ITRN ITUS IVENC IVFGC IVFVC IXYS IZEA JJSF MAYS JBHT JCOM JASO JKHY JACK JXSB JAGX JAKK JMBA JRVR SGQI JSML JSMD JASN JASNW JAZZ JD JSYN JSYNR JSYNU JSYNW JBLU JTPY JCTCF WYIG WYIGU WYIGW JMU JBSS JOUT JNCE JNP JUNO KTWO KALU KALV KMDA KNDI KPTI KAAC KAACU KAACW KBLMU KBSF KCAP KRNY KELYA KELYB KMPH KFFB KERX KEQU KTEC KTCC KFRC KE KBAL KIN KGJI KINS KONE KNSL KIRK KITE KTOV KTOVW KLAC KLXI KONA KOPN KRNT KOSS KWEB KTOS KLIC KURA KVHI FSTR LJPC LSBK LBAI LKFN LAKE LRCX LAMR LANC LCA LCAHU LCAHW LNDC LARK LMRK LMRKO LMRKP LE LSTR LNTH LTRX LSCC LAUR LAWS LAYN LCNB LBIX LPTX LGCY LGCYO LGCYP LTXB DDBI EDBI INFR LVHD UDBI LMAT TREE LXRX LGIH LHCG LLIT LBRDA LBRDK LEXEA LEXEB LBTYA LBTYB LBTYK LILA LILAK LVNTA LVNTB QVCA QVCB BATRA BATRK FWONA FWONK LSXMA LSXMB LSXMK TAX LTRPA LTRPB LPNT LCUT LFVN LWAY LGND LTBR LPTH LLEX LMB LLNW LMNR LINC LECO LIND LINDW LINU LBIO LPCN LQDT LFUS LIVN LOB LIVE LPSN LKQ LMFA LMFAW LMIA LOGI LOGM EVAR CNCR LONE LTEA LORL LOXO LPLA LRAD LYTS LULU LITE LMNX LMOS LUNA MBTF MACQ MACQU MACQW MIII MIIIU MIIIW MBVX MCBC MFNC MTSI MGNX MDGL MAGS MGLN MGIC CALL MNGA MGYR MHLD MSFG MMYT MBUU MLVF MAMS TUSK MANH LOAN MNTX MTEX MNKD MANT MARA MCHX MARPS MRNS MKTX MRLN MAR MBII MRTN MMLP MRVL MASI MTCH MTLS MPAC MPACU MPACW MTRX MAT MATR MATW MXIM MXPT MXWL MZOR MBFI MBFIP MCFT MGRC MDCA MFIN MFINL MTBC MTBCP MNOV MDSO MDGS MDWD MDVX MDVXW MEDP MEIP MLCO MLNX MELR MTSL MELI MBWM MERC MRCY EBSB VIVO MRDN MRDNW MMSI MACK MSLI MRUS MLAB MESO CASH MEOH MGCD MGEE MGPI MBOT MCHP MU MICT MICTW MSCC MSFT MSTR MVIS MPB MTP MCEP MBCN MSEX MSBI MOFG MIME MDXG MNDO MB NERV MGEN MRTX MIRN MSON MIND MINDP MITK MITL MKSI MMAC MINI MOBL MMDM MMDMR MMDMU MMDMW MLNK MBRX MNTA MOMO MCRI MDLZ MGI MPWR TYPE MNRO MRCC MNST MSDI MSDIW MORN MOSY MOTA MOTAW MTFB MTFBW MPAA MPVD MOXC MRVC MSBF MSG MTGE MTGEP MTSC LABL MFSF MYSZ MYL MYOK MYOS MYRG MYGN NBRV NAKD NNDM NANO NSTG NH NK NSSC NDAQ NTRA NATH NAUH NKSH FIZZ NCMI NCOM NESR NESRW NGHC NGHCN NGHCO NGHCP NGHCZ NHLD NHLDW NATI NRCIA NRCIB NSEC NWLI NAII NHTC NATR BABY ISM JSM NAVI NBTB NCIT NCSM NKTR NEOG NEO NEON NEOS NEOT NVCN NEPT UEPS NETE NTAP NTES NFLX NTGR NLST NTCT NTWK CUR NBIX NDRM NURO NUROW NTRP NBEV NYMT NYMTO NYMTP NLNK NWS NWSA NEWS NEWT NEWTL NEWTZ NXEO NXEOU NXEOW NXST NVET NFEC NODK EGOV NICE NICK NCBS NIHD NVLS NMIH NNBR NDLS NDSN NSYS NBN NTIC NTRS NTRSP NFBK NRIM NWBI NWPX NCLH NWFL NVFY NVMI NVDQ NOVN NOVT NVAX NVLN NVCR NVGN NVUS NUAN NMRX NTNX NUTR NTRI NUVA NVTR QQQX NVEE NVEC NVDA NXPI NXTM NXTD NXTDW NYMX OIIM OVLY OASM OBLN OBSV OBCI OPTT ORIG OCFC OCRX OCLR OFED OCUL OMEX ODP OFS OHAI OVBC OHRP OKTA ODFL OLBK ONB OPOF OSBC OSBCP OLLI ZEUS OFLX OMER OMNT OMCL ON OTIV ONS ONSIW ONSIZ OGXI OMED ONTX ONTXW ONCS OHGI ONVI OTEX OPXA OPXAW OPGN OPGNW OPHT OPK OBAS OCC OPHC OPB ORMP OSUR ORBC ORBK ORLY OREX ONVO SEED OACQ OACQR OACQU OACQW OESX ORIT ORRF OFIX OSIS OSN OTEL OTIC OTTW OTTR OVAS OSTK OVID OXBR OXBRW OXFD OXLC OXLCM OXLCN OXLCO PFIN PTSI PCAR PACB PCBK PEIX PMBC PPBI PAAC PAACR PAACU PAACW PCRX PACW PTIE PAAS PNRA PANL PZZA FRSH PBNC PRTK PRXL PCYG PSTB PKBK PRKR PKOH PTNR PBHC PATK PNBK PATI PEGI PDCO PTEN PAVM PAVMW PAYX PCTY PYDS PYPL PBBI CNXN PCMI PCSB PCTI PDCE PDFS PDLI PDVW SKIS PGC PEGA PCO PENN PVAC PFLT PNNT PWOD PTXP PEBO PEBK PFBX PFIS PBCT PBCTP PUB PRCP PPHM PPHMP PRFT PFMT PERF PERI PESI PPIH PTX PERY PGLC PETS PFSW PGTI PZRX PHII PHIIK PAHC PHMD PLAB PICO PIRS PPC PME PNK PNFP PPSI PXLW PLPM PLYA PLYAW PLXS PLUG PLBC PSTI PLXP PBSK PNTR PCOM POLA COOL POOL POPE BPOP BPOPM BPOPN PBIB PTLA PBPB PCH POWL POWI PLW PKW PFM PYZ PEZ PSL PIZ PIE PXI PFI PTH PRN DWLV PDP DWAQ DWAS DWIN DWTR PTF PUI IDLB PRFZ PAGG PSAU PIO PGJ PEY IPKW PID KBWB KBWD KBWY KBWP KBWR LDRI LALT PNQI PDBC QQQ USLB PSCD PSCC PSCE PSCF PSCH PSCI PSCT PSCM PSCU VRIG PHO PRAA PRAH PRAN PFBC PLPC PFBI PINC LENS PSDO PRGX PSMT PBMD PNRG PRMW PRIM BTEC GENY PSET PY PSC PDEX IPDN PFIE PGNX PRGS PFPT PRPH PRQR BIB UBIO TQQQ ZBIO SQQQ BIS PSEC PTGX PRTO PTI PRTA PVBC PROV PBIP PSDV PMD PTC PTCT PULM PLSE PBYI PCYO IMED FINQ PXS QADA QADB QCRH QGEN QIWI QRVO QCOM QSII QBAK QLYS QTNA QTRH QRHC QUIK QDEL QPAC QPACU QPACW QNST QUMU QTNT RRD RCM RARX RADA RDCM RSYS RDUS RDNT RDWR METC RMBS RAND RLOG GOLD RNDB RPD RAVE RAVN ROLL RICK RCMT RDI RDIB RGSE RELY RNWK RP RETA RCON REPH RRGB RRR RDHL REGN RGNX RGLS REIS RELV MARK RNST REGI RNVA RNVAZ RCII RTK RGEN RPRX RBCAA FRBK REFR RESN RECN ROIC RTRX RVNC RVEN RVLT RWLK REXX RFIL RGCO RIBT RIBTW RELL RIGL NAME RNET RTTR RVSB RLJE RMGN ROBO FUEL RMTI RCKY RMCF ROKA RTNB ROSE ROSEU ROSEW ROSG ROST RBPAA RGLD RPXC RTIX RBCN RUSHA RUSHB RUTH RXII RXIIW RYAAY STBA SANW SCAC SCACU SCACW SBRA SBRAP SABR SAEX SAFT SAGE SAIA SAJA SALM SAL SAFM SASR SGMO SANM GCVRZ SPNS SRPT SVRA SBFG SBFGP SBAC SCSC SMIT SCHN SCHL SCLN SGMS SNI SCYX SEAC SBCF STX SHIP SHIPW SRSC SHLD SHLDW SHOS SPNE SGEN EYES EYESW SCWX SNFCA SEIC SLCT SCSS SIR SELB SIGI LEDS SMTC SENEA SENEB SNES SNH SNHNI SNHNL SNMX SRTS SRTSW SQBG MCRB SREV SFBS SEV SVBI SGBX SGOC SMED SHSP SHEN SHLO TYHT SHPG SCVL SHBI SHOR SSTI SFLY SIFI SIEB SIEN BSRR SRRA SWIR SIFY SIGM SGLB SGLBW SGMA SBNY SBNYW SLGN SILC SLAB SIMO SPIL SRUN SRUNU SRUNW SSRI SAMG SSNT SFNC SLP SINA SBGI SINO SVA SIRI SITO SKYS SKLN SKYW SWKS SLM SLMBP SGH SND SMBK SMSI SMTX LNCE SRAX SCKT SODA SOHU SLRC SUNS SEDG SLNO SLNOW SNGX SNGXW SONC SOFO SNOA SNOAW SONS SPHS SORL SRNE SOHO SOHOB SOHOM SFBC SSB SFST SMBC SONA SBSI OKSB SP SGRP SPKE SPKEP ONCE SPAR SPTN DWFI SPPI ANY SPEX SPI SAVE SPLK SPOK SPWH SBPH FUND SFM SPSC SSNC STAA STAF STMP STLY SPLS SBLK SBLKL SBUX STFC STBZ SNC STDY GASS STLD SMRT STLR STLRU STLRW SBOT STML SRCL SRCLP STRL SHOO SSFN SYBT BANX SGBK SSKN SSYS STRT STRS STRA STRM SBBP STB SCMP SUMR SMMF SSBI SMMT SNBC SNHY SNDE SNSS STKL SPWR RUN SBCP SUNW SMCI SPCB SCON SGC SUPN SPRT SGRY SRDX SBBX SIVB SIVBO SYKE SYMC SYNC SYNL SYNA SNCR SNDX SGYP ELOS SNPS SYNT SYMX SYPR SYRS TROW TTOO TRHC TCMD TAIT TTWO TLND TNDM TLF TANH TPIV TEDU TATT TAYD CGBD TCPC AMTD TEAR TECD TCCO TTGT TGLS TGEN TNAV TTEC TLGT TELL TENX GLBL TERP TVIA TBNK TSRO TESO TSLA TESS TTEK TTPH TCBI TCBIL TCBIP TCBIW TXN TXRH TFSL TGTX ABCO ANDE TBBK BONT CG CAKE CHEF TCFC DSGX DXYN ENSG XONE FINL FBMS FLIC GT HABT HCKT HAIN FITS CUBA INTG JYNT KEYW KHC OLD MDCO MEET MIK MIDD NAVG SLIM STKS ORG PCLN PRSC RMR SPNC TTD ULTI YORW NCTY TRPX TBPH TST TCRD THLD TICC TICCL TIG TTS TIL TSBK TIPT TITN TTNP TVTY TIVO TMUS TMUSP TOCA TNXP TISA TOPS TORM TRCH TSEM CLUB TOWN TPIC TCON TSCO TWMC TACT TRNS TGA TA TANNI TANNL TANNZ TZOO TRVN TCBK TRIL TRS TRMB TRIB TRIP TSC TBK TRVG TRNC TROV TRUE THST TRUP TRST TRMK TSRI TTMI TCX TUES TOUR HEAR TUTI TUTT FOX FOXA TWIN TRCB USCR PRTS USEG GROW UBNT UFPT ULTA UCTT UPL RARE ULBI UMBF UMPQ UNAM UBSH UNB UNXL QURE UBCP UBOH UBSI UCBA UCBI UCFC UBNK UFCS UIHC UNFI UBFO USLM UTHR UG UNIT UNTY OLED UEIC UFPI ULH USAP UVSP UPLD URRE UONE UONEK URBN URGN ECOL USAT USATP USAK UTMD UTSI VLRX VALX VALU VNDA BBH GNRX PPH VWOB VNQI VGIT VCIT VIGI VYMI VCLT VGLT VMBS VONE VONG VONV VTWO VTWG VTWV VTHR VCSH VGSH VTIP BNDX VXUS VEAC VEACU VEACW VREX VRNS VDSI VBLT VBIV WOOF VECO DGLD DSLV UGLD USLV TVIZ TVIX ZIV XIV VIIZ VIIX VEON VRA VCYT VSTM VCEL VRNT VRSN VRSK VBTX VERI VRML VRNA VSAR VTNR VRTX VIA VIAB VSAT VIAV VICL VICR CIZ VSDA CEZ CID CIL CFO CFA CSF CDC CDL VSMV CSB CSA VBND VUSE VIDI VDTH VRAY VKTX VKTXW VBFC VLGEA VNOM VIRC VIRT VRTS VRTSP VRTU VTGN VTL VIVE VVPR VVUS VOD VOXX VYGR VSEC VTVT VUZI VWR WBA WAFD WAFDW WASH WFBI WSBF WVE WAYN WSTG WCFB WDFC FLAG WEB WBMD WCST WB WEBK WEN WERN WSBC WTBA WSTC WMAR WABC WBB WSTL WDC WNEB WLB WPRT WEYS WHLR WHLRD WHLRP WHLRW WHF WHFBL WFM WHLM WVVI WVVIP WLDN WLFC WLTW WIN WING WINA WINS WTFC WTFCM WTFCW AGZD AGND CXSE EMCG EMCB DGRE DXGE HYZD WETF DXJS GULF HYND CRDT DGRW DGRS DXPS UBND WIX WMIH WBKC WWD WKHS WRLD WPCS WPPGY WMGI WMGIZ WSFS WSFSL WSCI WVFC WYNN XBIT XELB XCRA XNCR XBIO XBKS XENE XGTI XGTIW XLNX GLDI SLVO XOMA XPER XPLR XTLB XNET YNDX YERR YTRA YTEN YIN YGYI YRCW YECO YY ZFGN ZAGG ZAIS ZBRA Z ZG ZN ZNWAA ZION ZIONW ZIONZ ZIOP ZIXI ZGNX ZSAN ZUMZ ZYNE ZNGA ";
let AMEX = "XXII FAX IAF CH ABE FCO IF ISL ACU AIII ATNM AE ADK ADK^A ACY AIRI AXU ALO AAU APT AAMC DIT ALN AMS USAS AMPE APHB AXN ARNC^ AKG AINC ASB.WS AST AST.WS AUXO AWX ASM BTG BTN BKJ BCV BCV^A BAA BHB BRN BGSF BPMX BTX BTX.WS BGI BZM MHE BLE BLJ BFY BHV BDR BRG BRG^A BRG^C BRG^D BVX BWL.A BTI CEI CANF ROX CAW CVM CVM.WS CEF CET LEU CCF CQH CQP LNG CVR CPHI CKX GLV GLQ GLO MOC CIX LODE CTO MCF CUO CMT CVRS CRMD CRF CLM CVU CIK DHY CRHM CRVP DXR VCF VFL VMM DLA DNN DGSE DPW DSS DMF GRF EVM EIA CEV EVV MAB MMV MIW EMI EIM EIV EMJ EVJ ENX NYH EVY EIO EVO EIP EVP ELMD ELLO ECF EMAN MSN UUUU UUUU.WS ENRJ ENSV ESNC EGI EVI ERN ESP EMX EVBN EPM XRA FPP FPP.WS FEN BDL FSI FTF FSP FRD GGN GGN^B EGAS GST GST^A GST^B JOB GMO GSB GSAT GLOW GORO GSV AUMN GSS GV GDP GTE GPL SIM GVP HEB HLM^ HMG HUSA IBIO IBO IEC IMUC IMUC.WS IMH IMO IOT IRT IGC INFU IHT NSPR NSPR.WS NSPR.WS.B IFMI IDN INS THM INTT INUV VKI ISR ISDR JRJR KIQ KLDX LTS LTS^A LAQ LGL LBY LLEX LIQT MAG MJCO MHH MTNB IPB MXC CCA MICR MLSS MVF MZA MYO NNVC ATEST ATEST.A ATEST.B ATEST.C NHC NAVB NTIP NBW NHS NBH NML NBO NRO UWN NSU GBR NEN NGD NXE HLTH NSAT NAK NOG NBY NG NTN NJV NPN OCX OGEN TIS ONP ORM PHF PCG^A PCG^B PCG^C PCG^D PCG^E PCG^G PCG^H PCG^I PTN PARR PZG TEUM PRK PED PFNX HNW PLG PLYM PLM PW PW^A PLX RLGT RLGT^A UTG REED RWC RCG RVP RNN REI RIF SACH SGA SSN SNMP SAND SEB SENS SVT SIF SVM SKY XPL SCE^B SCE^C SCE^D SCE^E SGB LOV SRCI SGY.WS STRP SSY SDPI STS SYN TKAT TRX TGB TIK TGC GLU GLU^A GGO GGO^A TXMD TMP TAT TRXC TMQ TPHS TRT HTM UFAB UAMY UUU UQM URG UEC VSR VII VHC VGZ VNRX VISI EAD ERC ERH SBI WRN WYY WTT XTNT YUMA ZDGE ";
let fs = require("fs");
const Throttle = require('superagent-throttle');
let throttle = new Throttle({
    active: true,     // set false to pause queue
    rate: 1000,          // how many requests can be sent every `ratePer`
    ratePer: 1000,   // number of ms in which `rate` requests may be sent
    concurrent: 2     // how many requests can be sent concurrently
});

/*
* Criteria:
* free cashflow must be positive
* return on equity: >12%
* return on assets: >8%
* Net profit margin: must be positive
*/

//default params, increase to make more strict or vice versa
let ROE = 12;
let ROA = 8;
let NPM = 0;

$( () =>
{
    $("#filter").click( () =>
    {
        let userROE = $("#roe").val();
        let userROA = $("#roa").val();

        let isNYSE = $("#NYSE").is(':checked');
        let isAMEX = $("#AMEX").is(':checked');
        let isSandP = $("#SandP").is(':checked');

        let companies = "";

        if(userROE != "") ROE = userROE;
        if(userROA != "") ROA = userROA;

        if(isNYSE) companies += NYSE;
        if(isAMEX) companies += AMEX;
        if(isSandP) companies += companiesSandP;

        if(!isNYSE && !isSandP && !isSandP)
        {
            alert("no exchange chosen");
            return;
        }

        let companyArray = companies.split(" ");

        getDataOnCompanies(companyArray);
    });


    function makeRequest(symbol)
    {
        let url = "http://financials.morningstar.com/ajax/exportKR2CSV.html?t=" + symbol;
        request
            .get(url)
            .use(throttle.plugin())
            .end((err, data) =>
            {
                try
                {
                    let result = data.text;
                    if(result == "We’re sorry. There is no available information in our database to display."
                        || result.includes("502 Proxy Error" || result.includes("Morningstar.com Error Page"))) return;

                    let resultArray = result.split("\n");

                    for(let i =0; i < resultArray.length; i++)
                    {
                        if(resultArray[i].includes("Free Cash Flow/Net Income") && resultArray[i].includes("-"))
                        {
                            return;
                        }
                        else if(resultArray[i].includes("Return on Equity"))
                        {
                            if(!filterByCriteria(resultArray[i], ROE)) return;
                        }
                        else if(resultArray[i].includes("Return on Assets"))
                        {
                            if(!filterByCriteria(resultArray[i], ROA)) return;
                        }
                        else if(resultArray[i].includes("Net Margin %"))
                        {
                            //must be positive i.e. greater than 0
                            if(!filterByCriteria(resultArray[i], NPM)) return;
                        }
                    }
                    //if it passes all the criteria then write to file
                    displayLink(symbol, url);
                }
                catch(exception)
                {
                    console.log(exception);
                }

            });
    }


    function getDataOnCompanies(arrayOfCompanies)
    {
        for(company of arrayOfCompanies)
        {
            //limits requests so that the api won't seize up
            let symbol = company.replace(" ", "");
            makeRequest(symbol);
        }
    }

    function displayLink(symbol, url)
    {
        console.log("company passes, symbol is: " + symbol);
        $("#companyLinks").append("<a href=" + url + ">" + symbol + "</a>" + "<br>");
    }

    function filterByCriteria(results, requirement)
    {
        let filteredResult = results.replace(/[^0-9.]/g, " ");
        let noWhiteSpace = filteredResult.toString().trim();
        let filteredNumbers = noWhiteSpace.split(" ");

        for(i=0; i < filteredNumbers.length; i++)
        {
            if(filteredNumbers[i] < requirement)
            {
                return false;
            }
        }
        return true;
    }

});


},{"fs":11,"superagent":4,"superagent-throttle":3}],2:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],3:[function(require,module,exports){
'use strict';

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## default options
 */
let defaults = {
  // start unpaused ?
  active: true,
  // requests per `ratePer` ms
  rate: 40,
  // ms per `rate` requests
  ratePer: 40000,
  // max concurrent requests
  concurrent: 20
};

/**
 * ## Throttle
 * The throttle object.
 *
 * @class
 * @param {object} options - key value options
 */
class Throttle extends _events2.default {
  constructor(options) {
    super();
    // instance properties
    this._options({
      _requestTimes: [0],
      _current: 0,
      _buffer: [],
      _serials: {},
      _timeout: false
    });
    this._options(defaults);
    this._options(options);
  }

  /**
   * ## _options
   * updates options on instance
   *
   * @method
   * @param {Object} options - key value object
   * @returns null
   */
  _options(options) {
    for (let property in options) {
      if (options.hasOwnProperty(property)) {
        this[property] = options[property];
      }
    }
  }

  /**
   * ## options
   * thin wrapper for _options
   *
   *  * calls `this.cycle()`
   *  * adds alternate syntax
   *
   * alternate syntax:
   * throttle.options('active', true)
   * throttle.options({active: true})
   *
   * @method
   * @param {Object} options - either key value object or keyname
   * @param {Mixed} [value] - value for key
   * @returns null
   */
  options(options, value) {
    if (typeof options === 'string' && value) {
      options = { options: value };
    }
    this._options(options);
    this.cycle();
  }

  /**
   * ## next
   * checks whether instance has available capacity and calls throttle.send()
   *
   * @returns {Boolean}
   */
  next() {
    let throttle = this;
    // make requestTimes `throttle.rate` long. Oldest request will be 0th index
    throttle._requestTimes = throttle._requestTimes.slice(throttle.rate * -1);

    if (
    // paused
    !throttle.active ||
    // at concurrency limit
    throttle._current >= throttle.concurrent ||
    // less than `ratePer`
    throttle._isRateBound() ||
    // something waiting in the throttle
    !throttle._buffer.length) {
      return false;
    }
    let idx = throttle._buffer.findIndex(request => {
      return !request.serial || !throttle._serials[request.serial];
    });
    if (idx === -1) {
      throttle._isSerialBound = true;
      return false;
    }
    throttle.send(throttle._buffer.splice(idx, 1)[0]);
    return true;
  }

  /**
   * ## serial
   * updates throttle.\_serials and throttle.\_isRateBound
   *
   * serial subthrottles allow some requests to be serialised, whilst maintaining
   * their place in the queue. The _serials structure keeps track of what serial
   * queues are waiting for a response.
   *
   * ```
   * throttle._serials = {
   *   'example.com/end/point': true,
   *   'example.com/another': false
   * }
   * ```
   *
   * @param {Request} request superagent request
   * @param {Boolean} state new state for serial
   */
  serial(request, state) {
    let serials = this._serials;
    let throttle = this;
    if (request.serial === false) {
      return;
    }
    if (state === undefined) {
      return serials[request.serial];
    }
    if (state === false) {
      throttle._isSerialBound = false;
    }
    serials[request.serial] = state;
  }

  /**
   * ## _isRateBound
   * returns true if throttle is bound by rate
   *
   * @returns {Boolean}
   */
  _isRateBound() {
    let throttle = this;
    return Date.now() - throttle._requestTimes[0] < throttle.ratePer && throttle._buffer.length > 0;
  }

  /**
   * ## cycle
   * an iterator of sorts. Should be called when
   *
   *  - something added to throttle (check if it can be sent immediately)
   *  - `ratePer` ms have elapsed since nth last call where n is `rate` (may have
   *    available rate)
   *  - some request has ended (may have available concurrency)
   *
   * @param {Request} request the superagent request
   * @returns null
   */
  cycle(request) {
    let throttle = this;
    if (request) {
      throttle._buffer.push(request);
    }
    clearTimeout(throttle._timeout);

    // fire requests
    // throttle.next will return false if there's no capacity or throttle is
    // drained
    while (throttle.next()) {}

    // if bound by rate, set timeout to reassess later.
    if (throttle._isRateBound()) {
      let timeout;
      // defined rate
      timeout = throttle.ratePer;
      // less ms elapsed since oldest request
      timeout -= Date.now() - throttle._requestTimes[0];
      // plus 1 ms to ensure you don't fire a request exactly ratePer ms later
      timeout += 1;
      throttle._timeout = setTimeout(function () {
        throttle.cycle();
      }, timeout);
    }
  }

  /**
   * ## send
   *
   * sends a queued request.
   *
   * @param {Request} request superagent request
   * @returns null
   */
  send(request) {
    let throttle = this;
    throttle.serial(request, true);

    // declare callback within this enclosure, for access to throttle & request
    function cleanup(err, response) {
      throttle._current -= 1;
      if (err && _events2.default.listenerCount(throttle, 'error')) {
        throttle.emit('error', response);
      }
      throttle.emit('received', request);

      if (!throttle._buffer.length && !throttle._current) {
        throttle.emit('drained');
      }
      throttle.serial(request, false);
      throttle.cycle();
      // original `callback` was stored at `request._maskedCallback`
      request._maskedCallback(err, response);
    }

    // original `request.end` was stored at `request._maskedEnd`
    request._maskedEnd(cleanup);
    throttle._requestTimes.push(Date.now());
    throttle._current += 1;
    this.emit('sent', request);
  }

  /**
   * ## plugin
   *
   * `superagent` `use` function should refer to this plugin method a la
   * `.use(throttle.plugin())`
   *
   * mask the original `.end` and store the callback passed in
   *
   * @method
   * @param {string} serial any string is ok, it's just a namespace
   * @returns null
   */
  plugin(serial) {
    let throttle = this;
    // let patch = function(request) {
    return request => {
      request.throttle = throttle;
      request.serial = serial || false;
      // replace request.end
      request._maskedEnd = request.end;
      request.end = function (callback) {
        // store callback as superagent does
        request._maskedCallback = callback || function () {};
        // place this request in the queue
        request.throttle.cycle(request);
        return request;
      };
      return request;
    };
  }
}

module.exports = Throttle;
},{"events":12}],4:[function(require,module,exports){
/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = require('component-emitter');
var RequestBase = require('./request-base');
var isObject = require('./is-object');
var isFunction = require('./is-function');
var ResponseBase = require('./response-base');
var shouldRetry = require('./should-retry');

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only verison of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
      status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str){
  var parse = request.parse[this.type];
  if(this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
        new_err.original = err;
        new_err.response = res;
        new_err.status = res.status;
      }
    } catch(e) {
      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can substitute for options
    options = pass;
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    }
  }

  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + btoa(user + ':' + pass));
    break;

    case 'auto':
      this.username = user;
      this.password = pass;
    break;
      
    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
    break;  
  }
  return this;
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  // console.log(this._retries, this._maxRetries)
  if (this._maxRetries && this._retries++ < this._maxRetries && shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */

Request.prototype._appendQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if (isFunction(this._sort)) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._appendQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  }
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn){
  var req = request('OPTIONS', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn){
  var req = request('DELETE', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

},{"./is-function":5,"./is-object":6,"./request-base":7,"./response-base":8,"./should-retry":9,"component-emitter":2}],5:[function(require,module,exports){
/**
 * Check if `fn` is a function.
 *
 * @param {Function} fn
 * @return {Boolean}
 * @api private
 */
var isObject = require('./is-object');

function isFunction(fn) {
  var tag = isObject(fn) ? Object.prototype.toString.call(fn) : '';
  return tag === '[object Function]';
}

module.exports = isFunction;

},{"./is-object":6}],6:[function(require,module,exports){
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;

},{}],7:[function(require,module,exports){
/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = require('./is-object');

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, read, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  return this;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {
  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject){
      self.end(function(err, res){
        if (err) innerReject(err); else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
}

RequestBase.prototype.catch = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
}

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};


/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {

  // name should be either a string or an object.
  if (null === name ||  undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on){
  // This is browser-only functionality. Node side is no-op.
  if(on==undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function(){
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};


/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};


/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
}

},{"./is-object":6}],8:[function(require,module,exports){

/**
 * Module dependencies.
 */

var utils = require('./utils');

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field){
    return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
};

},{"./utils":10}],9:[function(require,module,exports){
var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
module.exports = function shouldRetry(err, res) {
  if (err && err.code && ~ERROR_CODES.indexOf(err.code)) return true;
  if (res && res.status && res.status >= 500) return true;
  // Superagent timeout
  if (err && 'timeout' in err && err.code == 'ECONNABORTED') return true;
  if (err && 'crossDomain' in err) return true;
  return false;
};

},{}],10:[function(require,module,exports){

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, shouldStripCookie){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  if (shouldStripCookie) {
    delete header['cookie'];
  }
  return header;
};
},{}],11:[function(require,module,exports){

},{}],12:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}]},{},[1]);

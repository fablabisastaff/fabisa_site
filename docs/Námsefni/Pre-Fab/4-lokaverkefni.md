# Lokaverkefni

## Fyrsta uppkast

Í þessari viku skissar þú upp hugmynd að lokaverkefni í Fab Academy. Best er að hafa nokkrar hugmyndir í takinu og nota kröfurnar um lokaverkefni til að velja eina af þeim:

> - Your project should incorporate 
    - 2D and 3D design,
    - additive and subtractive fabrication processes,
    - electronics design and production,
    - embedded microcontroller interfacing and programming,
    - system integration and packaging
> - Where possible, you should make rather than buy the parts of your project
  - Projects can be separate or joint, but need to show individual mastery of the skills, and be independently operable 

*(úr Fab Academy 2024 með fyrirvara um breytingar 2025)*

Góð dæmi um lokaverkefni eru [hér](http://academy.cba.mit.edu/classes/project_development/index.html){:rel="nofollow"}. 

[Innblástur úr Fab Academy 2024](https://finalprojects.fabacademy.org/#/schedule/2024){:rel="nofollow"}

## Inventory

Þú tekur líka saman lista af efnum og íhlutum sem þarf að panta áður en Fab Academy hefst og gengur úr skugga um að öll tækin í smiðjunni séu í góðu standi. Ef þig langar t.d. að nota [Valchromat](https://www.thco.is/product-category/a-vegginn/valchromat/){:rel="nofollow"} í staðinn fyrir krossvið í fræsingarvikunni eða tvílitað [plexigler](https://hobarts.com/collections/laminate) eða [MDF](https://hobarts.com/collections/sublimation){:rel="nofollow"} til að fá ákveðinn [effekt](https://fablableon.org/wp-content/uploads/2024/07/2.jpg){:rel="nofollow"} í laservikunni, þá þarf að panta það með góðum fyrirvara.

[Fab Lab Inventory](https://inventory.fabcloud.io/){ .md-button }

### Örtölvur í Fab Academy

Hér er yfirlit yfir örtölvurnar sem þið hafið í Fab Lab Inventory. Vonandi hjálpar þetta ykkur að velja örtölvu fyrir ykkar lokaverkefni.

Traustar:

- Arduino Uno er vinsælasta örtölvubrettið sem sögur fara af. Það er gott að eiga Arduino Uno þótt það sé ekki lengur í Fab Lab Inventory. ATmega328 örtölvan í Arduino Uno er komin til ára sinna og er ekki eins öflug og þær nýjustu, en það er mest til af upplýsingum, leiðbeiningum og hugbúnaði fyrir þessa örtölvu af þeim öllum. Það getur því verið gott að prófa hlutina fyrst með Arduino Uno, því að þá geturðu jafnan útilokað að örtölvan sé vandamálið.

Ódýrar:

- ATtiny412 er afar ódýr örtölva sem leynir á sér. Hún hentar vel til að gera einn hlut. [Ég](https://fabacademy.org/2023/labs/isafjordur/students/svavar-konradsson/assignments/week13.html){:rel="nofollow"}, [Hafey](https://fabacademy.org/2023/labs/isafjordur/students/hafey-hallgrimsdottir/week13.html){:rel="nofollow"} og [Andri](https://fabacademy.org/2023/labs/akureyri/students/andri-semundsson/pages/week13.html){:rel="nofollow"} notuðum ATtiny412 sýnidæmi frá Adrian Torres til að hanna bretti sem senda skilaboð sín á milli í Networking and Communications vikunni.
- Þegar tengja á fleiri hluti við örtölvuna er hægt að nota ATtiny1614 eða ATtiny3226, sem eru með fleiri pinna og fídusa.
- AVR128DB32 er ódýr en afar góð í að taka við mælingum frá analog skynjurum (er líklega með bestu analog-to-digital breytuna). Hér er [dæmi](http://www.ulisp.com/show?3I99) um rás sem byggir á AVR128 örtölvu með öðruvísi fótspor.
- SAMD11 er nútímaleg ARM örtölva sem er hægt að tengja beint við USB, en það sem gerir henni erfitt fyrir er að hún fékk álíka lítið minni og ódýru ATtiny örtölvurnar. Forritapakkar (software libraries) nota annaðhvort ýmis trikk til að passa inn í takmarkanir ATtiny eða þeir eru skrifaðir fyrir öflugar ARM örtölvur og gera ráð fyrir nægu minni. Nemendur í Fab Academy hafa skrásett að minnið í SAMD11 sé fljótt að yfirfyllast ef maður bætir við einum eða tveimur forritapökkum t.d. til að stýra skjá eða Neopixel díóðum. Ef minnið yfirfyllist, þá er örtölvan orðin gagnslaus (þá þarf að minnka kóðann sem maður setur inn á hana til að fá hana til að virka). Bestu notin sem ég hef fundið fyrir SAMD11 er [SAMD11 dual serial](https://fabacademy.org/2020/labs/ulb/students/quentin-bolsee/projects/dual_serial/){:rel="nofollow"} frá Quentin Bolsée, sem má nota til að forrita ATtiny örtölvu og eiga í serial samskiptum við hana á sama tíma. Kannski er best að hugsa um SAMD11 sem ATtiny412 sem getur talað beint við USB. USB samskipti eru aðalatriðið; og það er gott að láta þessa örtölvu fá eitt tiltölulega einfalt verkefni (og nota bene: analog-to-digital breytan í henni er jafngóð og í SAMD21).

Öflugar:

- Xiao RP2040 fyrir vinnslugetu
- Xiao ESP32-C3 fyrir WiFi
- Xiao SAMD21 er með afar góða analog-to-digital breytu til að lesa af skynjurum (SAMD21 er líka til sem stök örtölva í Fab Lab Inventory).
- Ég læt mína nemendur fá Raspberry Pi Pico W til að setja á brauðbretti og prófa að tengja hluti við. Hún er með RP2040 örtölvuna, marga pinna og WiFi. Ég mæli með [þessum myndböndum](https://www.youtube.com/playlist?list=PLGs0VKk2DiYz8js1SJog21cDhkBqyAhC5){:rel="nofollow"} til að læra MicroPython með Raspberry Pi Pico W (eða Xiao RP2040, ef maður sleppir WiFi hlutanum).

#### Mín meðmæli

Ég mæli sterklega með að nota staka örtölvu eins og ATtiny eða SAMD21 í lokaverkefninu ykkar, frekar en bretti eins og Xiao. Ástæðan er að þá eruð þið komin á hæsta stigið í rafrásagerð í Fab Academy. Þar til árið 2023 var alltaf gerð krafa um að setja örtölvuna á brettið, en núna má nota Xiao bretti og Raspberry Pi Pico W. Það er mjög þægilegt að nota þessi tilbúnu bretti, en þá kynnist þið ekki ákveðnum grundvallaratriðum. 

Ég er ansi hrifinn af [SAMD21](https://www.digikey.com/en/products/detail/microchip-technology/ATSAMD21E18A-AUT/4878871){:rel="nofollow"}. Að mínu mati er SAMD21 arftaki ATmega328P örtölvunnar sem er í Arduino Uno.

ATmega328P getur ekki staðið ein og sér; hún þarf kristal til að nota sem klukku og hún þarf líka USB-to-serial converter til þess að hægt sé að forrita hana í gegnum USB tengi. 
 
SAMD21 er miklu öflugri og þægilegri. Hún er með þetta allt innbyggt. SAMD21 getur staðið ein og sér; eina aukaskrefið sem bætist við þegar maður notar SAMD21 er að setja bootloader á hana með forritara. Eftir það er hægt að forrita hana beint í gegnum USB tengi, og hún styður bæði við Arduino IDE og MicroPython. Hún er líka með mjög góða analog-to-digital breytu, sem gerir allar mælingar með analog skynjurum betri. 

En fyrst og fremst er það mest töff að nota örtölvuna eina og sér og setja hana á brettið.

#### Aflgjafar fyrir lokaverkefnin í Fab Academy

Það er ekki gott að enda með lokaverkefni sem er bara hægt að setja í gang með [bench power supply](https://www.amazon.com/Siglent-Technologies-SPD3303X-Triple-Output/dp/B01410O424){:rel="nofollow"}. Hér er dæmi um hvernig á ekki að gera þetta úr Machine Week 2023:

=== "Bakhlið"
    ![TeaManator front](https://fabacademy.org/2023/labs/isafjordur/students/svavar-konradsson/assignments/images/week10/teamanator.jpg){: style="width:100%"}
=== "Framhlið"
    ![TeaManator back](https://fabacademy.org/2023/labs/isafjordur/students/svavar-konradsson/assignments/images/week10/reality.jpg){: style="width:100%"}

Þið þurfið því aðeins að pæla í því hvernig aflgjafa þið þurfið, svo að lokaverkefnið geti staðið eitt og sér.


##### Hversu mikið afl þarftu fyrir Neopixels ljósdíóður?

Í [Neopixel Uberguide](https://learn.adafruit.com/adafruit-neopixel-uberguide/powering-neopixels){:rel="nofollow"} stendur að max straumnotkun hverrar Neopixel díóðu sé 60 milliamper.  

![](https://files.svavar.cc/fab/neopixel-aflgjafi.jpg)

Samkvæmt þessu þá getur [þetta USB hleðslutæki](https://kisildalur.is/category/46/products/3264){:rel="nofollow"} knúið allt að 60 Neopixels. Það er ætti að duga í nánast hvað sem er.
  

##### Hversu mikið afl þarftu til að opna dyr?

![](https://files.svavar.cc/fab/MFG_1528_1512.jpg)  

Til að láta [solenoid](https://www.digikey.com/en/products/detail/adafruit-industries-llc/1512/5353651){:rel="nofollow"} opna dyr þarftu um það bil 0,5A með 12V aflgjafa, skv [þessu datasheet](https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/1917/1512_Web.pdf){:rel="nofollow"}.  

##### Nokkrir aflgjafar sem koma til greina


###### Hefðbundnir spennubreytar  

*   [3-12V 7.2W spennubreytir](https://elko.is/vorur/nedis-spennubreytir-240v-i-3-12v-288101/ACPA006){:rel="nofollow"}
*   [3-12V 24W spennubreytir](https://kisildalur.is/category/46/products/559){:rel="nofollow"} (líklega bestur miðað við verðið)  
*   [5-24V 36W spennubreytir](https://elko.is/vorur/nedis-spennubreytir-230v-i-5-24v-217463/ACPA105){:rel="nofollow"}

###### Hleðslutæki með gamaldags USB-A tengi

Minnstu og ódýrustu USB hleðslutækin gefa bara 1A; það er nóg til að knýja ca. 16 Neopixels. [Svoleiðis hleðslutæki](https://kisildalur.is/category/46/products/835) eru ofan í skúffum á eiginlega öllum heimilum.

Öflugri hleðslutæki:  

*   [5V 2.4A USB-A hleðslutæki](https://elko.is/vorur/sandstrom-12w-usb-a-hledslutaeki-325577/S6W2424){:rel="nofollow"}
*   [5-12V 18W USB-A hleðslutæki](https://elko.is/vorur/nedis-hledslutaeki-18w-usb-a-316797/WCQC302ABK){:rel="nofollow"} (styður QC 3.0, sjá nánari upplýsingar [hér](https://nedis.com/en-us/product/computer-and-mobile/power-supply/usb-chargers/550732027/wall-charger-18-w-quick-charge-feature-15-20-30-a-number-of-outputs-1-usb-a-no-cable-included-automatic-voltage-selection){:rel="nofollow"})
*   [5-12V 18W USB-A hleðslutæki](https://kisildalur.is/category/46/products/3264){:rel="nofollow"} (**ódýrara, líklega best fyrir flest lokaverkefnin, styður QC 3.0, nánari upplýsingar [hér](https://hocotech.com/product/power/wall-chargers/wall-charger-n26-maxim-qc3-0-eu-cable-set/){:rel="nofollow"})**    
*   [5-12V 6A USB-A bílahleðslutæki](https://kisildalur.is/category/46/products/1113){:rel="nofollow"} (styður QC 3.0)
*   [5V 2,4A USB-A power bank](https://kisildalur.is/category/46/products/3573){:rel="nofollow"}
    

Þessi hleðslutæki eru með gamaldags USB-A tengi. Síðan þurfið þið líka að kaupa [USB-A framlengingarsnúru](https://elko.is/vorur/nedis-usb-a-kk-i-usb-a-kvk-snura-135380/CCGB60010BK20){:rel="nofollow"} (eða [venjulega USB-A í USB-A snúru](https://tolvutek.is/Snurur-og-kaplar/USB-kaplar-og-fjoltengi/USB3.0-A-A-kapall%2C-2-metrar%2C-hann-hann%2C-svartur/2_20976.action){:rel="nofollow"} og [millistykki](https://elko.is/vorur/nedis-usb-a-usb-a-millistykki-136890/CCGB60900BK){:rel="nofollow"}) sem liggur yfir í tækið ykkar, og inni í tækinu verður [USB Quick Charge hack](https://fabacademy.org/2018/labs/fablabulb/students/nicolas-decoster/alumnus/projects/qc/){:rel="nofollow"} rafrás sem gerir ykkur kleift að velja spennu fyrir tækið. Ef 5V spenna er nóg þá þurfið þið ekki USB Quick Charge hack rafrásina.    

###### Hleðslutæki með nútíma USB-C tengi

*   [5V 5A USB-C hleðslutæki](https://elko.is/vorur/samsung-hledslutaeki-25w-usb-c-hvitt-341276/EPT2510NWEGEU){:rel="nofollow"} (ég veit ekki hvort það styðji við hærri spennu með QC 3.0, en það gefur a.m.k. nægan straum við 5V spennu)
*   [5-20V 65W USB-A og USB-C hleðslutæki](https://elko.is/vorur/nedis-hledslutaeki-gan-65w-pd-311772/WCGPD65W100BK){:rel="nofollow"} (styður QC 3.0, sjá nánari upplýsingar [hér](https://nedis.com/en-us/product/computer-and-mobile/power-supply/usb-chargers/550783985/wall-charger-65-w-gan-quick-charge-feature-30-325-a-number-of-outputs-3-usb-a-2x-usb-c-automatic-voltage-selection){:rel="nofollow"}) 
*   [5-12V 27W USB-C bílahleðslutæki](https://www.oreind.is/product/hledslutaeki-i-bil-med-usb-c-pd-og-usb-a-qc-27w-59521/){:rel="nofollow"} (styður QC 3.0, getur gefið 18W með USB-A tenginu)

Þessi hleðslutæki eru með nútíma USB-C tengi. Þau eru öflugust. Ég á eftir að gá hvort þau virki fyrir okkur. Síðan þurfið þið líka að kaupa USB-C framlengingarsnúru (það er að segja [USB-A í USB-C snúru](https://elko.is/vorur/nedis-usb-a-i-usb-c-32-gen-1-snura-324922/CCGW61600BK10){:rel="nofollow"} plús [millistykki](https://elko.is/vorur/nedis-usb-a-usb-a-millistykki-136890/CCGB60900BK){:rel="nofollow"}) sem liggur yfir í tækið ykkar, og inni í tækinu verður [USB Quick Charge hack](https://fabacademy.org/2018/labs/fablabulb/students/nicolas-decoster/alumnus/projects/qc/){:rel="nofollow"} rafrás sem gerir ykkur kleift að velja spennu fyrir tækið. Ef 5V spenna er nóg þá þurfið þið ekki USB Quick Charge hack rafrásina.  

###### Batterí

Ef lokaverkefnið þarf að vera langt frá innstungu getið þið notað USB power bank. Ég hef ekki skoðað þá sjálfur.


##### USB Quick Charge hack


Ef þú ætlar að nota íhlut sem þarf hærri spennu en 5V, þá geturðu fengið hvaða spennu sem er á bilinu 3,6V-12V úr USB QC 3.0 hleðslutæki með því að búa til þessa rás. Þú snýrð stilliviðnáminu með skrúfjárni til að stilla spennuna. [USB QC hack rásin](https://fabacademy.org/2018/labs/fablabulb/students/nicolas-decoster/alumnus/projects/qc/){:rel="nofollow"} kemur frá Nicholas de Coster í Fab Lab ULB í Brussel. Meiri upplýsingar koma síðar.

##### USB Power Delivery trigger bretti

Góð leið til að fá háa spennu og mikið afl út úr USB hleðslutæki er að nota USB PD trigger bretti. Hér er eitt sem hefur verið [notað í Fab Lab netverkinu](https://fab.cba.mit.edu/classes/863.23/Harvard/people/Sophie/week10.html){:rel="nofollow"}, svo að ég hugsa að það sé í lagi:

![](https://files.svavar.cc/fab/usb-pd-trigger.jpg)

Brettið fæst á [Amazon](https://www.amazon.com/JUZITAO-Trigger-Charger-Support-Optical/dp/B0D5QRDLQV?th=1){:rel="nofollow"}.

### Út fyrir Fab Lab Inventory

Fab Lab Inventory er sett af vélum og íhlutum sem á að vera til í hverri Fab Lab smiðju. Mikil hugsun hefur farið í íhlutavalið til að bjóða upp á marga möguleika á eins einfaldan hátt og hægt er, og þannig að það sé hægt að endurtaka hlutina í öðrum smiðjum. Fab Lab Inventory er notaleg laug þar sem við lærum að synda. Í fjarska glittir í [órólegt](https://en.wikipedia.org/wiki/2020%E2%80%932023_global_chip_shortage){:rel="nofollow"} úthaf af rafeindaíhlutum þar sem er ýmislegt spennandi að sjá, en það getur auðveldlega gleypt byrjendur.

Þegar þið farið út fyrir Fab Lab Inventory þurfið þið að bjarga ykkur upp á eigin spýtur. Ég gerði það í mínu lokaverkefni og fór mjög varlega í það.

Haustið þegar ég var að undirbúa mig fyrir Fab Academy hafði ég aldrei hannað rafrás, en ég gerði ráð fyrir að ég myndi læra nóg til að búa til rásirnar sem mig vantaði, svo lengi sem ég héldi mig við Fab Lab Inventory eða aðrar rásir með svipuð fótspor. Það gekk eftir. 

Gott er að nota SOIC og önnur fótspor með a.m.k. 0,4 mm á milli pinna, svo að 1/64" fræsitönnin komist á milli þeirra þegar þið fræsið rásina. Það er hægt að fræsa fínni rásir með V-tönn, en það getur verið snúið. Fíngerðasta rásin sem ég notaði var [DRV8313](https://www.digikey.com/en/products/detail/texas-instruments/DRV8313PWPR/3775439){:rel="nofollow"} mótorstýringin, sem er með HTSSOP fótspor. Ég held að það sé nokkurn veginn fíngerðasta fótspor sem er hægt að fræsa rás fyrir með góðu móti. Ég segi "með góðu móti". Ég gerði þó nokkrar litlar fræsitilraunir fyrst og fræsti síðan fimm heil bretti áður en eitt tókst; með síðustu V-tönninni sem við áttum.

Það sem ég passaði upp á í lokaverkefninu var að velja örtölvur og aðrar IC rásir sem eru með Arduino library og góð sýnidæmi, svo að ég myndi ekki rekast á vegg í forrituninni. Þess vegna byggði ég [Baksabrettið](https://fabacademy.org/2023/labs/isafjordur/students/svavar-konradsson/final-project/images/baksi_board.jpg){:rel="nofollow"} á [RGBB Modular Thing](https://github.com/modular-things/modular-things-circuits/tree/main/samd21/rgbb){:rel="nofollow"} og [SimpleFOC Mini](https://simplefoc.com/simplefoc_mini_product_v1){:rel="nofollow"}. Ég blandaði þessum rásum einfaldlega saman og bætti við nokkrum íhlutum. 

Og ég bætti við breakout til að gefa mér aðgang að fleiri pinnum á örtölvunni, ef ég skyldi vilja bæta einhverjum fídusum við eftir á. Það gæti komið sér vel fyrir ykkur líka. [Breakout bretti](http://tatsuro.homma.fabcloud.io/fabacademy/tips/electronics_design/Attiny3216_breakout_board/){:rel="nofollow"} er prentplata þar sem maður tengir litlu pinnana á IC rás beint við stærri pinna sem er auðvelt að setja á brauðbretti eða tengja jumper víra við. Ég reyndi að bæta við [bretti sem skynjar nærveru fólks og stoppar róbótann](https://fabacademy.org/2023/labs/isafjordur/students/svavar-konradsson/final-project/images/sensing_assembly.jpg){:rel="nofollow"} en ég setti 5V á vitlausan pinna á þeirri örtölvu, þannig að það kviknaði aldrei á henni. 

Það hljómar ekki eins og mikið mál að sameina tvær tilbúnar rafrásir, en það var mikil vinna að finna hluti sem virkuðu vel og pössuðu saman. Ég skoðaði allt sem tengist róbótum og burstalausum mótorum sem ég fann á netinu, allt! Ég á mörg hundruð bókamerkja eftir þetta tímabil. Það er ekki gefið að hlutir sem virka hver í sínu lagi virki vel saman. Þess vegna er gott að byrja snemma að reka sig á hindranirnar sem koma óhjákvæmilega upp í lokaverkefninu. 

## Næsta vika

Vika 5: [Tölvuteikning](5-tolvuteikning.md)
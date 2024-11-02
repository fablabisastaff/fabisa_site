# Inventory

## Lokaverkefnið

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

## Íhlutirnir

Þú tekur líka saman lista af efnum og íhlutum sem þarf að panta áður en Fab Academy hefst og gengur úr skugga um að öll tækin í smiðjunni séu í góðu standi. Ef þig langar t.d. að nota [Valchromat](https://www.thco.is/product-category/a-vegginn/valchromat/){:rel="nofollow"} í staðinn fyrir krossvið í fræsingarvikunni eða tvílitað [plexigler](https://hobarts.com/collections/laminate) eða [MDF](https://hobarts.com/collections/sublimation){:rel="nofollow"} til að fá ákveðinn [effekt](https://fablableon.org/wp-content/uploads/2024/07/2.jpg){:rel="nofollow"} í laservikunni, þá þarf að panta það með góðum fyrirvara.

[Fab Lab Inventory](https://inventory.fabcloud.io/){ .md-button }

### Örtölvur í Fab Academy

Hér er yfirlit yfir örtölvurnar sem þið hafið í Fab Lab Inventory. Vonandi hjálpar þetta ykkur að velja örtölvu fyrir ykkar lokaverkefni.

Traustar:

- Arduino Uno er vinsælasta örtölvubrettið sem sögur fara af. Það er gott að eiga Arduino Uno þótt það sé ekki lengur í Fab Lab Inventory. ATmega328 örtölvan í Arduino Uno er komin til ára sinna og er ekki eins öflug og þær nýjustu, en það er mest til af upplýsingum, leiðbeiningum og hugbúnaði fyrir þessa örtölvu af þeim öllum. Það getur því verið gott að prófa hlutina fyrst með Arduino Uno, því að þá geturðu jafnan útilokað að örtölvan sé vandamálið.

Ódýrar:

- ATtiny412 er afar ódýr örtölva sem leynir á sér. Hún hentar vel til að gera einn hlut. [Ég](https://fabacademy.org/2023/labs/isafjordur/students/svavar-konradsson/assignments/week13.html){:rel="nofollow"}, [Hafey](https://fabacademy.org/2023/labs/isafjordur/students/hafey-hallgrimsdottir/week13.html){:rel="nofollow"} og [Andri](https://fabacademy.org/2023/labs/akureyri/students/andri-semundsson/pages/week13.html){:rel="nofollow"} notuðum ATtiny412 sýnidæmi frá Adrian Torres til að hanna bretti sem senda skilaboð sín á milli í Networking and Communications vikunni.
- Þegar tengja á fleiri hluti við örtölvuna er hægt að nota ATtiny1614 eða ATtiny3226, sem eru með fleiri pinna og fídusa.
- AVR128DB32 er ódýr en afar góð í að taka við mælingum frá analog skynjurum (er líklega með bestu analog-to-digital breytuna)
- SAMD11 er nútímaleg ARM örtölva sem er hægt að tengja beint við USB, en það sem gerir henni erfitt fyrir er að hún fékk álíka lítið minni og ódýru ATtiny örtölvurnar. Forritapakkar (software libraries) nota annaðhvort ýmis trikk til að passa inn í takmarkanir ATtiny eða þeir eru skrifaðir fyrir öflugar ARM örtölvur og gera ráð fyrir nægu minni. Nemendur í Fab Academy hafa skrásett að minnið í SAMD11 sé fljótt að yfirfyllast ef maður bætir við einum eða tveimur forritapökkum t.d. til að stýra skjá eða Neopixel díóðum. Ef minnið yfirfyllist, þá er örtölvan orðin gagnslaus (þá þarf að minnka kóðann sem maður setur inn á hana til að fá hana til að virka). Bestu notin sem ég hef fundið fyrir SAMD11 er [SAMD11 dual serial](https://fabacademy.org/2020/labs/ulb/students/quentin-bolsee/projects/dual_serial/){:rel="nofollow"} frá Quentin Bolsée, sem má nota til að forrita ATtiny örtölvu og eiga í serial samskiptum við hana á sama tíma. Kannski er best að hugsa um SAMD11 sem ATtiny412 sem getur talað beint við USB. USB samskipti eru aðalatriðið; og það er gott að láta þessa örtölvu fá eitt tiltölulega einfalt verkefni (og nota bene: analog-to-digital breytan í henni er jafngóð og í SAMD21).

Öflugar:

- Xiao RP2040 fyrir vinnslugetu
- Xiao ESP32-C3 fyrir WiFi
- Xiao SAMD21 er með afar góða analog-to-digital breytu til að lesa af skynjurum (SAMD21 er líka til sem stök örtölva í Fab Lab Inventory).
- Ég læt mína nemendur fá Raspberry Pi Pico W til að setja á brauðbretti og prófa að tengja hluti við. Hún er með RP2040 örtölvuna, marga pinna og WiFi. Ég mæli með [þessum myndböndum](https://www.youtube.com/playlist?list=PLGs0VKk2DiYz8js1SJog21cDhkBqyAhC5){:rel="nofollow"} til að læra MicroPython með Raspberry Pi Pico W (eða Xiao RP2040, ef maður sleppir WiFi hlutanum).

### Út fyrir Fab Lab Inventory

Fab Lab Inventory er sett af vélum og íhlutum sem á að vera til í hverri Fab Lab smiðju. Mikil hugsun hefur farið í íhlutavalið til að bjóða upp á marga möguleika á eins einfaldan hátt og hægt er, og þannig að það sé hægt að endurtaka hlutina í öðrum smiðjum. Fab Lab Inventory er notaleg laug þar sem við lærum að synda. Fyrir utan er [órólegt](https://en.wikipedia.org/wiki/2020%E2%80%932023_global_chip_shortage){:rel="nofollow"} úthaf af rafeindaíhlutum þar sem er ýmislegt spennandi að sjá, en það getur auðveldlega gleypt byrjendur.

Þegar þið farið út fyrir Fab Lab Inventory þurfið þið að bjarga ykkur upp á eigin spýtur. Ég gerði það í mínu lokaverkefni og fór mjög varlega í það.

Haustið þegar ég var að undirbúa mig fyrir Fab Academy hafði ég aldrei hannað rafrás, en ég gerði ráð fyrir að ég myndi læra nóg til að búa til rásirnar sem mig vantaði, svo lengi sem ég héldi mig við Fab Lab Inventory eða aðrar rásir með svipuð fótspor. Það gekk eftir. 

Gott er að nota SOIC og önnur fótspor með a.m.k. 0,4 mm á milli pinna, svo að 1/64" fræsitönnin komist á milli þeirra þegar þið fræsið rásina. Það er hægt að fræsa fínni rásir með V-tönn, en það getur verið snúið. Fíngerðasta rásin sem ég notaði var [DRV8313](https://www.digikey.com/en/products/detail/texas-instruments/DRV8313PWPR/3775439){:rel="nofollow"} mótorstýringin, sem er með HTSSOP fótspor. Ég held að það sé nokkurn veginn fíngerðasta fótspor sem er hægt að fræsa rás fyrir með góðu móti. Ég segi "með góðu móti". Ég gerði þó nokkrar litlar fræsitilraunir fyrst og fræsti síðan fimm heil bretti áður en eitt tókst; með síðustu V-tönninni sem við áttum.

Það sem ég passaði upp á í lokaverkefninu var að velja örtölvur og aðrar IC rásir sem eru með Arduino library og góð sýnidæmi, svo að ég myndi ekki rekast á vegg í forrituninni. Þess vegna byggði ég [Baksabrettið](https://fabacademy.org/2023/labs/isafjordur/students/svavar-konradsson/final-project/images/baksi_board.jpg){:rel="nofollow"} á [RGBB Modular Thing](https://github.com/modular-things/modular-things-circuits/tree/main/samd21/rgbb){:rel="nofollow"} og [SimpleFOC Mini](https://simplefoc.com/simplefoc_mini_product_v1){:rel="nofollow"}. Ég blandaði þessum rásum einfaldlega saman og bætti við nokkrum íhlutum. 

Og ég bætti við breakout til að gefa mér aðgang að fleiri pinnum á örtölvunni, ef ég skyldi vilja bæta einhverjum fídusum við eftir á. Það gæti komið sér vel fyrir ykkur líka. [Breakout bretti](http://tatsuro.homma.fabcloud.io/fabacademy/tips/electronics_design/Attiny3216_breakout_board/){:rel="nofollow"} er prentplata þar sem maður tengir litlu pinnana á IC rás beint við stærri pinna sem er auðvelt að setja á brauðbretti eða tengja jumper víra við. Ég reyndi að bæta við [bretti sem skynjar nærveru fólks og stoppar róbótann](https://fabacademy.org/2023/labs/isafjordur/students/svavar-konradsson/final-project/images/sensing_assembly.jpg){:rel="nofollow"} en ég setti 5V á vitlausan pinna á þeirri örtölvu, þannig að það kviknaði aldrei á henni. 

Það hljómar ekki eins og mikið mál að sameina tvær tilbúnar rafrásir, en það var mikil vinna að finna hluti sem virkuðu vel og pössuðu saman. Ég skoðaði allt sem tengist róbótum og burstalausum mótorum sem ég fann á netinu, allt! Ég á mörg hundruð bókamerkja eftir þetta tímabil. Það er ekki gefið að hlutir sem virka hver í sínu lagi virki vel saman. Þess vegna er gott að byrja snemma að reka sig á hindranirnar sem koma óhjákvæmilega upp í lokaverkefninu. 

Gangi ykkur vel!
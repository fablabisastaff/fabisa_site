# Rafrásasmíði

<iframe width="560" height="315" src="https://www.youtube.com/embed/FHrGah4Nlvk?si=hEuIJ0CSZGGvdYce" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

*Föstudagurinn 11. október 2024 kl. 14:10*

Í þessari viku teiknar þú, fræsir, lóðar og forritar rafrás með ATtiny412 örtölvu. 

[Andri Sæmundsson](https://fabacademy.org/2023/labs/akureyri/students/andri-semundsson/pages/aboutMe.html) í Fab Lab Reykjavík leiðir þig í gegnum allt ferlið. Við þökkum Andra kærlega fyrir myndböndin!

<iframe width="560" height="315" src="https://www.youtube.com/embed/iOPbk1W3X5k?si=NCt4CCv1SNHHpHoO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Í eftirfarandi myndbandi er afhakað við langan lista af „component libraries“. Til að þurfa ekki að smella svona oft með músinni, þá getið þið smellt á efsta boxið og ýtt á bilstöng til að afhaka við það. Svo getið þið farið niður með örvatakkanum   á lyklaborðinu og notað bilstöng til að afhaka við allt saman.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZeAAy6L8AB8?si=BeX0H4-5z8o74AyV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXyL5xjJb7w?si=C7jODm30H_fGgIxt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/knyDOiUZNsc?si=pnsXMMJZcpcKhi6p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/dM3h--A04W4?si=88GzcDYmQqEiNO5y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/2oxuvwRuQNM?si=iW2c2vy_74EiIP-l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Í eftirfarandi myndbandi er sýnt hvernig er hægt að finna þrívíð módel af íhlutum á netinu. Að hafa þrívítt módel af rásinni með öllum íhlutum gerir það auðveldara að teikna hulstur utan um brettið, t.d. með [kicadStepUp](https://github.com/easyw/kicadStepUpMod){:rel="nofollow"}. Ég vil bæta því við að það þarf ekki að finna módel af ATtiny412 á netinu því að sú IC rás er í SOIC-8 pakka og hann er að finna í [fab.3dshapes](https://gitlab.fabcloud.org/pub/libraries/electronics/kicad/-/tree/master/fab.3dshapes?ref_type=heads){:rel="nofollow"} möppunni.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oObZeXe6Ba8?si=JKZMDKGF4MC7nERU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Tq6v1HqWmm0?si=C19lDOqreYJuy_By" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/zJNpHpuvNjk?si=SgkCuuMarxF00Asz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/3f6FUTbL8kg?si=4sv85FMv9fVWgap_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/So58u1hxy98?si=V4pxgQ5LNr_yGIGf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Til að tengja brettið ykkar við tölvuna þurfið þið [serial UPDI-3 pinna](https://academy.cba.mit.edu/classes/embedded_programming/index.html) millistykkið frá Neil ([teikning](images/t412/hello.serial-UPDI.3.png), [tilbúið bretti](images/t412/hello.serial-UPDI.3.jpg), [traces](images/t412/hello.serial-UPDI.3.traces.png), [traces+exterior](images/t412/hello.serial-UPDI.3.traces_exterior.png), [interior](images/t412/hello.serial-UPDI.3.interior.png)) við [FTDI snúru](https://www.sparkfun.com/products/9718) eins og á myndinni hér fyrir neðan. Passið upp á að litaröðin á vírunum sé rétt:

![FTDI snúra](images/ftdi.jpg)

## Næsta vika

Vika 3: [Fræsing](3-fraesing.md)
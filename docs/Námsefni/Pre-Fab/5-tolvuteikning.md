# Tölvuteikning

<iframe width="560" height="315" src="https://www.youtube.com/embed/ui6cdToG6xk?si=BUV4XAQG7QXB2OLv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

*Föstudagurinn 22. nóvember 2024 kl. 14:10*

Eitt af því sem Fab Academy nemendur eiga í mestum vandræðum með, en gefur þeim jafnframt mesta frelsið þegar þeir ná tökum á því, er tölvuteikning. Við skulum taka hana fyrir í þessari viku. 

Það er frábært að læra að nota öll tækin í smiðjunni, en þú getur samt ekki smíðað allt sem þér dettur í hug fyrr en þú getur teiknað það. Eftir því sem þú byggir upp teiknihæfnina þína verða tækin í smiðjunni öflugri og þú getur gert fleiri hugmyndir að veruleika.

## FreeCAD

Í þessari viku finnst mér mikilvægast að kynna málsetningar og skorður fyrir ykkur í CAD forriti. Þetta eru nauðsynleg verkfæri til að teikna nákvæma hluti og það tekur tíma að ná tökum á þeim.

### Stillingar

Góðar stillingar í FreeCAD:

- Mér finnst þægilegt að [stilla músina svona](https://github.com/user-attachments/assets/92cc200b-430b-4a10-b6b7-a378fe45ee48).
- Þið getið [stækkað punkta í skissum svona](images/marker-size-no-audio.mp4), svo að það sé auðveldara að smella á þá.

Ég nota "Blender mús" í FreeCAD:

![Blender mouse](images/blender-mouse.png)

Það eru til fleiri stillingar, t.d. touchpad til að teikna í fartölvu:

<iframe width="560" height="315" src="https://www.youtube.com/embed/XjdqJNcu2XA?si=lD_X31Rnz1UatJcd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*Ég mæli með að horfa á þetta myndband til að kynnast því hvernig maður hreyfir sig í þrívíðu rúmi í FreeCAD.*

[Fleiri músarstillingar](https://wiki.freecad.org/Mouse_navigation)

### Skorður og málsetningar

Hér eru örstutt myndbönd að hætti Neil, sem útskýra skorður (constraints) og málsetningar (dimensions) í tvívíðum skissum:

![Sketch icon](https://wiki.freecad.org/images/f/f1/Sketcher_NewSketch.svg)
[Sketch and Extrude](images/sketch-extrude.mp4)
![Extrude icon](https://wiki.freecad.org/images/3/38/Part_Extrude.svg)

![Dimension icon](https://wiki.freecad.org/images/2/24/Sketcher_Dimension.svg)
[Dimensions](images/dimensions.mp4)

![Coincident icon](https://wiki.freecad.org/images/1/18/Sketcher_ConstrainCoincidentUnified.svg)
[Coincident Constraint](images/coincident-constraint.mp4)

![Horizontal-vertical icon](https://wiki.freecad.org/images/b/b7/Sketcher_ConstrainHorVer.svg)
[Horizontal-Vertical Constraint](images/horizontal-vertical-constraint.mp4)

![Parallel icon](https://wiki.freecad.org/images/1/1d/Sketcher_ConstrainParallel.svg)
[Parallel Constraint](images/parallel-constraint.mp4)

![Perpendicular icon](https://wiki.freecad.org/images/f/f9/Sketcher_ConstrainPerpendicular.svg)
[Perpendicular Constraint](images/perpendicular-constraint.mp4)

![Tangent icon](https://wiki.freecad.org/images/e/ea/Sketcher_ConstrainTangent.svg)
[Tangent Constraint](images/tangent-constraint.mp4)

![Tangent icon](https://wiki.freecad.org/images/e/ea/Sketcher_ConstrainTangent.svg)
[Collinear Constraint](images/collinear-constraint.mp4)

![Equal icon](https://wiki.freecad.org/images/b/b9/Constraint_EqualLength.svg)
[Equal Constraint](images/equal-constraint.mp4)

![Symmetric icon](https://wiki.freecad.org/images/0/08/Sketcher_ConstrainSymmetric.svg)
[Symmetric Constraint](images/symmetric-constraint.mp4)

![Block icon](https://wiki.freecad.org/images/b/be/Sketcher_ConstrainBlock.svg)
[Block Constraint](images/block-constraint.mp4)

Til að hætta í skipun er nóg að hægrismella hvar sem er í skissunni.

Verkefnið ykkar er að teikna helming af handfangi fyrir stimpil í Sketcher og nota síðan Revolve til að búa til þrívíðan hlut:

![Stimpilhandfang - skissa](images/stimpilhandfang-skissa.png)
*Ég mæli með að teikna á framplanið (XZ planið). Það þarf síðan að gera smátrikk til að fá samfellda hálfkúlu ofan á handfangið. Teiknið lárétta línu út frá efsta boganum og gerið bogann tangent við hana. Til þess að þessi aukalína verði ekki tekin með í Revolve skipuninni þá þarf að [breyta henni í hjálparlínu](https://wiki.freecad.org/Sketcher_ToggleConstruction).*

Eitt ráð: Þegar þið sláið inn tölu getið þið valið töluna með músinni og skrollað til að hækka hana og lækka. Þið getið líka slegið inn reikningsdæmi og látið FreeCAD leysa úr þeim fyrir ykkur.

![Stimpilhandfang](images/stimpilhandfang.png)
*Notið Revolve skipunina í Part workbench til að breyta tvívíðu skissunni í þrívíðan hlut.*

Ef þú vilt þrívíddarprenta stimpilhandfangið:

1. Smelltu á módelið og farðu í File -> Export.
2. Þá kemur upp gluggi til að gefa módelinu nafn. Undir Files of Type skaltu velja 3D Manufacturing Format (*.3mf), sem er efst á listanum.

Ef þú vilt birta módelið á heimasíðu:

1. Smelltu á módelið og farðu í File -> Export.
2. Þá kemur upp gluggi til að gefa módelinu nafn. Undir Files of Type skaltu velja WebGL file (*.html).

### CAM workbench

FreeCAD er ansi öflugt forrit! Það er hægt að nota CAM workbench í FreeCAD til að útbúa G-kóða til að stýra ShopBot fræsinum út frá tvívíðri teikningu eða þrívíðu módeli:

<video controls width=100%>
        <source src="https://files.svavar.cc/fab/freecad-cam-workbench.mp4" type="video/mp4">
</video>

VCarve Pro verður alltaf þægilegast. En CAM workbench í FreeCAD og CAM umhverfið í Fusion geta gert allt það sama og meira til. Þessi forrit geta tekið við þegar þið eruð tilbúin í að fara upp á næsta stig. [Jón Þór Sigurðsson](http://fabacademy.org/2018/labs/fablabreykjavik/students/jonthor-sigurdsson/about.html) veit allt um Fusion CAM.

## Inkscape

Inkscape er eitt gagnlegasta og mest notaða forritið í hverri Fab Lab smiðju. Ef þið þekkið það vel þá getið þið sleppt þessari æfingu.

Teiknið einlitt lógó til að nota á Fab Academy síðunum ykkar. Lógóið þarf að vera nógu einfalt til þess að sjást við hliðina á nafni síðunnar í vafraflipa. Þið getið byggt lógóið á teikningu, ljósmynd, skammstöfuninni þinni eða einhverju öðru sem ykkur dettur í hug. Notið myndböndin hér fyrir neðan eða aðrar leiðbeiningar sem þið finnið á netinu til þess að hjálpa ykkur að teikna.

Þið getið síðan laserskorið stimpil með lógóinu ef þið eruð í stuði. Ef þið eigið ekki til gúmmí til að laserskera, þá get ég póstlagt sýnishorn til ykkar.

![Hundastimpill](images/hundastimpill.jpg)

### Fabmennt

[Hafey Hallgrímsdóttir](https://fabacademy.org/2023/labs/isafjordur/students/hafey-hallgrimsdottir/About_me.html) hefur útbúið bestu leiðina til að læra að teikna í Inkscape fyrir vínylskurð og laserskurð. Ef þið farið í gegnum öll verkefnin, þá verðið þið sterk í Inkscape:

[FABMENNT](https://www.fabmennt.com/){ .md-button }

Við notum efnið frá Hafeyju mikið, eins og má sjá undir Námsefni -> Grunnskóli.

Hér er fleira sem gæti gagnast ykkur:

### Kynning

<iframe width="560" height="315" src="https://www.youtube.com/embed/rFYQW2DCM2I?si=cjsyLpGYfjVR_OP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Lógó

=== "Custom text"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BI8Nw69Vn5o?si=C3P0JmsuHpzZxg-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
=== "Tech letters"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/bKXhceZ074I?si=YPfTefsQ9ZEcDfFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
=== "Initials"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/tw6hWb58qp0?si=zY0rWEtANh56Ph4i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
=== "Elegant"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/T8zqiNTwQ1I?si=JXZyeQCalsI1xDyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
=== "Shapes"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HeRAFSX2vaM?si=E6WS9qFvl7I4AI1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
=== "Strokes"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/UEnMwZuqr3o?si=LGe2-wkjX-d_68s_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
=== "Manual image trace"
    <iframe width="560" height="315" src="https://www.youtube.com/embed/s-kPg4vYKfk?si=zBMdRy5-0LTgZxbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Stutt ráð

Hér eru örstutt myndbönd sem fara yfir Inkscape verkfæri á ofurhraða. Þið getið athugað hvort eitthvert þeirra gagnist ykkur í lógóhönnuninni. Hugsanlega fara þau of hratt í hlutina.

[Unique typography](https://youtube.com/shorts/em8nQeE5DJw?si=VTxHrGTx2De6PPXO)

[Perspective text](https://youtube.com/shorts/xqJQoxrLJak?si=QxAKnAELnC6rmQ0t)

[Rotate pattern](https://youtube.com/shorts/uJny3tSsH-4?si=oLoyM83aODeDYN8v)

[Object division](https://youtube.com/shorts/6jVaVTWy6V4?si=liCpuGmNC06gLmWK)

[Blur text effect](https://youtube.com/shorts/z_I19C8CeVM?si=yiZrHenIUEQ3MiiO)

[Manual image trace](https://youtube.com/shorts/9ubDEmB1WIs?si=OJIgRpgouonT2n9t)

[Round selected corners](https://www.youtube.com/shorts/mEf7hbSWMuU)

[Sunburst](https://youtube.com/shorts/w9TJbzb1QaE?si=MVPyLAdqKGhxyWuE)

[3D cubes](https://youtube.com/shorts/mRVhNyXCDUQ?si=KCQneC4g3Fjd_wfu)

[How to round corners](https://youtu.be/WX65w47BmSA?si=EYEa0cCDWuW3X6d-)

[Smooth paths after drawing](https://www.youtube.com/watch?v=EFHLF1hcrjg)
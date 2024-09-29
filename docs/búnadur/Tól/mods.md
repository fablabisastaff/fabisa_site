# Mods Project

Mods er viðmót sem við notum til að vinna með og stýra tækjum.

[Hlekkur á mods CE](https://modsproject.org){:rel="nofollow"}

![mods](https://gitlab.fabcloud.org/pub/project/mods/-/raw/master/mods.webp)

## Leiðbeiningar á ensku



## `mods` Community Edition

Just like `mods`, but cooler :sunglasses:

### What is `mods`?

[mods CE](https://modsproject.org){:rel="nofollow"} (community edition) is a fork of [CBA mods research project](https://gitlab.cba.mit.edu/pub/mods){:rel="nofollow"}. `mods` is a modular cross platform tool for fablabs. It is based on independent but interrelated modules. `mods` could potentially be used for CAD, CAM, machine control, automation, building UI, read input devices, react to to physical models, and much more. The possibilies are endless.

The goal of the community edition is to provide documentation, support and help the community engage in the project and foster the development/exchange of new modules.

### Usage

Run direcly from https://modsproject.org

**WebUSB** and **WebSerial** API's (ability to operate the machines from the browser) are supported in Chrome for Linux, macOS and Windows. **Not supported by iOS**. Other browsers based in Chrome might be also supported. A couple notes on that:

- Make sure you have the latest version of Google Chrome. Some older version are giving errors.
- Pause ad-blockers if you pretend to operate the machines using mods.

**WebUSB in Windows:** you need to **install Zagid utility** https://zadig.akeo.ie/. Connect the machine you want to use. In Zagid utility, select and **replace the machine driver** with WinUSB driver.

To use the **Modela MDX** with Linux, Mac and Windows, it is recommended to make this [serial cable (DB25 to DB9)](https://fabacademy.org/archives/2015/doc/millingPCBs.html){:rel="nofollow"} and [serial to USB adapter.](https://www.startech.com/en-us/cards-adapters/icusb232v2){:rel="nofollow"}

### Local Installation (optional)

Installing locally mods is only recommended for offline ussage or local development. WebUSB requires https to operate.

- Step 1: Clone the `mods` repository: `git clone https://gitlab.fabcloud.org/pub/project/mods.git`
- Step 2: Install http server `npm install http-server` and create a localhost SSL certificate

After that, to run `mods` locally

- Run `bash mods` in a terminal inside the `mods` directory. It will start the https server and open a web browser with mods https://localhost.8081 in it.  


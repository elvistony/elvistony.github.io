---
layout: single
title:  "Installing Linux on your System"
date:   2020-11-01 11:50:18 +0530
categories: Guides Linux
tags: DIY Linux Installation
breadcrumbs: true
toc: true 
toc_sticky: true
permalink : /posts/:categories/:title/
---
_A Simple Guide on Installing KDE Neon on your System. If you are a programmer, Linux is for you._

Installing Linux is pretty straight forward almost as easy as installing Windows.In this guide I'll be helping y'all install  a linux flavour based on Ubuntu.

{: .notice--warning}
KDE neon is the intersection of these needs using a stable Ubuntu long-term release as its core, packaging the hottest software fresh from the KDE Community ovens.


Before getting started with the Installation,We need to know a tiny difference of Linux and Windows Installation is the distribution of the System Files.

In Windows, the system files are stored in the Windows-Basic-Partition (Local Disk C:) in `C:/Windows` and the User files in  `C:/Users/`

In Linux, the system files are stored in the Root Drive in Global Root `/` and the User files in `/home`


## Making a Bootable USB

Now to get started, We must first make a Bootable USB using a tool. Based on what OS you currently have, we choose a suitable tool
<div class="w3-row w3-margin">
    <div class="w3-half w3-card-1 w3-center">
        <img src="https://rufus.ie/pics/rufus-128.png" class="fithalf w3-image imgModal w3-fluid" style="width:111px;">
        <p class="w3-block w3-gray">Rufus</p>
        <a class="w3-block btn btn--success" href="https://rufus.ie/">Download (Windows)</a>
        <p class="w3-tiny">(Recommended)</p>
    </div>
    <div class="w3-half w3-card-1 w3-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/UNetbootin_icon.svg/924px-UNetbootin_icon.svg.png"  style="width:100px;" class="fithalf imgModal w3-image">
        <p class="w3-block w3-gray">UNetbootin</p>
        <a class=" w3-block btn btn--warning" href="https://unetbootin.github.io/">Download (Windows | Linux)</a>
    </div>
</div>

## Preflight Check

Before plunging into the world of Linux, we need to ensure we have enough storage for the Installation. If you're on windows, you could use the Disk Partition utility to Save up some space for linux.

Navigate to `Control Panel -> Disk Management`.  
If you're on Windows 8 or 10, you could search it directly using Search/Cortana.

//figure here

{: .notice--danger}
Note: This step is risky No responsibility will be taken if any Data is lost or your current OS is not Booting.

{: .notice--success}
Ask your Tech Buddy to help you out with this step.

Now, the risky business, Create an Unformated partition by either Shrinking an existing partition or deleting an entire partition(Deleting, will cause all your data on that partition to be lost).
We plan to install Linux as separate partitions, but is irrelevant at this step.

Linux can be minimally installed on 10GB storage, but I'd recommend a minimum of 20GB and a maximum of 200GB for Linux. If you have ample storage (250GB or more), I'll help you create a Shared Partition that's accessible to both Windows and Linux (stay tuned...).

{: .notice--warning}
Tip: Remember the Size of the partition as it helps in identifying it in the Linux setup. After preparing an Unformated partition, We are now ready for the Next Step.

## Enabling USB Boot

Next, We need to enable the USB-Boot Option in the BIOS.



It is fairly simple, Plug-in your USB Device into the system and reboot your system while pressing the `F12` or `F2` For some Systems, these Keys might change.

If u face dificulties checkout the [Hotkeys List](https://www.disk-image.com/faq-bootmenu.htm).

Disable Secure Boot. Now some system have been known to face issues booting to Windows after Toggling this option. So, it's better to Try booting to Windows (with Secure Boot OFF) Toggle the Secure Boot Back ON, if u face issues.

Assuming there was no Issues, Re enter the BIOS. using the keys mentioned in your system (on the right side of your bios screen), push the USB Boot Entry `up` the Boot Priority.

## Booting from USB

While Booting (after setting USB Boot Priority),


We Select the Install KDE option. and Follow the Wizard.
You will boot to a GUI Environment, Plasma _(psst, this is a sneak peek to the real deal,hehe)_. Click the icon Install KDE and follow the Wizard. 
Once you reach a page asking where to Install,


Select: `Manual Installation` . After a few moments, all the available partitions are seen as a list.

Locate the `Unformated partition` (that match the size we allocated in windows multiplied by 1024) and select `Mount Point: \` with `30%` of the Unformated partiton (do the math and select the number of Megabytes 1GB=1024MB). After setting /, click the left over `70%` and set `Mount Point: \home`

You may set Format partitionbut that's optional. Select `Partition type: ext4` for best performance.
Continue the Wizard, and wait for the prompt to Reboot.

## Taking it for a spin!

Well, if you reached this step, You have installed Linux (hopefully). So Fireup the System and Select KDE from the Grub Boot Menu. Although, I'd recommend testing whether Windows works first and then Rebooting into Linux. Hehe just for a last precaution.


If you don't find Windows, dont fret, its uncommon but definitely possible that Linux didn't detect it properly. So Head over to Linux, Log-in to the system,
Press `Ctrl+alt+T` that should open a terminal and that type `sudo update-grub` and type in your password. This should allow Grub to re-scan your Drive to locate missing OSes.

Have a great time in Linux, Stay Tuned.
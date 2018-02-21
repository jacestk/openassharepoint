# openassharepoint
Open all your Microsoft Office files from nextCloud/OwnCloud webinterface directly on Office Word, Excel, ...
Let you save from Office app.
Usefull if you don't have NextCloud client to sync your data.
No use of downloading, copy and upload files.
Tested with >IE11 & FireFox & Chrome

## Information for local and no secure nextCloud server (tested on Win7Pro)
Change these values in regedit:
> [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\WebClient\Parameters]
> "BasicAuthLevel"=dword:00000002

> [HKEY_CURRENT_USER\Software\Microsoft\Office\14.0\Common\Internet]
> "BasicAuthLevel"=dword:00000002
> "OpenDocumentsReadWriteWhileBrowsing"=dword:00000001

Set your web server as "trusted sites" in > IE11 properties

## TODO
### Admin pannel to add/chage file types (other apps too)
### ~~Firefox & Chrome compat~~

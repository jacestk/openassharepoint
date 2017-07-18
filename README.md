# openassharepoint
Open Microsoft Office files from nextCloud/OwnCloud webinterface on >IE11

## Information for local and no secure nextCloud server
Change these values in regedit:
> [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\WebClient\Parameters]
> "BasicAuthLevel"=dword:00000002

> [HKEY_CURRENT_USER\Software\Microsoft\Office\14.0\Common\Internet]
> "BasicAuthLevel"=dword:00000002
> "OpenDocumentsReadWriteWhileBrowsing"=dword:00000001

Set your web server as "trusted sites" in > IE11 properties

## TODO
### Admin pannel to add/chage file types (other apps too)
### Firefox & Chrome compat

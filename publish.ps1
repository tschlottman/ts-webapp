$source = 'C:\Workspace\ts-webapp\docs\browser'

Get-ChildItem $source -file | move-item -Destination {$_.Directory.Parent.Fullname}
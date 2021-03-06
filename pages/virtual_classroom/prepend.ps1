function insert-content {
    param ( [String]$Path )
    process {
        $( , $_; Get-Content $Path -ea SilentlyContinue) | Out-File $Path
    }
}

$files = get-childitem .

foreach ($file in $files) {
    try {
        '<template>' | insert-content $file
    }
    catch {
    }
}

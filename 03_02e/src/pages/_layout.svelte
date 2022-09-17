<script>
    import { isActive, url } from "@roxi/routify"
</script>
<html lang="en">
<head>
    <style>
        .active { font-weight: bold }
    </style>
</head>

<body>
    <div>
        <nav>
            <div><a href={$url('./')}>Home</a> </div>
            <div class:active={$isActive('./about')} ><a href={$url('./about')}>About</a> </div>
            <div class:active={$isActive('./contact')}><a href={$url('./contact')}>Contact</a> </div>
        </nav>
    </div>
    <slot />

</body>
</html>
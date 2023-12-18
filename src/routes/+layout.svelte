<script>
    import '../app.css';
    import '../fonts.css';
</script>

<svelte:head>
    <title> S'Eating Plan </title>
</svelte:head>

<div class="app">
    <h1 class="logo text-secondary font-title"> S'eating Plan </h1> 
    
    <div class="banner">
        <a href="/persons" class="font-title"> Personnes </a>
        <hr />
        <a href="/tables" class="font-title"> Table </a>
    </div>
    
    <div class="page">
        <slot/>
    </div>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 100%;
    }

    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--gap-5);

        background-color: var(--primary);

        width: 100%;
        height: 48px;
    }

    .banner > a {
        color: white;
        text-decoration: none;
    }

    .banner > hr {
        height: 50%;
        margin: 0;
    }

    .page {
        flex-grow: 2;
        padding: var(--gap-4);
    }
</style>
<template>
    <header class="header">
        <!-- Logo section -->
        <div class="logo">
            <img src="@/assets/logo.svg" alt="Logo" />
        </div>

        <!-- Navigation menu -->
        <nav class="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <!-- Button on the right -->
        <button class="button-right">Login</button>
    </header>
</template>

<script setup>
// Importing any necessary composables or components
</script>

<style scoped>
.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: var(--color-background-header);
    color: var(--color-text);
}

.logo img {
    height: 50px;
    /* Example size, adjust as needed */
}

.menu ul {
    display: flex;
    list-style: none;
    gap: 20px;
    color: var(--color-text-dark)
}

.menu ul li a {
    text-decoration: none;
    color: var(--color-text);
    font-weight: 500;
    color: var(--color-text-dark)
}

.button-right {
    padding: 0.8rem 1.6rem;
    border: none;
    background-color: var(--color-button-background);
    color: var(--color-button-text);
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
}

@media (min-width: 1024px) {
    .header {
        padding: 1rem 4rem;
    }

    .menu ul {
        gap: 30px;
    }

    .button-right {
        padding: 1rem 2rem;
    }
}
</style>
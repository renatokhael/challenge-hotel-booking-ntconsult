<template>
    <section class="hero">
        <div class="hero-content">
            <h1>O lugar perfeito pra sua viagem especial</h1>
            <p>Confira casas de temporada incríveis pelo mundo</p>
            <button class="hero-button">Encontre o seu</button>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
    position: relative;
    height: 400px;
    /* Ajuste conforme necessário */
    background: url('https://q-xx.bstatic.com/xdata/images/xphoto/2880x868/346457038.jpeg?k=7cac75d50b046a991ab7993e9cac89d451d4cc371f108d0fe89d84ba1fc85f19&o=') no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

.hero-content {
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparente para melhor leitura */
    padding: 2rem;
    border-radius: 10px;
}

.hero h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
}

.hero-button {
    padding: 0.8rem 1.6rem;
    border: none;
    background-color: var(--color-button-background);
    color: white;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.hero-button:hover {
    background-color: #0056b3;
}
</style>
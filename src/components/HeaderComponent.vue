<template>
  <header class="header">
    <div class="content-header" @click="$router.push({ name: 'home' })">
      <img src="@/assets/logo.svg" alt="Logo" width="32" />
      <span>HotelBooking.</span>
    </div>
  </header>
</template>

<script setup></script>

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

.content-header {
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  cursor: pointer;
}

.content-header span {
  margin-left: 10px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -1px;
}

.menu ul {
  display: flex;
  list-style: none;
  gap: 20px;
  color: var(--color-text-dark);
}

.menu ul li a {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
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

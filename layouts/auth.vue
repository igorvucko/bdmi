<template>
    <div class="auth-layout">
        <div class="auth-content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.auth-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f2f2f2;
}

.auth-content {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
}
</style>

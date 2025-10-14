<script setup>
import { onMounted, onUnmounted, ref, } from 'vue'
import typed from "typed.js"
// ✅ Props you can pass from parent
const props = defineProps({
    subtitle: { type: String, default: 'Powerful tools to boost your productivity and reach.' },
    primaryText: { type: String, default: 'Get Started' },
    secondaryText: { type: String, default: 'Learn More' }
})

const typedTarget = ref(null)
let typedInstance = null

onMounted(() => {
    typedInstance = new typed(typedTarget.value, {
        strings: [
            'Learn to code, Build your future.',
            'Code smarter, Create more.',
            'Turn your ideas into web projects.'
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    })
})

onUnmounted(() => {
    if (typedInstance) typedInstance.destroy()
    console.log("aaaa")
})

</script>

<template>

    <section class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1> <span ref="typedTarget"></span></h1>
            <p>{{ subtitle }}</p>
            <div class="hero-buttons">
                <button class="btn-primary">{{ primaryText }}</button>
                <button class="btn-secondary">{{ secondaryText }}</button>
            </div>
        </div>

    </section>

</template>

<style scoped>
.hero {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('../../assets/backgroundimage1.jpg') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

}

/* dark overlay to help text stand out */
.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(10, 10, 20, 0.411),
            rgba(10, 10, 20, 0.7));
    z-index: 1;
}

/* text container */
.hero-content {
    position: relative;
    z-index: 2;
    color: #fff;
    text-align: center;
    max-width: 600px;
    padding: 0 1rem;
}

/* headline */
.hero-content h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;

}


/* subtext */
.hero-content p {
    font-size: 1.2rem;
    color: #d0d0d0;
    margin-bottom: 2rem;
}

/* buttons */
.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn-primary {
    background: linear-gradient(90deg, #007bff, #00b3ff);
    color: #fff;
    border: none;
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
}

.btn-secondary {
    background: transparent;
    border: 2px solid #00b3ff;
    color: #00b3ff;
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
}

.btn-primary:hover,
.btn-secondary:hover {
    transform: scale(1.05);
    transition: 0.2s ease;
}

/* Responsive */
@media (max-width: 768px) {
    .hero {
        height: 90vh;
        background-position: center;
    }

    .hero-content {
        padding: 0 1.5rem;
    }

    .hero-content h1 {
        font-size: 2rem;
        line-height: 1.3;
    }

    .hero-content p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    .hero-buttons {
        flex-direction: column;
        gap: 0.8rem;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
        font-size: 1rem;
    }
}
</style>

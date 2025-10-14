<script setup>
// Import Vue's reactive reference feature
import { ref } from 'vue'

// Import the logo component
import Navbarlogo from './navbarlogo.vue'

// Define props expected from the parent component
// - "name" (optional, just identifies this component)
// - "links" (required) → an array of link objects with { src, href, text }
const props = defineProps({
  name: 'navlist',
  links: {
    type: Array,
    required: true,
  },
})

// Reactive state variable that tracks whether the side navigation is open (mobile)
const isMenuOpen = ref(false)
const isOpen = ref(false)

// Function to toggle the sidenav on and off (for small screens)
const toggleSidenav = () => {
  isMenuOpen.value = !isMenuOpen.value
  isOpen.value = !isOpen.value
  // console.log(isMenuOpen.value) // for debugging
}
</script>

<template>
  <div class="navbar">
    <!--  Logo Section -->
    <Navbarlogo />

    <!--  Hamburger Menu Button (visible only on small screens) -->
    <button class="hamburger" :class="{ open: isOpen }" @click="toggleSidenav">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!--  Navigation Links (turns into a side menu on mobile) -->
    <ul :class="{ 'sidenav-active': isMenuOpen }">
      <!-- Render each navigation link dynamically -->
      <li v-for="link in links" :key="link.text">
        <a :href="link.href">
          <img :src="link.src" />
          {{ link.text }}
        </a>
      </li>

      <!--  Extra Buttons (visible only on mobile) -->
      <div class="registration-mobile">
        <button><a href="#testing">log in</a></button>
        <button><a href="#testing">log in</a></button>
      </div>
    </ul>

    <!-- Extra Button (visible only on desktop) -->
    <div class="registration-desktop">
      <button><a href="#testing">Get started</a></button>
    </div>
  </div>
</template>

<style scoped>
/* ================================
    NAVBAR STYLING (DESKTOP VIEW)
   ================================ */
.navbar {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vh 20px;

  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background: rgba(25, 25, 35, 0.678);
  /* semi-transparent dark tone */
  border-bottom: 1px solid rgba(255, 255, 255, 0.137);



}

/* =====================================
   NAVIGATION LINKS (DESKTOP LAYOUT)
   ===================================== */
.navbar ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Each link style */
.navbar a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #d5fded;
  text-decoration: none;
  font-weight: bold;
  padding: 0;
  transition: all 0.4s ease;
}

/* Hover animation for links */
.navbar ul a:hover {
  color: rgba(255, 255, 255, 0.618);
  transform: scale(1.08);
}

/* Adjusts the size of link images/icons */
.navbar img {
  height: 20px;
}

/* =====================================
    DESKTOP REGISTRATION BUTTON
   ===================================== */
.registration-desktop {
  display: flex;
  gap: 8px;
}

/* Default desktop button styling */
.registration-desktop button {
  all: unset;
  /* remove default button styles */
  cursor: pointer;
  border-radius: 0.8rem;
  padding: 0.5rem 0.5rem;
  transition: all 0.3s ease-in-out;

  /* Transparent button style effects  */
  background: linear-gradient(90deg, #007bff, #00b3ff);
}

/* Hover effect for desktop buttons */
.registration-desktop button:hover {
  transform: scale(1.05);
  transition: 0.2s ease;
}

/* Hide mobile-only elements by default */
.registration-mobile,
.hamburger {
  display: none;
}

/* ================================
    MOBILE STYLING (<=768px)
   ================================ */
@media (max-width: 768px) {

  /* Hide the desktop registration button */
  .registration-desktop {
    display: none;
  }

  /* Turn nav list into a side drawer menu */
  ul {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 60vw;
    z-index: 1002;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* Glassmorphism setup */
    background: rgb(15, 15, 30);
    /* darker opaque */
    backdrop-filter: none;

    border-right: 1px solid rgba(255, 255, 255, 0.1);
    color: #f5f5f5;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  /* When active, slide the sidenav into view */
  ul.sidenav-active {
    transform: translateX(0);
    /* Force white background */
  }

  /* Hamburger icon styling */
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3vh;
    height: 3vh;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    color: white;
    z-index: 1003;
    /* stays above sidenav */
  }

  /* The three hamburger lines */
  .hamburger span {
    width: 2rem;
    height: 3px;
    background-color: azure;
    border-radius: 10px;
    /* this is to make a very good animation for the Hamburger menu */
    transition: all 0.4s ease-in-out;
  }

  /* ================================
   this is to make the hamburger to X when clicked 
   ================================ */

  .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translateY(6px) translateX(6px);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translateY(-9px) translateX(6px);
  }

  /* Mobile registration buttons (below links) */
  .registration-mobile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  /* Mobile button design */
  .registration-mobile button {
    all: unset;
    padding: 10px 20px;
    background: linear-gradient(90deg, #007bff, #00b3ff);
    color: white;
    border-radius: 5px;
    text-align: center;
  }
}
</style>
